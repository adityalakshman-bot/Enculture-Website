import type { Metadata } from "next";
import { Eyebrow } from "@/components/Eyebrow";
import { CTASection } from "@/components/CTASection";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { GuideCard } from "@/components/GuideCard";

export const metadata: Metadata = {
  title: "Free HR Guides and Playbooks | Enculture",
  description:
    "Free, practical guides for HR leaders building a business case for culture investment — from the CHRO's guide to culture intelligence to a culture due diligence playbook for M&A.",
};

const GUIDES = [
  { title: "The CHRO's Guide to Culture Intelligence", description: "What a board-ready culture system looks like, and how to get there from an annual survey." },
  { title: "How to Build a Business Case for Culture Investment", description: "The financial framing CFOs respond to, with a model you can adapt to your own numbers." },
  { title: "Manager Effectiveness Playbook", description: "What to give managers so they actually use it — nudges, not dashboards." },
  { title: "Culture Due Diligence in M&A", description: "How to measure cultural fit before a deal closes, and integration risk after." },
  { title: "The Culture Health Check Playbook", description: "How to run a culture health check and turn the result into a first action." },
];

export default function GuidesPage() {
  return (
    <>
      <section className="hero pt-20 pb-18">
        <div className="wrap">
          <RevealOnScroll>
            <Eyebrow text="Guides & Playbooks" variant="purple" />
            <h1>Practical guides for the business case, not just the theory.</h1>
            <p className="hero-lede">
              Five free guides, written for HR leaders building a case for culture investment —
              each one downloadable in under a minute.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      <section className="section-white">
        <div className="wrap">
          <RevealOnScroll className="grid-3">
            {GUIDES.map((guide) => (
              <GuideCard key={guide.title} title={guide.title} description={guide.description} />
            ))}
          </RevealOnScroll>
        </div>
      </section>

      <CTASection
        title="Bring one culture question. Leave with a plan."
        lede="Thirty minutes. We look at your current culture data — or the absence of it — and show you exactly what Enculture would surface in your first 30 days."
      />
    </>
  );
}
