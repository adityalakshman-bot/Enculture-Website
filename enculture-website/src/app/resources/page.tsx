import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, FileText, FlaskConical, Newspaper, PlayCircle, Files } from "lucide-react";
import { Eyebrow } from "@/components/Eyebrow";
import { CTASection } from "@/components/CTASection";
import { RevealOnScroll } from "@/components/RevealOnScroll";

export const metadata: Metadata = {
  title: "HR Culture Resources — Guides, Case Studies & Research | Enculture",
  description:
    "Case studies, guides, playbooks, and research on culture intelligence — from the practice and platform behind Enculture.",
};

// NOTE: this section is intended to source content from the existing Webflow
// CMS via its Data API once credentials are available, rather than being
// hardcoded. The cards below are placeholder structure until that's wired up.
const SECTIONS = [
  { icon: FileText, title: "Case Studies", body: "Outcomes from organizations running Enculture.", href: "/resources/case-studies" },
  { icon: Newspaper, title: "Blog", body: "The Science of Culture — written by the team and practice behind the platform.", href: "/resources" },
  { icon: BookOpen, title: "Guides & Playbooks", body: "Free, practical guides for HR leaders building a business case.", href: "/resources/guides" },
  { icon: Files, title: "Templates", body: "Ready-to-use frameworks for culture and competency work.", href: "/resources" },
  { icon: FlaskConical, title: "Research & Science", body: "The behavioral science behind the platform's methodology.", href: "/resources" },
  { icon: PlayCircle, title: "Webinars", body: "Recorded sessions on culture intelligence and capability development.", href: "/resources" },
];

export default function ResourcesPage() {
  return (
    <>
      <section className="hero pt-20 pb-18">
        <div className="wrap">
          <RevealOnScroll>
            <Eyebrow text="Resources" />
            <h1>Guides, case studies, and research on culture intelligence.</h1>
            <p className="hero-lede">
              Practical resources from the practice and platform behind Enculture — start with
              the free guides if you&apos;re building a business case, or the case studies if
              you want to see outcomes first.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      <section className="section-white">
        <div className="wrap">
          <RevealOnScroll className="grid-3">
            {SECTIONS.map((section) => {
              const Icon = section.icon;
              return (
                <Link key={section.title} href={section.href} className="accent-card block transition-shadow hover:shadow-md">
                  <Icon className="mb-3 text-teal" size={24} strokeWidth={2.5} />
                  <h3>{section.title}</h3>
                  <p>{section.body}</p>
                </Link>
              );
            })}
          </RevealOnScroll>
        </div>
      </section>

      <CTASection
        title="Take the free culture health check."
        lede="Fifteen minutes. No sales call required. See where your organization stands today."
        primaryCta={{ text: "Take the free culture health check", href: "https://go.enculture.ai" }}
        secondaryCta={{ text: "Browse guides", href: "/resources/guides" }}
      />
    </>
  );
}
