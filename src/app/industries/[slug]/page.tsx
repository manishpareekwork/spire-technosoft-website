import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle2, Lock } from "lucide-react";

import { buttonVariants } from "@/components/ui/button-variants";
import { getIndustryProfile, industryProfiles } from "@/data/industries";
import { cn } from "@/lib/utils";

type IndustryPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return industryProfiles.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({ params }: IndustryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustryProfile(slug);

  if (!industry) {
    return {
      title: "Industry | Spire Technosoft",
    };
  }

  return {
    title: `${industry.title} | Spire Technosoft Industries`,
    description: industry.summary,
  };
}

export default async function IndustryDetailPage({
  params,
}: IndustryPageProps): Promise<React.ReactElement> {
  const { slug } = await params;
  const industry = getIndustryProfile(slug);

  if (!industry) {
    notFound();
  }

  return (
    <div className="flex flex-1 flex-col bg-background">
      <section className="relative overflow-hidden pb-12 pt-10 sm:pt-14">
        <div className="absolute inset-0 -z-10 hero-mesh opacity-80" />
        <div className="absolute inset-0 -z-10 hero-lines opacity-15" />

        <div className="container space-y-8">
          <Link
            href="/industries"
            className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to industries
          </Link>

          <div className="grid gap-8 lg:grid-cols-[0.82fr,1.18fr] lg:items-center">
            <div className="space-y-6">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-primary">
                {industry.title}
              </p>
              <div className="space-y-4">
                <h1 className="display-1 text-foreground">{industry.summary}</h1>
                <p className="body-lg text-muted-foreground">
                  We shape delivery, controls, and platform decisions around the realities of this
                  market so the product fits the way teams actually operate.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {industry.successMetrics.map((metric) => (
                  <span
                    key={metric}
                    className="rounded-full bg-white/58 px-4 py-2 text-sm text-muted-foreground shadow-sm backdrop-blur dark:bg-surface/72"
                  >
                    {metric}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[2.5rem] section-contrast p-4 sm:p-5">
              <div className="relative min-h-[360px] overflow-hidden rounded-[2rem] bg-surface-2">
                <Image
                  src={industry.image}
                  alt={`${industry.title} background`}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 52vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/46 via-slate-900/12 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell pt-6">
        <div className="container grid gap-10 lg:grid-cols-[1fr,1fr]">
          <div className="space-y-6">
            <div className="space-y-3">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-primary">
                Challenges
              </p>
              <h2 className="heading-2 text-foreground">What teams in this industry are trying to fix</h2>
            </div>
            <div className="space-y-3">
              {industry.focusAreas.map((item) => (
                <div key={item} className="flex items-start gap-4 compact-tile rounded-[1.5rem] px-5 py-4">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 icon-accent" />
                  <p className="text-sm text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-3">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-primary">
                Solutions
              </p>
              <h2 className="heading-2 text-foreground">How Spire responds in this context</h2>
            </div>
            <div className="space-y-3">
              {industry.typicalPrograms.map((item) => (
                <div key={item} className="flex items-start gap-4 compact-tile rounded-[1.5rem] px-5 py-4">
                  <ArrowRight className="mt-0.5 h-4 w-4 icon-accent" />
                  <p className="text-sm text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container py-6">
        <div className="rounded-[2.2rem] section-contrast px-6 py-6">
          <div className="grid gap-6 lg:grid-cols-[0.72fr,1.28fr] lg:items-start">
            <div className="space-y-3">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-primary">
                Compliance
              </p>
              <h2 className="heading-2 text-foreground">Controls that matter in this sector</h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {industry.compliance.map((item) => (
                <div key={item} className="compact-tile rounded-[1.4rem] px-4 py-4">
                  <Lock className="h-4 w-4 icon-accent" />
                  <p className="mt-3 text-sm text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell pt-8">
        <div className="container grid gap-8 lg:grid-cols-[0.7fr,1.3fr]">
          <div className="space-y-3">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-primary">
              Case studies
            </p>
            <h2 className="heading-2 text-foreground">Proof from relevant delivery programs</h2>
          </div>

          <div className="space-y-4">
            {industry.caseStudies.map((caseStudy) => (
              <Link
                key={caseStudy.href}
                href={caseStudy.href}
                className="group flex items-center justify-between rounded-[2rem] section-contrast px-5 py-5"
              >
                <span className="text-lg font-semibold text-foreground">{caseStudy.title}</span>
                <ArrowRight className="h-5 w-5 icon-accent transition-transform group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="container pb-28 pt-8">
        <div className="cta-band rounded-[2.6rem] px-8 py-16 text-center sm:px-10 sm:py-20">
          <div className="cta-inner mx-auto max-w-3xl space-y-7">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-white/60">
              Consulting partnership
            </p>
            <h2 className="display-1 text-white">Define your sector strategy</h2>
            <p className="body-lg text-white/78">
              Discuss an industry-specific roadmap with our delivery team and align on compliance
              and impact milestones.
            </p>
            <Link
              href="/contact"
              className={cn(
                buttonVariants({ size: "xl" }),
                "bg-white text-slate-900 hover:bg-white/92"
              )}
            >
              Book Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
