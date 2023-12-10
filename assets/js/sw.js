const cacheName = "scroll-driven-cache-v1";
const appShellFiles = [
  "/index.html",
  "/manifest.webmanifest",
  "/assets/js/about.js",
  "/assets/js/btn-pwa.js",
  "/assets/js/hero.js",
  "/assets/js/main.js",
  "/assets/js/sw.js",
  "/assets/js/timeline.js",
  "/assets/js/utility.js",
  "/assets/css/main.css",
  "/assets/css/blocs/about.css",
  "/assets/css/blocs/hero.css",
  "/assets/css/blocs/reveal.css",
  "/assets/css/blocs/timeline.css",
  "/assets/css/global/font.css",
  "/assets/css/vendor/reset.css",
  "/assets/img/view-explication1.jpg",
  "/assets/img/view-explication2.jpg",
  "/assets/img/logo-scroll-driven.svg",
  "/assets/fonts/Oswald-Regular.woff2",
  "/assets/fonts/Oswald-Regular.woff",
  "/assets/fonts/Oswald-SemiBold.woff2",
  "/assets/fonts/Oswald-SemiBold.woff",
];

self.addEventListener("install", (e) => {
  console.log("[Service Worker] Install");
  e.waitUntil(
    (async () => {
      const cache = await caches.open(cacheName);
      console.log("[Service Worker] Caching all: app shell and content");

      const addAllPromises = appShellFiles.map(async (url) => {
        try {
          const response = await fetch(url);
          await cache.put(url, response.clone());
        } catch (error) {
          console.error(
            "[Service Worker] Cache add error for",
            url,
            ":",
            error
          );
        }
      });

      await Promise.all(addAllPromises);
    })()
  );
});

const networkFirst = async ({ request, fallbackUrl }) => {
  try {
    const responseFromNetwork = await fetch(request);
    console.log(responseFromNetwork);
    const cache = await caches.open(cacheName);

    await cache.put(request, responseFromNetwork.clone());

    return responseFromNetwork;
  } catch (error) {
    const responseFromCache = await caches.match(request);

    if (responseFromCache) {
      return responseFromCache;
    }

    const fallbackResponse = await caches.match(fallbackUrl);

    if (fallbackResponse) {
      return fallbackResponse;
    }

    return new Response("Network error", {
      status: 408,
      headers: { "Content-Type": "text/plain" },
    });
  }
};
