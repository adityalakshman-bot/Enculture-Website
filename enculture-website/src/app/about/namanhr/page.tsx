import type { Metadata } from "next";
import { Eyebrow } from "@/components/Eyebrow";
import { Callout } from "@/components/Callout";
import { CTASection } from "@/components/CTASection";
import { RevealOnScroll } from "@/components/RevealOnScroll";

export const metadata: Metadata = {
  title: "The NamanHR Story | Enculture",
  description:
    "NamanHR is a 20+ year HR consulting firm — the practice that built Enculture from the inside out. This is the story of what two decades in the room with real HR challenges taught us.",
};

export default function NamanHRPage() {
  return (
    <>
      <section className="hero pt-20 pb-18">
        <div className="wrap">
          <RevealOnScroll>
            <Eyebrow text="Our heritage" />
            <h1>
              Twenty years in the room, <span className="hl-t">before we ever wrote a line of code</span>.
            </h1>
            <p className="hero-lede">
              NamanHR is a 20+ year HR consulting and assessment practice. It is an independent
              brand from Enculture — but it&apos;s the practice that shaped how Enculture was
              built.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* THE PRACTICE */}
      <section className="section-white">
        <div className="wrap">
          <RevealOnScroll>
            <Eyebrow text="The practice" />
            <h2>Two decades of assessment and consulting work, with real organizations.</h2>
            <p className="lede">
              NamanHR spent over 20 years running leadership assessments, 360-degree feedback
              programs, and culture consulting engagements with organizations across India —
              work grounded in behavioral science, not generic frameworks bought off the shelf.
              Tens of thousands of participants assessed, across industries from manufacturing to
              banking to pharma.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* WHAT IT TAUGHT US */}
      <section>
        <div className="wrap">
          <RevealOnScroll>
            <Eyebrow text="What it taught us" variant="purple" />
            <h2>Real organizational challenges don&apos;t look like a textbook framework.</h2>
            <p className="lede">
              Two decades of sitting across the table from CHROs, business leaders, and the
              managers caught between them taught a consistent lesson: the tools available for
              measuring and acting on culture were built for a once-a-year reporting cycle, not
              for how decisions actually get made day to day. That gap — between the instrument
              available and the problem leaders were actually facing — is what Enculture was
              built to close.
            </p>
          </RevealOnScroll>

          <RevealOnScroll className="mt-8">
            <Callout variant="teal">
              Enculture isn&apos;t a generic AI product layered onto a survey tool. It&apos;s
              what two decades of real consulting practice would build, if it could finally move
              at the speed software allows.
            </Callout>
          </RevealOnScroll>
        </div>
      </section>

      {/* INDEPENDENCE */}
      <section className="section-white">
        <div className="wrap">
          <RevealOnScroll>
            <Eyebrow text="Two independent brands" />
            <h2>NamanHR and Enculture are separate companies — deliberately.</h2>
            <p className="lede">
              NamanHR continues to operate as its own consulting practice. Enculture is built and
              operated by NHR Technologies as its own product company. They share a heritage, not
              a brand — Enculture is a software platform built on what NamanHR&apos;s practice
              learned, not a co-branded extension of it.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      <CTASection
        title="Bring one culture question. Leave with a plan."
        lede="Thirty minutes. See what 20 years of consulting practice, built into software, would surface in your organization."
      />
    </>
  );
}
