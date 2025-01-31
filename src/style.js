import { css } from "lit";

export const styles = css`
  :host {
    display: block;
    padding: var(--minimal-weather-card-padding, 16px);
    border-radius: var(--minimal-weather-card-border-radius, 8px);
    box-shadow: var(--minimal-weather-card-shadow, none);
    background-color: var(--minimal-weather-bg-default, #ffffff);
    transition: background-color 0.3s ease-in-out, opacity 0.3s ease-in-out;
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
  }

  .content {
    flex: 1;
    display: flex;
    flex-direction: column;
    text-align: right;
  }

  .state {
    font-size: var(--minimal-weather-state-text-size, 1.2em);
    color: var(--minimal-weather-state-text-color, #000);
  }

  .attributes {
    display: flex;
    justify-content: space-between;
    font-size: var(--minimal-weather-attr-text-size, 0.9em);
    color: var(--minimal-weather-attr-text-color, #555);
    font-weight: var(--minimal-weather-attr-font-weight, normal);
    line-height: var(--minimal-weather-attr-line-height, 1.2);
    letter-spacing: var(--minimal-weather-attr-letter-spacing, normal);
  }

  .attr {
    display: flex;
    align-items: center;
  }

  .attr ha-icon {
    margin-right: 4px;
  }

  :host([dynamic]) {
    background-color: var(--minimal-weather-bg-current, var(--minimal-weather-bg-default, #ffffff));
  }

  :host([state="clear-night"]) { --minimal-weather-bg-current: #2c3e50; }
  :host([state="cloudy"]) { --minimal-weather-bg-current: #95a5a6; }
  :host([state="fog"]) { --minimal-weather-bg-current: #7f8c8d; }
  :host([state="hail"]) { --minimal-weather-bg-current: #d0d3d4; }
  :host([state="lightning"]) { --minimal-weather-bg-current: #9b59b6; }
  :host([state="rainy"]) { --minimal-weather-bg-current: #3498db; }
  :host([state="snowy"]) { --minimal-weather-bg-current: #ecf0f1; }
  :host([state="sunny"]) { --minimal-weather-bg-current: #f39c12; }
  :host([state="windy"]) { --minimal-weather-bg-current: #1abc9c; }
  :host([state="exceptional"]) { --minimal-weather-bg-current: #e74c3c; }
`;
