const BUILD_ID = '__BUILD_ID__';
const CACHE = `paint-a-saint-${BUILD_ID}`;
const APP_SHELL = ['/', '/index.html', '/manifest.webmanifest', '/icon.svg'];

function isServiceWorkerRequest(url) {
  return url.pathname.endsWith('/service-worker.js');
}

function isAppDocument(request, url) {
  return request.mode === 'navigate' || url.pathname === '/' || url.pathname.endsWith('.html') || url.pathname.endsWith('.webmanifest');
}

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll(APP_SHELL)).then(() => self.skipWaiting()),
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE).map((key) => caches.delete(key))))
      .then(() => self.clients.claim()),
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;
  // The browser must always fetch a fresh worker after deploy.
  if (isServiceWorkerRequest(url)) return;

  if (isAppDocument(event.request, url)) {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          if (response.ok) {
            const copy = response.clone();
            caches.open(CACHE).then((cache) => cache.put(event.request, copy));
          }
          return response;
        })
        .catch(() => caches.match(event.request).then((cached) => cached || caches.match('/index.html'))),
    );
    return;
  }

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        if (response.ok) {
          const copy = response.clone();
          caches.open(CACHE).then((cache) => cache.put(event.request, copy));
        }
        return response;
      })
      .catch(() => caches.match(event.request)),
  );
});
