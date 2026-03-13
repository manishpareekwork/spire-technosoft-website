import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Cpu,
  Lock,
  Quote,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button-variants";
import { CountUpText } from "@/components/ui/count-up-text";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ParticleBackground } from "@/components/ui/particle-background";
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

const featuredIndustries = industryProfiles.filter((industry) =>
  ["finance", "healthcare", "energy", "retail-fmcg"].includes(industry.slug)
);

const featuredSolutions = solutionDetails.filter((solution) =>
  ["audit", "healthcare", "industrial-iot", "supply-chain"].includes(solution.slug)
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

const featuredInsights = insightArticles.slice(0, 3);

const faqItems = [
  {
    question: "What does Spire Technosoft build?",
    answer:
      "We design and ship secure digital platforms for regulated industries, including audit systems, healthcare ecosystems, supplier operations tools, and industrial dashboards.",
  },
  {
    question: "How quickly can a first release go live?",
    answer:
      "Most engagements start with discovery and a pilot scope, then move into a focused first release over 6 to 12 weeks depending on the workflow and integrations involved.",
  },
  {
    question: "How do you handle privacy and compliance?",
    answer:
      "We build around privacy-first data models, role-based access, audit trails, and release governance so security and compliance are part of the foundation.",
  },
];

export default function Home() {
  const { home, socialProof } = siteContent;
  const leadTestimonial = socialProof.testimonials[0];

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

      <section className="relative isolate overflow-hidden pb-20 pt-8 sm:pt-12 lg:min-h-[calc(100vh-4rem)] lg:pb-24">
        <div className="absolute inset-0 -z-30 bg-[radial-gradient(circle_at_top_left,rgba(233,177,103,0.16),transparent_24rem),linear-gradient(180deg,rgba(248,243,237,0.92),rgba(248,243,237,1))]" />
        <div className="absolute inset-0 -z-20 hero-lines opacity-15" />
        <ParticleBackground />

        <div className="container relative z-10 grid gap-14 lg:grid-cols-[0.9fr,1.1fr] lg:items-center">
          <div className="space-y-8">
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

            <div className="flex flex-wrap gap-3">
              {home.hero.sectors.map((sector) => (
                <span
                  key={sector}
                  className="rounded-full border border-border/45 bg-white/55 px-4 py-2 text-sm text-muted-foreground shadow-sm backdrop-blur dark:bg-surface/72"
                >
                  {sector}
                </span>
              ))}
            </div>

            <div className="grid gap-6 border-y border-border/55 py-6 sm:grid-cols-4">
              {home.stats.map((metric) => (
                <div key={metric.label} className="space-y-2">
                  <CountUpText value={metric.value} className="text-3xl font-semibold text-foreground" />
                  <p className="text-[0.68rem] uppercase tracking-[0.18em] text-muted-foreground">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative min-h-[420px] overflow-hidden rounded-[2.8rem] border border-border/40 bg-slate-950 shadow-[0_34px_90px_-42px_rgba(12,18,23,0.48)]">
              <Image
                src="/images/manufacturing-dashboard.png"
                alt="Spire dashboard preview"
                fill
                className="object-cover opacity-90"
                sizes="(min-width: 1024px) 52vw, 100vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-br from-slate-950/18 via-transparent to-slate-950/55" />
              <div className="absolute left-5 top-5 rounded-[1.2rem] bg-white/90 px-4 py-3 shadow-soft backdrop-blur">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-primary">
                  Compliance platform
                </p>
                <p className="mt-2 text-sm font-semibold text-foreground">Audit workflows, evidence capture, analytics</p>
              </div>
              <div className="absolute bottom-5 left-5 right-5 grid gap-3 sm:grid-cols-2">
                {socialProof.resultsCallouts.map((callout) => (
                  <div key={callout.metric} className="rounded-[1.4rem] bg-slate-950/72 px-4 py-4 text-white backdrop-blur">
                    <p className="text-lg font-semibold text-white">{callout.metric}</p>
                    <p className="mt-2 text-sm leading-relaxed text-white/68">{callout.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-8">
        <div className="border-y border-border/55 py-6">
          <p className="mb-5 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Trusted across regulated programs
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            {socialProof.clientLogos.map((client) => (
              <div key={client.name} className="flex items-center gap-3">
                <span className="text-sm font-semibold text-foreground">{client.name}</span>
                <span className="text-[0.68rem] uppercase tracking-[0.16em] text-muted-foreground">
                  {client.tagline}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-20">
        <div className="grid gap-12 lg:grid-cols-[0.38fr,0.62fr] lg:items-start">
          <div className="space-y-4">
            <p className="eyebrow">Core solutions</p>
            <h2 className="heading-2 text-foreground">Secure platform delivery across high-stakes workflows</h2>
            <p className="body-md text-muted-foreground">
              From audits and patient journeys to industrial operations and supplier governance, we
              focus on digital systems that have to be dependable under scrutiny.
            </p>
          </div>

          <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
            {featuredSolutions.map((solution, index) => {
              const Icon = [ShieldCheck, Workflow, Cpu, Lock][index % 4];

              return (
                <Link
                  key={solution.slug}
                  href={`/solutions/${solution.slug}`}
                  className="group border-l border-border/60 pl-5"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10">
                    <Icon className="h-5 w-5 icon-accent" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-foreground">{solution.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{solution.summary}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-foreground">
                    Explore solution
                    <ArrowRight className="h-4 w-4 icon-accent transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container py-20">
        <div className="space-y-6">
          <p className="eyebrow">Selected work</p>
          <h2 className="heading-2 text-foreground">Measured outcomes across audit, care, and industrial operations</h2>
        </div>

        <div className="mt-12 space-y-16">
          {featuredProjects.map(({ project, title, summary, metric, href }, index) => (
            <article
              key={project.slug}
              className={cn(
                "grid gap-10 border-t border-border/55 pt-10 lg:grid-cols-[0.44fr,0.56fr] lg:items-center",
                index % 2 === 1 && "lg:[&>*:first-child]:order-2"
              )}
            >
              <div className="space-y-5">
                <div className="flex flex-wrap items-center gap-3">
                  <Badge variant="soft">{metric}</Badge>
                  <span className="text-[0.68rem] uppercase tracking-[0.18em] text-muted-foreground">
                    {project.domain}
                  </span>
                </div>
                <div className="space-y-3">
                  <h3 className="text-3xl font-semibold text-foreground">{title}</h3>
                  <p className="text-base text-muted-foreground">{summary}</p>
                </div>
                <div className="grid gap-3">
                  {project.outcomes.slice(0, 2).map((outcome) => (
                    <div key={outcome} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 icon-accent" />
                      <p className="text-sm text-muted-foreground">{outcome}</p>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-5 border-y border-border/55 py-4">
                  {project.metrics.slice(0, 3).map((item) => (
                    <div key={item.label}>
                      <p className="text-2xl font-semibold text-foreground">{item.value}</p>
                      <p className="text-[0.68rem] uppercase tracking-[0.18em] text-muted-foreground">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>
                <Link href={href} className="inline-flex items-center gap-2 text-sm font-semibold text-foreground">
                  View case study
                  <ArrowRight className="h-4 w-4 icon-accent" />
                </Link>
              </div>

              <div className="relative min-h-[320px] overflow-hidden rounded-[2.4rem]">
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 40vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/35 via-transparent to-transparent" />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container py-20">
        <div className="grid gap-10 lg:grid-cols-[0.36fr,0.64fr] lg:items-start">
          <div className="space-y-4">
            <p className="eyebrow">Industries</p>
            <h2 className="heading-2 text-foreground">Built around the realities of regulated teams</h2>
            <p className="body-md text-muted-foreground">
              We shape the platform, workflow, and governance model around sector-specific pressure
              points rather than forcing a generic enterprise template.
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
                <div className="relative overflow-hidden rounded-[2.6rem] border border-border/45">
                  <div className="absolute inset-0">
                    <Image
                      src={industry.image}
                      alt={`${industry.title} background`}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 60vw, 100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950/86 via-slate-950/62 to-slate-950/28" />
                  </div>

                  <div className="relative grid gap-10 px-6 py-8 text-white sm:px-8 sm:py-10 lg:grid-cols-[0.48fr,0.52fr]">
                    <div className="space-y-5">
                      <p className="text-[0.72rem] uppercase tracking-[0.18em] text-white/58">{industry.title}</p>
                      <h3 className="heading-2 text-white">{industry.summary}</h3>
                      <div className="flex flex-wrap gap-2">
                        {industry.successMetrics.map((metric) => (
                          <span
                            key={metric}
                            className="rounded-full border border-white/12 bg-white/10 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur"
                          >
                            {metric}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                      <div className="space-y-3">
                        <p className="text-sm font-semibold text-white">Key challenges</p>
                        {industry.focusAreas.slice(0, 3).map((item) => (
                          <div key={item} className="flex items-start gap-3">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 text-white/78" />
                            <p className="text-sm text-white/70">{item}</p>
                          </div>
                        ))}
                      </div>
                      <div className="space-y-3">
                        <p className="text-sm font-semibold text-white">Controls and compliance</p>
                        {industry.compliance.slice(0, 3).map((item) => (
                          <div key={item} className="flex items-start gap-3">
                            <Lock className="mt-0.5 h-4 w-4 text-white/78" />
                            <p className="text-sm text-white/70">{item}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="lg:col-span-2">
                      <Link
                        href={`/industries/${industry.slug}`}
                        className={cn(
                          buttonVariants({ size: "lg" }),
                          "bg-white text-slate-900 hover:bg-white/92"
                        )}
                      >
                        Explore industry page
                      </Link>
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      <section className="container py-20">
        <div className="grid gap-12 border-y border-border/55 py-14 lg:grid-cols-[0.44fr,0.56fr] lg:items-start">
          <blockquote className="space-y-5">
            <Quote className="h-9 w-9 icon-accent opacity-60" />
            <p className="text-3xl font-semibold leading-tight text-foreground">
              &quot;{leadTestimonial.quote}&quot;
            </p>
            <div>
              <p className="text-sm font-semibold text-foreground">{leadTestimonial.name}</p>
              <p className="text-[0.68rem] uppercase tracking-[0.18em] text-muted-foreground">
                {leadTestimonial.company}
              </p>
            </div>
          </blockquote>

          <div className="space-y-6">
            <p className="eyebrow">Delivery model</p>
            <h2 className="heading-2 text-foreground">From first workshop to stable release</h2>
            <div className="space-y-6">
              {home.operatingRhythm.steps.map((step, index) => (
                <div key={step.title} className="grid gap-4 border-t border-border/55 pt-5 sm:grid-cols-[0.14fr,0.3fr,0.56fr]">
                  <span className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    0{index + 1}
                  </span>
                  <div>
                    <p className="text-base font-semibold text-foreground">{step.title}</p>
                    <p className="text-[0.68rem] uppercase tracking-[0.18em] text-primary">{step.duration}</p>
                  </div>
                  <p className="text-sm text-muted-foreground">{step.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container py-20">
        <div className="grid gap-12 lg:grid-cols-[0.4fr,0.6fr] lg:items-start">
          <div className="space-y-4">
            <p className="eyebrow">Insights</p>
            <h2 className="heading-2 text-foreground">Practical thinking on AI, compliance, and operations</h2>
            <p className="body-md text-muted-foreground">
              Articles and playbooks for teams evaluating the next platform, workflow, or
              modernization program.
            </p>
          </div>

          <div className="space-y-5">
            {featuredInsights.map((article) => (
              <Link
                key={article.slug}
                href={`/insights/${article.slug}`}
                className="group block border-t border-border/55 py-5"
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div className="space-y-2">
                    <p className="text-[0.72rem] uppercase tracking-[0.18em] text-primary">{article.category}</p>
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

      <section className="container py-20">
        <div className="grid gap-8 lg:grid-cols-[0.34fr,0.66fr] lg:items-start">
          <div className="space-y-4">
            <p className="eyebrow">FAQ</p>
            <h2 className="heading-2 text-foreground">Questions teams ask before the first call</h2>
          </div>

          <div className="space-y-5">
            {faqItems.map((item) => (
              <div key={item.question} className="border-t border-border/55 py-5">
                <h3 className="text-lg font-semibold text-foreground">{item.question}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container pb-28 pt-10">
        <div className="cta-band rounded-[2.7rem] px-8 py-16 text-center sm:px-10 sm:py-20">
          <div className="cta-inner mx-auto max-w-3xl space-y-8">
            <Badge variant="soft" className="mx-auto border-white/15 bg-white/10 text-white">
              <Sparkles className="h-3.5 w-3.5 text-white" />
              Start the conversation
            </Badge>
            <h2 className="display-1 text-white">Ready to transform compliance and operations?</h2>
            <p className="body-lg text-white/78">
              Bring the workflow, the constraint, and the target outcome. We will map the fastest
              path to a secure first release.
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
