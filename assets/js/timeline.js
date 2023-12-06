class Timeline extends HTMLElement {
  constructor() {
    super();
    //implementation
  }

  connectedCallback() {
    this.innerHTML = `
    <section class="timeline">
      <h2 class="timeline__title">Comprendre le principe de timeline dans les animations scroll-driven</h2>
      <p class="timeline__paragraph">Il existe deux types de timeline. La première est la timeline</p>
    </section>
    `;
  }

  disconnectedCallback() {
    //implementation
  }

  attributeChangedCallback(name, oldVal, newVal) {
    //implementation
  }

  adoptedCallback() {
    //implementation
  }
}

window.customElements.define("timeline-element", Timeline);
