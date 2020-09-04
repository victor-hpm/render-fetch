import { html, css, LitElement } from 'lit-element';

export class RenderFetch extends LitElement {
    static get styles() {
        return css `
      :host {
        display: block;
        padding: 25px;
        color: var(--render-fetch-text-color, #000);
      }
    `;
    }

    static get properties() {
        return {
            title: { type: String },
            counter: { type: Number },
        };
    }

    constructor() {
        super();
        this.title = 'Hey there';
        this.counter = 5;
    }

    __increment() {
        this.counter += 1;
    }

    render() {
            return html `
      <h2>Characters of Rick and Morty</h2>
      <div class="container" @info="${this.catchInfo}" >
        ${this.infoapi.map(card => html`
        <div>
          <img src="${card.image}">
          <p>${card.id}</p>
          <p>${card.name}</p>
          <p>${card.gender}</p>
        </div>
        `)}
      </div>
      <button @click=${this.__increment}>increment</button>
    `;
  }

  catchInfo(e) {
    console.log(e)
  } 
}