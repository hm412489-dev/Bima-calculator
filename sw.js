const CACHE_NAME = 'bima-calc-v21';
const CORE_ASSETS = [
    './',
    './index.html',
    './app.js',
    './plan-details.js',
    './sidebar.js',
    './manifest.json'
];

// ১. ইন্সটল ইভেন্ট (প্রয়োজনীয় কোর ফাইলগুলো আগে অফলাইন ক্যাশ করবে)
self.addEventListener('install', (e) => {
    self.skipWaiting();
    e.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(CORE_ASSETS).catch((err) => {
                console.warn('কোর ফাইল ক্যাশ করতে সমস্যা হয়েছে:', err);
            });
        })
    );
});

// ২. অ্যাক্টিভেট ইভেন্ট (পুরনো ভার্সনের ক্যাশ থাকলে তা স্বয়ংক্রিয়ভাবে মুছে ফেলবে)
self.addEventListener('activate', (e) => {
    e.waitUntil(
        caches.keys().then((keys) => {
            return Promise.all(
                keys.map((key) => {
                    if (key !== CACHE_NAME) {
                        return caches.delete(key);
                    }
                })
            );
        }).then(() => self.clients.claim())
    );
});

// ৩. ফেচ ইভেন্ট (ক্যাশ ফার্স্ট স্ট্র্যাটেজি + এক্সটার্নাল ফন্ট ও সিডিএন ডায়নামিক ক্যাশিং)
self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request).then((cachedResponse) => {
            if (cachedResponse) {
                return cachedResponse;
            }
            return fetch(e.request).then((networkResponse) => {
                // শুধুমাত্র সফল GET রিকোয়েস্টগুলো ক্যাশে যোগ করবে (ফন্ট, আইকন সিডিএন সহ)
                if (networkResponse && networkResponse.status === 200 && e.request.method === 'GET') {
                    const responseClone = networkResponse.clone();
                    caches.open(CACHE_NAME).then((cache) => {
                        cache.put(e.request, responseClone);
                    });
                }
                return networkResponse;
            }).catch(() => {
                // অফলাইনে থাকলে এবং ক্যাশে ফাইলটি না থাকলে এটি ফেইলর রোধ করবে
            });
        })
    );
});
