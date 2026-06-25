import type { Metadata } from "next";
import { AlertTriangle, IndianRupee, TrendingDown } from "lucide-react";
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
  title: "Culture ROI for CFOs — Measure the Financial Impact of Culture | Enculture",
  description:
    "CFOs: culture risk is financial risk. Enculture quantifies attrition cost, productivity loss, and change failure — and proves your culture investment is working.",
};

const FAQ_ITEMS = [
  {
    question: "How do you calculate the ROI of culture investment?",
    answer:
      "The most direct model runs through attrition. Take your current voluntary attrition rate, apply the 1.5–2× salary replacement cost benchmark, and calculate what a 3–4 point attrition reduction would save. Then compare it to Enculture's platform cost. In most mid-to-large organizations, even a 2-point attrition improvement covers the platform cost 3–5× over. We can build this model for your specific organization in the demo session — using your headcount, attrition data, and average salary.",
  },
  {
    question: "What does this cost, and how is it priced?",
    answer:
      "Enculture is priced per employee per month, with tiered pricing based on organization size and product scope. Indicated ranges are available on the pricing page; exact pricing is confirmed after a scoping call because the right configuration varies by organization size, modules, and geography. What we can say: in the majority of deployments, the platform cost is recovered within 12 months from attrition impact alone — before any productivity or engagement benefits are included.",
  },
  {
    question: "How do you connect culture data to financial outcomes?",
    answer:
      "Enculture's Culture Health Index is a leading indicator — it moves before attrition, disengagement, and execution failure show up in the accounts. Organizations running Enculture track CHI quarterly alongside attrition rate, eNPS, and performance metrics. Over time, the correlation between CHI movement and financial outcomes becomes visible and defensible. We can walk through how organizations have connected these data sets in the demo.",
  },
  {
    question: "Who in the organization sponsors this — HR or Finance?",
    answer:
      "Typically, the CHRO or HR head is the primary sponsor and the day-to-day owner. CFO involvement tends to come in one of two ways: as a co-sponsor when the business case is built on attrition cost reduction or transformation ROI, or as a governance owner when Enculture is connected to people cost management and workforce planning. The most successful deployments have HR and Finance aligned on what the platform should prove — before it goes live.",
  },
  {
    question: "Can this be used as a pre- or post-M&A culture diagnostic?",
    answer:
      "Yes. Enculture's Business Alignment Arc can be configured to measure cultural alignment between entities pre- or post-acquisition — tracking belief strength against defined integration goals, monitoring the pace of culture change, and flagging the business units or teams where culture risk is highest during integration. Several organizations have used Enculture specifically in M&A contexts. We can walk through a relevant case in the demo.",
  },
];

function CFOHeroVisual() {
  return (
    <svg viewBox="0 0 320 270" width="320" height="270" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="10" y="10" width="300" height="250" rx="14" fill="white" stroke="#e6e5e0" strokeWidth="1" />
      <text x="26" y="38" fill="#5d5c66" fontFamily="Outfit,sans-serif" fontSize="7.5" fontWeight="600" letterSpacing="1.5">
        CULTURE RISK DASHBOARD · CFO VIEW
      </text>
      <rect x="26" y="48" width="132" height="80" rx="10" fill="#fff8f8" stroke="#f0c0b0" strokeWidth="1" />
      <text x="36" y="66" fill="#c0392b" fontFamily="Outfit,sans-serif" fontSize="7" fontWeight="600" letterSpacing="1">
        ATTRITION RISK
      </text>
      <text x="36" y="90" fill="#1b1a20" fontFamily="Outfit,sans-serif" fontSize="26" fontWeight="700">
        18%
      </text>
      <text x="36" y="105" fill="#5d5c66" fontFamily="Outfit,sans-serif" fontSize="7">
        Projected 12-month rate
      </text>
      <text x="36" y="118" fill="#c0392b" fontFamily="Outfit,sans-serif" fontSize="7" fontWeight="600">
        &uarr; +3pts vs last quarter
      </text>
      <rect x="168" y="48" width="132" height="80" rx="10" fill="#ecf4f3" stroke="#338282" strokeWidth="1" />
      <text x="178" y="66" fill="#1f5757" fontFamily="Outfit,sans-serif" fontSize="7" fontWeight="600" letterSpacing="1">
        ESTIMATED COST
      </text>
      <text x="178" y="90" fill="#338282" fontFamily="Outfit,sans-serif" fontSize="22" fontWeight="700">
        &#8377;31Cr
      </text>
      <text x="178" y="105" fill="#5d5c66" fontFamily="Outfit,sans-serif" fontSize="7">
        Annualised replacement cost
      </text>
      <text x="178" y="118" fill="#338282" fontFamily="Outfit,sans-serif" fontSize="7" fontWeight="600">
        &darr; Trackable with CHI improvement
      </text>
      <rect x="26" y="142" width="274" height="2" fill="#e6e5e0" />
      <text x="26" y="162" fill="#5d5c66" fontFamily="Outfit,sans-serif" fontSize="7.5" fontWeight="600" letterSpacing="1.5">
        CULTURE HEALTH INDEX · QUARTERLY TREND
      </text>
      <rect x="50" y="210" width="22" height="30" rx="3" fill="#ecf4f3" />
      <text x="55" y="248" fill="#5d5c66" fontFamily="Outfit,sans-serif" fontSize="7">Q1</text>
      <rect x="86" y="200" width="22" height="40" rx="3" fill="#ecf4f3" />
      <text x="91" y="248" fill="#5d5c66" fontFamily="Outfit,sans-serif" fontSize="7">Q2</text>
      <rect x="122" y="188" width="22" height="52" rx="3" fill="#b3d4d4" />
      <text x="127" y="248" fill="#5d5c66" fontFamily="Outfit,sans-serif" fontSize="7">Q3</text>
      <rect x="158" y="174" width="22" height="66" rx="3" fill="#338282" />
      <text x="163" y="248" fill="#5d5c66" fontFamily="Outfit,sans-serif" fontSize="7">Q4</text>
      <text x="163" y="172" fill="#338282" fontFamily="Outfit,sans-serif" fontSize="7.5" fontWeight="700">72 &uarr;</text>
      <text x="200" y="200" fill="#5d5c66" fontFamily="Outfit,sans-serif" fontSize="7">+13 pts improvement</text>
      <text x="200" y="212" fill="#1f5757" fontFamily="Outfit,sans-serif" fontSize="7" fontWeight="600">correlated with attrition</text>
      <text x="200" y="224" fill="#1f5757" fontFamily="Outfit,sans-serif" fontSize="7" fontWeight="600">rate declining 4.2%</text>
    </svg>
  );
}

export default function ForCFOsPage() {
  return (
    <>
      <FAQSchema items={FAQ_ITEMS} />

      <SectionHero
        eyebrow="For CFOs"
        title={
          <>
            <span className="hl-p">Culture risk</span> is financial risk. Here&apos;s how to{" "}
            <span className="hl-t">put a number on it</span> — and prove it&apos;s moving.
          </>
        }
        lede="Voluntary attrition at 18% costs a 2,000-person organization ₹28–40 crore a year in replacement alone — before productivity loss, institutional knowledge drain, and manager time. Culture is the leading indicator for all of it. Enculture makes it measurable."
        ctas={[
          { text: "Book a demo", href: "/demo", variant: "primary" },
          { text: "Talk to us", href: "/demo", variant: "ghost" },
        ]}
        visual={<CFOHeroVisual />}
      />

      {/* THE FINANCIAL CASE */}
      <section className="section-white">
        <div className="wrap">
          <RevealOnScroll>
            <Eyebrow text="The financial case" />
            <h2>
              Poor culture doesn&apos;t show up as a line item. It shows up{" "}
              <span className="hl-p">everywhere else</span>.
            </h2>
            <p className="lede">
              McKinsey research consistently shows that organizations in the top quartile of
              organizational health outperform industry peers on EBIT by 60%. Culture isn&apos;t
              a soft HR initiative — it&apos;s a measurable financial driver, and every
              CFO&apos;s P&amp;L is already paying for it.
            </p>
          </RevealOnScroll>

          <RevealOnScroll className="grid-3 mt-10">
            <AccentCard icon={<IndianRupee size={24} strokeWidth={2.5} />} title="Attrition is the most visible cost">
              Replacing a mid-level employee costs 1.5–2× their annual salary in recruitment,
              onboarding, and lost productivity. At 15–18% voluntary attrition, this is one of
              the largest controllable costs in the P&amp;L — and it&apos;s directly predictable
              from culture data 6–9 months in advance.
            </AccentCard>
            <AccentCard icon={<TrendingDown size={24} strokeWidth={2.5} />} title="Disengagement costs more quietly" accent="purple">
              Gallup estimates actively disengaged employees cost organizations 34% of their
              annual salary in lost productivity. In a 2,000-person organization with average
              engagement, that&apos;s 8–12% of total payroll — invisible in the accounts, but
              real on the income statement.
            </AccentCard>
            <AccentCard icon={<AlertTriangle size={24} strokeWidth={2.5} />} title="Change programs fail at the culture layer">
              70% of large transformation programs fail to achieve their goals, and culture
              misalignment is the leading cause (McKinsey). The ROI on the transformation program
              assumes culture follows the strategy. It rarely does — unless you&apos;re measuring
              it.
            </AccentCard>
          </RevealOnScroll>

          <RevealOnScroll className="cost-calc mt-10">
            <div className="mb-4 font-display text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-muted">
              Illustrative cost model — 2,000-person organization, 18% attrition
            </div>
            <div className="cost-row">
              <span className="cost-label">Annual voluntary attrition (360 employees)</span>
              <span className="cost-value red">360 exits</span>
            </div>
            <div className="cost-row">
              <span className="cost-label">Average replacement cost per employee (1.5× salary)</span>
              <span className="cost-value red">₹9–12 lakh</span>
            </div>
            <div className="cost-row">
              <span className="cost-label">Direct replacement cost (recruitment + onboarding)</span>
              <span className="cost-value red">₹32–43 Cr/year</span>
            </div>
            <div className="cost-row">
              <span className="cost-label">Productivity loss (ramp time, team disruption)</span>
              <span className="cost-value red">+₹8–14 Cr/year</span>
            </div>
            <div className="cost-row mt-2 rounded-[10px] bg-teal-tint px-4 py-3">
              <span className="cost-label text-teal-deep">Estimated saving from 4pt attrition reduction</span>
              <span className="cost-value teal total">₹7–11 Cr/year</span>
            </div>
            <p className="mt-3 text-[0.82rem] text-muted">
              This model uses published industry benchmarks. Enculture can run an
              organization-specific model in the demo.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* WHAT CHANGES FOR THE CFO */}
      <section>
        <div className="wrap">
          <RevealOnScroll>
            <Eyebrow text="What changes for you" />
            <h2>
              Culture as a <span className="hl-t">board-level metric</span> — not an HR program
              report.
            </h2>
            <p className="lede">
              Enculture gives the CFO what no HR platform has delivered before: a culture number
              that correlates to financial outcomes, moves with the business, and can be
              presented at the board table alongside revenue, EBIT, and attrition.
            </p>
          </RevealOnScroll>

          <RevealOnScroll className="grid-2 mt-10">
            <div className="timeline-card">
              <h3>The Culture Health Index as a financial leading indicator</h3>
              <p>
                CHI improvements of 10+ points correlate with measurable attrition reduction 2–3
                quarters later. This is a leading indicator — the kind CFOs use for revenue
                pipeline and customer churn. Culture is no different. Enculture makes it
                trackable, trendable, and board-presentable.
              </p>
            </div>
            <div className="timeline-card purple">
              <h3>Culture risk in M&amp;A and transformation</h3>
              <p>
                Pre-acquisition culture assessment. Post-merger integration monitoring.
                Transformation readiness measurement. These are high-stakes moments where culture
                risk is financial risk — and where Enculture gives leadership a real-time view of
                how the culture layer is responding, not a 90-day retrospective.
              </p>
            </div>
            <div className="timeline-card">
              <h3>ROI that doesn&apos;t require a leap of faith</h3>
              <p>
                Enculture&apos;s Action Centre tracks every culture intervention to closure — with
                timestamps, owners, and outcomes. When attrition drops, or a change program lands
                better than the last one, the data trail exists. The CFO can attribute the
                improvement, defend the spend, and make the case for continued investment.
              </p>
            </div>
            <div className="timeline-card purple">
              <h3>Board-ready in one number</h3>
              <p>
                The Culture Health Index gives the board a single, trackable number for culture
                — like NPS for the people side of the organization. It&apos;s a metric the CFO
                can put on a slide next to revenue growth, employee headcount, and attrition rate
                — and have a data-backed conversation about what&apos;s driving it.
              </p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll className="mt-8">
            <Callout variant="purple">
              In practice: a FMCG organization with 3,800 employees saw a 13-point CHI
              improvement over two quarters. Voluntary attrition dropped 4.2% the following
              quarter — a saving of approximately ₹8 crore in replacement cost. The culture
              investment paid back in the same financial year.
            </Callout>
          </RevealOnScroll>
        </div>
      </section>

      {/* PROOF */}
      <NightSection>
        <RevealOnScroll>
          <Eyebrow text="The numbers" />
          <h2>What culture intelligence delivers — in financial terms.</h2>
          <p className="lede">
            These are outcomes from organizations running Enculture. The culture investment is
            measurable. The return is trackable. The board conversation changes.
          </p>
        </RevealOnScroll>

        <RevealOnScroll className="stat-row mt-10">
          <StatBox
            number="+13 pts"
            label="Culture Health Index"
            description="Average CHI improvement in 2+ quarters — correlated with measurable attrition reduction in the following period"
          />
          <StatBox
            number="4.2%"
            label="Attrition reduction"
            description="Voluntary attrition decline observed in organizations with 10+ point CHI improvement — typically within 2 quarters"
          />
          <StatBox
            number="78%"
            label="Action closure rate"
            description="Culture actions completed in Enculture — the audit trail that proves the intervention, not just the intention"
          />
        </RevealOnScroll>

        <RevealOnScroll className="mt-10">
          <MidPageCTA
            eyebrow="Run the model for your organization"
            question="We can build a culture cost model specific to your headcount, attrition rate, and industry in the demo."
            ctaText="Book a demo"
            ctaHref="/demo"
          />
        </RevealOnScroll>
      </NightSection>

      {/* SECURITY + GOVERNANCE */}
      <section className="section-white">
        <div className="wrap">
          <RevealOnScroll>
            <Eyebrow text="Governance" />
            <h2>
              The questions your CISO and legal team will ask.{" "}
              <span className="hl-t">Answered before they ask them.</span>
            </h2>
            <p className="lede">
              Enculture is ISO 27001 certified. All employee data is encrypted in transit and at
              rest. Employee responses are anonymized at the architecture level — not promised in
              a policy. The audit trail, the data handling documentation, and the security
              architecture are available before you sign.
            </p>
          </RevealOnScroll>

          <RevealOnScroll className="grid-3 mt-10">
            <div className="card border-t-4 border-teal">
              <h3>ISO 27001 Certified</h3>
              <p className="text-[0.93rem] leading-relaxed text-muted">
                Independently certified information security management. Audit-ready
                documentation. The CISO conversation is built in, not bolted on.
              </p>
            </div>
            <div className="card border-t-4 border-purple">
              <h3>Data sovereignty and retention</h3>
              <p className="text-[0.93rem] leading-relaxed text-muted">
                You define data retention periods. You own the data. Enculture does not use your
                organization&apos;s culture data to train models or share with third parties.
              </p>
            </div>
            <div className="card border-t-4 border-teal">
              <h3>Audit trail and governance</h3>
              <p className="text-[0.93rem] leading-relaxed text-muted">
                Every action, every assignment, every closure is logged with timestamps and
                owners. The governance trail exists for regulators, boards, and internal audit —
                without any extra configuration.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <div className="wrap">
          <RevealOnScroll>
            <Eyebrow text="Before you decide" variant="purple" />
            <h2>The questions a CFO actually asks.</h2>
          </RevealOnScroll>

          <RevealOnScroll className="mt-10">
            <FAQ items={FAQ_ITEMS} />
          </RevealOnScroll>
        </div>
      </section>

      <CTASection
        eyebrowText="Let's talk culture economics"
        title="Bring your attrition data. Leave with a culture cost model."
        lede="Thirty minutes. We'll build the financial case specific to your organization — replacement cost, productivity impact, and what a CHI improvement is worth to your P&L."
        secondaryCta={{ text: "Talk to us first", href: "/demo" }}
      />
    </>
  );
}
