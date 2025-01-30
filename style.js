export const styles = `
    :host {
        /* Variabili CSS per personalizzazione */
        --minimal-weather-bg-default: var(--card-background-color, #fff);
        --minimal-weather-bg-sunny: var(--minimal-weather-bg-sunny-color, #FFD700);
        --minimal-weather-bg-cloudy: var(--minimal-weather-bg-cloudy-color, #A9A9A9);
        --minimal-weather-bg-rainy: var(--minimal-weather-bg-rainy-color, #4682B4);
        --minimal-weather-bg-snowy: var(--minimal-weather-bg-snowy-color, #B0E0E6);
        --minimal-weather-bg-fog: var(--minimal-weather-bg-fog-color, #708090);

        /* Personalizzazione del testo */
        --minimal-weather-text-size-attr: var(--minimal-weather-text-size-attr, 14px);
        --minimal-weather-text-size-main: var(--minimal-weather-text-size-main, 16px);
        --minimal-weather-text-color-attr: var(--minimal-weather-text-color-attr, var(--primary-text-color, #000));
        --minimal-weather-text-color-main: var(--minimal-weather-text-color-main, var(--primary-text-color, #000));

        /* Nuove personalizzazioni */
        --minimal-weather-text-weight-attr: var(--minimal-weather-text-weight-attr, normal);
        --minimal-weather-text-weight-main: var(--minimal-weather-text-weight-main, bold);
        --minimal-weather-line-height-attr: var(--minimal-weather-line-height-attr, 1.2);
        --minimal-weather-line-height-main: var(--minimal-weather-line-height-main, 1.5);

        --minimal-weather-padding: var(--ha-card-padding, 16px);
        --minimal-weather-border-radius: var(--ha-card-border-radius, 8px);
        --minimal-weather-box-shadow: var(--ha-card-box-shadow, none);

        display: block;
        padding: var(--minimal-weather-padding);
        border-radius: var(--minimal-weather-border-radius);
        box-shadow: var(--minimal-weather-box-shadow);
        transition: background 0.5s ease-in-out; /* Effetto fade-in sul cambio background */
    }
    
    .card {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .weather-icon {
        width: 50px;
        height: 50px;
    }

    .info {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
    }

    .state {
        font-size: var(--minimal-weather-text-size-main);
        color: var(--minimal-weather-text-color-main);
        font-weight: var(--minimal-weather-text-weight-main);
        line-height: var(--minimal-weather-line-height-main);
    }

    .attributes {
        display: flex;
        gap: 10px;
    }

    .attribute {
        display: flex;
        align-items: center;
        gap: 5px;
        font-size: var(--minimal-weather-text-size-attr);
        color: var(--minimal-weather-text-color-attr);
        font-weight: var(--minimal-weather-text-weight-attr);
        line-height: var(--minimal-weather-line-height-attr);
    }
`;
