import type { Metadata } from "next";
import { Compass, Heart, ShieldCheck, Target, UserCheck, CheckCircle2 } from "lucide-react";
import { SectionHero } from "@/components/SectionHero";
import { Eyebrow } from "@/components/Eyebrow";
import { AccentCard } from "@/components/AccentCard";
import { Callout } from "@/components/Callout";
import { NightSection } from "@/components/NightSection";
import { StatBox } from "@/components/StatBox";
import { CTASection } from "@/components/CTASection";
import { MidPageCTA } from "@/components/MidPageCTA";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { FromToRow } from "@/components/FromToRow";
import { Button } from "@/components/Button";
import { FAQ } from "@/components/FAQ";
import { FAQSchema } from "@/components/FAQSchema";

export const metadata: Metadata = {
  title: "Culture Assessment Platform | Enculture",
  description:
    "A culture assessment that gives you a plan — not just a percentile rank. The Culture Health Check is free. The full assessment is continuous, science-backed, and action-ready.",
};

const DRIVERS = [
  { icon: ShieldCheck, title: "Psychological Safety", body: "Whether people feel safe to speak up, disagree, and flag problems early." },
  { icon: Target, title: "Alignment", body: "Whether people understand and believe in where the organization is headed." },
  { icon: UserCheck, title: "Manager Effectiveness", body: "The single biggest lever on team-level culture, measured directly." },
  { icon: Heart, title: "Belonging", body: "Whether people feel like they're part of something, not just employed by it." },
  { icon: Compass, title: "Purpose", body: "Whether the work connects to something people actually care about." },
  { icon: CheckCircle2, title: "Execution", body: "Whether good intentions actually turn into things getting done." },
];

const FAQ_ITEMS = [
  {
    question: "What is a culture health check?",
    answer:
      "A free, 15-minute diagnostic that gives your organization a snapshot read across the core culture drivers — psychological safety, alignment, manager effectiveness, belonging, purpose, and execution — plus one recommended first action. It's hosted at go.enculture.ai and doesn't require a sales conversation to access.",
  },
  {
    question: "How is this different from an engagement survey?",
    answer:
      "An engagement survey measures sentiment at a point in time and hands you a report. A culture assessment on Enculture measures the same core drivers but does it continuously, ties findings to a specific recommended action, and tracks whether that action actually moved the score. The Culture Health Check is the free entry point; the full Perpetual Culture Arc is the ongoing version.",
  },
  {
    question: "How often should we run a culture assessment?",
    answer:
      "The free Culture Health Check is designed for a single read — useful any time you want a current snapshot. The full Perpetual Culture Arc runs continuously, so the question stops being \"how often\" and becomes \"what changed since last week.\" Most organizations start with the Health Check, then move to perpetual measurement once leadership sees what a live read looks like.",
  },
];

export default function CultureAssessmentPage() {
  return (
    <>
      <FAQSchema items={FAQ_ITEMS} />

      <SectionHero
        eyebrow="Culture Assessment"
        title={
          <>
            A culture assessment that gives you <span className="hl-t">a plan</span>. Not just a{" "}
            <span className="hl-p">percentile rank</span>.
          </>
        }
        lede="Most culture assessments end where the real work should start — a score, a benchmark, and a report nobody opens again. Enculture starts with the score and doesn't stop until something measurably changes."
        ctas={[
          { text: "Take the free culture health check", href: "https://go.enculture.ai", variant: "primary" },
          { text: "Book a demo", href: "/demo", variant: "ghost" },
        ]}
      />

      {/* WHAT'S DIFFERENT */}
      <section className="section-white">
        <div className="wrap">
          <RevealOnScroll>
            <Eyebrow text="What's different" />
            <h2>The same six drivers. A completely different output.</h2>
          </RevealOnScroll>

          <RevealOnScroll className="from-to-grid mt-10">
            <FromToRow from="One-time annual snapshot" to="Perpetual, always-on signal" />
            <FromToRow from="Generic off-the-shelf framework" to="Science-backed, business-aligned drivers" />
            <FromToRow from="A report nobody re-opens" to="Action-ready output, every cycle" />
            <FromToRow from="A score without direction" to="A score and a recommended first action" />
          </RevealOnScroll>
        </div>
      </section>

      {/* CULTURE HEALTH CHECK */}
      <section>
        <div className="wrap">
          <RevealOnScroll>
            <Eyebrow text="Start here, free" variant="purple" />
            <h2>The Culture Health Check.</h2>
            <p className="lede">
              Fifteen minutes. No sales call required. A real read across the six drivers that
              predict culture health — plus one recommended first action, not a 40-page report.
            </p>
          </RevealOnScroll>

          <RevealOnScroll className="grid-2 mt-10">
            <div className="card">
              <h3>What it covers</h3>
              <p className="text-[0.93rem] leading-relaxed text-muted">
                A science-backed snapshot across psychological safety, alignment, manager
                effectiveness, belonging, purpose, and execution — built from the same framework
                that powers the full platform.
              </p>
            </div>
            <div className="card purple-top">
              <h3>What you walk away with</h3>
              <p className="text-[0.93rem] leading-relaxed text-muted">
                A snapshot score, context on where you stand, and one specific recommended first
                action — something to do this week, not a benchmark to file away.
              </p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll className="mt-8">
            <Button variant="primary" href="https://go.enculture.ai">
              Take the free culture health check
            </Button>
          </RevealOnScroll>
        </div>
      </section>

      {/* PERPETUAL CULTURE ARC */}
      <section className="section-white">
        <div className="wrap">
          <RevealOnScroll>
            <Eyebrow text="When you're ready for more" />
            <h2>The full Perpetual Culture Arc.</h2>
            <p className="lede">
              For organizations that want culture measured continuously, not as a one-time
              snapshot. The Perpetual Culture Arc runs the same six drivers as an always-on
              signal — feeding AI Insights, Enzo, and the Action Centre across the whole{" "}
              <span className="hl-t">platform loop</span>.
            </p>
            <Callout variant="teal">
              The Culture Health Check tells you where you stand today. The Perpetual Culture Arc
              tells you whether you&apos;re moving — every cycle, not once a year.
            </Callout>
          </RevealOnScroll>
        </div>
      </section>

      {/* WHAT YOU LEARN */}
      <section>
        <div className="wrap">
          <RevealOnScroll>
            <Eyebrow text="What you learn" variant="purple" />
            <h2>Six drivers. One picture of what&apos;s actually happening.</h2>
          </RevealOnScroll>

          <RevealOnScroll className="grid-3 mt-10">
            {DRIVERS.map((driver, index) => {
              const Icon = driver.icon;
              return (
                <AccentCard
                  key={driver.title}
                  icon={<Icon size={24} strokeWidth={2.5} />}
                  title={driver.title}
                  accent={index % 2 === 1 ? "purple" : "teal"}
                >
                  {driver.body}
                </AccentCard>
              );
            })}
          </RevealOnScroll>
        </div>
      </section>

      {/* PROOF */}
      <NightSection>
        <RevealOnScroll>
          <Eyebrow text="Movement, not scores" />
          <h2>The assessment that doesn&apos;t end at the score.</h2>
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
            number="700+"
            label="Organizations"
            description="Have run a Culture Health Check or the full assessment on Enculture"
          />
        </RevealOnScroll>

        <RevealOnScroll className="mt-10">
          <MidPageCTA
            eyebrow="See your own read"
            question="Want to see what the six drivers look like for your organization?"
            ctaText="Take the free culture health check"
            ctaHref="https://go.enculture.ai"
          />
        </RevealOnScroll>
      </NightSection>

      {/* FAQ */}
      <section className="section-white">
        <div className="wrap">
          <RevealOnScroll>
            <Eyebrow text="Before you start" variant="purple" />
            <h2>What people ask before taking the assessment.</h2>
          </RevealOnScroll>
          <RevealOnScroll className="mt-10">
            <FAQ items={FAQ_ITEMS} />
          </RevealOnScroll>
        </div>
      </section>

      <CTASection
        title="Take the free culture health check."
        lede="Fifteen minutes. No sales call required. See where your organization stands across the six drivers that predict culture health — today."
        primaryCta={{ text: "Take the free culture health check", href: "https://go.enculture.ai" }}
        secondaryCta={{ text: "Book a demo instead", href: "/demo" }}
      />
    </>
  );
}
