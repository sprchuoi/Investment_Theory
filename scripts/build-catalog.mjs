#!/usr/bin/env node
/**
 * Regenerate assets/js/data-library.js from the PDF/EPUB files in
 * some-investment-books/.
 *
 * Usage:
 *   node scripts/build-catalog.mjs
 *
 * The catalog merges duplicate editions/formats into one entry (preferring
 * PDF, then the newest year). Curated book notes live in data-core.js and
 * match catalog titles by substring, so they survive a regeneration.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const BOOKS_DIR = path.join(ROOT, "some-investment-books");
const OUT = path.join(ROOT, "assets", "js", "data-library.js");

const EXT = /\.(pdf|epub|mobi|azw)$/i;
const EDITION = /\b(\d{1,2}(st|nd|rd|th)\s+edition|CDR edition|Revised and Expanded|2 edition)\b/gi;

function canon(file) {
  const fmt = file.split(".").pop().toLowerCase();
  const base = file.replace(EXT, "");
  const years = base.match(/\b(19|20)\d{2}\b/g) || [];
  const year = years.length ? Number(years[years.length - 1]) : 0;

  let title = base
    .replace(/ \(\d+\)/g, "")
    .replace(/ - annotated$/i, "")
    .replace(/\.pdf$/i, "")
    .trim();

  title = title
    .replace(/\s+\b(19|20)\d{2}\b.*$/, "")
    .replace(EDITION, "")
    .replace(/\s+/g, " ")
    .replace(/\s+-\s*$/, "")
    .trim();

  const key = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();

  return { title, year, fmt, file, key };
}

if (!fs.existsSync(BOOKS_DIR)) {
  console.error(`Books directory not found: ${BOOKS_DIR}`);
  process.exit(1);
}

const files = fs.readdirSync(BOOKS_DIR).filter((f) => EXT.test(f));
const groups = new Map();

for (const file of files) {
  const c = canon(file);
  const rank = { pdf: 0, epub: 1, azw: 2, mobi: 3 }[c.fmt] ?? 9;
  const prev = groups.get(c.key);
  if (!prev) {
    groups.set(c.key, { ...c, rank });
  } else {
    const better = rank < prev.rank || (rank === prev.rank && c.year > prev.year);
    if (better) groups.set(c.key, { ...c, rank });
  }
}

const entries = [...groups.values()]
  .sort((a, b) => a.title.localeCompare(b.title))
  .map(({ title, year, fmt, file }) => ({
    t: title,
    y: year ? String(year) : "—",
    f: fmt,
    p: file
  }));

const body = entries
  .map((e) => `  { t: ${JSON.stringify(e.t)}, y: ${JSON.stringify(e.y)}, f: ${JSON.stringify(e.f)}, p: ${JSON.stringify(e.p)} }`)
  .join(",\n");

const js = `/* ==========================================================================
   FULL LIBRARY INDEX — generated from the repository filenames
   ${entries.length} unique titles after merging editions/formats.
   Regenerate with: node scripts/build-catalog.mjs
   ========================================================================== */

const FULL_INDEX = [
${body}
];
`;

fs.writeFileSync(OUT, js);
console.log(`Wrote ${entries.length} unique titles to ${path.relative(ROOT, OUT)} (from ${files.length} files).`);
