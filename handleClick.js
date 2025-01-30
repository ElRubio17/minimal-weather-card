export function handleClick(node, hass, config) {
    const action = config.tap_action || "more-info"; // Azione predefinita: aprire il popup con più informazioni
    const entityId = config.entity;

    switch (action) {
        case "more-info":
            // Mostra la finestra di informazioni su Home Assistant
            hass.moreInfo(entityId);
            break;
        case "navigate":
            if (config.navigation_path) {
                // Cambia la pagina di Home Assistant alla destinazione specificata
                window.history.pushState(null, "", config.navigation_path);
                window.dispatchEvent(new Event("location-changed"));
            }
            break;
        case "call-service":
            if (config.service) {
                // Chiama un servizio personalizzato
                const [domain, service] = config.service.split(".");
                hass.callService(domain, service, config.service_data || {});
            }
            break;
        case "fire-dom-event":
            // Genera un evento DOM personalizzato
            const event = new Event("hass-action", { bubbles: true, composed: true });
            node.dispatchEvent(event);
            break;
        default:
            console.warn(`Unsupported action: ${action}`);
    }
}
