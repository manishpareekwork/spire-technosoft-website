import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Lock,
  Activity,
  Cpu,
  Workflow,
  TrendingUp,
  Users,
  CheckCircle2,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button-variants";
import { cn } from "@/lib/utils";
import { SectionHeader } from "@/components/ui/section-header";
import { Stat } from "@/components/ui/stat";
import { Stepper } from "@/components/ui/stepper";
import { Badge } from "@/components/ui/badge";
import { ResourceDownloads } from "@/components/sections/resource-downloads";
import { SocialProofBand } from "@/components/sections/social-proof";
import { siteContent } from "@/content/site";
import { industryProfiles } from "@/data/industries";

export const metadata = {
  title: "Spire Technosoft | Intelligent Digital Systems for Scale",
  description: siteContent.seo.baseDescription,
  openGraph: {
    title: "Spire Technosoft | Intelligent Digital Systems for Scale",
    description: siteContent.seo.baseDescription,
    images: [{ url: siteContent.seo.defaultOg }],
  },
};

const securityIcons = [ShieldCheck, Lock, Activity, Cpu, Workflow];

export default function Home() {
  const { home } = siteContent;

  return (
    <div className="flex flex-1 flex-col bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[90vh] flex items-center pt-24 pb-16">
        <div className="absolute inset-0 -z-10 bg-background">
          <div className="absolute inset-0 hero-mesh opacity-70" />
          <div className="absolute inset-0 grid-lines opacity-40 mix-blend-overlay" />
          <div className="absolute -left-[20%] top-[-10%] h-[800px] w-[800px] rounded-full bg-primary/20 blur-[150px] animate-pulse" style={{ animationDuration: '8s' }} />
          <div className="absolute right-[-10%] bottom-[-20%] h-[600px] w-[600px] rounded-full bg-accent/20 blur-[120px] animate-pulse" style={{ animationDuration: '12s', animationDelay: '2s' }} />
        </div>
        <div className="container relative z-10 animate-slideUp">
          <div className="flex flex-col items-center text-center max-w-5xl mx-auto space-y-10">
            <div className="inline-flex items-center gap-3 border border-border/50 bg-surface/50 px-6 py-2 shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full bg-accent opacity-75"></span>
                <span className="relative inline-flex h-2.5 w-2.5 bg-accent"></span>
              </span>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">{home.hero.eyebrow}</p>
            </div>
            
            <h1 className="display-hero text-foreground drop-shadow-sm leading-tight">
              Intelligent <span className="text-gradient">Digital Systems</span> for Scale
            </h1>
            
            <p className="max-w-3xl body-lg text-muted-foreground/90">
              {home.hero.description}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-5 pt-4">
              <Link href={home.hero.primaryCta.href} className={cn(buttonVariants({ size: "xl", variant: "default" }), "px-10 h-14 text-lg border-0 flex items-center")}>
                {home.hero.primaryCta.label}
                <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1.5" />
              </Link>
              <Link href={home.hero.secondaryCta.href} className={cn(buttonVariants({ variant: "outline", size: "xl" }), "px-10 h-14 text-lg border border-border hover:bg-surface-2 transition-colors")}>
                {home.hero.secondaryCta.label}
              </Link>
            </div>

            <div className="pt-12 flex flex-col items-center gap-6 w-full animate-softFade" style={{ animationDelay: '0.4s' }}>
              <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-muted-foreground/60">Delivering impact across</p>
              <div className="flex flex-wrap justify-center gap-4">
                {home.hero.sectors.map((sector) => (
                  <div key={sector} className="px-5 py-2 border border-border bg-surface text-sm text-foreground/70">
                    {sector}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Floating Abstract Elements */}
        {siteContent.differentiators.map((item, index) => {
          const positions = [
            "hidden lg:flex absolute top-[15%] left-[5%] float-slow",
            "hidden lg:flex absolute top-[45%] right-[5%] float-slower",
            "hidden lg:flex absolute bottom-[20%] left-[12%] float-slow",
          ];
          const cardIcons = [Workflow, Users, Cpu];
          const Icon = cardIcons[index % cardIcons.length];
          return (
            <div
              key={item.title}
              className={`z-20 w-[240px] rounded-2xl glass-effect p-5 ${positions[index]}`}
              style={{ animationDelay: `${index * 1.5}s` }}
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Icon className="h-5 w-5 icon-primary" />
                </div>
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-foreground">{item.title}</p>
              </div>
              <p className="mt-3 text-sm font-medium text-muted-foreground">{item.metric}</p>
            </div>
          );
        })}
      </section>

      {/* Stats */}
      <section className="section-shell">
        <div className="container space-y-12">
          <SectionHeader
            eyebrow="Proof in numbers"
            title="Metrics that reflect enterprise impact"
            description="Delivery outcomes across regulated programs, captured in measurable KPIs."
          />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {home.stats.map((metric, index) => {
              const statIcons = [TrendingUp, Users, Activity, CheckCircle2];
              const Icon = statIcons[index % statIcons.length];
              return (
                <div key={metric.label} className="interactive-card flex flex-col items-center text-center group">
                  <div className="mb-6 p-4 text-primary bg-primary/10 transition-colors hover:bg-primary/20">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h4 className="display-1 text-foreground mb-2 group-hover:text-primary transition-colors">{metric.value}</h4>
                  <p className="text-base font-semibold text-foreground/80 mb-1">{metric.label}</p>
                  <p className="text-sm text-muted-foreground">{metric.helper}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 bg-surface-2 border-y border-border/30">
        <div className="container">
          <SocialProofBand
            title="Trusted delivery signal"
            description="Enterprise teams rely on Spire for regulated rollouts, outcome governance, and durable adoption."
            variant="full"
          />
        </div>
      </section>

      {/* Transformations */}
      <section className="section-shell">
        <div className="container space-y-12">
          <SectionHeader
            eyebrow={home.transformations.eyebrow}
            title={home.transformations.title}
            description={home.transformations.description}
          />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {home.transformations.cards.map((card) => (
              <div
                key={card.title}
                className="group flex flex-col p-8 border border-border/30 bg-surface/50 hover:bg-surface transition-colors"
              >
                <div className="flex items-center justify-between mb-8">
                  <div className="inline-flex items-center gap-2 border border-primary/20 px-3.5 py-1.5 text-xs font-bold text-primary">
                    <Sparkles className="h-3.5 w-3.5" />
                    {card.metric}
                  </div>
                  <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-muted-foreground/60">
                    NDA-safe
                  </span>
                </div>
                <div className="flex-1 space-y-4">
                  <h3 className="text-xl font-bold text-foreground leading-snug group-hover:text-primary transition-colors">{card.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{card.summary}</p>
                </div>
                <Link
                  href={card.href}
                  className="mt-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-secondary hover:text-accent transition-colors"
                >
                  Full case <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
          <div className="flex justify-center pt-4">
            <Link href="/portfolio" className={cn(buttonVariants({ variant: "outline", size: "lg" }), "px-8 h-12 flex items-center gap-2")}>
              View full portfolio <ArrowRight className="h-4 w-4 icon-accent" />
            </Link>
          </div>
        </div>
      </section>

      {/* Industry Specialization */}
      <section className="section-shell bg-surface-2 border-t border-border/30 relative overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-50"></div>
        <div className="container relative z-10 space-y-12">
          <SectionHeader
            eyebrow="Industry specialization"
            title="Built for regulated verticals"
            description="Delivery pods that understand compliance, risk, and operational complexity in your sector."
          />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {industryProfiles.slice(0, 5).map((industry) => (
              <Link
                key={industry.slug}
                href={`/industries/${industry.slug}`}
                className="flex flex-col text-left group p-8 border border-border/30 hover:bg-surface transition-colors"
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">{industry.title}</h3>
                  <div className="p-2 bg-surface-2 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <ArrowRight className="h-5 w-5 icon-accent group-hover:text-primary-foreground" />
                  </div>
                </div>
                <p className="mb-8 text-sm text-muted-foreground leading-relaxed flex-1">{industry.summary}</p>
                <div className="flex flex-wrap gap-2 text-xs">
                  {industry.successMetrics.slice(0, 2).map((item) => (
                    <span key={item} className="border border-border/50 px-3 py-1.5 text-muted-foreground font-medium">
                      {item}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
          <div className="flex justify-center pt-4">
            <Link href="/industries" className={cn(buttonVariants({ variant: "outline", size: "lg" }), "px-8 h-12 flex items-center gap-2")}>
              Explore all industries <ArrowRight className="h-4 w-4 icon-accent" />
            </Link>
          </div>
        </div>
      </section>

      {/* Operating Rhythm */}
      <section className="section-shell">
        <div className="container">
          <div className="grid gap-16 lg:grid-cols-[1fr,1.3fr] items-center p-10 lg:p-16 border border-border relative overflow-hidden bg-surface-2">
            <div className="absolute inset-0 hero-lines opacity-10"></div>
            <div className="relative z-10 space-y-8 border-l-4 border-primary pl-8">
              <div className="space-y-4">
                <p className="eyebrow text-accent">{home.operatingRhythm.eyebrow}</p>
                <h2 className="heading-2 text-foreground">{home.operatingRhythm.title}</h2>
                <p className="body-lg text-muted-foreground">
                  {home.operatingRhythm.description}
                </p>
              </div>
              <Link href={home.operatingRhythm.cta.href} className={cn(buttonVariants({ size: "lg" }), "h-14 px-8 flex items-center")}>
                {home.operatingRhythm.cta.label}
              </Link>
            </div>
            <div className="relative z-10 p-8">
              <Stepper
                steps={home.operatingRhythm.steps.map((step) => ({
                  title: step.title,
                  description: step.detail,
                  meta: step.duration,
                }))}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Security Principles */}
      <section className="section-shell bg-surface-2 border-y border-border/30">
        <div className="container space-y-12">
          <SectionHeader
            eyebrow={home.securityPrinciples.eyebrow}
            title={home.securityPrinciples.title}
            description={home.securityPrinciples.description}
          />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
            {home.securityPrinciples.principles.map((principle, index) => {
              const Icon = securityIcons[index % securityIcons.length];
              return (
                <div
                  key={principle.title}
                  className="flex flex-col group p-6 border border-border/30 hover:bg-surface transition-colors"
                >
                  <div className="flex h-14 w-14 mb-6 items-center justify-center bg-surface-2 group-hover:bg-primary transition-colors duration-300">
                    <Icon className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <h3 className="mb-3 text-lg font-bold text-foreground leading-tight">{principle.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{principle.detail}</p>
                </div>
              );
            })}
          </div>
          <div className="flex justify-center pt-4">
            <Link href="/contact" className={cn(buttonVariants({ variant: "outline", size: "lg" }), "px-8 h-12 flex items-center gap-2")}>
              Review security posture <ArrowRight className="h-4 w-4 icon-accent" />
            </Link>
          </div>
        </div>
      </section>

      {/* Insights */}
      <section className="section-shell">
        <div className="container space-y-12">
          <ResourceDownloads
            title="Thought leadership and delivery playbooks"
            description="Share-ready briefs to align stakeholders, procurement, and delivery governance."
          />
          <div className="flex justify-center">
            <Link href="/contact" className={cn(buttonVariants({ size: "lg" }), "rounded-full px-8 h-14 bg-foreground text-background hover:bg-foreground/90 flex items-center gap-2")}>
              Request a tailored briefing <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Innovation Lab CTA */}
      <section className="container pb-32">
        <div className="cta-band p-12 lg:p-16 text-center border-y border-border">
          <div className="cta-inner flex flex-col items-center space-y-10">
            <div className="inline-flex items-center gap-3 border border-border/50 bg-background/50 px-6 py-2 text-xs font-bold uppercase tracking-[0.3em] text-foreground">
              <Sparkles className="h-4 w-4" />
              {home.labCta.eyebrow}
            </div>
            <h2 className="display-1 text-black max-w-4xl drop-shadow-md">{home.labCta.title}</h2>
            <p className="mx-auto max-w-2xl text-lg text-black/90 font-medium">
              {home.labCta.description}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-5 pt-4">
              <Link href={home.labCta.primaryCta.href} className={cn(buttonVariants({ size: "xl" }), "h-14 px-10 font-bold bg-black text-white hover:bg-black/80 flex items-center")}>
                {home.labCta.primaryCta.label}
              </Link>
              <Link href={home.labCta.secondaryCta.href} className={cn(buttonVariants({ variant: "outline", size: "xl" }), "h-14 px-10 font-bold border-black/50 text-black hover:bg-black/10 flex items-center")}>
                {home.labCta.secondaryCta.label}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
