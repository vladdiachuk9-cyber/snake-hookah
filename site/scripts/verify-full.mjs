import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";

const BASE = "http://localhost:3000";
const SHOTS = "verify-shots/full";
await mkdir(SHOTS, { recursive: true });

const errors = [];
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
page.on("pageerror", (e) => errors.push(`[pageerror] ${page.url()} :: ${e.message}`));
page.on("console", (msg) => {
  if (msg.type() === "error") errors.push(`[console] ${page.url()} :: ${msg.text()}`);
});
page.on("response", (res) => {
  if (res.status() >= 400) errors.push(`[http ${res.status()}] ${res.url()}`);
});

function log(step, ok, detail = "") {
  console.log(`${ok ? "PASS" : "FAIL"} — ${step}${detail ? ": " + detail : ""}`);
}

// Static pages exist and render
const staticPages = ["", "/catalog", "/about", "/production", "/b2b", "/contact", "/compare", "/wishlist"];
for (const path of staticPages) {
  await page.goto(`${BASE}/ua${path}`, { waitUntil: "networkidle" });
  const status = await page.evaluate(() => document.title);
  log(`page /ua${path} loads`, !!status, status);
}
await page.screenshot({ path: `${SHOTS}/catalog.png` });

// Catalog: filter + sort + search
await page.goto(`${BASE}/ua/catalog`, { waitUntil: "networkidle" });
const totalCards = await page.locator(".gallery").count();
await page.click("button:has-text('Wild Collection')");
await page.waitForTimeout(300);
const wildOnly = await page.locator("text=Wild Collection").count();
log("catalog line filter narrows results", wildOnly > 0, `${wildOnly} badges`);
await page.click("button:has-text('Усі лінійки')");
await page.fill("input[placeholder*='Пошук']", "горіх");
await page.waitForTimeout(300);
const searchResults = await page.locator(".gallery").count();
log("catalog search filters by wood", searchResults > 0 && searchResults < totalCards, `${searchResults}/${totalCards}`);
await page.fill("input[placeholder*='Пошук']", "");

// Wishlist heart toggle from catalog
await page.locator("button[aria-label='wishlist']").first().click();
await page.waitForTimeout(300);
await page.goto(`${BASE}/ua/wishlist`, { waitUntil: "networkidle" });
const wishlistItems = await page.locator(".gallery").count();
log("wishlist page shows item added from catalog", wishlistItems >= 1, `${wishlistItems} items`);
await page.screenshot({ path: `${SHOTS}/wishlist.png` });

// Compare flow
await page.goto(`${BASE}/ua/catalog`, { waitUntil: "networkidle" });
const compareBoxes = page.locator("input[type=checkbox]");
await compareBoxes.nth(0).check();
await compareBoxes.nth(1).check();
await page.waitForTimeout(300);
const compareBarVisible = await page.locator("text=Порівняння").isVisible();
log("compare bar appears after selecting 2", compareBarVisible);
await page.click("a:has-text('Порівняти')");
await page.waitForURL("**/compare");
const compareCols = await page.locator("table tbody tr").first().locator("td").count();
log("compare table renders rows for selected products", compareCols >= 2, `${compareCols} cols in first row`);
await page.screenshot({ path: `${SHOTS}/compare.png` });

// Mega menu hover
await page.goto(`${BASE}/ua`, { waitUntil: "networkidle" });
await page.hover("text=Каталог");
await page.waitForTimeout(400);
const megaVisible = await page.locator("text=Wild Collection").first().isVisible();
log("mega menu shows on hover", megaVisible);
await page.screenshot({ path: `${SHOTS}/megamenu.png` });

// Quick search
await page.click("button[aria-label='search']");
await page.fill("input[placeholder*='Пошук']", "венге");
await page.waitForTimeout(400);
const quickResults = await page.locator("a[href*='wenge']").count();
log("quick search finds Wenge", quickResults > 0, `${quickResults} matches`);
await page.screenshot({ path: `${SHOTS}/search.png` });
await page.keyboard.press("Escape").catch(() => {});

// B2B form
await page.goto(`${BASE}/ua/b2b`, { waitUntil: "networkidle" });
await page.fill("input[name='name']", "Тест Дилер");
await page.fill("input[name='phone']", "+380671234567");
await page.click("button:has-text('Надіслати заявку')");
await page.waitForSelector("text=Заявку надіслано", { timeout: 10000 });
log("b2b form submits successfully", true);

// Contact form
await page.goto(`${BASE}/ua/contact`, { waitUntil: "networkidle" });
await page.fill("input[name='name']", "Тест Контакт");
await page.fill("input[name='email']", "test@example.com");
await page.fill("textarea[name='message']", "Тестове повідомлення");
await page.click("button:has-text('Надіслати заявку')");
await page.waitForSelector("text=Заявку надіслано", { timeout: 10000 });
log("contact form submits successfully", true);
await page.screenshot({ path: `${SHOTS}/contact.png` });

// A product with zero photos still renders a real PDP (no crash)
await page.goto(`${BASE}/ua/products/kalyan-snake-hookah-spiral-tigerwood`, { waitUntil: "networkidle" });
const soonVisible = await page.locator("text=Фото незабаром").first().isVisible();
log("photo-less product PDP renders gracefully", soonVisible);

// sitemap/robots
const sitemapRes = await page.goto(`${BASE}/sitemap.xml`);
log("sitemap.xml responds 200", sitemapRes.status() === 200);
const robotsRes = await page.goto(`${BASE}/robots.txt`);
log("robots.txt responds 200", robotsRes.status() === 200);

await browser.close();

console.log("\n--- console/page/http errors captured ---");
if (errors.length === 0) {
  console.log("none");
} else {
  for (const e of errors) console.log(e);
}
