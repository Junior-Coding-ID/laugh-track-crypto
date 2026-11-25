// Laugh Track: The Crypto Trading Joke Contest
// Program ini menulis satu joke satu-baris tentang crypto/trading life
// ke <output>/entry.txt. Node-only, tanpa dependensi.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Jawaban final (112 karakter, ASCII, satu baris).
const JOKE =
  "I bought the dip, then the dip bought a shovel, dug deeper, and now my portfolio is a museum of brave decisions.";

// Gate: panjang harus tepat 112 karakter, 1-200, satu baris, ASCII saja,
// tanpa spasi leading/trailing.
function validate(text: string): void {
  if (text.length !== 112) {
    throw new Error(`length must be exactly 112, got ${text.length}`);
  }
  if (text.length < 1 || text.length > 200) {
    throw new Error(`length must be 1-200, got ${text.length}`);
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  if (/[^\x00-\x7F]/.test(text)) {
    throw new Error("entry must be ASCII only");
  }
  if (text !== text.trim()) {
    throw new Error("entry must not have leading/trailing whitespace");
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be whitespace-only");
  }
}

function main(): void {
  validate(JOKE);
  const outDir = process.env.MAKEFUN_OUTPUT ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const target = join(outDir, "entry.txt");
  writeFileSync(target, JOKE, "utf8");
  // Verify-after-write: baca balik dan bandingkan byte-per-byte.
  const back = readFileSync(target, "utf8");
  if (back !== JOKE) {
    throw new Error("verify-after-write failed: entry.txt differs from JOKE");
  }
  const backBytes = Buffer.from(back, "utf8");
  const jokeBytes = Buffer.from(JOKE, "utf8");
  if (!backBytes.equals(jokeBytes)) {
    throw new Error("verify-after-write failed: byte mismatch");
  }
}

main();

// Deterministik: output hanya bergantung pada konstanta JOKE di atas,
// jadi setiap run menghasilkan byte yang identik.
