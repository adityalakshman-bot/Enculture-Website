import type { Metadata } from "next";
import { BarChart3, RefreshCw, TrendingUp } from "lucide-react";
import { Eyebrow } from "@/components/Eyebrow";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { Logo } from "@/components/Logo";
import { EmailCaptureForm } from "@/components/EmailCaptureForm";

export const metadata: Metadata = {
  title: "Culture Performance Metrics — Coming Soon | Enculture",
  description: "Enculture Perform: the proof that your culture work is actually moving the business. Coming soon.",
};

export default function PerformPage() {
  return (
    <section className="night-section min-h-[80vh] py-28">
      <div className="wrap text-center">
        <RevealOnScroll>
          <Eyebrow text="Platform · Perform" className="justify-center" />
          <h1 className="mx-auto max-w-3xl text-[clamp(2.2rem,5vw,3.5rem)] font-bold leading-tight text-white">
            The proof that your culture investment is working.
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-on-night-2">Coming soon.</p>
        </RevealOnScroll>

        <RevealOnScroll className="mt-10">
          <EmailCaptureForm
            buttonText="Notify me"
            confirmationText="You're on the list — we'll let you know the moment Perform is ready."
          />
        </RevealOnScroll>

        <RevealOnScroll className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
          <div className="card text-left">
            <TrendingUp className="mb-3 text-bright-teal" size={24} strokeWidth={2.5} />
            <h3>Business impact correlation</h3>
            <p>See the Culture Health Index plotted against attrition, performance, and revenue.</p>
          </div>
          <div className="card text-left">
            <RefreshCw className="mb-3 text-bright-purple" size={24} strokeWidth={2.5} />
            <h3>Re-measurement</h3>
            <p>Confirm whether a specific intervention actually moved the number it targeted.</p>
          </div>
          <div className="card text-left">
            <BarChart3 className="mb-3 text-bright-teal" size={24} strokeWidth={2.5} />
            <h3>ROI proof</h3>
            <p>A defensible, board-ready case for the return on your culture investment.</p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll className="mt-16">
          <Logo className="text-white" />
        </RevealOnScroll>
      </div>
    </section>
  );
}
