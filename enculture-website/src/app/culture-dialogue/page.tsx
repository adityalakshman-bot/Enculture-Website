import type { Metadata } from "next";
import { Eyebrow } from "@/components/Eyebrow";
import { Callout } from "@/components/Callout";
import { NightSection } from "@/components/NightSection";
import { CTASection } from "@/components/CTASection";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { EmailCaptureForm } from "@/components/EmailCaptureForm";

export const metadata: Metadata = {
  title: "Culture Dialogue — CHRO Roundtable Series | Enculture",
  description:
    "Culture Dialogue is Enculture's flagship CHRO roundtable. Five city editions completed. Topics: the Noise Problem, AI Shaming, and weaponised adoption. Request an invite.",
};

const EDITIONS = [
  { city: "Delhi", note: "Themes: the Noise Problem, AI Shaming, and Weaponised Adoption", date: "15 May 2026" },
  { city: "Mumbai", note: "Recap available on request", date: "2025" },
  { city: "Bangalore", note: "Recap available on request", date: "2025" },
  { city: "Hyderabad", note: "Recap available on request", date: "2026" },
  { city: "Chennai", note: "Recap available on request", date: "2026" },
];

export default function CultureDialoguePage() {
  return (
    <>
      <section className="hero pt-20 pb-18">
        <div className="wrap">
          <RevealOnScroll>
            <Eyebrow text="Community" variant="purple" />
            <h1>
              The roundtable where India&apos;s CHROs talk about the things they{" "}
              <span className="hl-p">can&apos;t say in the boardroom</span>.
            </h1>
            <p className="hero-lede">
              Culture Dialogue is Enculture&apos;s flagship CHRO roundtable — an off-the-record
              conversation among peers, not a vendor webinar with a product pitch in disguise.
              Five city editions completed so far: Delhi, Mumbai, Bangalore, Hyderabad, and
              Chennai.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* WHAT IT IS */}
      <section className="section-white">
        <div className="wrap">
          <RevealOnScroll>
            <Eyebrow text="What it is" />
            <h2>A closed-door room, deliberately small.</h2>
            <p className="lede">
              Each edition brings together a small group of CHROs and senior HR leaders in one
              city, around one provocative theme, for a conversation designed to go further than
              a panel ever could. No press, no recordings, no vendor pitch — just peers talking
              through the parts of the job nobody puts in a LinkedIn post.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* FIVE EDITIONS */}
      <section>
        <div className="wrap">
          <RevealOnScroll>
            <Eyebrow text="Five editions, so far" variant="purple" />
            <h2>Where the conversation has happened.</h2>
          </RevealOnScroll>

          <RevealOnScroll className="grid-3 mt-10">
            {EDITIONS.map((edition) => (
              <div key={edition.city} className="card">
                <div className="mb-2 font-display text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-teal">
                  {edition.date}
                </div>
                <h3>{edition.city}</h3>
                <p className="text-[0.93rem] text-muted">{edition.note}</p>
              </div>
            ))}
          </RevealOnScroll>
        </div>
      </section>

      {/* WHY IT EXISTS */}
      <NightSection>
        <RevealOnScroll>
          <Eyebrow text="Why it exists" />
          <h2>The best culture conversations happen between peers, not in a vendor webinar.</h2>
          <p className="lede">
            Enculture runs Culture Dialogue because the most useful thing we can give CHROs isn&apos;t
            another product demo — it&apos;s a room full of people facing the same problems,
            talking honestly about them.
          </p>
        </RevealOnScroll>

        <RevealOnScroll className="mt-8">
          <Callout variant="teal">
            There&apos;s no slide deck and no sales pitch in the room. Enculture hosts the
            conversation; the CHROs run it.
          </Callout>
        </RevealOnScroll>
      </NightSection>

      {/* REQUEST AN INVITE */}
      <section className="section-white">
        <div className="wrap text-center">
          <RevealOnScroll>
            <Eyebrow text="Join the next edition" variant="purple" className="justify-center" />
            <h2>Request an invite.</h2>
            <p className="lede mx-auto mt-2">
              Editions are small by design. Leave your email and we&apos;ll reach out when the
              next city is announced.
            </p>
          </RevealOnScroll>
          <RevealOnScroll className="mt-8">
            <EmailCaptureForm
              buttonText="Request an invite"
              confirmationText="Thanks — we'll be in touch when the next edition is announced."
            />
          </RevealOnScroll>
        </div>
      </section>

      <CTASection
        eyebrowText="Culture Dialogue"
        title="Request an invite to the next Culture Dialogue edition."
        lede="A closed-door room of CHRO peers, talking about the parts of the job nobody puts in a LinkedIn post."
        primaryCta={{ text: "Request an invite", href: "/demo" }}
        secondaryCta={{ text: "Book a demo instead", href: "/demo" }}
      />
    </>
  );
}
