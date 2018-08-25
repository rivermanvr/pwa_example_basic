//Progressive Enhancement (SW supported)
// Check if 'service worker' is in navigator
// if ('serviceWorker' in navigator) {}
if (navigator.serviceWorker) {
  // the method exists so register the serviceWorker
  navigator.serviceWorker.register('/sw.js')
    .then(function(registration) {
      console.log('main.js -> SW registered');
    })
    .catch(console.log);
}
