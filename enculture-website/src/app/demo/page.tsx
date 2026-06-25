import type { Metadata } from "next";
import { Eyebrow } from "@/components/Eyebrow";
import { RevealOnScroll } from "@/components/RevealOnScroll";

export const metadata: Metadata = {
  title: "Book a Demo | Enculture",
  description: "See Enculture in your organization. Book thirty minutes with our team.",
};

export default function DemoPage() {
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com/enculture/demo";

  return (
    <section className="section-white">
      <div className="wrap max-w-3xl text-center">
        <RevealOnScroll>
          <Eyebrow text="Book a demo" className="justify-center" />
          <h1>See Enculture in your organization.</h1>
          <p className="lede mx-auto mt-2">
            Thirty minutes. Bring one culture question — we&apos;ll show you exactly what
            Enculture would surface in your first 30 days. No deck, no pressure.
          </p>
        </RevealOnScroll>

        <RevealOnScroll className="mt-10 overflow-hidden rounded-brand border border-line" delay={0.1}>
          <iframe
            src={calendlyUrl}
            title="Schedule a demo with Enculture"
            className="h-[700px] w-full"
            loading="lazy"
          />
        </RevealOnScroll>
      </div>
    </section>
  );
}
