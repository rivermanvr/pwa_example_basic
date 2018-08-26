self.addEventListener('install', (e) => {
    self.skipWaiting();
  });

self.addEventListener('activate', (e) => {
  console.log('SW -> skip Waiting to this SW Activate event');
});
