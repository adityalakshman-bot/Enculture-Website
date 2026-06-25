import type { Metadata } from "next";
import { Clock, FileCheck, Sparkles } from "lucide-react";
import { Eyebrow } from "@/components/Eyebrow";
import { Button } from "@/components/Button";
import { NightSection } from "@/components/NightSection";
import { RevealOnScroll } from "@/components/RevealOnScroll";

export const metadata: Metadata = {
  title: "Free Culture Health Check | Enculture",
  description:
    "Take the free Enculture Culture Health Check. 15 minutes. Get a snapshot of your organization's culture health — and a recommended first action.",
};

export default function CultureHealthCheckPage() {
  return (
    <>
      <section className="hero pt-20 pb-18">
        <div className="wrap">
          <RevealOnScroll>
            <Eyebrow text="Free assessment" />
            <h1>
              The free Culture Health Check. <span className="hl-t">Fifteen minutes.</span>
            </h1>
            <p className="hero-lede">
              A real snapshot of your organization&apos;s culture health, across the six drivers
              that predict it — plus one recommended first action. No sales call required to
              access it.
            </p>
            <div className="hero-ctas">
              <Button variant="primary" href="https://go.enculture.ai">
                Take the free culture health check
              </Button>
              <Button variant="ghost" href="/demo">
                Book a demo instead
              </Button>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section className="section-white">
        <div className="wrap">
          <RevealOnScroll className="grid-3">
            <div className="accent-card">
              <Clock className="mb-3 text-teal" size={24} strokeWidth={2.5} />
              <h3>15 minutes</h3>
              <p>No lengthy form. A focused read across the drivers that actually predict culture health.</p>
            </div>
            <div className="accent-card purple-top">
              <Sparkles className="mb-3 text-purple" size={24} strokeWidth={2.5} />
              <h3>A real snapshot, not a teaser</h3>
              <p>Psychological safety, alignment, manager effectiveness, belonging, purpose, and execution.</p>
            </div>
            <div className="accent-card">
              <FileCheck className="mb-3 text-teal" size={24} strokeWidth={2.5} />
              <h3>One recommended action</h3>
              <p>Not a benchmark to file away — something specific to do this week.</p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <NightSection>
        <RevealOnScroll className="text-center">
          <Eyebrow text="Used by 700+ organizations" className="justify-center" />
          <h2>The same diagnostic that powers the full Enculture platform.</h2>
          <p className="lede mx-auto mt-2">
            The Culture Health Check runs on the same science-backed framework as the full
            Perpetual Culture Arc — a real read, not a watered-down lead magnet.
          </p>
          <div className="mt-8">
            <Button variant="primary" href="https://go.enculture.ai">
              Take the free culture health check
            </Button>
          </div>
        </RevealOnScroll>
      </NightSection>
    </>
  );
}
