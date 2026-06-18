// 基礎的 PWA 監聽事件，維持 App 正常運作
self.addEventListener('install', (e) => {
  console.log('Service Worker 正在安裝...');
});

self.addEventListener('fetch', (e) => {
  // 這裡可以處理離線快取，目前先留空讓請求正常通過
});
