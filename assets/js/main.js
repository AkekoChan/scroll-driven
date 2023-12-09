import "./hero.js";
import "./timeline.js";
import "./about.js";
import "./btn-pwa.js";
import "./no-support-modal.js";

("use strict");
(function () {
  const App = {
    DOM: {
      // revealElements: $$(".bottom-fade"),
    },

    init: () => {
      App.event();
    },

    event: () => {
      App.registerServiceWorker();
    },

    registerServiceWorker: async () => {
      if ("serviceWorker" in navigator) {
        navigator.serviceWorker
          .register("/assets/js/sw.js")
          .then((registration) => {
            console.log("Service Worker enregistré avec succès:", registration);
          })
          .catch((error) => {
            console.error("Erreur d'enregistrement du Service Worker:", error);
          });
      }
    },
  };

  window.addEventListener("DOMContentLoaded", App.init);
})();
