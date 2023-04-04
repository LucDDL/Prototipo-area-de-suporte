const cacheName = "AreadeAtendimento-v1";
const filesToCache = [
  "/",
  "/index.html",
  "/style.css",
  "/zd.js",
  "/icon-72x72.png",
  "/icon-96x96.png",
  "/icon-128x128.png",
  "/icon-144x144.png",
  "/icon-152x152.png",
  "/icon-192x192.png",
  "/icon-384x384.png",
  "/icon-512x512.png",
];

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(cacheName).then(function (cache) {
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      return response || fetch(event.request);
    })
  );
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker.register("/sw.js").then(
      function (registration) {
        console.log(
          "ServiceWorker registration successful with scope: ",
          registration.scope
        );

        // Verifica se o usuário não instalou o app ainda
        if (
          !window.matchMedia("(display-mode: standalone)").matches &&
          !window.navigator.standalone
        ) {
          // Mostra um prompt para o usuário instalar o app
          var installPromptEvent;
          window.addEventListener("beforeinstallprompt", function (event) {
            // Salva o evento para disparar depois
            installPromptEvent = event;

            // Mostra um botão para o usuário instalar o app
            var btnInstall = document.createElement("button");
            btnInstall.innerText = "Instalar App";
            btnInstall.addEventListener("click", function () {
              // Dispara o evento para o usuário instalar o app
              installPromptEvent.prompt();

              // Aguarda o usuário tomar uma ação
              installPromptEvent.userChoice.then(function (choiceResult) {
                console.log(choiceResult.outcome);

                // Verifica se o usuário instalou o app
                if (choiceResult.outcome === "accepted") {
                  console.log("O usuário instalou o app");
                } else {
                  console.log("O usuário não instalou o app");
                }

                // Limpa o evento para não ser disparado novamente
                installPromptEvent = null;
              });
            });

            // Adiciona o botão à página
            document.body.appendChild(btnInstall);
          });
        }
      },
      function (error) {
        console.log("ServiceWorker registration failed: ", error);
      }
    );
  });
}
