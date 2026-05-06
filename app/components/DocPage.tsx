import { getDoc, renderMarkdown } from '@/lib/content';

export default function DocPage({ slug }: { slug: string }) {
  const doc = getDoc(slug);
  if (!doc) return <p>Content not found.</p>;

  return (
    <article className="doc">
      <div dangerouslySetInnerHTML={{ __html: renderMarkdown(doc.body) }} />
    </article>
  );
}
