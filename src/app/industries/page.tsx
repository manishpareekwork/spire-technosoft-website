import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Workflow } from "lucide-react";

import { buttonVariants } from "@/components/ui/button-variants";
import { SocialProofBand } from "@/components/sections/social-proof";
import { industryProfiles } from "@/data/industries";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "Industries | Spire Technosoft",
  description:
    "Industry experience across finance, healthcare, energy, manufacturing, and retail with custom software built around real workflows and measurable outcomes.",
};

export default function IndustriesPage(): React.ReactElement {
  return (
    <div className="flex flex-1 flex-col bg-background">
      <section className="relative overflow-hidden pb-16 pt-10 sm:pt-14">
        <div className="absolute inset-0 -z-10 hero-mesh opacity-80" />
        <div className="absolute inset-0 -z-10 hero-lines opacity-15" />

        <div className="container grid gap-10 lg:grid-cols-[0.62fr,0.38fr] lg:items-start">
          <div className="space-y-6">
            <p className="eyebrow">Industries</p>
            <h1 className="display-1 text-foreground">Product work shaped around the context each team works in</h1>
            <p className="max-w-3xl body-lg text-muted-foreground">
              We do not force the same playbook everywhere. Finance, healthcare, energy,
              manufacturing, and retail each bring different workflows, users, and operational
              constraints.
            </p>
          </div>

          <div className="space-y-4 rounded-[2rem] border border-border/45 bg-white/70 px-6 py-6 shadow-soft backdrop-blur dark:bg-surface/76">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-primary">
              What changes from one industry to another
            </p>
            <div className="space-y-4">
              {[
                "The data people need in front of them",
                "The approvals and handoffs hiding behind the UI",
                "The amount of visibility teams need after launch",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 border-t border-border/45 pt-4 first:border-t-0 first:pt-0">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 icon-accent" />
                  <p className="text-sm text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container pb-12">
        <div className="space-y-2">
          {industryProfiles.map((industry) => (
            <article
              key={industry.slug}
              className="grid gap-6 border-t border-border/55 py-8 lg:grid-cols-[160px,0.24fr,0.32fr,0.24fr]"
            >
              <div className="relative min-h-[120px] overflow-hidden rounded-[1.4rem] bg-surface-2">
                <Image
                  src={industry.image}
                  alt={`${industry.title} preview`}
                  fill
                  className="object-cover"
                  sizes="160px"
                />
              </div>

              <div className="space-y-3">
                <div className="space-y-2">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-primary">
                    {industry.title}
                  </p>
                  <h2 className="text-2xl font-semibold text-foreground">{industry.summary}</h2>
                </div>
                <div className="flex flex-wrap gap-2">
                  {industry.successMetrics.slice(0, 2).map((metric) => (
                    <span
                      key={metric}
                      className="rounded-full bg-white/65 px-3 py-1 text-xs font-medium text-muted-foreground shadow-sm dark:bg-surface/72"
                    >
                      {metric}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-sm font-semibold text-foreground">What teams usually need</p>
                {industry.focusAreas.slice(0, 3).map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 icon-accent" />
                    <p className="text-sm text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                <div className="space-y-3">
                  <p className="text-sm font-semibold text-foreground">What we often build</p>
                  {industry.typicalPrograms.slice(0, 2).map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <Workflow className="mt-0.5 h-4 w-4 icon-accent" />
                      <p className="text-sm text-muted-foreground">{item}</p>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col gap-3">
                  <Link href={`/industries/${industry.slug}`} className="inline-flex items-center gap-2 text-sm font-semibold text-foreground">
                    Explore industry page
                    <ArrowRight className="h-4 w-4 icon-accent" />
                  </Link>
                  <Link
                    href={industry.caseStudies[0]?.href ?? "/portfolio"}
                    className={cn(buttonVariants({ variant: "outline", size: "lg" }), "w-fit")}
                  >
                    View case study
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container pb-28 pt-10">
        <SocialProofBand
          title="A few of the spaces we know well"
          description="Product work across finance, healthcare, manufacturing, energy, and retail."
          variant="compact"
        />
      </section>
    </div>
  );
}
