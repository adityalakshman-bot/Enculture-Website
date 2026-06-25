import type { Metadata } from "next";
import { Flag, Gauge, ShieldCheck, Target, TrendingUp, UserCheck } from "lucide-react";
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
import { FAQ } from "@/components/FAQ";
import { FAQSchema } from "@/components/FAQSchema";

export const metadata: Metadata = {
  title: "Employee Engagement Platform | Enculture",
  description:
    "An employee engagement platform that moves the business — not scores that sit in a deck. Continuous listening, AI insights, and a closed action loop.",
};

const FAQ_ITEMS = [
  {
    question: "Is this an annual survey replacement?",
    answer:
      "It can be, or it can run alongside what you have today. Most organizations start by adding perpetual listening on top of their annual survey, then phase the annual survey out once leadership sees how much faster and more actionable continuous signal is. Either way, you keep a year-over-year benchmark if you need one for compliance or board reporting.",
  },
  {
    question: "What does Enzo actually do?",
    answer:
      "Enzo runs the conversational arcs that collect signal — pulse check-ins, deep culture conversations, milestone moments — and then surfaces what it heard in plain language. Ask Enzo why a score moved, what's driving a risk flag, or what two actions would help most, and it answers with the full context of what was actually said, not a generic summary.",
  },
  {
    question: "How is this different from Culture Amp?",
    answer:
      "Culture Amp is a survey platform with reporting on top. Enculture is a closed-loop system: signal in, AI insight out, action assigned, closure tracked, and the index moves. The other difference is build context — Enculture was built around Indian and emerging-market organizational dynamics from day one, not adapted from a Western product for this market.",
  },
  {
    question: "How fast do we see results?",
    answer:
      "First signals within 7 days of launch. A full Culture Health Index with critical findings inside your first month. Because Enzo runs conversations instead of forms, response rates are typically 60–80% — high enough that the data is trustworthy from the first cycle, not just the third.",
  },
];

export default function EngagementPage() {
  return (
    <>
      <FAQSchema items={FAQ_ITEMS} />

      <SectionHero
        eyebrow="Employee Engagement"
        title={
          <>
            Employee engagement that moves the business.{" "}
            <span className="hl-p">Not scores that sit in a deck.</span>
          </>
        }
        lede="Gallup research shows 85% of employees worldwide are not engaged or are actively disengaged — costing the global economy $8.8 trillion in lost productivity. The answer isn't another survey. It's a system that closes the loop."
        ctas={[
          { text: "Take the free culture health check", href: "https://go.enculture.ai", variant: "ghost" },
          { text: "Book a demo", href: "/demo", variant: "primary" },
        ]}
      />

      {/* WHAT'S DIFFERENT */}
      <section className="section-white">
        <div className="wrap">
          <RevealOnScroll>
            <Eyebrow text="What's different" />
            <h2>
              Same word, <span className="hl-t">different instrument</span>.
            </h2>
            <p className="lede">
              Most platforms still run the engagement playbook built for the era of annual HR
              reviews. Enculture was built for how organizations actually move now.
            </p>
          </RevealOnScroll>

          <RevealOnScroll className="from-to-grid mt-10">
            <FromToRow from="Annual survey" to="Perpetual listening arcs" />
            <FromToRow from="Forms & questionnaires" to="Conversational AI arcs" />
            <FromToRow from="Lagging indicators" to="Leading culture signals" />
            <FromToRow from="Reports that sit unread" to="Closed, owned actions" />
          </RevealOnScroll>
        </div>
      </section>

      {/* THE ENGAGEMENT LOOP */}
      <NightSection>
        <RevealOnScroll>
          <Eyebrow text="How it works" />
          <h2>The engagement loop, end to end.</h2>
          <p className="lede">
            Five steps, repeating every cycle — so engagement becomes something you manage, not
            something you measure once and hope holds.
          </p>
        </RevealOnScroll>

        <RevealOnScroll className="loop-row mt-10">
          <div className="step">
            <h3>Enzo listens</h3>
            <p>Conversational arcs run continuously, on the channels people already use.</p>
          </div>
          <div className="step">
            <h3>AI Insights</h3>
            <p>Critical findings and risk flags surface automatically — no manual analysis.</p>
          </div>
          <div className="step">
            <h3>Manager nudges</h3>
            <p>Each manager gets plain-language guidance on what their team needs this week.</p>
          </div>
          <div className="step">
            <h3>Action Centre</h3>
            <p>Insights become owned, time-bound actions — tracked to visible closure.</p>
          </div>
          <div className="step payoff">
            <h3>Score improves</h3>
            <p>The next cycle shows the movement. Engagement becomes a managed metric.</p>
          </div>
        </RevealOnScroll>
      </NightSection>

      {/* WHAT YOU MEASURE */}
      <section className="section-white">
        <div className="wrap">
          <RevealOnScroll>
            <Eyebrow text="What you measure" variant="purple" />
            <h2>The drivers that actually predict engagement — not just a single score.</h2>
          </RevealOnScroll>

          <RevealOnScroll className="grid-3 mt-10">
            <AccentCard icon={<Gauge size={24} strokeWidth={2.5} />} title="Engagement score">
              The headline number — but never the only one you act on.
            </AccentCard>
            <AccentCard icon={<ShieldCheck size={24} strokeWidth={2.5} />} title="Psychological safety" accent="purple">
              Whether people feel safe to speak up, disagree, and flag problems early.
            </AccentCard>
            <AccentCard icon={<UserCheck size={24} strokeWidth={2.5} />} title="Manager effectiveness">
              The single biggest lever on team-level engagement, measured directly.
            </AccentCard>
            <AccentCard icon={<Target size={24} strokeWidth={2.5} />} title="Alignment to goals" accent="purple">
              Whether people understand and believe in where the organization is headed.
            </AccentCard>
            <AccentCard icon={<TrendingUp size={24} strokeWidth={2.5} />} title="eNPS">
              Tracked continuously, not once a year — so movement means something.
            </AccentCard>
            <AccentCard icon={<Flag size={24} strokeWidth={2.5} />} title="Team-level risk flags" accent="purple">
              The early signal that predicts attrition and disengagement before it shows up.
            </AccentCard>
          </RevealOnScroll>
        </div>
      </section>

      {/* PROOF */}
      <NightSection>
        <RevealOnScroll>
          <Eyebrow text="Movement, not scores" />
          <h2>The index moves. The business notices.</h2>
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
            eyebrow="See it on your data"
            question="What would Enculture surface in your engagement data in 30 days?"
            ctaText="Book a demo"
            ctaHref="/demo"
          />
        </RevealOnScroll>
      </NightSection>

      {/* HOW IT'S DIFFERENT */}
      <section>
        <div className="wrap">
          <RevealOnScroll>
            <Eyebrow text="Not a survey tool" />
            <h2>If your tool isn&apos;t moving the index, it&apos;s a survey tool.</h2>
          </RevealOnScroll>
          <RevealOnScroll className="mt-8">
            <Callout variant="teal">
              A survey tells you employees are disengaged. Enculture tells you which team, why,
              what to do about it this week, and whether last week&apos;s action worked. That
              difference is the entire point.
            </Callout>
          </RevealOnScroll>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-white">
        <div className="wrap">
          <RevealOnScroll>
            <Eyebrow text="Before you decide" variant="purple" />
            <h2>Questions worth asking before you switch.</h2>
          </RevealOnScroll>
          <RevealOnScroll className="mt-10">
            <FAQ items={FAQ_ITEMS} />
          </RevealOnScroll>
        </div>
      </section>

      <CTASection
        title="Bring one culture question. Leave with a plan."
        lede="Thirty minutes. We look at your current engagement data — or the absence of it — and show you exactly what Enculture would surface in your first 30 days."
      />
    </>
  );
}
