const CACHE_NAME = 'somias-flowers-v1';
const FILES_TO_CACHE = [
  'index.html',
  'manifest.json',
  'service-worker.js',
  'icon-512.png',
  'carnation-1488929_1280.jpg',
  'peony-7251009_640.jpg',
  'tulips-7973270_640.jpg',
  'spring-forest-nature-332842.mp3'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(FILES_TO_CACHE))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
