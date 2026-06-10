const CACHE_NAME = 'feras-cache-v1';
const assets = [
  '/',
  '/index.html',
  '/manifest.json'
];

// تثبيت السيرفس وركر وتخزين الملفات الأساسية
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(assets);
    })
  );
});

// استدعاء الملفات المخزنة عند تصفح التطبيق
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(cachedResponse => {
      return cachedResponse || fetch(e.request);
    })
  );
});