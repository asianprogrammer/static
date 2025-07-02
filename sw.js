const CACHE_NAME = 'pwa-cache-tnz';
const ASSETS = [
  '/',
  '/index.html',
  '/style.css',
  '/manifest.json',

  // Fonts
  '/assets/fonts/DMSans-Regular.ttf',
  '/assets/fonts/PlayfairDisplay-Regular.ttf',

  // Icons
  '/assets/icons/apple-touch-icon.png',
  '/assets/icons/icon-192.png',
  '/assets/icons/icon-512.png',
  '/assets/icons/logo-16.ico',
  '/assets/icons/logo-32.ico',
  '/assets/icons/logo-256.ico',
  '/assets/icons/logo.svg',
  '/assets/icons/maskable-icon.png',
  '/assets/icons/star.svg',

  // Images (responsive AVIFs, all sizes)
  '/assets/images/small-400w.avif',
  '/assets/images/small-600w.avif',
  '/assets/images/small-800w.avif',
  '/assets/images/img2_dmlqbz_c_scale,w_200.avif',
  '/assets/images/img2_dmlqbz_c_scale,w_409.avif',
  '/assets/images/img2_dmlqbz_c_scale,w_704.avif',
  '/assets/images/img2_dmlqbz_c_scale,w_912.avif',
  '/assets/images/img2_dmlqbz_c_scale,w_1072.avif',
  '/assets/images/new.avif',
  '/assets/images/127.0.0.1_8080_.png'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});
