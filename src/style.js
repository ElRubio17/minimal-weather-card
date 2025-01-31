import { css } from "lit";

export const styles = css`
  :host {
    display: block;
    padding: var(--mw-card-padding, 16px);
    border-radius: var(--mw-card-border-radius, 8px);
    box-shadow: var(--mw-card-shadow, none);
    background-color: var(--mw-bg-default, #ffffff);
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
    font-size: var(--mw-state-text-size, 1.2em);
    color: var(--mw-state-text-color, #000);
  }

  .attributes {
    display: flex;
    justify-content: space-between;
    font-size: var(--mw-attr-text-size, 0.9em);
    color: var(--mw-attr-text-color, #555);
    font-weight: var(--mw-attr-font-weight, normal);
    line-height: var(--mw-attr-line-height, 1.2);
    letter-spacing: var(--mw-attr-letter-spacing, normal);
  }

  .attr {
    display: flex;
    align-items: center;
  }

  .attr ha-icon {
    margin-right: 4px;
  }

  :host([dynamic]) {
    background-color: var(--mw-bg-current, var(--mw-bg-default, #ffffff));
  }

  :host([state="clear-night"]) { --mw-bg-current: #2c3e50; }
  :host([state="cloudy"]) { --mw-bg-current: #95a5a6; }
  :host([state="fog"]) { --mw-bg-current: #7f8c8d; }
  :host([state="hail"]) { --mw-bg-current: #d0d3d4; }
  :host([state="lightning"]) { --mw-bg-current: #9b59b6; }
  :host([state="rainy"]) { --mw-bg-current: #3498db; }
  :host([state="snowy"]) { --mw-bg-current: #ecf0f1; }
  :host([state="sunny"]) { --mw-bg-current: #f39c12; }
  :host([state="windy"]) { --mw-bg-current: #1abc9c; }
  :host([state="exceptional"]) { --mw-bg-current: #e74c3c; }
`;
