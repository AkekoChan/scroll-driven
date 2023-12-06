import "./hero.js";
import "./timeline.js";
import "./about.js";

("use strict");
(function () {
  const App = {
    DOM: {
      revealElements: $$(".bottom-fade"),
      closeNoSupport: $(".no-support__close"),
    },

    init: () => {
      App.event();
    },

    event: () => {
      App.DOM.closeNoSupport.addEventListener("click", App.closeModal);

      App.DOM.closeNoSupport.addEventListener("keydown", (e) => {
        if (e.key === " " || e.key === "Enter") {
          e.preventDefault();
          App.closeModal();
        }
      });
      // console.log(App.DOM.closeNoSupport);
      // App.DOM.revealElements.forEach((el, index) => {
      //   el.style.animationDelay = `${index * 0.5}s`;
      // });
    },

    closeModal: () => {
      $(".no-support__blur").style.display = "none";
      $(".no-support").style.display = "none";
    },
  };

  window.addEventListener("DOMContentLoaded", App.init);
})();
