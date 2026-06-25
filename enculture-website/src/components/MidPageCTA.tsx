import { Button } from "./Button";

interface MidPageCTAProps {
  eyebrow: string;
  question: string;
  ctaText: string;
  ctaHref: string;
}

export function MidPageCTA({ eyebrow, question, ctaText, ctaHref }: MidPageCTAProps) {
  return (
    <div className="mid-cta">
      <div>
        <div className="mid-cta-eyebrow">{eyebrow}</div>
        <p className="mid-cta-question">{question}</p>
      </div>
      <Button variant="primary" href={ctaHref} className="flex-none">
        {ctaText}
      </Button>
    </div>
  );
}
