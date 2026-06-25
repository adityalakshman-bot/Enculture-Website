import type { Metadata } from "next";
import { Eye, LogOut, UserMinus } from "lucide-react";
import { SectionHero } from "@/components/SectionHero";
import { Eyebrow } from "@/components/Eyebrow";
import { AccentCard } from "@/components/AccentCard";
import { Callout } from "@/components/Callout";
import { NightSection } from "@/components/NightSection";
import { StatBox } from "@/components/StatBox";
import { CTASection } from "@/components/CTASection";
import { MidPageCTA } from "@/components/MidPageCTA";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { FAQ } from "@/components/FAQ";
import { FAQSchema } from "@/components/FAQSchema";

export const metadata: Metadata = {
  title: "Onboarding and Exit Survey Platform | Enculture",
  description:
    "Catch culture signals at the moments that matter most — onboarding and exit. Enculture's Milestone Arcs give you real-time cohort data, not a 90-day retrospective.",
};

const MILESTONES = [
  { day: "Day 1", title: "First impressions", body: "Enzo opens a conversation in the first week — checking clarity, early belonging, and whether the role matches what was promised." },
  { day: "Day 7", title: "Early signal", body: "The strongest predictor of 90-day attrition shows up here. Enculture catches it while there's still time to act." },
  { day: "Day 30", title: "Settling in", body: "Manager relationship, team fit, and workload reality — captured before small friction becomes a resignation." },
  { day: "Day 90", title: "Confirmed or at risk", body: "A clear read on whether the hire is on track, plus what would change the trajectory if not." },
  { day: "Exit", title: "Exit intelligence", body: "Real reasons, not polite ones — captured in a conversation, with patterns rolled up by team and manager." },
];

const FAQ_ITEMS = [
  {
    question: "How is this different from a standard exit survey?",
    answer:
      "A standard exit survey is a form completed after the decision to leave is already final — useful for record-keeping, not for prevention. Enculture's Milestone Arcs run throughout the employee lifecycle, so the early-warning signal that predicts an exit is visible weeks or months before the resignation letter, while there's still time for a manager to act.",
  },
  {
    question: "Can Enzo run on WhatsApp or Slack?",
    answer:
      "Yes. Enzo runs conversational arcs on the channels your employees already use, including WhatsApp, Slack, and Microsoft Teams — no separate login or app required. This matters most for onboarding and exit moments, when participation in one more portal is the last thing a new hire or a departing employee wants to deal with.",
  },
  {
    question: "Does this replace our current onboarding process?",
    answer:
      "No — it runs alongside it. Enculture doesn't redesign your onboarding program; it listens throughout it, surfacing what's working and what isn't at each milestone. Most teams use the signal to refine an existing process rather than replace it wholesale.",
  },
];

export default function ExitAndOnboardingPage() {
  return (
    <>
      <FAQSchema items={FAQ_ITEMS} />

      <SectionHero
        eyebrow="Onboarding & Exit"
        title={
          <>
            The moments that shape culture the most.{" "}
            <span className="hl-t">Caught in real time</span> — not in a 90-day retrospective.
          </>
        }
        lede="Research shows 20% of staff turnover happens within the first 45 days. The signal that predicts it exists in the first two weeks — if you're listening."
        ctas={[
          { text: "Take the free culture health check", href: "https://go.enculture.ai", variant: "ghost" },
          { text: "Book a demo", href: "/demo", variant: "primary" },
        ]}
      />

      {/* COST OF MISSING SIGNALS */}
      <section className="section-white">
        <div className="wrap">
          <RevealOnScroll>
            <Eyebrow text="What gets missed" />
            <h2>
              By the time the exit interview happens, <span className="hl-p">it&apos;s archaeology</span>.
            </h2>
          </RevealOnScroll>

          <RevealOnScroll className="grid-3 mt-10">
            <AccentCard icon={<UserMinus size={24} strokeWidth={2.5} />} title="Early attrition">
              20% of voluntary turnover happens in the first 45 days — most of it preventable if
              the signal had been caught in week one.
            </AccentCard>
            <AccentCard icon={<Eye size={24} strokeWidth={2.5} />} title="Manager blind spots" accent="purple">
              New hires rarely tell their manager something is wrong. They tell an exit
              interview, three months too late.
            </AccentCard>
            <AccentCard icon={<LogOut size={24} strokeWidth={2.5} />} title="Culture misfit going undetected">
              A mismatch between what was promised in the offer and what&apos;s actually
              experienced compounds quietly until it doesn&apos;t.
            </AccentCard>
          </RevealOnScroll>
        </div>
      </section>

      {/* MILESTONE ARCS */}
      <section>
        <div className="wrap">
          <RevealOnScroll>
            <Eyebrow text="How it works" variant="purple" />
            <h2>Milestone Arcs — not surveys on a calendar.</h2>
            <p className="lede">
              Milestone Arcs are conversations that start the moment a milestone happens — when
              someone joins, after their first month, before a review, or when they hand in
              notice. Built once, triggered automatically, tuned to what actually predicts
              retention and fit.
            </p>
          </RevealOnScroll>

          <RevealOnScroll className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-5">
            {MILESTONES.map((milestone, index) => (
              <div key={milestone.day} className={`timeline-card ${index % 2 === 1 ? "purple" : ""}`}>
                <div className="timeline-card-tag">{milestone.day}</div>
                <h3>{milestone.title}</h3>
                <p>{milestone.body}</p>
              </div>
            ))}
          </RevealOnScroll>
        </div>
      </section>

      {/* WHAT YOU SEE */}
      <NightSection>
        <RevealOnScroll>
          <Eyebrow text="What you see" />
          <h2>Cohort data, not a single retrospective report.</h2>
        </RevealOnScroll>

        <RevealOnScroll className="grid-3 mt-10">
          <div className="card">
            <h3>30-day vs. 90-day cohorts</h3>
            <p>See whether early-stage sentiment holds, improves, or erodes as the cohort settles in.</p>
          </div>
          <div className="card">
            <h3>Team by team</h3>
            <p>Spot which managers and teams onboard well — and which ones lose people quietly.</p>
          </div>
          <div className="card">
            <h3>Before vs. after a process change</h3>
            <p>Test whether a new onboarding step actually moved the needle, with real cohort data.</p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll className="mt-8">
          <Callout variant="teal">
            Exit intelligence works the same way: Enzo&apos;s exit conversations surface themes
            and patterns at the team level — not just an individual&apos;s reasons — so HR sees
            where the real risk is concentrated, not just who left.
          </Callout>
        </RevealOnScroll>

        <RevealOnScroll className="mt-10">
          <Eyebrow text="Movement, not scores" />
          <h2>The signal that gets ahead of the resignation letter.</h2>
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
            eyebrow="See it on your cohorts"
            question="What would Enculture surface in your last three onboarding cohorts?"
            ctaText="Book a demo"
            ctaHref="/demo"
          />
        </RevealOnScroll>
      </NightSection>

      {/* FAQ */}
      <section>
        <div className="wrap">
          <RevealOnScroll>
            <Eyebrow text="Before you decide" />
            <h2>Questions worth asking first.</h2>
          </RevealOnScroll>
          <RevealOnScroll className="mt-10">
            <FAQ items={FAQ_ITEMS} />
          </RevealOnScroll>
        </div>
      </section>

      <CTASection
        title="Bring one culture question. Leave with a plan."
        lede="Thirty minutes. We look at your onboarding and exit data — or the absence of it — and show you exactly what Enculture would surface in your first 30 days."
      />
    </>
  );
}
