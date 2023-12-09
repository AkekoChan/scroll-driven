class BtnPwa extends HTMLElement {
  constructor() {
    super();
    this.installPrompt = null;

    // Créer un shadow DOM
    this.attachShadow({ mode: "open" });

    // HTML du composant
    this.shadowRoot.innerHTML = `
      <style>
      .btn-pwa {
        position: fixed;
        z-index: 150;
        top: 12px;
        left: 12px;
        background: var(--black-1);
        color: var(--white-1);
        padding: 0.6rem 0.8rem;
        border-radius: 0.875rem;
        border: none;
        cursor: pointer;
      }
      </style>
      <button class="btn-pwa">Installer l'application</button>
    `;
  }

  connectedCallback() {
    this.button = this.shadowRoot.querySelector(".btn-pwa");
    this.button.addEventListener("click", this.installPwa.bind(this));

    window.addEventListener("beforeinstallprompt", (event) => {
      event.preventDefault();
      this.installPrompt = event;
    });
  }

  disconnectedCallback() {
    this.button.removeEventListener("click", this.installPwa.bind(this));
  }

  installPwa() {
    if (!this.installPrompt)
      return alert(
        "Votre navigateur ne supporte pas l'installation d'applications PWA"
      );

    this.installPrompt
      .prompt()
      .then((result) => {
        console.log("Install prompt result", result);
      })
      .catch((error) => {
        console.error("Erreur lors de l'installation de PWA", error);
      })
      .finally(() => {
        this.installPrompt = null;
      });
  }
}

window.customElements.define("btn-pwa", BtnPwa);
