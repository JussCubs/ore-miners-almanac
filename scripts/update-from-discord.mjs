#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

const input = process.argv[2] || 'data/discord/latest.json';
const updatesPath = path.join(process.cwd(), 'content/09-channel-updates.md');
const statePath = path.join(process.cwd(), 'data/discord/.last-processed-id');

function clean(s = '') { return String(s).replace(/\s+/g, ' ').trim(); }
function getMessages(payload) { return Array.isArray(payload) ? payload : (payload.messages || []); }
function nameOf(m) { return m.author?.global_name || m.author?.username || 'Unknown miner'; }
function snowflakeTime(id) { return Number((BigInt(id) >> 22n) + 1420070400000n); }

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

const start = messages[0]?.timestamp || new Date(snowflakeTime(messages[0].id)).toISOString();
const end = messages.at(-1)?.timestamp || new Date(snowflakeTime(messages.at(-1).id)).toISOString();
const date = new Date().toISOString().slice(0, 10);
const notable = messages
  .filter((m) => clean(m.content).length > 40 || /uore|refinore|roberto|strategy|mine|claim|lore|motherlode|ore\.fyi|!\w+/i.test(m.content || ''))
  .slice(-12)
  .map((m) => `- **${nameOf(m)}:** ${clean(m.content).slice(0, 300)}`)
  .join('\n');

let addition = `\n\n## ${date} Discord Update\n\n`;
addition += `Captured ${messages.length} new messages from ${start} through ${end}.\n\n`;
if (topAuthors.length) addition += `**Most active voices:** ${topAuthors.map(([n, c]) => `${n} (${c})`).join(', ')}.\n\n`;
if (themes.length) addition += `**Themes detected:** ${themes.join(', ')}.\n\n`;
addition += `**Sentiment read:** the channel continues to build Thep's education and storytelling hub: miners are preserving lore, sharpening strategy language, and turning repeated advice into reusable onboarding material.\n\n`;
if (notable) addition += `**Dialogue to organize into the Almanac:**\n\n${notable}\n`;

const current = fs.existsSync(updatesPath) ? fs.readFileSync(updatesPath, 'utf8') : '# 09. Channel Updates\n';
fs.writeFileSync(updatesPath, current.trimEnd() + addition);
fs.mkdirSync(path.dirname(statePath), { recursive: true });
fs.writeFileSync(statePath, messages.at(-1).id + '\n');
console.log(`Appended ${messages.length} new messages to ${updatesPath}`);
