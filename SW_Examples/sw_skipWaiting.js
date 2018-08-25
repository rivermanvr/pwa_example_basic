self.addEventListener('install', (e) => {
    self.skipWaiting();
  });

self.addEventListener('activate', (e) => {
  console.log('sw.js -> skip Waiting to this SW Activate event');
});
