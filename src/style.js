import { css } from "https://unpkg.com/lit@2.6.1/index.js?module";

export const styles = css`
  :host {
    --minimal-weather-transition-time: 0.5s;
  }

  ha-card {
    // background-color: var(--minimal-weather-bg-color, #303030);
    background-image: var(--minimal-weather-bg-color, #303030);
    display: block;
    padding: var(--minimal-weather-card-padding, 12px);
    border-radius: var(--minimal-weather-card-border-radius, 8px);
    box-shadow: var(--minimal-weather-card-shadow, none);
    // background-color: var(--minimal-weather-bg,--primary-background-color, #303030);
    transition: background-color var(--minimal-weather-transition-time) ease-in-out, opacity var(--minimal-weather-transition-time) ease-in-out;
    opacity: 1;
  }

  .fade-in {
    opacity: 0;
  }

  .container {
    display: flex;
    align-items: center;
  }

  .icon {
    width: 48px;
    height: 48px;
    padding-right: 12px;
  }
  
  img {
    width: 45px;
  }

  .content {
    flex: 1;
    display: flex;
    flex-direction: column;
    text-align: left;
  }

  .state {
    padding-bottom: var(--state-padding-bottom, 10px);
    font-size: var(--minimal-weather-state-text-size, 1.2em);
    color: var(--minimal-weather-state-text-color, --primary-text-color ,#000);
    font-weight: var(--minimal-weather-state-font-weight, bold);
    line-height: var(--minimal-weather-state-line-height, 1.2);
    letter-spacing: var(--minimal-weather-state-letter-spacing, normal);
    transition: color var(--minimal-weather-transition-time) ease-in-out;
  }

  .attributes {
    display: flex;
    // justify-content: flex-start;
    justify-content: space-between;
    font-size: var(--minimal-weather-attr-text-size, 0.9em);
    color: var(--minimal-weather-attr-text-color, --primary-text-color, #555);
    font-weight: var(--minimal-weather-attr-font-weight, normal);
    line-height: var(--minimal-weather-attr-line-height, 1.2);
    letter-spacing: var(--minimal-weather-attr-letter-spacing, normal);
    transition: color var(--minimal-weather-transition-time) ease-in-out;
  }

  .attr {
    display: flex;
    align-items: center;
  }
  .attr:nth-child(1) {
    // padding-right: 25px;
  }

  .attr ha-icon {
    margin-right: 4px;
    --mdc-icon-size: 15px;

  }

  :host([dynamic]) {
    background-color: var(--minimal-weather-bg-current, var(--minimal-weather-bg-default, #ffffff));
  }
`;
