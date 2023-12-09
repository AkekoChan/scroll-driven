const cacheFirst = async ({ request, fallbackUrl }) => {
  const staticCache = await caches.open("static-cache");
  const responseFromCache = await staticCache.match(request);
  if (responseFromCache) {
    return responseFromCache;
  }
  try {
    const responseFromNetwork = await fetch(request);
    const cache = await caches.open("cache");
    await cache.put(request, responseFromNetwork.clone());
    console.log("ok");
    return responseFromNetwork;
  } catch (error) {
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

self.addEventListener("fetch", (event) => {
  event.respondWith(
    cacheFirst({
      request: event.request,
      fallbackUrl: "fallback.html",
    })
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== "static-cache") {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
