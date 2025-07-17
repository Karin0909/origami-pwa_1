const CACHE_NAME = 'origami-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/history.html',
  '/schemes.html',
  '/order.html',
  '/contacts.html',
  '/style.css',
  '/images/icon-192.png',
  '/images/icon-512.png',
  '/images/easy.png',
  '/images/medium.jpg',
  '/images/hurd.jpg',
];
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
