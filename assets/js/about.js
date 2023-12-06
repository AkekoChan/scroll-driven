class About extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML
    }

    disconnectedCallback() {
    }

    attributeChangedCallback(name, oldVal, newVal) {
    }

    adoptedCallback() {
    }

}

window.customElements.define('about', About);