
self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open('restaurant')
            .then(function (caches) {
                return caches.addAll([
                    '/',
                    '/data/restaurants.json',
                    '/css/restaurant.css',
                    '/css/styles.css',
                    '/img/1.jpg',
                    '/img/2.jpg',
                    '/img/3.jpg',
                    '/img/4.jpg',
                    '/img/5.jpg',
                    '/img/6.jpg',
                    '/img/7.jpg',
                    '/img/9.jpg',
                    '/img/8.jpg',
                    '/img/10.jpg',
                    '/js/dbhelper.js',
                    '/js/main.js',
                    '/js/restaurant_info.js',
                    'index.html',
                    'restaurant.html'
                ])
            })
    )
})


self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request)
        .then(function (response) {
            if (response) {
                return response
            }else {
                return fetch(event.request.clone())
            }
        })
    )
});
