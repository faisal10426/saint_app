import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';

function applyAssetCacheHeaders(server: { middlewares: { use: (fn: (req: { url?: string }, res: { setHeader: (name: string, value: string) => void }, next: () => void) => void) => void } }) {
  server.middlewares.use((req, res, next) => {
    const url = req.url?.split('?')[0] ?? '';
    if (url === '/' || url.endsWith('.html') || url.endsWith('/service-worker.js') || url.endsWith('.webmanifest')) {
      res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
    } else if (url.startsWith('/assets/')) {
      res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
    }
    next();
  });
}

function stampServiceWorker(): Plugin {
  return {
    name: 'stamp-service-worker',
    apply: 'build',
    closeBundle() {
      const file = resolve(__dirname, 'dist/service-worker.js');
      try {
        const buildId = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
        const source = readFileSync(file, 'utf8').replaceAll('__BUILD_ID__', buildId);
        writeFileSync(file, source);
      } catch {
        // Public service worker is copied into dist during a normal Vite build.
      }
    },
  };
}

function noStaleHtmlCache(): Plugin {
  return {
    name: 'no-stale-html-cache',
    configureServer: applyAssetCacheHeaders,
    configurePreviewServer: applyAssetCacheHeaders,
  };
}

export default defineConfig({
  plugins: [react(), stampServiceWorker(), noStaleHtmlCache()],
  server: { host: true },
  preview: { host: true, port: 3000 },
});
