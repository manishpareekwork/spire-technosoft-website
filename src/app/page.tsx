import Link from "next/link";
import Image from "next/image";
import { 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Lock, 
  FileCheck, 
  Layers, 
  Zap, 
  Activity, 
  Globe,
  Compass,
  Workflow,
  MousePointer2,
  Cpu
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { differentiators } from "@/data/differentiators";

const outcomeTeasers = [
  {
    title: "Regulatory Audit Cloud",
    metric: "45% faster closures",
    description: "Multi-country inspection suite with offline capture and predictive readiness.",
    link: "/portfolio/enterprise-audit-compliance-platform",
    icon: ShieldCheck,
    color: "primary"
  },
  {
    title: "Wellness Super App",
    metric: "+50% engagement",
    description: "Mobile experience covering onboarding, community, and personalization.",
    link: "/portfolio/enterprise-fitness-wellness-platform",
    icon: Activity,
    color: "secondary"
  },
  {
    title: "Industrial Reliability Ops",
    metric: "25% downtime reduction",
    description: "IoT-powered dashboards synchronizing OT telemetry and maintenance.",
    link: "/portfolio/industrial-operations-energy-dashboard",
    icon: Cpu,
    color: "accent"
  },
  {
    title: "Caregiver Companion",
    metric: "30% fewer missed visits",
    description: "Senior-friendly companion app and portal with accessible UI.",
    link: "/portfolio/older-adults-caregivers-companion",
    icon: Globe,
    color: "info"
  },
];

const impactMetrics = [
  { label: "Products Delivered", value: "25+" },
  { label: "Users Reached", value: "100K+" },
  { label: "Interactions", value: "1M+" },
  { label: "Delivery Success", value: "100%" },
];

const journeyPhases = [
  {
    title: "Discovery",
    duration: "Weeks 0-1",
    detail: "Immersion workshops and KPI baselining for the engagement.",
    icon: Compass
  },
  {
    title: "Sprint Plan",
    duration: "Weeks 1-2",
    detail: "Roadmap and design foundations co-authored with your teams.",
    icon: Layers
  },
  {
    title: "Build Increments",
    duration: "Weeks 3-10",
    detail: "Platform Pods ship release trains with quality gates.",
    icon: Zap
  },
  {
    title: "Day-2 Ops",
    duration: "Ongoing",
    detail: "Experience Ops and telemetry keep value compounding.",
    icon: Workflow
  },
];

const heroClients = ["Regulated Finance", "Smart Energy", "Healthcare", "Retail & FMCG"];

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      {/* Hero Section */}
      <section className="snap-section container animate-softFade">
        <div className="relative overflow-hidden rounded-[40px] bg-slate-900 px-8 py-20 text-white md:px-16 lg:py-32 shadow-2xl">
          {/* Brand Mesh Background */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_25%,_rgba(var(--primary),0.15),_transparent_60%),_radial-gradient(circle_at_80%_70%,_rgba(var(--secondary),0.20),_transparent_65%),_radial-gradient(circle_at_50%_90%,_rgba(var(--accent),0.12),_transparent_70%)] opacity-40" />
          <div className="absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-primary/20 blur-[120px] opacity-40 pulse-glow" />
          <div className="absolute -bottom-40 -left-40 h-[600px] w-[600px] rounded-full bg-secondary/10 blur-[120px] opacity-40 pulse-glow" style={{ animationDelay: '2s' }} />

          <div className="relative z-10 grid gap-16 lg:grid-cols-[1.2fr,0.8fr] lg:items-center">
            <div className="space-y-10">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-3 rounded-full bg-white/10 px-4 py-2 backdrop-blur-md border border-white/20">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                  </span>
                  <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white/80 font-[var(--font-poppins)]">
                    Engineering Growth
                  </p>
                </div>
                <h1 className="text-5xl font-extrabold leading-[1.1] md:text-7xl lg:text-8xl tracking-tight">
                  Intelligent <span className="text-gradient-elegant">Digital Systems</span> for Business Scale
                </h1>
                <p className="max-w-2xl text-xl text-white/70 md:text-2xl leading-relaxed">
                  We design, build, and scale enterprise platforms that combine elegant experiences, AI, and secure cloud architectures.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Link href="/solutions">
                  <Button size="lg" className="h-16 rounded-full bg-white text-primary px-10 text-lg font-bold group shadow-2xl hover:bg-white/95">
                    Explore Solutions
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="h-16 rounded-full border-white/30 text-white px-10 text-lg font-bold hover:bg-white/10">
                    Book Discovery Session
                  </Button>
                </Link>
              </div>

              <div className="flex flex-wrap items-center gap-6 pt-4">
                <p className="text-[10px] font-black uppercase tracking-widest text-white/40">Trusted in</p>
                <div className="flex flex-wrap gap-3">
                  {heroClients.map((client) => (
                    <span key={client} className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-[10px] font-bold tracking-wide text-white/70">
                      {client}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="hidden lg:block relative">
              <div className="glass-panel p-10 border-white/20 space-y-10 group transition-all duration-700 hover:border-primary/50">
                <div className="space-y-4">
                  <p className="text-xs font-black uppercase tracking-widest text-primary">Live Programs</p>
                  <div className="space-y-4">
                    {impactMetrics.map((metric, idx) => (
                      <div key={metric.label} className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                        <span className="text-sm font-medium text-white/60">{metric.label}</span>
                        <span className="text-2xl font-black">{metric.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="p-6 rounded-[2rem] bg-gradient-to-br from-primary/20 to-secondary/20 border border-white/10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center">
                      <Zap className="h-5 w-5 text-primary" />
                    </div>
                    <p className="font-bold">Intelligence Built-in</p>
                  </div>
                  <p className="text-sm text-white/60 leading-relaxed">
                    Strategy and delivery teams synchronize via modular Pods and accountability rituals.
                  </p>
                </div>
              </div>
              {/* Decorative side element */}
              <div className="absolute -left-10 top-1/2 -translate-y-1/2 h-64 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Outcome Teasers Section */}
      <section className="snap-section container animate-softFade py-20">
        <div className="section-shell space-y-16">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-primary border border-primary/20">
              <Sparkles className="h-4 w-4" />
              <span className="text-[10px] font-black uppercase tracking-widest">Case Studies</span>
            </div>
            <h2 className="text-4xl font-extrabold md:text-6xl text-gradient-elegant inline-block">
              Proven Enterprise Transformations
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
              Every engagement is tied to measurable impact. Explore how we engineer growth across regulated industries.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {outcomeTeasers.map((teaser, index) => (
              <div 
                key={teaser.title} 
                className="interactive-card bg-white/95 dark:bg-card/40 p-8 group transition-all duration-500 hover:translate-y-[-8px]"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="mb-6 flex items-center justify-between">
                  <div className={`h-14 w-14 rounded-2xl flex items-center justify-center transition-all bg-${teaser.color}/10 text-${teaser.color} group-hover:bg-${teaser.color} group-hover:text-white shadow-lg`}>
                    <teaser.icon className="h-7 w-7" />
                  </div>
                  <MousePointer2 className="h-5 w-5 text-muted-foreground/20 group-hover:text-primary transition-colors" />
                </div>
                <div className="space-y-4">
                  <div className="space-y-1">
                    <p className="text-xl font-black text-primary">{teaser.metric}</p>
                    <h3 className="text-2xl font-bold leading-tight group-hover:text-primary transition-colors">{teaser.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {teaser.description}
                  </p>
                  <Link href={teaser.link} className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-primary hover:text-secondary group/link transition-colors pt-4">
                    Case Details <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Roadmap */}
      <section className="snap-section container animate-softFade">
        <div className="section-shell bg-slate-900 text-white rounded-[40px] p-12 lg:p-24 space-y-20 overflow-hidden">
          <div className="absolute top-0 right-0 p-12 text-white/5 pointer-events-none">
            <Workflow className="w-[500px] h-[500px]" />
          </div>
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full bg-primary/20 px-4 py-1.5 text-primary border border-primary/30">
                  <span className="text-[10px] font-black uppercase tracking-widest">Operating Rhythm</span>
                </div>
                <h2 className="text-4xl font-extrabold md:text-6xl leading-[1.1]">
                  From Discovery to <span className="text-gradient-elegant">Day-2 Ops</span>
                </h2>
                <p className="text-white/60 text-lg leading-relaxed">
                  Our engagement model synchronizes strategy, design, and engineering into a single, high-accountability operating ritual.
                </p>
              </div>
              <Button asChild variant="outline" className="h-14 rounded-full border-white/20 text-white hover:bg-white/10 px-8">
                <Link href="/contact">Learn About Our Pods</Link>
              </Button>
            </div>

            <div className="space-y-6">
              {journeyPhases.map((phase, index) => (
                <div key={phase.title} className="group flex gap-8 p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                  <div className="h-14 w-14 rounded-2xl bg-white/10 flex items-center justify-center text-primary group-hover:scale-110 transition-all">
                    <phase.icon className="h-7 w-7" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <div className="flex justify-between items-center">
                      <h3 className="text-xl font-bold">{phase.title}</h3>
                      <span className="text-[10px] font-black uppercase tracking-widest text-white/30">{phase.duration}</span>
                    </div>
                    <p className="text-sm text-white/60 leading-relaxed font-medium">{phase.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Security */}
      <section className="snap-section container animate-softFade py-24">
        <div className="section-shell grid lg:grid-cols-[1fr,1.5fr] gap-16 items-center">
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <h2 className="text-4xl font-extrabold md:text-5xl">Trust frameworks for regulated industries</h2>
              <p className="text-lg text-muted-foreground">
                Security is not an afterthought. It's built into every architectural decision we make.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <div className="flex items-center gap-3 p-4 rounded-2xl bg-primary/5 border border-primary/10">
                <Lock className="h-6 w-6 text-primary" />
                <span className="font-bold text-sm">Privacy-First</span>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-2xl bg-secondary/5 border border-secondary/10">
                <ShieldCheck className="h-6 w-6 text-secondary" />
                <span className="font-bold text-sm">Audit-Ready</span>
              </div>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {impactMetrics.map((metric) => (
              <div key={metric.label} className="interactive-card p-10 space-y-2 group">
                <p className="text-5xl font-black text-foreground group-hover:text-primary transition-colors">{metric.value}</p>
                <p className="text-sm font-bold uppercase tracking-[0.3em] text-muted-foreground">{metric.label}</p>
                <div className="h-1 w-12 bg-primary/20 rounded-full group-hover:w-full transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation CTA */}
      <section className="snap-section container animate-softFade pb-20">
        <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-br from-primary via-secondary to-accent px-8 py-20 text-center text-white shadow-2xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_rgba(255,255,255,0.1),_transparent_40%)]" />
          <div className="relative z-10 max-w-4xl mx-auto space-y-10">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 text-white/80 font-black tracking-[0.5em] text-xs uppercase bg-white/10 px-6 py-2 rounded-full border border-white/20">
                <Sparkles className="h-4 w-4" />
                Innovation Lab
                <Sparkles className="h-4 w-4" />
              </div>
              <h2 className="text-4xl font-extrabold md:text-6xl lg:text-7xl leading-tight">
                From R&D to Production Ready Intelligence
              </h2>
              <p className="text-xl text-white/80 leading-relaxed max-w-2xl mx-auto">
                Explore how we apply AI, predictive modeling, and immersive interfaces to high-stakes enterprise challenges.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/innovation">
                <Button size="lg" className="h-16 rounded-full bg-white text-primary px-12 text-lg font-bold group shadow-2xl hover:bg-white/95">
                  Enter the Lab
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="h-16 rounded-full border-white/30 text-white px-12 text-lg font-bold hover:bg-white/10">
                  Book Strategy Session
                </Button>
              </Link>
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

