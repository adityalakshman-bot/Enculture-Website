import type { Metadata } from "next";
import Link from "next/link";
import { Eye, Layers, ThumbsUp } from "lucide-react";
import { SectionHero } from "@/components/SectionHero";
import { Eyebrow } from "@/components/Eyebrow";
import { AccentCard } from "@/components/AccentCard";
import { Callout } from "@/components/Callout";
import { NightSection } from "@/components/NightSection";
import { StatBox } from "@/components/StatBox";
import { CTASection } from "@/components/CTASection";
import { RevealOnScroll } from "@/components/RevealOnScroll";

export const metadata: Metadata = {
  title: "Talent Assessment Platform | Enculture Assessments",
  description:
    "Stop making billion-dollar people decisions on instinct. Enculture Assessments gives HR, leaders, and managers evidence-based capability intelligence — at scale, with AI coaching for every participant.",
};

const USE_CASES = ["Leadership Development", "Succession Planning", "Talent Identification", "High-Potential Programs", "Promotions"];

const STAKEHOLDERS = [
  { title: "HR", body: "A defensible, evidence-based record for every people decision." },
  { title: "Leaders", body: "Visibility into bench strength before a critical role opens up." },
  { title: "Managers", body: "A clear development plan for every report, without doing the analysis themselves." },
  { title: "Participants", body: "A coach, not just a report — and a plan they actually follow." },
];

export default function AssessmentsPage() {
  return (
    <>
      <SectionHero
        eyebrow="Assessments"
        title={<>Stop making billion-dollar people decisions on instinct. Here&apos;s what evidence looks like.</>}
        lede="Promotions, succession, and leadership development carry enormous financial weight — and most organizations still decide them on opinion and tenure. Enculture Assessments replaces that with evidence: what people actually do, not what they say about themselves."
        ctas={[
          { text: "Book a walkthrough", href: "/demo", variant: "primary" },
          { text: "Talk to us", href: "/demo", variant: "ghost" },
        ]}
      />

      {/* THE 3 PROBLEMS */}
      <section className="section-white">
        <div className="wrap">
          <RevealOnScroll>
            <Eyebrow text="The 3 problems" />
            <h2>The decisions that matter most are made with the least evidence.</h2>
          </RevealOnScroll>

          <RevealOnScroll className="grid-3 mt-10">
            <AccentCard icon={<ThumbsUp size={24} strokeWidth={2.5} />} title="Promotions on opinion">
              The most consequential people decision in the building is often made on gut feel
              and tenure — not evidence of what someone can actually do.
            </AccentCard>
            <AccentCard icon={<Eye size={24} strokeWidth={2.5} />} title="No capability visibility" accent="purple">
              Leadership can&apos;t see who&apos;s ready for what until the promotion has already
              gone wrong.
            </AccentCard>
            <AccentCard icon={<Layers size={24} strokeWidth={2.5} />} title="Development that doesn't scale">
              Real development works for the top 50 executives who get a coach. The next 5,000
              get a workshop and a workbook.
            </AccentCard>
          </RevealOnScroll>
        </div>
      </section>

      {/* THE ASSESSMENTS LOOP */}
      <NightSection>
        <RevealOnScroll>
          <Eyebrow text="The assessments loop" />
          <h2>Evidence, every cycle — not a one-time test.</h2>
        </RevealOnScroll>

        <RevealOnScroll className="loop-row mt-10">
          <div className="step">
            <h3>Assess</h3>
            <p>Behavioral simulations and multi-rater feedback capture what someone actually does.</p>
          </div>
          <div className="step">
            <h3>AI Insights</h3>
            <p>Competency strengths and gaps surfaced automatically, mapped to your framework.</p>
          </div>
          <div className="step">
            <h3>Enzo Coaches</h3>
            <p>Every participant gets a debrief and a co-created development plan.</p>
          </div>
          <div className="step">
            <h3>Action Centre</h3>
            <p>Development actions tracked to completion, not filed in a drawer.</p>
          </div>
          <div className="step payoff">
            <h3>Next cycle</h3>
            <p>Re-assessment shows whether the development actually worked.</p>
          </div>
        </RevealOnScroll>
      </NightSection>

      {/* USE CASES */}
      <section className="section-white">
        <div className="wrap">
          <RevealOnScroll>
            <Eyebrow text="Where it's used" variant="purple" />
            <h2>Five decisions Enculture Assessments was built to support.</h2>
          </RevealOnScroll>

          <RevealOnScroll className="mt-8 flex flex-wrap gap-3">
            {USE_CASES.map((useCase) => (
              <span key={useCase} className="rounded-full border border-purple/30 bg-purple-tint px-4 py-2 font-display text-sm font-semibold text-purple-deep">
                {useCase}
              </span>
            ))}
          </RevealOnScroll>
        </div>
      </section>

      {/* THE SCIENCE */}
      <section>
        <div className="wrap">
          <RevealOnScroll>
            <Eyebrow text="The science" />
            <h2>
              Built on behavioral science. <span className="hl-t">Not a personality quiz.</span>
            </h2>
            <p className="lede">
              Every assessment is designed by organizational psychologists and measures what
              people do in realistic, job-relevant simulations — not what they self-report about
              their own personality. Twenty years of assessment and consulting practice shaped how
              the methodology was built.
            </p>
          </RevealOnScroll>

          <RevealOnScroll className="mt-8">
            <Callout variant="teal">
              50,000+ participants assessed across organizations including Reserve Bank of India,
              Union Bank of India, Sun Pharma, Polycap, and Comviva — the track record the
              platform&apos;s methodology is built on.
            </Callout>
          </RevealOnScroll>
        </div>
      </section>

      {/* ENZO COACHING PREVIEW */}
      <section className="section-white">
        <div className="wrap">
          <RevealOnScroll>
            <Eyebrow text="AI coaching" variant="purple" />
            <h2>Every participant gets a coach. Not just a report.</h2>
            <p className="lede">
              Enzo debriefs every assessment, co-creates the development plan, and follows up —
              built to MCC coaching standards, available at a scale no human coaching bench can
              match.{" "}
              <Link href="/assessments/enzo" className="font-semibold text-teal hover:text-teal-deep">
                See how Enzo coaches &rarr;
              </Link>
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* VALUE FOR STAKEHOLDERS */}
      <NightSection>
        <RevealOnScroll>
          <Eyebrow text="Value for everyone in the loop" />
          <h2>Different value for every stakeholder. One platform.</h2>
        </RevealOnScroll>

        <RevealOnScroll className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STAKEHOLDERS.map((stakeholder) => (
            <div key={stakeholder.title} className="card">
              <h3>{stakeholder.title}</h3>
              <p>{stakeholder.body}</p>
            </div>
          ))}
        </RevealOnScroll>

        <RevealOnScroll className="stat-row mt-10">
          <StatBox number="20+" label="Years of practice" description="Behind the methodology powering every assessment" />
          <StatBox number="50,000+" label="Participants assessed" description="Across leadership, succession, and high-potential programs" />
          <StatBox number="78%" label="Action completion rate" description="Of development actions created in Enculture are completed" />
        </RevealOnScroll>
      </NightSection>

      <CTASection
        eyebrowText="Let's talk capability"
        title="Bring one promotion decision. Leave with the evidence."
        lede="Thirty minutes. We'll walk through what an evidence-based assessment would show for a real role you're deciding on."
        primaryCta={{ text: "Book a walkthrough", href: "/demo" }}
      />
    </>
  );
}
