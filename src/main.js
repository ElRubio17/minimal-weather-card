import { LitElement, html, css } from "https://unpkg.com/lit@2.6.1/index.js?module";
import { styles } from "./style.js";
import { handleClick } from "./handleClick.js";
import { getTranslation } from "./traslation.js";

class MinimalWeatherCard extends LitElement {
  static get properties() {
    return {
      hass: { type: Object },
      config: { type: Object },
      entity: { type: Object },
      state: { type: String },
      sunEntity: { type: Object },
      bg_dynamic: { type: Boolean },
      attr_left: { type: String },
      attr_right: { type: String },
      hour24: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.config = {};
    // this.hass = null;
    this.entity = null;
    this.bg_dynamic = false;
    this.attr_left = 'temperature';
    this.attr_right = 'humidity';
    this.hour24 = true;
  }

  static get styles() {
    return styles;
  }

  setConfig(config) {
    if (!config.entity) {
      throw new Error("Errore: definire entità");
    }
    this.config = {
      entity: config.entity,
      attr_show: config.attr_show ?? true,
      bg_dynamic: config.bg_dynamic ?? false,
      attr_left: config.attr_left ?? 'temperature',
      attr_right: config.attr_right ?? 'humidity',
      hour24: config.hour24 ?? true,
      tap_action: config.tap_action ?? { action: 'more-info' },
      ...config
    };
  }

  // updated() {
  //   this.style.setProperty("--state-padding-bottom", this.attr_show ? "8px" : "0px");
  // }
  set hass(hass) {
    this._hass = hass;
    if (this.config && this.config.entity) {
      this.entity = hass.states[this.config.entity];
    }
    this.sunEntity = hass.states['sun.sun'];
  }

  get hass() {
    return this._hass;
  }

  getCardSize() {
    return 1;
  }

  getWeatherIcon(state) {
    const weatherIcons = {
      "clear-night": "clear-night",
      cloudy: "cloudy",
      fog: "fog",
      hail: "hail",
      lightning: "lightning",
      "lightning-rainy": "lightning-rainy",
      partlycloudy: "partlycloudy",
      pouring: "pouring",
      rainy: "rainy",
      snowy: "snowy",
      "snowy-rainy": "snowy-rainy",
      sunny: "sunny",
      windy: "windy",
      "windy-variant": "windy-variant",
      exceptional: "exceptional",
    };
    return `/local/minimal-weather-card/icons/${weatherIcons[state] || "unknown"}.png`;
  }

  degToDirection(deg) {
    const dir = Math.floor(deg / 22.5 + 0.5);
    return DIRECTION[dir % 16];
  }

  handleTap() {
    handleClick(this, this._hass, this.config, this.config.tap_action);
  }

  updateDynamicBackground(weatherState) {

    if (!weatherState) {
        return; 
    }

    const weatherColors = {
      "clear-night": "linear-gradient(180deg,#0c103f, #1a237e)",
      "cloudy": "linear-gradient(180deg, #90a4ae, #b0bec5)",
      "fog": "linear-gradient(180deg, #78909c, #b0bec5)",
      "hail": "linear-gradient(180deg, #4b636e, #78909c)",
      "lightning": "linear-gradient(180deg, #4a148c, #7b1fa2)",
      "lightning-rainy": "linear-gradient(180deg, #4a148c, #7b1fa2, #283593)",
      "partlycloudy": "linear-gradient(180deg, #64b5f6, #90caf9)",
      "pouring": "linear-gradient(180deg, #1e3c72, #2a5298)",
      "rainy": "linear-gradient(180deg, #1565c0, #1e88e5)",
      "snowy": "linear-gradient(180deg, #e0e0e0, #ffffff)",
      "snowy-rainy": "linear-gradient(180deg, #90a4ae, #cfd8dc)",
      "sunny": "linear-gradient(180deg,#2a9efd, #90caf9)",
      "windy": "linear-gradient(180deg, #64b5f6, #bbdefb)",
      "windy-variant": "linear-gradient(180deg, #4fc3f7, #81d4fa)",
      "exceptional": "linear-gradient(180deg, #ff6f00, #ff9800)",
      "default": "linear-gradient(180deg, #6E7889, #A0AAB8)"
    };
    const textColors = {
      "clear-night": "#E0E0E0",
      "cloudy": "#212121",
      "fog": "#37474F",
      "hail": "#E3F2FD", 
      "lightning": "#FFD700",
      "lightning-rainy": "#FFD700",
      "partlycloudy": "#212121",
      "pouring": "#E0F7FA",
      "rainy": "#E3F2FD",
      "snowy": "#212121",
      "snowy-rainy": "#37474F",  
      "sunny": "#404040",
      "windy": "#E0E0E0",
      "windy-variant": "#212121",
      "exceptional": "#FF5722",
      "default": "#FFFFFF"
    };

    // Set background and text color
    const bgColor = this.config.bg_dynamic ? weatherColors[weatherState.toLowerCase()] : weatherColors.default || weatherColors.default;
    const txtColor = this.config.bg_dynamic ? textColors[weatherState.toLowerCase()] : textColors.default || textColors.default;

    return {bgColor,txtColor};
  }

  // ATTRIBUTES
  getAttributeState(attr) {
    const DIRECTION = [
      "N",
      "NNE",
      "NE",
      "ENE",
      "E",
      "ESE",
      "SE",
      "SSE",
      "S",
      "SSW",
      "SW",
      "WSW",
      "W",
      "WNW",
      "NW",
      "NNW",
    ];
    let attr_name = attr.toLowerCase();
    if (attr_name === 'wind_bearing') {
        const deg = this.attr[attr_name];
        const dir = Math.floor(deg / 22.5 + 0.5);
        return DIRECTION[dir % 16];
    } else if (attr_name === 'sunrise') {
      const nextRising = this.sunEntity ? this.sunEntity.attributes.next_rising : null;
      let risingTime = 'N/A';
      if (nextRising) {
        const risingDate = new Date(nextRising);
        risingTime = risingDate.toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          hour12: !this.config.hour24,
        });
      }
      return risingTime;
    } else if (attr_name === 'sunset') {
      const nextSetting = this.sunEntity ? this.sunEntity.attributes.next_setting : null;
      let sunsetTime = 'N/A';
      if (nextSetting) {
        const sunsetDate = new Date(nextSetting);
        sunsetTime = sunsetDate.toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          hour12: !this.config.hour24,
        });
      }
      return sunsetTime;
    } else {
      return this.attr[attr_name] ?? '---'; 
    }
  }

  getAttributeIcon(attr) {
    let attr_name = attr.toLowerCase();
    const defaultIcons = {
      temperature: "mdi:thermometer",
      humidity: "mdi:water-percent",
      pressure: "mdi:gauge",
      wind_speed: "mdi:weather-windy",
      wind_bearing: "mdi:compass",
      precipitation: "mdi:weather-rainy",
      precipitation_probability: "mdi:weather-partly-rainy",
      dew_point: "mdi:thermometer-water",
      uv_index: "mdi:weather-sunny-alert",
      visibility: "mdi:eye",
      ozone: "mdi:vector-circle",
      cloud_coverage: "mdi:weather-cloudy",
      apparent_temperature: "mdi:thermometer-lines",
      solar_radiation: "mdi:white-balance-sunny",
      feels_like: "mdi:thermometer-check",
      heat_index: "mdi:thermometer-alert",
      wind_chill: "mdi:snowflake",
      sunrise: "mdi:weather-sunset-up",
      sunset: "mdi:weather-sunset-down",
    };
    return defaultIcons[attr_name] || "mdi:help-circle";
  }

  getAttributeUnit(attr) {
    if (!this.hass || !this.config || !this.config.entity) {
        return "---";
    }

    const entity = this.hass.states[this.config.entity];
    if (!entity || !entity.attributes) {
        return "---";
    }

    let attr_name = attr.toLowerCase();
    let unit_name = `${attr_name}_unit`;

    if (attr_name === 'humidity') {
      return '%'
    } else if (attr_name === 'wind_bearing' || attr_name === 'uv_index' || attr_name === 'cloud_coverage' || attr_name === 'sunrise'
      || attr_name === 'sunset'
    ) {
      return "";
    } else { 
        if (unit_name in entity.attributes) {
          return entity.attributes[unit_name].toString();
      }
      if ("unit_of_measurement" in entity.attributes) {
          return entity.attributes.unit_of_measurement.toString();
      }

    }
    return "---";
  }

  renderAttribute(attr) {
    const value = this.getAttributeState(attr);
    const unit = this.getAttributeUnit(attr);
    const icon = this.getAttributeIcon(attr);

    return html`
      <div class="attr">
        <ha-icon icon="${icon}"></ha-icon>
        <span>${value} ${unit}</span>
      </div>
    `;
  }

  // STATE
  getLanguages() {
    return this.hass?.language || "en"; // Recupera la lingua impostata in HA
  }

  getTranslatedWeatherState(state) {
    return getTranslation(state, this.getLanguages());
  }

  

// RENDER HTML
  render() {

    if (!this.hass || !this.config) {
      return html`<ha-card>Errore: configurazione non valida</ha-card>`;
    }

    const entity = this.hass.states[this.config.entity];
    if (!entity) {
      return html`<ha-card>Errore: definire entità</ha-card>`;
    }

    this.state = entity.state;
    this.attr = entity.attributes;

    const weatherState = this.getTranslatedWeatherState(this.state);

    const icon = this.getWeatherIcon(this.state);

    this.style.setProperty("--state-padding-bottom", this.config.attr_show ? "8px" : "0px");

    return html`
      <ha-card
        @click=${(e) => this.handleTap(e)}
        style="--minimal-weather-bg-color: ${this.updateDynamicBackground(this.state).bgColor};
               --minimal-weather-state-text-color: ${this.updateDynamicBackground(this.state).txtColor};
               --minimal-weather-attr-text-color: ${this.updateDynamicBackground(this.state).txtColor};"
      >
        <div class="container">
          <div class="icon">
            <img src="${icon}" alt="${this.state}" />
          </div>
          <div class="content">
            <div class="state">${weatherState}</div>
            ${this.config.attr_show
              ? html`
                  <div class="attributes">
                    ${this.renderAttribute(this.config.attr_left)}
                    ${this.renderAttribute(this.config.attr_right)}
                  </div>
                `
              : ""}
          </div>
        </div>
      </ha-card>
    `;
  }

}

customElements.define("minimal-weather-card", MinimalWeatherCard);
