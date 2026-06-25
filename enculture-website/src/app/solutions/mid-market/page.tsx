import type { Metadata } from "next";
import { Layers, Rocket, Workflow } from "lucide-react";
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
  title: "Employee Engagement Platform for Mid-Size Companies | Enculture",
  description:
    "Enterprise-grade culture intelligence without the enterprise implementation timeline. Built for organizations with 500–2,000 employees.",
};

const FAQ_ITEMS = [
  {
    question: "How is this different from what works for a smaller company?",
    answer:
      "At 500–2,000 employees, you have multi-level management, multiple functions, and usually a performance management system already in place. Enculture configures to that complexity — multiple Arc types, manager-level rollups, cross-functional comparisons — without the multi-quarter rollout a true enterprise deployment requires.",
  },
  {
    question: "How long does implementation take at this size?",
    answer:
      "Typically 2–3 weeks from HRIS connection to your first board-ready Culture Health Index, including configuration for multiple business units and a manager rollout. That's faster than most mid-market organizations' previous engagement survey cycle.",
  },
  {
    question: "Do we need a dedicated team to run this?",
    answer:
      "No. Most mid-market deployments run with one HR sponsor and a part-time admin — Enzo and AI Insights handle the listening and analysis. A dedicated People Analytics function helps but isn't required to get real value.",
  },
];

export default function MidMarketPage() {
  return (
    <>
      <FAQSchema items={FAQ_ITEMS} />

      <SectionHero
        eyebrow="Mid-Market"
        title={
          <>
            More complexity than a startup. <span className="hl-t">More agility than enterprise.</span>
          </>
        }
        lede="At 500–2,000 employees, you're managing multiple functions, multiple levels of management, and a performance system already in place — but you can still make a decision with one sponsor and see ROI in a single quarter. Enculture is built for exactly that sweet spot."
        ctas={[
          { text: "Take the free culture health check", href: "https://go.enculture.ai", variant: "ghost" },
          { text: "Book a demo", href: "/demo", variant: "primary" },
        ]}
      />

      {/* THE MID-MARKET REALITY */}
      <section className="section-white">
        <div className="wrap">
          <RevealOnScroll>
            <Eyebrow text="The mid-market reality" />
            <h2>Enough complexity to need real intelligence. Enough agility to move fast.</h2>
          </RevealOnScroll>

          <RevealOnScroll className="grid-3 mt-10">
            <AccentCard icon={<Layers size={24} strokeWidth={2.5} />} title="Multi-level management">
              Enough layers that an org-wide average hides real problems — but not so many that
              configuration takes months.
            </AccentCard>
            <AccentCard icon={<Workflow size={24} strokeWidth={2.5} />} title="Multiple functions" accent="purple">
              Sales, engineering, and operations run differently. Enculture compares them on the
              same scale without flattening the differences.
            </AccentCard>
            <AccentCard icon={<Rocket size={24} strokeWidth={2.5} />} title="Faster decision cycles">
              One sponsor can usually greenlight this. No twelve-stakeholder procurement process
              required.
            </AccentCard>
          </RevealOnScroll>

          <RevealOnScroll className="mt-8">
            <Callout variant="teal">
              Mid-market is where most platforms fail you in one direction or the other — too
              simple to handle real organizational complexity, or too heavy to deploy without an
              enterprise rollout. Enculture is built to fit the size you actually are.
            </Callout>
          </RevealOnScroll>
        </div>
      </section>

      {/* PROOF */}
      <NightSection>
        <RevealOnScroll>
          <Eyebrow text="Movement, not scores" />
          <h2>Faster ROI cycle, the same closed loop.</h2>
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
            number="2–3 weeks"
            label="To first board-ready read"
            description="Typical time from HRIS connection to a full Culture Health Index across business units"
          />
        </RevealOnScroll>

        <RevealOnScroll className="mt-10">
          <MidPageCTA
            eyebrow="See it on your structure"
            question="What would Enculture surface across your functions in 30 days?"
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
            <h2>What mid-market teams ask first.</h2>
          </RevealOnScroll>
          <RevealOnScroll className="mt-10">
            <FAQ items={FAQ_ITEMS} />
          </RevealOnScroll>
        </div>
      </section>

      <CTASection
        title="Bring one culture question. Leave with a plan."
        lede="Thirty minutes. We look at your organization's structure and show you exactly what Enculture would surface in your first 30 days."
      />
    </>
  );
}
