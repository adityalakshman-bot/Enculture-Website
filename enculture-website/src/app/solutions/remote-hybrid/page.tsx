import type { Metadata } from "next";
import { Compass, EyeOff, Heart, Unlink2 } from "lucide-react";
import { SectionHero } from "@/components/SectionHero";
import { Eyebrow } from "@/components/Eyebrow";
import { AccentCard } from "@/components/AccentCard";
import { Callout } from "@/components/Callout";
import { NightSection } from "@/components/NightSection";
import { StatBox } from "@/components/StatBox";
import { CTASection } from "@/components/CTASection";
import { MidPageCTA } from "@/components/MidPageCTA";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { FAQ } from "@/components/FAQ";
import { FAQSchema } from "@/components/FAQSchema";

export const metadata: Metadata = {
  title: "Employee Engagement for Remote and Hybrid Teams | Enculture",
  description:
    "Culture doesn't come back to the office when your people do. Enculture runs continuous culture listening for distributed and hybrid teams — on the channels they already use.",
};

const FAQ_ITEMS = [
  {
    question: "Does Enzo work on WhatsApp, Slack, or Teams?",
    answer:
      "Yes. Enzo runs conversational arcs directly on the channels your employees already use — WhatsApp, Slack, Microsoft Teams, or email — with no separate app or login required. For distributed teams, removing that one extra step is often the difference between a 20% and an 80% response rate.",
  },
  {
    question: "How do you maintain anonymity in small remote teams?",
    answer:
      "Enculture applies cohort thresholds — results are only surfaced when enough responses exist to protect individual identity, which matters more in small distributed teams where a single response could otherwise be identifiable. Where a team is too small to report safely, Enculture rolls the data up to the next level rather than exposing it.",
  },
  {
    question: "Is this suitable for global teams?",
    answer:
      "Yes. Enzo runs in multiple languages and adapts arc timing to local working hours and holidays, so a distributed team across geographies gets a consistent experience rather than a tool built around one region's calendar.",
  },
];

export default function RemoteHybridPage() {
  return (
    <>
      <FAQSchema items={FAQ_ITEMS} />

      <SectionHero
        eyebrow="Remote & Hybrid"
        title={
          <>
            Culture doesn&apos;t come back to the office when your people do.{" "}
            <span className="hl-p">It was never in the building.</span>
          </>
        }
        lede="Distributed teams form culture in chat threads, async updates, and the gaps between meetings — places a once-a-year survey was never designed to reach. Enculture listens where the culture actually happens."
        ctas={[
          { text: "Take the free culture health check", href: "https://go.enculture.ai", variant: "ghost" },
          { text: "Book a demo", href: "/demo", variant: "primary" },
        ]}
      />

      {/* WHAT BREAKS IN HYBRID */}
      <section className="section-white">
        <div className="wrap">
          <RevealOnScroll>
            <Eyebrow text="What breaks in hybrid" />
            <h2>The same four things, on repeat, in every distributed organization.</h2>
          </RevealOnScroll>

          <RevealOnScroll className="grid-3 mt-10">
            <AccentCard icon={<EyeOff size={24} strokeWidth={2.5} />} title="Visibility gap">
              Leadership sees what happens in the office. Most of the organization doesn&apos;t
              work from one anymore.
            </AccentCard>
            <AccentCard icon={<Unlink2 size={24} strokeWidth={2.5} />} title="Manager-team disconnect" accent="purple">
              The informal signals managers used to pick up in person don&apos;t travel through
              a video call.
            </AccentCard>
            <AccentCard icon={<Heart size={24} strokeWidth={2.5} />} title="Belonging erosion">
              Belonging used to happen by accident, in a hallway. Distributed teams need it
              designed in.
            </AccentCard>
            <AccentCard icon={<Compass size={24} strokeWidth={2.5} />} title="Alignment drift" accent="purple">
              Without shared physical context, teams quietly drift from what leadership thinks
              they understand.
            </AccentCard>
          </RevealOnScroll>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section>
        <div className="wrap">
          <RevealOnScroll>
            <Eyebrow text="How it works" variant="purple" />
            <h2>Enzo runs on the channels your people already have open.</h2>
            <p className="lede">
              No separate portal, no new login. Enzo runs conversational arcs on WhatsApp, Slack,
              Microsoft Teams, or email — wherever the team already works — so participation
              doesn&apos;t depend on remembering one more tool.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* WHAT YOU SEE */}
      <NightSection>
        <RevealOnScroll>
          <Eyebrow text="What you see" />
          <h2>By team, by geography, by function — not one national average.</h2>
          <p className="lede">
            Distributed organizations need the cut that a single org-wide number hides: which
            geography is struggling, which function is disconnected, which team needs help
            first.
          </p>
        </RevealOnScroll>

        <RevealOnScroll className="grid-3 mt-10">
          <div className="card">
            <h3>By team</h3>
            <p>The team-level view that a quarterly all-hands can&apos;t give you.</p>
          </div>
          <div className="card">
            <h3>By geography</h3>
            <p>See where culture is diverging across regions before it becomes a retention issue.</p>
          </div>
          <div className="card">
            <h3>By function</h3>
            <p>Compare engineering, sales, and operations on the same scale.</p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll className="mt-8">
          <Callout variant="teal">
            Managers of distributed teams carry the least visibility and the most cultural
            responsibility in the organization. Enculture is the one place they get both back.
          </Callout>
        </RevealOnScroll>
      </NightSection>

      {/* PROOF */}
      <section className="section-white">
        <div className="wrap">
          <RevealOnScroll>
            <Eyebrow text="Movement, not scores" variant="purple" />
            <h2>The signal that travels, even when the team doesn&apos;t share an office.</h2>
          </RevealOnScroll>

          <RevealOnScroll className="stat-row mt-10">
            <StatBox
              number="+13 pts"
              label="Culture Health Index"
              description="Average CHI improvement in organizations running Enculture for two or more quarters"
            />
            <StatBox
              number="60–80%"
              label="Response rates"
              description="Typical response rates for Enzo's conversational arcs on channels employees already use"
            />
            <StatBox
              number="78%"
              label="Action completion rate"
              description="Of culture action items created in Enculture are completed — versus under 30% industry-wide"
            />
          </RevealOnScroll>

          <RevealOnScroll className="mt-10">
            <MidPageCTA
              eyebrow="See it on your distributed teams"
              question="What would Enculture surface across your remote and hybrid teams in 30 days?"
              ctaText="Book a demo"
              ctaHref="/demo"
            />
          </RevealOnScroll>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <div className="wrap">
          <RevealOnScroll>
            <Eyebrow text="Before you decide" />
            <h2>What distributed teams ask first.</h2>
          </RevealOnScroll>
          <RevealOnScroll className="mt-10">
            <FAQ items={FAQ_ITEMS} />
          </RevealOnScroll>
        </div>
      </section>

      <CTASection
        title="Bring one culture question. Leave with a plan."
        lede="Thirty minutes. We look at your distributed team structure and show you exactly what Enculture would surface in your first 30 days."
      />
    </>
  );
}
