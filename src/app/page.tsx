import Link from "next/link";
import { ArrowRight, Sparkles, ShieldCheck, Lock, Activity, Cpu, Workflow } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/section-header";
import { Stat } from "@/components/ui/stat";
import { Stepper } from "@/components/ui/stepper";
import { Badge } from "@/components/ui/badge";
import { siteContent } from "@/content/site";

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
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-primary/20 blur-[120px]" />
          <div className="absolute right-0 top-32 h-80 w-80 rounded-full bg-secondary/20 blur-[140px]" />
          <div className="absolute inset-0 grid-lines opacity-40" />
        </div>
        <div className="container animate-softFade py-24 lg:py-32">
          <div className="section-shell w-full space-y-10 py-6 text-center">
            <div className="relative z-10 space-y-8">
              <div className="inline-flex items-center gap-3 rounded-full bg-primary/10 px-5 py-2 border border-primary/20 mx-auto">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                <p className="eyebrow text-primary">{home.hero.eyebrow}</p>
              </div>
              <h1 className="display-hero font-extrabold text-foreground">
                Intelligent <span className="text-secondary">Digital Systems</span> for Scale
              </h1>
              <p className="mx-auto max-w-3xl body-lg text-muted-foreground">
                {home.hero.description}
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row justify-center items-center">
              <Button asChild size="xl" className="px-10">
                <Link href={home.hero.primaryCta.href} className="flex items-center">
                  {home.hero.primaryCta.label}
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 icon-inverse" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="xl" className="px-10">
                <Link href={home.hero.secondaryCta.href}>{home.hero.secondaryCta.label}</Link>
              </Button>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 pt-6">
              <p className="text-[10px] font-black uppercase tracking-widest text-primary/40">Sectors we transform</p>
              <div className="flex flex-wrap gap-3">
                {home.hero.sectors.map((client) => (
                  <Badge key={client} variant="soft" className="normal-case tracking-normal">
                    {client}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="container py-12">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {home.stats.map((metric) => (
            <Stat key={metric.label} {...metric} />
          ))}
        </div>
      </section>

      {/* Transformations */}
      <section className="container py-24">
        <div className="space-y-14">
          <SectionHeader
            eyebrow={home.transformations.eyebrow}
            title={home.transformations.title}
            description={home.transformations.description}
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {home.transformations.cards.map((card) => (
              <div key={card.title} className="surface-card rounded-3xl p-6 shadow-soft transition-all hover:-translate-y-2">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    <Sparkles className="h-4 w-4 icon-accent" />
                    {card.metric}
                  </div>
                </div>
                <div className="mt-6 space-y-3">
                  <h3 className="heading-3 text-foreground">{card.title}</h3>
                  <p className="text-sm text-muted-foreground">{card.summary}</p>
                </div>
                <Link
                  href={card.href}
                  className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary"
                >
                  Full case <ArrowRight className="h-4 w-4 icon-accent" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Operating Rhythm */}
      <section className="container py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr,1.2fr] items-center rounded-[3rem] border border-border/60 bg-surface p-10 shadow-float">
          <div className="space-y-6">
            <SectionHeader
              eyebrow={home.operatingRhythm.eyebrow}
              title={home.operatingRhythm.title}
              description={home.operatingRhythm.description}
              align="left"
            />
            <Button asChild size="lg">
              <Link href={home.operatingRhythm.cta.href}>{home.operatingRhythm.cta.label}</Link>
            </Button>
          </div>
          <Stepper
            steps={home.operatingRhythm.steps.map((step) => ({
              title: step.title,
              description: step.detail,
              meta: step.duration,
            }))}
          />
        </div>
      </section>

      {/* Security Principles */}
      <section className="container py-24">
        <div className="space-y-12">
          <SectionHeader
            eyebrow={home.securityPrinciples.eyebrow}
            title={home.securityPrinciples.title}
            description={home.securityPrinciples.description}
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {home.securityPrinciples.principles.map((principle, index) => {
              const Icon = securityIcons[index % securityIcons.length];
              return (
                <div key={principle.title} className="surface-card rounded-3xl p-6 shadow-soft">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Icon className="h-6 w-6 icon-accent" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">{principle.title}</h3>
                  </div>
                  <p className="mt-4 text-sm text-muted-foreground">{principle.detail}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Innovation Lab CTA */}
      <section className="container pb-32">
        <div className="relative overflow-hidden rounded-[3rem] border border-border/60 bg-surface p-12 text-center shadow-float">
          <div className="absolute -right-24 -top-24 h-56 w-56 rounded-full bg-primary/10 blur-[80px]" />
          <div className="relative z-10 space-y-8">
            <div className="inline-flex items-center gap-3 rounded-full border border-primary/10 bg-primary/5 px-6 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-primary">
              <Sparkles className="h-4 w-4 icon-accent" />
              {home.labCta.eyebrow}
            </div>
            <h2 className="display-1 text-secondary">{home.labCta.title}</h2>
            <p className="mx-auto max-w-2xl body-lg text-muted-foreground">
              {home.labCta.description}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="xl">
                <Link href={home.labCta.primaryCta.href}>{home.labCta.primaryCta.label}</Link>
              </Button>
              <Button asChild variant="outline" size="xl">
                <Link href={home.labCta.secondaryCta.href}>{home.labCta.secondaryCta.label}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
