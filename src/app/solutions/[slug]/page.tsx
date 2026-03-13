import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  BrainCircuit,
  Lock,
  ShieldCheck,
  Workflow,
} from "lucide-react";

import { Accordion, AccordionItem } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button-variants";
import { SocialProofBand } from "@/components/sections/social-proof";
import { getSolutionDetail, solutionDetails } from "@/data/solutions";
import { cn } from "@/lib/utils";

type SolutionPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return solutionDetails.map((solution) => ({ slug: solution.slug }));
}

export async function generateMetadata({ params }: SolutionPageProps): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSolutionDetail(slug);

  if (!solution) {
    return {
      title: "Solution | Spire Technosoft",
    };
  }

  return {
    title: `${solution.title} | Spire Technosoft Solutions`,
    description: solution.summary,
  };
}

export default async function SolutionDetailPage({ params }: SolutionPageProps) {
  const { slug } = await params;
  const solution = getSolutionDetail(slug);

  if (!solution) {
    notFound();
  }

  return (
    <div className="flex flex-1 flex-col bg-background">
      <section className="relative overflow-hidden pb-12 pt-10 sm:pt-14">
        <div className="absolute inset-0 -z-10 hero-mesh opacity-80" />
        <div className="absolute inset-0 -z-10 hero-lines opacity-15" />
        <div className="container space-y-8">
          <Link
            href="/solutions"
            className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to solutions
          </Link>

          <div className="grid gap-10 lg:grid-cols-[1fr,0.76fr] lg:items-start">
            <div className="space-y-6">
              <Badge variant="soft" className="w-fit">
                Solution
              </Badge>
              <div className="space-y-4">
                <h1 className="display-1 text-foreground">{solution.title}</h1>
                <p className="body-lg max-w-3xl text-muted-foreground">{solution.summary}</p>
                <p className="body-md max-w-3xl text-muted-foreground">{solution.intro}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {solution.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-white/58 px-4 py-2 text-sm text-muted-foreground shadow-sm backdrop-blur dark:bg-surface/72"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <aside className="space-y-4 lg:sticky lg:top-28">
              <div className="rounded-[2rem] cta-band px-6 py-7">
                <div className="cta-inner space-y-5">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-white/65">
                    Next step
                  </p>
                  <h2 className="heading-2 text-white">Turn this solution into a scoped first release</h2>
                  <p className="text-sm text-white/74">
                    We can map the workflow, the architecture, and the initial success metrics in a
                    working consultation.
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
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-primary">
                  Success signals
                </p>
                <div className="mt-4 space-y-3">
                  {solution.successMetrics.map((metric) => (
                    <div key={metric} className="compact-tile rounded-[1.4rem] px-4 py-4">
                      <p className="text-sm font-semibold text-foreground">{metric}</p>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="container py-14">
        <div className="grid gap-10 lg:grid-cols-[0.44fr,0.56fr] lg:items-start">
          <div className="space-y-5">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-primary">
              What this solves
            </p>
            <div className="space-y-3">
              {solution.typicalProblems.map((problem) => (
                <div key={problem} className="flex items-start gap-4 border-t border-border/55 pt-4">
                  <ShieldCheck className="mt-0.5 h-4 w-4 icon-accent" />
                  <p className="text-sm text-muted-foreground">{problem}</p>
                </div>
              ))}
            </div>

            <div className="grid gap-3 border-t border-border/55 pt-5 sm:grid-cols-2">
              {solution.successMetrics.map((metric) => (
                <span
                  key={metric}
                  className="rounded-full bg-white/65 px-3 py-2 text-sm font-medium text-muted-foreground shadow-sm dark:bg-surface/72"
                >
                  {metric}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-border/45 bg-white/70 px-6 py-6 shadow-soft backdrop-blur dark:bg-surface/76">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-primary">
              Architecture flow
            </p>
            <div className="mt-5 space-y-4">
              {solution.architecture.map((layer, index) => (
                <div key={layer.layer} className="grid gap-3 border-t border-border/45 pt-4 sm:grid-cols-[0.26fr,0.74fr]">
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
                      {index + 1}
                    </span>
                    <p className="text-sm font-semibold text-foreground">{layer.layer}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {layer.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-white/65 px-3 py-1 text-xs font-medium text-muted-foreground shadow-sm dark:bg-surface-2/75"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8 lg:col-span-2">
            <Accordion>
              <AccordionItem title="Delivery phases" meta="How we ship" defaultOpen>
                <div className="space-y-5">
                  {solution.deliveryPlan.map((phase) => (
                    <div key={phase.phase} className="space-y-3">
                      <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-primary">
                        {phase.timeframe} • {phase.phase}
                      </p>
                      <div className="space-y-3">
                        {phase.items.map((item) => (
                          <div key={item} className="flex items-start gap-3">
                            <Workflow className="mt-0.5 h-4 w-4 icon-accent" />
                            <p className="text-sm text-muted-foreground">{item}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </AccordionItem>

              <AccordionItem title="Expected outcomes" meta="What changes">
                <div className="space-y-3">
                  {solution.outcomes.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <BrainCircuit className="mt-0.5 h-4 w-4 icon-accent" />
                      <p className="text-sm text-muted-foreground">{item}</p>
                    </div>
                  ))}
                </div>
              </AccordionItem>

              <AccordionItem title="Security controls" meta="How it stays governed">
                <div className="space-y-3">
                  {solution.security.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <Lock className="mt-0.5 h-4 w-4 icon-accent" />
                      <p className="text-sm text-muted-foreground">{item}</p>
                    </div>
                  ))}
                </div>
              </AccordionItem>
            </Accordion>

            <div className="rounded-[2rem] border border-border/45 bg-white/70 px-6 py-6 shadow-soft backdrop-blur dark:bg-surface/76">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-primary">
                Related case studies
              </p>
              <div className="mt-4 space-y-3">
                {solution.caseStudies.map((study) => (
                  <Link
                    key={study.href}
                    href={study.href}
                    className="group flex items-center justify-between border-t border-border/45 py-4"
                  >
                    <span className="text-sm font-semibold text-foreground">{study.title}</span>
                    <ArrowRight className="h-4 w-4 icon-accent transition-transform group-hover:translate-x-1" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container pb-28 pt-6">
        <SocialProofBand
          title="Field proven outcomes"
          description="Repeatable results across audit, healthcare, supply chain, and industrial programs."
          variant="compact"
        />
      </section>
    </div>
  );
}
