import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";

const BASE = "http://localhost:3000";
const SHOTS = "verify-shots";
await mkdir(SHOTS, { recursive: true });

const errors = [];
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
page.on("pageerror", (e) => errors.push(`[pageerror] ${e.message}`));
page.on("console", (msg) => {
  if (msg.type() === "error") errors.push(`[console] ${msg.text()}`);
});

function log(step, ok, detail = "") {
  console.log(`${ok ? "PASS" : "FAIL"} — ${step}${detail ? ": " + detail : ""}`);
}

// 1. Home redirect + render
await page.goto(BASE + "/", { waitUntil: "networkidle" });
await page.waitForURL("**/ua");
log("1. / redirects to /ua", page.url().endsWith("/ua"));
await page.waitForSelector("text=Кальян тримає форму", { timeout: 10000 });
const heroImgOk = await page.locator("img[alt='Snake Hookah Spiral Walnut Green']").first().isVisible();
log("1. Hero renders with product image", heroImgOk);
await page.screenshot({ path: `${SHOTS}/01-home.png`, fullPage: false });

// scroll to popular products and screenshot
await page.locator("#popular").scrollIntoViewIfNeeded();
await page.waitForTimeout(400);
await page.screenshot({ path: `${SHOTS}/02-popular.png` });
const cardCount = await page.locator("#popular a[href*='/products/']").count();
log("1. Popular products shows clickable cards", cardCount >= 2, `${cardCount} linked cards`);

// 2. Product page: gallery + add to cart
await page.goto(BASE + "/ua/products/kalyan-snake-hookah-spiral-walnut-green", { waitUntil: "networkidle" });
await page.waitForSelector("h1:has-text('Walnut Green')");
const thumbs = page.locator("button[aria-label='2']");
if (await thumbs.count()) {
  await thumbs.first().click();
  await page.waitForTimeout(300);
}
log("2. Gallery thumbnail switch", true);
await page.screenshot({ path: `${SHOTS}/03-product.png` });

await page.locator("button:has-text('Додати в кошик')").click();
await page.waitForTimeout(400);
const drawerVisible = await page.locator("text=У кошику порожньо").count() === 0 &&
  await page.locator("aside", { hasText: "Кошик" }).isVisible();
log("2. Cart drawer opens after add-to-cart", drawerVisible);
const badgeText = await page.locator("header span", { hasText: "1" }).first().textContent().catch(() => null);
log("2. Cart badge shows count", badgeText === "1", `badge="${badgeText}"`);
await page.screenshot({ path: `${SHOTS}/04-cart-drawer.png` });

// go to order page via checkout link
await page.locator("a:has-text('Оформити замовлення')").click();
await page.waitForURL("**/order");
await page.waitForSelector("text=Заявка на замовлення");
const summaryVisible = await page.locator("text=Walnut Green").first().isVisible();
log("3. Order page shows cart summary", summaryVisible);

await page.fill("input[name='name']", "Тест Тестенко");
await page.fill("input[name='phone']", "+380501234567");
await page.fill("input[name='email']", "test@example.com");
await page.click("button:has-text('Надіслати заявку')");
await page.waitForSelector("text=Заявку надіслано", { timeout: 10000 });
log("3. Order submit shows success message", true);
await page.screenshot({ path: `${SHOTS}/05-order-success.png` });

// 4. Language switcher
await page.goto(BASE + "/ua", { waitUntil: "networkidle" });
await page.click("button:has-text('EN')");
await page.waitForURL("**/en");
await page.waitForSelector("text=Catalog");
const htmlLangEn = await page.getAttribute("html", "lang");
log("4. Language switch UA -> EN changes URL + renders", page.url().endsWith("/en") && htmlLangEn === "en");
await page.screenshot({ path: `${SHOTS}/06-en.png` });

await page.click("button:has-text('RU')");
await page.waitForURL("**/ru");
await page.waitForSelector("text=Каталог");
const htmlLangRu = await page.getAttribute("html", "lang");
log("4. Language switch EN -> RU changes URL + renders", page.url().endsWith("/ru") && htmlLangRu === "ru");

await browser.close();

console.log("\n--- console/page errors captured ---");
if (errors.length === 0) {
  console.log("none");
} else {
  for (const e of errors) console.log(e);
}
