self.addEventListener('fetch', (e) => {
  if (e.request.url.endsWith('/greet')) {
    // if we find /greet, we will serve a message
    // note: fetch returns a promise
    
    //Lets send html this time
    let headers = new Headers({ 'Content-Type': 'text/html' });
    let customRes = new Response('<h1>Hi Vince.  How are you today?</h1>', { headers });

    e.respondWith(customRes);
  }
});
