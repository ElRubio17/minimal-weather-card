# 🌦️ Minimal weather card
descrizione di minimal

## Install

## Using card
### Options
| Name       | Type    | Default  | Description                      |
|-----------|--------|---------|----------------------------------|
| type     | string | `custom:minimal-weather-card`   |  card   |
| entity      | string | ``     | Your weather entity|
| attr_show   | bool   | `true`   | Show or hide attribute    |
| bg_dynamic   | bool | `true`   | dynamic background. It change with entity.state conditions |
| attr_left      | string | `temperature`   | Choose attribute left |
| attr_right      | string | `humidity`   | Choose attribute right       |

### CSS custom variable

### Code base example
```yaml
type: custom:minimal-weather-card
entity: weather.your_weather_entity
```
