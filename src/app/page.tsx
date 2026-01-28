import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles, ShieldCheck, Lock, FileCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { differentiators } from "@/data/differentiators";

const heroImage = "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1600&q=80";
const outcomeTeasers = [
  {
    title: "Regulatory Audit Cloud",
    metric: "45% faster closures",
    description: "Multi-country inspection suite with offline capture, digital certificates, and predictive readiness.",
    link: "/portfolio/enterprise-audit-compliance-platform",
  },
  {
    title: "Wellness Super App",
    metric: "+50% weekly engagement",
    description: "Mobile + web experience covering onboarding, community, telemetry, and personalization.",
    link: "/portfolio/enterprise-fitness-wellness-platform",
  },
  {
    title: "Industrial Reliability Ops",
    metric: "25% downtime reduction",
    description: "IoT-powered dashboards and field tooling synchronizing OT telemetry and maintenance.",
    link: "/portfolio/industrial-operations-energy-dashboard",
  },
  {
    title: "Caregiver Companion",
    metric: "30% fewer missed visits",
    description: "Senior-friendly companion app, reminders, and caregiver portal with accessible UI.",
    link: "/portfolio/older-adults-caregivers-companion",
  },
];

const heroClients = ["Regulated Finance", "Smart Energy", "Healthcare", "Retail & FMCG", "Gov & Public Programs"];

const impactMetrics = [
  { label: "Products Delivered", value: "25+" },
  { label: "Users Reached", value: "100K+" },
  { label: "Interactions Processed", value: "1M+" },
  { label: "On-time Enterprise Deliveries", value: "100%" },
];

const journeyPhases = [
  {
    title: "Discovery",
    duration: "Weeks 0-1",
    detail: "Immersion workshops, stakeholder alignment, and KPI baselining for the engagement.",
  },
  {
    title: "Sprint Plan",
    duration: "Weeks 1-2",
    detail: "Sprint roadmap, design foundations, and delivery plan co-authored with your teams.",
  },
  {
    title: "Build Increments",
    duration: "Weeks 3-10",
    detail: "Platform Pods ship release trains with quality gates, automation, and compliance reviews.",
  },
  {
    title: "Day-2 Ops",
    duration: "Ongoing",
    detail: "Experience Ops, telemetry, and optimization playbooks keep value compounding post-launch.",
  },
];

const flagshipCaseStudy = {
  title: "Enterprise Audit & Compliance Platform",
  summary:
    "Regulatory inspections across five countries moved from paper to a cloud platform with offline capture, auto-certification, and predictive readiness scoring.",
  metrics: ["45% faster audit closures", "1,200+ sites onboarded", "98% report accuracy"],
  link: "/portfolio/enterprise-audit-compliance-platform",
  image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80",
};

const securityHighlights = [
  {
    title: "Privacy-first architecture",
    description: "Data minimization, consent-driven workflows, and regional data residency options.",
    icon: <Lock className="h-5 w-5 text-primary" />,
  },
  {
    title: "Role-based access",
    description: "Granular permissions, approval chains, and least-privilege enforcement across teams.",
    icon: <ShieldCheck className="h-5 w-5 text-primary" />,
  },
  {
    title: "Audit-ready operations",
    description: "Immutable logs, evidence versioning, and compliance reports on demand.",
    icon: <FileCheck className="h-5 w-5 text-primary" />,
  },
];

export default function Home() {
  return (
    <div className="flex flex-1 flex-col space-y-12 pb-12 pt-8">
      <section className="container animate-softFade">
        <div className="relative overflow-hidden rounded-[32px] bg-[radial-gradient(circle_at_top,_#0b3d2c_0%,_#022d1f_45%,_#011511_100%)] px-6 py-8 text-white md:px-10">
          <div
            className="absolute inset-0 opacity-60"
            style={{
              backgroundImage: `linear-gradient(110deg, rgba(0,0,0,0.55), rgba(1,25,20,0.4)), url(${heroImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(102,194,165,0.25),_transparent_55%)]" />
          <div className="absolute -right-10 top-0 h-56 w-56 rounded-full bg-[#66C2A5]/30 blur-3xl opacity-70 icon-float" />
          <div className="absolute -bottom-10 left-10 h-40 w-40 rounded-full bg-[#004D32]/40 blur-3xl opacity-60" />
          <div className="relative z-10 grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
            <div className="space-y-5 lg:space-y-6">
              <div className="flex items-center gap-4">
                <Image
                  src="/images/logo/1080x1080.png"
                  alt="Spire Technosoft Logo"
                  width={56}
                  height={56}
                  className="rounded-2xl"
                  priority
                />
                <p className="text-[11px] font-semibold uppercase tracking-[0.5em] text-white/70 font-[var(--font-poppins)]">
                  Engineering Business Growth
                </p>
              </div>
              <h1 className="animate-heroHeadline text-4xl font-bold leading-tight md:text-5xl">
                Engineering business growth with <span className="text-gradient">measurable intelligence.</span>
              </h1>
              <p className="text-base text-white/80 md:text-lg">
                We design, build, and scale enterprise platforms that combine elegant experiences, AI, and secure cloud architectures. Every release
                is tied to tangible KPIs.
              </p>
              <p className="text-base text-white/75">
                Platform Pods, Experience Ops, and Intelligence Built-in keep strategy, delivery, and governance moving in lockstep.
              </p>
              <div className="flex flex-col gap-4 animate-ctaSlide sm:flex-row">
                <Link href="/solutions">
                  <Button size="lg" className="w-full rounded-full bg-white text-primary hover:bg-white/90 sm:w-auto">
                    Explore Solutions
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full rounded-full border-white/30 bg-white/0 text-white hover:bg-white/10 sm:w-auto"
                  >
                    Book a Strategy Call
                  </Button>
                </Link>
              </div>
              <div className="flex flex-wrap gap-2 pt-2">
                {heroClients.map((client) => (
                  <span key={client} className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold tracking-wide text-white/80">
                    {client}
                  </span>
                ))}
              </div>
            </div>
            <div className="glass-panel p-6 text-white">
              <p className="text-xs uppercase tracking-[0.3em] text-white/70 font-[var(--font-poppins)]">
                Programs we orchestrate
              </p>
              <div className="mt-4 space-y-4">
                {differentiators.map((item) => (
                  <div key={item.title} className="interactive-card bg-white/10 p-4">
                    <p className="text-sm font-semibold">{item.title}</p>
                    <p className="text-xs uppercase tracking-wide text-emerald-100">{item.metric}</p>
                    <p className="text-sm text-white/80">{item.description}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {impactMetrics.slice(0, 2).map((metric) => (
                  <div key={metric.label} className="interactive-card bg-white/10 p-4 text-left">
                    <p className="text-2xl font-semibold">{metric.value}</p>
                    <p className="text-xs uppercase tracking-wide text-white/70">{metric.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container animate-softFade">
        <div className="section-shell space-y-8">
          <div className="flex flex-col gap-2 text-center">
            <p className="text-sm uppercase tracking-[0.35em] text-secondary font-[var(--font-poppins)]">Outcome Teasers</p>
            <h2 className="text-3xl font-semibold md:text-4xl">Proof points from live enterprise programs</h2>
            <p className="text-muted-foreground md:text-lg">
              Metrics-led engagements that keep the Engineering Business Growth promise across industries.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {outcomeTeasers.map((teaser) => (
              <div key={teaser.title} className="interactive-card bg-white/95 p-5 text-left dark:bg-white/5">
                <p className="text-xs uppercase tracking-[0.3em] text-secondary font-[var(--font-poppins)]">{teaser.metric}</p>
                <p className="text-lg font-semibold">{teaser.title}</p>
                <p className="text-sm text-muted-foreground">{teaser.description}</p>
                <Link href={teaser.link} className="mt-3 inline-flex items-center text-sm font-semibold text-primary">
                  Open case
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container animate-softFade">
        <div className="section-shell space-y-6">
          <p className="text-sm uppercase tracking-[0.3em] text-secondary font-[var(--font-poppins)]">How engagement works</p>
          <h2 className="text-3xl font-semibold md:text-4xl">Discovery to Day-2 ops in a single operating rhythm</h2>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {journeyPhases.map((phase) => (
              <div key={phase.title} className="interactive-card bg-primary/5 p-4 text-sm text-foreground dark:bg-white/5">
                <p className="text-xs font-semibold uppercase tracking-widest text-primary">{phase.duration}</p>
                <p className="text-base font-semibold">{phase.title}</p>
                <p className="text-muted-foreground">{phase.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container animate-softFade">
        <div className="section-shell grid gap-8 lg:grid-cols-[1.1fr,0.9fr]">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-secondary font-[var(--font-poppins)]">Flagship Case Study</p>
            <h2 className="text-3xl font-semibold md:text-4xl">{flagshipCaseStudy.title}</h2>
            <p className="text-muted-foreground">{flagshipCaseStudy.summary}</p>
            <div className="flex flex-wrap gap-3 text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              {flagshipCaseStudy.metrics.map((metric) => (
                <span key={metric} className="rounded-full bg-primary/10 px-3 py-1 text-primary">
                  {metric}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link href={flagshipCaseStudy.link}>
                <Button size="lg">
                  View full case study
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button size="lg" variant="outline">
                  Explore all case studies
                </Button>
              </Link>
            </div>
          </div>
          <div
            className="min-h-[260px] rounded-3xl"
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.15), rgba(0,0,0,0.65)), url(${flagshipCaseStudy.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </div>
      </section>

      <section className="container animate-softFade">
        <div className="section-shell space-y-6">
          <p className="text-sm uppercase tracking-[0.3em] text-secondary font-[var(--font-poppins)]">Security & Compliance</p>
          <h2 className="text-3xl font-semibold md:text-4xl">Trust frameworks for regulated industries</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {securityHighlights.map((item) => (
              <Card key={item.title} className="bg-card">
                <CardContent className="space-y-3 px-6 py-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    {item.icon}
                  </div>
                  <p className="text-base font-semibold">{item.title}</p>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="container animate-softFade">
        <div className="section-shell bg-gradient-to-br from-primary/10 to-secondary/20 text-center">
          <div className="space-y-4">
            <div className="flex items-center justify-center gap-2 text-primary font-[var(--font-poppins)]">
              <Sparkles className="h-5 w-5 icon-float" />
              <p className="text-sm font-semibold uppercase tracking-widest">Innovation Lab</p>
            </div>
            <h2 className="text-3xl font-semibold md:text-4xl">From R&D prototypes to production-ready intelligence</h2>
            <p className="mx-auto max-w-3xl text-base text-muted-foreground md:text-lg">
              Explore how we apply AI, data visualization, computer vision, and immersive interfaces to research-led engagements. We coach distributed product teams, build accelerators, and publish insights that keep you ahead.
            </p>
          </div>
          <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/innovation">
              <Button size="lg" className="w-full sm:w-auto">
                Visit the Innovation Lab
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Book a Discovery Call
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
