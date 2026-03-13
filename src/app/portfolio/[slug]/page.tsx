import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Calendar, Download } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getPortfolioProject, portfolioProjects } from "@/data/portfolio";
import { siteContent } from "@/content/site";

type PortfolioCaseProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return portfolioProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PortfolioCaseProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getPortfolioProject(slug);

  if (!project) {
    return {
      title: "Case Study | Spire Technosoft",
      openGraph: {
        images: [{ url: siteContent.seo.defaultOg }],
      },
    };
  }

  return {
    title: `${project.title} | Spire Technosoft Case Study`,
    description: project.headline,
    openGraph: {
      title: `${project.title} | Spire Technosoft Case Study`,
      description: project.headline,
      images: [{ url: siteContent.seo.defaultOg }],
    },
  };
}

export default async function PortfolioCasePage({ params }: PortfolioCaseProps) {
  const { slug } = await params;
  const project = getPortfolioProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="flex flex-1 flex-col bg-background">
      <section className="container animate-softFade py-12 sm:py-16">
        <div className="space-y-8">
          <Link
            href="/portfolio"
            className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4 icon-muted transition-transform group-hover:-translate-x-1" />
            Back to Portfolio
          </Link>

          <div className="grid gap-10 lg:grid-cols-[0.64fr,0.36fr] lg:items-start">
            <div className="space-y-6">
              <Badge variant="soft">{project.industry}</Badge>
              <h1 className="display-1 text-foreground">{project.title}</h1>
              <p className="body-lg text-muted-foreground">{project.headline}</p>

              <div className="flex flex-wrap gap-3 text-[0.72rem] uppercase tracking-[0.18em] text-muted-foreground">
                <span>{project.domain}</span>
                <span>{project.platform}</span>
                <span>{project.region}</span>
              </div>

              <div className="grid gap-5 sm:grid-cols-3">
                {project.metrics.map((metric) => (
                  <div key={metric.label} className="border-t border-border/55 pt-4">
                    <p className="text-2xl font-semibold text-foreground">{metric.value}</p>
                    <p className="text-[0.68rem] uppercase tracking-[0.18em] text-muted-foreground">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg">
                  <a href={project.caseStudyPdf} download className="flex items-center gap-2">
                    Download case study <Download className="h-4 w-4 icon-inverse" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/contact">Book Free Consultation</Link>
                </Button>
              </div>
            </div>

            <div className="space-y-4 rounded-[2rem] border border-border/45 bg-white/60 p-5 shadow-soft backdrop-blur dark:bg-surface/72 lg:sticky lg:top-28">
              <div className="relative aspect-[5/4] overflow-hidden rounded-[1.4rem] bg-surface-2">
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 24vw, 100vw"
                  priority
                  unoptimized={project.image.startsWith("http")}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/24 via-transparent to-transparent" />
              </div>

              <div className="grid gap-4 border-t border-border/45 pt-4">
                {project.metrics.slice(0, 2).map((metric) => (
                  <div key={metric.label}>
                    <p className="text-2xl font-semibold text-foreground">{metric.value}</p>
                    <p className="text-[0.68rem] uppercase tracking-[0.18em] text-muted-foreground">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-14">
        <div className="grid gap-10 border-y border-border/55 py-10 lg:grid-cols-2">
          <div className="space-y-5">
            <p className="eyebrow">Challenge</p>
            <h2 className="heading-2 text-foreground">What needed to change</h2>
            <div className="space-y-3">
              {project.problem.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-primary" />
                  <p className="text-sm text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-5">
            <p className="eyebrow">Solution</p>
            <h2 className="heading-2 text-foreground">What we built</h2>
            <div className="space-y-3">
              {project.solution.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-primary" />
                  <p className="text-sm text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container py-14">
        <div className="grid gap-10 lg:grid-cols-[0.56fr,0.44fr]">
          <div className="space-y-8">
            <div className="space-y-5">
              <p className="eyebrow">Approach</p>
              <div className="space-y-3">
                {project.approach.map((item) => (
                  <div key={item} className="flex items-start gap-3 border-t border-border/55 pt-4">
                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-primary" />
                    <p className="text-sm text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-5">
              <p className="eyebrow">Impact</p>
              <div className="space-y-3">
                {project.outcomes.map((item) => (
                  <div key={item} className="flex items-start gap-3 border-t border-border/55 pt-4">
                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-primary" />
                    <p className="text-sm text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="rounded-[2rem] border border-border/45 bg-white/55 px-6 py-6 backdrop-blur dark:bg-surface/72">
              <p className="eyebrow">Stack</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-muted-foreground shadow-sm dark:bg-surface-2/80"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-border/45 bg-white/55 px-6 py-6 backdrop-blur dark:bg-surface/72">
              <p className="eyebrow">Architecture</p>
              <div className="mt-4 space-y-3">
                {project.architecture.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-primary" />
                    <p className="text-sm text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-border/45 bg-white/55 px-6 py-6 backdrop-blur dark:bg-surface/72">
              <p className="eyebrow">Spire's role</p>
              <div className="mt-4 space-y-3">
                {project.role.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-primary" />
                    <p className="text-sm text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-14">
        <div className="grid gap-10 border-y border-border/55 py-10 lg:grid-cols-[0.46fr,0.54fr]">
          <div className="space-y-5">
            <p className="eyebrow">Timeline</p>
            <div className="space-y-4">
              {project.timeline.map((item) => (
                <div key={item.phase} className="grid gap-4 sm:grid-cols-[0.28fr,0.72fr]">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10">
                      <Calendar className="h-4 w-4 icon-accent" />
                    </span>
                    <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-primary">
                      {item.phase}
                    </p>
                  </div>
                  <p className="text-sm text-muted-foreground">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-5">
            <p className="eyebrow">Team</p>
            <div className="space-y-3">
              {project.team.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-primary" />
                  <p className="text-sm text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container pb-28 pt-8">
        <div className="cta-band rounded-[2.7rem] px-8 py-16 text-center shadow-float">
          <div className="cta-inner mx-auto max-w-3xl space-y-8">
            <h2 className="display-1 text-white">Need something in a similar direction?</h2>
            <p className="body-lg text-white/80">
              If you are shaping a new product or modernizing an existing one, we can help define
              the right first release.
            </p>
            <div className="flex justify-center">
              <Button asChild size="xl" className="bg-white text-primary hover:bg-white/95">
                <Link href="/contact" className="flex items-center gap-2">
                  Book Free Consultation <ArrowRight className="h-5 w-5 icon-accent" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
