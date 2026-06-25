import type { Metadata } from "next";
import Link from "next/link";
import { UserPlus, Users, Zap } from "lucide-react";
import { SectionHero } from "@/components/SectionHero";
import { Eyebrow } from "@/components/Eyebrow";
import { AccentCard } from "@/components/AccentCard";
import { NightSection } from "@/components/NightSection";
import { StatBox } from "@/components/StatBox";
import { CTASection } from "@/components/CTASection";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { FAQ } from "@/components/FAQ";
import { FAQSchema } from "@/components/FAQSchema";

export const metadata: Metadata = {
  title: "Employee Engagement Software for Growing Companies | Enculture",
  description:
    "You're scaling fast. Culture is the thing most likely to break first. Enculture gives growing companies (200–500 employees) enterprise-grade culture intelligence without the enterprise complexity.",
};

const FAQ_ITEMS = [
  {
    question: "Is this too complex for our stage?",
    answer:
      "No — Enculture is designed to start light. You don't need a dedicated People Analytics function or a multi-month implementation plan. Most 200–500 person organizations are live with their first arc within a week, often run by a single HR generalist.",
  },
  {
    question: "How much HR resource does this require?",
    answer:
      "Less than a typical engagement survey cycle. There's no survey design phase, no manual data wrangling, and no deck-building — Enzo runs the listening and AI Insights does the analysis. Most growth-stage teams run Enculture with under a few hours a week of HR attention once it's live.",
  },
  {
    question: "What's the minimum viable deployment?",
    answer:
      "A single Pulse Arc running across the company, with Enzo configured to your basic org structure. That's enough to get your first Culture Health Index and start surfacing team-level risk — everything else (Milestone Arcs, manager nudges, deeper culture drivers) can be added as you grow into it.",
  },
];

export default function GrowthStageCompaniesPage() {
  return (
    <>
      <FAQSchema items={FAQ_ITEMS} />

      <SectionHero
        eyebrow="Growth-Stage Companies"
        title={
          <>
            You&apos;re scaling fast. <span className="hl-p">Culture is the thing most likely to break first</span> —
            and the hardest to fix once it does.
          </>
        }
        lede="At 200–500 employees, the informal culture that got you here stops scaling on its own. Enculture gives you enterprise-grade visibility without enterprise complexity or timeline."
        ctas={[
          { text: "Take the free culture health check", href: "https://go.enculture.ai", variant: "ghost" },
          { text: "Book a demo", href: "/demo", variant: "primary" },
        ]}
      />

      {/* BREAKING POINTS */}
      <section className="section-white">
        <div className="wrap">
          <RevealOnScroll>
            <Eyebrow text="Where it breaks" />
            <h2>Three ways culture breaks in scale-up — every time.</h2>
          </RevealOnScroll>

          <RevealOnScroll className="grid-3 mt-10">
            <AccentCard icon={<Zap size={24} strokeWidth={2.5} />} title="Speed kills alignment">
              Hiring outpaces communication. Three months in, half the company has a different
              read on what the company actually values.
            </AccentCard>
            <AccentCard icon={<Users size={24} strokeWidth={2.5} />} title="Manager load exceeds bandwidth" accent="purple">
              First-time managers are running teams twice the size they were trained for, with no
              visibility into what&apos;s actually happening.
            </AccentCard>
            <AccentCard icon={<UserPlus size={24} strokeWidth={2.5} />} title="Culture becomes whoever hired last">
              Without active measurement, culture drifts toward the loudest recent cohort — not a
              deliberate choice anyone made.
            </AccentCard>
          </RevealOnScroll>
        </div>
      </section>

      {/* WHAT IT LOOKS LIKE */}
      <section>
        <div className="wrap">
          <RevealOnScroll>
            <Eyebrow text="What this looks like for you" variant="purple" />
            <h2>Starts light. Scales with you. No enterprise implementation overhead.</h2>
            <p className="lede">
              You don&apos;t need a People Analytics team to run Enculture at 200–500 employees.
              One Pulse Arc, configured in days, gives you your first Culture Health Index — and
              everything else is there when you&apos;re ready to go deeper.
            </p>
          </RevealOnScroll>

          <RevealOnScroll className="workflow-row mt-10">
            <div className="wf-step">
              <h3>Fast setup</h3>
              <p>HRIS connects in hours. Enzo is configured to your values in days, not weeks.</p>
            </div>
            <div className="wf-step">
              <h3>First read</h3>
              <p>Your first Culture Health Index inside the first month — not a setup backlog.</p>
            </div>
            <div className="wf-step">
              <h3>First manager nudges</h3>
              <p>Even first-time managers get plain-language guidance from day one.</p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll className="mt-8">
            <p className="lede">
              Pricing is straightforward and scales with headcount — see exact ranges on the{" "}
              <Link href="/pricing" className="font-semibold text-teal hover:text-teal-deep">
                pricing page
              </Link>
              .
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* PROOF */}
      <NightSection>
        <RevealOnScroll>
          <Eyebrow text="Movement, not scores" />
          <h2>Outcomes built for your stage, not a 5,000-person org.</h2>
        </RevealOnScroll>

        <RevealOnScroll className="stat-row mt-10">
          <StatBox
            number="7 days"
            label="To first signal"
            description="Typical time to first team-level read for organizations under 500 employees"
          />
          <StatBox
            number="78%"
            label="Action completion rate"
            description="Of culture action items created in Enculture are completed — versus under 30% industry-wide"
          />
          <StatBox
            number="+13 pts"
            label="Culture Health Index"
            description="Average CHI improvement in organizations running Enculture for two or more quarters"
          />
        </RevealOnScroll>
      </NightSection>

      {/* FAQ */}
      <section className="section-white">
        <div className="wrap">
          <RevealOnScroll>
            <Eyebrow text="Before you decide" variant="purple" />
            <h2>What growth-stage teams ask first.</h2>
          </RevealOnScroll>
          <RevealOnScroll className="mt-10">
            <FAQ items={FAQ_ITEMS} />
          </RevealOnScroll>
        </div>
      </section>

      <CTASection
        title="Take the free culture health check."
        lede="Fifteen minutes. No sales call required. See where your organization stands today — and what a Pulse Arc would surface in your first 30 days."
        primaryCta={{ text: "Take the free culture health check", href: "https://go.enculture.ai" }}
        secondaryCta={{ text: "Book a demo", href: "/demo" }}
      />
    </>
  );
}
