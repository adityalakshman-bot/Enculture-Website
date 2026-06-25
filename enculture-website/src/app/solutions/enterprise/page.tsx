import type { Metadata } from "next";
import { Database, FileCheck, Globe2, KeyRound, LayoutDashboard, Lock, ShieldCheck, UserX } from "lucide-react";
import { SectionHero } from "@/components/SectionHero";
import { Eyebrow } from "@/components/Eyebrow";
import { AccentCard } from "@/components/AccentCard";
import { NightSection } from "@/components/NightSection";
import { CTASection } from "@/components/CTASection";
import { RevealOnScroll } from "@/components/RevealOnScroll";

export const metadata: Metadata = {
  title: "Enterprise Culture Intelligence Platform | Enculture",
  description:
    "40,000 employees. 6 geographies. One Culture Health Index you can take to the board. Enculture is built for enterprise scale.",
};

const CLIENTS = ["Linde", "PGP Glass", "Eurowag", "Reserve Bank of India", "Sun Pharma"];

export default function EnterprisePage() {
  return (
    <>
      <SectionHero
        eyebrow="Enterprise"
        title={
          <>
            40,000 employees. 6 geographies.{" "}
            <span className="hl-t">One Culture Health Index</span> you can take to the board.
          </>
        }
        lede="Enterprise scale changes what a culture platform needs to do — multi-geography rollups, executive dashboards, governance, and an implementation model built for organizations this size, not retrofitted for them."
        ctas={[
          { text: "Take the free culture health check", href: "https://go.enculture.ai", variant: "ghost" },
          { text: "Book a demo", href: "/demo", variant: "primary" },
        ]}
      />

      {/* SCALE */}
      <section className="section-white">
        <div className="wrap">
          <RevealOnScroll>
            <Eyebrow text="Built for scale" />
            <h2>One index. Every geography. Every level.</h2>
          </RevealOnScroll>

          <RevealOnScroll className="grid-3 mt-10">
            <AccentCard icon={<Globe2 size={24} strokeWidth={2.5} />} title="Multi-geography">
              One Culture Health Index, comparable across every country and business unit you
              operate in.
            </AccentCard>
            <AccentCard icon={<LayoutDashboard size={24} strokeWidth={2.5} />} title="Org-level + team-level" accent="purple">
              The board sees the enterprise number. Every manager sees their own team. Same
              platform, the right altitude for each.
            </AccentCard>
            <AccentCard icon={<ShieldCheck size={24} strokeWidth={2.5} />} title="Executive dashboards">
              Board-ready views built for the conversation, not a generic BI export.
            </AccentCard>
          </RevealOnScroll>
        </div>
      </section>

      {/* SECURITY ARCHITECTURE */}
      <section>
        <div className="wrap">
          <RevealOnScroll>
            <Eyebrow text="Security architecture" variant="purple" />
            <h2>
              Enterprise-grade, <span className="hl-t">by default.</span>
            </h2>
            <p className="lede">
              Security, anonymity, and compliance are part of the platform architecture, not an
              add-on tier — because Enculture was built for organizations this size from day one.
            </p>
          </RevealOnScroll>

          <RevealOnScroll className="sec-grid mt-10">
            <div className="sec-card">
              <div className="sec-icon">
                <ShieldCheck size={20} />
              </div>
              <div>
                <h4>ISO 27001 Certified</h4>
                <p>Independently certified information security management, audit-ready on request.</p>
              </div>
            </div>
            <div className="sec-card">
              <div className="sec-icon">
                <Lock size={20} />
              </div>
              <div>
                <h4>Data encrypted end-to-end</h4>
                <p>All employee data encrypted in transit and at rest, with no plaintext exposure.</p>
              </div>
            </div>
            <div className="sec-card">
              <div className="sec-icon">
                <UserX size={20} />
              </div>
              <div>
                <h4>Anonymity by design</h4>
                <p>Structurally enforced anonymity — not a policy promise managers have to honor.</p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* GOVERNANCE */}
      <NightSection>
        <RevealOnScroll>
          <Eyebrow text="Governance" />
          <h2>The controls your CISO, legal, and procurement teams expect.</h2>
        </RevealOnScroll>

        <RevealOnScroll className="grid-3 mt-10">
          <div className="card">
            <KeyRound className="mb-3 text-bright-teal" size={24} strokeWidth={2.5} />
            <h3>SSO and role-based access</h3>
            <p>Single sign-on and access scoped by role, enforced at the platform level.</p>
          </div>
          <div className="card">
            <Database className="mb-3 text-bright-purple" size={24} strokeWidth={2.5} />
            <h3>Data sovereignty</h3>
            <p>You define retention. You own the data. It is never used to train external models.</p>
          </div>
          <div className="card">
            <FileCheck className="mb-3 text-bright-teal" size={24} strokeWidth={2.5} />
            <h3>Full audit trail</h3>
            <p>Every action, assignment, and closure logged with timestamps and owners.</p>
          </div>
        </RevealOnScroll>
      </NightSection>

      {/* IMPLEMENTATION MODEL */}
      <section className="section-white">
        <div className="wrap">
          <RevealOnScroll>
            <Eyebrow text="Implementation model" variant="purple" />
            <h2>A rollout designed for multi-geography organizations.</h2>
          </RevealOnScroll>

          <RevealOnScroll className="grid-3 mt-10">
            <div className="timeline-card">
              <div className="timeline-card-tag">Phase 1</div>
              <h3>Discovery & scoping</h3>
              <p>HRIS architecture, geography rollout sequence, and governance requirements mapped with your team.</p>
            </div>
            <div className="timeline-card purple">
              <div className="timeline-card-tag">Phase 2</div>
              <h3>Phased rollout</h3>
              <p>Geography by geography, business unit by business unit — not a single big-bang launch.</p>
            </div>
            <div className="timeline-card">
              <div className="timeline-card-tag">Phase 3</div>
              <h3>Steady-state governance</h3>
              <p>A named team on both sides, quarterly reviews, and a clear escalation path.</p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* PROOF POINTS */}
      <section>
        <div className="wrap text-center">
          <RevealOnScroll>
            <Eyebrow text="Trusted at scale" className="justify-center" />
            <h2>Running today in organizations like these.</h2>
            <div className="mt-8 flex flex-wrap justify-center gap-x-10 gap-y-3">
              {CLIENTS.map((client) => (
                <span key={client} className="font-display text-base font-semibold text-muted">
                  {client}
                </span>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <CTASection
        title="Bring your scale. Leave with an implementation plan."
        lede="Enterprise deployments start with a conversation, not a self-serve signup. Thirty minutes with our team to map what Enculture would look like across your geographies."
        secondaryCta={{ text: "Talk to our team", href: "/demo" }}
      />
    </>
  );
}
