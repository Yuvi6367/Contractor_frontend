const CACHE_NAME = 'contractor-pro-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/login.html',
  '/Trial.html',
  '/Labour.html',
  '/ContractorPro+Icon 01.png',
  '/contact.html',
    '/terms.html',
    '/refund.html'
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