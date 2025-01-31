import { LitElement, html, css } from "lit";
import { styles } from "./style.js";
import { handleClick } from "./handleClick.js";

class MinimalWeatherCard extends LitElement {
  static get properties() {
    return {
      hass: { type: Object },
      config: { type: Object },
      entity: { type: String },
      state: { type: String },
      attributes: { type: Object },
    };
  }

  static get styles() {
    return styles;
  }

  setConfig(config) {
    if (!config.entity) {
      throw new Error("Errore: definire entità");
    }
    this.config = {
      attr_show: true,
      bg_dynamic: false,
      attr_icons: {},
      ...config,
    };
  }

  getCardSize() {
    return 1;
  }

  shouldUpdate(changedProps) {
    if (changedProps.has("hass")) {
      const entity = this.hass.states[this.config.entity];
      return entity ? entity.state !== this.state || JSON.stringify(entity.attributes) !== JSON.stringify(this.attributes) : true;
    }
    return true;
  }

  render() {
    if (!this.hass || !this.config) {
      return html`<ha-card>Errore: configurazione non valida</ha-card>`;
    }

    const entity = this.hass.states[this.config.entity];
    if (!entity) {
      return html`<ha-card>Errore: definire entità</ha-card>`;
    }

    this.state = entity.state;
    this.attributes = entity.attributes || {};

    const iconPath = `/local/weather-icons/${this.state}.svg`;
    const bgColor = this.config.bg_dynamic
      ? `var(--minimal-weather-bg-${this.state}, var(--minimal-weather-bg-default, #fff))`
      : "var(--minimal-weather-bg-default, #fff)";

    return html`
      <ha-card
        class="fade-in"
        style="background-color: ${bgColor}"
        @click="${(e) => handleClick(this, e)}"
      >
        <div class="container">
          <div class="icon">
            <img src="${iconPath}" alt="${this.state}" />
          </div>
          <div class="content">
            <div class="state">${this.state}</div>
            ${this.config.attr_show
              ? html`
                  <div class="attributes">
                    ${this.renderAttribute(0)}
                    ${this.renderAttribute(1)}
                  </div>
                `
              : ""}
          </div>
        </div>
      </ha-card>
    `;
  }

  renderAttribute(index) {
    const attrKeys = Object.keys(this.attributes);
    if (index >= attrKeys.length) return "";

    const attrName = attrKeys[index];
    const value = this.attributes[attrName];
    const unit = this.hass.states[this.config.entity].attributes[`${attrName}_unit`] || "";
    const icon = this.config.attr_icons[attrName] || "mdi:help-circle";

    return html`
      <div class="attr">
        <ha-icon icon="${icon}"></ha-icon>
        <span>${value} ${unit}</span>
      </div>
    `;
  }
}

customElements.define("minimal-weather-card", MinimalWeatherCard);
