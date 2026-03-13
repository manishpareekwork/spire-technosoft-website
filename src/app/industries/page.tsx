import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";

import { buttonVariants } from "@/components/ui/button-variants";
import { SectionHeader } from "@/components/ui/section-header";
import { SocialProofBand } from "@/components/sections/social-proof";
import { industryProfiles } from "@/data/industries";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "Industries | Spire Technosoft",
  description:
    "Industry expertise for regulated programs across finance, healthcare, energy, manufacturing, and retail with secure digital platforms and measurable outcomes.",
};

export default function IndustriesPage(): React.ReactElement {
  return (
    <div className="flex flex-1 flex-col bg-background">
      <section className="relative overflow-hidden pb-16 pt-10 sm:pt-14">
        <div className="absolute inset-0 -z-10 hero-mesh opacity-80" />
        <div className="absolute inset-0 -z-10 hero-lines opacity-15" />

        <div className="container">
          <SectionHeader
            eyebrow="Industries"
            title="Digital platforms built for the realities of regulated industries"
            description="From finance and healthcare to energy, manufacturing, and retail, we shape delivery around sector-specific workflows, controls, and operating pressure."
            className="max-w-4xl"
          />
        </div>
      </section>

      <section className="container pb-12">
        <div className="space-y-10">
          {industryProfiles.map((industry, index) => {
            const reverse = index % 2 === 1;

            return (
              <div
                key={industry.slug}
                className={cn(
                  "grid gap-6 rounded-[2.5rem] section-contrast p-4 sm:p-5 lg:grid-cols-2 lg:items-stretch",
                  reverse && "lg:[&>*:first-child]:order-2"
                )}
              >
                <div className="relative min-h-[320px] overflow-hidden rounded-[2rem] bg-surface-2">
                  <Image
                    src={industry.image}
                    alt={`${industry.title} preview`}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 44vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/42 via-slate-900/10 to-transparent" />
                </div>

                <div className="space-y-6 px-2 py-2 sm:px-3">
                  <div className="space-y-3">
                    <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-primary">
                      {industry.title}
                    </p>
                    <h2 className="heading-2 text-foreground">{industry.summary}</h2>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-3">
                      <p className="text-sm font-semibold text-foreground">Industry challenges</p>
                      <div className="space-y-3">
                        {industry.focusAreas.slice(0, 3).map((item) => (
                          <div key={item} className="flex items-start gap-3">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 icon-accent" />
                            <p className="text-sm text-muted-foreground">{item}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <p className="text-sm font-semibold text-foreground">Spire’s response</p>
                      <div className="space-y-3">
                        {industry.typicalPrograms.slice(0, 3).map((item) => (
                          <div key={item} className="flex items-start gap-3">
                            <ShieldCheck className="mt-0.5 h-4 w-4 icon-accent" />
                            <p className="text-sm text-muted-foreground">{item}</p>
                          </div>
                        ))}
                      </div>
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

                  <div className="editorial-rule" />

                  <div className="flex flex-col gap-3 sm:flex-row">
                    <Link href={`/industries/${industry.slug}`} className={cn(buttonVariants({ size: "lg" }))}>
                      Explore industry page
                    </Link>
                    <Link
                      href={industry.caseStudies[0]?.href ?? "/portfolio"}
                      className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
                    >
                      View case study
                      <ArrowRight className="h-4 w-4 icon-accent" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="container pb-28 pt-10">
        <SocialProofBand
          title="Enterprise credibility"
          description="Outcome-led partnerships across finance, healthcare, manufacturing, energy, and retail."
          variant="compact"
        />
      </section>
    </div>
  );
}
