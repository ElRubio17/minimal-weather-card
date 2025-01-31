export function handleClick(element, event) {
  if (!element.config || !element.hass) return;

  const action = element.config.tap_action || { action: "more-info" };

  switch (action.action) {
    case "more-info":
      element.hass.moreInfoAction(element.config.entity);
      break;
    case "navigate":
      if (action.navigation_path) {
        window.location.href = action.navigation_path;
      }
      break;
    case "call-service":
      if (action.service) {
        const [domain, service] = action.service.split(".");
        element.hass.callService(domain, service, action.service_data || {});
      }
      break;
    case "fire-dom-event":
      const eventDetail = { entity: element.config.entity };
      element.dispatchEvent(new CustomEvent("fire-dom-event", { detail: eventDetail }));
      break;
    default:
      console.warn("Azione non supportata:", action);
  }
}
