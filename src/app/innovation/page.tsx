import Link from "next/link";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Sparkles, 
  Cpu, 
  BrainCircuit, 
  Layers, 
  Eye, 
  ArrowRight, 
  FileText, 
  BookOpen, 
  CheckCircle2,
  Workflow,
  Zap,
  Globe,
  MonitorPlay,
  Rocket,
  ShieldCheck
} from "lucide-react";

export const metadata = {
  title: "Innovation Lab | Spire Technosoft",
  description: "Where ideas evolve into intelligent products. We prototype AI, AR/VR, IoT, and generative technologies for business impact.",
};

const focusAreas = [
  {
    title: "Intelligence & Data Science",
    icon: BrainCircuit,
    description: "Predictive analytics and recommendation engines deployed responsibly for scale.",
    color: "primary",
    theme: "from-primary/20 via-primary/5 to-transparent"
  },
  {
    title: "Spatial Computing",
    icon: Eye,
    description: "Immersive training and decision aides combining telemetry with spatial computing.",
    color: "secondary",
    theme: "from-secondary/20 via-secondary/5 to-transparent"
  },
  {
    title: "Edge & IoT Systems",
    icon: Cpu,
    description: "Low-latency edge processing and data visualization for smart infrastructure.",
    color: "accent",
    theme: "from-accent/20 via-accent/5 to-transparent"
  },
  {
    title: "Intelligent Automation",
    icon: Sparkles,
    description: "Human-in-the-loop automation for documentation and high-stakes workflows.",
    color: "info",
    theme: "from-info/20 via-info/5 to-transparent"
  },
];

const demoVisuals = [
  {
    title: "Predictive Audit Assistant",
    caption: "Risk scoring and evidence capture with predictive readiness nudges.",
    icon: ShieldCheck
  },
  {
    title: "Operations Control Room",
    caption: "Live telemetry panels and GIS overlays for distributed field crews.",
    icon: Workflow
  },
  {
    title: "Personalization Engine",
    caption: "Dynamic journeys blending biometric signals and engagement triggers.",
    icon: Zap
  },
];

const processSteps = [
  { title: "Discover", description: "Identify pain points and define success metrics.", icon: Eye },
  { title: "Prototype", description: "Build proof-of-concepts using our accelerator kits.", icon: Layers },
  { title: "Validate", description: "Measure outcomes with pilot users and calibrate.", icon: CheckCircle2 },
  { title: "Scale", description: "Transition to production with security playbooks.", icon: Rocket },
];

const thinkingPieces = [
  {
    title: "Designing Responsible Copilots",
    label: "Thought Leadership",
    description: "Principles and guardrails for compliant enterprise AI copilots.",
    icon: BookOpen
  },
  {
    title: "Field Telemetry Playbook",
    label: "Strategy",
    description: "A 12-week sprint guide for industrial IoT reliability programs.",
    icon: FileText
  },
  {
    title: "AR/VR Readiness Checklist",
    label: "Guide",
    description: "Use-case selection and prototype scope for industrial operators.",
    icon: CheckCircle2
  },
];

export default function InnovationPage(): React.ReactElement {
  return (
    <div className="flex flex-1 flex-col">
      {/* Hero Section */}
      <section className="snap-section container animate-softFade">
        <div className="section-shell space-y-12 py-16 text-center">
          <div className="relative">
            {/* Background elements */}
            <div className="absolute -top-20 left-1/4 h-64 w-64 rounded-full bg-primary/20 blur-3xl opacity-60 pulse-glow" />
            <div className="absolute top-0 right-1/4 h-56 w-56 rounded-full bg-secondary/15 blur-3xl opacity-50 pulse-glow" style={{ animationDelay: '2s' }} />
            
            <div className="relative z-10 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 border border-primary/20">
                <Sparkles className="h-4 w-4 text-primary" />
                <p className="text-sm font-bold uppercase tracking-[0.4em] text-primary font-[var(--font-poppins)]">
                  Innovation Lab
                </p>
              </div>
              <h1 className="text-4xl font-extrabold md:text-6xl lg:text-7xl leading-tight">
                Where ideas evolve into <span className="text-gradient-elegant">intelligent products</span>
              </h1>
              <p className="mx-auto max-w-3xl text-lg text-muted-foreground md:text-xl leading-relaxed">
                We prototype high-stakes technologies for business impact. From initial proof-of-concept to production-grade 
                intelligence, we co-build the future with your teams.
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 pt-4">
            {focusAreas.map((area, index) => (
              <div 
                key={area.title} 
                className="interactive-card bg-white/95 dark:bg-card/40 p-10 group overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${area.theme} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="relative z-10 space-y-6">
                  <div className={`h-14 w-14 rounded-2xl bg-${area.color}/10 flex items-center justify-center text-${area.color} group-hover:bg-${area.color} group-hover:text-white transition-all duration-300 shadow-lg`}>
                    <area.icon className="h-7 w-7" />
                  </div>
                  <div className="space-y-2 text-left">
                    <h3 className="text-xl font-bold leading-tight group-hover:text-primary transition-colors">{area.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{area.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="snap-section container animate-softFade">
        <div className="section-shell space-y-12 py-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold md:text-5xl">Lab Artifacts</h2>
              <p className="text-muted-foreground text-lg max-w-2xl">
                Visual proof points and high-fidelity artifacts from our latest research engagements.
              </p>
            </div>
            <Link href="/portfolio" className="text-primary font-bold flex items-center gap-2 group underline-offset-8 hover:underline">
              Visit Full Portfolio <ArrowRight className="h-5 w-5 group-hover:translate-x-1" />
            </Link>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            {demoVisuals.map((visual, index) => (
              <div 
                key={visual.title} 
                className="interactive-card bg-white/95 dark:bg-card/40 p-8 space-y-10 group border-white/20"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="h-20 w-20 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center group-hover:scale-110 transition-all shadow-xl">
                  <visual.icon className="h-10 w-10 text-primary" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">{visual.title}</h3>
                  <p className="text-muted-foreground leading-relaxed italic border-l-2 border-primary/20 pl-4">"{visual.caption}"</p>
                </div>
                <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-primary">
                  <MonitorPlay className="h-4 w-4" /> View Interactive Demo
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration Roadmap */}
      <section className="snap-section container animate-softFade">
        <div className="section-shell bg-slate-900 text-white rounded-[40px] p-12 lg:p-24 space-y-20 overflow-hidden text-center relative">
          <div className="absolute top-0 left-0 p-12 text-white/5 pointer-events-none">
            <Layers className="w-96 h-96 -rotate-12" />
          </div>
          
          <div className="relative z-10 space-y-6">
            <h2 className="text-4xl font-extrabold md:text-6xl text-gradient-elegant inline-block">Moving Ideas to Production</h2>
            <p className="max-w-3xl mx-auto text-lg text-white/60">
              Our lab operating model handles the complexity of validation so your teams can focus on adoption.
            </p>
          </div>

          <div className="relative z-10 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <div key={step.title} className="interactive-card bg-white/5 border border-white/10 p-8 space-y-6 group text-left">
                <div className="h-14 w-14 rounded-2xl bg-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-lg">
                  <step.icon className="h-7 w-7" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-black uppercase tracking-widest text-primary/50">Phase 0{index + 1}</span>
                    <h3 className="text-xl font-bold">{step.title}</h3>
                  </div>
                  <p className="text-sm text-white/50 leading-relaxed font-medium">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Thinking Pieces */}
      <section className="snap-section container animate-softFade py-20">
        <div className="section-shell space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold md:text-5xl">Lab Insights</h2>
            <p className="text-muted-foreground text-lg">Thinking and playbooks to guide your digital transformation.</p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-3">
            {thinkingPieces.map((piece, index) => (
              <div 
                key={piece.title} 
                className="interactive-card bg-white/95 dark:bg-card/40 p-8 space-y-8 flex flex-col justify-between group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="text-[10px] uppercase font-black tracking-[0.2em] text-primary border-primary/20">
                      {piece.label}
                    </Badge>
                    <piece.icon className="h-6 w-6 text-muted-foreground/40 group-hover:text-primary transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold leading-tight group-hover:text-primary transition-colors">{piece.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{piece.description}</p>
                  </div>
                </div>
                <div className="pt-6 border-t border-muted/10">
                  <button className="w-full h-12 rounded-xl bg-primary/5 text-primary text-sm font-bold flex items-center justify-center gap-2 group-hover:bg-primary group-hover:text-white transition-all">
                    Download PDF <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="snap-section container animate-softFade pb-20">
        <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-br from-primary via-secondary to-accent px-8 py-20 text-center text-white shadow-2xl">
          <div className="relative z-10 max-w-4xl mx-auto space-y-10">
            <div className="space-y-4">
              <p className="text-xs font-black uppercase tracking-[0.5em] text-white/50">Rapid Validation</p>
              <h2 className="text-4xl font-extrabold md:text-6xl">Plan a 2-Week Lab Sprint</h2>
              <p className="text-xl text-white/80 leading-relaxed max-w-2xl mx-auto">
                Validate your high-stakes idea with a dedicated innovation pod, artifacts, and a clear production roadmap.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="h-16 rounded-full bg-white text-primary px-12 text-lg font-bold group shadow-2xl hover:bg-white/95">
                <a href="mailto:innovation@spiretechnosoft.com?subject=Lab%20Sprint%20Inquiry" className="flex items-center gap-2">
                  Request Sprint Brochure <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </div>
          </div>
          {/* Decorative Orbs */}
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-secondary/20 blur-3xl opacity-50" />
        </div>
      </section>
    </div>
  );
}


