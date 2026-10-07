# Orza site

Marketing site for **Orza**, Acidity Studio’s macOS browser.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS v4
- Framer Motion (respects `prefers-reduced-motion`)
- Satoshi for UI and the Orza wordmark

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build
npm start
```

## Deploy

Vercel-ready. Point a project at this repo; no special env vars required.

## Content rules

Feature copy is limited to what exists in the Orza app (Settings, menus, chrome). Do not invent passkeys, sync, AI, mobile, or extension stores.

Downloads: https://github.com/Acidity-Studio/orza-releases
