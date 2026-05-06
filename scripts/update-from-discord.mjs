#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

const input = process.argv[2] || 'data/discord/latest.json';
const updatesPath = path.join(process.cwd(), 'content/09-channel-updates.md');

function clean(s = '') {
  return String(s).replace(/\s+/g, ' ').trim();
}

function getMessages(payload) {
  if (Array.isArray(payload)) return payload;
  if (Array.isArray(payload.messages)) return payload.messages;
  return [];
}

if (!fs.existsSync(input)) {
  console.error(`No Discord export found at ${input}`);
  process.exit(1);
}

const payload = JSON.parse(fs.readFileSync(input, 'utf8'));
const messages = getMessages(payload).slice().reverse();
const nonEmpty = messages.filter((m) => clean(m.content));
const authors = new Map();
for (const m of nonEmpty) {
  const name = m.author?.global_name || m.author?.username || 'Unknown miner';
  authors.set(name, (authors.get(name) || 0) + 1);
}
const topAuthors = [...authors.entries()].sort((a, b) => b[1] - a[1]).slice(0, 8);
const text = nonEmpty.map((m) => clean(m.content)).join('\n').toLowerCase();
const themes = [
  ['uORE / patience', ['uore', 'claim', 'yield', 'apr', 'patien']],
  ['low-and-slow 25 tile mining', ['25', 'blocks', 'tiles', 'low and slow', 'all 25']],
  ['production cost / ore.fyi', ['production cost', 'ore.fyi']],
  ['lore and origin stories', ['lore', 'first', 'history', 'motherlode']],
  ['safe defaults / misconfiguration', ['misconfigure', 'safe', 'default', 'blow']],
  ['commands / preserving knowledge', ['command', '!fronk', 'buried', 'bot']]
].filter(([, keys]) => keys.some((k) => text.includes(k))).map(([label]) => label);

const start = messages[0]?.timestamp || new Date().toISOString();
const end = messages.at(-1)?.timestamp || new Date().toISOString();
const date = new Date().toISOString().slice(0, 10);
const sample = nonEmpty.slice(-8).map((m) => {
  const name = m.author?.global_name || m.author?.username || 'Unknown miner';
  return `- **${name}:** ${clean(m.content).slice(0, 240)}`;
}).join('\n');

let addition = `\n\n## ${date} Discord Update\n\n`;
addition += `Captured ${messages.length} messages from ${start} through ${end}.\n\n`;
if (topAuthors.length) addition += `**Most active voices:** ${topAuthors.map(([n, c]) => `${n} (${c})`).join(', ')}.\n\n`;
if (themes.length) addition += `**Themes detected:** ${themes.join(', ')}.\n\n`;
addition += `**Sentiment read:** the channel continues to function as an education and storytelling hub: miners are sharing strategy, preserving lore, and translating experience into reusable guidance for newer miners.\n\n`;
if (sample) addition += `**Recent dialogue snippets to organize later:**\n\n${sample}\n`;

const current = fs.existsSync(updatesPath) ? fs.readFileSync(updatesPath, 'utf8') : '# 09. Channel Updates\n';
fs.writeFileSync(updatesPath, current.trimEnd() + addition);
console.log(`Appended Discord update to ${updatesPath}`);
