interface QuoteCardProps {
  quote: string;
  name: string;
  title: string;
}

export function QuoteCard({ quote, name, title }: QuoteCardProps) {
  return (
    <div className="quote-card">
      <div className="quote-mark">&ldquo;</div>
      <p className="quote-text">{quote}</p>
      <div className="quote-attr">
        <strong>{name}</strong> &middot; {title}
      </div>
    </div>
  );
}
