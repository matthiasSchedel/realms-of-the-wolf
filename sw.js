// Service worker template. vite.config.ts fills in VERSION and PRECACHE at build time and emits dist/sw.js.
// Precache: the app shell (html, every JS/CSS chunk, manifest, icons) and critical art, so a match starts
// offline after the first visit. Everything else same-origin is cached the first time it loads.
// Each build gets new cache names; activate deletes the previous build's caches.
const VERSION = '14ff63949984';
const PRECACHE = [
  "./art/icons/cmd-attack.webp",
  "./art/icons/cmd-build.webp",
  "./art/icons/cmd-cancel.webp",
  "./art/icons/cmd-gather.webp",
  "./art/icons/cmd-move.webp",
  "./art/icons/cmd-rally.webp",
  "./art/icons/cmd-stop.webp",
  "./art/icons/cmd-train.webp",
  "./art/icons/cmd-upgrade.webp",
  "./art/icons/hg-barracks.webp",
  "./art/icons/hg-brazier.webp",
  "./art/icons/hg-cottage.webp",
  "./art/icons/hg-forge.webp",
  "./art/icons/hg-hall.webp",
  "./art/icons/hg-lodge.webp",
  "./art/icons/rb-barracks.webp",
  "./art/icons/rb-forge.webp",
  "./art/icons/rb-hall.webp",
  "./art/icons/rb-hut.webp",
  "./art/icons/rb-ice-shrine.webp",
  "./art/icons/rb-lodge.webp",
  "./art/icons/res-blizzard.webp",
  "./art/icons/res-chill.webp",
  "./art/icons/res-emberstone.webp",
  "./art/icons/res-population.webp",
  "./art/icons/res-timber.webp",
  "./art/icons/res-warmth.webp",
  "./art/screens/keyart-1180x820.webp",
  "./art/screens/keyart-1366x1024.webp",
  "./art/screens/loading.webp",
  "./art/ui/banner-hearthguard.webp",
  "./art/ui/banner-rimeborn.webp",
  "./art/ui/button-pressed.webp",
  "./art/ui/button.webp",
  "./art/ui/minimap-frame.webp",
  "./art/ui/panel.webp",
  "./assets/app-DYLfv8sL.js",
  "./assets/app-DaqN2GwE.css",
  "./assets/hook-DnPgW_1e.js",
  "./assets/index-D-6zujke.js",
  "./assets/index-Dkyjq4nd.css",
  "./assets/kit-Deha9uJr.js",
  "./assets/sim-DNBI1a9W.js",
  "./assets/three-CUw8yQ0h.js",
  "./icons/apple-touch-icon.png",
  "./icons/icon-192.png",
  "./icons/icon-512-maskable.png",
  "./icons/icon-512.png",
  "./index.html",
  "./manifest.webmanifest"
];
const SHELL_CACHE = `frostmark-shell-${VERSION}`;
const RUNTIME_CACHE = `frostmark-runtime-${VERSION}`;
/** Wait this long for a fresh page before falling back to the cached one (slow hotel wifi). */
const NAVIGATE_TIMEOUT_MS = 3000;

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(SHELL_CACHE)
      .then((cache) => cache.addAll(PRECACHE.map((path) => new Request(path, { cache: 'reload' }))))
      .then(() => self.skipWaiting()),
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((k) => k.startsWith('frostmark-') && k !== SHELL_CACHE && k !== RUNTIME_CACHE)
            .map((k) => caches.delete(k)),
        ),
      )
      .then(() => self.clients.claim()),
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;
  event.respondWith(req.mode === 'navigate' ? navigate(req) : cacheFirst(req));
});

/** Network first so a new deploy shows up, the cached shell when offline or slow. */
async function navigate(req) {
  const shell = () => caches.match('./index.html', { cacheName: SHELL_CACHE });
  try {
    const fresh = await Promise.race([
      fetch(req),
      new Promise((_, reject) => setTimeout(() => reject(new Error('timeout')), NAVIGATE_TIMEOUT_MS)),
    ]);
    if (fresh.ok) return fresh;
    return (await shell()) || fresh;
  } catch (err) {
    const cached = await shell();
    if (cached) return cached;
    throw err;
  }
}

/** Hashed chunks and art never change under one URL within a build, so the cache wins. */
async function cacheFirst(req) {
  const hit = await caches.match(req, { ignoreSearch: true });
  if (hit) return hit;
  const res = await fetch(req);
  if (res.ok) {
    const copy = res.clone();
    caches.open(RUNTIME_CACHE).then((cache) => cache.put(req, copy));
  }
  return res;
}
