import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Download } from "lucide-react";
import { getPortfolioProject, portfolioProjects } from "@/data/portfolio";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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
    };
  }
  return {
    title: `${project.title} | Spire Technosoft Case Study`,
    description: project.headline,
  };
}

export default function PortfolioCasePage({ params }: PortfolioCaseProps) {
  const project = getPortfolioProject(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <section className="container animate-softFade py-12 md:py-16">
      <div className="section-shell space-y-10">
        <div className="flex items-center gap-3 text-sm text-muted-foreground">
          <ArrowLeft className="h-4 w-4" />
          <Link href="/portfolio" className="font-semibold text-primary">
            Back to Portfolio
          </Link>
        </div>
        <div className="grid gap-8 lg:grid-cols-[3fr,2fr]">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.4em] text-secondary font-[var(--font-poppins)]">{project.industry}</p>
            <h1 className="text-3xl font-bold md:text-5xl">{project.title}</h1>
            <p className="text-lg text-muted-foreground">{project.headline}</p>
            <div className="flex flex-wrap gap-3 text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              <span>{project.domain}</span>
              <span className="text-primary">•</span>
              <span>{project.platform}</span>
              <span className="text-primary">•</span>
              <span>{project.region}</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <Badge key={tech} variant="outline" className="rounded-full border-primary/20 text-primary">
                  {tech}
                </Badge>
              ))}
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
              <Button asChild size="lg" className="px-6">
                <a href={project.caseStudyPdf} download>
                  Download case study PDF
                  <Download className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/contact">
                  Start a conversation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative min-h-[260px] overflow-hidden rounded-3xl">
            <Image
              src={project.image}
              alt={project.imageAlt}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 40vw, 100vw"
              priority
              unoptimized={project.image.startsWith("http")}
            />
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {project.metrics.map((metric) => (
            <Card key={`${project.slug}-${metric.label}`} className="bg-card">
              <CardContent className="space-y-1 px-6 py-5 text-center">
                <p className="text-3xl font-semibold text-primary">{metric.value}</p>
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">{metric.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          <CaseSection title="Challenge" items={project.challenge} />
          <CaseSection title="Approach" items={project.approach} />
          <CaseSection title="Architecture" items={project.architecture} />
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          <CaseSection title="Role" items={project.role} />
          <TimelineCard timeline={project.timeline} />
          <CaseSection title="Team" items={project.team} />
        </div>
        <Card className="bg-card">
          <CardHeader>
            <CardTitle>Outcomes</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {project.outcomes.map((outcome) => (
                <li key={outcome} className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
        <Card className="bg-card">
          <CardHeader>
            <CardTitle>Tech stack</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <Badge key={`${project.slug}-${tech}`} variant="outline" className="rounded-full border-primary/20 text-primary">
                {tech}
              </Badge>
            ))}
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-r from-primary/10 to-secondary/30">
          <CardContent className="flex flex-col gap-4 px-6 py-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.4em] text-secondary font-[var(--font-poppins)]">Next Step</p>
              <p className="text-lg font-semibold text-foreground">Book a discovery workshop to explore a similar initiative.</p>
              <p className="text-sm text-muted-foreground">We align pods across strategy, design, and engineering in under two weeks.</p>
            </div>
            <Button asChild size="lg" className="px-6">
              <Link href="/contact">
                Start a conversation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

type CaseSectionProps = {
  title: string;
  items: string[];
};

type TimelineCardProps = {
  timeline: { phase: string; detail: string }[];
};

function CaseSection({ title, items }: CaseSectionProps) {
  return (
    <Card className="bg-card">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2 text-sm text-muted-foreground">
          {items.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

function TimelineCard({ timeline }: TimelineCardProps) {
  return (
    <Card className="bg-card">
      <CardHeader>
        <CardTitle>Timeline</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {timeline.map((item) => (
          <div key={item.phase} className="space-y-1">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-secondary">{item.phase}</p>
            <p className="text-sm text-muted-foreground">{item.detail}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
