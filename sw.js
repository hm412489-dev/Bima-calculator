// সব অ্যাক্টিভ ক্লায়েন্টকে সাথে সাথে টেক-ওভার করা
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    // ১. ফোনের ক্যাশ স্টোরেজের সব ক্যাশ ফাইল মুছে ফেলা
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          return caches.delete(cacheName);
        })
      );
    }).then(() => {
      // ২. বর্তমান সার্ভিস ওয়ার্কারটি নিজেই নিজেকে আনরেজিস্টার করা
      return self.registration.unregister();
    }).then(() => {
      // ৩. ওপেন থাকা সব পেজ রিলোড করিয়ে দেওয়া যাতে ফাঁকা হয়ে যায়
      return self.clients.matchAll({ type: 'window' });
    }).then((clients) => {
      clients.forEach((client) => {
        client.navigate(client.url);
      });
    })
  );
});