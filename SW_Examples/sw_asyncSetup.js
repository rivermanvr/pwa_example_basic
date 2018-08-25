// Service Worker

self.addEventListener('install', (e) => {
  console.log('SW: Install Event');

  let installPromise = new Promise((resolve) => {
    //some async tasks
    setTimeout(resolve, 3000)
  })

  //Tasks for the install event
  e.waitUntil(installPromise);

});

self.addEventListener('activate', (e) => {
  console.log('SW: Activate Event');
});