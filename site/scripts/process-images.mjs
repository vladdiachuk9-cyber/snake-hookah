// Asset pipeline. Reads verified source photos (extracted from
// drive-download-*.zip into the scratch review folder, matched to SKU/angle
// by visual inspection — see PR notes) and writes resized/compressed .webp
// into public/. Re-run manually as new product photo batches are matched.
import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import path from "node:path";

const REVIEW_DIR =
  "C:/Users/vladd/AppData/Local/Temp/claude/c--Users-vladd-Desktop-Snake-hookah/075e2da1-fbe6-494a-9f2f-8789e86594b3/scratchpad/review/photos";
const PUBLIC_DIR = path.resolve(import.meta.dirname, "..", "public");

const jobs = [
  // Walnut Green — verified 3-angle set, green hose
  { src: "Photo-43.JPEG", out: "images/products/snk-spr-wln-grn/1-front.webp", width: 1400 },
  { src: "Photo-44.JPEG", out: "images/products/snk-spr-wln-grn/2-crown.webp", width: 1400 },
  { src: "Photo-45.JPEG", out: "images/products/snk-spr-wln-grn/3-base.webp", width: 1400 },

  // Wenge — dark wood, cognac ostrich rings, black hose
  { src: "Photo-46.JPEG", out: "images/products/snk-spr-wng/1-front.webp", width: 1400 },
  { src: "Photo-47.JPEG", out: "images/products/snk-spr-wng/2-crown.webp", width: 1400 },
  { src: "Photo-48.JPEG", out: "images/products/snk-spr-wng/3-base.webp", width: 1400 },
  { src: "Photo-34.JPEG", out: "images/products/snk-spr-wng/4-flatlay.webp", width: 1400 },

  // Sucupira Cognac — honey wood, cognac ostrich rings, black silicone hose
  { src: "Photo-52.JPEG", out: "images/products/snk-spr-suc-cgn/1-front.webp", width: 1400 },
  { src: "Photo-33.JPEG", out: "images/products/snk-spr-suc-cgn/2-flatlay.webp", width: 1400 },

  // Tigerwood — honey wood, cognac ostrich rings, cognac leather hose
  { src: "Photo-55.JPEG", out: "images/products/snk-spr-tgr/1-front.webp", width: 1400 },
  { src: "Photo-56.JPEG", out: "images/products/snk-spr-tgr/2-crown.webp", width: 1400 },
  { src: "Photo-57.JPEG", out: "images/products/snk-spr-tgr/3-base.webp", width: 1400 },

  // Walnut White — pale cream wood, green rings, black hose
  { src: "Photo-64.JPEG", out: "images/products/snk-spr-wln-wht/1-front.webp", width: 1400 },
  { src: "Photo-65.JPEG", out: "images/products/snk-spr-wln-wht/2-crown.webp", width: 1400 },
  { src: "Photo-66.JPEG", out: "images/products/snk-spr-wln-wht/3-base.webp", width: 1400 },

  // Sucupira Brown — honey wood, plain brown ring (no ostrich texture), black hose
  { src: "Photo-67.JPEG", out: "images/products/snk-spr-suc-brn/1-front.webp", width: 1400 },

  // Walnut Purple — purple-toned wood, burgundy ring, black hose
  { src: "Photo-58.JPEG", out: "images/products/snk-spr-wln-prp/1-front.webp", width: 1400 },
  { src: "Photo-59.JPEG", out: "images/products/snk-spr-wln-prp/2-crown.webp", width: 1400 },
  { src: "Photo-60.JPEG", out: "images/products/snk-spr-wln-prp/3-base.webp", width: 1400 },

  // Wild Green Crocodile
  { src: "IMG_1898.JPG", out: "images/products/snk-wld-crc-grn/1-front.webp", width: 1200 },
  { src: "IMG_1897.JPG", out: "images/products/snk-wld-crc-grn/2-crown.webp", width: 1200 },

  // Wild Blue Crocodile
  { src: "IMG_1896.JPG", out: "images/products/snk-wld-crc-blu/1-front.webp", width: 1200 },
  { src: "IMG_1895.JPG", out: "images/products/snk-wld-crc-blu/2-crown.webp", width: 1200 },
  { src: "IMG_1889.JPG", out: "images/products/snk-wld-crc-blu/3-flatlay.webp", width: 1200 },

  // Wild Cognac Ostrich
  { src: "IMG_1900.JPG", out: "images/products/snk-wld-ost-cgn/1-front.webp", width: 1200 },
  { src: "IMG_1899.JPG", out: "images/products/snk-wld-ost-cgn/2-crown.webp", width: 1200 },

  // Wild Leopard
  { src: "IMG_1902.JPG", out: "images/products/snk-wld-leo/1-front.webp", width: 1200 },
  { src: "IMG_1901.JPG", out: "images/products/snk-wld-leo/2-crown.webp", width: 1200 },
  { src: "IMG_1887.JPG", out: "images/products/snk-wld-leo/3-flatlay.webp", width: 1200 },

  // Brand
  { src: "../snake logo-21-04.png", out: "images/brand/logo-light.webp", width: 640 },
  { src: "../snake logo-21-05.png", out: "images/brand/logo-dark.webp", width: 640 },
  { src: "../png-01.png", out: "images/brand/mark-light.webp", width: 320 },
];

for (const job of jobs) {
  const srcPath = path.join(REVIEW_DIR, job.src);
  const outPath = path.join(PUBLIC_DIR, job.out);
  await mkdir(path.dirname(outPath), { recursive: true });
  const img = sharp(srcPath).rotate();
  const meta = await img.metadata();
  const pipeline =
    meta.width && meta.width > job.width ? img.resize({ width: job.width }) : img;
  await pipeline.webp({ quality: 86 }).toFile(outPath);
  console.log(`${job.src} -> ${job.out}`);
}

console.log("Done.");
