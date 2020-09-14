importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

workbox.routing.registerRoute(
  // Cache CSS files.
  /\.(css|js|woff)$/,
  // Use cache but update in the background.
  new workbox.strategies.StaleWhileRevalidate()
);

workbox.googleAnalytics.initialize();
