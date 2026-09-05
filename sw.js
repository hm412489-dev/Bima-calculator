// ব্রাউজারকে বাধ্য করা অবিলম্বে নতুন সার্ভিস ওয়ার্কার সক্রিয় করতে
self.addEventListener('install', (event) => {
  self.skipWaiting();
});
1
self.addEventListener('activate', (event) => {
  event.waitUntil(
    // ১. ফোনের ক্যাশ স্টোরেজের সব ফাইল পুরোপুরি মুছে ফেলা
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          console.log('Deleting cache:', cacheName);
          return caches.delete(cacheName);
        })
      );
    }).then(() => {
      // ২. বর্তমান সার্ভিস ওয়ার্কার নিজেকে পুরোপুরি আনরেজিস্টার করা
      return self.registration.unregister();
    }).then(() => {
      // ৩. ওপেন থাকা সব উইন্ডো বা PWA স্ক্রিন রিলোড করিয়ে দেওয়া
      return self.clients.matchAll({ type: 'window', includeUncontrolled: true });
    }).then((clients) => {
      clients.forEach((client) => {
        client.navigate(client.url);
      });
    })
  );
});

// কোনো অফলাইন রিকোয়েস্ট যেন আর সার্ভিস না করে
self.addEventListener('fetch', (event) => {
  // কোনো ক্যাশ রেসপন্স না দিয়ে সরাসরি নেটওয়ার্কে পাঠানো
  event.respondWith(fetch(event.request));
});
