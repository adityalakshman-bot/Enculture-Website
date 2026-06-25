import type { Metadata } from "next";
import { Eyebrow } from "@/components/Eyebrow";
import { CTASection } from "@/components/CTASection";
import { RevealOnScroll } from "@/components/RevealOnScroll";

export const metadata: Metadata = {
  title: "Enculture Customer Case Studies | Culture Intelligence Results",
  description:
    "Outcome highlights from organizations running Enculture, including Linde, PGP Glass, Eurowag, Reserve Bank of India, and Sun Pharma. Full case studies coming soon.",
};

// NOTE: industry/use-case tags below are general public-knowledge classifications.
// Specific outcome numbers are intentionally withheld pending real, verified
// per-client data — do not fill these in with invented stats.
const CASE_STUDIES = [
  { client: "Linde", industry: "Manufacturing & Industrial Gases", useCase: "Employee Engagement" },
  { client: "PGP Glass", industry: "Glass Packaging Manufacturing", useCase: "Culture Assessment" },
  { client: "Eurowag", industry: "Fleet & Transportation Services", useCase: "Manager Effectiveness" },
  { client: "Comviva", industry: "Telecom Technology", useCase: "Employee Engagement" },
  { client: "Reserve Bank of India", industry: "Banking & Financial Services", useCase: "Leadership Assessment" },
  { client: "Sun Pharma", industry: "Pharmaceuticals", useCase: "360 Assessment" },
  { client: "Polycap", industry: "Industrial Manufacturing", useCase: "Culture Assessment" },
];

export default function CaseStudiesPage() {
  return (
    <>
      <section className="hero pt-20 pb-18">
        <div className="wrap">
          <RevealOnScroll>
            <Eyebrow text="Case Studies" />
            <h1>Outcomes from organizations running Enculture.</h1>
            <p className="hero-lede">
              700+ organizations run Enculture today, including the names below. Full written
              case studies for each are in progress — reach out and we&apos;ll walk you through
              relevant results directly.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      <section className="section-white">
        <div className="wrap">
          <RevealOnScroll className="grid-3">
            {CASE_STUDIES.map((study) => (
              <div key={study.client} className="card">
                <h3>{study.client}</h3>
                <p className="text-[0.85rem] font-semibold uppercase tracking-wide text-muted">{study.industry}</p>
                <p className="mt-3 text-[0.93rem] text-muted">Use case: {study.useCase}</p>
                <p className="mt-3 font-display text-sm font-semibold text-teal">Full case study coming soon</p>
              </div>
            ))}
          </RevealOnScroll>
        </div>
      </section>

      <CTASection
        title="Bring one culture question. Leave with a plan."
        lede="Thirty minutes. We'll walk through results relevant to your industry and use case directly."
      />
    </>
  );
}
