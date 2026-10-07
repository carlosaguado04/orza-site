# Orza site

Marketing site for **Orza**, Acidity Studio’s macOS browser.

## Stack

- Next.js (App Router) + TypeScript + Tailwind CSS v4
- Framer Motion (respects `prefers-reduced-motion`)
- Satoshi for UI and the Orza wordmark (Fontshare CDN + optional local `public/fonts/*.woff2`)

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

Vercel-ready. Point a project at this repo (`carlosaguado04/orza-site`); no special env vars required. Hook Vercel next when ready.

## Content rules

Feature copy is limited to what exists in the Orza app (Settings, menus, chrome). Do not invent passkeys, sync, AI, mobile, or extension stores.

## Feature groups on the site

- **Tabs & Spaces** — Spaces, tree tabs, split tabs, sidebar
- **Privacy & Shields** — Adblock, block popups, permissions, Veil, connection security
- **Chrome & Library** — URL pill, Hide Chrome, appearance, accent, media player, Library, Reader, Find
- **Everyday** — New Tab, search engine, restore session, downloads, bookmark, share

Downloads: https://github.com/Acidity-Studio/orza-releases
