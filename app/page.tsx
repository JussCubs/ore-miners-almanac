import { getDocs, renderMarkdown } from '@/lib/content';

const order = [
  '00-mission',
  '01-mining-ethos',
  '02-beginner-guide',
  '03-miner-stories',
  '04-strategy-library',
  '05-uore-patience-yield',
  '06-lore-archive',
  '07-community-wisdom-commands',
  '08-refinore-roberto-command-center',
  '09-channel-updates'
];

export default function Home() {
  const docs = getDocs().sort((a, b) => order.indexOf(a.slug) - order.indexOf(b.slug));
  return (
    <main>
      <div className="topbar">
        Powered by Roberto from <a href="https://automine.refinore.com" target="_blank" rel="noreferrer">automine.refinore.com</a>
      </div>

      <section className="hero">
        <div className="eyebrow">⛏️ ORE community education</div>
        <h1>ORE Miner's Almanac</h1>
        <p className="subtitle">A living education and storytelling hub for ORE miners — built from community dialogue, veteran ethos, uORE patience, and the lore that should not disappear into chat scrollback.</p>
        <div className="heroActions">
          <a href="#mining-ethos">Read the ethos</a>
          <a href="#refinore-roberto-command-center">Use Roberto</a>
        </div>
      </section>

      <section className="grid introGrid">
        {docs.slice(0, 9).map((doc) => (
          <a className="card" href={`#${doc.slug}`} key={doc.slug}>
            <span>{doc.slug.slice(0,2)}</span>
            <h2>{doc.title.replace(/^\d+\.\s*/, '')}</h2>
            <p>{doc.summary}</p>
          </a>
        ))}
      </section>

      <section className="docs">
        {docs.map((doc) => (
          <article className="doc" id={doc.slug} key={doc.slug}>
            <div dangerouslySetInnerHTML={{ __html: renderMarkdown(doc.body) }} />
          </article>
        ))}
      </section>
    </main>
  );
}
