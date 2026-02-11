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
  Cpu,
  CheckCircle2
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
    <div className="flex flex-1 flex-col bg-background">
      {/* Hero Section */}
      <section className="container animate-softFade py-20 lg:py-32">
        <div className="section-shell w-full space-y-16 py-10 text-center border-none shadow-none bg-transparent">
          <div className="relative z-10 space-y-10">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 rounded-full bg-primary/10 px-4 py-2 border border-primary/20 mx-auto">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                <p className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">
                  Engineering Growth
                </p>
              </div>
              <h1 className="text-5xl font-extrabold leading-[1.1] md:text-8xl lg:text-9xl tracking-tight text-foreground">
                Intelligent <span className="text-secondary">Digital Systems</span> for Scale
              </h1>
              <p className="mx-auto max-w-3xl text-xl text-muted-foreground md:text-3xl leading-relaxed font-medium">
                We design, build, and scale enterprise platforms that combine elegant experiences, AI, and secure architectures.
              </p>
            </div>

            <div className="flex flex-col gap-6 sm:flex-row justify-center items-center">
              <Button asChild size="lg" className="h-18 rounded-full bg-primary text-white hover:text-white px-12 text-xl font-bold group shadow-2xl hover:bg-secondary transition-all border-none">
                <Link href="/solutions" className="flex items-center">
                  Explore Solutions
                  <ArrowRight className="ml-2 h-6 w-6 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-18 rounded-full border-primary/10 text-primary px-12 text-xl font-bold hover:bg-primary/5">
                <Link href="/contact">Book Discovery Workshop</Link>
              </Button>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-8 pt-8">
              <p className="text-[10px] font-black uppercase tracking-widest text-primary/40">Sectors We Transform</p>
              <div className="flex flex-wrap gap-4">
                {heroClients.map((client) => (
                  <span key={client} className="rounded-full bg-primary/5 border border-primary/10 px-4 py-2 text-xs font-bold text-primary">
                    {client}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Banner - Compact */}
      <section className="container py-10">
         <div className="grid gap-6 md:grid-cols-4">
            {impactMetrics.map((metric) => (
              <div key={metric.label} className="interactive-card p-10 space-y-3 group text-left border-primary/5 shadow-xl">
                <p className="text-5xl font-black text-foreground group-hover:text-primary transition-colors">{metric.value}</p>
                <p className="text-sm font-bold uppercase tracking-[0.3em] text-muted-foreground">{metric.label}</p>
                <div className="h-1 w-12 bg-primary/20 rounded-full group-hover:w-full transition-all duration-700" />
              </div>
            ))}
          </div>
      </section>

      {/* Outcome Teasers Section */}
      <section className="container animate-softFade py-32">
        <div className="space-y-20">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/5 px-4 py-1.5 text-primary border border-primary/10">
              <Sparkles className="h-4 w-4" />
              <span className="text-[10px] font-black uppercase tracking-widest">Case Impacts</span>
            </div>
            <h2 className="text-4xl font-extrabold md:text-7xl text-secondary">
              Enterprise Transformations
            </h2>
            <p className="max-w-3xl mx-auto text-xl text-muted-foreground leading-relaxed">
              Every engagement is tied to measurable impact. Explore how we engineer growth across regulated industries.
            </p>
          </div>

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {outcomeTeasers.map((teaser) => (
              <div 
                key={teaser.title} 
                className="interactive-card p-10 group text-left shadow-xl"
              >
                <div className="mb-8 flex items-center justify-between">
                  <div className={`h-16 w-16 rounded-2xl flex items-center justify-center transition-all bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white shadow-sm`}>
                    <teaser.icon className="h-8 w-8" />
                  </div>
                  <MousePointer2 className="h-5 w-5 text-primary/20 group-hover:text-primary transition-colors" />
                </div>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <p className="text-2xl font-black text-primary">{teaser.metric}</p>
                    <h3 className="text-2xl font-bold leading-tight group-hover:text-primary transition-colors">{teaser.title}</h3>
                  </div>
                  <p className="text-base text-muted-foreground leading-relaxed font-medium">
                    {teaser.description}
                  </p>
                  <Link href={teaser.link} className="inline-flex items-center gap-3 text-xs font-black uppercase tracking-widest text-primary hover:text-secondary group/link transition-colors pt-6">
                    Full Case <ArrowRight className="h-5 w-5 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Operating Rhythm Section */}
      <section className="container animate-softFade py-24">
        <div className="section-shell bg-white border border-primary/5 rounded-[3rem] p-12 lg:p-24 space-y-20 overflow-hidden shadow-3xl text-left">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 rounded-full bg-primary/5 px-4 py-1.5 text-primary border border-primary/10">
                  <span className="text-[10px] font-black uppercase tracking-widest">Operating Rhythm</span>
                </div>
                <h2 className="text-4xl font-extrabold md:text-7xl leading-[1.1] text-secondary">
                  From Discovery to <span className="text-primary">Day-2 Ops</span>
                </h2>
                <p className="text-muted-foreground text-xl leading-relaxed font-medium">
                  Our engagement model synchronizes strategy, design, and engineering into a single, high-accountability operating ritual.
                </p>
              </div>
              <Button asChild size="lg" className="h-16 rounded-full bg-primary text-white hover:text-white px-10 text-lg font-bold hover:bg-secondary border-none">
                <Link href="/contact">Learn About Our Pods</Link>
              </Button>
            </div>

            <div className="space-y-8">
              {journeyPhases.map((phase) => (
                <div key={phase.title} className="group flex gap-8 p-10 rounded-3xl bg-white border border-primary/5 hover:border-primary/20 shadow-lg hover:shadow-xl transition-all">
                  <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                    <phase.icon className="h-8 w-8" />
                  </div>
                  <div className="flex-1 space-y-3">
                    <div className="flex justify-between items-center">
                      <h3 className="text-2xl font-bold text-foreground">{phase.title}</h3>
                      <span className="text-[11px] font-black uppercase tracking-widest text-primary/50">{phase.duration}</span>
                    </div>
                    <p className="text-base text-muted-foreground leading-relaxed font-semibold">{phase.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Security & Compliance Banner */}
      <section className="container animate-softFade py-24">
        <div className="relative overflow-hidden rounded-[3rem] bg-primary px-8 py-24 text-center text-white shadow-2xl shadow-primary/20">
          <div className="relative z-10 max-w-4xl mx-auto space-y-12">
            <div className="space-y-8">
               <div className="inline-flex items-center gap-3 rounded-full bg-white/10 px-6 py-2 border border-white/20 mx-auto">
                <ShieldCheck className="h-5 w-5" />
                <p className="text-[10px] font-black uppercase tracking-[0.4em]">Audit-Ready Resiliency</p>
              </div>
              <h2 className="text-4xl font-extrabold md:text-7xl">Secure By Design</h2>
              <p className="text-2xl text-white/80 leading-relaxed max-w-2xl mx-auto font-medium">
                Security is not an afterthought. It's built into every architectural decision, audit trail, and deployment pipeline.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-8">
               <div className="flex items-center gap-4 bg-white/10 px-8 py-4 rounded-2xl border border-white/20">
                  <Lock className="h-6 w-6" />
                  <span className="text-lg font-bold">Privacy-First</span>
               </div>
               <div className="flex items-center gap-4 bg-white/10 px-8 py-4 rounded-2xl border border-white/20">
                  <Activity className="h-6 w-6" />
                  <span className="text-lg font-bold">Immutability</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lab CTA */}
      <section className="container animate-softFade py-24 pb-48">
        <div className="relative overflow-hidden rounded-[3rem] bg-white border border-primary/10 px-8 py-24 text-center shadow-3xl">
          <div className="relative z-10 max-w-4xl mx-auto space-y-12">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 text-primary font-black tracking-[0.5em] text-xs uppercase bg-primary/5 px-8 py-3 rounded-full border border-primary/10 mx-auto">
                <Sparkles className="h-5 w-5" />
                Innovation Lab
                <Sparkles className="h-5 w-5" />
              </div>
              <h2 className="text-4xl font-extrabold md:text-8xl text-secondary">
                Future-Proof Your Roadmap
              </h2>
              <p className="text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto font-medium">
                Explore how we apply AI, predictive modeling, and immersive interfaces to high-stakes enterprise challenges.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-6 pt-6">
              <Link href="/innovation">
                <Button size="lg" className="h-18 rounded-full bg-primary text-white hover:text-white px-12 text-xl font-bold group shadow-2xl hover:bg-secondary transition-all border-none">
                  Enter the Lab
                  <ArrowRight className="ml-2 h-6 w-6 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="h-18 rounded-full border-primary/10 text-primary px-12 text-xl font-bold hover:bg-primary/5">
                  Book Strategy Session
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
