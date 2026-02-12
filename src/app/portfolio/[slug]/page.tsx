import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Download, Calendar } from "lucide-react";

import { getPortfolioProject, portfolioProjects } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/section-header";
import { Badge } from "@/components/ui/badge";
import { siteContent } from "@/content/site";

type PortfolioCaseProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return portfolioProjects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: PortfolioCaseProps): Metadata {
  const project = getPortfolioProject(params.slug);
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

export default function PortfolioCasePage({ params }: PortfolioCaseProps) {
  const project = getPortfolioProject(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="flex flex-1 flex-col bg-background">
      {/* Hero */}
      <section className="container animate-softFade py-12">
        <div className="space-y-8">
          <Link
            href="/portfolio"
            className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4 icon-muted transition-transform group-hover:-translate-x-1" />
            Back to Portfolio
          </Link>

          <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr] items-center rounded-[3rem] bg-surface p-10 shadow-float">
            <div className="space-y-6">
              <Badge variant="soft">{project.industry}</Badge>
              <h1 className="display-1 text-foreground">{project.title}</h1>
              <p className="text-lg text-muted-foreground">{project.headline}</p>
              <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">
                <span>{project.region}</span>
                <span>/</span>
                <span>{project.domain}</span>
                <span>/</span>
                <span>{project.platform}</span>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg">
                  <a href={project.caseStudyPdf} download className="flex items-center gap-2">
                    Detailed Deck <Download className="h-4 w-4 icon-inverse" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/contact">Book Workshop</Link>
                </Button>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[2.5rem] shadow-soft">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  priority
                  unoptimized={project.image.startsWith("http")}
                />
                <div className="absolute inset-0 bg-primary/10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem + Constraints */}
      <section className="container py-16">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="surface-card rounded-3xl p-8 shadow-soft">
            <SectionHeader align="left" eyebrow="Problem" title="What we needed to solve" />
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              {project.problem.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="surface-card rounded-3xl p-8 shadow-soft">
            <SectionHeader align="left" eyebrow="Constraints" title="Non-negotiables" />
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              {project.constraints.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Approach + Architecture */}
      <section className="container py-16">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="surface-card rounded-3xl p-8 shadow-soft">
            <SectionHeader align="left" eyebrow="Approach" title="How we delivered" />
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              {project.approach.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="surface-card rounded-3xl p-8 shadow-soft">
            <SectionHeader align="left" eyebrow="Architecture" title="Reference stack" />
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              {project.architecture.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Outcomes + KPI Table */}
      <section className="container py-16">
        <div className="surface-card rounded-[3rem] p-10 shadow-float">
          <SectionHeader align="left" eyebrow="Outcomes" title="Measured impact" />
          <div className="mt-6 grid gap-6 lg:grid-cols-[1.1fr,0.9fr]">
            <ul className="space-y-3 text-sm text-muted-foreground">
              {project.outcomes.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="rounded-2xl bg-surface-2 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">KPI Table</p>
              <div className="mt-4 space-y-3">
                {project.metrics.map((metric) => (
                  <div key={metric.label} className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">{metric.label}</span>
                    <span className="font-semibold text-foreground">{metric.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stack + Timeline */}
      <section className="container py-16">
        <div className="grid gap-8 lg:grid-cols-[0.9fr,1.1fr]">
          <div className="surface-card rounded-3xl p-8 shadow-soft">
            <SectionHeader align="left" eyebrow="Stack" title="Technology" />
            <div className="mt-4 flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span key={tech} className="rounded-full bg-surface-2 px-3 py-1 text-xs font-semibold">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="surface-card rounded-3xl p-8 shadow-soft">
            <SectionHeader align="left" eyebrow="Delivery timeline" title="Release cadence" />
            <div className="mt-4 space-y-4">
              {project.timeline.map((item) => (
                <div key={item.phase} className="flex items-start gap-4">
                  <div className="mt-1 h-8 w-8 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                    <Calendar className="h-4 w-4 icon-accent" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">{item.phase}</p>
                    <p className="text-sm text-muted-foreground">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container pb-32">
        <div className="cta-band rounded-[3rem] px-8 py-24 text-center shadow-float">
          <div className="cta-inner max-w-3xl mx-auto space-y-8">
            <h2 className="display-1 text-white">Need a similar initiative?</h2>
            <p className="body-lg text-white/80">
              We align delivery pods across strategy, design, and engineering in under two weeks. Let's discuss your roadmap.
            </p>
            <div className="flex justify-center">
              <Button asChild size="xl" className="bg-white text-primary hover:bg-white/95">
                <Link href="/contact" className="flex items-center gap-2">
                  Book discovery workshop <ArrowRight className="h-5 w-5 icon-accent" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
