import { html, LitElement } from "lit";
import { styles } from "./style.js";
import { handleClick } from "./handleClick.js";

class MinimalWeatherCard extends LitElement {
    static properties = {
        hass: { type: Object },
        config: { type: Object },
    };

    setConfig(config) {
        if (!config.entity) {
            throw new Error("Errore: definire entità");
        }
        this.config = config;
    }

    getCardSize() { return 1; }

    render() {
        const entity = this.hass.states[this.config.entity];
        if (!entity) {
            return html`<ha-card>Errore: definire entità</ha-card>`;
        }

        const state = entity.state;
        const attr1 = this.config.attribute1 || "temperature";
        const attr2 = this.config.attribute2 || "humidity";
        const iconPath = `/local/weather-icons/${state}.svg`;

        const bg_dynamic = this.config.bg_dynamic ?? true;
        const bgColor = bg_dynamic ? `var(--minimal-weather-bg-${state}, var(--minimal-weather-bg-default))` : "var(--minimal-weather-bg-default)";

        return html`
            <ha-card style="background: ${bgColor};" @click="${(e) => handleClick(e, this.hass, this.config)}">
                <div class="card">
                    <img class="weather-icon" src="${iconPath}" alt="${state}" />
                    <div class="info">
                        <div class="state">${state}</div>
                        <div class="attributes">
                            <div class="attribute">
                                <ha-icon icon="${entity.attributes[attr1 + "_icon"] || 'mdi:thermometer'}"></ha-icon>
                                ${entity.attributes[attr1]} ${entity.attributes[attr1 + "_unit"] || ''}
                            </div>
                            <div class="attribute">
                                <ha-icon icon="${entity.attributes[attr2 + "_icon"] || 'mdi:water'}"></ha-icon>
                                ${entity.attributes[attr2]} ${entity.attributes[attr2 + "_unit"] || ''}
                            </div>
                        </div>
                    </div>
                </div>
            </ha-card>
        `;
    }

    static styles = [styles];
}

customElements.define("minimal-weather-card", MinimalWeatherCard);
