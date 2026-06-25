import { Button } from "./Button";
import { Eyebrow } from "./Eyebrow";
import { Logo } from "./Logo";

interface CTAButton {
  text: string;
  href: string;
}

interface CTASectionProps {
  eyebrowText?: string;
  title: string;
  lede: string;
  primaryCta?: CTAButton;
  secondaryCta?: CTAButton;
}

const DEFAULT_PRIMARY: CTAButton = { text: "Book a demo", href: "/demo" };
const DEFAULT_SECONDARY: CTAButton = {
  text: "Take the free culture health check",
  href: "https://go.enculture.ai",
};

export function CTASection({
  eyebrowText = "Let's talk culture",
  title,
  lede,
  primaryCta = DEFAULT_PRIMARY,
  secondaryCta = DEFAULT_SECONDARY,
}: CTASectionProps) {
  return (
    <section className="cta-section">
      <div className="wrap">
        <Eyebrow text={eyebrowText} />
        <h2>{title}</h2>
        <p>{lede}</p>
        <div className="cta-btns">
          <Button variant="primary" href={primaryCta.href}>
            {primaryCta.text}
          </Button>
          <Button
            variant="ghost"
            href={secondaryCta.href}
            className="border-bright-teal text-bright-teal hover:bg-bright-teal hover:text-night"
          >
            {secondaryCta.text}
          </Button>
        </div>
        <div className="cta-logo">
          <Logo />
        </div>
      </div>
    </section>
  );
}
