'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.json": "00865b7eb68a716bbc46e21b15d9d0ab",
"assets/AssetManifest.smcbin": "1095d63cfe3dd34971a33e990193742e",
"assets/assets/2-STARBOOKS-LOGO.png": "6cd10ca1ba55ce7b50b093a410d70320",
"assets/assets/apo-2.jpg": "60a7f9b5ea19e0928c93c849c6787f58",
"assets/assets/back-arrow.json": "10aff71f8d6a061a1591ebfea6e23cb5",
"assets/assets/categoy.png": "4837dd5bb302527e6db77a2aa4cc7af8",
"assets/assets/db/area.json": "52d8ca00447129c8cfb84ca6744d459e",
"assets/assets/db/category.json": "2d63385e0d96b424fa1e0243c4ae3a32",
"assets/assets/DOST-LOGO.png": "b851d84102968e5b32078ca11b321746",
"assets/assets/DOST-STII-updated.png": "bf1ba6c470c66c93a8672effcd97effa",
"assets/assets/icons/2%2520STARBOOKS%2520LOGO.png": "6cd10ca1ba55ce7b50b093a410d70320",
"assets/assets/icons/arrow-back.png": "b84291edc69beda72364ddc18736f8af",
"assets/assets/icons/bird.png": "21d7aed9f581c6c536a7d5255e610e32",
"assets/assets/icons/conservation_icon.png": "b64cf010d56ba5df581b475a4f3db43e",
"assets/assets/icons/contact_icon.png": "e14ac9e643603eefa3fed41e8be2f1d9",
"assets/assets/icons/ecotourism_icon.png": "a5f993c867cedeeb7bf47ca3c035f645",
"assets/assets/icons/gallery_icon.png": "148de815608512d77f4e9770f3ca26df",
"assets/assets/icons/history_icon.png": "d562258b9fc2f2405ef6fc1a68125a52",
"assets/assets/icons/management_icon.png": "049084f622f3d15f42d6b46b77c97e30",
"assets/assets/icons/map_icon.png": "e0c8ea4bd9195ed11f6be35743651888",
"assets/assets/icons/people_icon.png": "322b9c2f6e9f3b54e245677693cacd79",
"assets/assets/icons/research_icon.png": "f8aea44aa52f679fb6e9bd868c624ff6",
"assets/assets/icons/sites_icon.png": "f30c67b7d6eff9c7be4132212c5f6ac8",
"assets/assets/icons/smarty.png": "56dfc0328b23e811dc31989bc7ff933b",
"assets/assets/icons/threats_icon.png": "a4a4f70dda4622a8c57cd31b384f08fb",
"assets/assets/icons/wildlife_icon.png": "0153d1c8457e332d8ac97d7ec66f50a7",
"assets/assets/images/apo-island-sm.png": "994a0e0169e0c4f2b292609441f4e84e",
"assets/assets/images/apo-island.png": "369962b5432ea54ba3f53478807c85a3",
"assets/assets/images/balinsasayao.png": "604a1840b0ae093aedd75a1afde30fee",
"assets/assets/images/tanon-strait.png": "8e2571c882244b1baabb5690512ee458",
"assets/assets/starbooks-nature-logo.png": "f199585a98fe5daaabc46c7ebcae63e1",
"assets/assets/videos/Apo-Island-video.mp4": "f55822aed49fbacf5fdfc1b737ba00f3",
"assets/FontManifest.json": "a0fa824056854d07607cb5f9feb96b77",
"assets/fonts/MaterialIcons-Regular.otf": "17f5cc8fde2a4a6d742f45f2ad0c5208",
"assets/fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/fonts/Poppins-Light.ttf": "fcc40ae9a542d001971e53eaed948410",
"assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/NOTICES": "dcfe75fde5a0a1870050de2125b57ec2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "60114762957c6a50d2e0cd7d2c5b7b98",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "59ed8478b398a8966eee147930f3d966",
"canvaskit/canvaskit.wasm": "641ba6d615314c42874bf914ef2d093e",
"canvaskit/chromium/canvaskit.js": "853c6cebea386c05aa9d954f11b2c1ca",
"canvaskit/chromium/canvaskit.wasm": "ffc522e9ff0a7bbe6bfd2a6f54f974e4",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "0d7c2e198fc5420d3940de2d44c19023",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "138098ff2d2084aec8840459591ddd0b",
"/": "138098ff2d2084aec8840459591ddd0b",
"main.dart.js": "fb52415d2d7bb16f4ad28122807c0bf8",
"manifest.json": "52241951337de779c318de75885c4a1e",
"version.json": "4bf409a6e2944180c24b0b44abd014c6"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
