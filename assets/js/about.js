class About extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
       <section class="about">
       
       <div class="about__box">
       <h2 class="about__title">C'est quoi une animation scroll-driven ?</h2>
       <p class="about__paragraph">Pour faire une animation de base, nous avons deux états qui servent à définir le point de départ (état initial) et le point d'arrivée (état final) de l'élément que nous souhaitons animer. Ces états sont souvent représentés par les sélecteurs <b>from</b> et <b>to</b> ou par les valeurs <b>0%</b> et <b>100%</b></p>
       <p class="about__paragraph">Imaginons un carré avec une taille et une couleur rouge qui va s'aggrandir et changer de couleur pour du vert.</p>
       </div>

       <div class="about__exemple">
       <div class="about__test">
       <div class="square"></div>
       <button class="about__test-btn">Tester l'animation</button>
       </div>
       <p class="about__paragraph">La propriété CSS @keyframe est utilisée pour définir notre animation :</p>
       <p class="code">
       @keyframes scale-and-change-color {
        0% {
            scale: 1;
            background: red;
        }

        100% {
            scale: 2;
            background: green;
        }
       }
       </p>
       </div>
       
       </section>
        `;

    this.$btn = this.querySelector(".about__test-btn");

    console.log(this.$btn);

    this.$btn.addEventListener("click", () => this.setAnimation());
  }

  disconnectedCallback() {}

  attributeChangedCallback(name, oldVal, newVal) {}

  adoptedCallback() {}

  setAnimation() {
    this.querySelector(".square").classList.toggle("active");
    setTimeout(
      () => this.querySelector(".square").classList.remove("active"),
      2000
    );
  }
  render() {}
}

window.customElements.define("about-element", About);
