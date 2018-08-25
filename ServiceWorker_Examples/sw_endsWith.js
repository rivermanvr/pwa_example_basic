self.addEventListener('fetch', (e) => {
  if (e.request.url.endsWith('style.css')) {
    console.log('Fetch event for styles.css: ' + e.request.url);
  }
});
