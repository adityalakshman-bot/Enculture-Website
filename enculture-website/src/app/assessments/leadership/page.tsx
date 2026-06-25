import type { Metadata } from "next";
import { Activity, BookOpen, MessageCircle } from "lucide-react";
import { SectionHero } from "@/components/SectionHero";
import { Eyebrow } from "@/components/Eyebrow";
import { AccentCard } from "@/components/AccentCard";
import { Callout } from "@/components/Callout";
import { NightSection } from "@/components/NightSection";
import { CTASection } from "@/components/CTASection";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { FAQ } from "@/components/FAQ";
import { FAQSchema } from "@/components/FAQSchema";

export const metadata: Metadata = {
  title: "360 Degree Feedback Software | Enculture Assessments",
  description:
    "360 feedback that connects to a coach and a plan — not just a report that gets filed. Enculture's multi-rater assessment is built on behavioral science and delivers an Enzo-coached IDP for every participant.",
};

const BROKEN_CYCLE = ["Report delivered", "No debrief", "No plan", "Score decays", "Same feedback next year"];

const COMPETENCIES = [
  { label: "Strategic Thinking", value: 82 },
  { label: "Decision Making", value: 68 },
  { label: "Influence & Communication", value: 54 },
  { label: "Team Development", value: 75 },
];

const FAQ_ITEMS = [
  {
    question: "How is this different from a typical 360 tool?",
    answer:
      "Most 360 tools end at the report. Enculture's 360 connects directly to an Enzo debrief and a co-created individual development plan, tracked in the Action Centre. The feedback collection methodology is similar industry-wide; what happens after the report is where the real difference is.",
  },
  {
    question: "Can we use our own competency framework?",
    answer:
      "Yes. The assessment maps to your organization's own competency definitions, not a generic off-the-shelf model. Your language, your levels, your behavioral indicators — the evidence report speaks in terms your leadership already uses.",
  },
  {
    question: "How long does a 360 cycle take?",
    answer:
      "Rater collection typically completes within 2 weeks of launch. The Enzo debrief and IDP co-creation happen immediately after the report is ready — not weeks later, by which point most participants have lost the thread.",
  },
];

export default function LeadershipAssessmentPage() {
  return (
    <>
      <FAQSchema items={FAQ_ITEMS} />

      <SectionHero
        eyebrow="360 & Leadership Assessment"
        title={<>360 feedback that actually changes something — because it connects to a coach and a plan.</>}
        lede="Most multi-rater feedback ends as a PDF. Enculture's 360 is the start of a coached development cycle, not the end of one."
        ctas={[
          { text: "Book a walkthrough", href: "/demo", variant: "primary" },
          { text: "Talk to us", href: "/demo", variant: "ghost" },
        ]}
      />

      {/* WHAT'S WRONG WITH MOST 360s */}
      <section className="section-white">
        <div className="wrap">
          <RevealOnScroll>
            <Eyebrow text="What's wrong with most 360s" />
            <h2>
              A report that gets filed. <span className="hl-p">A loop that never closes.</span>
            </h2>
          </RevealOnScroll>

          <RevealOnScroll className="mt-8 flex flex-wrap items-center justify-center gap-3 text-center">
            {BROKEN_CYCLE.map((step, index) => (
              <span key={step} className="flex items-center gap-3">
                <span className="rounded-full border border-line bg-card px-4 py-2 font-display text-sm font-semibold text-muted">
                  {step}
                </span>
                {index < BROKEN_CYCLE.length - 1 && <span className="text-muted">&rarr;</span>}
              </span>
            ))}
          </RevealOnScroll>
        </div>
      </section>

      {/* THE ENCULTURE 360 */}
      <section>
        <div className="wrap">
          <RevealOnScroll>
            <Eyebrow text="The Enculture 360" variant="purple" />
            <h2>The same feedback methodology. A completely different ending.</h2>
          </RevealOnScroll>

          <RevealOnScroll className="grid-3 mt-10">
            <AccentCard icon={<Activity size={24} strokeWidth={2.5} />} title="Behavioral science methodology">
              Built by organizational psychologists, validated over two decades of real
              organizational use.
            </AccentCard>
            <AccentCard icon={<BookOpen size={24} strokeWidth={2.5} />} title="What people actually did" accent="purple">
              Rater feedback grounded in observed behavior, not vague impressions.
            </AccentCard>
            <AccentCard icon={<MessageCircle size={24} strokeWidth={2.5} />} title="Enzo debrief built in">
              Every participant talks through their report with Enzo — no report delivered cold.
            </AccentCard>
          </RevealOnScroll>

          <RevealOnScroll className="mt-8">
            <Callout variant="teal">
              The assessment maps to your organization&apos;s own competency framework — your
              language, your levels — not a generic template retrofitted to fit.
            </Callout>
          </RevealOnScroll>
        </div>
      </section>

      {/* EVIDENCE REPORT */}
      <section className="section-white">
        <div className="wrap">
          <RevealOnScroll>
            <Eyebrow text="The evidence report" />
            <h2>Competency bars backed by behavioral evidence, not a vague percentile.</h2>
          </RevealOnScroll>

          <RevealOnScroll className="card mt-10 max-w-xl">
            <div className="mb-4 font-display text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-muted">
              Sample competency evidence report
            </div>
            <div className="flex flex-col gap-4">
              {COMPETENCIES.map((competency) => (
                <div key={competency.label}>
                  <div className="mb-1 flex justify-between text-sm">
                    <span className="font-display font-semibold text-ink">{competency.label}</span>
                    <span className="font-display font-semibold text-teal">{competency.value}%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-line">
                    <div className="h-2 rounded-full bg-teal" style={{ width: `${competency.value}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* WHAT HAPPENS AFTER */}
      <NightSection>
        <RevealOnScroll>
          <Eyebrow text="What happens after" />
          <h2>The report is the start of the cycle, not the end.</h2>
        </RevealOnScroll>

        <RevealOnScroll className="grid-3 mt-10">
          <div className="card">
            <h3>Enzo-coached IDP</h3>
            <p>A development plan co-created with the participant, not handed down.</p>
          </div>
          <div className="card">
            <h3>Action Centre</h3>
            <p>Development actions tracked to completion, with visible status.</p>
          </div>
          <div className="card">
            <h3>Sustained follow-through</h3>
            <p>Enzo checks in over time — the plan doesn&apos;t end when the meeting does.</p>
          </div>
        </RevealOnScroll>
      </NightSection>

      {/* FAQ */}
      <section className="section-white">
        <div className="wrap">
          <RevealOnScroll>
            <Eyebrow text="Before you decide" variant="purple" />
            <h2>What HR teams ask before switching.</h2>
          </RevealOnScroll>
          <RevealOnScroll className="mt-10">
            <FAQ items={FAQ_ITEMS} />
          </RevealOnScroll>
        </div>
      </section>

      <CTASection
        eyebrowText="Let's talk capability"
        title="Bring one leader's feedback. Leave with a coached plan."
        lede="Thirty minutes. We'll walk through what an Enculture 360 — and the coaching that follows it — would look like for your leadership team."
        primaryCta={{ text: "Book a walkthrough", href: "/demo" }}
      />
    </>
  );
}
