import { createServer } from 'vite';
import { renderToStaticMarkup } from 'react-dom/server';
import React from 'react';
import fs from 'fs';
import path from 'path';

const root = '/tmp/pal';
const out = '/tmp/pal/regionsvg';
fs.mkdirSync(out, { recursive: true });

const server = await createServer({ root, server: { middlewareMode: true }, appType: 'custom', logLevel: 'error' });
const { publishedSaints } = await server.ssrLoadModule('/src/data/saints.ts');
const SaintArt = (await server.ssrLoadModule('/src/components/SaintArt.tsx')).default;

const manifest = [];
for (const saint of publishedSaints) {
  const colors = {};
  const map = {};
  saint.regions.forEach((r, i) => {
    const v = i + 1;
    const c = `rgb(${v * 9},${250 - v * 9},${(v * 23) % 200})`;
    colors[r] = c;
    map[c] = r;
  });
  const svg = renderToStaticMarkup(
    React.createElement(SaintArt, { saint, colors, onPaint: () => {}, svgId: 'x' }),
  );
  fs.writeFileSync(path.join(out, saint.id + '.svg'), svg);
  manifest.push({ id: saint.id, card: saint.cardImage, regions: saint.regions, map });
}
fs.writeFileSync(path.join(out, 'manifest.json'), JSON.stringify(manifest, null, 1));
console.log('rendered', manifest.length);
await server.close();
process.exit(0);
