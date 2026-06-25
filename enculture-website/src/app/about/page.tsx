import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow } from "@/components/Eyebrow";
import { Callout } from "@/components/Callout";
import { CTASection } from "@/components/CTASection";
import { RevealOnScroll } from "@/components/RevealOnScroll";

export const metadata: Metadata = {
  title: "About Enculture — Culture Intelligence Built by Practitioners",
  description:
    "Enculture is built by NHR Technologies, grounded in 20+ years of HR consulting practice through NamanHR. Built by practitioners, for the people decisions that actually matter.",
};

export default function AboutPage() {
  return (
    <>
      <section className="hero pt-20 pb-18">
        <div className="wrap">
          <RevealOnScroll>
            <Eyebrow text="About Enculture" />
            <h1>
              Built by practitioners, <span className="hl-t">for the people decisions that actually matter</span>.
            </h1>
            <p className="hero-lede">
              Enculture exists to make culture manageable as a business asset — measured with
              the same discipline as revenue, not run on assumptions and an annual survey.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* ORIGIN */}
      <section className="section-white">
        <div className="wrap">
          <RevealOnScroll>
            <Eyebrow text="Where this came from" />
            <h2>Built from inside the room, not from a market research deck.</h2>
            <p className="lede">
              Enculture is built by NHR Technologies, grounded in over 20 years of HR consulting
              practice through NamanHR. The platform exists because that practice spent two
              decades watching the gap between what leadership thought was happening and what was
              actually happening inside their organizations — and decided to build the instrument
              that closes it.
            </p>
          </RevealOnScroll>

          <RevealOnScroll className="mt-8">
            <Callout variant="teal">
              Culture management has run on instinct for too long. Enculture treats it as a
              business-critical asset, measured continuously and managed with a closed action
              loop — not a once-a-year survey and a deck nobody re-opens.
            </Callout>
          </RevealOnScroll>
        </div>
      </section>

      {/* LINKS */}
      <section>
        <div className="wrap">
          <RevealOnScroll className="grid-2">
            <Link href="/about/namanhr" className="accent-card block transition-shadow hover:shadow-md">
              <h3>The NamanHR Story</h3>
              <p>Twenty years of consulting practice that shaped the platform&apos;s depth.</p>
            </Link>
            <Link href="/about/founders-note" className="accent-card purple-top block transition-shadow hover:shadow-md">
              <h3>A Note from the Founder</h3>
              <p>Why Samir Parikh built Enculture, in his own words.</p>
            </Link>
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
