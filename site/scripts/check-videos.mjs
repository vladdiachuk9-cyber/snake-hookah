import { chromium } from "playwright";

const BASE = "http://localhost:3000";
const SLUGS_WITH_VIDEO = [
  "kalyan-snake-hookah-spiral-walnut-green",
  "kalyan-snake-hookah-spiral-wenge",
  "kalyan-snake-hookah-spiral-sucupira-cognac",
  "kalyan-snake-hookah-spiral-tigerwood",
  "kalyan-snake-hookah-spiral-walnut-white",
  "kalyan-snake-hookah-spiral-sucupira-brown",
];

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });

const allErrors = [];
page.on("pageerror", (e) => allErrors.push(`[pageerror] ${page.url()} :: ${e.message}`));
page.on("console", (msg) => {
  if (msg.type() === "error" || msg.type() === "warning") {
    allErrors.push(`[console.${msg.type()}] ${page.url()} :: ${msg.text()}`);
  }
});
page.on("requestfailed", (req) => {
  allErrors.push(`[requestfailed] ${req.url()} :: ${req.failure()?.errorText}`);
});
page.on("response", (res) => {
  if (res.status() >= 400) allErrors.push(`[http ${res.status()}] ${res.url()}`);
});

for (const slug of SLUGS_WITH_VIDEO) {
  await page.goto(`${BASE}/ua/products/${slug}`, { waitUntil: "networkidle" });
  await page.waitForTimeout(800);

  const btn = page.locator("button[aria-label='360°']");
  const btnCount = await btn.count();
  if (btnCount === 0) {
    console.log(`FAIL ${slug}: no 360° thumbnail button found`);
    continue;
  }
  await btn.click();
  await page.waitForTimeout(1200);

  const info = await page.evaluate(() => {
    const v = document.querySelector("video");
    if (!v) return { found: false };
    return {
      found: true,
      src: v.currentSrc,
      paused: v.paused,
      readyState: v.readyState,
      networkState: v.networkState,
      videoWidth: v.videoWidth,
      videoHeight: v.videoHeight,
      duration: v.duration,
      error: v.error ? { code: v.error.code, message: v.error.message } : null,
      currentTime: v.currentTime,
    };
  });
  await page.waitForTimeout(800);
  const info2 = await page.evaluate(() => {
    const v = document.querySelector("video");
    return v ? v.currentTime : null;
  });

  const advancing = info2 !== null && info.currentTime !== null && info2 > info.currentTime;
  console.log(
    `${slug}: found=${info.found} paused=${info.paused} readyState=${info.readyState} networkState=${info.networkState} dims=${info.videoWidth}x${info.videoHeight} duration=${info.duration} error=${JSON.stringify(info.error)} advancing=${advancing} (t1=${info.currentTime} t2=${info2})`,
  );
  await page.screenshot({ path: `verify-shots/video-${slug}.png` });
}

await browser.close();

console.log("\n--- all console/network errors across all pages ---");
console.log(allErrors.length ? allErrors.join("\n") : "none");
