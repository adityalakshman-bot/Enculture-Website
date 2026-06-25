import type { Metadata } from "next";
import { Eyebrow } from "@/components/Eyebrow";
import { Button } from "@/components/Button";
import { CTASection } from "@/components/CTASection";
import { RevealOnScroll } from "@/components/RevealOnScroll";

export const metadata: Metadata = {
  title: "Enculture Pricing | Culture Intelligence Platform",
  description:
    "Enculture is priced per employee per month, with tiers based on organization size. Indicated ranges shown — exact pricing confirmed after a scoping call.",
};

// NOTE: indicative price ranges are intentionally left as placeholders pending
// real, approved figures — do not publish with invented numbers.
const TIERS = [
  {
    name: "Growth",
    audience: "200–500 employees",
    features: ["Pulse Arc", "Core AI Insights", "Action Centre", "Standard support"],
    range: "Indicative range shared during your scoping call",
    cta: { text: "Book a demo", href: "/demo" },
  },
  {
    name: "Business",
    audience: "500–2,000 employees",
    features: ["All Growth features", "Business Alignment Arc", "Manager dashboards", "Multi-team rollups"],
    range: "Indicative range shared during your scoping call",
    cta: { text: "Book a demo", href: "/demo" },
    featured: true,
  },
  {
    name: "Enterprise",
    audience: "2,000+ employees",
    features: ["All Business features", "All arc types", "SSO & multi-geography", "Dedicated success manager"],
    range: "Custom pricing",
    cta: { text: "Talk to us", href: "/demo" },
  },
];

export default function PricingPage() {
  return (
    <>
      <section className="hero pt-20 pb-18">
        <div className="wrap">
          <RevealOnScroll>
            <Eyebrow text="Pricing" />
            <h1>Priced per employee, per month.</h1>
            <p className="hero-lede">
              Indicated tiers based on organization size, shown below. Exact pricing is confirmed
              after a short scoping call, because the right configuration depends on
              organization size, modules, and geography.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      <section className="section-white">
        <div className="wrap">
          <RevealOnScroll className="grid-3">
            {TIERS.map((tier) => (
              <div key={tier.name} className={`card ${tier.featured ? "border-[1.5px] border-purple" : ""}`}>
                <h3>{tier.name}</h3>
                <p className="font-display text-xs font-semibold uppercase tracking-wide text-muted">{tier.audience}</p>
                <ul className="mt-4 flex flex-col gap-2 text-[0.93rem] text-muted">
                  {tier.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <p className="mt-4 font-display text-sm font-semibold text-purple-deep">{tier.range}</p>
                <div className="mt-4">
                  <Button variant={tier.featured ? "primary" : "ghost"} href={tier.cta.href}>
                    {tier.cta.text}
                  </Button>
                </div>
              </div>
            ))}
          </RevealOnScroll>
        </div>
      </section>

      <CTASection
        title="Bring your headcount. Leave with a number."
        lede="Thirty minutes to scope the right tier for your organization and get exact pricing."
      />
    </>
  );
}
