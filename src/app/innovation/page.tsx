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
    category: "AI Compliance",
    caption: "Risk scoring, evidence prompts, and review summaries for audit-heavy programs.",
    detail:
      "Designed for teams that need faster audit cycles without losing traceability, reviewer control, or evidentiary rigor.",
    image: "/images/manufacturing-dashboard.png",
    imageAlt: "Predictive audit assistant concept",
    metrics: ["45% faster closures", "Audit-ready logs", "Reviewer summaries"],
  },
  {
    title: "Operations Control Room",
    category: "Industrial Intelligence",
    caption: "Live telemetry, route status, and asset health in one operational stage.",
    detail:
      "Built to connect control-room decisions with field workflows, alerts, and asset context in a single operational view.",
    image: "/images/energy-dashboard.png",
    imageAlt: "Operations control room concept",
    metrics: ["4,500+ assets tracked", "Alert workflows", "Field-ready visibility"],
  },
  {
    title: "Care Journey Personalization Engine",
    category: "Healthcare Product",
    caption: "Engagement signals, adherence nudges, and clinician-aware support flows.",
    detail:
      "A concept for healthcare and wellness teams that need privacy-aware personalization without turning the product into a black box.",
    image: "/images/healthcare-dashboard.png",
    imageAlt: "Healthcare personalization concept",
    metrics: ["Consent-aware design", "+50% engagement", "Human-in-loop"],
  },
];

const processSteps = [
  {
    title: "Discover",
    description: "Align the problem, users, operational constraints, and success metrics.",
    icon: Eye,
  },
  {
    title: "Prototype",
    description: "Create the interaction model, proof asset, and technical feasibility slice.",
    icon: Sparkles,
  },
  {
    title: "Validate",
    description: "Test with buyers, operators, and stakeholders before scaling effort.",
    icon: BrainCircuit,
  },
  {
    title: "Scale",
    description: "Translate validated concepts into an implementation roadmap and release plan.",
    icon: Rocket,
  },
];

const labInsights = [
  {
    title: "Designing Responsible Copilots",
    description: "Principles and guardrails for compliant enterprise AI copilots.",
    href: "/downloads/thinking/responsible-copilots.pdf",
    label: "Whitepaper",
  },
  {
    title: "Predictive Dashboards Playbook",
    description: "A practical guide to turning telemetry into decisions, not just visual noise.",
    href: "/downloads/thinking/predictive-dashboards-playbook.pdf",
    label: "Guide",
  },
  {
    title: "AR/VR POC Checklist",
    description: "How to scope a spatial prototype without overcommitting to the wrong use case.",
    href: "/downloads/thinking/ar-vr-poc-checklist.pdf",
    label: "Checklist",
  },
];

export default function InnovationPage(): React.ReactElement {
  return (
    <div className="flex flex-1 flex-col bg-background">
      <section className="relative overflow-hidden pb-16 pt-10 sm:pt-14">
        <div className="absolute inset-0 -z-20 bg-[linear-gradient(180deg,rgba(10,20,23,0.94),rgba(18,36,39,0.9))]" />
        <div className="absolute inset-0 -z-10 lab-grid opacity-70" />
        <div className="container space-y-10 text-white">
          <div className="max-w-4xl space-y-6">
            <Badge variant="soft" className="w-fit border-white/15 bg-white/10 text-white">
              <Sparkles className="h-3.5 w-3.5 text-white" />
              Innovation Lab
            </Badge>
            <h1 className="display-hero text-white">Prototype bold ideas before they become expensive bets</h1>
            <p className="body-lg max-w-3xl text-white/74">
              Validate AI copilots, predictive dashboards, immersive workflows, and operational
              intelligence concepts before committing to full product delivery.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className={cn(
                  buttonVariants({ size: "xl" }),
                  "bg-white text-slate-900 hover:bg-white/92"
                )}
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
        </div>
      </section>

      <section className="container -mt-6 pb-12">
        <InnovationShowcase items={showcaseItems} />
      </section>

      <section className="section-shell pt-4">
        <div className="container">
          <div className="rounded-[2.4rem] section-contrast px-6 py-7">
            <div className="grid gap-4 lg:grid-cols-4">
              {processSteps.map((step, index) => (
                <div key={step.title} className="space-y-4 px-2 py-2">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/12">
                      <step.icon className="h-4 w-4 icon-accent" />
                    </span>
                    <span className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      Phase 0{index + 1}
                    </span>
                  </div>
                  <div className="space-y-2">
                    <p className="text-lg font-semibold text-foreground">{step.title}</p>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell pt-8">
        <div className="container grid gap-8 lg:grid-cols-[0.7fr,1.3fr]">
          <div className="space-y-4">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-primary">
              Lab insights
            </p>
            <h2 className="heading-2 text-foreground">Playbooks and downloads for innovation teams</h2>
            <p className="body-md text-muted-foreground">
              These resources act as supporting material for lab conversations and concept reviews.
            </p>
          </div>

          <div className="space-y-4">
            {labInsights.map((piece) => (
              <a
                key={piece.title}
                href={piece.href}
                download
                className="group flex items-center justify-between rounded-[2rem] section-contrast px-5 py-5"
              >
                <div className="space-y-2">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-primary">
                    {piece.label}
                  </p>
                  <h3 className="text-xl font-semibold text-foreground">{piece.title}</h3>
                  <p className="text-sm text-muted-foreground">{piece.description}</p>
                </div>
                <ArrowRight className="h-5 w-5 shrink-0 icon-accent transition-transform group-hover:translate-x-1" />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="container pb-28 pt-10">
        <div className="cta-band rounded-[2.6rem] px-8 py-16 text-center sm:px-10 sm:py-20">
          <div className="cta-inner mx-auto max-w-3xl space-y-8">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-white/60">
              Rapid validation
            </p>
            <h2 className="display-1 text-white">Plan a 2-week lab sprint</h2>
            <p className="body-lg text-white/78">
              Validate an AI workflow, dashboard concept, or immersive prototype before you commit
              to full-scale product delivery.
            </p>
            <div className="flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/contact"
                className={cn(
                  buttonVariants({ size: "xl" }),
                  "bg-white text-slate-900 hover:bg-white/92"
                )}
              >
                Explore Our Lab
              </Link>
              <Link
                href="/portfolio"
                className={cn(buttonVariants({ variant: "outline", size: "xl" }), "border-white/25 bg-white/8 text-white hover:bg-white/14 hover:text-white")}
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
