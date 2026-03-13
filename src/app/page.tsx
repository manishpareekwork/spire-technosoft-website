import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Activity,
  CheckCircle2,
  Cpu,
  Lock,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";

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
import { portfolioProjects } from "@/data/portfolio";

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
  const featuredProjects = home.transformations.cards
    .map((card) => {
      const slug = card.href.split("/").pop();
      const project = portfolioProjects.find((item) => item.slug === slug);

      if (!project) {
        return null;
      }

      return {
        ...card,
        project,
      };
    })
    .filter((item): item is NonNullable<typeof item> => Boolean(item))
    .slice(0, 3);

  return (
    <div className="flex flex-1 flex-col">
      <section className="relative overflow-hidden pb-20 pt-10 sm:pt-14 lg:pb-24 lg:pt-20">
        <div className="absolute inset-0 -z-10 hero-mesh opacity-80" />
        <div className="absolute inset-0 -z-10 hero-lines opacity-25" />
        <div className="absolute -left-24 top-6 -z-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute right-0 top-16 -z-10 h-80 w-80 rounded-full bg-accent/12 blur-3xl" />

        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:items-start">
            <div className="space-y-8 animate-softFade">
              <Badge variant="soft" className="w-fit">
                <Sparkles className="h-3.5 w-3.5 icon-accent" />
                {home.hero.eyebrow}
              </Badge>

              <div className="space-y-6">
                <h1 className="display-hero max-w-4xl text-foreground">
                  Intelligent <span className="text-gradient">digital systems</span> for
                  high-trust growth
                </h1>
                <p className="max-w-2xl body-lg text-muted-foreground">
                  {home.hero.description}
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href={home.hero.primaryCta.href}
                  className={cn(buttonVariants({ size: "xl" }), "justify-center")}
                >
                  {home.hero.primaryCta.label}
                  <ArrowRight className="h-4 w-4 icon-inverse" />
                </Link>
                <Link
                  href={home.hero.secondaryCta.href}
                  className={cn(
                    buttonVariants({ variant: "outline", size: "xl" }),
                    "justify-center"
                  )}
                >
                  {home.hero.secondaryCta.label}
                </Link>
              </div>

              <div className="flex flex-wrap gap-3">
                {home.hero.sectors.map((sector) => (
                  <span
                    key={sector}
                    className="rounded-full border border-border/65 bg-white/55 px-4 py-2 text-sm text-muted-foreground shadow-sm backdrop-blur dark:bg-surface/65"
                  >
                    {sector}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass-effect animate-softFade rounded-[2rem] p-6 sm:p-8" style={{ animationDelay: "0.08s" }}>
              <div className="space-y-6">
                <div className="space-y-2">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-primary">
                    Delivery model
                  </p>
                  <h2 className="text-2xl font-semibold text-foreground">
                    Fewer layers. Clearer accountability. Faster momentum.
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Every engagement combines product thinking, system design, and execution
                    discipline from day one.
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-3">
                  {siteContent.differentiators.map((item, index) => {
                    const Icon = [Workflow, Activity, Cpu][index % 3];

                    return (
                      <div key={item.title} className="surface-card rounded-[1.5rem] p-5">
                        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10">
                          <Icon className="h-5 w-5 icon-accent" />
                        </div>
                        <p className="mt-4 text-base font-semibold text-foreground">
                          {item.title}
                        </p>
                        <p className="mt-1 text-sm text-muted-foreground">{item.metric}</p>
                      </div>
                    );
                  })}
                </div>

                <div className="surface-card rounded-[1.5rem] p-5">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                        First two weeks
                      </p>
                      <p className="mt-2 text-lg font-semibold text-foreground">
                        What partners get before build starts
                      </p>
                    </div>
                    <div className="hidden h-14 w-14 items-center justify-center rounded-full bg-primary/10 sm:flex">
                      <Sparkles className="h-6 w-6 icon-accent" />
                    </div>
                  </div>

                  <div className="mt-5 grid gap-3">
                    {home.operatingRhythm.steps.slice(0, 3).map((step) => (
                      <div
                        key={step.title}
                        className="flex items-start gap-3 rounded-[1.25rem] bg-white/55 px-4 py-3 dark:bg-surface-2/80"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 icon-accent" />
                        <div>
                          <p className="text-sm font-semibold text-foreground">{step.title}</p>
                          <p className="text-sm text-muted-foreground">{step.detail}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {home.stats.map((metric, index) => (
              <Stat
                key={metric.label}
                label={metric.label}
                value={metric.value}
                helper={metric.helper}
                icon={[Activity, Workflow, Cpu, ShieldCheck][index % 4]}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell pt-8">
        <div className="container">
          <SocialProofBand
            title="Trusted delivery signal"
            description="Enterprise teams rely on Spire for regulated rollouts, resilient operations, and durable adoption."
            variant="compact"
          />
        </div>
      </section>

      <section className="section-shell">
        <div className="container space-y-12">
          <SectionHeader
            eyebrow={home.transformations.eyebrow}
            title={home.transformations.title}
            description={home.transformations.description}
          />

          <div className="grid gap-6">
            {featuredProjects.map(({ project, href, metric, title, summary }) => (
              <Link
                key={project.slug}
                href={href}
                className="group grid gap-6 overflow-hidden rounded-[2rem] surface-card p-4 lg:grid-cols-[0.92fr,1.08fr] lg:p-5"
              >
                <div className="relative min-h-[260px] overflow-hidden rounded-[1.5rem] bg-surface-2">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    sizes="(min-width: 1024px) 40vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/40 via-transparent to-transparent" />
                  <div className="absolute left-4 top-4">
                    <Badge variant="soft">{metric}</Badge>
                  </div>
                </div>

                <div className="flex flex-col justify-between gap-6 p-2">
                  <div className="space-y-4">
                    <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-primary">
                      Featured transformation
                    </p>
                    <div className="space-y-3">
                      <h3 className="text-3xl font-semibold text-foreground">{title}</h3>
                      <p className="text-base text-muted-foreground">{summary}</p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.techStack.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full bg-white/65 px-3 py-1 text-xs font-medium text-muted-foreground shadow-sm dark:bg-surface-2/75"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="grid gap-3">
                      {project.outcomes.slice(0, 2).map((outcome) => (
                        <div key={outcome} className="flex items-start gap-3">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 icon-accent" />
                          <p className="text-sm text-muted-foreground">{outcome}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-2 text-sm font-semibold text-foreground">
                    View case study
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 icon-accent" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="flex justify-center">
            <Link
              href="/portfolio"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }), "px-7")}
            >
              View full portfolio
              <ArrowRight className="h-4 w-4 icon-accent" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="container grid gap-8 lg:grid-cols-[0.92fr,1.08fr]">
          <div className="space-y-6">
            <SectionHeader
              align="left"
              eyebrow={home.operatingRhythm.eyebrow}
              title={home.operatingRhythm.title}
              description={home.operatingRhythm.description}
            />

            <div className="surface-card rounded-[2rem] p-6 sm:p-8">
              <Stepper
                steps={home.operatingRhythm.steps.map((step) => ({
                  title: step.title,
                  description: step.detail,
                  meta: step.duration,
                }))}
              />

              <div className="mt-8">
                <Link href={home.operatingRhythm.cta.href} className={cn(buttonVariants({ size: "lg" }))}>
                  {home.operatingRhythm.cta.label}
                </Link>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <SectionHeader
              align="left"
              eyebrow={home.securityPrinciples.eyebrow}
              title={home.securityPrinciples.title}
              description={home.securityPrinciples.description}
            />

            <div className="grid gap-4 sm:grid-cols-2">
              {home.securityPrinciples.principles.map((principle, index) => {
                const Icon = securityIcons[index % securityIcons.length];

                return (
                  <div key={principle.title} className="interactive-card rounded-[1.75rem] p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                      <Icon className="h-5 w-5 icon-accent" />
                    </div>
                    <h3 className="mt-5 text-lg font-semibold text-foreground">
                      {principle.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">{principle.detail}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="container space-y-12">
          <SectionHeader
            eyebrow="Industry focus"
            title="Built for complex, regulated verticals"
            description="Every pod is structured around domain realities: governance, compliance, operations, and measurable adoption."
          />

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {industryProfiles.slice(0, 6).map((industry) => (
              <Link
                key={industry.slug}
                href={`/industries/${industry.slug}`}
                className="group interactive-card rounded-[1.75rem] p-6"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-2">
                    <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-primary">
                      {industry.title}
                    </p>
                    <h3 className="text-xl font-semibold text-foreground">
                      {industry.summary}
                    </h3>
                  </div>
                  <ArrowRight className="mt-1 h-5 w-5 icon-accent transition-transform group-hover:translate-x-1" />
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {industry.successMetrics.slice(0, 2).map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-white/65 px-3 py-1 text-xs font-medium text-muted-foreground shadow-sm dark:bg-surface-2/75"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="container">
          <ResourceDownloads
            title="Thinking pieces and delivery playbooks"
            description="Share-ready briefs to align stakeholders, procurement teams, and governance reviewers without another long deck."
          />
        </div>
      </section>

      <section className="section-shell pt-8">
        <div className="container">
          <SocialProofBand
            title="Client perspective"
            description="Repeated patterns, not one-off wins. Our work shows up in release velocity, operating confidence, and audit-ready delivery."
            variant="full"
          />
        </div>
      </section>

      <section className="container pb-28 pt-8">
        <div className="cta-band rounded-[2.5rem] px-8 py-20 text-center sm:px-10">
          <div className="cta-inner mx-auto max-w-3xl space-y-8">
            <Badge variant="soft" className="mx-auto bg-white/10 text-white border-white/15">
              <Sparkles className="h-3.5 w-3.5 text-white" />
              {home.labCta.eyebrow}
            </Badge>
            <h2 className="display-1 text-white">{home.labCta.title}</h2>
            <p className="body-lg text-white/78">{home.labCta.description}</p>
            <div className="flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href={home.labCta.primaryCta.href}
                className={cn(buttonVariants({ size: "xl" }), "bg-white text-slate-900 hover:bg-white/92")}
              >
                {home.labCta.primaryCta.label}
              </Link>
              <Link
                href={home.labCta.secondaryCta.href}
                className={cn(
                  buttonVariants({ variant: "outline", size: "xl" }),
                  "border-white/25 bg-white/8 text-white hover:bg-white/14 hover:text-white"
                )}
              >
                {home.labCta.secondaryCta.label}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
