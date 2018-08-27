//Progressive Enhancement (SW supported)

// Check if 'service worker' is in navigator
// if ('serviceWorker' in navigator) {} ...or... you can use
// if (navigator.serviceWorker) {

  if (navigator.serviceWorker) {
  // the method exists, register the serviceWorker
  navigator.serviceWorker.register('fetchEv_Fetch_url.js')
    .then(function(registration) {
      console.log('main.js -> SW -- registered');
    }).catch(console.log);
}
