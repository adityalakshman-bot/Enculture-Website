import type { Metadata } from "next";
import { Building2, Flag, GitMerge, TrendingUp } from "lucide-react";
import { SectionHero } from "@/components/SectionHero";
import { Eyebrow } from "@/components/Eyebrow";
import { Callout } from "@/components/Callout";
import { NightSection } from "@/components/NightSection";
import { StatBox } from "@/components/StatBox";
import { CTASection } from "@/components/CTASection";
import { MidPageCTA } from "@/components/MidPageCTA";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { FAQ } from "@/components/FAQ";
import { FAQSchema } from "@/components/FAQSchema";

export const metadata: Metadata = {
  title: "Culture Change Readiness Assessment | Enculture",
  description:
    "70% of transformation programs fail at the culture layer. Enculture's change readiness assessment gives you real-time visibility into how your culture is responding — before the initiative stalls.",
};

const FAQ_ITEMS = [
  {
    question: "When should we run a change readiness assessment?",
    answer:
      "Before the transformation program is finalized, ideally — so leadership knows where resistance is concentrated before committing budget and timeline. The next best time is at kickoff, with the Business Alignment Arc running continuously through execution so you see drift before it becomes failure.",
  },
  {
    question: "How does this work in M&A?",
    answer:
      "The Business Alignment Arc is configured to measure cultural alignment between entities — pre-acquisition as a diagnostic, and post-merger as ongoing integration monitoring. It tracks belief strength against integration goals and flags which business units or teams carry the highest culture risk during the transition.",
  },
  {
    question: "Can this replace external culture consultants?",
    answer:
      "It replaces the part of the consulting engagement that's measurement — the survey, the data collection, the slide deck. It doesn't replace the judgment a consultant brings to interpreting context and politics. Most organizations use Enculture as the data layer and bring in consultants for the parts that need a human in the room.",
  },
];

export default function ChangeReadinessPage() {
  return (
    <>
      <FAQSchema items={FAQ_ITEMS} />

      <SectionHero
        eyebrow="Change Readiness"
        title={
          <>
            Change programs fail <span className="hl-p">at the culture layer</span>. Here&apos;s
            how to see that coming — <span className="hl-t">before</span> the initiative is six
            months in and over budget.
          </>
        }
        lede="McKinsey research: 70% of large transformation programs fail to achieve their goals. Culture misalignment is the leading cause. Most organizations discover this in the post-mortem."
        ctas={[
          { text: "Book a demo", href: "/demo", variant: "primary" },
          { text: "Take the free culture health check", href: "https://go.enculture.ai", variant: "ghost" },
        ]}
      />

      {/* THE TRANSFORMATION GAP */}
      <section className="section-white">
        <div className="wrap">
          <RevealOnScroll>
            <Eyebrow text="The transformation gap" />
            <h2>
              The plan assumes culture follows strategy. <span className="hl-p">It rarely does.</span>
            </h2>
            <p className="lede">
              Transformation business cases are built on the assumption that people will adopt
              the new way of working because leadership announced it. Without active
              measurement, that assumption is invisible — until the program is months behind and
              the reasons are unclear.
            </p>
          </RevealOnScroll>

          <RevealOnScroll className="mt-8">
            <Callout variant="purple">
              The ROI model for most transformation programs has a line for technology cost, a
              line for timeline, and no line for whether the culture will actually move. That
              missing line is usually where the program fails.
            </Callout>
          </RevealOnScroll>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section>
        <div className="wrap">
          <RevealOnScroll>
            <Eyebrow text="How it works" variant="purple" />
            <h2>The Business Alignment Arc — measured against your goals, not a generic template.</h2>
            <p className="lede">
              Most assessments measure culture in the abstract. The Business Alignment Arc
              measures it against the specific behaviors and beliefs your transformation actually
              requires — so the read is relevant to the program, not a generic benchmark.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* WHAT LEADERSHIP SEES */}
      <NightSection>
        <RevealOnScroll>
          <Eyebrow text="What leadership sees" />
          <h2>A live read on whether the organization is actually moving with the plan.</h2>
        </RevealOnScroll>

        <RevealOnScroll className="grid-3 mt-10">
          <div className="card">
            <TrendingUp className="mb-3 text-bright-teal" size={24} strokeWidth={2.5} />
            <h3>Alignment score per business unit</h3>
            <p>See exactly where belief and adoption are strongest — and weakest.</p>
          </div>
          <div className="card">
            <Flag className="mb-3 text-bright-purple" size={24} strokeWidth={2.5} />
            <h3>Trend against timeline</h3>
            <p>Whether alignment is moving with the program schedule, or falling behind it.</p>
          </div>
          <div className="card">
            <Building2 className="mb-3 text-bright-teal" size={24} strokeWidth={2.5} />
            <h3>Risk flags</h3>
            <p>The specific teams and functions where resistance is concentrated, named early.</p>
          </div>
        </RevealOnScroll>
      </NightSection>

      {/* M&A USE CASE */}
      <section className="section-white">
        <div className="wrap">
          <RevealOnScroll>
            <Eyebrow text="M&A use case" />
            <h2>
              Culture risk in M&amp;A is financial risk. <span className="hl-t">Make it visible.</span>
            </h2>
            <p className="lede">
              The Business Alignment Arc runs as a pre-acquisition diagnostic or post-merger
              integration monitor — giving leadership a real-time view of how the culture layer
              is actually responding, not a 90-day retrospective after integration has already
              stalled.
            </p>
          </RevealOnScroll>

          <RevealOnScroll className="grid-2 mt-10">
            <div className="timeline-card">
              <GitMerge className="mb-2 text-teal" size={22} />
              <h3>Pre-acquisition diagnostic</h3>
              <p>Surface cultural fit and risk before the deal closes, not after.</p>
            </div>
            <div className="timeline-card purple">
              <Building2 className="mb-2 text-purple" size={22} />
              <h3>Post-merger integration monitoring</h3>
              <p>Track how the two cultures are actually converging, team by team.</p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* PROOF */}
      <NightSection>
        <RevealOnScroll>
          <Eyebrow text="Movement, not scores" />
          <h2>The Index moves before the program stalls — not after.</h2>
        </RevealOnScroll>

        <RevealOnScroll className="stat-row mt-10">
          <StatBox
            number="+13 pts"
            label="Culture Health Index"
            description="Average CHI improvement in organizations running Enculture for two or more quarters"
          />
          <StatBox
            number="78%"
            label="Action completion rate"
            description="Of culture action items created in Enculture are completed — versus under 30% industry-wide"
          />
          <StatBox
            number="64%"
            label="Fewer retention surprises"
            description="Leaders managing with live signal report far fewer attrition surprises than those relying on annual data"
          />
        </RevealOnScroll>

        <RevealOnScroll className="mt-10">
          <MidPageCTA
            eyebrow="See it on your program"
            question="What would the Business Alignment Arc show for your current transformation?"
            ctaText="Book a demo"
            ctaHref="/demo"
          />
        </RevealOnScroll>
      </NightSection>

      {/* FAQ */}
      <section className="section-white">
        <div className="wrap">
          <RevealOnScroll>
            <Eyebrow text="Before you decide" variant="purple" />
            <h2>Questions leadership teams ask before committing.</h2>
          </RevealOnScroll>
          <RevealOnScroll className="mt-10">
            <FAQ items={FAQ_ITEMS} />
          </RevealOnScroll>
        </div>
      </section>

      <CTASection
        title="Bring one culture question. Leave with a plan."
        lede="Thirty minutes. We look at your current transformation program and show you exactly what the Business Alignment Arc would surface in your first 30 days."
      />
    </>
  );
}
