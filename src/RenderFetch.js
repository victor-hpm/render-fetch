import { html, css, LitElement } from 'lit-element';
import '@polymer/paper-card/paper-card'

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
            data: { type: Array }
        };
    }

    constructor() {
        super();
        this.data = [];

    }

    render() {
        return html `
        <paper-card>
          <div>
            <img src="${this.image}">
            <p>${this.id}</p>
            <p>${this.name}</p>
            <p>${this.gender}</p>
            <p>${this.location}</p>
          </div>
        </paper-card>
    `;
    }
}