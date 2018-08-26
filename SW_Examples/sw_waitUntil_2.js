// Service Worker

console.log('sw.js -> SW registered_2');

self.addEventListener('install', (e) => {
  console.log('SW: Install event_2');
  let installPromise = new Promise(resolve => {
    //you would do async setup here, like setting up a cache for the page
    //simulating waiting for something by using a setTimeout:
    setTimeout(resolve, 3000);
  })

  //you would also need the installer to wait to finish before letting
  //the process move on to the activate event as follows:
  e.waitUntil(installPromise);
});

self.addEventListener('activate', (e) => {
  console.log('SW: New SW Activate event_2');
  let activatePromise = new Promise(resolve => {
    //you would do activate tasks as well
    //simulating waiting for something by using a setTimeout:
    setTimeout(resolve, 3000);
  })

  //you would also need the installer to wait to finish before letting
  //the process move on to the next activate event as follows:
  e.waitUntil(activatePromise);
});
