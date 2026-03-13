import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Activity,
  ArrowRight,
  CheckCircle2,
  Cpu,
  Lock,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button-variants";
import { SectionHeader } from "@/components/ui/section-header";
import { Stat } from "@/components/ui/stat";
import { Stepper } from "@/components/ui/stepper";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { siteContent } from "@/content/site";
import { industryProfiles } from "@/data/industries";
import { insightArticles } from "@/data/insights";
import { portfolioProjects } from "@/data/portfolio";
import { solutionDetails } from "@/data/solutions";
import { absoluteUrl, siteKeywords } from "@/lib/seo";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "AI-Powered Platforms for Regulated Industries | Spire Technosoft",
  description:
    "Spire Technosoft helps finance, healthcare, energy, and retail teams build secure AI-powered platforms for compliance, operations, and customer experience.",
  keywords: [
    ...siteKeywords,
    "AI-powered platforms for regulated industries",
    "secure digital product engineering",
    "enterprise case studies for regulated industries",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "AI-Powered Platforms for Regulated Industries | Spire Technosoft",
    description:
      "Spire Technosoft helps finance, healthcare, energy, and retail teams build secure AI-powered platforms for compliance, operations, and customer experience.",
    images: [{ url: siteContent.seo.defaultOg }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI-Powered Platforms for Regulated Industries | Spire Technosoft",
    description:
      "Spire Technosoft helps finance, healthcare, energy, and retail teams build secure AI-powered platforms for compliance, operations, and customer experience.",
    images: [siteContent.seo.defaultOg],
  },
};

const securityIcons = [ShieldCheck, Lock, Activity, Cpu, Workflow];

const featuredSolutions = solutionDetails.filter((solution) =>
  ["audit", "healthcare", "industrial-iot", "supply-chain"].includes(solution.slug)
);

const featuredIndustries = industryProfiles.filter((industry) =>
  ["finance", "healthcare", "energy", "retail-fmcg"].includes(industry.slug)
);

const faqItems = [
  {
    question: "What does Spire Technosoft actually build?",
    answer:
      "We design and ship secure digital platforms for regulated industries, including compliance systems, healthcare ecosystems, utility dashboards, and supply-chain tools.",
  },
  {
    question: "Which industries are the best fit?",
    answer:
      "Our strongest fit is finance, healthcare, energy and utilities, manufacturing, and retail programs that need security, governance, and measurable operational outcomes.",
  },
  {
    question: "How quickly can a first release go live?",
    answer:
      "Most engagements start with a structured discovery and pilot plan, then move into a first release over a focused 6 to 12 week delivery window depending on scope and integrations.",
  },
  {
    question: "How do you handle privacy and compliance requirements?",
    answer:
      "We build around privacy-first data models, role-based access, audit trails, and release governance so security and compliance are part of the platform, not a last-minute review.",
  },
];

export default function Home() {
  const { home, socialProof } = siteContent;
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

  const homeStructuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "AI-Powered Platforms for Regulated Industries",
      description:
        "Spire Technosoft helps finance, healthcare, energy, and retail teams build secure AI-powered platforms for compliance, operations, and customer experience.",
      url: absoluteUrl("/"),
      about: featuredSolutions.map((solution) => solution.title),
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Core solutions",
      itemListElement: featuredSolutions.map((solution, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: solution.title,
        url: absoluteUrl(`/solutions/${solution.slug}`),
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ];

  return (
    <div className="flex flex-1 flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeStructuredData) }}
      />

      <section className="relative overflow-hidden pb-20 pt-10 sm:pt-14 lg:pb-24 lg:pt-20">
        <div className="absolute inset-0 -z-10 hero-mesh opacity-85" />
        <div className="absolute inset-0 -z-10 hero-lines opacity-20" />
        <div className="absolute -left-24 top-10 -z-10 h-72 w-72 rounded-full bg-primary/12 blur-3xl" />
        <div className="absolute right-0 top-8 -z-10 h-80 w-80 rounded-full bg-accent/15 blur-3xl" />

        <div className="container">
          <div className="grid gap-12 lg:grid-cols-[1.02fr,0.98fr] lg:items-start">
            <div className="space-y-8 animate-softFade">
              <Badge variant="soft" className="w-fit">
                <Sparkles className="h-3.5 w-3.5 icon-accent" />
                {home.hero.eyebrow}
              </Badge>

              <div className="space-y-6">
                <h1 className="display-hero max-w-5xl text-foreground">{home.hero.title}</h1>
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

              <div className="grid gap-3 sm:grid-cols-3">
                {siteContent.differentiators.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[1.5rem] bg-white/50 p-4 shadow-sm backdrop-blur-md dark:bg-surface/72"
                  >
                    <p className="text-sm font-semibold text-foreground">{item.title}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{item.metric}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                {home.hero.sectors.map((sector) => (
                  <span
                    key={sector}
                    className="rounded-full bg-white/58 px-4 py-2 text-sm text-muted-foreground shadow-sm backdrop-blur dark:bg-surface/70"
                  >
                    {sector}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative animate-softFade" style={{ animationDelay: "0.08s" }}>
              <div className="glass-effect relative overflow-hidden rounded-[2.25rem] p-5 sm:p-6">
                <div className="absolute inset-0 hero-mesh opacity-70" />
                <div className="absolute inset-0 dot-grid opacity-[0.16]" />

                <div className="relative space-y-5">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                    <div className="space-y-2">
                      <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-primary">
                        Live delivery snapshot
                      </p>
                      <h2 className="text-2xl font-semibold text-foreground">
                        Compliance, operations, and experience in one system
                      </h2>
                    </div>
                    <Badge variant="soft" className="w-fit">
                      45% faster audit closures
                    </Badge>
                  </div>

                  <div className="relative min-h-[320px] overflow-hidden rounded-[1.85rem] bg-surface-2">
                    <Image
                      src="/images/manufacturing-dashboard.png"
                      alt="Dashboard preview of a compliance and operations platform"
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 44vw, 100vw"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/45 via-slate-900/8 to-transparent" />

                    <div className="absolute left-4 top-4 rounded-[1.25rem] bg-white/88 px-4 py-3 shadow-soft backdrop-blur-xl dark:bg-surface/88">
                      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-primary">
                        Audit status
                      </p>
                      <p className="mt-1 text-lg font-semibold text-foreground">98% report accuracy</p>
                    </div>

                    <div className="absolute bottom-4 right-4 w-[12rem] rounded-[1.35rem] bg-slate-950/72 px-4 py-3 text-white shadow-soft backdrop-blur-xl">
                      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-white/60">
                        Active program
                      </p>
                      <p className="mt-2 text-sm font-medium text-white">
                        Release dashboards, field tooling, and audit trails in one rollout
                      </p>
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-3">
                    {home.stats.slice(0, 3).map((metric) => (
                      <div
                        key={metric.label}
                        className="rounded-[1.4rem] bg-white/60 px-4 py-4 shadow-sm backdrop-blur dark:bg-surface-2/78"
                      >
                        <p className="text-2xl font-semibold text-foreground">{metric.value}</p>
                        <p className="mt-2 text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground">
                          {metric.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="absolute -left-5 bottom-10 hidden w-52 rounded-[1.5rem] bg-white/78 p-4 shadow-soft backdrop-blur-xl xl:block dark:bg-surface/88">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-primary">
                  Team model
                </p>
                <p className="mt-2 text-sm font-semibold text-foreground">
                  Product, design, and engineering working as one delivery unit
                </p>
              </div>

              <div className="absolute -right-4 top-12 hidden w-48 rounded-[1.5rem] glass-effect p-4 xl:block">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-primary">
                  Week 1 output
                </p>
                <p className="mt-2 text-sm text-foreground">Pilot scope, KPI baseline, and release plan</p>
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

      <section className="section-shell pt-6">
        <div className="container">
          <div className="surface-card rounded-[2.5rem] px-6 py-8 sm:px-8 sm:py-10">
            <div className="grid gap-8 lg:grid-cols-[0.74fr,1.26fr]">
              <div className="space-y-4">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-primary">
                  Trusted by growing regulated programs
                </p>
                <h2 className="heading-2 text-foreground">
                  Enterprise teams stay because the work produces measurable movement.
                </h2>
                <p className="body-md text-muted-foreground">
                  The strongest signal is not polished copy. It is delivery that improves audit
                  speed, visit adherence, system reliability, and operator visibility.
                </p>
              </div>

              <div className="space-y-6">
                <div className="grid gap-4 md:grid-cols-2">
                  {socialProof.resultsCallouts.map((callout) => (
                    <div
                      key={callout.metric}
                      className="rounded-[1.75rem] bg-white/58 p-5 shadow-sm backdrop-blur dark:bg-surface-2/78"
                    >
                      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                        Impact
                      </p>
                      <p className="mt-2 text-3xl font-semibold text-foreground">{callout.metric}</p>
                      <p className="mt-3 text-sm text-muted-foreground">{callout.detail}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  {socialProof.clientLogos.map((client) => (
                    <div
                      key={client.name}
                      className="rounded-full bg-white/62 px-5 py-3 text-center shadow-sm backdrop-blur dark:bg-surface/72"
                    >
                      <span className="block text-sm font-medium tracking-tight text-foreground">
                        {client.name}
                      </span>
                      <span className="block text-[0.62rem] uppercase tracking-[0.18em] text-muted-foreground">
                        {client.tagline}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="container space-y-12">
          <SectionHeader
            eyebrow="Solutions"
            title="What we build for complex, regulated teams"
            description="Clearer language, tighter positioning, and solution pages mapped to real buyer needs."
          />

          <div className="grid gap-5 lg:grid-cols-2">
            {featuredSolutions.map((solution) => (
              <Link
                key={solution.slug}
                href={`/solutions/${solution.slug}`}
                className="group interactive-card rounded-[2rem] p-6 sm:p-7"
              >
                <div className="flex items-start justify-between gap-4">
                  <Badge variant="outline" className="w-fit">
                    {solution.tags.slice(0, 2).join(" / ")}
                  </Badge>
                  <ArrowRight className="mt-1 h-5 w-5 icon-accent transition-transform group-hover:translate-x-1" />
                </div>

                <div className="mt-5 space-y-4">
                  <div className="space-y-3">
                    <h3 className="text-2xl font-semibold text-foreground">{solution.title}</h3>
                    <p className="text-sm text-muted-foreground">{solution.summary}</p>
                  </div>

                  <div className="grid gap-3">
                    {solution.outcomes.slice(0, 2).map((outcome) => (
                      <div key={outcome} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 icon-accent" />
                        <p className="text-sm text-muted-foreground">{outcome}</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {solution.successMetrics.slice(0, 2).map((metric) => (
                      <span
                        key={metric}
                        className="rounded-full bg-white/65 px-3 py-1 text-xs font-medium text-muted-foreground shadow-sm dark:bg-surface-2/75"
                      >
                        {metric}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="container grid gap-8 lg:grid-cols-[0.78fr,1.22fr]">
          <div className="space-y-5">
            <SectionHeader
              align="left"
              eyebrow="Industries"
              title="A clearer story for each market you serve"
              description="Instead of one generic enterprise message, we now surface the programs, controls, and outcomes buyers expect in each vertical."
            />
            <p className="body-md text-muted-foreground">
              Finance buyers care about approvals and reporting confidence. Healthcare teams care
              about privacy, adherence, and coordination. Utility teams care about telemetry,
              uptime, and field visibility. The page now reflects that difference.
            </p>
          </div>

          <Tabs defaultValue={featuredIndustries[0].slug}>
            <TabsList>
              {featuredIndustries.map((industry) => (
                <TabsTrigger key={industry.slug} value={industry.slug}>
                  {industry.title.split(" & ")[0]}
                </TabsTrigger>
              ))}
            </TabsList>

            {featuredIndustries.map((industry) => (
              <TabsContent key={industry.slug} value={industry.slug}>
                <div className="glass-effect rounded-[2.25rem] p-5 sm:p-7">
                  <div className="grid gap-6 lg:grid-cols-[0.88fr,1.12fr]">
                    <div className="relative min-h-[300px] overflow-hidden rounded-[1.8rem] bg-surface-2">
                      <Image
                        src={industry.image}
                        alt={`${industry.title} dashboard preview`}
                        fill
                        className="object-cover"
                        sizes="(min-width: 1024px) 36vw, 100vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/38 via-slate-900/8 to-transparent" />
                    </div>

                    <div className="space-y-6">
                      <div className="space-y-3">
                        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-primary">
                          {industry.title}
                        </p>
                        <h3 className="text-3xl font-semibold text-foreground">{industry.summary}</h3>
                      </div>

                      <div className="grid gap-5 sm:grid-cols-2">
                        <div className="space-y-3">
                          <p className="text-sm font-semibold text-foreground">What teams need</p>
                          <div className="space-y-3">
                            {industry.focusAreas.slice(0, 3).map((item) => (
                              <div key={item} className="flex items-start gap-3">
                                <CheckCircle2 className="mt-0.5 h-4 w-4 icon-accent" />
                                <p className="text-sm text-muted-foreground">{item}</p>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="space-y-3">
                          <p className="text-sm font-semibold text-foreground">Compliance and controls</p>
                          <div className="space-y-3">
                            {industry.compliance.slice(0, 3).map((item) => (
                              <div key={item} className="flex items-start gap-3">
                                <ShieldCheck className="mt-0.5 h-4 w-4 icon-accent" />
                                <p className="text-sm text-muted-foreground">{item}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {industry.successMetrics.map((metric) => (
                          <span
                            key={metric}
                            className="rounded-full bg-white/65 px-3 py-1 text-xs font-medium text-muted-foreground shadow-sm dark:bg-surface-2/75"
                          >
                            {metric}
                          </span>
                        ))}
                      </div>

                      <div className="flex flex-col gap-3 sm:flex-row">
                        <Link href={`/industries/${industry.slug}`} className={cn(buttonVariants({ size: "lg" }))}>
                          Explore industry page
                        </Link>
                        <Link
                          href={industry.caseStudies[0]?.href ?? "/portfolio"}
                          className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
                        >
                          View related case study
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
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
                      Featured case study
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
        <div className="container grid gap-8 lg:grid-cols-[1.04fr,0.96fr]">
          <div className="cta-band rounded-[2.5rem] px-8 py-10 sm:px-10 sm:py-12">
            <div className="cta-inner grid gap-8 lg:grid-cols-[0.92fr,1.08fr] lg:items-center">
              <div className="space-y-6">
                <Badge variant="soft" className="w-fit border-white/15 bg-white/10 text-white">
                  <Sparkles className="h-3.5 w-3.5 text-white" />
                  {home.labCta.eyebrow}
                </Badge>
                <div className="space-y-4">
                  <h2 className="display-1 text-white">{home.labCta.title}</h2>
                  <p className="body-lg text-white/78">{home.labCta.description}</p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Link
                    href={home.labCta.primaryCta.href}
                    className={cn(
                      buttonVariants({ size: "lg" }),
                      "bg-white text-slate-900 hover:bg-white/92"
                    )}
                  >
                    {home.labCta.primaryCta.label}
                  </Link>
                  <Link
                    href={home.labCta.secondaryCta.href}
                    className={cn(
                      buttonVariants({ variant: "outline", size: "lg" }),
                      "border-white/25 bg-white/8 text-white hover:bg-white/14 hover:text-white"
                    )}
                  >
                    {home.labCta.secondaryCta.label}
                  </Link>
                </div>
              </div>

              <div className="relative min-h-[320px] overflow-hidden rounded-[2rem] bg-white/6">
                <Image
                  src="/images/energy-dashboard.png"
                  alt="Innovation dashboard preview with AI and predictive monitoring"
                  fill
                  className="object-cover opacity-90"
                  sizes="(min-width: 1024px) 38vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/48 via-slate-900/18 to-transparent" />
                <div className="absolute left-4 top-4 rounded-[1.2rem] bg-white/12 px-4 py-3 text-white backdrop-blur">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-white/65">
                    Fast sprint
                  </p>
                  <p className="mt-1 text-sm font-medium text-white">Prototype in 2 weeks</p>
                </div>
                <div className="absolute bottom-4 right-4 rounded-[1.2rem] bg-white/12 px-4 py-3 text-white backdrop-blur">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-white/65">
                    Focus areas
                  </p>
                  <p className="mt-1 text-sm font-medium text-white">
                    AI copilots, dashboards, predictive workflows
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-5">
            <SectionHeader
              align="left"
              eyebrow="Insights"
              title="Content built around real search intent"
              description="These pages target the topics buyers actually look for before they reach out."
            />

            <div className="grid gap-4">
              {insightArticles.map((article) => (
                <Link
                  key={article.slug}
                  href={`/insights/${article.slug}`}
                  className="group interactive-card rounded-[1.8rem] p-5"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-3">
                      <Badge variant="outline" className="w-fit">
                        {article.category}
                      </Badge>
                      <h3 className="text-xl font-semibold text-foreground">{article.title}</h3>
                      <p className="text-sm text-muted-foreground">{article.excerpt}</p>
                    </div>
                    <ArrowRight className="mt-1 h-5 w-5 icon-accent transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              ))}

              <Link
                href="/insights"
                className={cn(buttonVariants({ variant: "outline", size: "lg" }), "justify-center")}
              >
                Browse all insights
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell pt-8">
        <div className="container grid gap-8 lg:grid-cols-[0.78fr,1.22fr]">
          <SectionHeader
            align="left"
            eyebrow="FAQ"
            title="Questions buyers usually ask before they book"
            description="This copy is intentionally plain and search-friendly so the site answers practical questions directly."
          />

          <div className="space-y-4">
            {faqItems.map((item) => (
              <div key={item.question} className="surface-card rounded-[1.8rem] p-6">
                <h3 className="text-lg font-semibold text-foreground">{item.question}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container pb-28 pt-8">
        <div className="cta-band rounded-[2.5rem] px-8 py-16 text-center sm:px-10 sm:py-20">
          <div className="cta-inner mx-auto max-w-3xl space-y-8">
            <Badge variant="soft" className="mx-auto border-white/15 bg-white/10 text-white">
              <Sparkles className="h-3.5 w-3.5 text-white" />
              Ready to move?
            </Badge>
            <h2 className="display-1 text-white">Ready to transform compliance and operations?</h2>
            <p className="body-lg text-white/78">
              Book a free consultation and we will map the fastest path to a secure first release,
              clearer metrics, and a stronger delivery plan.
            </p>
            <div className="flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/contact"
                className={cn(buttonVariants({ size: "xl" }), "bg-white text-slate-900 hover:bg-white/92")}
              >
                Book Free Consultation
              </Link>
              <Link
                href="/portfolio"
                className={cn(
                  buttonVariants({ variant: "outline", size: "xl" }),
                  "border-white/25 bg-white/8 text-white hover:bg-white/14 hover:text-white"
                )}
              >
                See Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
