import type { ReactNode } from "react";
import { Button } from "./Button";
import { Eyebrow } from "./Eyebrow";

interface HeroCta {
  text: string;
  href: string;
  variant: "primary" | "ghost";
}

interface SectionHeroProps {
  eyebrow: string;
  eyebrowVariant?: "teal" | "purple";
  title: ReactNode;
  lede: string;
  ctas: HeroCta[];
  visual?: ReactNode;
}

export function SectionHero({
  eyebrow,
  eyebrowVariant = "teal",
  title,
  lede,
  ctas,
  visual,
}: SectionHeroProps) {
  return (
    <section className="hero bg-[url('/bg-hero.svg')] bg-top bg-no-repeat bg-cover pt-20 pb-18">
      <div className="wrap">
        <div className="hero-grid">
          <div>
            <Eyebrow text={eyebrow} variant={eyebrowVariant} />
            <h1>{title}</h1>
            <p className="hero-lede">{lede}</p>
            <div className="hero-ctas">
              {ctas.map((cta) => (
                <Button key={cta.text} variant={cta.variant} href={cta.href}>
                  {cta.text}
                </Button>
              ))}
            </div>
          </div>
          {visual && <div className="hero-visual flex justify-center">{visual}</div>}
        </div>
      </div>
    </section>
  );
}
