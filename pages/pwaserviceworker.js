const CACHE_NAME = 'wellnessguide-v1';

const FILES_TO_CACHE = [
  'pwaproject.html',
  'pwaapp.js',
  'pwastyle.css',
  'pwadata.json',
  'pwamanifest.json',
  'icon-192.png',
  'icon-512.png',
  'meditation.png',
  'journaling.png',
  'exercise.png',
  'thirdspaces.png',
  'hobbies.png',
  'audio/meditation.mp3',
  'audio/journaling.mp3',
  'audio/exercise.mp3',
  'audio/thirdspaces.mp3',
  'audio/hobbies.mp3'
];

// install
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Caching files');
      return cache.addAll(FILES_TO_CACHE);
    })
  );
});

// activate
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(keyList.map((key) => {
        if (key !== CACHE_NAME) {
          return caches.delete(key);
        }
      }));
    })
  );
});

//when offline
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
