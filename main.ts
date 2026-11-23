// news-image-20261123 v2 — magazine-cover infographic for Monday 23 November 2026.
// Copies the pre-rendered entry.png (1024x683) to the output directory.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const PNG_SIGNATURE = Buffer.from([
  0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a,
]);

const here = dirname(fileURLToPath(import.meta.url));
const src = join(here, "entry.png");
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const dst = join(outDir, "entry.png");

const bytes = readFileSync(src);
if (!bytes.subarray(0, 8).equals(PNG_SIGNATURE)) {
  throw new Error("entry.png is not a valid PNG");
}
// IHDR: width and height are big-endian uint32 at offsets 16 and 20.
const width = bytes.readUInt32BE(16);
const height = bytes.readUInt32BE(20);
if (width !== 1024 || height !== 683) {
  throw new Error(`entry.png must be 1024x683, got ${width}x${height}`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(dst, bytes);
// Post-write check: what landed on disk must be byte-identical to the source.
const written = readFileSync(dst);
if (!written.equals(bytes)) {
  throw new Error("written entry.png differs from the source");
}
console.log(`wrote ${dst} (${bytes.length} bytes, ${width}x${height}, verified)`);
