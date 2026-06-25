import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow } from "@/components/Eyebrow";
import { RevealOnScroll } from "@/components/RevealOnScroll";

export const metadata: Metadata = {
  title: "A Note from the Founder | Enculture",
  description:
    "Samir Parikh, founder of Enculture, on why he built this — and what he still believes about the role of culture in organizational performance.",
};

export default function FoundersNotePage() {
  return (
    <section className="section-white">
      <div className="wrap max-w-2xl">
        <RevealOnScroll>
          <Eyebrow text="From the founder" />
          <h1 className="mb-6">A note from Samir Parikh.</h1>

          <div className="flex flex-col gap-5 text-[1.05rem] leading-relaxed text-ink">
            <p>
              I spent a long time on the other side of the table — in the room with CHROs and
              business leaders, running assessments and consulting engagements, watching the same
              pattern repeat. Everyone agreed culture mattered. Almost no one could tell me, with
              any confidence, what was actually happening inside their organization right now.
            </p>
            <p>
              That wasn&apos;t because they didn&apos;t care. It was because the tools available
              to them were built for a different era — a once-a-year survey, a static report, a
              deck that got presented once and filed away. Nobody had given them an instrument
              that matched how seriously they treated the problem.
            </p>
            <p>
              I built Enculture because I believe culture deserves the same management discipline
              as any other business-critical asset — measured continuously, acted on visibly, and
              proven to move. Not a survey with a prettier dashboard. A system that closes the
              loop from signal to outcome.
            </p>
            <p>
              I still believe what I believed when we started: culture is the one advantage a
              competitor can&apos;t copy or buy. Most organizations just don&apos;t have a way to
              see it clearly yet. That&apos;s the gap we&apos;re here to close.
            </p>
            <p className="text-muted">— Samir Parikh, Founder, Enculture</p>
          </div>

          <p className="mt-10 text-muted">
            If this resonates,{" "}
            <Link href="/demo" className="font-semibold text-teal hover:text-teal-deep">
              book a conversation
            </Link>
            .
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
}
