#!/usr/bin/env node

/**
 * update-from-discord.mjs
 *
 * Reads a Discord JSON export file and appends new content to markdown
 * files under content/. Never deletes existing content — only appends
 * dated update sections with new dialogue, sentiment, and wisdom.
 *
 * Usage:
 *   node scripts/update-from-discord.mjs [path-to-json]
 *
 * Default path: data/discord/latest.json
 *
 * Designed to be called by cron. Safe to run multiple times — tracks
 * the last processed message ID to avoid duplicate entries.
 */

import fs from 'node:fs';
import path from 'node:path';

const input = process.argv[2] || 'data/discord/latest.json';
const contentDir = path.join(process.cwd(), 'content');
const updatesPath = path.join(contentDir, '09-channel-updates.md');
const statePath = path.join(process.cwd(), 'data/discord/.last-processed-id');

// Slug-to-file mapping for multi-file appending
const sectionFiles = {
  ethos: '01-mining-ethos.md',
  guide: '02-beginner-guide.md',
  stories: '03-miner-stories.md',
  strategy: '04-strategy-library.md',
  uore: '05-uore-patience-yield.md',
  lore: '06-lore-archive.md',
  community: '07-community-wisdom-commands.md',
  roberto: '08-refinore-roberto-command-center.md',
};

function clean(s = '') { return String(s).replace(/\s+/g, ' ').trim(); }
function getMessages(payload) { return Array.isArray(payload) ? payload : (payload.messages || []); }
function nameOf(m) { return m.author?.global_name || m.author?.username || 'Unknown miner'; }
function snowflakeTime(id) { return Number((BigInt(id) >> 22n) + 1420070400000n); }

function appendToFile(filePath, section) {
  if (!fs.existsSync(filePath)) return;
  const existing = fs.readFileSync(filePath, 'utf8');
  fs.writeFileSync(filePath, existing.trimEnd() + '\n\n' + section.trim() + '\n');
}

function categorize(msg) {
  const text = (msg.content || '').toLowerCase();
  const len = clean(msg.content).length;
  const cats = [];

  if (len > 400 && /ethos|patience|conviction|philosophy|mining is/.test(text)) cats.push('ethos');
  if (/uore|apr|yield|claim fee|70%|75%/.test(text)) cats.push('uore');
  if (/25 tile|25 block|low.and.slow/.test(text) || (/strategy/.test(text) && len > 100)) cats.push('strategy');
  if (/beginner|new miner|getting started|safe default|first time/.test(text)) cats.push('guide');
  if (/refinore|roberto|automine/.test(text)) cats.push('roberto');
  if (len > 250 && /started mining|my journey|i began|origin|when i first/.test(text)) cats.push('stories');
  if (/!fronk|!thep|!zoo|!lowandslow/.test(text)) cats.push('community');
  if (len > 150 && cats.length === 0) cats.push('community');

  return cats;
}

if (!fs.existsSync(input)) {
  console.error(`No Discord export found at ${input}`);
  process.exit(1);
}

const payload = JSON.parse(fs.readFileSync(input, 'utf8'));
let messages = getMessages(payload)
  .filter((m) => m && m.id && clean(m.content))
  .sort((a, b) => snowflakeTime(a.id) - snowflakeTime(b.id));

const lastId = fs.existsSync(statePath) ? fs.readFileSync(statePath, 'utf8').trim() : '';
if (lastId) {
  const lastMs = snowflakeTime(lastId);
  messages = messages.filter((m) => snowflakeTime(m.id) > lastMs);
}

if (!messages.length) {
  console.log('No new Discord messages to add.');
  process.exit(0);
}

console.log(`Processing ${messages.length} new messages...`);

// --- Theme analysis ---
const authors = new Map();
for (const m of messages) authors.set(nameOf(m), (authors.get(nameOf(m)) || 0) + 1);
const topAuthors = [...authors.entries()].sort((a, b) => b[1] - a[1]).slice(0, 8);
const text = messages.map((m) => clean(m.content)).join('\n').toLowerCase();
const themes = [
  ['uORE / patience', ['uore', 'claim', 'yield', 'apr', 'patien']],
  ['low-and-slow 25 tile mining', ['25', 'blocks', 'tiles', 'low and slow', 'all 25']],
  ['production cost / ore.fyi', ['production cost', 'ore.fyi']],
  ['lore and origin stories', ['lore', 'first', 'history', 'motherlode', 'ml']],
  ['safe defaults / misconfiguration', ['misconfigure', 'safe', 'default', 'blow']],
  ['commands / preserving knowledge', ['command', '!fronk', 'buried', 'bot']],
  ['refinORE / Roberto', ['refinore', 'roberto', 'automine']]
].filter(([, keys]) => keys.some((k) => text.includes(k))).map(([label]) => label);

const date = new Date().toISOString().slice(0, 10);
const start = messages[0]?.timestamp || new Date(snowflakeTime(messages[0].id)).toISOString();
const end = messages.at(-1)?.timestamp || new Date(snowflakeTime(messages.at(-1).id)).toISOString();

// --- Append channel updates summary ---
const notable = messages
  .filter((m) => clean(m.content).length > 40 || /uore|refinore|roberto|strategy|mine|claim|lore|motherlode|ore\.fyi|!\w+/i.test(m.content || ''))
  .slice(-12)
  .map((m) => `- **${nameOf(m)}:** ${clean(m.content).slice(0, 300)}`)
  .join('\n');

let addition = `\n\n## ${date} Discord Update\n\n`;
addition += `Captured ${messages.length} new messages from ${start} through ${end}.\n\n`;
if (topAuthors.length) addition += `**Most active voices:** ${topAuthors.map(([n, c]) => `${n} (${c})`).join(', ')}.\n\n`;
if (themes.length) addition += `**Themes detected:** ${themes.join(', ')}.\n\n`;
addition += `**Sentiment read:** the channel continues to build the education and storytelling hub: miners are preserving lore, sharpening strategy language, and turning repeated advice into reusable onboarding material.\n\n`;
if (notable) addition += `**Dialogue to organize into the Almanac:**\n\n${notable}\n`;

const current = fs.existsSync(updatesPath) ? fs.readFileSync(updatesPath, 'utf8') : '# Channel Updates\n';
fs.writeFileSync(updatesPath, current.trimEnd() + addition);
console.log(`  Appended summary to 09-channel-updates.md`);

// --- Categorize and append to section files ---
const meaningful = messages.filter((m) => clean(m.content).length > 50);
const buckets = {};
for (const msg of meaningful) {
  for (const cat of categorize(msg)) {
    if (!buckets[cat]) buckets[cat] = [];
    buckets[cat].push(msg);
  }
}

for (const [slug, msgs] of Object.entries(buckets)) {
  const file = sectionFiles[slug];
  if (!file) continue;
  const filePath = path.join(contentDir, file);
  if (!fs.existsSync(filePath)) continue;

  const lines = [`\n---\n`, `## Update — ${date}\n`, `*Auto-extracted from the mining channel*\n`];
  for (const msg of msgs.slice(0, 15)) {
    const author = nameOf(msg);
    const content = clean(msg.content);
    const reactions = (msg.reactions || []).map((r) => `${r.emoji.name} x${r.count}`).join(', ');
    lines.push(`### ${author}\n`);
    lines.push(`> ${content.length > 500 ? content.slice(0, 500) + '...' : content}\n`);
    if (reactions) lines.push(`*Reactions: ${reactions}*\n`);
  }

  appendToFile(filePath, lines.join('\n'));
  console.log(`  Appended ${msgs.length} messages to ${file}`);
}

// --- Save state ---
fs.mkdirSync(path.dirname(statePath), { recursive: true });
fs.writeFileSync(statePath, messages.at(-1).id + '\n');
console.log(`Updated last processed ID. Done.`);
