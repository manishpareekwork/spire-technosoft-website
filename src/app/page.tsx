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
  Workflow,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button-variants";
import { CountUpText } from "@/components/ui/count-up-text";
import { HeroBenefitRotator } from "@/components/home/hero-benefit-rotator";
import { LogoMarquee } from "@/components/home/logo-marquee";
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
const heroRotationItems = [
  "AI workflows",
  "custom software",
  "operational platforms",
  "real delivery momentum",
];
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

      <section className="homepage-hero hero-stage">
        {heroPrimary ? (
          <div className="absolute inset-0 -z-30">
            <Image
              src={heroPrimary.project.image}
              alt={heroPrimary.project.imageAlt}
              fill
              priority
              className="hero-image-pan object-cover opacity-[0.16]"
              sizes="100vw"
            />
          </div>
        ) : null}

        <div className="homepage-grid absolute inset-0 -z-10 opacity-70" />
        <div className="homepage-mesh homepage-mesh-one" />
        <div className="homepage-mesh homepage-mesh-two" />
        <div className="homepage-mesh homepage-mesh-three" />

        <div className="container relative z-10 grid max-w-[1440px] gap-14 pb-20 pt-14 lg:min-h-[calc(100vh-5.25rem)] lg:grid-cols-[0.98fr,0.82fr] lg:items-center">
          <div className="max-w-[48rem] space-y-7">
            <Badge variant="soft" className="w-fit border-white/10 bg-white/[0.08] text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]">
              <Sparkles className="h-3.5 w-3.5 text-white" />
              {home.hero.eyebrow}
            </Badge>

            <div className="space-y-6">
              <p className="text-[0.82rem] font-semibold uppercase tracking-[0.08em] text-blue-100/70">
                Trusted by teams modernizing healthcare, industrial, retail, and analytics products
              </p>
              <h1 className="display-hero max-w-[12ch] text-white">
                {heroTitlePrefix.trim()}{" "}
                <span className="bg-[linear-gradient(135deg,#93c5fd_0%,#38bdf8_42%,#10b981_100%)] bg-clip-text text-transparent">
                  <HeroBenefitRotator items={heroRotationItems} />
                </span>
              </h1>
              <p className="max-w-2xl body-lg text-white/74">
                {home.hero.description} Strategy, design, and engineering stay connected from the
                first milestone through launch.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href={home.hero.primaryCta.href}
                className={cn(
                  buttonVariants({ variant: "accent", size: "xl" }),
                  "bg-[linear-gradient(135deg,#3b82f6,#06b6d4)] text-white shadow-[0_26px_65px_-30px_rgba(59,130,246,0.72)] hover:scale-[1.02]"
                )}
              >
                {home.hero.primaryCta.label}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href={home.hero.secondaryCta.href}
                className={cn(
                  buttonVariants({ variant: "outline", size: "xl" }),
                  "border-white/12 bg-white/[0.06] text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06),0_18px_40px_-30px_rgba(0,0,0,0.28)] hover:bg-white/12 hover:text-white"
                )}
              >
                {home.hero.secondaryCta.label}
              </Link>
              <Link
                href="/insights"
                className="inline-flex h-[3.4rem] items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-6 text-sm font-semibold text-white/82 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)] transition-all duration-300 hover:bg-white/[0.1]"
              >
                <Search className="h-4 w-4" />
                Browse insights
              </Link>
            </div>

            <div className="flex flex-wrap gap-3">
              {home.hero.sectors.map((sector) => (
                <span
                  key={sector}
                  className="rounded-full border border-white/10 bg-white/[0.08] px-4 py-2 text-sm text-white/72 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)] backdrop-blur"
                >
                  {sector}
                </span>
              ))}
            </div>

            <div className="grid gap-3 pt-2 sm:grid-cols-3">
              {home.stats.slice(0, 3).map((metric) => (
                <div key={metric.label} className="hero-stat-panel rounded-[1rem] px-4 py-4">
                  <CountUpText
                    value={metric.value}
                    className="block text-3xl font-semibold tracking-[-0.05em] text-white"
                  />
                  <p className="mt-2 text-[0.72rem] font-semibold uppercase tracking-[0.08em] text-white/56">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="space-y-3 pt-3">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.08em] text-white/46">
                Selected client contexts
              </p>
              <LogoMarquee items={socialProof.clientLogos} />
            </div>

            <a
              href="#homepage-stats"
              className="scroll-cue inline-flex items-center gap-3 pt-2 text-sm font-semibold text-white/72 transition-colors hover:text-white"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/[0.05]">
                <ChevronDown className="h-4 w-4" />
              </span>
              Scroll to explore
            </a>
          </div>

          <div className="relative hidden lg:block">
            <div className="hero-glass-panel relative ml-auto max-w-[33rem] rounded-[1.4rem] p-5">
              <div className="grid gap-4 sm:grid-cols-[1.16fr,0.84fr]">
                <div className="rounded-[1rem] border border-white/10 bg-slate-950/32 p-5 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)]">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.08em] text-blue-100/64">
                    Delivery rhythm
                  </p>
                  <h2 className="mt-3 text-[2rem] font-semibold leading-tight text-white">
                    Discovery to first release with fewer blind spots.
                  </h2>
                  <div className="mt-6 space-y-4">
                    {home.operatingRhythm.steps.map((step, index) => (
                      <div key={step.title} className="space-y-2">
                        <div className="flex items-center justify-between text-[0.7rem] uppercase tracking-[0.08em] text-white/46">
                          <span>{step.title}</span>
                          <span>{step.duration}</span>
                        </div>
                        <div className="h-2 rounded-full bg-white/8">
                          <div
                            className="h-full rounded-full bg-[linear-gradient(90deg,#3b82f6,#06b6d4,#10b981)]"
                            style={{ width: `${[100, 82, 68, 48][index]}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="rounded-[1rem] border border-white/10 bg-white/[0.08] p-5 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)]">
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.08em] text-blue-100/64">
                      Launch confidence
                    </p>
                    <p className="mt-3 text-4xl font-semibold tracking-[-0.05em] text-white">100%</p>
                    <p className="mt-3 text-sm leading-7 text-white/66">
                      Clear milestones, visible scope, and measurable outcomes from v1.
                    </p>
                  </div>

                  <div className="rounded-[1rem] border border-white/10 bg-white/[0.06] p-5 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)]">
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.08em] text-blue-100/64">
                      First release focus
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {releaseReadiness.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/10 bg-white/[0.08] px-3 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.08em] text-white/68 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)]"
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
                  <div key={callout.metric} className="rounded-[1rem] border border-white/10 bg-white/[0.06] p-5 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)]">
                    <p className="text-lg font-semibold text-white">{callout.metric}</p>
                    <p className="mt-2 text-sm leading-7 text-white/64">{callout.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            {heroPrimary ? (
              <Link
                href={`/portfolio/${heroPrimary.project.slug}`}
                className="float-slow absolute -bottom-7 -left-6 max-w-[16rem] rounded-[1rem] border border-white/10 bg-white/[0.09] p-4 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05),0_24px_55px_-34px_rgba(0,0,0,0.4)] backdrop-blur-xl"
              >
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.08em] text-blue-100/64">
                  Featured build
                </p>
                <p className="mt-2 text-lg font-semibold text-white">{heroPrimary.title}</p>
                <p className="mt-1 text-sm text-white/68">{heroPrimary.metric}</p>
              </Link>
            ) : null}

            {heroSecondary ? (
              <Link
                href={`/portfolio/${heroSecondary.project.slug}`}
                className="float-slower absolute -top-6 right-4 max-w-[14rem] rounded-[1rem] border border-white/10 bg-white/[0.09] p-4 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05),0_24px_55px_-34px_rgba(0,0,0,0.4)] backdrop-blur-xl"
              >
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.08em] text-blue-100/64">
                  Recent work
                </p>
                <p className="mt-2 text-base font-semibold text-white">{heroSecondary.title}</p>
                <p className="mt-1 text-sm text-white/64">{heroSecondary.summary}</p>
              </Link>
            ) : null}
          </div>
        </div>
      </section>

      <section id="homepage-stats" className="container relative z-20 -mt-12 max-w-[1440px] pb-8">
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

      <section className="container max-w-[1440px] py-10">
        <div className="section-anchor section-anchor-muted rounded-[1.4rem] px-6 py-6 sm:px-8">
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

      <section className="container py-16">
        <div className="section-anchor rounded-[3rem] px-5 py-8 sm:px-8 sm:py-10">
          <div className="section-intro section-intro-center mx-auto max-w-3xl">
            <p className="eyebrow">Solutions snapshot</p>
            <h2 className="heading-2 text-foreground">Product, platform, and workflow systems built for actual use</h2>
            <p className="body-md text-muted-foreground">
              A cleaner snapshot of the software we design most often, without forcing every offer
              into the same oversized card pattern.
            </p>
          </div>

          <div className="section-contrast mt-10 rounded-[2.8rem] px-4 py-4 sm:px-6 sm:py-6">
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
        <section className="container py-16">
          <div className="section-anchor section-anchor-muted rounded-[3rem] px-5 py-8 sm:px-8 sm:py-10">
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

            <div className="mt-10 grid gap-6 rounded-[2.8rem] bg-white/78 p-4 shadow-[inset_0_0_0_1px_hsla(var(--border),0.16),0_24px_60px_-36px_rgba(9,26,45,0.18)] lg:grid-cols-[1fr,0.94fr] lg:p-6 dark:bg-surface/82">
              <div className="relative min-h-[320px] overflow-hidden rounded-[2.2rem] bg-surface-2">
                <Image
                  src={spotlightIndustry.image}
                  alt={`${spotlightIndustry.title} preview`}
                  fill
                  className="object-cover"
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

      <section className="bg-secondary py-[4.5rem] text-white">
        <div className="container">
          <div className="mx-auto max-w-3xl space-y-4 text-center">
            <p className="text-[0.74rem] font-semibold uppercase tracking-[0.22em] text-primary">
              Selected work
            </p>
            <h2 className="heading-2 text-white">A few recent builds with measurable outcomes</h2>
            <p className="body-md text-white/68">
              Shorter proof, less noise. A quick view of the kinds of product systems we have
              helped teams launch and improve.
            </p>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {featuredProjects.map(({ project, title, summary, metric, href }) => (
              <Link
                key={project.slug}
                href={href}
                className="group rounded-[2.3rem] border border-transparent bg-white/6 p-6 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)] transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-[1rem] bg-white/10">
                  <BarChart3 className="h-5 w-5 text-primary" />
                </span>

                <p className="mt-6 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-primary">
                  {project.domain}
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-white">{title}</h3>
                <p className="mt-3 text-sm text-white/68">{summary}</p>

                <div className="mt-6 pt-5">
                    <p className="text-[2rem] font-semibold tracking-[-0.04em] text-accent">{metric}</p>
                  <div className="mt-4 flex items-center justify-between text-sm text-white/52">
                    <span>{project.platform}</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-[4.5rem]">
        <div className="section-anchor section-anchor-muted rounded-[3rem] px-5 py-8 sm:px-8 sm:py-10">
          <div className="section-intro section-intro-center mx-auto max-w-3xl">
            <p className="eyebrow">{home.operatingRhythm.eyebrow}</p>
            <h2 className="heading-2 text-foreground">A lean delivery rhythm from idea to first release</h2>
            <p className="body-md text-muted-foreground">{home.operatingRhythm.description}</p>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-[0.72fr,0.28fr]">
            <div className="flow-stage rounded-[2.8rem] px-5 py-6 sm:px-7 sm:py-7">
            <div className="pointer-events-none absolute inset-0 dot-grid opacity-[0.12]" />

            <div className="relative z-10 space-y-6">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-primary">
                    Process flow
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Discovery, planning, build, and day-two support designed to stay visible all the
                    way through the first release.
                  </p>
                </div>

                <div className="inline-flex items-center gap-2 rounded-full border border-transparent bg-white/78 px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground shadow-[inset_0_0_0_1px_hsla(var(--border),0.16),0_16px_36px_-28px_rgba(9,26,45,0.14)] backdrop-blur dark:bg-surface/76 dark:shadow-[inset_0_0_0_1px_hsla(var(--border),0.28),0_16px_36px_-28px_rgba(0,0,0,0.3)]">
                  <span className="h-2.5 w-2.5 rounded-full bg-accent [animation:flowPulse_2.8s_ease-in-out_infinite]" />
                  Weekly decisions, visible progress
                </div>
              </div>

              <div className="flow-orbit grid gap-4 md:min-h-[34rem] md:grid-cols-[minmax(0,1fr)_minmax(240px,0.82fr)_minmax(0,1fr)] md:grid-rows-[auto_1fr_auto]">
                <div className="pointer-events-none absolute inset-0 hidden md:block">
                  <div className="absolute inset-x-[18%] top-[23%] h-px bg-gradient-to-r from-transparent via-primary/35 to-transparent" />
                  <div className="absolute inset-x-[18%] bottom-[21%] h-px bg-gradient-to-r from-transparent via-accent/35 to-transparent" />
                  <div className="absolute left-1/2 top-[23%] h-[56%] w-px -translate-x-1/2 bg-gradient-to-b from-primary/30 via-accent/35 to-transparent" />
                  <div className="flow-trace" />
                </div>

                {home.operatingRhythm.steps.map((step, index) => {
                  const Icon = operatingRhythmIcons[index % operatingRhythmIcons.length];

                  return (
                    <article
                      key={step.title}
                      className={cn(
                        "flow-node rounded-[1.8rem] p-5 animate-softFade",
                        operatingRhythmPositions[index]
                      )}
                      style={{ animationDelay: `${index * 140}ms` }}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10">
                          <Icon className="h-4 w-4 icon-accent" />
                        </span>
                        <span className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                          0{index + 1}
                        </span>
                      </div>

                      <div className="mt-4 space-y-2">
                        <p className="text-[0.68rem] uppercase tracking-[0.18em] text-primary">
                          {step.duration}
                        </p>
                        <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                        <p className="text-sm text-muted-foreground">{step.detail}</p>
                      </div>
                    </article>
                  );
                })}

                <div className="flow-chip rounded-[2rem] px-5 py-6 md:col-start-2 md:row-start-2 md:self-center">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-primary">
                    First useful release
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold text-foreground">
                    Shipped with enough clarity to learn quickly, not just launch once.
                  </h3>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {releaseReadiness.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-transparent bg-white/70 px-3 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground shadow-[inset_0_0_0_1px_hsla(var(--border),0.14)] dark:bg-surface/72 dark:shadow-[inset_0_0_0_1px_hsla(var(--border),0.24)]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {deliverySignals.map((signal) => (
                  <div
                    key={signal}
                    className="compact-tile rounded-[1.2rem] px-4 py-3 text-sm text-muted-foreground shadow-soft"
                  >
                    {signal}
                  </div>
                ))}
              </div>
            </div>
          </div>

            <div className="space-y-4">
              <div className="compact-tile rounded-[2rem] p-6 shadow-soft">
                <div className="flex items-start gap-4">
                  <Quote className="mt-1 h-6 w-6 shrink-0 icon-accent opacity-70" />
                  <div className="space-y-3">
                    <p className="text-base font-semibold leading-relaxed text-foreground">
                      &quot;{leadTestimonial.quote}&quot;
                    </p>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{leadTestimonial.name}</p>
                      <p className="text-[0.68rem] uppercase tracking-[0.18em] text-muted-foreground">
                        {leadTestimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="compact-tile rounded-[2rem] p-6 shadow-soft">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-primary">
                  Built with care
                </p>
                <div className="mt-5 space-y-4">
                  {home.securityPrinciples.principles.slice(0, 3).map((item) => (
                    <div key={item.title} className="flex items-start gap-3">
                      <ShieldCheck className="mt-0.5 h-4 w-4 icon-accent" />
                      <div>
                        <p className="text-sm font-semibold text-foreground">{item.title}</p>
                        <p className="mt-1 text-sm text-muted-foreground">{item.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                href={home.operatingRhythm.cta.href}
                className={cn(buttonVariants({ variant: "accent", size: "lg" }), "w-full")}
              >
                {home.operatingRhythm.cta.label}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="container pb-[4.5rem] pt-14">
        <div className="section-anchor rounded-[3rem] px-5 py-8 sm:px-8 sm:py-10">
          <div className="grid gap-8 lg:grid-cols-[0.58fr,0.42fr] lg:items-start">
            <div className="section-contrast rounded-[2.8rem] px-6 py-6 sm:px-8 sm:py-8">
              <div className="section-intro max-w-2xl">
                <p className="eyebrow">Insights</p>
                <h2 className="heading-3 text-foreground">Useful thinking on software, AI, and product delivery</h2>
              </div>

              {featuredArticle ? (
                <div className="mt-8 space-y-6">
                  <Link href={`/insights/${featuredArticle.slug}`} className="group block space-y-4 pb-6">
                    <div className="flex flex-wrap items-center gap-3">
                      <Badge variant="soft">{featuredArticle.category}</Badge>
                      <span className="text-sm text-muted-foreground">{featuredArticle.readTime}</span>
                    </div>
                    <h3 className="text-3xl font-semibold text-foreground">{featuredArticle.title}</h3>
                    <p className="body-md text-muted-foreground">{featuredArticle.excerpt}</p>
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-foreground">
                      Read article
                      <ArrowRight className="h-4 w-4 icon-accent transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>

                  <div className="space-y-4">
                    {additionalArticles.map((article) => (
                      <Link
                        key={article.slug}
                        href={`/insights/${article.slug}`}
                        className="compact-tile group block rounded-[1.6rem] px-5 py-5 shadow-soft"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="space-y-2">
                            <p className="text-[0.72rem] uppercase tracking-[0.18em] text-primary">
                              {article.category}
                            </p>
                            <h3 className="text-xl font-semibold text-foreground">{article.title}</h3>
                            <p className="text-sm text-muted-foreground">{article.excerpt}</p>
                          </div>
                          <ArrowRight className="mt-1 h-4 w-4 shrink-0 icon-accent transition-transform group-hover:translate-x-1" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>

            <div className="space-y-5">
              <div className="section-intro max-w-xl">
                <p className="eyebrow">FAQ</p>
                <h2 className="heading-3 text-foreground">Questions teams ask before the first call</h2>
              </div>

              {faqItems.map((item) => (
                <div key={item.question} className="compact-tile rounded-[1.7rem] px-5 py-5 shadow-soft">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-lg font-semibold text-foreground">{item.question}</h3>
                    <ArrowRight className="mt-1 h-4 w-4 shrink-0 icon-accent" />
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
