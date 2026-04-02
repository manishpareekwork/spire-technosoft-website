import Link from "next/link";
import {
  ArrowRight,
  BrainCircuit,
  CheckCircle2,
  Eye,
  Layers3,
  MessageSquareQuote,
  Rocket,
  Sparkles,
  Workflow,
} from "lucide-react";

import { InnovationShowcase } from "@/components/innovation/innovation-showcase";
import { CountUpText } from "@/components/ui/count-up-text";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button-variants";
import { clientLogos, testimonials } from "@/data/social-proof";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "Innovation Lab | Spire Technosoft",
  description:
    "Prototype AI copilots, predictive dashboards, product experiments, and operational workflows in Spire Technosoft's Innovation Lab.",
};

const showcaseItems = [
  {
    title: "Predictive Audit Assistant",
    category: "AI Workflow",
    caption: "Risk scoring, evidence prompts, and reviewer summaries for complex operations.",
    detail:
      "Designed for teams that need faster review cycles without losing traceability, reviewer control, or confidence in the workflow.",
    image: "/images/manufacturing-dashboard.png",
    imageAlt: "Predictive audit assistant concept",
    metrics: ["45% faster closures", "Review summaries", "Traceable actions"],
    fit: [
      "When a workflow is slow but the team does not trust full automation yet",
      "When reviewers need decision support instead of another dashboard",
      "When leadership wants a proof before committing to a broader AI rollout",
    ],
    output:
      "A clickable concept, prompt strategy, workflow map, and a clearer recommendation on whether the idea should move into product delivery.",
  },
  {
    title: "Operations Control Room",
    category: "Industrial Intelligence",
    caption: "Live telemetry, route status, and asset health in one operational view.",
    detail:
      "Built to connect control-room decisions with field workflows, alerts, and asset context in a single operational stage.",
    image: "/images/energy-dashboard.png",
    imageAlt: "Operations control room concept",
    metrics: ["4,500+ assets tracked", "Alert workflows", "Field visibility"],
    fit: [
      "When operations data exists but teams still act from disconnected systems",
      "When a control room needs a clearer shared picture across functions",
      "When stakeholders need to see the interface before approving integrations",
    ],
    output:
      "A working dashboard direction, priority use cases, data requirements, and a sharper release path for the first build.",
  },
  {
    title: "Care Journey Personalization Engine",
    category: "Healthcare Product",
    caption: "Engagement signals, adherence nudges, and clinician-aware support flows.",
    detail:
      "A concept for healthcare and wellness teams that need privacy-aware personalization without turning the product into a black box.",
    image: "/images/healthcare-dashboard.png",
    imageAlt: "Healthcare personalization concept",
    metrics: ["Consent-aware design", "+50% engagement", "Human in loop"],
    fit: [
      "When personalization is attractive but the trust model still feels unclear",
      "When product teams need to balance empathy, privacy, and measurable outcomes",
      "When there is a strong idea but too many assumptions sitting inside it",
    ],
    output:
      "An interaction model, privacy-aware product concept, and a recommendation on what to validate first in a live pilot.",
  },
];

const processSteps = [
  {
    title: "Discover",
    description: "Frame the problem, user, and proof signal worth testing first.",
    icon: Eye,
    duration: "Days 1-2",
  },
  {
    title: "Prototype",
    description: "Shape the concept, interaction model, and technical feasibility slice.",
    icon: Sparkles,
    duration: "Days 3-6",
  },
  {
    title: "Validate",
    description: "Show the right people something concrete before effort expands.",
    icon: BrainCircuit,
    duration: "Days 7-9",
  },
  {
    title: "Decide",
    description: "Turn what worked into a roadmap, or stop the idea early with confidence.",
    icon: Rocket,
    duration: "Days 10-14",
  },
];

const sprintOutputs = [
  {
    title: "Clickable prototype",
    detail: "Enough fidelity for product, operations, or buyer feedback to be useful.",
  },
  {
    title: "Workflow map",
    detail: "A clearer view of the actions, approvals, and data moving underneath the interface.",
  },
  {
    title: "Feasibility notes",
    detail: "A practical read on what is simple, risky, or expensive before full build starts.",
  },
  {
    title: "Go / no-go recommendation",
    detail: "A decision-ready point of view, not just another presentation deck.",
  },
];

const experimentFormats = [
  {
    title: "AI feature exploration",
    detail:
      "Use the lab to test copilots, assisted search, summaries, predictions, and human-in-loop decisions before shipping them into a live product.",
    icon: BrainCircuit,
  },
  {
    title: "Workflow redesign",
    detail:
      "When a business process is too messy to explain in slides, we prototype the actual flow and pressure-test it with the people who live inside it.",
    icon: Workflow,
  },
  {
    title: "New product direction",
    detail:
      "For teams deciding between multiple ideas, the lab helps compare which concept deserves the first serious release.",
    icon: Layers3,
  },
];

const useCases = [
  "A founder has a strong product idea but wants a sharper first release.",
  "A product team needs to validate where AI actually helps instead of forcing it in.",
  "An operations-heavy workflow needs a better interface before engineering ramps up.",
  "Leadership wants a concrete direction before approving a larger roadmap.",
];

const heroSignals = [
  { value: "2 weeks", label: "Sprint length" },
  { value: "4 phases", label: "Decision cadence" },
  { value: "3 concepts", label: "Typical exploration width" },
];

const labInsights = [
  {
    title: "Designing Responsible Copilots",
    description: "Principles and guardrails for AI copilots that still feel useful and trustworthy.",
    href: "/downloads/thinking/responsible-copilots.pdf",
    label: "Whitepaper",
  },
  {
    title: "Predictive Dashboards Playbook",
    description: "How to turn telemetry into action instead of more interface noise.",
    href: "/downloads/thinking/predictive-dashboards-playbook.pdf",
    label: "Guide",
  },
  {
    title: "AR/VR POC Checklist",
    description: "How to scope a spatial prototype without overcommitting to the wrong idea.",
    href: "/downloads/thinking/ar-vr-poc-checklist.pdf",
    label: "Checklist",
  },
];

export default function InnovationPage(): React.ReactElement {
  const primaryFormat = experimentFormats[0];
  const secondaryFormats = experimentFormats.slice(1);
  const featuredTestimonials = testimonials.slice(0, 2);

  return (
    <div className="flex flex-1 flex-col bg-background">
      <section className="innovation-hero relative overflow-hidden pb-20 pt-10 sm:pt-16 sm:pb-24">
        <div className="innovation-mesh innovation-mesh-one" />
        <div className="innovation-mesh innovation-mesh-two" />
        <div className="innovation-mesh innovation-mesh-three" />
        <div className="innovation-grid pointer-events-none absolute inset-0 z-0 opacity-25" />
        <div className="innovation-noise pointer-events-none absolute inset-0 z-0 opacity-20" />

        <div className="relative z-10 container max-w-[1400px]">
          <div className="grid gap-12 lg:grid-cols-[0.58fr,0.42fr] lg:items-start">
            <div className="max-w-[46rem] space-y-6 text-slate-50">
              <Badge variant="soft" className="w-fit border-white/20 bg-white/10 text-slate-50">
                <Sparkles className="h-3.5 w-3.5 text-slate-100" />
                Innovation Lab
              </Badge>
              <div className="space-y-4">
                <p className="text-[0.8rem] font-semibold uppercase tracking-[0.08em] text-slate-300">
                  Rapid validation for AI, product, and workflow bets
                </p>
                <h1 className="innovation-display max-w-[17ch] sm:max-w-[15ch] lg:max-w-[14ch] text-slate-50">
                  Shape bold product ideas into something concrete, testable, and decision-ready
                </h1>
              </div>
              <p className="max-w-3xl text-[1.05rem] leading-8 text-slate-300">
                The lab gives founders, product teams, and operators a faster way to pressure-test
                ambitious concepts. Instead of debating assumptions in slides, we prototype the
                interface, workflow, and AI behavior that matter most.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className={cn(
                    buttonVariants({ size: "xl" }),
                    "innovation-button-primary relative overflow-hidden bg-gradient-brand text-white"
                  )}
                >
                  Book an Innovation Session
                </Link>
                <a
                  href="mailto:innovation@spiretechnosoft.com?subject=Innovation%20Lab%20Inquiry"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "xl" }),
                    "border-white/18 bg-white/8 text-white hover:bg-white/14 hover:text-white"
                  )}
                >
                  Request Sprint Brochure
                </a>
              </div>

              <div className="grid gap-3 pt-2 sm:grid-cols-3">
                {heroSignals.map((signal) => (
                  <div
                    key={signal.label}
                    className="rounded-[1rem] border border-white/18 bg-slate-950/55 px-4 py-4 backdrop-blur-sm"
                  >
                    <p className="text-[0.72rem] font-semibold uppercase tracking-[0.08em] text-slate-400">
                      {signal.label}
                    </p>
                    <p className="mt-2 text-2xl font-semibold text-white">{signal.value}</p>
                  </div>
                ))}
              </div>

              <div className="innovation-logo-strip mt-2 flex flex-wrap items-center gap-3 text-slate-300">
                <span className="text-[0.74rem] font-semibold uppercase tracking-[0.08em] text-slate-400">
                  Trusted across
                </span>
                {clientLogos.slice(0, 4).map((client) => (
                  <span
                    key={client.name}
                    className="rounded-full border border-white/12 bg-white/[0.07] px-4 py-2 text-sm backdrop-blur"
                  >
                    {client.name}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid gap-4 lg:pt-10">
              <div className="innovation-panel-dark relative overflow-hidden rounded-[1.15rem] px-6 py-6">
                <div className="absolute right-[-8%] top-[-8%] h-40 w-40 rounded-full bg-cyan-400/18 blur-3xl" />
                <div className="absolute bottom-[-12%] left-[10%] h-44 w-44 rounded-full bg-blue-500/18 blur-3xl" />
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.08em] text-slate-400">
                  Best used when
                </p>
                <div className="mt-5 space-y-4">
                  {useCases.slice(0, 3).map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 border-t border-white/10 pt-4 first:border-t-0 first:pt-0"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-cyan-300" />
                      <p className="text-sm leading-7 text-slate-300">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="innovation-float-card innovation-panel-dark px-5 py-5">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.08em] text-slate-400">
                    Concepts explored
                  </p>
                  <CountUpText value="12+" className="mt-3 block text-4xl font-semibold text-white" />
                  <p className="mt-2 text-sm leading-7 text-slate-300">
                    AI copilots, control rooms, dashboards, workflow assistants, and product
                    experiments.
                  </p>
                </div>
                <div className="innovation-float-card innovation-panel-dark px-5 py-5 sm:translate-y-6">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.08em] text-slate-400">
                    Core output
                  </p>
                  <p className="mt-3 text-3xl font-semibold text-white">Decision clarity</p>
                  <p className="mt-2 text-sm leading-7 text-slate-300">
                    A sharper go or no-go call before the broader roadmap absorbs time and budget.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container max-w-[1400px] py-20">
        <div className="grid gap-10 lg:grid-cols-[0.32fr,0.68fr] lg:items-start">
          <div className="space-y-4">
            <p className="eyebrow">Experiment formats</p>
            <h2 className="heading-2 text-foreground">Three common ways teams use the lab</h2>
            <p className="body-md text-muted-foreground">
              The lab is not a single template. We shape the sprint around the kind of uncertainty
              the team needs to reduce.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-[1.08fr,0.92fr]">
            <div className="innovation-panel rounded-[1.1rem] p-6">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <primaryFormat.icon className="h-4 w-4 icon-accent" />
                </span>
                <p className="text-lg font-semibold text-foreground">{primaryFormat.title}</p>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">{primaryFormat.detail}</p>
            </div>

            <div className="grid gap-4">
              {secondaryFormats.map((item) => (
                <div
                  key={item.title}
                  className="innovation-panel rounded-[1rem] px-5 py-5"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10">
                      <item.icon className="h-4 w-4 icon-accent" />
                    </span>
                    <p className="text-base font-semibold text-foreground">{item.title}</p>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container max-w-[1400px] py-20">
        <div className="space-y-5">
          <p className="eyebrow">Selected concepts</p>
          <h2 className="heading-2 text-foreground">A few directions we prototype in the lab</h2>
        </div>
        <div className="mt-10">
          <InnovationShowcase items={showcaseItems} />
        </div>
      </section>

      <section className="container max-w-[1400px] py-20">
        <div className="grid gap-12 border-y border-border/55 py-14 lg:grid-cols-[0.28fr,0.72fr] lg:items-start">
          <div className="space-y-4">
            <p className="eyebrow">How the sprint runs</p>
            <h2 className="heading-2 text-foreground">Fast enough to move, structured enough to decide</h2>
          </div>

          <div className="innovation-timeline grid gap-5 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <div
                key={step.title}
                className="innovation-step-card relative rounded-[1rem] px-5 py-6"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <step.icon className="h-4 w-4 icon-accent" />
                  </span>
                  <div>
                    <p className="text-base font-semibold text-foreground">{step.title}</p>
                    <p className="text-[0.68rem] uppercase tracking-[0.08em] text-primary">
                      Phase 0{index + 1}
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-[0.72rem] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
                  {step.duration}
                </p>
                <p className="mt-4 text-sm text-muted-foreground">{step.description}</p>
                <div className="mt-5 h-px w-full bg-[linear-gradient(90deg,hsla(var(--primary),0.65),hsla(var(--accent),0.08))]" />
                {index < processSteps.length - 1 ? (
                  <span className="innovation-step-connector hidden lg:block" aria-hidden="true" />
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container max-w-[1400px] py-20">
        <div className="grid gap-10 lg:grid-cols-[0.36fr,0.64fr] lg:items-start">
          <div className="space-y-4">
            <p className="eyebrow">What comes out</p>
            <h2 className="heading-2 text-foreground">You leave with more than a concept deck</h2>
            <p className="body-md text-muted-foreground">
              The lab should sharpen a decision, not decorate an idea. These are the outputs we
              typically hand back at the end of a sprint.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {sprintOutputs.map((item, index) => (
              <div
                key={item.title}
                className={cn(
                  "innovation-panel rounded-[1rem] p-5",
                  index === 0 && "sm:col-span-2"
                )}
              >
                <p className="text-lg font-semibold text-foreground">{item.title}</p>
                <p className="mt-3 text-sm text-muted-foreground">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container max-w-[1400px] py-20">
        <div className="grid gap-10 lg:grid-cols-[0.28fr,0.72fr] lg:items-start">
          <div className="space-y-4">
            <p className="eyebrow">Proof from delivery</p>
            <h2 className="heading-2 text-foreground">The lab works best when strategy becomes something people can react to</h2>
            <p className="body-md text-muted-foreground">
              These are the kinds of responses we aim for: less ambiguity, better alignment, and a
              clearer first move.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {featuredTestimonials.map((item) => (
              <div key={item.quote} className="innovation-panel rounded-[1rem] p-6">
                <div className="flex items-center gap-3 text-primary">
                  <MessageSquareQuote className="h-5 w-5" />
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.08em] text-primary">
                    Client signal
                  </p>
                </div>
                <p className="mt-4 text-base leading-8 text-foreground/88">"{item.quote}"</p>
                <div className="mt-6 border-t border-border/60 pt-4">
                  <p className="text-sm font-semibold text-foreground">{item.name}</p>
                  <p className="text-sm text-muted-foreground">{item.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container max-w-[1400px] py-20">
        <div className="grid gap-10 lg:grid-cols-[0.28fr,0.72fr] lg:items-start">
          <div className="space-y-4">
            <p className="eyebrow">Lab reading</p>
            <h2 className="heading-2 text-foreground">Supporting material for teams exploring new bets</h2>
          </div>

          <div className="space-y-2">
            {labInsights.map((piece) => (
              <a
                key={piece.title}
                href={piece.href}
                download
                className="group innovation-resource-row grid gap-4 border-t border-border/55 py-5 sm:grid-cols-[0.18fr,0.64fr,0.18fr] sm:items-center"
              >
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.08em] text-primary">
                  {piece.label}
                </p>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-foreground">{piece.title}</h3>
                  <p className="text-sm text-muted-foreground">{piece.description}</p>
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-foreground">
                  Open
                  <ArrowRight className="h-4 w-4 icon-accent transition-transform group-hover:translate-x-1" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="container max-w-[1400px] pb-28 pt-10">
        <div className="cta-band rounded-[1.4rem] px-8 py-16 text-center sm:px-10 sm:py-20">
          <div className="cta-inner mx-auto max-w-3xl space-y-8">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.08em] text-slate-200">
              Rapid validation
            </p>
            <h2 className="display-1 text-white">Plan a 2-week lab sprint</h2>
            <p className="text-lg leading-relaxed text-slate-200">
              Use the lab when an idea needs evidence, direction, and a credible next move.
            </p>
            <div className="flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/contact"
                className={cn(buttonVariants({ size: "xl" }), "bg-white text-slate-900 hover:bg-white/92")}
              >
                Book an Innovation Session
              </Link>
              <Link
                href="/portfolio"
                className={cn(
                  buttonVariants({ variant: "outline", size: "xl" }),
                  "border-white/25 bg-white/8 text-white hover:bg-white/14 hover:text-white"
                )}
              >
                View Related Work
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
