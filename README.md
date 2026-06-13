# Namit Joshi — Portfolio (React + TypeScript + Vite)

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

## Build for production

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── About/          # About section
│   ├── ChatBot/        # AI chat widget (Claude API)
│   ├── Contact/        # Contact section
│   ├── Experience/     # Experience cards with hover reveal
│   ├── Hero/           # Hero section
│   ├── Navbar/         # Fixed top nav
│   ├── Projects/       # Projects + phone mockup
│   └── Skills/         # Tech stack chips
├── data/
│   └── portfolio.ts    # All content in one place — edit here!
├── App.tsx
├── App.css             # Global styles + CSS variables
└── main.tsx
```

## Customization

All content (projects, experience, skills, contact) lives in **`src/data/portfolio.ts`** — edit there and everything updates automatically.

## Deploy

Works out of the box on **Vercel**, **Netlify**, or any static host:

```bash
npm run build
# upload /dist folder
```
