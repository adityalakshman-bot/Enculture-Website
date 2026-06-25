import type { Metadata } from "next";
import Link from "next/link";
import { Activity, ClipboardList, Target, Users, Wallet } from "lucide-react";
import { SectionHero } from "@/components/SectionHero";
import { Eyebrow } from "@/components/Eyebrow";
import { AccentCard } from "@/components/AccentCard";
import { QuoteCard } from "@/components/QuoteCard";
import { Callout } from "@/components/Callout";
import { NightSection } from "@/components/NightSection";
import { StatBox } from "@/components/StatBox";
import { CTASection } from "@/components/CTASection";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { HeroVisual } from "@/components/HeroVisual";

export const metadata: Metadata = {
  title: "Culture Intelligence Platform | Enculture",
  description:
    "Enculture is the culture intelligence platform that turns employee signal into board-ready insights and closed action loops. 700+ organizations. 15 countries.",
};

const USE_CASES = [
  { label: "Employee Engagement", href: "/solutions/engagement" },
  { label: "Onboarding & Exit", href: "/solutions/exit-and-onboarding" },
  { label: "Manager Effectiveness", href: "/solutions/manager-effectiveness" },
  { label: "Culture Assessment", href: "/solutions/culture-assessment" },
  { label: "Change Readiness", href: "/solutions/change-readiness" },
  { label: "Remote & Hybrid", href: "/solutions/remote-hybrid" },
];

const CLIENTS = [
  "Linde",
  "PGP Glass",
  "Eurowag",
  "Comviva",
  "Reserve Bank of India",
  "Sun Pharma",
  "Polycap",
];

export default function HomePage() {
  return (
    <>
      <SectionHero
        eyebrow="Culture Intelligence Platform"
        title={
          <>
            Culture is your only competitive advantage in the age of AI.{" "}
            <span className="hl-p">Most organizations</span> still measure it once a year.
          </>
        }
        lede="Enculture turns employee voice into board-ready culture intelligence — with a closed action loop that proves it's working. Not a survey tool. Not a dashboard. A system that moves the index."
        ctas={[
          { text: "Take the free culture health check", href: "https://go.enculture.ai", variant: "ghost" },
          { text: "Book a demo", href: "/demo", variant: "primary" },
        ]}
        visual={<HeroVisual />}
      />

      {/* TRUSTED BY */}
      <section className="border-y border-line bg-card py-8">
        <div className="wrap">
          <RevealOnScroll className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
            <span className="font-display text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-muted">
              Trusted by
            </span>
            {CLIENTS.map((client) => (
              <span key={client} className="font-display text-sm font-semibold text-muted/80">
                {client}
              </span>
            ))}
          </RevealOnScroll>
        </div>
      </section>

      {/* THE AI AGE */}
      <section className="section-white">
        <div className="wrap">
          <RevealOnScroll>
            <Eyebrow text="The new competitive reality" />
            <h2>
              The CEO of a <span className="hl-t">$61 billion company</span> spends 40% of his
              time on one thing.
            </h2>
            <p className="lede">
              Dario Amodei — co-founder of Anthropic, at the centre of the most competitive
              technology race in history — doesn&apos;t spend that time on the model. He spends it
              on culture. Because in his view, that is what wins the race.
            </p>
          </RevealOnScroll>

          <RevealOnScroll className="my-10 max-w-[700px]">
            <QuoteCard
              quote="A third, maybe 40%, of his time goes to one thing: making sure the culture of Anthropic is good."
              name="Dario Amodei"
              title="Co-founder & CEO, Anthropic · Fortune, 2026"
            />
          </RevealOnScroll>

          <RevealOnScroll className="grid-3">
            <AccentCard icon="01" title="Technology is replicable">
              Models, tools, and capital are available to every competitor. An advantage built on
              technology alone erodes quarter by quarter.
            </AccentCard>
            <AccentCard icon="02" title="Strategy is visible" accent="purple">
              Competitors can see your moves and copy them. Strategies win or die in execution.
              The edge is in how your people execute — not what the strategy says.
            </AccentCard>
            <AccentCard icon="03" title="Culture compounds">
              How your people align, decide, and behave together can&apos;t be copied or bought.
              It&apos;s the one asset that gets stronger the longer you build it.
            </AccentCard>
          </RevealOnScroll>

          <RevealOnScroll className="mt-8">
            <Callout variant="purple">
              If culture is the competitive edge, it deserves the same management discipline as
              any other business-critical asset. In most organizations, it still runs on
              assumptions.
            </Callout>
          </RevealOnScroll>
        </div>
      </section>

      {/* TWO PRODUCTS, ONE MISSION */}
      <section>
        <div className="wrap">
          <RevealOnScroll>
            <Eyebrow text="What Enculture is" />
            <h2>
              Culture intelligence for the whole organization.{" "}
              <span className="hl-p">Capability intelligence for every leader.</span>
            </h2>
          </RevealOnScroll>

          <RevealOnScroll className="grid-2 mt-10">
            <div className="accent-card">
              <Activity className="mb-3 text-teal" size={26} strokeWidth={2} />
              <h3>Culture Platform</h3>
              <p>
                Perpetual listening across every team. AI Insights that surface what matters.
                Manager nudges that get acted on. A closed action loop that proves the Index
                moved. Built for CHROs, HR Managers, and every people leader who owns culture day
                to day.
              </p>
              <Link href="/platform" className="mt-4 inline-block font-display font-semibold text-teal hover:text-teal-deep">
                Explore the platform &rarr;
              </Link>
            </div>
            <div className="accent-card purple-top">
              <Target className="mb-3 text-purple" size={26} strokeWidth={2} />
              <h3>Assessments</h3>
              <p>
                Evidence-based talent decisions, not opinion. Leadership assessment, 360-degree
                feedback, and Enzo AI coaching for every participant — at a scale no human
                coaching bench can match.
              </p>
              <Link href="/assessments" className="mt-4 inline-block font-display font-semibold text-purple hover:text-purple-deep">
                Explore assessments &rarr;
              </Link>
            </div>
          </RevealOnScroll>

          <RevealOnScroll className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3 text-center">
            <span className="font-display font-bold text-teal">700+ organizations</span>
            <span className="font-display font-bold text-purple">400,000+ employees</span>
            <span className="font-display font-bold text-teal">15 countries</span>
            <span className="font-display font-bold text-purple">20+ years of HR practice embedded</span>
          </RevealOnScroll>
        </div>
      </section>

      {/* THE LOOP */}
      <NightSection>
        <RevealOnScroll>
          <Eyebrow text="How it works" />
          <h2>Most platforms hand you a score and wish you luck.</h2>
          <p className="lede">
            Enculture closes the gap between the signal and the outcome — every cycle.
          </p>
        </RevealOnScroll>

        <RevealOnScroll className="loop-row mt-10">
          <div className="step">
            <h3>Collect</h3>
            <p>
              Enzo runs conversational arcs with every employee — pulse, alignment, deep culture,
              and milestone moments. Not forms. Conversations that people actually complete.
            </p>
          </div>
          <div className="step">
            <h3>AI Insights</h3>
            <p>
              AI surfaces critical findings, risks, growth opportunities, and themes —
              automatically. What&apos;s happening, why it matters, where to focus. In plain
              language.
            </p>
          </div>
          <div className="step">
            <h3>Ask Enzo</h3>
            <p>
              Explore insights conversationally. Ask Enzo why a team&apos;s score dropped, what&apos;s
              driving alignment risk, or what two actions would move the index most. It knows the
              full context.
            </p>
          </div>
          <div className="step">
            <h3>Action Centre</h3>
            <p>
              Insights become action items — with owners, priorities, and due dates. Assign to
              HR, managers, or business leaders. Track progress to visible closure.
            </p>
          </div>
          <div className="step payoff">
            <h3>The Index Moves</h3>
            <p>
              Next cycle&apos;s scores reflect what changed. Leaders see closure rates. The loop
              repeats. Culture becomes a leading indicator — not a lagging surprise.
            </p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll className="card mt-10">
          <div className="mid-cta-eyebrow">The closed loop in one sentence</div>
          <p className="font-display text-[1.1rem] font-semibold leading-snug text-on-night">
            AI Insights tell you <span className="text-bright-teal">what&apos;s happening</span>.
            Enzo explains <span className="text-bright-purple">what it means</span>. Action Centre
            makes sure <span className="text-bright-teal">something is actually done about it</span>{" "}
            — measurably.
          </p>
        </RevealOnScroll>
      </NightSection>

      {/* WHO IT'S FOR */}
      <section className="section-white">
        <div className="wrap">
          <RevealOnScroll>
            <Eyebrow text="By role" />
            <h2>Built for the people responsible for culture — at every level.</h2>
          </RevealOnScroll>

          <RevealOnScroll className="grid-3 mt-10">
            <Link href="/solutions/for-chros" className="accent-card block transition-shadow hover:shadow-md">
              <Users className="mb-3 text-teal" size={26} strokeWidth={2} />
              <h3>CHROs</h3>
              <p>Turn culture into a board-ready number you can defend in any room.</p>
            </Link>
            <Link href="/solutions/for-hr-managers" className="accent-card purple-top block transition-shadow hover:shadow-md">
              <ClipboardList className="mb-3 text-purple" size={26} strokeWidth={2} />
              <h3>HR Managers</h3>
              <p>Surface what matters and close the loop — without building the deck yourself.</p>
            </Link>
            <Link href="/solutions/for-cfos" className="accent-card block transition-shadow hover:shadow-md">
              <Wallet className="mb-3 text-teal" size={26} strokeWidth={2} />
              <h3>CFOs</h3>
              <p>Put a number on culture risk, and prove the investment is working.</p>
            </Link>
          </RevealOnScroll>

          <RevealOnScroll className="mt-10 flex flex-wrap justify-center gap-3">
            {USE_CASES.map((useCase) => (
              <Link
                key={useCase.href}
                href={useCase.href}
                className="rounded-full border border-line px-4 py-2 font-display text-sm font-medium text-muted transition-colors hover:border-teal hover:bg-teal-tint hover:text-teal-deep"
              >
                {useCase.label}
              </Link>
            ))}
          </RevealOnScroll>
        </div>
      </section>

      {/* CULTURE DIALOGUE BAND */}
      <section className="bg-purple-tint py-14">
        <div className="wrap text-center">
          <RevealOnScroll>
            <Eyebrow text="Community" variant="purple" className="justify-center" />
            <h2 className="mx-auto max-w-3xl">
              The roundtable where India&apos;s CHROs talk about the things they can&apos;t say in
              the boardroom.
            </h2>
            <p className="lede mx-auto mt-2">
              Culture Dialogue is Enculture&apos;s flagship CHRO roundtable. Five city editions
              completed. Delhi, Mumbai, Bangalore, Hyderabad, Chennai.
            </p>
            <Link
              href="/culture-dialogue"
              className="mt-5 inline-block font-display font-semibold text-purple hover:text-purple-deep"
            >
              Learn about Culture Dialogue &rarr;
            </Link>
          </RevealOnScroll>
        </div>
      </section>

      {/* PROOF */}
      <NightSection>
        <RevealOnScroll>
          <Eyebrow text="Movement, not scores" />
          <h2>The questions get answered. And the Index moves.</h2>
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
            description="Of culture action items created in Enculture are completed — versus the industry average of under 30% for survey-derived actions"
          />
          <StatBox
            number="16"
            label="AI Overview citations"
            description="Enculture keywords cited directly in Google AI Overviews — category presence competitors don't have yet"
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
      </NightSection>

      <CTASection
        title="Bring one culture question. Leave with a plan."
        lede="Thirty minutes. We look at your current culture data — or the absence of it — and tell you exactly what Enculture would surface in your first 30 days. No deck. No pressure."
      />
    </>
  );
}
