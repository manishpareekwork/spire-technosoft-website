import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BrainCircuit, Play, ShieldCheck, Workflow } from "lucide-react";

import { Accordion, AccordionItem } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button-variants";
import { SectionHeader } from "@/components/ui/section-header";
import { SocialProofBand } from "@/components/sections/social-proof";
import { ResourceDownloads } from "@/components/sections/resource-downloads";
import { siteContent } from "@/content/site";
import { solutionDetails } from "@/data/solutions";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "Solutions | Spire Technosoft",
  description:
    "Explore Spire Technosoft solutions for AI compliance systems, healthcare platforms, supply chain operations, and industrial IoT dashboards.",
  openGraph: {
    title: "Solutions | Spire Technosoft",
    description:
      "Explore Spire Technosoft solutions for AI compliance systems, healthcare platforms, supply chain operations, and industrial IoT dashboards.",
    images: [{ url: siteContent.seo.defaultOg }],
  },
};

const flowSteps = [
  "Discovery and KPI alignment",
  "Workflow and system design",
  "Secure release build",
  "Measure and improve",
];

export default function SolutionsPage(): React.ReactElement {
  const { solutions } = siteContent;

  return (
    <div className="flex flex-1 flex-col bg-background">
      <section className="relative overflow-hidden pb-16 pt-10 sm:pt-14">
        <div className="absolute inset-0 -z-10 hero-mesh opacity-85" />
        <div className="absolute inset-0 -z-10 hero-lines opacity-15" />

        <div className="container grid gap-10 lg:grid-cols-[0.84fr,1.16fr] lg:items-center">
          <div className="space-y-7">
            <Badge variant="soft" className="w-fit">
              {solutions.hero.eyebrow}
            </Badge>
            <div className="space-y-5">
              <h1 className="display-1 text-foreground">{solutions.hero.title}</h1>
              <p className="body-lg max-w-2xl text-muted-foreground">{solutions.hero.description}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {siteContent.differentiators.map((item) => (
                <span
                  key={item.title}
                  className="rounded-full bg-white/58 px-4 py-2 text-sm text-muted-foreground shadow-sm backdrop-blur dark:bg-surface/72"
                >
                  {item.title}
                </span>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2.6rem] section-contrast p-4 sm:p-5">
            <div className="grid gap-5 lg:grid-cols-[1.08fr,0.92fr] lg:items-end">
              <div className="relative min-h-[320px] overflow-hidden rounded-[2rem] bg-surface-2">
                <Image
                  src="/images/finance-dashboard.png"
                  alt="Explainer preview for Spire solutions"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 48vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/48 via-slate-900/10 to-transparent" />
                <div className="absolute left-4 top-4 rounded-full bg-white/88 px-4 py-2 shadow-soft backdrop-blur">
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-foreground">
                    <Play className="h-4 w-4 icon-accent" />
                    Solution explainer
                  </span>
                </div>
              </div>

              <div className="space-y-4 px-2 sm:px-3">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-primary">
                  How engagements move
                </p>
                <div className="space-y-3">
                  {flowSteps.map((step, index) => (
                    <div key={step} className="flex items-center gap-3 compact-tile rounded-[1.4rem] px-4 py-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
                        {index + 1}
                      </span>
                      <span className="text-sm font-medium text-foreground">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell pt-6">
        <div className="container grid gap-10 lg:grid-cols-[1.2fr,0.8fr] lg:items-start">
          <div className="space-y-8">
            <SectionHeader
              align="left"
              eyebrow="Solution library"
              title="Core solution suites for regulated operations"
              description="Explore the problems each solution addresses, the outcomes it targets, and the fastest route into a working first release."
            />

            <Accordion>
              {solutionDetails.map((solution, index) => (
                <AccordionItem
                  key={solution.slug}
                  title={solution.title}
                  meta={`Solution 0${index + 1}`}
                  defaultOpen={index === 0}
                >
                  <div className="grid gap-6 lg:grid-cols-[0.54fr,0.46fr]">
                    <div className="space-y-4">
                      <p className="text-sm text-muted-foreground">{solution.intro}</p>
                      <div className="space-y-3">
                        <p className="text-sm font-semibold text-foreground">Where it helps</p>
                        {solution.typicalProblems.slice(0, 3).map((item) => (
                          <div key={item} className="flex items-start gap-3">
                            <ShieldCheck className="mt-0.5 h-4 w-4 icon-accent" />
                            <p className="text-sm text-muted-foreground">{item}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {solution.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-white/65 px-3 py-1 text-xs font-medium text-muted-foreground shadow-sm dark:bg-surface-2/75"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="space-y-3">
                        <p className="text-sm font-semibold text-foreground">Expected outcomes</p>
                        {solution.outcomes.slice(0, 3).map((item) => (
                          <div key={item} className="flex items-start gap-3">
                            <Workflow className="mt-0.5 h-4 w-4 icon-accent" />
                            <p className="text-sm text-muted-foreground">{item}</p>
                          </div>
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {solution.successMetrics.map((metric) => (
                          <span
                            key={metric}
                            className="rounded-full bg-primary/8 px-3 py-1 text-xs font-semibold text-primary"
                          >
                            {metric}
                          </span>
                        ))}
                      </div>
                      <Link
                        href={`/solutions/${solution.slug}`}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-foreground"
                      >
                        Explore solution
                        <ArrowRight className="h-4 w-4 icon-accent" />
                      </Link>
                    </div>
                  </div>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <aside className="space-y-5 lg:sticky lg:top-28">
            <div className="rounded-[2rem] cta-band px-6 py-7">
              <div className="cta-inner space-y-5">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-white/64">
                  Talk to us
                </p>
                <h2 className="heading-2 text-white">Need help picking the right solution path?</h2>
                <p className="text-sm text-white/74">
                  Bring the use case, delivery constraint, and target outcome. We will suggest the
                  best first release and the architecture to support it.
                </p>
                <Link
                  href="/contact"
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "w-full bg-white text-slate-900 hover:bg-white/92"
                  )}
                >
                  Book Free Consultation
                </Link>
              </div>
            </div>

            <div className="section-contrast rounded-[2rem] px-6 py-6">
              <div className="space-y-4">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-primary">
                  Delivery infographic
                </p>
                <div className="space-y-3">
                  {[
                    {
                      title: "Business workflow",
                      detail: "Capture the actual approvals, handoffs, and bottlenecks.",
                      icon: Workflow,
                    },
                    {
                      title: "Data and intelligence",
                      detail: "Map the events, decisions, dashboards, and AI support layers.",
                      icon: BrainCircuit,
                    },
                    {
                      title: "Controls and release",
                      detail: "Bake in access rules, audit trails, and phased rollout discipline.",
                      icon: ShieldCheck,
                    },
                  ].map((item) => (
                    <div key={item.title} className="flex items-start gap-4 compact-tile rounded-[1.4rem] px-4 py-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10">
                        <item.icon className="h-4 w-4 icon-accent" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground">{item.title}</p>
                        <p className="mt-1 text-sm text-muted-foreground">{item.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="container py-12">
        <SocialProofBand
          title="Enterprise credibility"
          description="Repeatable results across audit, healthcare, supply chain, and industrial programs."
          variant="compact"
        />
      </section>

      <section className="container pb-28 pt-8">
        <ResourceDownloads title={solutions.assets.title} description={solutions.assets.description} />
      </section>
    </div>
  );
}
