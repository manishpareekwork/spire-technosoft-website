import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ActivitySquare, HeartPulse, Factory, Sparkles, LineChart, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const heroImage = "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1600&q=80";
const aboutPreviewImage = "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=900&q=80";
const domainCards = [
  {
    title: "Enterprise Transformation & Audit Platforms",
    meta: "Manufacturing • Audit • Compliance",
    icon: <ActivitySquare className="h-6 w-6 text-primary" />,
    summary:
      "Built global audit suites with offline capture, media uploads, and certification dashboards for regulators and quality teams.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Healthcare & Wellness Applications",
    meta: "Health & Wellness • Consumer Tech",
    icon: <HeartPulse className="h-6 w-6 text-primary" />,
    summary:
      "Launched mobile-first wellness ecosystems covering onboarding, workout tracking, cognitive care, and caregiver portals.",
    image: "https://images.unsplash.com/photo-1584982751630-71223ec43966?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Supply Chain, Retail & Energy Solutions",
    meta: "Retail • Energy • Industrial",
    icon: <Factory className="h-6 w-6 text-primary" />,
    summary:
      "Delivered compliance and operations platforms for suppliers, grids, and industrial programs with analytics and IoT insights.",
    image: "https://images.unsplash.com/photo-1527430253228-e93688616381?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Financial & Data Visualization Platforms",
    meta: "Finance • Capital Markets",
    icon: <LineChart className="h-6 w-6 text-primary" />,
    summary:
      "Interactive reporting suites for capital-market teams turning complex data into actionable decisions.",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Energy & Infrastructure Intelligence",
    meta: "Industrial • Infrastructure",
    icon: <Globe className="h-6 w-6 text-primary" />,
    summary:
      "IoT-powered dashboards connecting field teams, predictive maintenance, and operational foresight.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80",
  },
];

const impactMetrics = [
  { label: "Products Delivered", value: "25+" },
  { label: "Users Reached", value: "100K+" },
  { label: "Interactions Processed", value: "1M+" },
  { label: "On-time Enterprise Deliveries", value: "100%" },
];

const heroSpotlights = [
  {
    title: "Platform Pods",
    metric: "40% faster releases",
    description: "Cross-functional pods align design, AI, and engineering to ship enterprise increments on predictable trains.",
  },
  {
    title: "Intelligence Built-in",
    metric: "UX + AI + Data",
    description: "We pair human-centered journeys with telemetry, automation, and guardrails for regulated industries.",
  },
  {
    title: "Experience Ops",
    metric: "Design + DevOps",
    description: "Design systems, CI/CD, and SRE scripts accelerate every subsequent release and region rollout.",
  },
];

const heroClients = ["Regulated Finance", "Smart Energy", "Healthcare", "Retail & FMCG", "Gov & Public Programs"];

const experienceHighlights = [
  {
    title: "Platform Strategy",
    detail: "Roadmaps, capability maps, and measurable KPIs aligning tech investments to business value.",
  },
  {
    title: "Composable Architecture",
    detail: "Reusable accelerators, secure APIs, and privacy-first data layers tuned for compliance-heavy work.",
  },
  {
    title: "Lifecycle Ownership",
    detail: "Discovery to Day-2 operations with analytics loops and optimization sprints built in.",
  },
  {
    title: "Global Collaboration",
    detail: "Hybrid squads across India, EU, and US with transparent rituals and co-creation workshops.",
  },
];

const journeyPhases = [
  {
    title: "Envision",
    duration: "Weeks 0-2",
    detail: "Immersion workshops, problem framing, and KPI alignment with executive + product teams.",
  },
  {
    title: "Design & Validate",
    duration: "Weeks 2-5",
    detail: "Experience blueprints, prototypes, and AI feasibility spikes co-authored with stakeholders.",
  },
  {
    title: "Build & Launch",
    duration: "Weeks 6-16",
    detail: "Platform pods execute sprints with automated QA, release trains, and security reviews.",
  },
  {
    title: "Scale & Optimize",
    duration: "Post go-live",
    detail: "SRE, telemetry, and optimization playbooks ensure resilience and ongoing value realization.",
  },
];

const quickLinks = [
  {
    title: "Solutions",
    description: "Domain accelerators, composable architectures, and compliance-ready delivery kits.",
    href: "/solutions",
  },
  {
    title: "Portfolio",
    description: "Challenge → solution → outcomes. Explore anonymized case studies across industries.",
    href: "/portfolio",
  },
];

export default function Home() {
  return (
    <div className="flex flex-1 flex-col space-y-12 pb-12 pt-8">
      <section className="container animate-softFade">
        <div className="relative overflow-hidden rounded-[32px] border border-white/15 bg-gradient-to-br from-[#012417] via-[#02402b] to-[#0cb28e] text-white shadow-[0_40px_90px_rgba(1,34,22,0.55)]">
          <div
            className="absolute inset-0 opacity-50"
            style={{
              backgroundImage: `linear-gradient(120deg, rgba(0,0,0,0.45), rgba(1,25,20,0.4)), url(${heroImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.35),_transparent_55%)] blur-3xl opacity-70" />
          <div className="relative z-10 grid gap-10 px-6 py-10 md:px-10 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Image
                  src="/images/logo/1080x1080.png"
                  alt="Spire Technosoft Logo"
                  width={56}
                  height={56}
                  className="rounded-2xl shadow-lg"
                  priority
                />
                <p className="text-[11px] font-semibold uppercase tracking-[0.5em] text-white/70 font-[var(--font-poppins)]">
                  Digital Engineering Studio
                </p>
              </div>
              <h1 className="text-3xl font-bold leading-tight md:text-5xl">
                Engineering business growth with <span className="text-gradient">measurable intelligence.</span>
              </h1>
              <p className="text-lg text-white/85">
                We design, build, and scale enterprise platforms that combine elegant experiences, AI, and secure cloud architectures. Every
                release is tied to tangible KPIs.
              </p>
              <p className="text-base text-white/75">
                Pods unite strategy, product, design, and DevOps so transformations move from concept to launch-ready increments with
                confidence.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link href="/solutions">
                  <Button size="lg" className="w-full bg-white text-primary hover:bg-white/90 sm:w-auto">
                    Explore Solutions
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full border-white/30 bg-white/0 text-white hover:bg-white/10 sm:w-auto"
                  >
                    Book a Strategy Call
                  </Button>
                </Link>
              </div>
              <div className="flex flex-wrap gap-2 pt-4">
                {heroClients.map((client) => (
                  <span key={client} className="rounded-full border border-white/30 px-3 py-1 text-xs font-semibold tracking-wide text-white/80">
                    {client}
                  </span>
                ))}
              </div>
            </div>
            <div className="glass-panel border border-white/30 bg-white/5 p-6 text-white">
              <p className="text-xs uppercase tracking-[0.3em] text-white/70 font-[var(--font-poppins)]">
                Programs we orchestrate
              </p>
              <div className="mt-4 space-y-4">
                {heroSpotlights.map((item) => (
                  <div key={item.title} className="rounded-2xl border border-white/15 bg-white/5 p-4">
                    <p className="text-sm font-semibold">{item.title}</p>
                    <p className="text-xs uppercase tracking-wide text-emerald-100">{item.metric}</p>
                    <p className="text-sm text-white/80">{item.description}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {impactMetrics.slice(0, 2).map((metric) => (
                  <div key={metric.label} className="rounded-xl border border-white/15 bg-white/10 p-4 text-left">
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
        <div className="section-shell grid gap-10 lg:grid-cols-[1.4fr,0.6fr]">
          <div className="space-y-5">
            <p className="text-sm uppercase tracking-[0.3em] text-secondary font-[var(--font-poppins)]">Experience Architecture</p>
            <h2 className="text-3xl font-semibold">Delivering AI-ready platforms with enterprise rigor</h2>
            <p className="text-muted-foreground">
              Spire Technosoft blends strategy, product, design, and deep engineering to modernize legacy stacks and invent new digital
              businesses. Every engagement is modular, transparent, and outcome-led.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              {experienceHighlights.map((highlight) => (
                <div key={highlight.title} className="rounded-2xl border border-emerald-100/40 bg-emerald-50/40 p-4 text-sm text-emerald-900 dark:border-white/10 dark:bg-white/5 dark:text-foreground">
                  <p className="text-base font-semibold">{highlight.title}</p>
                  <p className="text-muted-foreground">{highlight.detail}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <div
              className="h-48 rounded-[28px]"
              style={{
                backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.25), rgba(0,0,0,0.6)), url(${aboutPreviewImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <div className="space-y-3">
              {quickLinks.map((link) => (
                <div key={link.title} className="glass-panel border border-emerald-100/60 bg-white/70 p-5 text-foreground dark:border-white/10 dark:bg-white/5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-base font-semibold">{link.title}</p>
                      <p className="text-sm text-muted-foreground">{link.description}</p>
                    </div>
                    <Link href={link.href} className="inline-flex items-center text-sm font-semibold text-primary">
                      Visit <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container animate-softFade space-y-6">
        <div className="section-shell space-y-6 text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-secondary font-[var(--font-poppins)]">Key Domains</p>
          <h2 className="text-3xl font-semibold md:text-4xl">Built for compliance-heavy, data-rich environments</h2>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {domainCards.map((card) => (
              <Card key={card.title} className="flex flex-col overflow-hidden shadow-[0_15px_30px_rgba(0,0,0,0.06)]">
                <div
                  className="h-36 w-full"
                  style={{
                    backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.05), rgba(0,0,0,0.55)), url(${card.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <CardHeader>
                  <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    {card.icon}
                  </div>
                  <CardTitle className="text-lg">{card.title}</CardTitle>
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">{card.meta}</p>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">{card.summary}</CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="container animate-softFade">
        <div className="section-shell space-y-6">
          <p className="text-sm uppercase tracking-[0.3em] text-secondary font-[var(--font-poppins)]">Delivery Journey</p>
          <h2 className="text-3xl font-semibold">From immersion to scale</h2>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {journeyPhases.map((phase) => (
              <div key={phase.title} className="rounded-2xl border border-primary/10 bg-primary/5 p-4 text-sm text-foreground dark:border-white/10 dark:bg-white/5">
                <p className="text-xs font-semibold uppercase tracking-widest text-primary">{phase.duration}</p>
                <p className="text-base font-semibold">{phase.title}</p>
                <p className="text-muted-foreground">{phase.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container animate-softFade">
        <div className="section-shell">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {impactMetrics.map((metric) => (
              <div key={metric.label} className="rounded-2xl border border-emerald-100/40 bg-white p-5 text-center text-foreground shadow-sm dark:border-white/5 dark:bg-white/5">
                <p className="text-3xl font-bold text-primary">{metric.value}</p>
                <p className="text-sm uppercase tracking-wide text-muted-foreground">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container animate-softFade">
        <div className="section-shell bg-gradient-to-r from-primary/15 via-secondary/20 to-emerald-200/40 text-center text-foreground dark:text-white">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.4em] text-secondary font-[var(--font-poppins)]">Next Step</p>
            <h2 className="text-3xl font-semibold md:text-4xl">Partner with us to build what&apos;s next.</h2>
            <p className="text-muted-foreground md:text-lg">
              Whether you need an audit platform, a wellness companion, or intelligent supply-chain tooling, we align squads to ship with clarity and speed.
            </p>
          </div>
          <div className="mt-6 flex justify-center">
            <Link href="/contact">
              <Button size="lg" className="px-8">
                Book a Discovery Call
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="container animate-softFade">
        <div className="section-shell bg-gradient-to-br from-primary/10 to-secondary/20 text-center">
          <div className="space-y-4">
            <div className="flex items-center justify-center gap-2 text-primary font-[var(--font-poppins)]">
              <Sparkles className="h-5 w-5" />
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
            <Link href="/portfolio">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                See Case Studies
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
