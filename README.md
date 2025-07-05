# AQIChecker 🌬️

A lightweight web app that lets you check the current Air Quality Index (AQI) for any city and instantly see • a color-coded semi-circular gauge • a friendly tip card with health advice.  
Built with **React + TypeScript (Vite)** on the front-end and **Express + TypeScript** on the back-end, using data from the WAQI (World Air Quality Index) API.

---

## Tech Stack
| Layer | Stack |
|-------|-------|
| Front-end | React, TypeScript, Tailwind CSS, react-circular-progressbar |
| Back-end | Express, TypeScript, Axios |
| Data | WAQI public API |

---

## Getting Started

### 1. Clone & install

```bash
git clone https://github.com/your-username/airaware.git
cd airaware
npm install          # root – installs concurrently
cd server && npm install
cd ../client && npm install
```

### 2. Set environment variables
Create server/.env:

```bash
API_KEY=your_wiaqi_api_token_here
PORT=4000
```
### 3. Run in development

```bash
npm run dev  # runs server + client simultaneously
```
