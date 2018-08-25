self.addEventListener('fetch', (e) => {
  if (e.request.url.endsWith('style.css')) {
    // if we find style.css, we will serve style2.css
    // note: fetch returns a promise
    e.respondWith( fetch('/style2.css') )
  }
});
