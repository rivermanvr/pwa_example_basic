self.addEventListener('fetch', (e) => {
  if (e.request.url.endsWith('/camera_feed.html')) {

    // The default behavior should be to pass the fetch(`./camera_feed.html`)request
    // on to the app as normal.  To do this we would write what follows:

    // e.respondWith(
    //   fetch(e.request)
    // );

    // this above code is a fetch method that supports either string urls or request objects
    // so we are requesting the camera feed on behalf of the original fetch call in main.js
    // The above additional code effectively doesn't do anything more than the original fetch
    // did other than make the service worker a proxy.

    //--------------------------------------------------

    // What we really want to do is make sure that this call is successful before we let it move on.
    // To do that we need to resolve this fetch and check if it is ok.
    // If everything is ok, then we will return the response (our default behavior)
    // As an aside, look at the network tab and you will see two network requests for camera_feed.html
    // one request is online (the one with the gear) and is being done by our service worker.
    // The second one is offline and was done by the main.js.
    // ....now we have full control of the request in the service worker.

    // e.respondWith(
    //   fetch(e.request)
    //     .then(res => {
    //       if(res.ok) return res;
    //     })
    // );

    //--------------------------------------------------

    // Now we can handle the case when the file is unavailable as follows:

    e.respondWith(
      fetch(e.request)
        .then(res => {
          if(res.ok) return res;

          return new Response('Camera feed currently unavailable');
        })
    );

    // Now we get a graceful error for the user and the 404 error happens within the service worker (see the network tab)

  }
});
