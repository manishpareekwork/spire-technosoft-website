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
      <section className="innovation-hero relative overflow-hidden pb-20 pt-10 sm:pt-16 sm:pb-24">
        <div className="innovation-mesh innovation-mesh-one" />
        <div className="innovation-mesh innovation-mesh-two" />
        <div className="innovation-mesh innovation-mesh-three" />
        <div className="innovation-grid pointer-events-none absolute inset-0 z-0 opacity-25" />

        <div className="relative z-10 container max-w-[1440px] grid gap-10 lg:grid-cols-[0.62fr,0.38fr] lg:items-start">
          <div className="max-w-[44rem] space-y-5 text-slate-50">
            <p className="eyebrow text-slate-200">Industries</p>
            <p className="text-[0.8rem] font-semibold uppercase tracking-[0.08em] text-slate-300">
              Different sectors, different operational pressure, different product decisions
            </p>
            <h1 className="innovation-display max-w-[17ch] sm:max-w-[15ch] lg:max-w-[14ch] text-slate-50">
              Product work shaped around the context each team works in
            </h1>
            <p className="max-w-3xl text-lg leading-relaxed text-slate-300">
              We do not force the same playbook everywhere. Finance, healthcare, energy,
              manufacturing, and retail each bring different workflows, users, and operational
              constraints.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className={cn(
                  buttonVariants({ size: "xl" }),
                  "bg-gradient-brand text-white shadow-brand-glow-sm"
                )}
              >
                Discuss Your Industry Context
              </Link>
              <Link
                href="/portfolio"
                className={cn(
                  buttonVariants({ variant: "outline", size: "xl" }),
                  "border-white/20 bg-white/10 text-slate-50 hover:bg-white/15 hover:text-white"
                )}
              >
                See Relevant Work
              </Link>
            </div>
          </div>

          <div className="innovation-panel-dark space-y-4 rounded-[1.2rem] px-6 py-6">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.08em] text-blue-100/64">
              What changes from one industry to another
            </p>
            <div className="space-y-4">
              {[
                "The data people need in front of them",
                "The approvals and handoffs hiding behind the UI",
                "The amount of visibility teams need after launch",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-[1rem] border border-white/10 bg-white/[0.06] px-4 py-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-cyan-300" />
                  <p className="text-sm text-slate-300">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container max-w-[1440px] pb-8">
        <div className="grid gap-10 lg:grid-cols-2">
          {featuredIndustries.map((industry) => (
            <article key={industry.slug} className="innovation-panel rounded-[1.2rem] p-6">
              <div className="grid gap-5 sm:grid-cols-[116px,1fr] sm:items-start">
                <div className="relative aspect-square overflow-hidden rounded-[1rem] bg-surface-2">
                  <Image
                    src={industry.image}
                    alt={`${industry.title} preview`}
                    fill
                    className="object-cover object-center"
                    sizes="116px"
                  />
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <p className="text-[0.72rem] font-semibold uppercase tracking-[0.08em] text-primary">
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

      <section className="container max-w-[1440px] pb-12 pt-10">
        <div className="grid gap-6 md:grid-cols-3">
          {supportingIndustries.map((industry) => (
            <article
              key={industry.slug}
              className="innovation-panel grid gap-4 rounded-[1rem] px-4 py-4 shadow-soft sm:grid-cols-[88px,1fr] sm:items-start"
            >
              <div className="relative aspect-square max-w-[88px] overflow-hidden rounded-[0.85rem] bg-surface-2">
                <Image
                  src={industry.image}
                  alt={`${industry.title} preview`}
                  fill
                  className="object-cover object-center"
                  sizes="88px"
                />
              </div>

              <div className="space-y-3">
                <div className="space-y-2">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.08em] text-primary">
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

      <section className="container max-w-[1440px] pb-28 pt-10">
        <SocialProofBand
          title="A few of the spaces we know well"
          description="Product work across finance, healthcare, manufacturing, energy, and retail."
          variant="compact"
        />
      </section>
    </div>
  );
}
