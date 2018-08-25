self.addEventListener('fetch', (e) => {
  console.log('Fetch event: ' + e.request.url);
});
