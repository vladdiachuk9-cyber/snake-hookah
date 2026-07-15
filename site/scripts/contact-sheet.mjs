// Builds labeled contact-sheet grids from the extracted review photos so
// many can be visually scanned in one Read call instead of one-by-one.
import sharp from "sharp";
import { readdir, mkdir } from "node:fs/promises";
import path from "node:path";

const REVIEW_DIR =
  "C:/Users/vladd/AppData/Local/Temp/claude/c--Users-vladd-Desktop-Snake-hookah/075e2da1-fbe6-494a-9f2f-8789e86594b3/scratchpad/review";
const PHOTOS_DIR = path.join(REVIEW_DIR, "photos");
const SHEETS_DIR = path.join(REVIEW_DIR, "sheets");

const CELL_W = 180;
const CELL_H = 270;
const LABEL_H = 22;
const COLS = 6;

async function buildSheet(files, outPath) {
  const rows = Math.ceil(files.length / COLS);
  const sheetW = COLS * CELL_W;
  const sheetH = rows * (CELL_H + LABEL_H);

  const composites = [];
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const col = i % COLS;
    const row = Math.floor(i / COLS);
    const x = col * CELL_W;
    const y = row * (CELL_H + LABEL_H);

    const thumb = await sharp(path.join(PHOTOS_DIR, file))
      .rotate()
      .resize({ width: CELL_W - 8, height: CELL_H - 8, fit: "inside" })
      .toBuffer();

    const label = file.replace(/\.(JPEG|JPG)$/i, "");
    const labelSvg = Buffer.from(
      `<svg width="${CELL_W}" height="${LABEL_H}"><rect width="100%" height="100%" fill="black"/><text x="4" y="15" font-size="13" fill="white" font-family="sans-serif">${label}</text></svg>`,
    );

    composites.push({ input: thumb, left: x + 4, top: y + 4 });
    composites.push({ input: labelSvg, left: x, top: y + CELL_H });
  }

  await sharp({
    create: { width: sheetW, height: sheetH, channels: 3, background: "#888" },
  })
    .composite(composites)
    .jpeg({ quality: 82 })
    .toFile(outPath);

  console.log(`${outPath} (${files.length} items)`);
}

await mkdir(SHEETS_DIR, { recursive: true });

const all = await readdir(PHOTOS_DIR);
const photoFiles = all
  .filter((f) => /^Photo-\d+\.JPEG$/i.test(f))
  .sort((a, b) => Number(a.match(/\d+/)[0]) - Number(b.match(/\d+/)[0]));
const imgFiles = all
  .filter((f) => /^IMG_\d+\.JPG$/i.test(f))
  .sort((a, b) => Number(a.match(/\d+/)[0]) - Number(b.match(/\d+/)[0]));

const CHUNK = 24; // 4 rows x 6 cols per sheet
for (let i = 0; i < photoFiles.length; i += CHUNK) {
  const chunk = photoFiles.slice(i, i + CHUNK);
  await buildSheet(chunk, path.join(SHEETS_DIR, `photo-sheet-${i + 1}.jpg`));
}
await buildSheet(imgFiles, path.join(SHEETS_DIR, "img-sheet.jpg"));

console.log("Done.");
