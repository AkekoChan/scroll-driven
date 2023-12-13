class About extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <section class="about">
    <div class="about__wrapper">
      <h2 class="about__title">C'est quoi une animation scroll-driven ?</h2>
      <p class="about__paragraph">
        Pour créer une animation de base, nous utilisons deux états pour définir le
        point de départ (état initial) et le point d'arrivée (état final) de
        l'élément que nous souhaitons animer. Ces états sont souvent représentés
        par les sélecteurs <b>from</b> et <b>to</b> ou par les valeurs
        <b>0%</b> et <b>100%</b>.
      </p>
      <p class="about__paragraph">
        Imaginons un carré avec une couleur rouge, il va effectuer une rotation et
        changer de couleur pour devenir vert.
      </p>
    </div>
  
    <div class="about__wrapper">
      <div class="about__test">
        <div class="square" role="img" aria-label="Carré animé"></div>
        <button class="about__test-btn" tabindex="0">Tester l'animation</button>
      </div>
      <p class="about__paragraph">
        La propriété CSS @keyframes est utilisée pour définir notre animation :
      </p>
      <p class="code">
        @keyframes rotate-and-change-color {
        0% {
        rotate: 0deg;
        background: red;
        }
        100% {
        rotate: 90deg;
        background: green;
        }
        }
      </p>
    </div>
  
    <div class="about__wrapper">
      <p class="about__paragraph">
        Certes, une animation peut se faire dans le temps, mais on peut aussi
        réaliser une animation à l'aide du scroll.
      </p>
      <p class="about__paragraph">
        Pour utiliser le scroll comme référentiel, il faut le définir à l'aide de
        la propriété : <b>animation-timeline</b>.
      </p>
      <p class="code">
        .square {
        animation: rotate-and-change-color linear;
        animation-timeline: scroll();
        /* Sur quelle distance de scroll doit se faire l'animation */
        animation-range: normal 200px;
        }
      </p>
      <div class="scroll-container" tabindex=0>
        <div class="scroll-content">
          <div class="square-scroll" role="img" aria-label="Carré animé avec scroll"></div>
        </div>
      </div>
      <p class="about__paragraph">
        Dans l'exemple ci-dessous, l'animation est déclenchée par le défilement et
        se déroule sur une distance de 200 pixels lorsqu'on fait défiler le
        conteneur.
      </p>
    </div>
  </section>
  
        `;

    this.$btn = this.querySelector(".about__test-btn");

    this.$btn.addEventListener("click", () => this.setAnimation());
  }

  setAnimation() {
    this.querySelector(".square").classList.add("active");
    setTimeout(
      () => this.querySelector(".square").classList.remove("active"),
      5000
    );
  }
}

window.customElements.define("about-section", About);
