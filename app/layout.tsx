import type { Metadata } from 'next';
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
