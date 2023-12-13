class NoSupportModal extends HTMLElement {
  constructor() {
    super();

    // Créer un shadow DOM
    this.attachShadow({ mode: "open" });

    // HTML du composant
    this.shadowRoot.innerHTML = `
        <style>
        .no-support {
            position: fixed;
            top: 50%;
            left: 50%;
            translate: -50% -50% 0;
            z-index: 999;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            padding: 2rem;
            background: var(--white-1);
            border-radius: var(--font-10px-0_625rem);
          }
          
          .no-support__close {
            position: absolute;
            right: 10px;
            top: 3px;
            font-size: var(--font-32px-2rem);
            color: var(--black-1);
            cursor: pointer;
          }
          
          .no-support__svg {
            width: 3rem;
            height: 3rem;
          
            & path {
              fill: var(--red-1);
            }
          }
          
          .no-support__blur {
            position: fixed;
            z-index: 998;
            background-color: rgba(172, 172, 172, 0.4);
            backdrop-filter: blur(10px);
            pointer-events: none;
            width: 100%;
            height: 100vh;
          }
          @supports (timeline-scope: none) {
            .no-support,
            .no-support__blur {
              display: none;
            }
          }
        </style>
        <div class="no-support__blur" aria-hidden="true"></div>
        <div class="no-support" role="alertdialog">
          <span class="no-support__close" aria-label="Fermeture de la modal" tabindex="0">&times;</span>
          <svg class="no-support__svg" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M12.884 2.532c-.346-.654-1.422-.654-1.768 0l-9 17A.999.999 0 0 0 3 21h18a.998.998 0 0 0 .883-1.467L12.884 2.532zM13 18h-2v-2h2v2zm-2-4V9h2l.001 5H11z"></path>
          </svg>
          Votre navigateur ne supporte pas cette fonctionnalité !
        </div>
      `;
  }

  connectedCallback() {
    this.closeButton = this.shadowRoot.querySelector(".no-support__close");
    this.closeButton.addEventListener("click", () => this.closeModal());
    this.closeButton.addEventListener("keydown", (e) => this.handleKeydown(e));
  }

  disconnectedCallback() {
    this.closeButton.removeEventListener("click", () => this.closeModal());
    this.closeButton.removeEventListener("keydown", (e) =>
      this.handleKeydown(e)
    );
  }

  closeModal() {
    this.style.display = "none";
  }

  handleKeydown(e) {
    if (e.key === " " || e.key === "Enter") {
      e.preventDefault();
      this.closeModal();
    }
  }
}

window.customElements.define("no-support-modal", NoSupportModal);
