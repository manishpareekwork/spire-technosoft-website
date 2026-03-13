import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  AppWindow,
  ArrowRight,
  BrainCircuit,
  CheckCircle2,
  Quote,
  Smartphone,
  Sparkles,
  Workflow,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button-variants";
import { CountUpText } from "@/components/ui/count-up-text";
import { ParticleBackground } from "@/components/ui/particle-background";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { siteContent } from "@/content/site";
import { industryProfiles } from "@/data/industries";
import { insightArticles } from "@/data/insights";
import { portfolioProjects } from "@/data/portfolio";
import { solutionDetails } from "@/data/solutions";
import { absoluteUrl, siteKeywords } from "@/lib/seo";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Custom Software & AI Product Studio | Spire Technosoft",
  description:
    "Spire Technosoft designs custom software, mobile apps, dashboards, and AI-assisted workflows for ambitious teams that want useful products and clear execution.",
  keywords: [
    ...siteKeywords,
    "custom software product studio",
    "AI product studio",
    "web and mobile product development",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Custom Software & AI Product Studio | Spire Technosoft",
    description:
      "Spire Technosoft designs custom software, mobile apps, dashboards, and AI-assisted workflows for ambitious teams that want useful products and clear execution.",
    images: [{ url: siteContent.seo.defaultOg }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Software & AI Product Studio | Spire Technosoft",
    description:
      "Spire Technosoft designs custom software, mobile apps, dashboards, and AI-assisted workflows for ambitious teams that want useful products and clear execution.",
    images: [siteContent.seo.defaultOg],
  },
};

const featuredIndustries = industryProfiles.filter((industry) =>
  ["finance", "healthcare", "energy", "retail-fmcg"].includes(industry.slug)
);

const featuredSolutions = solutionDetails.filter((solution) =>
  ["healthcare", "supply-chain", "industrial-iot", "audit"].includes(solution.slug)
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
      "We design and build custom software, including web platforms, mobile apps, internal tools, dashboards, and AI-assisted workflows.",
  },
  {
    question: "How do engagements usually start?",
    answer:
      "Most projects begin with a short discovery phase that sharpens the scope, priorities, and first release before the full build starts.",
  },
  {
    question: "Where does AI fit into the work?",
    answer:
      "We use AI where it genuinely improves a workflow, such as search, summarization, predictions, or decision support. We do not force it into products that do not need it.",
  },
];

export default function Home() {
  const { home, socialProof } = siteContent;
  const previewProjects = featuredProjects.slice(0, 3);
  const heroPrimary = previewProjects[0];
  const heroSecondary = previewProjects[1];
  const heroTertiary = previewProjects[2];
  const leadTestimonial = socialProof.testimonials[0];
  const heroRecentProjects = [heroSecondary, heroTertiary].filter(
    (item): item is NonNullable<typeof item> => Boolean(item)
  );

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Custom Software & AI Product Studio",
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
        <div className="absolute inset-0 -z-30 bg-[radial-gradient(circle_at_top_left,rgba(233,177,103,0.14),transparent_24rem),linear-gradient(180deg,rgba(248,243,237,0.92),rgba(248,243,237,1))]" />
        <div className="absolute inset-0 -z-20 hero-lines opacity-12" />
        <ParticleBackground />

        <div className="container relative z-10 grid gap-14 lg:grid-cols-[0.88fr,1.12fr] lg:items-center">
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

            <div className="grid gap-6 border-y border-border/55 py-6 sm:grid-cols-2 xl:grid-cols-4">
              {home.stats.map((metric) => (
                <div key={metric.label} className="space-y-2">
                  <CountUpText value={metric.value} className="text-3xl font-semibold text-foreground" />
                  <p className="text-[0.68rem] uppercase tracking-[0.18em] text-muted-foreground">
                    {metric.label}
                  </p>
                  <p className="text-sm text-muted-foreground">{metric.helper}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="section-contrast rounded-[2.9rem] p-4 sm:p-6">
            <div className="space-y-4">
              {heroPrimary ? (
                <Link
                  href={`/portfolio/${heroPrimary.project.slug}`}
                  className="group relative block min-h-[320px] overflow-hidden rounded-[2.3rem] bg-surface-2 sm:min-h-[420px]"
                >
                  <Image
                    src={heroPrimary.project.image}
                    alt={heroPrimary.project.imageAlt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                    sizes="(min-width: 1024px) 48vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-slate-950/10 to-transparent" />
                  <div className="absolute inset-x-4 bottom-4 rounded-[1.4rem] bg-white/84 px-5 py-4 shadow-soft backdrop-blur dark:bg-surface/82">
                    <div className="flex flex-wrap items-center gap-3">
                      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-primary">
                        Featured build
                      </p>
                      <span className="text-[0.68rem] uppercase tracking-[0.18em] text-muted-foreground">
                        {heroPrimary.metric}
                      </span>
                    </div>
                    <p className="mt-2 text-lg font-semibold text-foreground">{heroPrimary.title}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{heroPrimary.summary}</p>
                  </div>
                </Link>
              ) : null}

              <div className="grid gap-4 lg:grid-cols-[0.64fr,0.36fr]">
                <div className="grid gap-3 sm:grid-cols-2">
                  {socialProof.resultsCallouts.map((callout) => (
                    <div key={callout.metric} className="compact-tile rounded-[1.5rem] px-4 py-4">
                      <p className="text-lg font-semibold text-foreground">{callout.metric}</p>
                      <p className="mt-2 text-sm text-muted-foreground">{callout.detail}</p>
                    </div>
                  ))}
                </div>

                <div className="rounded-[1.8rem] border border-border/40 bg-white/72 px-5 py-5 shadow-soft backdrop-blur dark:bg-surface/76">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-primary">
                    Recent work
                  </p>
                  <div className="mt-4 space-y-4">
                    {heroRecentProjects.map((item) => (
                      <Link
                        key={item.project.slug}
                        href={`/portfolio/${item.project.slug}`}
                        className="group block border-t border-border/45 pt-4 first:border-t-0 first:pt-0"
                      >
                        <p className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                          {item.metric}
                        </p>
                        <p className="mt-1 text-sm font-semibold text-foreground">{item.title}</p>
                        <p className="mt-1 text-sm text-muted-foreground">{item.summary}</p>
                        <span className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-foreground">
                          View case study
                          <ArrowRight className="h-4 w-4 icon-accent transition-transform group-hover:translate-x-1" />
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-8">
        <div className="border-y border-border/55 py-5">
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Selected client contexts
            </p>
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
        <div className="grid gap-12 lg:grid-cols-[0.34fr,0.66fr] lg:items-start">
          <div className="space-y-4">
            <p className="eyebrow">What we build</p>
            <h2 className="heading-2 text-foreground">Clear product directions, then focused delivery</h2>
            <p className="body-md text-muted-foreground">
              We help teams shape the right scope, map the messy workflow underneath it, and ship
              a first release that is actually usable.
            </p>
          </div>

          <div className="space-y-1">
            {featuredSolutions.map((solution, index) => {
              const Icon = [Workflow, BrainCircuit, AppWindow, Smartphone][index % 4];

              return (
                <Link
                  key={solution.slug}
                  href={`/solutions/${solution.slug}`}
                  className="group grid gap-5 border-t border-border/55 py-5 sm:grid-cols-[0.08fr,0.52fr,0.4fr] sm:items-start"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10">
                    <Icon className="h-4 w-4 icon-accent" />
                  </span>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-foreground">{solution.title}</h3>
                    <p className="text-sm text-muted-foreground">{solution.summary}</p>
                  </div>
                  <div className="space-y-3">
                    <p className="text-sm text-muted-foreground">
                      {solution.outcomes.slice(0, 1).join("")}
                    </p>
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-foreground">
                      Explore solution
                      <ArrowRight className="h-4 w-4 icon-accent transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container py-20">
        <div className="space-y-5">
          <p className="eyebrow">Selected work</p>
          <h2 className="heading-2 text-foreground">A few recent builds with clear outcomes</h2>
        </div>

        <div className="mt-8 grid gap-10 lg:grid-cols-3">
          {featuredProjects.map(({ project, title, summary, metric, href }, index) => (
            <article key={project.slug} className="space-y-5">
              <Link
                href={href}
                className={cn(
                  "group relative block overflow-hidden rounded-[2rem] bg-surface-2",
                  index === 0 ? "aspect-[4/3]" : "aspect-[16/11]"
                )}
              >
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  sizes="(min-width: 1024px) 28vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/42 via-transparent to-transparent" />
              </Link>

              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  <Badge variant="soft">{metric}</Badge>
                  <span className="text-[0.68rem] uppercase tracking-[0.18em] text-muted-foreground">
                    {project.domain}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-semibold text-foreground">{title}</h3>
                  <p className="text-sm text-muted-foreground">{summary}</p>
                </div>

                <div className="space-y-3 border-t border-border/55 pt-4">
                  {project.outcomes.slice(0, 2).map((outcome) => (
                    <div key={outcome} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 icon-accent" />
                      <p className="text-sm text-muted-foreground">{outcome}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-6 border-t border-border/55 pt-4">
                  {project.metrics.slice(0, 2).map((item) => (
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
            </article>
          ))}
        </div>
      </section>

      <section className="container py-20">
        <div className="grid gap-10 lg:grid-cols-[0.34fr,0.66fr] lg:items-start">
          <div className="space-y-4">
            <p className="eyebrow">Where we help</p>
            <h2 className="heading-2 text-foreground">Different industries, same standard of product thinking</h2>
            <p className="body-md text-muted-foreground">
              The workflows change from one team to another. The job is still the same: understand
              the context, simplify the experience, and ship something people can rely on.
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
                <div className="grid gap-6 border-t border-border/55 pt-6 lg:grid-cols-[320px,1fr] lg:items-start">
                  <div className="relative min-h-[240px] overflow-hidden rounded-[1.9rem] bg-surface-2 lg:min-h-[320px]">
                    <Image
                      src={industry.image}
                      alt={`${industry.title} preview`}
                      fill
                      className="object-cover"
                      sizes="320px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/42 via-transparent to-transparent" />
                  </div>

                  <div className="space-y-5">
                    <div className="space-y-2">
                      <p className="text-[0.72rem] uppercase tracking-[0.18em] text-primary">{industry.title}</p>
                      <h3 className="text-2xl font-semibold text-foreground">{industry.summary}</h3>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <div className="space-y-3">
                        <p className="text-sm font-semibold text-foreground">What teams usually need</p>
                        {industry.focusAreas.slice(0, 3).map((item) => (
                          <div key={item} className="flex items-start gap-3">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 icon-accent" />
                            <p className="text-sm text-muted-foreground">{item}</p>
                          </div>
                        ))}
                      </div>

                      <div className="space-y-3">
                        <p className="text-sm font-semibold text-foreground">What we often build</p>
                        {industry.typicalPrograms.slice(0, 3).map((item) => (
                          <div key={item} className="flex items-start gap-3">
                            <Workflow className="mt-0.5 h-4 w-4 icon-accent" />
                            <p className="text-sm text-muted-foreground">{item}</p>
                          </div>
                        ))}
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

                    <Link
                      href={`/industries/${industry.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-foreground"
                    >
                      Explore industry page
                      <ArrowRight className="h-4 w-4 icon-accent" />
                    </Link>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      <section className="container py-20">
        <div className="grid gap-12 border-y border-border/55 py-14 lg:grid-cols-[0.42fr,0.58fr] lg:items-start">
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
            <p className="eyebrow">How we work</p>
            <h2 className="heading-2 text-foreground">A lean delivery rhythm from idea to first release</h2>
            <div className="space-y-6">
              {home.operatingRhythm.steps.map((step, index) => (
                <div
                  key={step.title}
                  className="grid gap-4 border-t border-border/55 pt-5 sm:grid-cols-[0.12fr,0.3fr,0.58fr]"
                >
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
        <div className="grid gap-12 lg:grid-cols-[0.34fr,0.66fr] lg:items-start">
          <div className="space-y-4">
            <p className="eyebrow">Insights</p>
            <h2 className="heading-2 text-foreground">Useful thinking on software, AI, and product delivery</h2>
            <p className="body-md text-muted-foreground">
              Articles and playbooks for teams exploring a new product, modernizing an existing
              system, or figuring out where AI actually fits.
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
        <div className="grid gap-10 lg:grid-cols-[0.34fr,0.66fr] lg:items-start">
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
            <h2 className="display-1 text-white">Need help shaping the next product milestone?</h2>
            <p className="body-lg text-white/80">
              Share the rough brief, the workflow issue, or the software you want to improve. We
              will help you find a credible starting point.
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
                See Selected Work
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
