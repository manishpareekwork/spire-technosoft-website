import Link from "next/link";
import { ArrowRight, BrainCircuit, Eye, Rocket, Sparkles, Workflow } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button-variants";
import { InnovationShowcase } from "@/components/innovation/innovation-showcase";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "Innovation Lab | Spire Technosoft",
  description:
    "Prototype AI copilots, predictive dashboards, immersive workflows, and operational intelligence in Spire Technosoft's Innovation Lab.",
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
  },
];

const processSteps = [
  {
    title: "Discover",
    description: "Align the problem, users, and success signal worth testing first.",
    icon: Eye,
  },
  {
    title: "Prototype",
    description: "Shape the interaction, proof asset, and feasibility slice quickly.",
    icon: Sparkles,
  },
  {
    title: "Validate",
    description: "Put it in front of buyers, operators, or internal stakeholders early.",
    icon: BrainCircuit,
  },
  {
    title: "Scale",
    description: "Turn the validated concept into a credible product roadmap.",
    icon: Rocket,
  },
];

const labInsights = [
  {
    title: "Designing Responsible Copilots",
    description: "Principles and guardrails for AI copilots that still feel usable and trustworthy.",
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
  return (
    <div className="flex flex-1 flex-col bg-background">
      <section className="relative overflow-hidden pb-16 pt-10 sm:pt-14">
        <div className="absolute inset-0 -z-20 bg-[linear-gradient(180deg,rgba(10,20,23,0.96),rgba(18,36,39,0.9))]" />
        <div className="absolute inset-0 -z-10 lab-grid opacity-70" />

        <div className="container grid gap-12 lg:grid-cols-[0.58fr,0.42fr] lg:items-start">
          <div className="space-y-6 text-white">
            <Badge variant="soft" className="w-fit border-white/15 bg-white/10 text-white">
              <Sparkles className="h-3.5 w-3.5 text-white" />
              Innovation Lab
            </Badge>
            <h1 className="display-hero text-white">A place to test strong ideas before they become expensive commitments</h1>
            <p className="max-w-3xl body-lg text-white/74">
              We use the lab to prototype AI workflows, new dashboard directions, and product
              concepts that need to be seen, used, and challenged before full delivery begins.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className={cn(buttonVariants({ size: "xl" }), "bg-white text-slate-900 hover:bg-white/92")}
              >
                Explore Our Lab
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

          <div className="space-y-4 rounded-[2rem] border border-white/10 bg-white/6 px-6 py-6 backdrop-blur">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-white/64">
              What usually comes into the lab
            </p>
            <div className="space-y-4">
              {[
                "A product idea that feels promising but still fuzzy",
                "An AI concept that needs a safer, more practical use case",
                "A workflow that is too complex to validate with slides alone",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 border-t border-white/10 pt-4 first:border-t-0 first:pt-0">
                  <Workflow className="mt-0.5 h-4 w-4 text-white/74" />
                  <p className="text-sm text-white/70">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container py-14">
        <InnovationShowcase items={showcaseItems} />
      </section>

      <section className="container py-14">
        <div className="grid gap-10 border-y border-border/55 py-10 lg:grid-cols-[0.28fr,0.72fr] lg:items-start">
          <div className="space-y-4">
            <p className="eyebrow">How the lab moves</p>
            <h2 className="heading-2 text-foreground">A fast loop from rough idea to usable signal</h2>
          </div>

          <div className="space-y-2">
            {processSteps.map((step, index) => (
              <div
                key={step.title}
                className="grid gap-4 border-t border-border/55 py-5 sm:grid-cols-[0.12fr,0.28fr,0.6fr]"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <step.icon className="h-4 w-4 icon-accent" />
                </div>
                <div>
                  <p className="text-base font-semibold text-foreground">{step.title}</p>
                  <p className="mt-1 text-[0.68rem] uppercase tracking-[0.18em] text-primary">
                    Phase 0{index + 1}
                  </p>
                </div>
                <p className="text-sm text-muted-foreground">{step.description}</p>
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
              Use the lab when a concept needs evidence, not more internal debate.
            </p>
            <div className="flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/contact"
                className={cn(buttonVariants({ size: "xl" }), "bg-white text-slate-900 hover:bg-white/92")}
              >
                Explore Our Lab
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
