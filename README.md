# 🌦️ Minimal weather card
The Minimal Weather Card is a custom card for [Home Assistant](https://home-assistant.io) ,designed to display weather information in a simple and clear.


#### 📌 Key Features
- Minimalist design with a clean and modern interface.
- Customizable weather icons loaded from local files.
- Two configurable attributes (e.g., temperature and wind speed).
- Optional dynamic background that changes color based on weather conditions.
- Advanced customization through CSS variables.

#### 📌 Inspired noi
This card was developed taking inspiration from the [simple-weather-card](https://github.com/kalkih/simple-weather-card/tree/master) by [@kalkih](https://github.com/kalkih), hass-config @matt8707.

## 📥 Install

[![](https://img.shields.io/github/release/ElRubii17/minimal-weather-card.svg?style=flat-square)](https://github.com/ElRubio17/minimal-weather-card/releases/latest)

~~This card is available in [HACS](https://github.com/custom-components/hacs) (Home Assistant Community Store)~~

#### Manual install

1. Download and copy the folder`minimal-weather-card` from the [latest release](https://github.com/ElRubio17/minimal-weather-card/releases/latest) into your `config/www/community` directory.

2. Add a reference to `minimal-weather-card.js` inside your `ui-lovelace.yaml` or through the raw config editor interface.

   ```yaml
   resources:
     - url: /local/community/minimal-weather-card/minimal-weather-card.js?v=1.0.0
       type: module
   ```

#### CLI install

1. Move into your `config/www/community` directory

2. Download the folder `minimal-weather-card`

   ```console
   $ wget https://github.com/ElRubio17/minimal-weather-card/releases/download/v1.0.0/minimal-weather-card
   ```

3. Add a reference to `minimal-weather-card` inside your `ui-lovelace.yaml` or through the raw config editor gui.

   ```yaml
   resources:
     - url: /local/community/minimal-weather-card/minimal-weather-card.js?v=1.0.0
       type: module
   ```

## Updating

1. Find your `simple-weather-card-bundle.js` file in `config/www` or wherever you ended up storing it.

2. Replace the local file with the one found in the [latest release](https://github.com/ElRubio17/minimal-weather-card/releases/latest).

3. Add the new version number to the end of the card reference url in your `ui-lovelace.yaml`. This will prevent the browser from loading the old version from cache.

   ```yaml
   resources:
     - url: /local/community/minimal-weather-card.js?v=1.0.0
       type: module
   ```

## ⚙️ Using card
### Options
#### Card configuration
| Name       | Type    | Default  | Description |
|-----------|--------|---------|----------------------------------|
| type     | string | `custom:minimal-weather-card` **required**  |  card   |
| entity      | string | **required**    | Your weather entity|
| attr_show   | bool   | `true`   | Show or hide attribute    |
| bg_dynamic   | bool | `false`   | dynamic background. It change with entity.state conditions |
| attr_left      | string | `temperature`   | Choose attribute left |
| attr_right      | string | `humidity`   | Choose attribute right       |
|hour24| bool | true | change sunset and sunrise in time format. 24h or 12h.|
|responsive| bool| false| allow responsive width screen|
|tap_action| |`action: more-info`||

#### Attributes
|          Name          | Options|
|------------------------|--------|
|`attr_left` `attr_right`| `temperature`,`humidity`|
#### Action

#### 🎨 CSS custom variable

#### ⛅️ Custom weather icon

L'icona principale varia in base allo stato corrente.

Codice in main.js che fa cambiare l'icona:

```js
codice
```

Se vuoi modificare le tue icone dovrai seguire la procedura:
1. vai nella cartella `config/www/community/minimal-weather-card/icons

2. cancella l'icona che vuoi cambiare.

3. copiare la tua icona nella cartella icons

4. rinominarla con lo il nome dello stato che vuoi che appaia
Deve avere lo stesso formato delle altre
eg: sunny.png

5. vai in impostazioni tre puntini e riavvia home assiastan

6. richarica le cache del browser

### Example

#### Standard code

```yaml
type: custom:minimal-weather-card
entity: weather.your_weather_entity
```

