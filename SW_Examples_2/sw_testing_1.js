console.log('sw.js -> SW registered');

// There are tasks that you can do here and 
// this.serviceWorker can be referenced by using "self"
// so let's add an eventlistener:

self.addEventListener('install', (e) => {
  console.log('sw.js -> Install event');
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
  console.log('sw.js -> Activate event');
  let activatePromise = new Promise(resolve => {
    //you would do activate tasks as well
    //simulating waiting for something by using a setTimeout:
    setTimeout(resolve, 3000);
  })

  //you would also need the installer to wait to finish before letting
  //the process move on to the next activate event as follows:
  e.waitUntil(activatePromise);
});
