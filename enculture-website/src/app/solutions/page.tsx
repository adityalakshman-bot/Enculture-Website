import type { Metadata } from "next";
import Link from "next/link";
import { Building2, ClipboardList, Users, Wallet } from "lucide-react";
import { SectionHero } from "@/components/SectionHero";
import { Eyebrow } from "@/components/Eyebrow";
import { CTASection } from "@/components/CTASection";
import { MidPageCTA } from "@/components/MidPageCTA";
import { RevealOnScroll } from "@/components/RevealOnScroll";

export const metadata: Metadata = {
  title: "Culture Intelligence Solutions by Role, Use Case & Industry | Enculture",
  description:
    "Find the right Enculture solution for your role, challenge, or industry. CHRO, HR Manager, CFO, employee engagement, manager effectiveness, and more.",
};

const PERSONAS = [
  {
    icon: Users,
    title: "CHROs",
    pain: "Turn culture into a board-ready number you can defend in any room.",
    href: "/solutions/for-chros",
  },
  {
    icon: ClipboardList,
    title: "HR Managers",
    pain: "Surface what matters and close the loop — without building the deck yourself.",
    href: "/solutions/for-hr-managers",
  },
  {
    icon: Wallet,
    title: "CFOs",
    pain: "Put a number on culture risk, and prove the investment is working.",
    href: "/solutions/for-cfos",
  },
];

const USE_CASES = [
  {
    title: "Employee Engagement",
    benefit: "Continuous listening that moves the business, not scores that sit in a deck.",
    href: "/solutions/engagement",
  },
  {
    title: "Onboarding & Exit",
    benefit: "Catch the signal at the moments that shape culture most — in real time.",
    href: "/solutions/exit-and-onboarding",
  },
  {
    title: "Manager Effectiveness",
    benefit: "The cross-team view HR has never had, and the nudge every manager needs.",
    href: "/solutions/manager-effectiveness",
  },
  {
    title: "Culture Assessment",
    benefit: "An assessment that gives you a plan — not just a percentile rank.",
    href: "/solutions/culture-assessment",
  },
  {
    title: "Change Readiness",
    benefit: "See how culture is responding to change before the initiative stalls.",
    href: "/solutions/change-readiness",
  },
  {
    title: "Remote & Hybrid",
    benefit: "Continuous culture listening for teams that never come back to one office.",
    href: "/solutions/remote-hybrid",
  },
];

const STAGES = [
  {
    title: "Growth Stage",
    range: "200–500 employees",
    benefit: "Enterprise-grade culture intelligence without enterprise complexity.",
    href: "/solutions/growth-stage-companies",
  },
  {
    title: "Mid-Market",
    range: "500–2,000 employees",
    benefit: "More agility than enterprise, more structure than a startup tool.",
    href: "/solutions/mid-market",
  },
  {
    title: "Enterprise",
    range: "2,000+ employees",
    benefit: "Multi-geography scale, governance, and a board-ready index.",
    href: "/solutions/enterprise",
  },
];

const INDUSTRIES = ["Manufacturing", "Financial Services", "Pharma & Healthcare"];

export default function SolutionsHubPage() {
  return (
    <>
      <SectionHero
        eyebrow="Solutions"
        title={<>Find the right path to culture intelligence.</>}
        lede="Whether you're a CHRO building a board case, an HR Manager closing the loop, or a CFO putting a number on culture risk — there's a faster way to get there than the tool you have today."
        ctas={[
          { text: "Take the free culture health check", href: "https://go.enculture.ai", variant: "ghost" },
          { text: "Book a demo", href: "/demo", variant: "primary" },
        ]}
      />

      {/* BY PERSONA */}
      <section className="section-white">
        <div className="wrap">
          <RevealOnScroll>
            <Eyebrow text="By role" />
            <h2>Built for the people responsible for culture — at every level.</h2>
          </RevealOnScroll>

          <RevealOnScroll className="grid-3 mt-10">
            {PERSONAS.map((persona) => {
              const Icon = persona.icon;
              return (
                <Link key={persona.href} href={persona.href} className="accent-card block transition-shadow hover:shadow-md">
                  <Icon className="mb-3 text-teal" size={26} strokeWidth={2} />
                  <h3>{persona.title}</h3>
                  <p>{persona.pain}</p>
                </Link>
              );
            })}
          </RevealOnScroll>
        </div>
      </section>

      {/* BY USE CASE */}
      <section>
        <div className="wrap">
          <RevealOnScroll>
            <Eyebrow text="By use case" variant="purple" />
            <h2>Whatever the challenge, there&apos;s a faster way to see it clearly.</h2>
          </RevealOnScroll>

          <RevealOnScroll className="grid-3 mt-10">
            {USE_CASES.map((useCase, index) => (
              <Link
                key={useCase.href}
                href={useCase.href}
                className={`accent-card block transition-shadow hover:shadow-md ${index % 2 === 1 ? "purple-top" : ""}`}
              >
                <h3>{useCase.title}</h3>
                <p>{useCase.benefit}</p>
              </Link>
            ))}
          </RevealOnScroll>

          <RevealOnScroll className="mt-10">
            <MidPageCTA
              eyebrow="Not sure where to start"
              question="Bring your situation. We'll point to the right starting place."
              ctaText="Book a demo"
              ctaHref="/demo"
            />
          </RevealOnScroll>
        </div>
      </section>

      {/* BY COMPANY STAGE */}
      <section className="section-white">
        <div className="wrap">
          <RevealOnScroll>
            <Eyebrow text="By company stage" />
            <h2>Built to fit where you are — not where a generic platform assumes you are.</h2>
          </RevealOnScroll>

          <RevealOnScroll className="grid-3 mt-10">
            {STAGES.map((stage) => (
              <Link key={stage.href} href={stage.href} className="accent-card purple-top block transition-shadow hover:shadow-md">
                <Building2 className="mb-3 text-purple" size={26} strokeWidth={2} />
                <h3>{stage.title}</h3>
                <p className="font-display text-xs font-semibold uppercase tracking-wide text-muted">{stage.range}</p>
                <p className="mt-2">{stage.benefit}</p>
              </Link>
            ))}
          </RevealOnScroll>
        </div>
      </section>

      {/* INDUSTRY BAND */}
      <section className="bg-teal-tint py-14">
        <div className="wrap text-center">
          <RevealOnScroll>
            <Eyebrow text="By industry" className="justify-center" />
            <h2 className="mx-auto max-w-2xl">
              Manufacturing, financial services, and pharma run Enculture too.
            </h2>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              {INDUSTRIES.map((industry) => (
                <Link
                  key={industry}
                  href="/demo"
                  className="rounded-full border border-teal/30 bg-card px-5 py-2 font-display text-sm font-semibold text-teal-deep transition-colors hover:bg-teal hover:text-white"
                >
                  {industry}
                </Link>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <CTASection
        title="Bring one culture question. Leave with a plan."
        lede="Thirty minutes. Tell us where you sit and what you're trying to solve — we'll show you exactly what Enculture would surface in your first 30 days."
      />
    </>
  );
}
