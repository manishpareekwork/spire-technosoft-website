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
    color: "primary"
  },
  {
    title: "Spatial Computing",
    icon: Eye,
    description: "Immersive training and decision aides combining telemetry with spatial computing.",
    color: "secondary"
  },
  {
    title: "Edge & IoT Systems",
    icon: Cpu,
    description: "Low-latency edge processing and data visualization for smart infrastructure.",
    color: "accent"
  },
  {
    title: "Intelligent Automation",
    icon: Sparkles,
    description: "Human-in-the-loop automation for documentation and high-stakes workflows.",
    color: "info"
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
    <div className="flex flex-1 flex-col bg-background">
      {/* Hero Section */}
      <section className="container animate-softFade py-20">
        <div className="section-shell w-full space-y-12 py-10 text-center border-none shadow-none bg-transparent">
          <div className="relative">
            <div className="relative z-10 space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2">
                <Sparkles className="h-4 w-4 icon-accent" />
                <p className="text-sm font-bold uppercase tracking-[0.4em] text-primary">
                  Innovation Lab
                </p>
              </div>
              <h1 className="text-5xl font-extrabold md:text-7xl lg:text-8xl leading-tight">
                Where ideas evolve into <span className="text-secondary">intelligent products</span>
              </h1>
              <p className="mx-auto max-w-3xl text-xl text-muted-foreground md:text-2xl leading-relaxed">
                We prototype high-stakes technologies for business impact. From initial proof-of-concept to production-grade 
                intelligence, we co-build the future with your teams.
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 pt-8">
            {focusAreas.map((area) => (
              <div 
                key={area.title} 
                className="interactive-card p-10 group overflow-hidden"
              >
                <div className="relative z-10 space-y-6 text-left">
                  <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                    <area.icon className="h-7 w-7 icon-accent" />
                  </div>
                  <div className="space-y-2">
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
      <section className="container animate-softFade py-20">
        <div className="space-y-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 px-4">
            <div className="space-y-4 text-left">
              <h2 className="text-4xl font-extrabold md:text-6xl text-secondary">Lab Artifacts</h2>
              <p className="text-muted-foreground text-xl max-w-2xl leading-relaxed">
                Visual proof points and high-fidelity artifacts from our latest research engagements.
              </p>
            </div>
            <Link href="/portfolio" className="text-primary font-bold flex items-center gap-2 group underline-offset-8 hover:underline">
              Visit Full Portfolio <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1 icon-accent" />
            </Link>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            {demoVisuals.map((visual) => (
              <div 
                key={visual.title} 
                className="interactive-card p-10 space-y-10 group text-left"
              >
                <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                  <visual.icon className="h-10 w-10 icon-accent" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold group-hover:text-primary transition-colors text-foreground">{visual.title}</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed italic border-l-4 border-primary/20 pl-6">"{visual.caption}"</p>
                </div>
                <div className="flex items-center gap-3 text-xs font-black uppercase tracking-widest text-primary pt-4">
                  <MonitorPlay className="h-5 w-5 icon-accent" /> Explore Interactive Blueprint
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration Roadmap */}
      <section className="container animate-softFade py-24">
        <div className="section-shell bg-white rounded-[3rem] p-12 lg:p-24 space-y-20 overflow-hidden text-center shadow-2xl">
          <div className="relative z-10 space-y-8">
            <h2 className="text-4xl font-extrabold md:text-7xl text-secondary">Moving Ideas to Production</h2>
            <p className="max-w-3xl mx-auto text-xl text-muted-foreground leading-relaxed">
              Our lab operating model handles the complexity of validation so your teams can focus on adoption.
            </p>
          </div>

          <div className="relative z-10 grid gap-8 md:grid-cols-2 lg:grid-cols-4 pt-10">
            {processSteps.map((step, index) => (
              <div key={step.title} className="interactive-card p-8 space-y-6 group text-left">
                <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                  <step.icon className="h-7 w-7 icon-accent" />
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-black uppercase tracking-widest text-primary">Phase 0{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed font-medium">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Thinking Pieces */}
      <section className="container animate-softFade py-32">
        <div className="space-y-16">
          <div className="space-y-4 px-4 text-left">
            <h2 className="text-4xl font-extrabold md:text-6xl text-secondary">Lab Insights</h2>
            <p className="text-muted-foreground text-xl leading-relaxed">Thinking and playbooks to guide your digital transformation.</p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            {thinkingPieces.map((piece) => (
              <div 
                key={piece.title} 
                className="interactive-card p-10 space-y-10 flex flex-col justify-between group text-left"
              >
                <div className="space-y-8">
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="text-[10px] uppercase font-black tracking-[0.2em] text-primary border-primary/20 px-3 py-1">
                      {piece.label}
                    </Badge>
                    <piece.icon className="h-6 w-6 icon-muted group-hover:text-primary transition-colors" />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold leading-tight text-foreground group-hover:text-primary transition-colors">{piece.title}</h3>
                    <p className="text-base text-muted-foreground leading-relaxed">{piece.description}</p>
                  </div>
                </div>
                <div className="pt-8 border-t border-muted/10">
                  <button className="w-full h-14 rounded-xl bg-primary/5 text-primary text-sm font-bold flex items-center justify-center gap-3 group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                    Access Playbook <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1 icon-accent group-hover:text-white" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="container animate-softFade pb-32">
        <div className="cta-band rounded-[3rem] px-8 py-24 text-center shadow-float">
          <div className="cta-inner max-w-4xl mx-auto space-y-12">
            <div className="space-y-6">
              <p className="text-xs font-black uppercase tracking-[0.5em] text-white/50">Rapid Validation</p>
              <h2 className="text-4xl font-extrabold md:text-7xl">Plan a 2-Week Lab Sprint</h2>
              <p className="text-2xl text-white/80 leading-relaxed max-w-2xl mx-auto">
                Validate your high-stakes idea with a dedicated innovation pod, artifacts, and a clear production roadmap.
              </p>
            </div>
            <div className="flex justify-center pt-4">
              <Button asChild size="lg" className="h-16 rounded-full bg-white text-primary px-16 text-xl font-bold group shadow-2xl hover:bg-white/95 border-none">
                <a href="mailto:innovation@spiretechnosoft.com?subject=Lab%20Sprint%20Inquiry" className="flex items-center gap-3">
                  Request Sprint Brochure <ArrowRight className="h-6 w-6 transition-transform group-hover:translate-x-1 icon-accent" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
