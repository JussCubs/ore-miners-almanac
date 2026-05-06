import Link from 'next/link';
import { getDoc, renderMarkdown } from '@/lib/content';

const sections = [
  { href: '/ethos', icon: '🔥', title: 'Mining Ethos', desc: 'The philosophy behind long-term ORE mining. Why patience beats luck every time.' },
  { href: '/guide', icon: '📖', title: 'Beginner Guide', desc: 'Everything a new miner needs — safe defaults, tile strategy, and first-week playbook.' },
  { href: '/stories', icon: '⛏️', title: 'Miner Stories', desc: 'Origin stories from Orillions, Madhatt3r, Fronk, David, and more.' },
  { href: '/strategy', icon: '🎯', title: 'Strategy Library', desc: 'Low-and-slow, never-claim, strategic claimer — proven approaches from veterans.' },
  { href: '/uore', icon: '💎', title: 'uORE & Yield', desc: '~70-75% APR, 10% claim fee, and why patience is the highest-yield strategy.' },
  { href: '/lore', icon: '📜', title: 'Lore Archive', desc: 'The first motherlode, the V3 transition, and the history that shaped mining culture.' },
  { href: '/community', icon: '💬', title: 'Community Wisdom', desc: 'Quick-reference advice and bot-command-style snippets from veterans.' },
  { href: '/roberto', icon: '🤖', title: 'refinORE + Roberto', desc: 'Your AI mining command center. Strategy management without babysitting.' },
];

export default function Home() {
  const mission = getDoc('00-mission');

  return (
    <>
      <section className="hero">
        <div className="eyebrow">⛏️ ORE community education</div>
        <h1>ORE Miner&rsquo;s Almanac</h1>
        <p className="subtitle">
          A living education and storytelling hub for ORE miners — built from community dialogue,
          veteran ethos, uORE patience, and the lore that should not disappear into chat scrollback.
        </p>
        <div className="heroActions">
          <Link href="/ethos">Read the ethos</Link>
          <a href="https://automine.refinore.com" target="_blank" rel="noreferrer" className="primary">
            Try Roberto
          </a>
        </div>
      </section>

      <div className="quote-card">
        <blockquote>
          Mining ORE isn&rsquo;t about winning every round. It&rsquo;s about building a position
          in the only asset you can&rsquo;t fully buy your way into: uORE. The edge is patience,
          consistency, and information.
        </blockquote>
        <p className="quote-attr">&mdash; Cubs</p>
      </div>

      <section className="grid">
        {sections.map((s) => (
          <Link className="card" href={s.href} key={s.href}>
            <div className="card-icon">{s.icon}</div>
            <h2>{s.title}</h2>
            <p>{s.desc}</p>
          </Link>
        ))}
      </section>

      {mission && (
        <section className="docs" style={{ marginTop: 40 }}>
          <article className="doc">
            <div dangerouslySetInnerHTML={{ __html: renderMarkdown(mission.body) }} />
          </article>
        </section>
      )}

      <div className="cta-section">
        <a href="https://automine.refinore.com" target="_blank" rel="noreferrer" className="cta-btn">
          🤖 Try Roberto on refinORE
        </a>
      </div>
    </>
  );
}
