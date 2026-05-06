# ⛏️ ORE Miner's Almanac

A public education and storytelling hub for ORE miners.

Powered by Roberto from [automine.refinore.com](https://automine.refinore.com).

## What this is

This webapp turns the ORE Discord `⛏️｜mining` channel into organized educational material — a structured hub for mining wisdom, veteran stories, and proven strategies. Seeded from real community dialogue and maintained as a living reference.

## Sections

| Section | Route | Content |
|---|---|---|
| Home / Mission | `/` | Overview, navigation cards, Cubs quote |
| Mining Ethos | `/ethos` | Philosophy of long-term ORE mining |
| Beginner Guide | `/guide` | New miner setup, safe defaults, first-week playbook |
| Miner Stories | `/stories` | Origin stories: Orillions, Madhatt3r, Fronk, David, Brian |
| Strategy Library | `/strategy` | Low-and-slow, never-claim, strategic claimer, aggressive |
| uORE & Yield | `/uore` | APR mechanics (~70-75%), claim fee math, patience strategy |
| Lore Archive | `/lore` | V3 history, first motherlode, tool building era |
| Community Wisdom | `/community` | Bot-command-style quick reference snippets |
| refinORE + Roberto | `/roberto` | AI mining command center overview |

## Content structure

All canonical content lives in `content/*.md`:

```
content/
├── 00-mission.md                         # Home page / mission
├── 01-mining-ethos.md                    # Mining philosophy
├── 02-beginner-guide.md                  # Beginner guide
├── 03-miner-stories.md                   # Miner origin stories
├── 04-strategy-library.md                # Strategy library
├── 05-uore-patience-yield.md             # uORE & yield mechanics
├── 06-lore-archive.md                    # History and lore
├── 07-community-wisdom-commands.md       # Community wisdom / bot commands
├── 08-refinore-roberto-command-center.md  # refinORE + Roberto
└── 09-channel-updates.md                 # Rolling channel updates
```

## Update rule

**Never remove context. Only append/edit to organize education and storytelling.**

Content is append-only by design:
- New Discord conversations are folded into existing sections
- Old wisdom is never deleted
- Updates add dated sections with new dialogue and sentiment
- The script `scripts/update-from-discord.mjs` handles automated updates

The updater should:

1. Read fresh Discord export JSON.
2. Categorize messages by topic (ethos, strategy, uORE, stories, community, etc.)
3. Append dated update sections to relevant content files.
4. Add summary to `content/09-channel-updates.md`.
5. Track last processed message ID to avoid duplicates.
6. Never commit secrets or raw auth material.

## Discord updater

```bash
node scripts/update-from-discord.mjs                        # default: data/discord/latest.json
node scripts/update-from-discord.mjs path/to/export.json     # custom path
npm run update:discord -- data/discord/latest.json            # via npm script
```

The updater is intentionally append-first. Cron jobs can refresh `data/discord/latest.json`, run this script, then commit/push content updates.

### Cron setup

```bash
0 0 * * * cd /path/to/ore-miners-almanac && node scripts/update-from-discord.mjs
```

## Tech stack

- **Next.js** (App Router) + TypeScript
- **Plain CSS** with dark ORE/refinORE aesthetic
- Zero heavy dependencies — custom markdown renderer, no external CSS framework
- Vercel-ready deployment

## Local dev

```bash
npm install
npm run dev     # Start dev server
npm run build   # Production build
npm start       # Serve production build
```

## Deployment

Vercel-ready. Push to a Git remote and connect to Vercel, or:

```bash
npx vercel
```

## Credits

- Built from the wisdom of the ⛏️｜mining channel community
- Miners: Cubs, Orillions, Madhatt3r, Suckytrader, David, Fronk, Brian, Thep, and all contributors
- Powered by Roberto from [automine.refinore.com](https://automine.refinore.com)
