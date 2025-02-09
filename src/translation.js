export const weatherTranslations = {
    "clear-night": {
      it: "Notte serena", fr: "Nuit claire", es: "Noche despejada", de: "Klare Nacht", 
      nl: "Heldere nacht", pt: "Noite limpa", ru: "Ясная ночь", sv: "Klar natt", 
      pl: "Bezchmurna noc", cs: "Jasná noc", fi: "Selkeä yö", da: "Klar nat"
    },
    "cloudy": {
      it: "Nuvoloso", fr: "Nuageux", es: "Nublado", de: "Wolkig", nl: "Bewolkt", 
      pt: "Nublado", ru: "Облачно", sv: "Molnigt", pl: "Pochmurno", cs: "Zataženo", 
      fi: "Pilvinen", da: "Skyet"
    },
    "fog": {
      it: "Nebbia", fr: "Brouillard", es: "Niebla", de: "Nebel", nl: "Mist", 
      pt: "Nevoeiro", ru: "Туман", sv: "Dimma", pl: "Mgła", cs: "Mlha", 
      fi: "Sumuinen", da: "Tåge"
    },
    "hail": {
      it: "Grandine", fr: "Grêle", es: "Granizo", de: "Hagel", nl: "Hagel", 
      pt: "Granizo", ru: "Град", sv: "Hagel", pl: "Grad", cs: "Kroupy", 
      fi: "Rakeet", da: "Hagl"
    },
    "lightning": {
      it: "Temporale", fr: "Éclair", es: "Relámpago", de: "Blitz", nl: "Bliksem", 
      pt: "Relâmpago", ru: "Молния", sv: "Blixt", pl: "Błyskawica", cs: "Blesk", 
      fi: "Salama", da: "Lyn"
    },
    "lightning-rainy": {
      it: "Temporale piovoso", fr: "Orage pluvieux", es: "Tormenta con lluvia", de: "Gewitterregen", 
      nl: "Onweer met regen", pt: "Tempestade com chuva", ru: "Гроза с дождем", sv: "Åska och regn", 
      pl: "Burza z deszczem", cs: "Bouřka s deštěm", fi: "Salamointi ja sade", da: "Torden og regn"
    },
    "partlycloudy": {
      it: "Parzialmente nuvoloso", fr: "Partiellement nuageux", es: "Parcialmente nublado", de: "Teilweise bewölkt", 
      nl: "Gedeeltelijk bewolkt", pt: "Parcialmente nublado", ru: "Переменная облачность", sv: "Delvis molnigt", 
      pl: "Częściowe zachmurzenie", cs: "Částečně zataženo", fi: "Osittain pilvistä", da: "Delvist skyet"
    },
    "pouring": {
      it: "Pioggia intensa", fr: "Pluie battante", es: "Lluvia intensa", de: "Starkregen", 
      nl: "Gietregen", pt: "Chuva intensa", ru: "Ливень", sv: "Störtregn", 
      pl: "Ulewa", cs: "Liják", fi: "Kaatosade", da: "Silende regn"
    },
    "rainy": {
      it: "Piovoso", fr: "Pluvieux", es: "Lluvioso", de: "Regnerisch", nl: "Regenachtig", 
      pt: "Chuvoso", ru: "Дождливо", sv: "Regnigt", pl: "Deszczowo", cs: "Deštivé", 
      fi: "Sateinen", da: "Regnfuldt"
    },
    "snowy": {
      it: "Nevoso", fr: "Neigeux", es: "Nevado", de: "Schneebedeckt", nl: "Sneeuwachtig", 
      pt: "Nevoso", ru: "Снежно", sv: "Snöigt", pl: "Śnieżnie", cs: "Sněhové", 
      fi: "Luminen", da: "Snefuldt"
    },
    "snowy-rainy": {
      it: "Neve e pioggia", fr: "Neige et pluie", es: "Nieve y lluvia", de: "Schneeregen", 
      nl: "Sneeuw en regen", pt: "Chuva e neve", ru: "Снег с дождем", sv: "Snö och regn", 
      pl: "Deszcz ze śniegiem", cs: "Déšť se sněhem", fi: "Räntä", da: "Slud"
    },
    "sunny": {
      it: "Soleggiato", fr: "Ensoleillé", es: "Soleado", de: "Sonnig", nl: "Zonnig", 
      pt: "Ensolarado", ru: "Солнечно", sv: "Soligt", pl: "Słonecznie", cs: "Slunečno", 
      fi: "Aurinkoinen", da: "Solrigt"
    },
    "windy": {
      it: "Ventoso", fr: "Venteux", es: "Ventoso", de: "Windig", nl: "Winderig", 
      pt: "Ventoso", ru: "Ветрено", sv: "Blåsigt", pl: "Wietrznie", cs: "Větrno", 
      fi: "Tuulinen", da: "Blæsende"
    },
    "windy-variant": {
      it: "Vento variabile", fr: "Vent variable", es: "Viento variable", de: "Wechselnde Winde", 
      nl: "Variabele wind", pt: "Vento variável", ru: "Переменный ветер", sv: "Växlande vindar", 
      pl: "Zmienny wiatr", cs: "Proměnlivý vítr", fi: "Vaihteleva tuuli", da: "Skiftende vind"
    },
    "exceptional": {
      it: "Eccezionale", fr: "Exceptionnel", es: "Excepcional", de: "Außergewöhnlich", 
      nl: "Uitzonderlijk", pt: "Excepcional", ru: "Исключительно", sv: "Exceptionellt", 
      pl: "Wyjątkowy", cs: "Výjimečný", fi: "Poikkeuksellinen", da: "Ekstraordinær"
    }
  };
  
export function getTranslation(state, lang) {
    // const lang = this.hass?.language || "en"; // Ottiene la lingua di HA, default "en"

    // Se la traduzione esiste nella mappa, la restituisce, altrimenti ritorna lo stato originale
    return weatherTranslations[state]?.[lang] || state;
}