import fs from 'fs';
import path from 'path';

export type Doc = { slug: string; title: string; summary: string; body: string };

const contentDir = path.join(process.cwd(), 'content');

function titleFromMarkdown(md: string, slug: string) {
  const h1 = md.match(/^#\s+(.+)$/m)?.[1]?.trim();
  return h1 || slug.replace(/-/g, ' ');
}

function summaryFromMarkdown(md: string) {
  const lines = md.split('\n').map((l) => l.trim()).filter(Boolean);
  const firstPara = lines.find((l) => !l.startsWith('#') && !l.startsWith('>') && !l.startsWith('-'));
  return firstPara?.replace(/[*_`]/g, '').slice(0, 180) || 'Community-sourced ORE mining knowledge.';
}

export function getDocs(): Doc[] {
  return fs.readdirSync(contentDir)
    .filter((f) => f.endsWith('.md'))
    .sort()
    .map((file) => {
      const slug = file.replace(/\.md$/, '');
      const body = fs.readFileSync(path.join(contentDir, file), 'utf8');
      return { slug, title: titleFromMarkdown(body, slug), summary: summaryFromMarkdown(body), body };
    });
}

export function renderMarkdown(md: string) {
  const lines = md.split('\n');
  const html: string[] = [];
  let listOpen = false;
  const closeList = () => { if (listOpen) { html.push('</ul>'); listOpen = false; } };
  const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const inline = (s: string) => esc(s)
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/(https?:\/\/[^\s)]+)/g, '<a href="$1" target="_blank" rel="noreferrer">$1</a>');

  for (const raw of lines) {
    const line = raw.trim();
    if (!line) { closeList(); continue; }
    if (line.startsWith('### ')) { closeList(); html.push(`<h3>${inline(line.slice(4))}</h3>`); continue; }
    if (line.startsWith('## ')) { closeList(); html.push(`<h2>${inline(line.slice(3))}</h2>`); continue; }
    if (line.startsWith('# ')) { closeList(); html.push(`<h1>${inline(line.slice(2))}</h1>`); continue; }
    if (line.startsWith('> ')) { closeList(); html.push(`<blockquote>${inline(line.slice(2))}</blockquote>`); continue; }
    if (line.startsWith('- ')) { if (!listOpen) { html.push('<ul>'); listOpen = true; } html.push(`<li>${inline(line.slice(2))}</li>`); continue; }
    closeList(); html.push(`<p>${inline(line)}</p>`);
  }
  closeList();
  return html.join('\n');
}
