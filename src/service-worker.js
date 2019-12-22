import {timestamp, files, shell, routes} from '@sapper/service-worker';

const ASSETS = `cache${timestamp}`;

const to_cache = shell.concat(files);
const cached = new Set(to_cache);

self.addEventListener('install', evt => {
  evt.waitUntil(
    caches.open(ASSETS)
      .then(cache => cache.addAll(to_cache))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', evt => {
  evt.waitUntil(
    caches.keys().then(async keys => {
      for(const key of keys) {
        if(key !== ASSETS) await caches.delete(key);
      }
      self.clients.claim();
    })
  );
});

self.addEventListener('fetch', evt => {
  if(evt.request.method !== 'GET' ||
    evt.request.headers.has('range')) return;

  const url = new URL(evt.request.url);

  if(!url.protocol.startsWith('http')) return;
  if(url.hostname === self.location.hostname &&
    url.port !== self.location.port) return;

  if(url.host === self.location.host && cached.has(url.pathname)) {
    evt.respondWith(caches.match(evt.request));
    return;
  }

  if(evt.request.cache === 'only-if-cached') return;

  evt.respondWith(
    caches.open(`offline${timestamp}`)
      .then(async cache => {
        try {
          const response = await fetch(evt.request);
          cache.put(evt.request, response.clone());
          return response;
        } catch(err) {
          const response = await cache.match(evt.request);
          if(response) return response;
          throw err;
        }
      })
  );
});
