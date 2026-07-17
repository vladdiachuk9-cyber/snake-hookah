import sharp from "sharp";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

const W = 1200;
const H = 630;

async function main() {
  const heroPath = path.join(root, "public/images/products/snk-spr-wln-grn/1-front.webp");

  // Right-side product image: cover-crop directly to the target slice size.
  const productSlice = await sharp(heroPath)
    .resize({ width: 700, height: H, fit: "cover", position: "top" })
    .toBuffer();

  const svg = `
    <svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="scrim" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#0e0e10" stop-opacity="1"/>
          <stop offset="46%" stop-color="#0e0e10" stop-opacity="1"/>
          <stop offset="68%" stop-color="#0e0e10" stop-opacity="0.55"/>
          <stop offset="100%" stop-color="#0e0e10" stop-opacity="0"/>
        </linearGradient>
      </defs>
      <rect width="${W}" height="${H}" fill="url(#scrim)"/>
      <text x="80" y="270" font-family="Georgia, 'Times New Roman', serif" font-size="72" font-weight="700" fill="#f2efe9" letter-spacing="1">SNAKE</text>
      <text x="80" y="345" font-family="Georgia, 'Times New Roman', serif" font-size="72" font-weight="700" fill="#c9a961" letter-spacing="1">HOOKAH</text>
      <text x="80" y="410" font-family="Arial, sans-serif" font-size="26" fill="#b8b5b1" letter-spacing="2">КАЛЬЯНИ РУЧНОЇ РОБОТИ · КИЇВ</text>
      <rect x="80" y="440" width="64" height="3" fill="#c9a961"/>
    </svg>
  `;

  const productLayer = await sharp(productSlice)
    .composite([]) // no-op to ensure buffer
    .toBuffer();

  await sharp({
    create: { width: W, height: H, channels: 4, background: "#0e0e10" },
  })
    .composite([
      { input: productLayer, left: W - 700, top: 0 },
      { input: Buffer.from(svg), left: 0, top: 0 },
    ])
    .webp({ quality: 85 })
    .toFile(path.join(root, "public/og-image.webp"));

  await sharp({
    create: { width: W, height: H, channels: 4, background: "#0e0e10" },
  })
    .composite([
      { input: productLayer, left: W - 700, top: 0 },
      { input: Buffer.from(svg), left: 0, top: 0 },
    ])
    .jpeg({ quality: 85 })
    .toFile(path.join(root, "public/og-image.jpg"));

  console.log("OG image written to public/og-image.webp and public/og-image.jpg");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
