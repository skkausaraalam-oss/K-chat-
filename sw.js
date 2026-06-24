// sw.js - Service Worker for K-Chat PWA Badge Notification
const CACHE_NAME = 'k-chat-cache-v1';
const urlsToCache = ['./', './index.html', './Index.html'];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});

// Background me notification handle karne ke liye
self.addEventListener('push', event => {
  const options = {
    body: 'Naya sandesh aaya hai!',
    icon: 'icon.png', // Agar aapke paas icon ho baad me
    badge: 'icon.png'
  };
  event.waitUntil(
    self.registration.showNotification('K-Chat', options)
  );
});
