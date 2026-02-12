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
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-primary/20 blur-[120px]" />
          <div className="absolute right-0 top-24 h-80 w-80 rounded-full bg-secondary/20 blur-[140px]" />
          <div className="absolute inset-0 dot-grid opacity-30" />
        </div>
        <div className="container animate-softFade py-24 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-[1.1fr,0.9fr] items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 rounded-full bg-secondary/10 px-5 py-2 border border-secondary/20">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
                </span>
                <p className="eyebrow text-secondary">{home.hero.eyebrow}</p>
              </div>
              <h1 className="display-hero font-extrabold text-foreground">
                Intelligent <span className="text-gradient">Digital Systems</span> for Scale
              </h1>
              <p className="max-w-2xl body-lg text-muted-foreground">
                {home.hero.description}
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
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
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Sectors we transform</p>
                <div className="flex flex-wrap gap-3">
                  {home.hero.sectors.map((client) => (
                    <Badge key={client} variant="soft" className="normal-case tracking-normal">
                      {client}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative overflow-hidden rounded-[2.75rem] border border-primary/10 bg-surface shadow-float hero-mesh">
                <div className="absolute inset-0 hero-lines opacity-40" />
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-secondary/20 blur-3xl float-slow" />
                <div className="absolute -left-12 bottom-0 h-32 w-32 rounded-full bg-primary/15 blur-3xl float-slow" />
                <div className="relative aspect-[4/3] w-full">
                  <svg
                    viewBox="0 0 640 420"
                    className="absolute inset-0 h-full w-full"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path
                      d="M40 340 C140 280 220 300 310 230 C400 160 490 150 600 90"
                      fill="none"
                      stroke="rgba(13,148,136,0.6)"
                      strokeWidth="3"
                      className="line-dash"
                    />
                    <path
                      d="M60 360 C160 320 240 330 330 260 C420 190 520 170 610 120"
                      fill="none"
                      stroke="rgba(15,58,125,0.5)"
                      strokeWidth="2"
                    />
                    <path
                      d="M30 300 C120 240 220 250 300 200 C380 150 470 120 590 80"
                      fill="none"
                      stroke="rgba(5,150,105,0.45)"
                      strokeWidth="2"
                    />
                    <circle cx="310" cy="230" r="6" fill="rgba(13,148,136,0.9)" />
                    <circle cx="490" cy="150" r="6" fill="rgba(15,58,125,0.9)" />
                    <circle cx="590" cy="80" r="6" fill="rgba(5,150,105,0.9)" />
                    <text x="325" y="215" fill="rgba(15,58,125,0.8)" fontSize="12" fontWeight="600">
                      {home.stats[2]?.label}
                    </text>
                    <text x="505" y="135" fill="rgba(15,58,125,0.8)" fontSize="12" fontWeight="600">
                      {home.stats[3]?.label}
                    </text>
                    <text x="545" y="65" fill="rgba(15,58,125,0.8)" fontSize="12" fontWeight="600">
                      Outcomes
                    </text>
                  </svg>
                  <div className="absolute left-6 top-6 rounded-2xl bg-white/80 px-4 py-3 shadow-soft backdrop-blur">
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-secondary">
                      {home.stats[0]?.label}
                    </p>
                    <p className="text-lg font-bold text-foreground">{home.stats[0]?.value}</p>
                  </div>
                  <div className="absolute bottom-6 right-8 rounded-2xl bg-white/80 px-4 py-3 shadow-soft backdrop-blur">
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-secondary">
                      {home.stats[1]?.label}
                    </p>
                    <p className="text-lg font-bold text-foreground">{home.stats[1]?.value}</p>
                  </div>
                </div>
              </div>
              <p className="mt-4 text-xs uppercase tracking-[0.4em] text-muted-foreground text-center">
                Data-led delivery visibility
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="container py-16">
        <div className="space-y-10">
          <SectionHeader
            eyebrow="Proof in numbers"
            title="Metrics that reflect enterprise impact"
            description="Delivery outcomes across regulated programs, captured in measurable KPIs."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {home.stats.map((metric, index) => {
              const statIcons = [TrendingUp, Users, Activity, CheckCircle2];
              const Icon = statIcons[index % statIcons.length];
              return <Stat key={metric.label} {...metric} icon={Icon} />;
            })}
          </div>
          <div className="flex justify-center">
            <Button asChild variant="outline" size="lg">
              <Link href="/portfolio" className="flex items-center gap-2">
                Explore transformation cases <ArrowRight className="h-4 w-4 icon-accent" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="container py-12">
        <SocialProofBand
          title="Trusted delivery signal"
          description="Enterprise teams rely on Spire for regulated rollouts, outcome governance, and durable adoption."
          variant="full"
        />
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
              <div
                key={card.title}
                className="group relative overflow-hidden rounded-3xl border border-border/40 bg-surface card-pad shadow-soft card-lift"
              >
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 rounded-full bg-secondary/10 px-3 py-1 text-xs font-semibold text-secondary">
                    <Sparkles className="h-4 w-4 icon-accent" />
                    {card.metric}
                  </div>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                    NDA-safe
                  </span>
                </div>
                <div className="mt-6 space-y-3">
                  <h3 className="heading-3 text-foreground">{card.title}</h3>
                  <p className="text-sm text-muted-foreground">{card.summary}</p>
                </div>
                <Link
                  href={card.href}
                  className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-secondary"
                >
                  Full case <ArrowRight className="h-4 w-4 icon-accent" />
                </Link>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <Button asChild variant="outline" size="lg">
              <Link href="/portfolio" className="flex items-center gap-2">
                View full portfolio <ArrowRight className="h-4 w-4 icon-accent" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Industry Specialization */}
      <section className="container py-24">
        <div className="space-y-12">
          <SectionHeader
            eyebrow="Industry specialization"
            title="Built for regulated verticals"
            description="Delivery pods that understand compliance, risk, and operational complexity in your sector."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {industryProfiles.slice(0, 5).map((industry) => (
              <Link
                key={industry.slug}
                href={`/industries/${industry.slug}`}
                className="group rounded-3xl border border-border/40 bg-surface card-pad shadow-soft card-lift text-left"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-foreground">{industry.title}</h3>
                  <ArrowRight className="h-4 w-4 icon-accent transition-transform group-hover:translate-x-1" />
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{industry.summary}</p>
                <div className="mt-4 flex flex-wrap gap-2 text-xs text-muted-foreground">
                  {industry.successMetrics.slice(0, 2).map((item) => (
                    <span key={item} className="rounded-full bg-secondary/10 px-3 py-1 text-secondary">
                      {item}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
          <div className="flex justify-center">
            <Button asChild variant="outline" size="lg">
              <Link href="/industries" className="flex items-center gap-2">
                Explore all industries <ArrowRight className="h-4 w-4 icon-accent" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Operating Rhythm */}
      <section className="container py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr,1.2fr] items-center rounded-[3rem] border border-border/40 bg-surface p-10 shadow-float">
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
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            {home.securityPrinciples.principles.map((principle, index) => {
              const Icon = securityIcons[index % securityIcons.length];
              return (
                <div
                  key={principle.title}
                  className="group rounded-3xl border border-border/40 bg-surface card-pad shadow-soft card-lift text-left"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary/10 text-secondary">
                    <Icon className="h-6 w-6 icon-accent transition-transform group-hover:scale-110" />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-foreground">{principle.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{principle.detail}</p>
                </div>
              );
            })}
          </div>
          <div className="flex justify-center">
            <Button asChild variant="outline" size="lg">
              <Link href="/contact" className="flex items-center gap-2">
                Review security posture <ArrowRight className="h-4 w-4 icon-accent" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Insights */}
      <section className="container py-24">
        <div className="space-y-10">
          <ResourceDownloads
            title="Thought leadership and delivery playbooks"
            description="Share-ready briefs to align stakeholders, procurement, and delivery governance."
          />
          <div className="flex justify-center">
            <Button asChild size="lg">
              <Link href="/contact" className="flex items-center gap-2">
                Request a tailored briefing <ArrowRight className="h-4 w-4 icon-inverse" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Innovation Lab CTA */}
      <section className="container pb-32">
        <div className="cta-band rounded-[3rem] p-12 text-center shadow-float">
          <div className="cta-inner space-y-8">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-6 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-white/80">
              <Sparkles className="h-4 w-4 icon-inverse" />
              {home.labCta.eyebrow}
            </div>
            <h2 className="display-1 text-white">{home.labCta.title}</h2>
            <p className="mx-auto max-w-2xl body-lg text-white/80">
              {home.labCta.description}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="xl" className="bg-white text-primary hover:bg-white/90">
                <Link href={home.labCta.primaryCta.href}>{home.labCta.primaryCta.label}</Link>
              </Button>
              <Button asChild variant="outline" size="xl" className="border-white/40 text-white hover:bg-white/10">
                <Link href={home.labCta.secondaryCta.href}>{home.labCta.secondaryCta.label}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
