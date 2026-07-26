// Asset pipeline for the hose accessory line (leather hose + snake-scale
// hose), mirroring process-images.mjs. Source photos come from the
// user-organized `каталог/<Folder>/` directories.
import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import path from "node:path";

const CATALOG_DIR = path.resolve(import.meta.dirname, "..", "..", "каталог");
const PUBLIC_DIR = path.resolve(import.meta.dirname, "..", "public");

const jobs = [
  // Leather Hose — smooth genuine leather, contrast top-stitching.
  { dir: "Шкіряний Шланг Зелений", src: "Photo-10.JPEG", out: "images/accessories/snake-hookah-leather-hose-green/1.webp", width: 1200 },
  { dir: "Шкіряний Шланг Зелений", src: "Photo-11.JPEG", out: "images/accessories/snake-hookah-leather-hose-green/2.webp", width: 1200 },
  { dir: "Шкіряний Шланг Зелений", src: "Photo-29.JPEG", out: "images/accessories/snake-hookah-leather-hose-green/3.webp", width: 1200 },

  { dir: "Шкіряний Шланг Коньячний", src: "Photo-12.JPEG", out: "images/accessories/snake-hookah-leather-hose-cognac/1.webp", width: 1200 },
  { dir: "Шкіряний Шланг Коньячний", src: "Photo-30.JPEG", out: "images/accessories/snake-hookah-leather-hose-cognac/2.webp", width: 1200 },
  { dir: "Шкіряний Шланг Коньячний", src: "Photo-8.JPEG", out: "images/accessories/snake-hookah-leather-hose-cognac/3.webp", width: 1200 },

  { dir: "Шкіряний Шланг Синій", src: "IMG_1890.JPG", out: "images/accessories/snake-hookah-leather-hose-blue/1.webp", width: 1200 },
  { dir: "Шкіряний Шланг Синій", src: "IMG_1891.JPG", out: "images/accessories/snake-hookah-leather-hose-blue/2.webp", width: 1200 },
  { dir: "Шкіряний Шланг Синій", src: "Photo-3.JPEG", out: "images/accessories/snake-hookah-leather-hose-blue/3.webp", width: 1200 },

  { dir: "Шкіряний Шланг Чорний", src: "Photo-13.JPEG", out: "images/accessories/snake-hookah-leather-hose-black/1.webp", width: 1200 },
  { dir: "Шкіряний Шланг Чорний", src: "Photo-28.JPEG", out: "images/accessories/snake-hookah-leather-hose-black/2.webp", width: 1200 },
  { dir: "Шкіряний Шланг Чорний", src: "Photo-9.JPEG", out: "images/accessories/snake-hookah-leather-hose-black/3.webp", width: 1200 },

  // Snake Hose — leather embossed with a snake-scale pattern.
  { dir: "Шланг Змія Бордовий", src: "Photo-15.JPEG", out: "images/accessories/snake-hookah-snake-hose-burgundy/1.webp", width: 1200 },
  { dir: "Шланг Змія Бордовий", src: "Photo-24.JPEG", out: "images/accessories/snake-hookah-snake-hose-burgundy/2.webp", width: 1200 },
  { dir: "Шланг Змія Бордовий", src: "Photo-6.JPEG", out: "images/accessories/snake-hookah-snake-hose-burgundy/3.webp", width: 1200 },

  { dir: "Шланг Змія Золото", src: "Photo-18.JPEG", out: "images/accessories/snake-hookah-snake-hose-gold/1.webp", width: 1200 },
  { dir: "Шланг Змія Золото", src: "Photo-23.JPEG", out: "images/accessories/snake-hookah-snake-hose-gold/2.webp", width: 1200 },
  { dir: "Шланг Змія Золото", src: "Photo-7.JPEG", out: "images/accessories/snake-hookah-snake-hose-gold/3.webp", width: 1200 },

  { dir: "Шланг Змія Помаранчевий", src: "Photo-17.JPEG", out: "images/accessories/snake-hookah-snake-hose-orange/1.webp", width: 1200 },
  { dir: "Шланг Змія Помаранчевий", src: "Photo-25.JPEG", out: "images/accessories/snake-hookah-snake-hose-orange/2.webp", width: 1200 },
  { dir: "Шланг Змія Помаранчевий", src: "Photo-4.JPEG", out: "images/accessories/snake-hookah-snake-hose-orange/3.webp", width: 1200 },

  { dir: "Шланг Змія Рожевий", src: "Photo-1.JPEG", out: "images/accessories/snake-hookah-snake-hose-pink/1.webp", width: 1200 },
  { dir: "Шланг Змія Рожевий", src: "Photo-19.JPEG", out: "images/accessories/snake-hookah-snake-hose-pink/2.webp", width: 1200 },
  { dir: "Шланг Змія Рожевий", src: "Photo-22.JPEG", out: "images/accessories/snake-hookah-snake-hose-pink/3.webp", width: 1200 },

  { dir: "Шланг Змія Синій", src: "Photo-14.JPEG", out: "images/accessories/snake-hookah-snake-hose-blue/1.webp", width: 1200 },
  { dir: "Шланг Змія Синій", src: "Photo-26.JPEG", out: "images/accessories/snake-hookah-snake-hose-blue/2.webp", width: 1200 },

  { dir: "Шланг Змія Темно Синій", src: "Photo-2.JPEG", out: "images/accessories/snake-hookah-snake-hose-navy/1.webp", width: 1200 },
  { dir: "Шланг Змія Темно Синій", src: "Photo-20.JPEG", out: "images/accessories/snake-hookah-snake-hose-navy/2.webp", width: 1200 },
  { dir: "Шланг Змія Темно Синій", src: "Photo-21.JPEG", out: "images/accessories/snake-hookah-snake-hose-navy/3.webp", width: 1200 },

  { dir: "Шланг Змія Червоний", src: "Photo-16.JPEG", out: "images/accessories/snake-hookah-snake-hose-red/1.webp", width: 1200 },
  { dir: "Шланг Змія Червоний", src: "Photo-27.JPEG", out: "images/accessories/snake-hookah-snake-hose-red/2.webp", width: 1200 },
  { dir: "Шланг Змія Червоний", src: "Photo-5.JPEG", out: "images/accessories/snake-hookah-snake-hose-red/3.webp", width: 1200 },
];

for (const job of jobs) {
  const srcPath = path.join(CATALOG_DIR, job.dir, job.src);
  const outPath = path.join(PUBLIC_DIR, job.out);
  await mkdir(path.dirname(outPath), { recursive: true });
  const img = sharp(srcPath).rotate();
  const meta = await img.metadata();
  const pipeline = meta.width && meta.width > job.width ? img.resize({ width: job.width }) : img;
  const info = await pipeline.webp({ quality: 86 }).toFile(outPath);
  console.log(`${job.dir}/${job.src} -> ${job.out} (${info.width}x${info.height})`);
}

console.log("Done.");
