class Hero extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `  
    <section class="hero">
    <h1 id="hero-title" class="hero__title bottom-fade">Scroll-driven Animation</h1>
    <p class="hero__paragraph bottom-fade">Qu'offre cette fonctionnalité CSS ?</p>
  
    <div class="mouseDraw">
      <svg class="mouseDraw__svg" width="320" height="450" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path pathLength="1" d="M304 8c-1.636 30.36-14.159 92.899-51.17 100.185-15.713-3.153-50.084-3.888-61.86 18.39 16.473 18.508 38.343 66.277-5.958 109.293l-36.45-39.408c7.711-8.699 20.468-28.865 9.814-39.934-10.655-11.07-28.273 4.262-35.749 13.311l-41.708-39.408C39.154 160.262-28.956 233.171 32.73 286.136c14.077 14.887 53.237 36.816 97.258 5.429V421" stroke="#000" stroke-width="15" stroke-linecap="round"/>
      </svg>
    </div>
  </section>
  `;
  }
}

window.customElements.define("hero-section", Hero);
