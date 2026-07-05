#!/usr/bin/env node
/**
 * Converts photo assets (.png/.jpg/.jpeg) to .webp and rewrites references
 * to the old filename across the app so nothing links to a dead path.
 *
 * Usage:
 *   node scripts/convert-images-to-webp.js [options]
 *
 * Options:
 *   --dir <path>        Directory to scan for images (repeatable). Default: public
 *   --quality <n>       WebP quality 1-100. Default: 82
 *   --include-icons     Also convert favicons/apple-touch-icon/logo files (skipped by default —
 *                       those must stay PNG/ICO for OS/browser/social-crawler compatibility)
 *   --keep-originals    Don't delete the source file after a successful conversion + reference update
 *   --dry-run           Report what would happen without writing or deleting anything
 */

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const ROOT = path.resolve(__dirname, '..');

const ICON_PATTERN = /(^|[\\/])(favicon|apple-touch-icon|icon-\d+|logo-res)\b/i;
const IMAGE_EXT = /\.(png|jpe?g)$/i;

const REFERENCE_DIRS = ['src', 'public'];
const REFERENCE_EXT = /\.(ts|html|css|scss|xml|txt|json|webmanifest)$/i;
const REFERENCE_SKIP_DIRS = new Set(['node_modules', 'dist', '.git', '.angular']);

function parseArgs(argv) {
  const opts = { dirs: [], quality: 82, includeIcons: false, keepOriginals: false, dryRun: false };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--dir') opts.dirs.push(argv[++i]);
    else if (a === '--quality') opts.quality = Number(argv[++i]);
    else if (a === '--include-icons') opts.includeIcons = true;
    else if (a === '--keep-originals') opts.keepOriginals = true;
    else if (a === '--dry-run') opts.dryRun = true;
  }
  if (opts.dirs.length === 0) opts.dirs.push('public');
  return opts;
}

function walk(dir, skipDirs, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (skipDirs.has(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, skipDirs, out);
    else out.push(full);
  }
  return out;
}

function findReferenceFiles() {
  const files = [];
  for (const dir of REFERENCE_DIRS) {
    const abs = path.join(ROOT, dir);
    if (!fs.existsSync(abs)) continue;
    for (const f of walk(abs, REFERENCE_SKIP_DIRS)) {
      if (REFERENCE_EXT.test(f)) files.push(f);
    }
  }
  return files;
}

function replaceInFile(file, oldName, newName) {
  const text = fs.readFileSync(file, 'utf8');
  if (!text.includes(oldName)) return 0;
  const count = text.split(oldName).length - 1;
  fs.writeFileSync(file, text.split(oldName).join(newName), 'utf8');
  return count;
}

async function main() {
  const opts = parseArgs(process.argv.slice(2));
  const scanDirs = opts.dirs.map((d) => path.resolve(ROOT, d));
  const candidates = [];
  for (const dir of scanDirs) {
    if (!fs.existsSync(dir)) {
      console.warn(`Skipping missing directory: ${dir}`);
      continue;
    }
    candidates.push(...walk(dir, REFERENCE_SKIP_DIRS));
  }

  const images = candidates.filter((f) => IMAGE_EXT.test(f));
  const toConvert = [];
  const skippedIcons = [];
  for (const img of images) {
    if (!opts.includeIcons && ICON_PATTERN.test(img)) {
      skippedIcons.push(img);
    } else {
      toConvert.push(img);
    }
  }

  console.log(`Found ${images.length} PNG/JPEG file(s); converting ${toConvert.length}, skipping ${skippedIcons.length} icon/logo file(s).`);
  if (skippedIcons.length) {
    console.log('Skipped (use --include-icons to force):');
    skippedIcons.forEach((f) => console.log(`  - ${path.relative(ROOT, f)}`));
  }

  if (toConvert.length === 0) {
    console.log('Nothing to convert.');
    return;
  }

  const referenceFiles = findReferenceFiles();
  let bytesBefore = 0;
  let bytesAfter = 0;
  let deleted = 0;

  for (const file of toConvert) {
    const dir = path.dirname(file);
    const base = path.basename(file, path.extname(file));
    const oldName = path.basename(file);
    const newName = `${base}.webp`;
    const outPath = path.join(dir, newName);

    if (fs.existsSync(outPath) && !opts.dryRun) {
      console.log(`SKIP  ${path.relative(ROOT, file)} -> ${newName} already exists`);
      continue;
    }

    const before = fs.statSync(file).size;
    bytesBefore += before;

    if (opts.dryRun) {
      console.log(`DRY   ${path.relative(ROOT, file)} -> ${path.relative(ROOT, outPath)}`);
      continue;
    }

    const info = await sharp(file).webp({ quality: opts.quality }).toFile(outPath);
    bytesAfter += info.size;
    console.log(`CONV  ${path.relative(ROOT, file)} -> ${path.relative(ROOT, outPath)} (${before}B -> ${info.size}B)`);

    let refCount = 0;
    for (const refFile of referenceFiles) {
      refCount += replaceInFile(refFile, oldName, newName);
    }
    if (refCount > 0) {
      console.log(`      updated ${refCount} reference(s) from "${oldName}" to "${newName}"`);
    }

    if (!opts.keepOriginals) {
      fs.unlinkSync(file);
      deleted++;
    }
  }

  if (!opts.dryRun) {
    console.log(`\nDone. ${deleted} original file(s) removed. ${Math.round((bytesBefore - bytesAfter) / 1024)} KB saved.`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
