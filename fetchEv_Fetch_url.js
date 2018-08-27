console.log('SW: Fetch routine');

self.addEventListener('fetch', (e) => {
  console.log('Fetch event: ' + e.request.url);

});
