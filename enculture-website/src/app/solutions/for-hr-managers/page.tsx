import type { Metadata } from "next";
import { MonitorOff, RefreshCw, TrendingDown } from "lucide-react";
import { SectionHero } from "@/components/SectionHero";
import { Eyebrow } from "@/components/Eyebrow";
import { AccentCard } from "@/components/AccentCard";
import { QuoteCard } from "@/components/QuoteCard";
import { Callout } from "@/components/Callout";
import { NightSection } from "@/components/NightSection";
import { StatBox } from "@/components/StatBox";
import { CTASection } from "@/components/CTASection";
import { MidPageCTA } from "@/components/MidPageCTA";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { FAQ } from "@/components/FAQ";
import { FAQSchema } from "@/components/FAQSchema";

export const metadata: Metadata = {
  title: "Employee Engagement Platform for HR Managers | Enculture",
  description:
    "HR Managers: surface what matters, nudge managers to act, and close the loop — without building the deck. First team culture read in 7 days.",
};

const FAQ_ITEMS = [
  {
    question: "How long does implementation actually take?",
    answer:
      "First signals in 7 days. Full Culture Health Index for every team within 30 days. There is no lengthy survey design phase — Enzo's arcs are built on a science-backed framework that we tune to your organization. Your HRIS connects in hours, not weeks. Most HR Managers are presenting their first culture read to leadership within the first month.",
  },
  {
    question: "Will managers actually use this?",
    answer:
      "This is the question that matters most — and the reason Enculture is designed the way it is. Managers don't need a dashboard. They need Enzo to tell them: \"Your team is showing early disengagement signals. Here are two things that would help this week.\" They can act on that in 10 minutes. That's why manager engagement on Enculture is 4× higher than on platforms that give managers a score and nothing else.",
  },
  {
    question: "What does the HR Manager see versus what managers see?",
    answer:
      "HR Managers see the full organizational view — every team, every demographic cut, all trend data, action completion rates across the org, and AI Insights at both team and org level. Managers see only their direct team's data — never another team's, never individual responses. Employees remain anonymous to everyone. The access is designed to build trust, not break it.",
  },
  {
    question: "We already run an annual engagement survey. Why change?",
    answer:
      "An annual survey is a photograph of a moving object. By the time the deck is presented, the data is archaeology. Enculture runs alongside — or replaces — your annual survey with continuous conversational arcs that give you a live signal, every day. The question isn't whether your current survey is good. It's whether it gives you enough signal, fast enough, to act before problems become crises.",
  },
  {
    question: "How do we handle employee concerns about anonymity?",
    answer:
      "Anonymity in Enculture is structural, not a promise. Responses are anonymized at the architecture level before they reach any dashboard. No manager can trace a response to an individual — this is enforced by the platform, not by policy. Cohort thresholds ensure results are only shown when enough responses exist to protect individual identity. You can share this directly with employees: it's not \"we promise not to look.\" It's \"the platform makes it technically impossible.\"",
  },
];

export default function ForHRManagersPage() {
  return (
    <>
      <FAQSchema items={FAQ_ITEMS} />

      <SectionHero
        eyebrow="For HR Managers"
        title={
          <>
            You have the most <span className="hl-t">culture data</span> in the room. And the{" "}
            <span className="hl-p">least time</span> to do anything with it.
          </>
        }
        lede="Enculture surfaces what matters, assigns it to the right person, and tracks it to closure — so you spend your time on the work, not on building the deck that explains it."
        ctas={[
          { text: "Take the free culture health check", href: "https://go.enculture.ai", variant: "ghost" },
          { text: "Book a demo", href: "/demo", variant: "primary" },
        ]}
      />

      {/* THE REAL PROBLEM */}
      <section className="section-white">
        <div className="wrap">
          <RevealOnScroll>
            <Eyebrow text="The real problem" />
            <h2>
              The data isn&apos;t the problem. <span className="hl-p">What to do with it is.</span>
            </h2>
            <p className="lede">
              HR Managers sit between the data and the people who need to act on it. The job is
              to make that gap disappear — for every team, every manager, every quarter. Most
              tools make it harder, not easier.
            </p>
          </RevealOnScroll>

          <RevealOnScroll className="grid-3 mt-10">
            <AccentCard icon={<TrendingDown size={24} strokeWidth={2.5} />} title="Too much data, not enough signal">
              Survey platforms give you 400 data points and a 40-slide deck. The three things
              that actually need attention are buried somewhere on slide 32. By the time you find
              them, the moment has passed.
            </AccentCard>
            <AccentCard icon={<RefreshCw size={24} strokeWidth={2.5} />} title="Insights that never close" accent="purple">
              You know what&apos;s wrong. You&apos;ve told the managers. Three months later,
              nothing has changed and you&apos;re building the same deck again. The loop never
              closes because there&apos;s no mechanism to close it.
            </AccentCard>
            <AccentCard icon={<MonitorOff size={24} strokeWidth={2.5} />} title="Managers who don't use the platform">
              You bought a tool. Managers log in once, see a score they don&apos;t know what to do
              with, and go back to running the team the way they always have. The platform
              didn&apos;t help them — it confused them.
            </AccentCard>
          </RevealOnScroll>

          <RevealOnScroll className="mt-8">
            <Callout variant="purple">
              Enculture doesn&apos;t give managers a dashboard to interpret. It gives them a
              nudge — two or three specific things their team needs this week, in plain language,
              with a suggested first action.
            </Callout>
          </RevealOnScroll>
        </div>
      </section>

      {/* WHAT CHANGES */}
      <section>
        <div className="wrap">
          <RevealOnScroll>
            <Eyebrow text="What changes" />
            <h2>
              From data analyst to <span className="hl-t">culture architect</span>.
            </h2>
            <p className="lede">
              Enculture takes the work of analysis, translation, and follow-up off your desk —
              so you can spend your time on the conversations and decisions that actually require
              a human.
            </p>
          </RevealOnScroll>

          <RevealOnScroll className="workflow-row mt-10">
            <div className="wf-step">
              <h3>Enzo listens — continuously</h3>
              <p>
                Conversational arcs run with every employee, every week. No survey to design, no
                reminder emails to chase, no response rate to explain to the board.
              </p>
            </div>
            <div className="wf-step">
              <h3>AI surfaces what matters</h3>
              <p>
                Critical findings, team-level risks, and growth opportunities — automatically
                identified. The three things that need attention, not the four hundred data
                points you have to find them in.
              </p>
            </div>
            <div className="wf-step">
              <h3>Managers get a nudge, not a dashboard</h3>
              <p>
                Each manager sees only their team&apos;s data — in plain language. Enzo tells
                them what&apos;s happening and what two things would move it. Most managers
                actually use this. That&apos;s the difference.
              </p>
            </div>
            <div className="wf-step">
              <h3>Actions close — visibly</h3>
              <p>
                Every insight that needs to move becomes an action with an owner and a deadline.
                You see completion rates. Employees see their feedback acted on. The loop closes,
                every cycle.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* YOUR VIEW */}
      <section className="section-white">
        <div className="wrap">
          <RevealOnScroll>
            <Eyebrow text="Your view" variant="purple" />
            <h2>
              Everything you need to run culture.{" "}
              <span className="hl-p">Nothing you have to explain to a manager.</span>
            </h2>
            <p className="lede">
              HR gets the full picture. Managers get their team. Employees stay anonymous. One
              platform — the right view for every level, designed from the ground up for
              organizational reality.
            </p>
          </RevealOnScroll>

          <RevealOnScroll className="visibility-grid mt-10">
            <div className="vis-card">
              <div className="vis-tag chro">HR Manager view</div>
              <h3>Org-wide + every team</h3>
              <p>
                Culture Health Index across every team, business unit, and demographic cut.
                Trend lines. Risk flags. Action completion rates. The full view — with the depth
                to back it up in any stakeholder conversation.
              </p>
            </div>
            <div className="vis-card">
              <div className="vis-tag mgr">Manager view</div>
              <h3>Their team. Nothing more.</h3>
              <p>
                Managers see only their direct team&apos;s data — in plain language, with
                specific nudges. No cross-team comparisons they shouldn&apos;t have. Enzo tells
                them exactly what to do next. Most of them actually do it.
              </p>
            </div>
            <div className="vis-card">
              <div className="vis-tag emp">Employee experience</div>
              <h3>Their voice. Visibly heard.</h3>
              <p>
                Employees are anonymous by design — enforced at the architecture level, not
                promised in a policy. They see that their feedback was received and acted on.
                Trust built through evidence.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* PROOF */}
      <NightSection>
        <RevealOnScroll>
          <Eyebrow text="What moves" />
          <h2>The numbers that matter to the managers who report to you.</h2>
          <p className="lede">
            Culture becomes a leading indicator you can manage — and show. It moves ahead of
            retention, performance, and execution risk, giving you time to act, not react.
          </p>
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
            description="Of culture actions created in Enculture are completed — compared to under 30% for survey-derived action plans"
          />
          <StatBox
            number="4×"
            label="Manager engagement"
            description="Managers who receive Enzo nudges log in and act on insights 4× more often than those given a dashboard alone"
          />
        </RevealOnScroll>

        <RevealOnScroll className="grid-2 mt-8">
          <QuoteCard
            quote="I stopped spending Sunday nights building culture decks. Enculture surfaces what I need to say — and who needs to act on it."
            name="HR Manager"
            title="1,800-person technology services company"
          />
          <QuoteCard
            quote="The managers finally understand their team data because it comes to them in plain language with a clear next step. That's never happened with any tool we've used before."
            name="Senior HR Business Partner"
            title="Manufacturing organization, 4,200 employees"
          />
        </RevealOnScroll>

        <RevealOnScroll className="mt-10">
          <MidPageCTA
            eyebrow="See it in your organization"
            question="What would Enculture surface in your teams in 30 days?"
            ctaText="Book a demo"
            ctaHref="/demo"
          />
        </RevealOnScroll>
      </NightSection>

      {/* HOW FAST */}
      <section>
        <div className="wrap">
          <RevealOnScroll>
            <Eyebrow text="Implementation" />
            <h2>
              Your first team-level culture read <span className="hl-t">in 7 days</span>.
            </h2>
            <p className="lede">
              Most platforms take 6 weeks to set up before you see any data. Enculture connects
              to your HRIS, configures Enzo to your values and culture drivers, and launches
              conversational arcs within days — not a setup backlog.
            </p>
          </RevealOnScroll>

          <RevealOnScroll className="grid-3 mt-10">
            <div className="timeline-card">
              <div className="timeline-card-tag">Day 1–3</div>
              <h3>Connect and configure</h3>
              <p>
                HRIS sync loads your org structure. Enzo is configured to your values, tone, and
                culture drivers. First arc designed — not from scratch, from a science-backed
                framework tuned to you.
              </p>
            </div>
            <div className="timeline-card purple">
              <div className="timeline-card-tag">Day 4–7</div>
              <h3>First signals arrive</h3>
              <p>
                Enzo runs conversations across your teams. Response rates come in — typically
                60–80%, because a conversation is different from a survey. First team-level
                signals visible in your dashboard.
              </p>
            </div>
            <div className="timeline-card">
              <div className="timeline-card-tag">Day 30</div>
              <h3>First board-ready read</h3>
              <p>
                Culture Health Index for every team. AI Insights with the critical findings.
                Managers have their nudges. First actions assigned. You have something to say in
                the next leadership review — with data behind it.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-white">
        <div className="wrap">
          <RevealOnScroll>
            <Eyebrow text="Before you decide" variant="purple" />
            <h2>The questions HR Managers actually ask.</h2>
          </RevealOnScroll>

          <RevealOnScroll className="mt-10">
            <FAQ items={FAQ_ITEMS} />
          </RevealOnScroll>
        </div>
      </section>

      <CTASection
        title="Bring one culture question. Leave with a plan."
        lede="Thirty minutes. We look at what your current data is — or isn't — telling you, and show you exactly what Enculture would surface in your first 30 days."
      />
    </>
  );
}
