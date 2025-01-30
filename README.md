# 🌦️ Minimal Weather Card for Home Assistant

**Minimal Weather Card** è una custom card per Home Assistant che visualizza le condizioni meteo in modo compatto ed elegante.  
Supporta personalizzazioni avanzate, cambio dinamico dello sfondo e icone locali per un'integrazione ottimizzata.

---

## 📌 Funzionalità

✅ **Struttura compatta**:  
- Due colonne:  
  - **Prima colonna** → Icona principale del meteo (presa da file locali)  
  - **Seconda colonna** → Stato meteo e due attributi configurabili  

✅ **Personalizzazioni grafiche**:  


✅ **Sfondo dinamico (opzionale)**:  
- Se `bg_dynamic: true`, il background cambia in base al meteo  
- Se `bg_dynamic: false`, usa un colore fisso definito dal tema  

✅ **Compatibilità con i temi di Home Assistant**  
- Utilizza variabili CSS di sistema per un'integrazione fluida  

---

## 📂 Struttura del Progetto
minimal-weather-card/
│── handleClick.js    # Gestione azioni della card (tap, navigate, service)
│── style.js          # Stili e variabili CSS per il tema
│── main.js           # Logica principale della card
│── README.md         # Documentazione del progetto

---

## 🔧 Installazione


## ⚙️ Configurare la card in Lovelace

Aggiungi la card con la seguente configurazione:

type: custom:minimal-weather-card
entity: weather.home
attribute1: temperature
attribute2: humidity
tap_action:
  action: more-info
bg_dynamic: true

## 🎨 Personalizzazioni CSS

|nome|variabile|default
------|---------|------|
|sfondo fisso| --minimal-weather-bg-default|var(--card-background-color, #fff)|

--minimal-weather-bg-default	Sfondo fisso: `var(--card-background-color, #fff)`
--minimal-weather-bg-sunny	Sfondo soleggiato	#FFD700
--minimal-weather-bg-cloudy	Sfondo nuvoloso	#A9A9A9
--minimal-weather-bg-rainy	Sfondo piovoso	#4682B4
--minimal-weather-bg-snowy	Sfondo nevoso	#B0E0E6
--minimal-weather-bg-fog	Sfondo nebbioso	#708090
--minimal-weather-text-size-main	Dimensione testo principale	16px
--minimal-weather-text-size-attr	Dimensione testo attributi	14px
--minimal-weather-text-color-main	Colore testo principale	var(--primary-text-color, #000)
--minimal-weather-text-color-attr	Colore testo attributi	var(--primary-text-color, #000)


# 📜 Licenza

Questo progetto è rilasciato sotto licenza MIT.
Puoi modificarlo e ridistribuirlo liberamente citando l’autore.

# 💡 Credits

Basato su idee della community Home Assistant.
Custom card ispirata a simple-weather-card.
Sviluppato con ❤️ per Home Assistant.
