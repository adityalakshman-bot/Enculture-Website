import type { Metadata } from "next";
import { Cpu, Database, ShieldAlert, SlidersHorizontal } from "lucide-react";
import { SectionHero } from "@/components/SectionHero";
import { Eyebrow } from "@/components/Eyebrow";
import { Callout } from "@/components/Callout";
import { NightSection } from "@/components/NightSection";
import { CTASection } from "@/components/CTASection";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { FAQ } from "@/components/FAQ";
import { FAQSchema } from "@/components/FAQSchema";

export const metadata: Metadata = {
  title: "AI Coaching Platform for Leadership Development | Enculture",
  description:
    "Every leader gets a great coach. Enzo is built to MCC standards, contextualized to your organization, and available at scale — for every participant, every time.",
};

const GOVERNANCE_STEPS = [
  { icon: Cpu, title: "Choose model", body: "Select the underlying LLM your organization is comfortable with — Enculture doesn't lock you into one provider." },
  { icon: SlidersHorizontal, title: "Shape behavior", body: "Configure tone, coaching style, and language to match your organization's culture." },
  { icon: ShieldAlert, title: "Define guardrails", body: "Set explicit boundaries on what Enzo will and won't discuss, escalate, or advise on." },
  { icon: Database, title: "Govern data", body: "Full control over retention, access, and whether conversation data is used to improve the model." },
];

const FAQ_ITEMS = [
  {
    question: "Is Enzo replacing human coaches?",
    answer:
      "No — it's solving a coverage problem human coaches can't solve alone. Executive coaching for the top 50 leaders isn't going anywhere. Enzo exists for the next 5,000 people who would otherwise get a workshop and a workbook instead of a coach. Organizations that already use external coaches for senior leadership typically keep doing exactly that, and add Enzo for everyone below that tier.",
  },
  {
    question: "What does MCC standard mean?",
    answer:
      "MCC (Master Certified Coach) is the highest credential level set by the International Coaching Federation. Enzo's coaching conversations — the questions it asks, how it handles silence and resistance, how it builds toward a plan rather than giving advice — are built against that standard, not a generic chatbot script.",
  },
  {
    question: "How is it configured to our organization?",
    answer:
      "Your organization's competency framework, values language, and tone preferences are configured into Enzo before it coaches a single participant. Two organizations using Enculture Assessments will have Enzo asking different questions, calibrated to what each organization actually means by its own leadership competencies.",
  },
];

export default function EnzoPage() {
  return (
    <>
      <FAQSchema items={FAQ_ITEMS} />

      <SectionHero
        eyebrow="Enzo · AI Coaching"
        title={<>Every leader gets a great coach. For the first time, at scale.</>}
        lede="Without the cost of flying one in, and without waiting for a slot on a coach's calendar. Enzo is built to MCC coaching standards, contextualized to your organization, and available for every participant, every time."
        ctas={[
          { text: "Book a walkthrough", href: "/demo", variant: "primary" },
          { text: "Talk to us", href: "/demo", variant: "ghost" },
        ]}
      />

      {/* THE COACHING GAP */}
      <section className="section-white">
        <div className="wrap">
          <RevealOnScroll>
            <Eyebrow text="The coaching gap" />
            <h2>
              Great development works for the top 50. <span className="hl-p">The next 5,000 get a workbook.</span>
            </h2>
            <p className="lede">
              Executive coaching is expensive and scarce by design — there are only so many
              coaching hours, and they go to the most senior people first. Everyone else gets a
              workshop and a PDF. Enzo is built to close that gap, not replace the coaches at the
              top.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* WHAT ENZO DOES */}
      <section>
        <div className="wrap">
          <RevealOnScroll>
            <Eyebrow text="What Enzo does" variant="purple" />
            <h2>A coach, not a chatbot.</h2>
            <p className="lede">
              Enzo debriefs every assessment, co-creates the individual development plan with the
              participant rather than handing one down, and follows up over time — the sustained
              relationship a real coaching engagement has, not a one-off conversation.
            </p>
          </RevealOnScroll>

          <RevealOnScroll className="card mt-10 max-w-2xl">
            <div className="mb-3 font-display text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-muted">
              Sample Enzo coaching conversation
            </div>
            <div className="flex flex-col gap-3">
              <div className="rounded-[10px] bg-teal-tint p-3 text-[0.93rem] text-teal-deep">
                <strong>Enzo:</strong> Your 360 showed a gap between how you see your
                communication style and how your team experiences it. What&apos;s your reaction
                to that?
              </div>
              <div className="ml-6 rounded-[10px] bg-[#f5f5f5] p-3 text-[0.93rem] text-ink">
                <strong>Participant:</strong> Honestly, surprised. I think I&apos;m pretty direct
                and clear.
              </div>
              <div className="rounded-[10px] bg-teal-tint p-3 text-[0.93rem] text-teal-deep">
                <strong>Enzo:</strong> That tracks with how you rated yourself. Three of your
                reports used the word &ldquo;unclear&rdquo; specifically about priority-setting.
                Want to look at one example together?
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* GOVERNANCE */}
      <NightSection>
        <RevealOnScroll>
          <Eyebrow text="Enterprise AI governance" />
          <h2>CISO-ready, by configuration — not by exception.</h2>
        </RevealOnScroll>

        <RevealOnScroll className="grid-3 mt-10">
          {GOVERNANCE_STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.title} className="card">
                <Icon className="mb-3 text-bright-teal" size={24} strokeWidth={2.5} />
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
            );
          })}
        </RevealOnScroll>
      </NightSection>

      {/* WHAT HR AND LEADERSHIP GET */}
      <section className="section-white">
        <div className="wrap">
          <RevealOnScroll>
            <Eyebrow text="What HR and leadership get" variant="purple" />
            <h2>Proof the coaching actually happened — and worked.</h2>
          </RevealOnScroll>

          <RevealOnScroll className="grid-3 mt-10">
            <div className="card">
              <h3>Completion rates</h3>
              <p className="text-[0.93rem] leading-relaxed text-muted">Who finished their debrief and development plan, organization-wide.</p>
            </div>
            <div className="card purple-top">
              <h3>IDP status</h3>
              <p className="text-[0.93rem] leading-relaxed text-muted">Every individual development plan, tracked to completion, not filed away.</p>
            </div>
            <div className="card">
              <h3>Development outcomes</h3>
              <p className="text-[0.93rem] leading-relaxed text-muted">Re-assessment data showing whether the coaching actually moved the competency.</p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll className="mt-8">
            <Callout variant="teal">
              The same closed-loop principle as the rest of the platform: a coaching conversation
              that doesn&apos;t end in a report, but in a tracked plan and a measured outcome.
            </Callout>
          </RevealOnScroll>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <div className="wrap">
          <RevealOnScroll>
            <Eyebrow text="Before you decide" />
            <h2>What HR and leadership ask first.</h2>
          </RevealOnScroll>
          <RevealOnScroll className="mt-10">
            <FAQ items={FAQ_ITEMS} />
          </RevealOnScroll>
        </div>
      </section>

      <CTASection
        eyebrowText="Let's talk capability"
        title="Bring one leadership team. Leave with a coaching plan."
        lede="Thirty minutes. We'll show you exactly what an Enzo coaching conversation looks like, configured to your organization's competency language."
        primaryCta={{ text: "Book a walkthrough", href: "/demo" }}
      />
    </>
  );
}
