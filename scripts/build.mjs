// Baydream Books build
//
// Step 1 (now): copy everything in src/ into dist/, which is what
// Cloudflare serves.
//
// Step 2 (later): read the production Google Sheet, generate one
// book entry page per row at dist/books/<slug>/index.html, match each
// row to src/covers/<TitleAuthor>-CardImage.png, make web-sized cover
// images, and list any rows with no matching cover.

import { cpSync, rmSync, mkdirSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const src = join(root, 'src');
const dist = join(root, 'dist');

if (!existsSync(src)) {
  console.error('Build failed: src/ folder not found.');
  process.exit(1);
}

rmSync(dist, { recursive: true, force: true });
mkdirSync(dist, { recursive: true });
cpSync(src, dist, {
  recursive: true,
  filter: (path) => !path.endsWith('.gitkeep')
});

console.log('Build complete: src/ copied to dist/.');
