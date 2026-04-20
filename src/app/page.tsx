import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  AppWindow,
  ArrowRight,
  BarChart3,
  BrainCircuit,
  Building2,
  ChevronDown,
  CheckCircle2,
  Factory,
  HeartPulse,
  Quote,
  Search,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  Sparkles,
  UsersRound,
  Workflow,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button-variants";
import { CountUpText } from "@/components/ui/count-up-text";
import { LogoMarquee } from "@/components/home/logo-marquee";
import { siteContent } from "@/content/site";
import { industryProfiles } from "@/data/industries";
import { insightArticles } from "@/data/insights";
import { portfolioProjects } from "@/data/portfolio";
import { ecosystemProducts } from "@/data/ecosystem-products";
import { solutionDetails } from "@/data/solutions";
import { absoluteUrl, siteKeywords } from "@/lib/seo";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Spire Technosoft | Product engineering for serious software",
  description:
    "Custom software, mobile, dashboards, and AI workflows—built with clear milestones and outcomes. Engineering business growth from discovery to launch.",
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
    title: "Spire Technosoft | Product engineering for serious software",
    description:
      "Custom software, mobile, dashboards, and AI workflows—built with clear milestones and outcomes. Engineering business growth from discovery to launch.",
    images: [{ url: siteContent.seo.defaultOg }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Spire Technosoft | Product engineering for serious software",
    description:
      "Custom software, mobile, dashboards, and AI workflows—built with clear milestones and outcomes. Engineering business growth from discovery to launch.",
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

const solutionIcons = [Workflow, BrainCircuit, AppWindow, Smartphone];
const operatingRhythmIcons = [Sparkles, AppWindow, Workflow, BrainCircuit];
const operatingRhythmPositions = [
  "md:col-start-1 md:row-start-1 md:mr-8 md:mt-5",
  "md:col-start-3 md:row-start-1 md:ml-8",
  "md:col-start-1 md:row-start-3 md:mr-10 md:self-end",
  "md:col-start-3 md:row-start-3 md:ml-6 md:self-end md:translate-y-6",
];
const deliverySignals = [
  "Shared scope before build starts",
  "Design and engineering move together",
  "Usage and quality tracked from v1",
];
const releaseReadiness = ["Priorities aligned", "Usable workflows", "Telemetry wired"];
const industryIcons = {
  finance: Building2,
  healthcare: HeartPulse,
  energy: BarChart3,
  "retail-fmcg": ShoppingBag,
  manufacturing: Factory,
};

export default function Home() {
  const { home, socialProof } = siteContent;
  const heroPrimary = featuredProjects[0];
  const heroSecondary = featuredProjects[1];
  const spotlightIndustry = featuredIndustries[0];
  const supportingIndustries = featuredIndustries.slice(1);
  const featuredArticle = featuredInsights[0];
  const additionalArticles = featuredInsights.slice(1);
  const leadTestimonial = socialProof.testimonials[0];

  const heroTitlePrefix =
    home.hero.title.indexOf(home.hero.highlight) === -1
      ? home.hero.title
      : home.hero.title.slice(0, home.hero.title.indexOf(home.hero.highlight));

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Spire Technosoft — Product engineering",
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

      <section className="homepage-hero hero-stage dark">
        <div className="homepage-grid absolute inset-0 opacity-45" />
        <div className="homepage-mesh homepage-mesh-one" />
        <div className="homepage-mesh homepage-mesh-two" />
        <div className="homepage-mesh homepage-mesh-three" />

        <div className="container relative z-10 grid max-w-[1440px] gap-10 pb-14 pt-10 lg:grid-cols-2 lg:items-start lg:gap-10 xl:gap-12">
          <div className="min-w-0 max-w-[min(42rem,100%)] space-y-7 lg:max-w-none lg:pr-2">
            <Badge variant="soft" className="w-fit border-border/20 bg-surface text-foreground shadow-sm">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              {home.hero.eyebrow}
            </Badge>

            <div className="space-y-6">
              <p className="text-[0.82rem] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
                Trusted by teams modernizing healthcare, industrial, retail, and analytics products
              </p>
              <h1 className="display-hero max-w-[18ch] text-foreground drop-shadow-sm sm:max-w-[20ch] lg:max-w-[22ch]">
                {heroTitlePrefix.trim()}{" "}
                <span className="text-gradient-hero-accent">{home.hero.highlight}</span>
              </h1>
              <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-[1.05rem]">
                {home.hero.description}
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href={home.hero.primaryCta.href}
                className={cn(
                  buttonVariants({ variant: "accent", size: "xl" }),
                  "bg-gradient-brand text-white shadow-brand-glow hover:scale-[1.02] hover:shadow-brand-glow"
                )}
              >
                {home.hero.primaryCta.label}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href={home.hero.secondaryCta.href}
                className={cn(
                  buttonVariants({ variant: "outline", size: "xl" }),
                  "border-border/40 bg-surface/50 text-foreground shadow-none hover:bg-surface hover:text-foreground"
                )}
              >
                {home.hero.secondaryCta.label}
              </Link>
              <Link
                href="/insights"
                className="inline-flex h-[3.4rem] items-center justify-center gap-2 rounded-full border border-border/40 bg-surface/50 px-6 text-sm font-semibold text-foreground transition-all duration-300 hover:bg-surface"
              >
                <Search className="h-4 w-4" />
                Browse insights
              </Link>
            </div>

            <div className="flex flex-wrap gap-3">
              {home.hero.sectors.map((sector) => (
                <span
                  key={sector}
                  className="rounded-full border border-border/40 bg-surface/50 px-4 py-2 text-sm text-foreground backdrop-blur-sm"
                >
                  {sector}
                </span>
              ))}
            </div>

            <div className="grid gap-3 pt-2 sm:grid-cols-3">
              {home.stats.slice(0, 3).map((metric) => (
                <div key={metric.label} className="hero-stat-panel rounded-[1rem] px-4 py-4 border border-border/30 bg-surface/40">
                  <CountUpText
                    value={metric.value}
                    className="block text-3xl font-semibold tracking-[-0.05em] text-foreground"
                  />
                  <p className="mt-2 text-[0.72rem] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="space-y-3 pt-3">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.08em] text-slate-400">
                Selected client contexts
              </p>
              <LogoMarquee items={socialProof.clientLogos} />
            </div>

            <a
              href="#homepage-stats"
              className="scroll-cue inline-flex items-center gap-3 pt-2 text-sm font-semibold text-slate-300 transition-colors hover:text-white"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10">
                <ChevronDown className="h-4 w-4" />
              </span>
              Scroll to explore
            </a>
          </div>

          <div className="relative hidden min-w-0 flex-col gap-5 lg:flex xl:sticky xl:top-28">
            <div className="relative mb-0 aspect-video w-full overflow-hidden rounded-2xl border border-white/15 shadow-2xl ring-1 ring-white/10">
              <Image
                src="/images/about/mission-hero.png"
                alt="Engineering and product teams collaborating on software delivery"
                fill
                className="object-cover object-center"
                sizes="(min-width: 1280px) 42vw, (min-width: 1024px) 45vw, 100vw"
                priority
              />
            </div>
            <div className="hero-glass-panel relative w-full rounded-[1.4rem] p-5">
              <div className="grid gap-4 sm:grid-cols-[1.16fr,0.84fr]">
                <div className="rounded-[1rem] border border-white/15 bg-slate-950/75 p-5 shadow-none">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.08em] text-slate-400">
                    Delivery rhythm
                  </p>
                  <h2 className="mt-3 text-[2rem] font-semibold leading-tight text-slate-50">
                    Discovery to first release with fewer blind spots.
                  </h2>
                  <div className="mt-6 space-y-4">
                    {home.operatingRhythm.steps.map((step, index) => (
                      <div key={step.title} className="space-y-2">
                        <div className="flex items-center justify-between text-[0.7rem] uppercase tracking-[0.08em] text-slate-400">
                          <span>{step.title}</span>
                          <span>{step.duration}</span>
                        </div>
                        <div className="h-2 rounded-full bg-white/15">
                          <div
                            className="h-full rounded-full bg-gradient-brand-flow"
                            style={{ width: `${[100, 82, 68, 48][index]}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="rounded-[1rem] border border-white/15 bg-slate-950/70 p-5 shadow-none">
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.08em] text-slate-400">
                      Launch confidence
                    </p>
                    <p className="mt-3 text-4xl font-semibold tracking-[-0.05em] text-slate-50">100%</p>
                    <p className="mt-3 text-sm leading-7 text-slate-300">
                      Clear milestones, visible scope, and measurable outcomes from v1.
                    </p>
                  </div>

                  <div className="rounded-[1rem] border border-white/15 bg-slate-950/65 p-5 shadow-none">
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.08em] text-slate-400">
                      First release focus
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {releaseReadiness.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/15 bg-white/10 px-3 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.08em] text-slate-200"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {socialProof.resultsCallouts.map((callout) => (
                  <div key={callout.metric} className="rounded-[1rem] border border-white/15 bg-slate-950/70 p-5 shadow-none">
                    <p className="text-lg font-semibold text-slate-50">{callout.metric}</p>
                    <p className="mt-2 text-sm leading-7 text-slate-300">{callout.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            {heroPrimary || heroSecondary ? (
              <div className="grid w-full gap-3 sm:grid-cols-2">
                {heroPrimary ? (
                  <Link
                    href={`/portfolio/${heroPrimary.project.slug}`}
                    className="rounded-[1rem] border border-white/15 bg-slate-950/90 p-4 shadow-lg backdrop-blur-sm transition-colors hover:border-white/25 hover:bg-slate-950"
                  >
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.08em] text-slate-400">
                      Featured build
                    </p>
                    <p className="mt-2 text-lg font-semibold text-slate-50">{heroPrimary.title}</p>
                    <p className="mt-1 text-sm text-slate-300">{heroPrimary.metric}</p>
                  </Link>
                ) : null}
                {heroSecondary ? (
                  <Link
                    href={`/portfolio/${heroSecondary.project.slug}`}
                    className="rounded-[1rem] border border-white/15 bg-slate-950/90 p-4 shadow-lg backdrop-blur-sm transition-colors hover:border-white/25 hover:bg-slate-950"
                  >
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.08em] text-slate-400">
                      Recent work
                    </p>
                    <p className="mt-2 text-base font-semibold text-slate-50">{heroSecondary.title}</p>
                    <p className="mt-1 text-sm text-slate-300">{heroSecondary.summary}</p>
                  </Link>
                ) : null}
              </div>
            ) : null}
          </div>
        </div>
      </section>

      <section id="homepage-stats" className="container relative z-20 max-w-[1440px] pb-6 pt-1 md:pt-2">
        <div className="section-anchor rounded-[1.4rem] px-8 py-8">
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {home.stats.map((metric) => (
              <div key={metric.label} className="space-y-2 text-center xl:text-left">
                <CountUpText value={metric.value} className="text-4xl font-semibold tracking-[-0.05em] text-foreground" />
                <p className="text-[0.72rem] uppercase tracking-[0.08em] text-muted-foreground">
                  {metric.label}
                </p>
                <p className="text-sm text-muted-foreground">{metric.helper}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container max-w-[1440px] py-7">
        <div className="section-anchor section-anchor-muted rounded-[1.4rem] px-6 py-5 sm:px-8">
          <div className="relative z-10 flex flex-wrap items-center justify-between gap-4">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
              Selected client contexts
            </p>
            <div className="flex flex-wrap gap-x-8 gap-y-3">
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
        </div>
      </section>

      <section className="container max-w-[1440px] py-8">
        <div className="section-anchor rounded-[2.2rem] px-5 py-6 sm:px-8 sm:py-8">
          <div className="section-intro section-intro-center mx-auto max-w-3xl">
            <p className="eyebrow">Why Spire</p>
            <h2 className="heading-2 text-foreground">Built like an in-house product team, without the overhead</h2>
            <p className="body-md text-muted-foreground">
              The same ideas that show up in procurement decks—cross-functional delivery, measurable outcomes,
              and software that survives real operations—are how we work week to week.
            </p>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {siteContent.differentiators.map((item, index) => {
              const DiffIcon = [UsersRound, Workflow, BrainCircuit][index] ?? Sparkles;
              return (
                <div
                  key={item.title}
                  className="interactive-card card-pad rounded-[1.5rem] transition-transform duration-300 hover:-translate-y-0.5"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-[1.15rem] bg-primary/12">
                    <DiffIcon className="h-5 w-5 icon-accent" aria-hidden />
                  </span>
                  <p className="mt-4 text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-primary">
                    {item.metric}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container py-8">
        <div className="section-anchor rounded-[2.2rem] px-5 py-6 sm:px-8 sm:py-8">
          <div className="section-intro section-intro-center mx-auto max-w-3xl">
            <p className="eyebrow">Solutions snapshot</p>
            <h2 className="heading-2 text-foreground">Product, platform, and workflow systems built for actual use</h2>
            <p className="body-md text-muted-foreground">
              A cleaner snapshot of the software we design most often, without forcing every offer
              into the same oversized card pattern.
            </p>
          </div>

          <div className="section-contrast mt-8 rounded-[2rem] px-4 py-4 sm:px-6 sm:py-6">
            <div className="grid divide-y divide-border/45 md:grid-cols-2 md:divide-x md:divide-y-0 xl:grid-cols-4">
              {featuredSolutions.map((solution, index) => {
                const Icon = solutionIcons[index % solutionIcons.length];

                return (
                  <Link
                    key={solution.slug}
                    href={`/solutions/${solution.slug}`}
                    className="group flex h-full flex-col gap-4 px-4 py-6 transition-transform duration-300 hover:-translate-y-1 sm:px-5"
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-[1.2rem] bg-primary/12">
                      <Icon className="h-5 w-5 icon-accent" />
                    </span>

                    <div className="space-y-3">
                      <h3 className="text-xl font-semibold text-foreground">{solution.title}</h3>
                      <p className="text-sm text-muted-foreground">{solution.summary}</p>
                    </div>

                    <div className="mt-auto space-y-3 pt-2">
                      {solution.outcomes.slice(0, 2).map((item) => (
                        <div key={item} className="flex items-start gap-3">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 icon-accent" />
                          <p className="text-sm text-muted-foreground">{item}</p>
                        </div>
                      ))}
                    </div>

                    <span className="inline-flex items-center gap-2 pt-2 text-sm font-semibold text-foreground">
                      Explore solution
                      <ArrowRight className="h-4 w-4 icon-accent transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {spotlightIndustry ? (
        <section className="container py-8">
          <div className="section-anchor section-anchor-muted rounded-[2.2rem] px-5 py-6 sm:px-8 sm:py-8">
            <div className="section-intro section-intro-center mx-auto max-w-3xl">
              <p className="eyebrow">Where we help</p>
              <h2 className="heading-2 text-foreground">Different industries, different operational pressure</h2>
              <p className="body-md text-muted-foreground">
                We do not push one template into every business. The product adapts to the workflow,
                the risk profile, and the pace your team actually works at.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {featuredIndustries.map((industry) => {
                const Icon =
                  industryIcons[industry.slug as keyof typeof industryIcons] ?? Building2;

                return (
                  <Link
                    key={industry.slug}
                    href={`/industries/${industry.slug}`}
                    className="inline-flex items-center gap-2 rounded-full border border-transparent bg-white/72 px-5 py-3 text-sm font-semibold text-foreground shadow-[inset_0_0_0_1px_hsla(var(--border),0.16),0_16px_36px_-28px_rgba(9,26,45,0.16)] transition-colors hover:text-primary dark:bg-surface/80 dark:shadow-[inset_0_0_0_1px_hsla(var(--border),0.26),0_16px_36px_-28px_rgba(0,0,0,0.3)]"
                  >
                    <Icon className="h-4 w-4 icon-accent" />
                    {industry.title}
                  </Link>
                );
              })}
            </div>

            <div className="mt-8 grid gap-6 rounded-[2rem] bg-white/78 p-4 shadow-[inset_0_0_0_1px_hsla(var(--border),0.16),0_24px_60px_-36px_rgba(9,26,45,0.18)] lg:grid-cols-[1fr,0.94fr] lg:p-6 dark:bg-surface/82">
              <div className="relative aspect-video w-full overflow-hidden rounded-[2.2rem] bg-surface-2">
                <Image
                  src={spotlightIndustry.image}
                  alt={`${spotlightIndustry.title} preview`}
                  fill
                  className="object-cover object-center"
                  sizes="(min-width: 1024px) 46vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/18 via-transparent to-transparent" />
              </div>

              <div className="flex flex-col justify-between gap-8 p-2 lg:p-4">
                <div className="space-y-3">
                  <p className="text-[0.72rem] uppercase tracking-[0.18em] text-primary">
                    Spotlight
                  </p>
                  <h3 className="text-4xl font-semibold text-foreground">{spotlightIndustry.title}</h3>
                  <p className="body-md text-muted-foreground">{spotlightIndustry.summary}</p>
                </div>

                <div className="grid gap-8 md:grid-cols-2">
                  <div className="space-y-4">
                    <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      Common challenges
                    </p>
                    {spotlightIndustry.focusAreas.map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 icon-accent" />
                        <p className="text-sm text-muted-foreground">{item}</p>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-4">
                    <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      Typical programs
                    </p>
                    {spotlightIndustry.typicalPrograms.map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 icon-accent" />
                        <p className="text-sm text-muted-foreground">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-5 pt-5 sm:flex-row sm:items-end sm:justify-between">
                  <div className="flex flex-wrap gap-6">
                    {spotlightIndustry.successMetrics.slice(0, 2).map((metric) => (
                      <div key={metric}>
                        <p className="text-2xl font-semibold text-foreground">{metric}</p>
                      </div>
                    ))}
                  </div>

                  <Link
                    href={`/industries/${spotlightIndustry.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-foreground"
                  >
                    Explore industry page
                    <ArrowRight className="h-4 w-4 icon-accent" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {supportingIndustries.map((industry) => {
                const Icon =
                  industryIcons[industry.slug as keyof typeof industryIcons] ?? Building2;

                return (
                  <Link
                    key={industry.slug}
                    href={`/industries/${industry.slug}`}
                    className="compact-tile rounded-[2rem] p-6 transition-transform duration-300 hover:-translate-y-1"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-[1rem] bg-primary/12">
                      <Icon className="h-4 w-4 icon-accent" />
                    </span>
                    <h3 className="mt-5 text-2xl font-semibold text-foreground">{industry.title}</h3>
                    <p className="mt-3 text-sm text-muted-foreground">{industry.summary}</p>
                    <p className="mt-6 text-lg font-semibold text-primary">{industry.successMetrics[0]}</p>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      ) : null}

      <section className="py-10 sm:py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl space-y-4 text-center">
            <p className="text-[0.74rem] font-semibold uppercase tracking-[0.22em] text-primary">
              Selected work
            </p>
            <h2 className="heading-3 text-foreground">A few recent builds with measurable outcomes</h2>
            <p className="body-md text-muted-foreground">
              Shorter proof, less noise. A quick view of the kinds of product systems we have
              helped teams launch and improve.
            </p>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {featuredProjects.map(({ project, title, summary, metric, href }) => (
              <Link
                key={project.slug}
                href={href}
                className="interactive-card flex flex-col justify-between rounded-[2rem] p-6 transition-transform hover:-translate-y-1"
              >
                <div>
                  <span className="flex h-12 w-12 items-center justify-center rounded-[1rem] bg-primary/12">
                    <BarChart3 className="h-5 w-5 icon-accent" />
                  </span>

                  <p className="mt-6 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-primary">
                    {project.domain}
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold text-foreground leading-snug">{title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{summary}</p>
                </div>

                <div className="mt-6 pt-5 border-t border-border/40">
                  <p className="text-[2rem] font-semibold tracking-[-0.04em] text-accent">{metric}</p>
                  <div className="mt-4 flex items-center justify-between text-sm text-muted-foreground font-semibold">
                    <span>{project.platform}</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 icon-accent" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>



      <section className="container max-w-[1440px] pb-8 pt-4">
        <div className="cta-band dark bg-surface-2 border border-border/40 relative overflow-hidden rounded-[2rem] px-6 py-10 sm:px-10 sm:py-12 shadow-sm">
          <div className="cta-inner mx-auto max-w-3xl text-center">
            <p className="text-[0.74rem] font-semibold uppercase tracking-[0.16em] text-primary">
              {home.labCta.eyebrow}
            </p>
            <h2 className="mt-3 display-1 text-foreground text-balance">{home.labCta.title}</h2>
            <p className="mx-auto mt-4 max-w-xl body-lg text-muted-foreground">{home.labCta.description}</p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href={home.labCta.primaryCta.href}
                className={cn(
                  buttonVariants({ variant: "default", size: "xl" }),
                  "shadow-lg hover:-translate-y-0.5 transition-transform"
                )}
              >
                {home.labCta.primaryCta.label}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href={home.labCta.secondaryCta.href}
                className={cn(
                  buttonVariants({ variant: "outline", size: "xl" }),
                  "border-border/60 bg-surface/40 hover:bg-surface shadow-none"
                )}
              >
                {home.labCta.secondaryCta.label}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="container max-w-[1440px] pb-16 pt-4">
        {featuredArticle ? (
          <div className="mb-20">
            <div className="section-intro section-intro-center mx-auto max-w-2xl">
              <p className="eyebrow">Insights</p>
              <h2 className="heading-3 text-foreground">Useful thinking on software, AI, and product delivery</h2>
            </div>
            
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {[featuredArticle, ...additionalArticles].filter(Boolean).slice(0, 3).map((article) => (
                <Link
                  key={article.slug}
                  href={`/insights/${article.slug}`}
                  className="interactive-card flex flex-col justify-between rounded-[1.6rem] p-6 transition-transform hover:-translate-y-1"
                >
                  <div className="space-y-4">
                    <Badge variant="soft" className="w-fit">{article.category}</Badge>
                    <h3 className="text-xl font-semibold text-foreground leading-snug">{article.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-3">{article.excerpt}</p>
                  </div>
                  <div className="mt-6 flex items-center justify-between border-t border-border/40 pt-4 text-sm font-semibold text-foreground">
                    Read article
                    <ArrowRight className="h-4 w-4 icon-accent" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ) : null}

        <div>
          <div className="section-intro section-intro-center mx-auto max-w-2xl">
            <p className="eyebrow">FAQ</p>
            <h2 className="heading-3 text-foreground">Questions teams ask before the first call</h2>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {faqItems.map((item) => (
              <div key={item.question} className="compact-tile flex flex-col rounded-[1.4rem] p-6 shadow-sm">
                <h3 className="text-sm font-semibold text-foreground leading-snug">{item.question}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
