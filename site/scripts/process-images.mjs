// Asset pipeline. Reads verified source photos from the user-organized
// `каталог/<Product Folder>/` directories (one folder per SKU, correct
// photos + 360 video pre-sorted by the user) and writes resized/compressed
// .webp into public/. Re-run manually if the каталог folders change.
import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import path from "node:path";

const CATALOG_DIR = path.resolve(import.meta.dirname, "..", "..", "каталог");
const PUBLIC_DIR = path.resolve(import.meta.dirname, "..", "public");

const jobs = [
  // Walnut Green — original front/crown/base (green hose) kept as-is, plus
  // the full alternate session (black hose, pre-final-hose test shots) and
  // flatlay, added as extra gallery angles per the user's call.
  { dir: "Spiral Walnut Green", src: "Photo-43.JPEG", out: "images/products/snk-spr-wln-grn/1-front.webp", width: 1400 },
  { dir: "Spiral Walnut Green", src: "Photo-44.JPEG", out: "images/products/snk-spr-wln-grn/2-crown.webp", width: 1400 },
  { dir: "Spiral Walnut Green", src: "Photo-45.JPEG", out: "images/products/snk-spr-wln-grn/3-base.webp", width: 1400 },
  { dir: "Spiral Walnut Green", src: "Photo-39.JPEG", out: "images/products/snk-spr-wln-grn/4-flatlay.webp", width: 1400 },
  { dir: "Spiral Walnut Green", src: "Photo-40.JPEG", out: "images/products/snk-spr-wln-grn/5-alt.webp", width: 1400 },
  { dir: "Spiral Walnut Green", src: "Photo-41.JPEG", out: "images/products/snk-spr-wln-grn/6-alt.webp", width: 1400 },
  { dir: "Spiral Walnut Green", src: "Photo-42.JPEG", out: "images/products/snk-spr-wln-grn/7-alt.webp", width: 1400 },
  { dir: "Spiral Walnut Green", src: "Photo-76.JPEG", out: "images/products/snk-spr-wln-grn/8-alt.webp", width: 1400 },

  // Wenge — front/crown/base/flatlay kept, plus 4 extra angles.
  { dir: "Spiral Wenge", src: "Photo-46.JPEG", out: "images/products/snk-spr-wng/1-front.webp", width: 1400 },
  { dir: "Spiral Wenge", src: "Photo-47.JPEG", out: "images/products/snk-spr-wng/2-crown.webp", width: 1400 },
  { dir: "Spiral Wenge", src: "Photo-48.JPEG", out: "images/products/snk-spr-wng/3-base.webp", width: 1400 },
  { dir: "Spiral Wenge", src: "Photo-34.JPEG", out: "images/products/snk-spr-wng/4-flatlay.webp", width: 1400 },
  { dir: "Spiral Wenge", src: "Photo-49.JPEG", out: "images/products/snk-spr-wng/5-alt.webp", width: 1400 },
  { dir: "Spiral Wenge", src: "Photo-50.JPEG", out: "images/products/snk-spr-wng/6-alt.webp", width: 1400 },
  { dir: "Spiral Wenge", src: "Photo-51.JPEG", out: "images/products/snk-spr-wng/7-alt.webp", width: 1400 },
  { dir: "Spiral Wenge", src: "Photo-75.JPEG", out: "images/products/snk-spr-wng/8-alt.webp", width: 1400 },

  // Sucupira Cognac — CORRECTED. Photo-52/33 (previously used here) turned
  // out to actually be Tigerwood (striped grain, confirmed visually and by
  // the user's own folder split). Real Sucupira Cognac photos below.
  { dir: "Spiral Sucupira Cognac", src: "Photo-61.JPEG", out: "images/products/snk-spr-suc-cgn/1-front.webp", width: 1400 },
  { dir: "Spiral Sucupira Cognac", src: "Photo-62.JPEG", out: "images/products/snk-spr-suc-cgn/2-crown.webp", width: 1400 },
  { dir: "Spiral Sucupira Cognac", src: "Photo-63.JPEG", out: "images/products/snk-spr-suc-cgn/3-base.webp", width: 1400 },
  { dir: "Spiral Sucupira Cognac", src: "Photo-37.JPEG", out: "images/products/snk-spr-suc-cgn/4-flatlay.webp", width: 1400 },
  { dir: "Spiral Sucupira Cognac", src: "Photo-71.JPEG", out: "images/products/snk-spr-suc-cgn/5-alt.webp", width: 1400 },

  // Tigerwood — front/crown/base kept (verified striped grain), plus the
  // Photo-33/52/53/54/74 set moved here from Sucupira Cognac (see above).
  { dir: "Spiral Tigerwood", src: "Photo-55.JPEG", out: "images/products/snk-spr-tgr/1-front.webp", width: 1400 },
  { dir: "Spiral Tigerwood", src: "Photo-56.JPEG", out: "images/products/snk-spr-tgr/2-crown.webp", width: 1400 },
  { dir: "Spiral Tigerwood", src: "Photo-57.JPEG", out: "images/products/snk-spr-tgr/3-base.webp", width: 1400 },
  { dir: "Spiral Tigerwood", src: "Photo-33.JPEG", out: "images/products/snk-spr-tgr/4-flatlay.webp", width: 1400 },
  { dir: "Spiral Tigerwood", src: "Photo-52.JPEG", out: "images/products/snk-spr-tgr/5-alt.webp", width: 1400 },
  { dir: "Spiral Tigerwood", src: "Photo-53.JPEG", out: "images/products/snk-spr-tgr/6-alt.webp", width: 1400 },
  { dir: "Spiral Tigerwood", src: "Photo-54.JPEG", out: "images/products/snk-spr-tgr/7-alt.webp", width: 1400 },
  { dir: "Spiral Tigerwood", src: "Photo-74.JPEG", out: "images/products/snk-spr-tgr/8-alt.webp", width: 1400 },

  // Walnut White — front/crown/base kept, plus 3 extras.
  { dir: "Spiral Walnut White", src: "Photo-64.JPEG", out: "images/products/snk-spr-wln-wht/1-front.webp", width: 1400 },
  { dir: "Spiral Walnut White", src: "Photo-65.JPEG", out: "images/products/snk-spr-wln-wht/2-crown.webp", width: 1400 },
  { dir: "Spiral Walnut White", src: "Photo-66.JPEG", out: "images/products/snk-spr-wln-wht/3-base.webp", width: 1400 },
  { dir: "Spiral Walnut White", src: "Photo-35.JPEG", out: "images/products/snk-spr-wln-wht/4-flatlay.webp", width: 1400 },
  { dir: "Spiral Walnut White", src: "Photo-38.JPEG", out: "images/products/snk-spr-wln-wht/5-alt.webp", width: 1400 },
  { dir: "Spiral Walnut White", src: "Photo-73.JPEG", out: "images/products/snk-spr-wln-wht/6-alt.webp", width: 1400 },

  // Sucupira Brown — front kept, plus flatlay + 3 extras.
  { dir: "Spiral Sucupira Brown", src: "Photo-67.JPEG", out: "images/products/snk-spr-suc-brn/1-front.webp", width: 1400 },
  { dir: "Spiral Sucupira Brown", src: "Photo-36.JPEG", out: "images/products/snk-spr-suc-brn/2-flatlay.webp", width: 1400 },
  { dir: "Spiral Sucupira Brown", src: "Photo-68.JPEG", out: "images/products/snk-spr-suc-brn/3-alt.webp", width: 1400 },
  { dir: "Spiral Sucupira Brown", src: "Photo-69.JPEG", out: "images/products/snk-spr-suc-brn/4-alt.webp", width: 1400 },
  { dir: "Spiral Sucupira Brown", src: "Photo-70.JPEG", out: "images/products/snk-spr-suc-brn/5-alt.webp", width: 1400 },

  // Walnut Purple — front/crown/base kept, plus 1 extra.
  { dir: "Spiral Walnut Purple", src: "Photo-58.JPEG", out: "images/products/snk-spr-wln-prp/1-front.webp", width: 1400 },
  { dir: "Spiral Walnut Purple", src: "Photo-59.JPEG", out: "images/products/snk-spr-wln-prp/2-crown.webp", width: 1400 },
  { dir: "Spiral Walnut Purple", src: "Photo-60.JPEG", out: "images/products/snk-spr-wln-prp/3-base.webp", width: 1400 },
  { dir: "Spiral Walnut Purple", src: "Photo-72.JPEG", out: "images/products/snk-spr-wln-prp/4-alt.webp", width: 1400 },

  // Wild Green Crocodile — front/crown kept, plus flatlay + 2 hose-detail extras.
  { dir: "Wild Collection Green Crocodile", src: "IMG_1898.JPG", out: "images/products/snk-wld-crc-grn/1-front.webp", width: 1200 },
  { dir: "Wild Collection Green Crocodile", src: "IMG_1897.JPG", out: "images/products/snk-wld-crc-grn/2-crown.webp", width: 1200 },
  { dir: "Wild Collection Green Crocodile", src: "IMG_1888.JPG", out: "images/products/snk-wld-crc-grn/3-flatlay.webp", width: 1200 },
  { dir: "Wild Collection Green Crocodile", src: "Photo-10.JPEG", out: "images/products/snk-wld-crc-grn/4-detail.webp", width: 1200 },
  { dir: "Wild Collection Green Crocodile", src: "Photo-11.JPEG", out: "images/products/snk-wld-crc-grn/5-detail.webp", width: 1200 },
  { dir: "Wild Collection Green Crocodile", src: "Photo-29.JPEG", out: "images/products/snk-wld-crc-grn/6-detail.webp", width: 1200 },

  // Wild Blue Crocodile — front/crown/flatlay kept, plus 2 extras.
  { dir: "Wild Collection Blue Crocodile", src: "IMG_1896.JPG", out: "images/products/snk-wld-crc-blu/1-front.webp", width: 1200 },
  { dir: "Wild Collection Blue Crocodile", src: "IMG_1895.JPG", out: "images/products/snk-wld-crc-blu/2-crown.webp", width: 1200 },
  { dir: "Wild Collection Blue Crocodile", src: "IMG_1889.JPG", out: "images/products/snk-wld-crc-blu/3-flatlay.webp", width: 1200 },
  { dir: "Wild Collection Blue Crocodile", src: "IMG_1890.JPG", out: "images/products/snk-wld-crc-blu/4-alt.webp", width: 1200 },
  { dir: "Wild Collection Blue Crocodile", src: "IMG_1891.JPG", out: "images/products/snk-wld-crc-blu/5-alt.webp", width: 1200 },

  // Wild Cognac Ostrich — front/crown kept, plus flatlay + 3 hose-detail extras.
  { dir: "Wild Collection Cognac Ostrich", src: "IMG_1900.JPG", out: "images/products/snk-wld-ost-cgn/1-front.webp", width: 1200 },
  { dir: "Wild Collection Cognac Ostrich", src: "IMG_1899.JPG", out: "images/products/snk-wld-ost-cgn/2-crown.webp", width: 1200 },
  { dir: "Wild Collection Cognac Ostrich", src: "IMG_1886.JPG", out: "images/products/snk-wld-ost-cgn/3-flatlay.webp", width: 1200 },
  { dir: "Wild Collection Cognac Ostrich", src: "Photo-8.JPEG", out: "images/products/snk-wld-ost-cgn/4-detail.webp", width: 1200 },
  { dir: "Wild Collection Cognac Ostrich", src: "Photo-12.JPEG", out: "images/products/snk-wld-ost-cgn/5-detail.webp", width: 1200 },
  { dir: "Wild Collection Cognac Ostrich", src: "Photo-30.JPEG", out: "images/products/snk-wld-ost-cgn/6-detail.webp", width: 1200 },

  // Wild Leopard — front/crown/flatlay kept, plus 3 hose-detail extras.
  { dir: "Wild Collection Leopard", src: "IMG_1902.JPG", out: "images/products/snk-wld-leo/1-front.webp", width: 1200 },
  { dir: "Wild Collection Leopard", src: "IMG_1901.JPG", out: "images/products/snk-wld-leo/2-crown.webp", width: 1200 },
  { dir: "Wild Collection Leopard", src: "IMG_1887.JPG", out: "images/products/snk-wld-leo/3-flatlay.webp", width: 1200 },
  { dir: "Wild Collection Leopard", src: "Photo-9.JPEG", out: "images/products/snk-wld-leo/4-detail.webp", width: 1200 },
  { dir: "Wild Collection Leopard", src: "Photo-13.JPEG", out: "images/products/snk-wld-leo/5-detail.webp", width: 1200 },
  { dir: "Wild Collection Leopard", src: "Photo-28.JPEG", out: "images/products/snk-wld-leo/6-detail.webp", width: 1200 },
];

for (const job of jobs) {
  const srcPath = path.join(CATALOG_DIR, job.dir, job.src);
  const outPath = path.join(PUBLIC_DIR, job.out);
  await mkdir(path.dirname(outPath), { recursive: true });
  const img = sharp(srcPath).rotate();
  const meta = await img.metadata();
  const pipeline =
    meta.width && meta.width > job.width ? img.resize({ width: job.width }) : img;
  await pipeline.webp({ quality: 86 }).toFile(outPath);
  console.log(`${job.dir}/${job.src} -> ${job.out}`);
}

console.log("Done.");
