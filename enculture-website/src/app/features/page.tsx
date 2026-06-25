import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { Eyebrow } from "@/components/Eyebrow";
import { CTASection } from "@/components/CTASection";
import { RevealOnScroll } from "@/components/RevealOnScroll";

export const metadata: Metadata = {
  title: "Enculture Platform Features | Complete Capability List",
  description: "The complete Enculture feature list across Listen, Engage, Perform, Assessments, and Platform infrastructure.",
};

const FEATURE_GROUPS = [
  {
    id: "listen",
    title: "Listen",
    features: ["Pulse surveys", "360-degree feedback", "Lifecycle surveys", "Culture surveys", "Objective-driven arcs", "Multilingual support"],
  },
  {
    id: "engage",
    title: "Engage",
    features: ["Four-persona dashboards", "Culture Health Index", "Benchmarks", "AI Insights", "Action planning", "Manager nudges"],
  },
  {
    id: "perform",
    title: "Perform",
    features: ["Outcome tracking", "Re-measurement", "Business impact correlation (coming soon)"],
  },
  {
    id: "assessments",
    title: "Assessments",
    features: ["Competency assessment", "Behavioral simulation", "360-degree feedback", "AI coaching (Enzo)", "IDP management"],
  },
  {
    id: "platform",
    title: "Platform",
    features: ["HRIS integrations", "SSO", "ISO 27001 certified", "Anonymity architecture", "White-labelling"],
  },
];

export default function FeaturesPage() {
  return (
    <>
      <section className="hero pt-20 pb-18">
        <div className="wrap">
          <RevealOnScroll>
            <Eyebrow text="Features" />
            <h1>The complete capability list.</h1>
            <p className="hero-lede">
              Every feature across Listen, Engage, Perform, Assessments, and the underlying
              platform — for evaluators who want the full tick-list before a conversation.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      <section className="section-white">
        <div className="wrap">
          <div className="flex flex-col gap-12">
            {FEATURE_GROUPS.map((group) => (
              <RevealOnScroll key={group.id} id={group.id}>
                <h2>{group.title}</h2>
                <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {group.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-[0.95rem] text-ink">
                      <CheckCircle2 className="flex-none text-teal" size={18} strokeWidth={2.5} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Bring one culture question. Leave with a plan."
        lede="Thirty minutes. We'll walk through exactly which features matter for your situation."
      />
    </>
  );
}
