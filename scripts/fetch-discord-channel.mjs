#!/usr/bin/env node
import fs from 'node:fs';

const channelId = process.argv[2] || '1501286451873316924';
const out = process.argv[3] || 'data/discord/latest.json';
const token = process.env.DISCORD_USER_TOKEN;
if (!token) {
  console.error('DISCORD_USER_TOKEN is required');
  process.exit(1);
}

const url = new URL(`https://discord.com/api/v10/channels/${channelId}/messages`);
url.searchParams.set('limit', '100');
const res = await fetch(url, { headers: { Authorization: token } });
if (!res.ok) {
  console.error(`Discord fetch failed: ${res.status} ${await res.text()}`);
  process.exit(1);
}
const messages = await res.json();
fs.mkdirSync(out.split('/').slice(0, -1).join('/') || '.', { recursive: true });
fs.writeFileSync(out, JSON.stringify({ channelId, fetchedAt: new Date().toISOString(), messages }, null, 2));
console.log(`Fetched ${messages.length} messages from ${channelId} -> ${out}`);
