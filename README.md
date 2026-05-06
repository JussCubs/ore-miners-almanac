# ORE Miner's Almanac

A public education and storytelling hub for ORE miners.

Powered by Roberto from https://automine.refinore.com.

## What this is

This repo turns the ORE Discord `⛏️｜mining` channel into organized educational material:

- Mining ethos
- Beginner guidance
- Miner origin stories
- Strategy archetypes
- uORE patience/yield education
- Lore archive
- Bot-command style community snippets
- refinORE + Roberto strategy management context

## Content structure

All canonical content lives in `content/*.md`.

The website renders those markdown files into a single premium long-form educational page.

## Update rule

Future updates must preserve context. Do not remove old material just because the channel evolves.

The updater should:

1. Read fresh Discord export JSON.
2. Summarize new dialogue and sentiment.
3. Add dated sections to `content/09-channel-updates.md`.
4. Edit existing markdown only to clarify or organize accumulated wisdom.
5. Never commit secrets or raw auth material.

## Local dev

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Discord updater

```bash
npm run update:discord -- data/discord/latest.json
```

The updater is intentionally append-first. Cron jobs can refresh `data/discord/latest.json`, run this script, then commit/push content updates.
