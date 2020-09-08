import { html, css, LitElement } from 'lit-element';

export class RenderFetch extends LitElement {
    static get styles() {
        return css `
      :host {
        display: block;
        padding: 25px;
        color: var(--render-fetch-text-color, #000);
      }

      .container {
        display: flex;
        border: 1px solid black;
      }
    `;
    }

    static get properties() {
        return {
            data: { type: Array }
        };
    }

    constructor() {
        super();
        this.data = [];

    }



    render() {
            return html `
      <h2>Characters of Rick and Morty!!!</h2>
      <div class="container" @info="${this.catchInfo}">
        ${this.data.map(item => html`
        <div>
          <img src="${item.image}">
          <p>${item.id}</p>
          <p>${item.name}</p>
          <p>${item.gender}</p>
          <p>${item.location}</p>
        </div>
        `)}
      </div>
    `;
  }

  
}