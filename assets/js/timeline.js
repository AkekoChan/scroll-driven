class Timeline extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <section class="timeline">
      <div class="timeline__wrapper">
        <h2 class="timeline__title">
          Comprendre le principe de timeline dans les animations scroll-driven
        </h2>
        <p class="timeline__paragraph">
          Il existe deux types de timeline : la timeline de progression de
          défilement et celle de progression
        </p>
        <ul class="timeline__list">
          <li class="timeline__item">
            Timeline de progression de défilement : une timeline associée à la
            position de défilement le long d'un axe.
          </li>
          <li class="timeline__item">
            Timeline de progression d'affichage: une timeline liée à la
            position relative d'un élément spécifique.
          </li>
        </ul>
    
        <!-- Timeline Défilement -->
        <div class="timeline__scroll">
          <h3 class="timeline__title">La timeline défilement</h3>
          <div class="scroll-container">
            <div class="scroll-content">
              <span class="scroll-indicator">0%</span>
            </div>
          </div>
        </div>
        <p class="timeline__paragraph">
          Avec l'exemple ci-dessus, la timeline de défilement est liée au conteneur
          ayant un défilement vertical. La position de défilement est convertie en
          pourcentage, observant son évolution lors du défilement.
        </p>
    
        <!-- Timeline Affichage -->
        <div class="timeline__view">
          <h3 class="timeline__title">La timeline d'affichage</h3>
          <p class="timeline__paragraph">
            Outre les animations liées directement au scroll, il est également
            possible de déclencher une animation à l'aide de l'API Intersection
            Observer. Cette API suit la visibilité d'un élément par rapport à la
            fenêtre d'affichage, déclenchant des actions spécifiques lorsque
            l'élément entre ou sort de la zone visible de la page. La timeline
            d'affichage fonctionne sur le même principe, sans nécessiter JavaScript
            contrairement à l'Intersection Observer.
          </p>
    
          <!-- Exemple Timeline Affichage -->
          <div class="timeline__view-example">
            <p class="timeline__view-text animation">Je suis le 1er à apparaître !</p>
            <p class="timeline__view-text animation">Je suis le 2ème à apparaître !</p>
            <p class="timeline__view-text animation">Je suis le 3ème à apparaître !</p>
            <p class="timeline__view-text animation">Je suis le 4ème à apparaître !</p>
            <p class="timeline__view-text animation">Je suis le 5ème à apparaître !</p>
          </div>
    
          <!-- Détails Timeline Affichage -->
          <div class="timeline__details">
            <h3 class="timeline__title">Explication du fonctionnement</h3>
            <figure>
              <img class="timeline__view-img" src="/assets/img/view-explication1.jpg" alt="Schéma de présentation de la timeline view" />
              <figcaption>
                L'élément n'est pas encore visible dans la fenêtre d'affichage.
              </figcaption>
            </figure>
            <figure>
              <img class="timeline__view-img" src="/assets/img/view-explication2.jpg" alt="Schéma de présentation de la timeline view" />
              <figcaption>
                L'élément est désormais visible dans la fenêtre, déclenchant
                l'animation pour le rendre visible.
              </figcaption>
            </figure>
            <p class="timeline__paragraph">
              Cela est rendu possible grâce à la propriété CSS : <b>animation-timeline:
                view();</b>
            </p>
            <p class="code">
              .animation {
              animation-timeline: view(block);
              animation-name: appear;
              animation-fill-mode: both;
              animation-duration: 1ms;
              }
            </p>
          </div>
        </div>
      </div>
    </section>
    `;

    this.$output = this.querySelector(".scroll-indicator");
    this.$animation = this.querySelector(".scroll-content").getAnimations()[0];

    this.curVal = 0;

    requestAnimationFrame(() => this.handleProgress());
  }

  handleProgress() {
    if (this.$animation && this.$animation.currentTime) {
      const newVal = this.$animation.currentTime.value;
      if (newVal !== this.curVal) {
        this.$output.innerText = `${newVal.toFixed(0)}%`;
        this.curVal = newVal;
      }
    }

    requestAnimationFrame(() => this.handleProgress());
  }
}

window.customElements.define("timeline-section", Timeline);
