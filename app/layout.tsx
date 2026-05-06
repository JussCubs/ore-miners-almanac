import type { Metadata } from 'next';
import Link from 'next/link';
import './styles.css';

export const metadata: Metadata = {
  title: "ORE Miner's Almanac",
  description: 'An education and storytelling hub for ORE miners, powered by Roberto on refinORE.',
  openGraph: {
    title: "ORE Miner's Almanac",
    description: 'Mining ethos, uORE patience, strategy notes, lore, and community wisdom.',
    type: 'website'
  }
};

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/ethos', label: 'Ethos' },
  { href: '/guide', label: 'Beginner Guide' },
  { href: '/stories', label: 'Miner Stories' },
  { href: '/strategy', label: 'Strategy' },
  { href: '/uore', label: 'uORE & Yield' },
  { href: '/lore', label: 'Lore' },
  { href: '/community', label: 'Community' },
  { href: '/roberto', label: 'refinORE' },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="topbar">
          Powered by Roberto from{' '}
          <a href="https://automine.refinore.com" target="_blank" rel="noreferrer">
            https://automine.refinore.com
          </a>
        </div>

        <header className="site-header">
          <Link href="/" className="site-logo">
            <span className="logo-icon">⛏️</span>
            <span className="logo-text">ORE Miner&rsquo;s Almanac</span>
          </Link>
          <nav className="site-nav">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="nav-link">
                {link.label}
              </Link>
            ))}
          </nav>
        </header>

        <main>{children}</main>

        <footer className="site-footer">
          <div className="footer-inner">
            <div className="footer-brand">
              <p className="footer-title">⛏️ ORE Miner&rsquo;s Almanac</p>
              <p className="footer-sub">Built from the wisdom of the ⛏️｜mining channel</p>
            </div>
            <div className="footer-right">
              <p>
                Powered by Roberto from{' '}
                <a href="https://automine.refinore.com" target="_blank" rel="noreferrer">
                  automine.refinore.com
                </a>
              </p>
              <p className="footer-sub">Content is append-only. We never delete community wisdom.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
