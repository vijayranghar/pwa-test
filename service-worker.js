const CACHE_KEY = 'dogs-site-cache'
const FILE_TO_CACHE=[
    "index.html",
    "style.css",
    "https://placedog.net/500/280?id=1",
    "https://placedog.net/500/280?id=2",
    "https://placedog.net/500/280?id=3",
    "https://placedog.net/500/280?id=4",
    "https://placedog.net/500/280?id=5",
    "https://placedog.net/500/280?id=6",
    "https://placedog.net/500/280?id=7",
    "https://placedog.net/500/280?id=8",
    "https://placedog.net/500/280?id=9",
    "https://placedog.net/500/280?id=10",
    "https://placedog.net/500/280?id=11",
    "https://placedog.net/500/280?id=12",
    "https://placedog.net/500/280?id=13",
    "https://placedog.net/500/280?id=14",
    "https://placedog.net/500/280?id=15",
    "https://placedog.net/500/280?id=16",
    "https://placedog.net/500/280?id=17",
    "https://placedog.net/500/280?id=18",
    "https://placedog.net/500/280?id=19",
    "https://placedog.net/500/280?id=20",

]
this.addEventListener("install", (event)=>{
    event.waitUntil(caches.open(CACHE_KEY).then((cache) => {
        console.log("cache opened")
        console.log(cache)
        return cache.addAll(FILE_TO_CACHE)
    }))
})

this.addEventListener("fetch", (event) => {
    event.respondWith(caches.match(event.request).then((response) => {
        if(response) {
            return response
        }
        return fetch(event.request)
    }))
})

this.addEventListener("activate", function(event){
    console.log("service worker activated")
})