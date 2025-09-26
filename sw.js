const CACHE = 'polyglot-v1';
const OFFLINE_URLS = ['./','index.html','https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css','https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js'];
self.addEventListener('install',e=>{ self.skipWaiting(); e.waitUntil(caches.open(CACHE).then(c=>c.addAll(OFFLINE_URLS))); });
self.addEventListener('activate',e=>self.clients.claim());
self.addEventListener('fetch',e=>{ e.respondWith(fetch(e.request).catch(()=>caches.match(e.request).then(r=>r||caches.match('./')))); });