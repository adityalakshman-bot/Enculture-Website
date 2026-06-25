import type { Metadata } from "next";
import { ArrowRight, CheckCircle2, Lock, ShieldCheck, Target, UserX } from "lucide-react";
import { SectionHero } from "@/components/SectionHero";
import { Eyebrow } from "@/components/Eyebrow";
import { AccentCard } from "@/components/AccentCard";
import { QuoteCard } from "@/components/QuoteCard";
import { Callout } from "@/components/Callout";
import { NightSection } from "@/components/NightSection";
import { StatBox } from "@/components/StatBox";
import { CTASection } from "@/components/CTASection";
import { MidPageCTA } from "@/components/MidPageCTA";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { FromToRow } from "@/components/FromToRow";
import { FAQ } from "@/components/FAQ";
import { FAQSchema } from "@/components/FAQSchema";
import { HeroVisual } from "@/components/HeroVisual";

export const metadata: Metadata = {
  title: "Culture Intelligence for CHROs | Enculture",
  description:
    "CHROs: turn culture into board-ready performance data. Enculture gives you a closed action loop, a Culture Health Index, and proof it's moving — in 30 days.",
};

const FAQ_ITEMS = [
  {
    question: "How is this different from Culture Amp or Lattice?",
    answer:
      "Culture Amp and Lattice are measurement platforms — they tell you what employees feel. Enculture is a culture intelligence system — it tells you what to do about it, assigns ownership, and tracks whether it worked. The second difference: Culture Amp was built for Western markets and scaled globally. Enculture was built with India and emerging markets at the centre — the context, the organizational dynamics, the behavioral patterns are native to the platform, not adapted for it. Third: we're not a survey platform with AI added. We're built natively in the age of AI — conversational arcs, not questionnaires.",
  },
  {
    question: "Is this just a survey tool with a new name?",
    answer:
      "No — and the difference is structural, not cosmetic. Survey tools collect responses. Enculture runs conversational arcs: designed two-way conversations that Enzo carries with every employee, continuously, with full context of who they are and what was said before. Surveys produce a report. Enculture produces a closed action loop — signal, insight, action, proof of closure, improved score. If your existing tool isn't moving your Culture Health Index, it's a survey tool.",
  },
  {
    question: "How long until I see something real?",
    answer:
      "Your first culture read within 7 days of going live. A board-ready Culture Health Index with actionable findings before your first month closes. Most CHROs report having their first meaningful data within 2–3 weeks — not the 6–8 week rollout cycle that traditional survey platforms require. The conversational format accelerates participation because it's not a 45-question form that employees abandon halfway through.",
  },
  {
    question: "Is employee data safe and truly anonymous?",
    answer:
      "Enculture is ISO 27001 certified. All data is encrypted in transit and at rest. Employee anonymity is preserved by design — no individual can be identified from their responses. Managers see only aggregated team data, never individual attribution. Enzo is configured with access controls set by your organization, and every arc respects those permissions by default. We can walk you through the security architecture in detail before you sign.",
  },
  {
    question: "What does implementation actually look like?",
    answer:
      "Faster than you'd expect. Enculture connects to your HRIS to load the org structure. Enzo is configured with your values, tone, and arc design. Your first arc launches within days. There is no lengthy survey design phase — the arcs are built on a science-backed framework that we tune to your organization, not built from scratch each time. Your team gets onboarded. You get your first data. Then you decide where to go deeper.",
  },
  {
    question: "We already have a tool. Why switch?",
    answer:
      "Ask yourself this: has your current tool moved your Culture Health Index in the last 12 months? Have your action completion rates improved? Do your managers actually log into the platform and use the insights? If not — you don't have a culture intelligence tool. You have a survey subscription. Switching is a decision for you to make with clear eyes. We offer a free Culture Health Check so you can see what Enculture finds before committing to anything.",
  },
];

export default function ForCHROsPage() {
  return (
    <>
      <FAQSchema items={FAQ_ITEMS} />

      <SectionHero
        eyebrow="For CHROs"
        title={
          <>
            Culture is the last advantage that <span className="hl-t">can&apos;t be copied</span>.
            Right now, you&apos;re <span className="hl-p">measuring it once a year</span>.
          </>
        }
        lede="Your board is asking the right question. The problem isn't the question — it's the instrument you've been given to answer it. There is a better way to run this."
        ctas={[
          { text: "Book a demo", href: "/demo", variant: "primary" },
          { text: "Take the free culture health check", href: "https://go.enculture.ai", variant: "ghost" },
        ]}
        visual={<HeroVisual />}
      />

      {/* THE NEW COMPETITIVE REALITY */}
      <section className="section-white">
        <div className="wrap">
          <RevealOnScroll>
            <Eyebrow text="The new competitive reality" />
            <h2>
              The CEO of a <span className="hl-t">$61 billion company</span> spends 40% of his
              time on one thing.
            </h2>
            <p className="lede">
              Dario Amodei — co-founder of Anthropic, at the centre of the most competitive
              technology race in history — doesn&apos;t spend that time on the model. He spends it
              on culture. Because in his view, that is what wins the race.
            </p>
          </RevealOnScroll>

          <RevealOnScroll className="my-10 max-w-[700px]">
            <QuoteCard
              quote="A third, maybe 40%, of his time goes to one thing: making sure the culture of Anthropic is good."
              name="Dario Amodei"
              title="Co-founder & CEO, Anthropic — as reported by Fortune, 2026"
            />
          </RevealOnScroll>

          <RevealOnScroll className="grid-3">
            <AccentCard icon="01" title="Technology is replicable">
              Models, tools, and capital are available to every competitor. An advantage built on
              technology alone erodes quarter by quarter.
            </AccentCard>
            <AccentCard icon="02" title="Strategy is visible" accent="purple">
              Competitors can see your moves and copy them. Strategies win or die in execution.
              The edge is in how your people execute — not what the strategy says.
            </AccentCard>
            <AccentCard icon="03" title="Culture compounds">
              How your people align, decide, and behave together can&apos;t be copied or bought.
              It&apos;s the one asset that gets stronger the longer you build it.
            </AccentCard>
          </RevealOnScroll>

          <RevealOnScroll className="mt-8">
            <Callout variant="purple">
              If culture is the competitive edge, it deserves the same management discipline as
              any other business-critical asset. In most organizations, it still runs on
              assumptions.
            </Callout>
          </RevealOnScroll>
        </div>
      </section>

      {/* THE STATUS QUO */}
      <section>
        <div className="wrap">
          <RevealOnScroll>
            <Eyebrow text="The status quo" variant="purple" />
            <h2>
              Your revenue dashboard updates daily. Your share price moves by the second. Why is{" "}
              <span className="hl-p">culture</span> — the thing that produces both — measured{" "}
              <span className="hl-t">once a year</span>?
            </h2>
            <p className="lede">
              You&apos;re not failing at culture. You were never given the right instrument to
              manage it. A once-a-year survey is a photograph of a moving object. By the time the
              deck is presented, the moment has passed.
            </p>
          </RevealOnScroll>

          <RevealOnScroll className="timeline-visual mt-10">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              <div>
                <div className="timeline-label old">Periodic — the old way</div>
                <div className="timeline-bar">
                  <div className="fill-old" />
                </div>
                <p className="timeline-note">
                  <strong>One week of listening.</strong> Twelve months of silence. By Q3, your
                  Q1 data is archaeology.
                </p>
              </div>
              <div>
                <div className="timeline-label new">Perpetual — the Enculture way</div>
                <div className="timeline-bar">
                  <div className="fill-new" />
                </div>
                <p className="timeline-note">
                  <strong>A live signal, every day.</strong> Culture intelligence that&apos;s
                  never more than days old — like your business dashboard should be.
                </p>
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll className="from-to-grid mt-6">
            <FromToRow from="Annual survey" to="Perpetual listening arcs" />
            <FromToRow from="Forms & questionnaires" to="Conversational AI arcs" />
            <FromToRow from="Lagging indicators" to="Leading culture signals" />
            <FromToRow from="Reports that sit unread" to="Actions with owners & deadlines" />
          </RevealOnScroll>
        </div>
      </section>

      {/* WHAT CHANGES */}
      <section className="section-white">
        <div className="wrap">
          <RevealOnScroll>
            <Eyebrow text="What changes" />
            <h2>
              Intelligence you can take to the table — <span className="hl-t">on Monday morning</span>.
            </h2>
            <p className="lede">
              Not a survey with a prettier dashboard. A culture intelligence platform built in
              the age of AI — designed to close the loop from signal to boardroom proof.
            </p>
          </RevealOnScroll>

          <RevealOnScroll className="grid-3 mt-10">
            <AccentCard icon={<ArrowRight size={24} strokeWidth={2.5} />} title="Decision-grade, not a data dump">
              A single Culture Health Index — board-room ready. One clear number, three
              supporting scores. The critical findings, risks, and next actions surfaced by AI —
              so you walk in knowing exactly where to focus.
            </AccentCard>
            <AccentCard icon={<Target size={24} strokeWidth={2.5} />} title="Your first board-ready read in 30 days" accent="purple">
              Most platforms take months to produce anything meaningful. Enculture&apos;s
              conversational arcs start collecting signal from day one. By your first month, you
              have data — not a setup backlog.
            </AccentCard>
            <AccentCard icon={<CheckCircle2 size={24} strokeWidth={2.5} />} title="From signal to owned, tracked action">
              Every insight that matters becomes an action — with an owner, a deadline, and a
              progress status. Leadership sees what was created, completed, delayed. The loop
              closes. Feedback never ends as a report.
            </AccentCard>
          </RevealOnScroll>

          <RevealOnScroll className="mt-8">
            <Callout variant="teal">
              In practice: &ldquo;Leadership Trust&rdquo; scores low in one business unit → an
              action is created, assigned to that leader with a due date, tracked to closure.
              Employees see their feedback acted on — not filed away.
            </Callout>
          </RevealOnScroll>
        </div>
      </section>

      {/* RUN THE LOOP */}
      <NightSection>
        <RevealOnScroll>
          <Eyebrow text="The full loop" />
          <h2>Run the loop from your seat.</h2>
          <p className="lede">
            Most platforms hand you a score and wish you luck. Enculture closes the gap between
            the signal and the outcome — with you holding the thread the whole way through.
          </p>
        </RevealOnScroll>

        <RevealOnScroll className="loop-row mt-10">
          <div className="step">
            <h3>Collect</h3>
            <p>
              Enzo runs conversational arcs with every employee — pulse, alignment, deep culture,
              and milestone moments. Not forms. Conversations that people actually complete.
            </p>
          </div>
          <div className="step">
            <h3>AI Insights</h3>
            <p>
              AI surfaces critical findings, risks, growth opportunities, and themes —
              automatically. What&apos;s happening, why it matters, where to focus. In plain
              language.
            </p>
          </div>
          <div className="step">
            <h3>Ask Enzo</h3>
            <p>
              Explore insights conversationally. Ask Enzo why a team&apos;s score dropped,
              what&apos;s driving alignment risk, or what two actions would move the index most.
              It knows the full context.
            </p>
          </div>
          <div className="step">
            <h3>Action Centre</h3>
            <p>
              Insights become action items — with owners, priorities, and due dates. Assign to
              HR, managers, or business leaders. Track progress to visible closure.
            </p>
          </div>
          <div className="step payoff">
            <h3>The Index moves</h3>
            <p>
              Next cycle&apos;s scores reflect what changed. Leaders see closure rates. The loop
              repeats. Culture becomes a leading indicator — not a lagging surprise.
            </p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll className="card mt-10">
          <div className="mid-cta-eyebrow">The closed loop in one sentence</div>
          <p className="font-display text-[1.1rem] font-semibold leading-snug text-on-night">
            AI Insights tell you <span className="text-bright-teal">what&apos;s happening</span>.
            Enzo explains <span className="text-bright-purple">what it means</span>. Action
            Centre makes sure{" "}
            <span className="text-bright-teal">something is actually done about it</span> —
            measurably.
          </p>
        </RevealOnScroll>
      </NightSection>

      {/* VISIBILITY BY DESIGN */}
      <section className="section-white">
        <div className="wrap">
          <RevealOnScroll>
            <Eyebrow text="Visibility by design" />
            <h2>
              See everything. <span className="hl-p">Without breaking trust.</span>
            </h2>
            <p className="lede">
              Every person in the organization gets the right view — not too little to act on,
              not so much that it breaks confidentiality. One platform, three lenses, designed
              from the ground up for organizational reality.
            </p>
          </RevealOnScroll>

          <RevealOnScroll className="visibility-grid mt-10">
            <div className="vis-card">
              <div className="vis-tag chro">CHRO &amp; HR</div>
              <h3>Organization-wide intelligence</h3>
              <p>
                The full Culture Health Index. Every team&apos;s risk profile. Trends across
                business units, demographics, and time. The board-ready view you&apos;ve been
                missing — with the depth to back it up in any conversation.
              </p>
            </div>
            <div className="vis-card">
              <div className="vis-tag mgr">Managers</div>
              <h3>Their team. Nothing more.</h3>
              <p>
                Managers see only their direct team&apos;s culture data — in plain language, with
                specific nudges on what to do next. No cross-team comparisons they shouldn&apos;t
                have. No information that erodes employee trust.
              </p>
            </div>
            <div className="vis-card">
              <div className="vis-tag emp">Employees</div>
              <h3>Their voice. Visibly heard.</h3>
              <p>
                Employees stay anonymous by design. They see that their feedback has been
                received and acted on — without needing to know who said what. Trust built
                through evidence, not promises.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* PROOF */}
      <NightSection>
        <RevealOnScroll>
          <Eyebrow text="Movement, not scores" />
          <h2>The questions get answered. And the Index moves.</h2>
          <p className="lede">
            Culture becomes a leading indicator you can manage. It moves ahead of retention,
            execution, and performance — giving you time to act, not react.
          </p>
        </RevealOnScroll>

        <RevealOnScroll className="stat-row mt-10">
          <StatBox
            number="+13 pts"
            label="Culture Health Index"
            description="Average CHI improvement in organizations running Enculture for two or more quarters"
          />
          <StatBox
            number="78%"
            label="Action completion rate"
            description="Of culture action items created in Enculture are completed — versus the industry average of under 30% for survey-derived actions"
          />
          <StatBox
            number="64%"
            label="Reduction in attrition by-surprise"
            description="Leaders who manage with live culture signals report far fewer retention surprises — because they see the signal before the resignation letter"
          />
        </RevealOnScroll>

        <RevealOnScroll className="grid-2 mt-8">
          <QuoteCard
            quote="I stopped chasing response rates the day I started thinking of it as a conversation, not a survey."
            name="Chief of People"
            title="Mid-size technology company"
          />
          <QuoteCard
            quote="The analytics predicted exactly what we managed — needed visibility that we just didn't have before."
            name="Director of People"
            title="2,800-person organization"
          />
        </RevealOnScroll>

        <RevealOnScroll className="mt-10">
          <MidPageCTA
            eyebrow="See it in your organization"
            question="What would Enculture surface in your boardroom data in 30 days?"
            ctaText="Book a demo"
            ctaHref="/demo"
          />
        </RevealOnScroll>
      </NightSection>

      {/* BUILT DIFFERENT */}
      <section>
        <div className="wrap">
          <RevealOnScroll>
            <Eyebrow text="Built different" />
            <h2>
              Not a survey platform that added AI. A culture intelligence platform{" "}
              <span className="hl-t">built for the age of AI</span>.
            </h2>
            <p className="lede">
              Most platforms were designed for annual surveys and retrofitted with AI features.
              Enculture was built from the ground up for how organizations actually work now —
              conversational, continuous, and with 20 years of HR science embedded in every
              recommendation.
            </p>
          </RevealOnScroll>

          <RevealOnScroll className="grid-2 mt-10">
            <div className="card">
              <div className="mb-4 font-display text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-muted">
                What other platforms give you
              </div>
              <div className="flex flex-col gap-3">
                {[
                  {
                    title: "A score.",
                    body: "With a percentile rank and a 40-slide report. The score tells you something is wrong. It rarely tells you what to do.",
                  },
                  {
                    title: "A dashboard.",
                    body: "One week of data refreshed once a year. Pretty charts that don't change what happens next Monday.",
                  },
                  {
                    title: "AI-generated summaries.",
                    body: "Bolted on top of the same survey infrastructure. The model changes; the data collection doesn't.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3 rounded-[10px] border border-line bg-[#fafafa] p-3">
                    <div className="mt-2 size-2 flex-none rounded-full bg-muted/40" />
                    <div>
                      <strong className="font-display text-[0.93rem]">{item.title}</strong>{" "}
                      <span className="text-[0.93rem] text-muted">{item.body}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="card border-[1.5px] border-teal">
              <div className="mb-4 font-display text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-teal-deep">
                What Enculture gives you
              </div>
              <div className="flex flex-col gap-3">
                {[
                  {
                    title: "A living intelligence system.",
                    body: "Perpetual arcs that collect signal continuously. AI that identifies what changed and why. A closed action loop that proves it worked.",
                  },
                  {
                    title: "Conversational arcs, not questionnaires.",
                    body: "Enzo runs natural, two-way conversations. Response rates that reflect genuine engagement — not survey fatigue.",
                  },
                  {
                    title: "20 years of HR science, embedded.",
                    body: "The recommendations aren't generic AI output — they're grounded in behavioral science and two decades of real organizational practice. Built in, not bolted on.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3 rounded-[10px] border border-teal/20 bg-teal-tint p-3">
                    <div className="mt-2 size-2 flex-none rounded-full bg-teal" />
                    <div>
                      <strong className="font-display text-[0.93rem] text-teal-deep">{item.title}</strong>{" "}
                      <span className="text-[0.93rem] text-muted">{item.body}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-white">
        <div className="wrap">
          <RevealOnScroll>
            <Eyebrow text="Before you sign" variant="purple" />
            <h2>The questions a CHRO actually asks.</h2>
            <p className="lede">
              We&apos;d rather you bring the hard questions here than discover the answers later.
              So here they are — answered plainly.
            </p>
          </RevealOnScroll>

          <RevealOnScroll className="mt-10">
            <FAQ items={FAQ_ITEMS} />
          </RevealOnScroll>
        </div>
      </section>

      {/* SECURITY */}
      <section>
        <div className="wrap">
          <RevealOnScroll>
            <Eyebrow text="Security & compliance" />
            <h2>
              Enterprise-grade, <span className="hl-t">by default.</span>
            </h2>
            <p className="lede">
              Not a feature you unlock. Not an add-on you pay for. Security, anonymity, and
              compliance are built into the platform architecture — because we built for
              enterprises from day one.
            </p>
          </RevealOnScroll>

          <RevealOnScroll className="sec-grid mt-10">
            <div className="sec-card">
              <div className="sec-icon">
                <ShieldCheck size={20} />
              </div>
              <div>
                <h4>ISO 27001 Certified</h4>
                <p>
                  Independently certified information security management. Audit-ready
                  documentation available on request.
                </p>
              </div>
            </div>
            <div className="sec-card">
              <div className="sec-icon">
                <Lock size={20} />
              </div>
              <div>
                <h4>Data encrypted end-to-end</h4>
                <p>
                  All employee data encrypted in transit and at rest. Zero plaintext exposure at
                  any layer of the stack.
                </p>
              </div>
            </div>
            <div className="sec-card">
              <div className="sec-icon">
                <UserX size={20} />
              </div>
              <div>
                <h4>Anonymity by design</h4>
                <p>
                  Employee responses are structurally anonymised — not promised to be. No manager
                  can trace a response to an individual. Enforced at the architecture level.
                </p>
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll className="mt-8 flex flex-wrap gap-10">
            <div className="flex items-center gap-2">
              <span className="font-display font-bold text-teal">700+</span>
              <span className="text-sm text-muted">organizations</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-display font-bold text-purple">400,000+</span>
              <span className="text-sm text-muted">employees on platform</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-display font-bold text-teal">15+</span>
              <span className="text-sm text-muted">countries</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-display font-bold text-purple">20+</span>
              <span className="text-sm text-muted">years of HR science embedded</span>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <CTASection
        title="Bring one culture question. Leave with a plan."
        lede="Thirty minutes. We look at your current culture data — or the absence of it — and tell you exactly what Enculture would surface in your first 30 days. No deck. No pressure."
      />
    </>
  );
}
