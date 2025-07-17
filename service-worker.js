const CACHE_NAME = 'origami-world-v1';
const urlsToCache = [
  './',                // Главная страница
  './index.html',      // index.html
  './history.html',    // history.html
  './schemes.html',    // schemes.html
  './order.html',      // order.html
  './contacts.html',   // contacts.html
  './style.css',       // CSS-файл
  './images/icon-192.png', // Иконки
  './images/icon-512.png',
  // Остальные важные файлы (JS, изображения)
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
      .catch(() => caches.match('./index.html')) // Fallback, если страница не в кэше
  );
});
