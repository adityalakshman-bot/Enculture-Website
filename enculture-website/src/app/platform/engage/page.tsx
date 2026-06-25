import type { Metadata } from "next";
import Link from "next/link";
import { SectionHero } from "@/components/SectionHero";
import { Eyebrow } from "@/components/Eyebrow";
import { AccentCard } from "@/components/AccentCard";
import { Callout } from "@/components/Callout";
import { NightSection } from "@/components/NightSection";
import { CTASection } from "@/components/CTASection";
import { MidPageCTA } from "@/components/MidPageCTA";
import { RevealOnScroll } from "@/components/RevealOnScroll";

export const metadata: Metadata = {
  title: "Employee Engagement Dashboard | Enculture",
  description:
    "Enculture's Engage layer: four-persona dashboards, AI Insights, Enzo for conversational exploration, and manager nudges. The right view for every level.",
};

const DASHBOARDS = [
  { tag: "CHRO & HR", title: "Organization-wide intelligence", body: "The full Culture Health Index, every team's risk profile, trends across business units and time." },
  { tag: "CXO", title: "Board-ready, in one number", body: "Culture Health Index sized to the metrics your leadership team already tracks." },
  { tag: "Manager", title: "Their team. Nothing more.", body: "Plain language, with the two actions most likely to help this week." },
  { tag: "Employee", title: "Their voice, visibly heard", body: "Anonymous by design — visible proof their feedback was received and acted on." },
];

const AI_CAPABILITIES = [
  { title: "Critical Findings", body: "The handful of things that need attention now — not buried on slide 32." },
  { title: "Growth Opportunities", body: "Where momentum already exists and could be reinforced." },
  { title: "Strengths", body: "What's working, named explicitly — so it doesn't get lost chasing problems." },
  { title: "Thematic Analysis", body: "Patterns across open-ended responses, surfaced automatically." },
  { title: "Recommendations", body: "Specific next steps, not just a diagnosis." },
  { title: "Strategic Advisor View", body: "A synthesized read built for the leadership conversation, not a data dump." },
];

export default function EngagePage() {
  return (
    <>
      <SectionHero
        eyebrow="Platform · Engage"
        title={<>The right dashboard for every level — not one generic view.</>}
        lede="A good employee engagement dashboard shows each audience exactly what they need and nothing they shouldn't see: the board gets one defensible number, HR gets the full organizational picture, managers get their own team in plain language, and employees see proof their voice was heard. Enculture's Engage layer is built around that principle, not a single one-size-fits-all screen."
        ctas={[
          { text: "Take the free culture health check", href: "https://go.enculture.ai", variant: "ghost" },
          { text: "Book a demo", href: "/demo", variant: "primary" },
        ]}
      />

      {/* FOUR DASHBOARDS */}
      <section className="section-white">
        <div className="wrap">
          <RevealOnScroll>
            <Eyebrow text="Four dashboards, one platform" />
            <h2>The right altitude, for every person who looks at the data.</h2>
          </RevealOnScroll>

          <RevealOnScroll className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {DASHBOARDS.map((dashboard, index) => (
              <div key={dashboard.tag} className="vis-card">
                <div className={`vis-tag ${index % 2 === 0 ? "chro" : "mgr"}`}>{dashboard.tag}</div>
                <h3>{dashboard.title}</h3>
                <p>{dashboard.body}</p>
              </div>
            ))}
          </RevealOnScroll>
        </div>
      </section>

      {/* AI INSIGHTS */}
      <section>
        <div className="wrap">
          <RevealOnScroll>
            <Eyebrow text="AI Insights" variant="purple" />
            <h2>Six ways AI does the analysis no one has time to do manually.</h2>
          </RevealOnScroll>

          <RevealOnScroll className="grid-3 mt-10">
            {AI_CAPABILITIES.map((capability, index) => (
              <AccentCard
                key={capability.title}
                icon={String(index + 1).padStart(2, "0")}
                title={capability.title}
                accent={index % 2 === 1 ? "purple" : "teal"}
              >
                {capability.body}
              </AccentCard>
            ))}
          </RevealOnScroll>
        </div>
      </section>

      {/* ENZO + ACTION CENTRE PREVIEW */}
      <NightSection>
        <RevealOnScroll>
          <Eyebrow text="Enzo, conversationally" />
          <h2>Ask Enzo. Don&apos;t just read a dashboard.</h2>
          <p className="lede">
            Ask Enzo why a score moved, what&apos;s driving a risk flag in a specific team, or
            what two actions would help most. It answers with the full context of what was
            actually said — not a generic AI summary.
          </p>
        </RevealOnScroll>

        <RevealOnScroll className="mt-8">
          <Callout variant="teal">
            Engage is where signal becomes understanding. The next layer, Perform, is where
            understanding becomes action.{" "}
            <Link href="/platform/perform" className="font-semibold text-bright-teal hover:underline">
              See how the Action Centre works &rarr;
            </Link>
          </Callout>
        </RevealOnScroll>

        <RevealOnScroll className="mt-10">
          <MidPageCTA
            eyebrow="See it on your data"
            question="What would AI Insights surface in your organization's data?"
            ctaText="Book a demo"
            ctaHref="/demo"
          />
        </RevealOnScroll>
      </NightSection>

      <CTASection
        title="Bring one culture question. Leave with a plan."
        lede="Thirty minutes. We'll walk through what each dashboard would show for your organization — CHRO, manager, and employee view."
      />
    </>
  );
}
