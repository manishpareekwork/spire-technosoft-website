import Link from "next/link";
import {
  AppWindow,
  ArrowRight,
  BrainCircuit,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";

import { Accordion, AccordionItem } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button-variants";
import { ResourceDownloads } from "@/components/sections/resource-downloads";
import { SocialProofBand } from "@/components/sections/social-proof";
import { siteContent } from "@/content/site";
import { solutionDetails } from "@/data/solutions";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "Solutions | Spire Technosoft",
  description:
    "Explore Spire Technosoft solution areas across product platforms, healthcare apps, supply chain tools, and industrial dashboards.",
  openGraph: {
    title: "Solutions | Spire Technosoft",
    description:
      "Explore Spire Technosoft solution areas across product platforms, healthcare apps, supply chain tools, and industrial dashboards.",
    images: [{ url: siteContent.seo.defaultOg }],
  },
};

const capabilityIcons = [Workflow, ShieldCheck, AppWindow, BrainCircuit];
const productModes = [
  { title: "Scope the right release", detail: "Sharper product framing before code starts." },
  { title: "Design around messy workflows", detail: "Systems that fit the actual day-to-day reality." },
  { title: "Ship with confidence", detail: "A cleaner path from prototype to dependable release." },
];

export default function SolutionsPage(): React.ReactElement {
  const { solutions } = siteContent;

  return (
    <div className="flex flex-1 flex-col bg-background">
      <section className="innovation-hero relative overflow-hidden pb-20 pt-10 sm:pt-16 sm:pb-24">
        <div className="innovation-mesh innovation-mesh-one" />
        <div className="innovation-mesh innovation-mesh-two" />
        <div className="innovation-mesh innovation-mesh-three" />
        <div className="innovation-grid absolute inset-0 -z-10 opacity-70" />

        <div className="container max-w-[1440px] grid gap-12 lg:grid-cols-[0.58fr,0.42fr] lg:items-start">
          <div className="max-w-[44rem] space-y-6 text-white">
            <Badge variant="soft" className="w-fit border-white/10 bg-white/[0.08] text-white">
              {solutions.hero.eyebrow}
            </Badge>
            <div className="space-y-5">
              <p className="text-[0.8rem] font-semibold uppercase tracking-[0.08em] text-blue-100/70">
                Product systems, workflow engines, and release-ready software directions
              </p>
              <h1 className="innovation-display max-w-[17ch] sm:max-w-[15ch] lg:max-w-[14ch] text-white">
                {solutions.hero.title}
              </h1>
              <p className="body-lg max-w-2xl text-white/72">{solutions.hero.description}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {siteContent.differentiators.map((item) => (
                <span
                  key={item.title}
                  className="rounded-full border border-white/10 bg-white/[0.08] px-4 py-2 text-sm text-white/72 shadow-sm backdrop-blur"
                >
                  {item.title}
                </span>
              ))}
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className={cn(
                  buttonVariants({ size: "xl" }),
                  "bg-gradient-brand text-white shadow-brand-glow-sm"
                )}
              >
                Book Free Consultation
              </Link>
              <Link
                href="/portfolio"
                className={cn(
                  buttonVariants({ variant: "outline", size: "xl" }),
                  "border-white/12 bg-white/[0.06] text-white hover:bg-white/[0.12] hover:text-white"
                )}
              >
                See Selected Work
              </Link>
            </div>
          </div>

          <div className="innovation-panel-dark rounded-[1.25rem] px-6 py-6">
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <Sparkles className="h-4 w-4 icon-accent" />
                </span>
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.08em] text-blue-100/64">
                  Delivery blueprint
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  {
                    title: "Discover",
                    items: ["Problem framing", "Workflow mapping", "Priority alignment"],
                  },
                  {
                    title: "Design",
                    items: ["UX direction", "System shape", "Release plan"],
                  },
                  {
                    title: "Ship",
                    items: ["Build increments", "Instrumentation", "Continuous improvement"],
                  },
                ].map((column) => (
                  <div key={column.title} className="space-y-3">
                    <p className="text-sm font-semibold text-white">{column.title}</p>
                    <div className="grid gap-2">
                      {column.items.map((item) => (
                        <p key={item} className="text-sm text-white/68">
                          {item}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {productModes.map((item) => (
                  <div key={item.title} className="rounded-[1rem] border border-white/10 bg-white/[0.06] px-4 py-4">
                    <p className="text-sm font-semibold text-white">{item.title}</p>
                    <p className="text-sm text-white/64">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container max-w-[1440px] py-20">
        <div className="grid gap-10 lg:grid-cols-[0.28fr,0.72fr] lg:items-start">
          <div className="space-y-4">
            <p className="eyebrow">Capability map</p>
            <h2 className="heading-2 text-foreground">A tighter view of what we can step into</h2>
            <p className="body-md text-muted-foreground">
              These are common product and workflow areas where we help teams scope, design, and
              ship faster.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-2 lg:auto-rows-[minmax(180px,auto)]">
            {solutionDetails.map((solution, index) => {
              const Icon = capabilityIcons[index % capabilityIcons.length];
              const isPrimary = index === 0;
              const isWide = index === solutionDetails.length - 1;

              return (
                <Link
                  key={solution.slug}
                  href={`/solutions/${solution.slug}`}
                  className={cn(
                    "innovation-panel group rounded-[1.15rem] p-6 transition-transform hover:-translate-y-2",
                    isPrimary && "lg:row-span-2",
                    isWide && "lg:col-span-2"
                  )}
                >
                  <div className="flex h-full flex-col gap-5">
                    <div className="flex items-center justify-between gap-4">
                      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10">
                        <Icon className="h-4 w-4 icon-accent" />
                      </span>
                      <span className="text-[0.68rem] uppercase tracking-[0.08em] text-muted-foreground">
                        {solution.tags.slice(0, 2).join(" / ")}
                      </span>
                    </div>

                    <div className="space-y-3">
                      <h3 className="text-2xl font-semibold text-foreground">{solution.title}</h3>
                      <p className="text-sm text-muted-foreground">{solution.summary}</p>
                    </div>

                    <div className={cn("space-y-3", isWide && "grid gap-4 sm:grid-cols-2")}>
                      {solution.outcomes.slice(0, isWide ? 2 : 1).map((item) => (
                        <div key={item} className="flex items-start gap-3">
                          <Workflow className="mt-0.5 h-4 w-4 icon-accent" />
                          <p className="text-sm text-muted-foreground">{item}</p>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {solution.successMetrics.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <span className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-foreground">
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

      <section className="container max-w-[1440px] py-20">
        <div className="section-anchor section-anchor-muted grid gap-10 rounded-[1.4rem] px-6 py-10 lg:grid-cols-[0.3fr,0.7fr] lg:items-start">
          <div className="space-y-4">
            <p className="eyebrow">Inside the work</p>
            <h2 className="heading-2 text-foreground">What usually sits inside each solution area</h2>
            <p className="body-md text-muted-foreground">
              Use this as a working map of problems, outcomes, and delivery layers before you jump
              into a deeper conversation.
            </p>
          </div>

          <Accordion>
            {solutionDetails.map((solution, index) => (
              <AccordionItem
                key={solution.slug}
                title={solution.title}
                meta={`Solution 0${index + 1}`}
                defaultOpen={index === 0}
              >
                <div className="grid gap-8 lg:grid-cols-[0.52fr,0.48fr]">
                  <div className="space-y-5">
                    <p className="text-sm text-muted-foreground">{solution.intro}</p>
                    <div className="space-y-3">
                      <p className="text-sm font-semibold text-foreground">Typical problems</p>
                      {solution.typicalProblems.slice(0, 3).map((item) => (
                        <div key={item} className="flex items-start gap-3">
                          <ShieldCheck className="mt-0.5 h-4 w-4 icon-accent" />
                          <p className="text-sm text-muted-foreground">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-5">
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
                      Explore solution page
                      <ArrowRight className="h-4 w-4 icon-accent" />
                    </Link>
                  </div>
                </div>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="container max-w-[1440px] py-12">
        <SocialProofBand
          title="Selected results"
          description="A few measurable outcomes from the kinds of systems and workflows we help teams improve."
          variant="compact"
        />
      </section>

      <section className="container max-w-[1440px] pb-28 pt-8">
        <ResourceDownloads title={solutions.assets.title} description={solutions.assets.description} />
      </section>
    </div>
  );
}
