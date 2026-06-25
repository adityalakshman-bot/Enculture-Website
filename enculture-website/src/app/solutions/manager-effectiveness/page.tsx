import type { Metadata } from "next";
import { BarChart3, ListChecks, MessageCircle, Users2 } from "lucide-react";
import { SectionHero } from "@/components/SectionHero";
import { Eyebrow } from "@/components/Eyebrow";
import { AccentCard } from "@/components/AccentCard";
import { NightSection } from "@/components/NightSection";
import { StatBox } from "@/components/StatBox";
import { CTASection } from "@/components/CTASection";
import { MidPageCTA } from "@/components/MidPageCTA";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { FAQ } from "@/components/FAQ";
import { FAQSchema } from "@/components/FAQSchema";

export const metadata: Metadata = {
  title: "Manager Effectiveness Platform | Enculture",
  description:
    "78% of culture is made at the team level. Enculture gives managers plain-language nudges and gives HR the cross-team effectiveness view they've never had.",
};

const FAQ_ITEMS = [
  {
    question: "What do managers see?",
    answer:
      "Their own team's data only — never another team's, never individual responses. Presented in plain language with one or two specific, suggested actions for the week. No chart to interpret, no benchmark to decode.",
  },
  {
    question: "Will managers use this?",
    answer:
      "This is the question Enculture was designed around. Managers don't open a dashboard — Enzo sends them a nudge: \"Two teams are showing early disengagement signals. Suggested: 1:1 check-ins this week.\" That takes ten minutes to act on, which is why manager engagement on Enculture runs about 4× higher than platforms that hand managers a score and nothing else.",
  },
  {
    question: "How does Enzo decide what nudge to send?",
    answer:
      "Enzo combines what the conversational arcs picked up from the team with the behavioral patterns that correlate with risk — drops in psychological safety, alignment, or manager-trust scores — and ranks the two or three things most likely to help. The logic is grounded in the same behavioral science framework used across the platform, not a generic alert rule.",
  },
];

export default function ManagerEffectivenessPage() {
  return (
    <>
      <FAQSchema items={FAQ_ITEMS} />

      <SectionHero
        eyebrow="Manager Effectiveness"
        title={
          <>
            78% of culture is made <span className="hl-t">at the team level</span>. Most
            organizations measure it <span className="hl-p">at the org level</span>.
          </>
        }
        lede="The gap between what leadership sees and what happens inside teams is where engagement breaks down, attrition accelerates, and change programs stall. Enculture closes it."
        ctas={[
          { text: "Take the free culture health check", href: "https://go.enculture.ai", variant: "ghost" },
          { text: "Book a demo", href: "/demo", variant: "primary" },
        ]}
      />

      {/* THE MANAGER BLINDSPOT */}
      <section className="section-white">
        <div className="wrap">
          <RevealOnScroll>
            <Eyebrow text="The manager blindspot" />
            <h2>
              The org average looks fine. <span className="hl-p">Three teams are not.</span>
            </h2>
            <p className="lede">
              Aggregate to the org level and a handful of struggling teams disappear into a
              healthy-looking average — exactly where attrition and disengagement actually start.
            </p>
          </RevealOnScroll>

          <RevealOnScroll className="card mt-10">
            <div className="mb-4 font-display text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-muted">
              10 teams · same organization
            </div>
            <div className="flex flex-wrap gap-2">
              {Array.from({ length: 10 }).map((_, index) => (
                <div
                  key={index}
                  className={`flex h-12 w-12 items-center justify-center rounded-[10px] font-display text-xs font-bold text-white ${
                    index < 7 ? "bg-teal" : "bg-[#c0392b]"
                  }`}
                >
                  {index < 7 ? "OK" : "!"}
                </div>
              ))}
            </div>
            <p className="mt-4 text-[0.9rem] text-muted">
              <strong className="text-ink">Org average: 74 — reads as healthy.</strong> The 3
              teams pulling it down don&apos;t show up until someone looks team by team — by
              which point the attrition has usually already started.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* WHAT MANAGERS GET */}
      <section>
        <div className="wrap">
          <RevealOnScroll>
            <Eyebrow text="What managers get" variant="purple" />
            <h2>A nudge they can act on in ten minutes. Not a dashboard to interpret.</h2>
          </RevealOnScroll>

          <RevealOnScroll className="grid-3 mt-10">
            <AccentCard icon={<MessageCircle size={24} strokeWidth={2.5} />} title="Enzo nudges">
              A short, specific message when something needs attention — not a constant feed to
              monitor.
            </AccentCard>
            <AccentCard icon={<Users2 size={24} strokeWidth={2.5} />} title="Plain-language team view" accent="purple">
              Their team&apos;s data only, explained in sentences, not scores and percentiles.
            </AccentCard>
            <AccentCard icon={<ListChecks size={24} strokeWidth={2.5} />} title="Two specific actions per cycle">
              Never a long list. The two things most likely to move the team this week.
            </AccentCard>
          </RevealOnScroll>

          <RevealOnScroll className="card mt-10 border-l-4 border-teal">
            <div className="mb-2 font-display text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-teal">
              Enzo nudge · Manager view
            </div>
            <p className="font-display text-[1rem] font-semibold text-ink">
              Two teams are showing early disengagement signals.
            </p>
            <p className="mt-1 text-teal-deep">
              Suggested: 1:1 check-ins with ops team leads this week &rarr;
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* WHAT HR GETS */}
      <NightSection>
        <RevealOnScroll>
          <Eyebrow text="What HR gets" />
          <h2>The cross-team view leadership has never had.</h2>
          <p className="lede">
            Not to police managers — to know where to invest coaching time before a team
            disengages, not after.
          </p>
        </RevealOnScroll>

        <RevealOnScroll className="grid-3 mt-10">
          <div className="card">
            <BarChart3 className="mb-3 text-bright-teal" size={24} strokeWidth={2.5} />
            <h3>Cross-team effectiveness scores</h3>
            <p>Every team, every manager, on one comparable scale.</p>
          </div>
          <div className="card">
            <Users2 className="mb-3 text-bright-purple" size={24} strokeWidth={2.5} />
            <h3>Manager comparison</h3>
            <p>See where coaching would help most — without naming and shaming.</p>
          </div>
          <div className="card">
            <ListChecks className="mb-3 text-bright-teal" size={24} strokeWidth={2.5} />
            <h3>Action completion rates</h3>
            <p>Which managers act on nudges, and which teams need a different approach.</p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll className="stat-row mt-10">
          <StatBox
            number="+13 pts"
            label="Culture Health Index"
            description="Average CHI improvement in organizations running Enculture for two or more quarters"
          />
          <StatBox
            number="4×"
            label="Manager engagement"
            description="Managers who receive Enzo nudges log in and act on insights 4× more often than those given a dashboard alone"
          />
          <StatBox
            number="78%"
            label="Action completion rate"
            description="Of culture action items created in Enculture are completed — versus under 30% industry-wide"
          />
        </RevealOnScroll>

        <RevealOnScroll className="mt-10">
          <MidPageCTA
            eyebrow="See it on your teams"
            question="Which of your teams would Enculture flag first?"
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
            <h2>What managers and HR actually ask.</h2>
          </RevealOnScroll>
          <RevealOnScroll className="mt-10">
            <FAQ items={FAQ_ITEMS} />
          </RevealOnScroll>
        </div>
      </section>

      <CTASection
        title="Bring one culture question. Leave with a plan."
        lede="Thirty minutes. We look at your team-level data — or the absence of it — and show you exactly what Enculture would surface in your first 30 days."
      />
    </>
  );
}
