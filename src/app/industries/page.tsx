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
  const featuredIndustries = industryProfiles.slice(0, 2);
  const supportingIndustries = industryProfiles.slice(2);

  return (
    <div className="flex flex-1 flex-col bg-background">
      <section className="relative overflow-hidden pb-16 pt-10 sm:pt-14">
        <div className="absolute inset-0 -z-10 hero-mesh opacity-80" />
        <div className="absolute inset-0 -z-10 hero-lines opacity-15" />

        <div className="container grid gap-10 lg:grid-cols-[0.62fr,0.38fr] lg:items-start">
          <div className="max-w-[41rem] space-y-5">
            <p className="eyebrow">Industries</p>
            <h1 className="display-1 max-w-[15ch] text-foreground">Product work shaped around the context each team works in</h1>
            <p className="max-w-3xl body-lg text-muted-foreground">
              We do not force the same playbook everywhere. Finance, healthcare, energy,
              manufacturing, and retail each bring different workflows, users, and operational
              constraints.
            </p>
          </div>

          <div className="compact-tile space-y-4 rounded-[2rem] px-6 py-6 shadow-soft">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-primary">
              What changes from one industry to another
            </p>
            <div className="space-y-4">
              {[
                "The data people need in front of them",
                "The approvals and handoffs hiding behind the UI",
                "The amount of visibility teams need after launch",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-[1rem] bg-white/48 px-4 py-3 dark:bg-surface/60">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 icon-accent" />
                  <p className="text-sm text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container pb-8">
        <div className="grid gap-10 lg:grid-cols-2">
          {featuredIndustries.map((industry) => (
            <article key={industry.slug} className="section-anchor rounded-[2.2rem] p-6">
              <div className="grid gap-5 sm:grid-cols-[116px,1fr] sm:items-start">
                <div className="relative aspect-square overflow-hidden rounded-[1.3rem] bg-surface-2">
                  <Image
                    src={industry.image}
                    alt={`${industry.title} preview`}
                    fill
                    className="object-cover"
                    sizes="116px"
                  />
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-primary">
                      {industry.title}
                    </p>
                    <h2 className="text-[1.55rem] font-semibold leading-tight text-foreground">
                      {industry.summary}
                    </h2>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    {industry.focusAreas.slice(0, 2).map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 icon-accent" />
                        <p className="text-sm text-muted-foreground">{item}</p>
                      </div>
                    ))}
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

                  <div className="flex flex-wrap gap-4">
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
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container pb-12 pt-10">
        <div className="grid gap-6 md:grid-cols-3">
          {supportingIndustries.map((industry, index) => (
            <article
              key={industry.slug}
              className={cn(
                "compact-tile grid gap-4 rounded-[1.7rem] px-4 py-4 shadow-soft sm:grid-cols-[88px,1fr] sm:items-start"
              )}
            >
              <div className="relative aspect-square max-w-[88px] overflow-hidden rounded-[1rem] bg-surface-2">
                <Image
                  src={industry.image}
                  alt={`${industry.title} preview`}
                  fill
                  className="object-cover"
                  sizes="88px"
                />
              </div>

              <div className="space-y-3">
                <div className="space-y-2">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-primary">
                    {industry.title}
                  </p>
                  <h2 className="text-lg font-semibold text-foreground">{industry.summary}</h2>
                </div>

                <div className="space-y-3">
                  {industry.typicalPrograms.slice(0, 2).map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <Workflow className="mt-0.5 h-4 w-4 icon-accent" />
                      <p className="text-sm text-muted-foreground">{item}</p>
                    </div>
                  ))}
                </div>

                <Link href={`/industries/${industry.slug}`} className="inline-flex items-center gap-2 text-sm font-semibold text-foreground">
                  Explore industry page
                  <ArrowRight className="h-4 w-4 icon-accent" />
                </Link>
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
