import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Activity,
  ArrowRight,
  BrainCircuit,
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

const featuredSolutions = solutionDetails.filter((solution) =>
  ["audit", "healthcare", "industrial-iot", "supply-chain"].includes(solution.slug)
);

const featuredIndustries = industryProfiles.filter((industry) =>
  ["finance", "healthcare", "energy", "retail-fmcg"].includes(industry.slug)
);

const featuredProjects = siteContent.home.transformations.cards
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

const faqItems = [
  {
    question: "What does Spire Technosoft actually build?",
    answer:
      "We build secure digital platforms for regulated industries, including audit systems, healthcare ecosystems, industrial dashboards, and supplier operations tools.",
  },
  {
    question: "How quickly can a first release go live?",
    answer:
      "Most engagements start with discovery and a pilot scope, then move into a focused first release over 6 to 12 weeks depending on complexity and integrations.",
  },
  {
    question: "How do you handle privacy and compliance?",
    answer:
      "We design around privacy-first data models, role-based access, audit trails, and release governance so compliance is part of the product foundation.",
  },
];

export default function Home() {
  const { home, socialProof } = siteContent;

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "AI-Powered Platforms for Regulated Industries",
      description: metadata.description,
      url: absoluteUrl("/"),
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <section className="relative overflow-hidden pb-20 pt-8 sm:pt-12 lg:pb-24">
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,rgba(233,177,103,0.14),transparent_24rem),linear-gradient(180deg,rgba(248,243,237,0.75),rgba(248,243,237,0.98))]" />
        <div className="absolute inset-0 -z-10 hero-lines opacity-20" />
        <div className="container">
          <div className="relative overflow-hidden rounded-[2.8rem] section-contrast px-6 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-14">
            <div className="absolute inset-0">
              <Image
                src="/images/manufacturing-dashboard.png"
                alt="Spire platform preview showing compliance dashboards and operations workflows"
                fill
                className="object-cover opacity-[0.17]"
                sizes="100vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background via-background/88 to-background/42" />
            </div>

            <div className="relative grid gap-12 lg:grid-cols-[0.88fr,1.12fr] lg:items-end">
              <div className="space-y-8 animate-softFade">
                <Badge variant="soft" className="w-fit">
                  <Sparkles className="h-3.5 w-3.5 icon-accent" />
                  {home.hero.eyebrow}
                </Badge>

                <div className="space-y-5">
                  <h1 className="display-hero max-w-4xl text-foreground">{home.hero.title}</h1>
                  <p className="max-w-2xl body-lg text-muted-foreground">{home.hero.description}</p>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <Link href={home.hero.primaryCta.href} className={cn(buttonVariants({ size: "xl" }))}>
                    {home.hero.primaryCta.label}
                    <ArrowRight className="h-4 w-4 icon-inverse" />
                  </Link>
                  <Link
                    href={home.hero.secondaryCta.href}
                    className={cn(buttonVariants({ variant: "outline", size: "xl" }))}
                  >
                    {home.hero.secondaryCta.label}
                  </Link>
                </div>

                <div className="flex flex-wrap gap-2">
                  {home.hero.sectors.map((sector) => (
                    <span
                      key={sector}
                      className="rounded-full bg-white/58 px-4 py-2 text-sm text-muted-foreground shadow-sm backdrop-blur dark:bg-surface/72"
                    >
                      {sector}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid gap-4 animate-softFade lg:pl-10" style={{ animationDelay: "0.08s" }}>
                <div className="grid gap-4 sm:grid-cols-3">
                  {home.stats.slice(0, 3).map((metric) => (
                    <div
                      key={metric.label}
                      className="compact-tile rounded-[1.6rem] px-4 py-5 shadow-sm"
                    >
                      <p className="text-2xl font-semibold text-foreground">{metric.value}</p>
                      <p className="mt-2 text-[0.68rem] uppercase tracking-[0.18em] text-muted-foreground">
                        {metric.label}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="grid gap-3">
                  {socialProof.resultsCallouts.map((callout) => (
                    <div
                      key={callout.metric}
                      className="grid gap-3 rounded-[1.75rem] bg-slate-950/84 px-5 py-5 text-white shadow-soft backdrop-blur lg:grid-cols-[0.38fr,0.62fr]"
                    >
                      <p className="text-lg font-semibold text-white">{callout.metric}</p>
                      <p className="text-sm leading-relaxed text-white/68">{callout.detail}</p>
                    </div>
                  ))}
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

      <section className="section-shell pt-4">
        <div className="container space-y-10">
          <SectionHeader
            eyebrow="Solutions snapshot"
            title="What buyers can understand in one scan"
            description="Compact solution strips instead of another wall of large cards."
          />

          <div className="grid gap-4 lg:grid-cols-4">
            {featuredSolutions.map((solution, index) => {
              const Icon = [ShieldCheck, BrainCircuit, Cpu, Workflow][index % 4];

              return (
                <Link
                  key={solution.slug}
                  href={`/solutions/${solution.slug}`}
                  className="group compact-tile rounded-[1.8rem] px-5 py-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-soft"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10">
                      <Icon className="h-5 w-5 icon-accent" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-base font-semibold text-foreground">{solution.title}</h3>
                      <p className="text-sm text-muted-foreground">{solution.summary}</p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="container grid gap-8 lg:grid-cols-[0.76fr,1.24fr]">
          <div className="space-y-5">
            <SectionHeader
              align="left"
              eyebrow="Industries served"
              title="Context changes by vertical, so the page should too"
              description="Each industry tab now carries its own image, problems, controls, and proof points instead of repeating the same generic layout."
            />
            <p className="body-md text-muted-foreground">
              Finance teams need reporting clarity. Healthcare teams need privacy-aware workflows.
              Utility teams need operational visibility. Retail teams need supplier control. The
              site should make those differences obvious.
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
                <div className="overflow-hidden rounded-[2.4rem] section-contrast p-4 sm:p-5">
                  <div className="grid gap-6 lg:grid-cols-[0.42fr,0.58fr] lg:items-stretch">
                    <div className="relative min-h-[320px] overflow-hidden rounded-[1.9rem] bg-surface-2">
                      <Image
                        src={industry.image}
                        alt={`${industry.title} background`}
                        fill
                        className="object-cover"
                        sizes="(min-width: 1024px) 34vw, 100vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/45 via-slate-900/12 to-transparent" />
                    </div>

                    <div className="space-y-5 px-2 py-2 sm:px-3">
                      <div className="space-y-3">
                        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-primary">
                          {industry.title}
                        </p>
                        <h3 className="heading-2 text-foreground">{industry.summary}</h3>
                      </div>

                      <div className="grid gap-5 sm:grid-cols-2">
                        <div className="space-y-3">
                          <p className="text-sm font-semibold text-foreground">Key challenges</p>
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
                          <p className="text-sm font-semibold text-foreground">Controls and rigor</p>
                          <div className="space-y-3">
                            {industry.compliance.slice(0, 3).map((item) => (
                              <div key={item} className="flex items-start gap-3">
                                <Lock className="mt-0.5 h-4 w-4 icon-accent" />
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
        <div className="container space-y-10">
          <SectionHeader
            eyebrow="Case studies"
            title="Timeline-style proof instead of another grid of cards"
            description="Each transformation shows the core shift, the measurable result, and the technology behind it."
          />

          <div className="timeline-rail space-y-8 pl-8 sm:pl-10">
            {featuredProjects.map(({ project, title, summary, metric, href }, index) => (
              <Link
                key={project.slug}
                href={href}
                className="group relative block rounded-[2.2rem] section-contrast p-4 sm:p-5"
              >
                <span className="absolute -left-[2.1rem] top-8 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground shadow-soft">
                  {index + 1}
                </span>

                <div className="grid gap-6 lg:grid-cols-[0.7fr,1.3fr] lg:items-center">
                  <div className="relative min-h-[220px] overflow-hidden rounded-[1.7rem] bg-surface-2">
                    <Image
                      src={project.image}
                      alt={project.imageAlt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      sizes="(min-width: 1024px) 28vw, 100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/38 via-slate-900/10 to-transparent" />
                  </div>

                  <div className="space-y-4 px-1">
                    <div className="flex flex-wrap items-center gap-3">
                      <Badge variant="soft">{metric}</Badge>
                      <span className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                        {project.domain}
                      </span>
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-3xl font-semibold text-foreground">{title}</h3>
                      <p className="text-base text-muted-foreground">{summary}</p>
                    </div>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {project.outcomes.slice(0, 2).map((outcome) => (
                        <div key={outcome} className="flex items-start gap-3">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 icon-accent" />
                          <p className="text-sm text-muted-foreground">{outcome}</p>
                        </div>
                      ))}
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
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-foreground">
                      Read case study
                      <ArrowRight className="h-4 w-4 icon-accent transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="container grid gap-8 lg:grid-cols-[0.88fr,1.12fr]">
          <div className="space-y-5">
            <SectionHeader
              align="left"
              eyebrow="Security and delivery"
              title="The work still needs discipline underneath the story"
              description="Security, privacy, release cadence, and adoption analytics stay visible without turning the section into another pile of nested boxes."
            />
            <div className="space-y-4">
              {home.securityPrinciples.principles.slice(0, 4).map((principle, index) => {
                const Icon = [ShieldCheck, Lock, Activity, Workflow][index % 4];

                return (
                  <div key={principle.title} className="flex items-start gap-4 compact-tile rounded-[1.5rem] px-4 py-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10">
                      <Icon className="h-4 w-4 icon-accent" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{principle.title}</p>
                      <p className="mt-1 text-sm text-muted-foreground">{principle.detail}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="cta-band rounded-[2.5rem] px-8 py-10 sm:px-10 sm:py-12">
            <div className="cta-inner space-y-7">
              <div className="space-y-3">
                <Badge variant="soft" className="w-fit border-white/15 bg-white/10 text-white">
                  <Sparkles className="h-3.5 w-3.5 text-white" />
                  {home.labCta.eyebrow}
                </Badge>
                <h2 className="display-1 text-white">{home.labCta.title}</h2>
                <p className="body-lg max-w-2xl text-white/76">{home.labCta.description}</p>
              </div>

              <div className="editorial-rule bg-white/20" />

              <div className="grid gap-3 sm:grid-cols-3">
                <div className="rounded-[1.5rem] bg-white/10 px-4 py-4 text-white backdrop-blur">
                  <p className="text-[0.68rem] uppercase tracking-[0.18em] text-white/60">Sprint</p>
                  <p className="mt-2 text-sm font-semibold">2-week validation model</p>
                </div>
                <div className="rounded-[1.5rem] bg-white/10 px-4 py-4 text-white backdrop-blur">
                  <p className="text-[0.68rem] uppercase tracking-[0.18em] text-white/60">Outputs</p>
                  <p className="mt-2 text-sm font-semibold">Prototype, metrics, roadmap</p>
                </div>
                <div className="rounded-[1.5rem] bg-white/10 px-4 py-4 text-white backdrop-blur">
                  <p className="text-[0.68rem] uppercase tracking-[0.18em] text-white/60">Focus</p>
                  <p className="mt-2 text-sm font-semibold">AI, dashboards, operational workflows</p>
                </div>
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
          </div>
        </div>
      </section>

      <section className="section-shell pt-8">
        <div className="container grid gap-8 lg:grid-cols-[0.74fr,1.26fr]">
          <SectionHeader
            align="left"
            eyebrow="Insights"
            title="Search-friendly content should feel editorial, not boxed in"
            description="The insights feed now works as a compact resource surface instead of another set of oversized cards."
          />

          <div className="space-y-4">
            {insightArticles.map((article) => (
              <Link
                key={article.slug}
                href={`/insights/${article.slug}`}
                className="group block rounded-[2rem] section-contrast px-5 py-5"
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div className="space-y-2">
                    <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-primary">
                      {article.category}
                    </p>
                    <h3 className="text-xl font-semibold text-foreground">{article.title}</h3>
                    <p className="text-sm text-muted-foreground">{article.excerpt}</p>
                  </div>
                  <ArrowRight className="h-5 w-5 shrink-0 icon-accent transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell pt-8">
        <div className="container grid gap-8 lg:grid-cols-[0.72fr,1.28fr]">
          <SectionHeader
            align="left"
            eyebrow="FAQ"
            title="Plain answers for first-time buyers"
            description="This keeps the page useful for both people and search engines without adding more visual noise."
          />

          <div className="space-y-4">
            {faqItems.map((item) => (
              <div key={item.question} className="rounded-[1.8rem] compact-tile px-5 py-5 shadow-sm">
                <h3 className="text-lg font-semibold text-foreground">{item.question}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container pb-28 pt-10">
        <div className="cta-band rounded-[2.6rem] px-8 py-16 text-center sm:px-10 sm:py-20">
          <div className="cta-inner mx-auto max-w-3xl space-y-8">
            <Badge variant="soft" className="mx-auto border-white/15 bg-white/10 text-white">
              <Sparkles className="h-3.5 w-3.5 text-white" />
              Ready to move?
            </Badge>
            <h2 className="display-1 text-white">Ready to transform compliance and operations?</h2>
            <p className="body-lg text-white/78">
              Book a free consultation and we will map the fastest path to a secure first release,
              measurable value, and a better-looking digital system.
            </p>
            <div className="flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/contact"
                className={cn(
                  buttonVariants({ size: "xl" }),
                  "bg-white text-slate-900 hover:bg-white/92"
                )}
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
