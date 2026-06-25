import type { Metadata } from "next";
import { Lock, MessageCircle, ShieldCheck, UserX } from "lucide-react";
import { SectionHero } from "@/components/SectionHero";
import { Eyebrow } from "@/components/Eyebrow";
import { Callout } from "@/components/Callout";
import { NightSection } from "@/components/NightSection";
import { StatBox } from "@/components/StatBox";
import { CTASection } from "@/components/CTASection";
import { MidPageCTA } from "@/components/MidPageCTA";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { ArcTabs } from "@/components/ArcTabs";

export const metadata: Metadata = {
  title: "Continuous Employee Listening Platform | Enculture",
  description:
    "The Enculture Listen layer: perpetual conversational arcs that collect culture signal every day — not once a year. Four arc types for every rhythm and moment.",
};

const ARCS = [
  {
    label: "Pulse Arc",
    title: "Pulse Arc — the always-on heartbeat",
    description:
      "Short, frequent conversations that catch shifts in sentiment before they become a trend you only see in hindsight.",
  },
  {
    label: "Business Alignment Arc",
    title: "Business Alignment Arc — strategy-aligned",
    description:
      "Culture measured against your specific transformation or strategic goals, not a generic template — built for change programs, M&A, and strategic initiatives.",
  },
  {
    label: "Perpetual Culture Arc",
    title: "Perpetual Culture Arc — deep, always running",
    description:
      "The full six-driver culture assessment — psychological safety, alignment, manager effectiveness, belonging, purpose, and execution — running continuously instead of once a year.",
  },
  {
    label: "Milestone Arcs",
    title: "Milestone Arcs — onboarding, exit, and change moments",
    description:
      "Conversations timed to the moments that matter most — onboarding, 30/60/90-day check-ins, and exit — triggered by the moment, not a calendar date.",
  },
];

export default function ListenPage() {
  return (
    <>
      <SectionHero
        eyebrow="Platform · Listen"
        title={<>Continuous employee listening, built for how organizations actually work now.</>}
        lede="Continuous employee listening means collecting culture signal every day through ongoing conversational arcs, rather than once a year through a static survey. Enzo runs these arcs across the organization automatically, so the data is never more than days old — closer to how a business already tracks revenue or churn than how it's traditionally tracked culture."
        ctas={[
          { text: "Take the free culture health check", href: "https://go.enculture.ai", variant: "ghost" },
          { text: "Book a demo", href: "/demo", variant: "primary" },
        ]}
      />

      {/* WHY CONTINUOUS BEATS PERIODIC */}
      <section className="section-white">
        <div className="wrap">
          <RevealOnScroll>
            <Eyebrow text="Why continuous beats periodic" />
            <h2>Your revenue dashboard updates daily. Culture deserves the same discipline.</h2>
          </RevealOnScroll>

          <RevealOnScroll className="timeline-visual mt-10">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              <div>
                <div className="timeline-label old">Periodic — the old way</div>
                <div className="timeline-bar">
                  <div className="fill-old" />
                </div>
                <p className="timeline-note">
                  <strong>One week of listening.</strong> Twelve months of silence. By Q3, your
                  Q1 data is archaeology.
                </p>
              </div>
              <div>
                <div className="timeline-label new">Perpetual — the Enculture way</div>
                <div className="timeline-bar">
                  <div className="fill-new" />
                </div>
                <p className="timeline-note">
                  <strong>A live signal, every day.</strong> Culture intelligence that&apos;s
                  never more than days old.
                </p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* THE 4 ARCS */}
      <section>
        <div className="wrap">
          <RevealOnScroll>
            <Eyebrow text="The four arc types" variant="purple" />
            <h2>Every rhythm and moment, covered by a different arc.</h2>
          </RevealOnScroll>

          <RevealOnScroll className="mt-10">
            <ArcTabs arcs={ARCS} />
          </RevealOnScroll>
        </div>
      </section>

      {/* ENZO'S ROLE */}
      <section className="section-white">
        <div className="wrap">
          <RevealOnScroll>
            <Eyebrow text="Enzo's role in listening" />
            <h2>
              A conversation, not a form. <span className="hl-t">That&apos;s the whole difference.</span>
            </h2>
            <p className="lede">
              Enzo doesn&apos;t send a static questionnaire. It carries a real two-way
              conversation with every employee, building context over time — what someone said
              last quarter informs how Enzo asks the next question, the same way a good manager
              remembers the last conversation instead of starting from zero every time.
            </p>
          </RevealOnScroll>

          <RevealOnScroll className="mt-8">
            <Callout variant="teal">
              <MessageCircle className="mb-2 inline-block text-teal" size={20} /> A conversation
              that remembers context produces a fundamentally different response than a form
              that resets every cycle.
            </Callout>
          </RevealOnScroll>
        </div>
      </section>

      {/* RESPONSE RATES + ANONYMITY */}
      <NightSection>
        <RevealOnScroll>
          <Eyebrow text="What changes in practice" />
          <h2>Higher response rates. Stronger anonymity guarantees.</h2>
        </RevealOnScroll>

        <RevealOnScroll className="stat-row mt-10">
          <StatBox
            number="60–80%"
            label="Typical response rates"
            description="For Enzo's conversational arcs, versus far lower completion for traditional multi-page surveys"
          />
          <StatBox
            number="7 days"
            label="To first signal"
            description="Typical time from launch to a usable first read across the organization"
          />
          <StatBox
            number="100%"
            label="Structural anonymity"
            description="Enforced at the architecture level — not a policy promise a manager has to honor"
          />
        </RevealOnScroll>

        <RevealOnScroll className="grid-3 mt-8">
          <div className="card">
            <ShieldCheck className="mb-3 text-bright-teal" size={22} />
            <h3>Cohort thresholds</h3>
            <p>Results only surface when enough responses exist to protect individual identity.</p>
          </div>
          <div className="card">
            <UserX className="mb-3 text-bright-purple" size={22} />
            <h3>No individual attribution</h3>
            <p>Managers see team-level patterns, never who said what.</p>
          </div>
          <div className="card">
            <Lock className="mb-3 text-bright-teal" size={22} />
            <h3>Encrypted throughout</h3>
            <p>Every response encrypted in transit and at rest, ISO 27001 certified.</p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll className="mt-10">
          <MidPageCTA
            eyebrow="See it on your organization"
            question="What would continuous listening surface in your first 30 days?"
            ctaText="Book a demo"
            ctaHref="/demo"
          />
        </RevealOnScroll>
      </NightSection>

      <CTASection
        title="Bring one culture question. Leave with a plan."
        lede="Thirty minutes. We'll show you exactly what Enzo would surface in your organization's first listening cycle."
      />
    </>
  );
}
