self.addEventListener('fetch', (e) => {
  if (e.request.url.endsWith('/greet')) {
    // if we find /greet, we will serve a message
    // note: fetch returns a promise
    let customRes = new Response('Hi Vince.  How are you today?');

    //sends text
    e.respondWith(customRes);
  }
});
