# Fuel — Gestione Nutrizione + Allenamento

## Funzionalità

- **Piano giornaliero** completo, navigabile per giorno della settimana
- **Macro e calorie** giornaliere visibili a colpo d'occhio
- **Pasti espandibili** con grammature, timing e note tecniche
- **Lista spesa** con check persistente (localStorage)
- **10 regole** d'oro da ricordare
- **Tracker peso** con calcolo automatico Δ settimanale
- **Note rapide** per appuntare sensazioni e sintomi
- **Offline**: service worker per uso senza connessione
- **Installabile come app**: aggiungi a home screen dal browser

## Deploy su Vercel (3 modi)

### Opzione A — Vercel CLI (consigliata, più veloce)

```bash
npm i -g vercel
cd nutrition-app
vercel
```

Segui il wizard. Pronta in 30 secondi.

### Opzione B — GitHub + Vercel Dashboard

1. Crea repo GitHub e fai push di questa cartella
2. Vai su [vercel.com/new](https://vercel.com/new)
3. Importa il repo
4. Framework preset: **Other** (è statica, niente build)
5. Deploy

### Opzione C — Drag & drop

1. Crea cartella `.zip` con tutti i file
2. Vai su [vercel.com/new](https://vercel.com/new)
3. Trascina lo zip nella sezione "Deploy"

## Installazione su iPhone

1. Apri l'URL Vercel su Safari
2. Tocca il pulsante "Condividi" (quadrato con freccia in su)
3. Scorri e tocca **"Aggiungi alla schermata Home"**
4. Conferma — l'app appare con icona nera/verde sulla home

## Installazione su Android

1. Apri l'URL Vercel su Chrome
2. Menu (3 puntini) → **"Installa app"** o "Aggiungi a schermata Home"
3. Conferma

## File structure

```
nutrition-app/
├── index.html       # UI + stili
├── app.js           # Logica
├── data.js          # Dati piano (modifica qui per aggiornare)
├── manifest.json    # Config PWA
├── sw.js            # Service worker (offline)
├── icon-192.png     # Icona PWA piccola
├── icon-512.png     # Icona PWA grande
└── vercel.json      # Config deploy
```

## Modificare il piano

Tutti i contenuti (pasti, spesa, regole) sono in `data.js`. Modifica e ridistribuisci.