// 360 video pipeline. Transcodes the user-organized `каталог/<Product
// Folder>/360 N.mov` source clips (matched to SKU by the user) into
// compressed H.264 mp4 for public/. Re-run manually if source clips change.
import ffmpegPath from "ffmpeg-static";
import { execFile } from "node:child_process";
import { promisify } from "node:util";
import { mkdir } from "node:fs/promises";
import path from "node:path";

const execFileAsync = promisify(execFile);

const CATALOG_DIR = path.resolve(import.meta.dirname, "..", "..", "каталог");
const PUBLIC_DIR = path.resolve(import.meta.dirname, "..", "public");

const jobs = [
  { dir: "Spiral Walnut Green", src: "360 1.mov", out: "videos/products/snk-spr-wln-grn/360.mp4" },
  { dir: "Spiral Sucupira Brown", src: "360 2.mov", out: "videos/products/snk-spr-suc-brn/360.mp4" },
  { dir: "Spiral Walnut White", src: "360 3.mov", out: "videos/products/snk-spr-wln-wht/360.mp4" },
  { dir: "Spiral Tigerwood", src: "360 4.mov", out: "videos/products/snk-spr-tgr/360.mp4" },
  { dir: "Spiral Wenge", src: "360 5.mov", out: "videos/products/snk-spr-wng/360.mp4" },
  { dir: "Spiral Walnut Purple", src: "360 6.mov", out: "videos/products/snk-spr-wln-prp/360.mp4" },
  { dir: "Spiral Sucupira Cognac", src: "360 7.mov", out: "videos/products/snk-spr-suc-cgn/360.mp4" },
];

for (const job of jobs) {
  const srcPath = path.join(CATALOG_DIR, job.dir, job.src);
  const outPath = path.join(PUBLIC_DIR, job.out);
  await mkdir(path.dirname(outPath), { recursive: true });
  await execFileAsync(ffmpegPath, [
    "-y",
    "-i", srcPath,
    "-vf", "scale=720:-2",
    "-c:v", "libx264",
    "-crf", "26",
    "-preset", "slow",
    "-an",
    "-movflags", "+faststart",
    outPath,
  ]);
  console.log(`${job.dir}/${job.src} -> ${job.out}`);
}

console.log("Done.");
