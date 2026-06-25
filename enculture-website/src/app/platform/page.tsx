import type { Metadata } from "next";
import Link from "next/link";
import { Ear, ListChecks, MessageSquareText, Radio, Sparkles, Workflow } from "lucide-react";
import { SectionHero } from "@/components/SectionHero";
import { Eyebrow } from "@/components/Eyebrow";
import { NightSection } from "@/components/NightSection";
import { StatBox } from "@/components/StatBox";
import { CTASection } from "@/components/CTASection";
import { MidPageCTA } from "@/components/MidPageCTA";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { ArcTabs } from "@/components/ArcTabs";

export const metadata: Metadata = {
  title: "Culture Intelligence Platform — Listen, Engage, Perform | Enculture",
  description:
    "The Enculture platform: perpetual listening, team-level engagement, and a closed action loop. One system. One Culture Health Index. One loop.",
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

export default function PlatformPage() {
  return (
    <>
      <SectionHero
        eyebrow="Platform"
        title={<>One system. One loop. One Culture Health Index.</>}
        lede="A culture intelligence platform works in three connected layers: it listens continuously through conversational arcs, it surfaces what that signal means through AI Insights and Enzo, and it closes the loop by turning insight into tracked, owned action. Most platforms stop at the first layer. Enculture runs all three."
        ctas={[
          { text: "Take the free culture health check", href: "https://go.enculture.ai", variant: "ghost" },
          { text: "Book a demo", href: "/demo", variant: "primary" },
        ]}
      />

      {/* THE THREE-PART LOOP */}
      <section className="section-white">
        <div className="wrap">
          <RevealOnScroll>
            <Eyebrow text="The platform" />
            <h2>Three layers. One continuous loop.</h2>
          </RevealOnScroll>

          <RevealOnScroll className="grid-3 mt-10">
            <Link href="/platform/listen" className="accent-card block transition-shadow hover:shadow-md">
              <Radio className="mb-3 text-teal" size={26} strokeWidth={2} />
              <h3>Listen</h3>
              <p>
                Enzo runs conversational arcs across the organization. Always-on signal, never a
                once-a-year event. <span className="font-semibold text-teal">Explore Listen &rarr;</span>
              </p>
            </Link>
            <Link href="/platform/engage" className="accent-card purple-top block transition-shadow hover:shadow-md">
              <MessageSquareText className="mb-3 text-purple" size={26} strokeWidth={2} />
              <h3>Engage</h3>
              <p>
                Four-persona dashboards surface what matters. AI Insights finds it; Enzo explains
                it. <span className="font-semibold text-purple">Explore Engage &rarr;</span>
              </p>
            </Link>
            <Link href="/platform/perform" className="accent-card block transition-shadow hover:shadow-md">
              <ListChecks className="mb-3 text-teal" size={26} strokeWidth={2} />
              <h3>Perform</h3>
              <p>
                Action Centre turns insight into owned, tracked, time-bound action. Closure rates
                visible. <span className="font-semibold text-teal">Explore Perform &rarr;</span>
              </p>
            </Link>
          </RevealOnScroll>
        </div>
      </section>

      {/* THE 4 ARCS */}
      <section>
        <div className="wrap">
          <RevealOnScroll>
            <Eyebrow text="How listening works" variant="purple" />
            <h2>Four arc types. Every rhythm and moment covered.</h2>
            <p className="lede">
              Not every signal needs the same kind of conversation. Enculture runs four distinct
              arc types, each tuned to a different rhythm of organizational life.
            </p>
          </RevealOnScroll>

          <RevealOnScroll className="mt-10">
            <ArcTabs arcs={ARCS} />
          </RevealOnScroll>
        </div>
      </section>

      {/* THE INTELLIGENCE LAYER */}
      <NightSection>
        <RevealOnScroll>
          <Eyebrow text="The intelligence layer" />
          <h2>What turns signal into something you can act on.</h2>
        </RevealOnScroll>

        <RevealOnScroll className="grid-3 mt-10">
          <div className="card">
            <Sparkles className="mb-3 text-bright-teal" size={24} strokeWidth={2.5} />
            <h3>AI Insights</h3>
            <p>
              Critical findings, risks, growth opportunities, and themes — surfaced automatically
              from every arc, in plain language.
            </p>
          </div>
          <div className="card">
            <Ear className="mb-3 text-bright-purple" size={24} strokeWidth={2.5} />
            <h3>Enzo</h3>
            <p>
              The conversational layer over all of it. Ask why a score moved, what&apos;s driving
              a risk flag, or what two actions would help most.
            </p>
          </div>
          <div className="card">
            <Workflow className="mb-3 text-bright-teal" size={24} strokeWidth={2.5} />
            <h3>Action Centre</h3>
            <p>
              Every insight that matters becomes an action — owned, time-bound, and tracked to
              visible closure.
            </p>
          </div>
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
            description="Run at least one layer of the Enculture platform today"
          />
        </RevealOnScroll>

        <RevealOnScroll className="mt-10">
          <MidPageCTA
            eyebrow="See the full loop"
            question="What would the platform surface in your organization in 30 days?"
            ctaText="Book a demo"
            ctaHref="/demo"
          />
        </RevealOnScroll>
      </NightSection>

      <CTASection
        title="Bring one culture question. Leave with a plan."
        lede="Thirty minutes. We'll walk through Listen, Engage, and Perform against your own organization — not a generic demo."
      />
    </>
  );
}
