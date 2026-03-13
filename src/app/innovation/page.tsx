import Link from "next/link";
import {
  ArrowRight,
  BrainCircuit,
  Eye,
  Layers3,
  Rocket,
  Sparkles,
  Workflow,
} from "lucide-react";

import { InnovationShowcase } from "@/components/innovation/innovation-showcase";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button-variants";
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
  },
  {
    title: "Prototype",
    description: "Shape the concept, interaction model, and technical feasibility slice.",
    icon: Sparkles,
  },
  {
    title: "Validate",
    description: "Show the right people something concrete before effort expands.",
    icon: BrainCircuit,
  },
  {
    title: "Decide",
    description: "Turn what worked into a roadmap, or stop the idea early with confidence.",
    icon: Rocket,
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

  return (
    <div className="flex flex-1 flex-col bg-background">
      <section className="relative overflow-hidden pb-16 pt-10 sm:pt-14">
        <div className="absolute inset-0 -z-20 bg-[linear-gradient(180deg,rgba(10,20,23,0.96),rgba(18,36,39,0.9))]" />
        <div className="absolute inset-0 -z-10 lab-grid opacity-70" />

        <div className="container grid gap-12 lg:grid-cols-[0.56fr,0.44fr] lg:items-start">
          <div className="max-w-[42rem] space-y-5 text-white">
            <Badge variant="soft" className="w-fit border-white/15 bg-white/10 text-white">
              <Sparkles className="h-3.5 w-3.5 text-white" />
              Innovation Lab
            </Badge>
            <h1 className="display-1 max-w-[13ch] text-white">
              A focused space for testing product ideas before they become expensive assumptions
            </h1>
            <p className="max-w-3xl body-lg text-white/74">
              The lab helps founders, product teams, and operators turn early ideas into something
              concrete enough to challenge. We use it for AI experiments, new product directions,
              and workflow-heavy concepts that need more than a deck.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className={cn(buttonVariants({ size: "xl" }), "bg-white text-slate-900 hover:bg-white/92")}
              >
                Book an Innovation Session
              </Link>
              <a
                href="mailto:innovation@spiretechnosoft.com?subject=Innovation%20Lab%20Inquiry"
                className={cn(
                  buttonVariants({ variant: "outline", size: "xl" }),
                  "border-white/25 bg-white/8 text-white hover:bg-white/14 hover:text-white"
                )}
              >
                Request Sprint Brochure
              </a>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="rounded-[2rem] border border-white/10 bg-white/6 px-6 py-6 backdrop-blur">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-white/64">
                Best used when
              </p>
              <div className="mt-4 space-y-4">
                {useCases.slice(0, 3).map((item) => (
                  <div key={item} className="flex items-start gap-3 border-t border-white/10 pt-4 first:border-t-0 first:pt-0">
                    <Workflow className="mt-0.5 h-4 w-4 text-white/74" />
                    <p className="text-sm text-white/70">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.7rem] border border-white/10 bg-white/6 px-5 py-5 backdrop-blur">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-white/64">
                  Sprint length
                </p>
                <p className="mt-3 text-3xl font-semibold text-white">2 weeks</p>
                <p className="mt-2 text-sm text-white/68">Tight enough to stay focused, long enough to produce evidence.</p>
              </div>
              <div className="rounded-[1.7rem] border border-white/10 bg-white/6 px-5 py-5 backdrop-blur">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-white/64">
                  Core output
                </p>
                <p className="mt-3 text-3xl font-semibold text-white">Decision clarity</p>
                <p className="mt-2 text-sm text-white/68">A sharper go / no-go call before the larger roadmap begins.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-14">
        <div className="grid gap-10 lg:grid-cols-[0.28fr,0.72fr] lg:items-start">
          <div className="space-y-4">
            <p className="eyebrow">Experiment formats</p>
            <h2 className="heading-2 text-foreground">Three common ways teams use the lab</h2>
            <p className="body-md text-muted-foreground">
              The lab is not a single template. We shape the sprint around the kind of uncertainty
              the team needs to reduce.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-[1.08fr,0.92fr]">
            <div className="rounded-[2.2rem] bg-white/70 p-6 shadow-soft backdrop-blur dark:bg-surface/76">
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
                  className="rounded-[1.8rem] border border-border/45 bg-white/60 px-5 py-5 shadow-soft backdrop-blur dark:bg-surface/72"
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

      <section className="container py-14">
        <div className="space-y-5">
          <p className="eyebrow">Selected concepts</p>
          <h2 className="heading-2 text-foreground">A few directions we prototype in the lab</h2>
        </div>
        <div className="mt-8">
          <InnovationShowcase items={showcaseItems} />
        </div>
      </section>

      <section className="container py-14">
        <div className="grid gap-10 border-y border-border/55 py-10 lg:grid-cols-[0.28fr,0.72fr] lg:items-start">
          <div className="space-y-4">
            <p className="eyebrow">How the sprint runs</p>
            <h2 className="heading-2 text-foreground">Fast enough to move, structured enough to decide</h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {processSteps.map((step, index) => (
              <div
                key={step.title}
                className={cn(
                  "rounded-[1.9rem] border border-border/45 bg-white/60 p-5 shadow-soft backdrop-blur dark:bg-surface/72",
                  index % 2 === 1 && "sm:translate-y-10"
                )}
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <step.icon className="h-4 w-4 icon-accent" />
                  </span>
                  <div>
                    <p className="text-base font-semibold text-foreground">{step.title}</p>
                    <p className="text-[0.68rem] uppercase tracking-[0.18em] text-primary">
                      Phase 0{index + 1}
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-14">
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
                  "rounded-[1.9rem] bg-white/70 p-5 shadow-soft backdrop-blur dark:bg-surface/76",
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

      <section className="container py-14">
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
                className="group grid gap-4 border-t border-border/55 py-5 sm:grid-cols-[0.18fr,0.64fr,0.18fr] sm:items-center"
              >
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-primary">
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

      <section className="container pb-28 pt-8">
        <div className="cta-band rounded-[2.6rem] px-8 py-16 text-center sm:px-10 sm:py-20">
          <div className="cta-inner mx-auto max-w-3xl space-y-8">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-white/60">
              Rapid validation
            </p>
            <h2 className="display-1 text-white">Plan a 2-week lab sprint</h2>
            <p className="body-lg text-white/78">
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
