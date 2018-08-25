//Progressive Enhancement (SW supported)

// Check if 'service worker' is in navigator
// if ('serviceWorker' in navigator) {} ...or... you can use the following

if (navigator.serviceWorker) {
  // the method exists so register the serviceWorker
  navigator.serviceWorker.register('/SW_Examples/sw_asyncSetup.js')
    .then(function(registration) {
      console.log('main.js -> SW -- registered');
    }).catch(console.log);
}
