import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Download, Target, Zap, Layout, Users, Activity, Clock, Globe, CheckCircle2 } from "lucide-react";
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
    <div className="flex flex-1 flex-col bg-background">
      {/* Hero Section */}
      <section className="container animate-softFade py-12">
        <div className="space-y-12">
            <div className="flex items-center gap-3">
              <Link href="/portfolio" className="group flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground hover:text-primary transition-colors">
                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                Back to Portfolio
              </Link>
            </div>

            <div className="relative overflow-hidden rounded-[3rem] bg-white border border-primary/5 px-8 py-16 md:px-16 lg:py-24 shadow-2xl">
              <div className="relative z-10 grid gap-16 lg:grid-cols-[1.2fr,0.8fr] lg:items-center">
                <div className="space-y-10 text-left">
                  <div className="space-y-6">
                    <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 border border-primary/20">
                      <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                      <p className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">{project.industry}</p>
                    </div>
                    <h1 className="text-5xl font-extrabold md:text-7xl tracking-tight leading-[1.1] text-foreground">
                      {project.title}
                    </h1>
                    <p className="max-w-xl text-2xl text-muted-foreground leading-relaxed font-medium">
                      {project.headline}
                    </p>
                    <div className="flex flex-wrap gap-4 text-[11px] font-black uppercase tracking-[0.3em] text-primary/60">
                      <span className="flex items-center gap-2 font-black"><Globe className="h-4 w-4" /> {project.region}</span>
                      <span className="text-primary/20">•</span>
                      <span>{project.domain}</span>
                      <span className="text-primary/20">•</span>
                      <span>{project.platform}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-4">
                    <Button asChild size="lg" className="h-16 rounded-full bg-primary text-white hover:text-white px-10 text-lg font-bold group shadow-2xl hover:bg-secondary border-none">
                      <a href={project.caseStudyPdf} download className="flex items-center gap-3">
                         Detailed Deck <Download className="h-5 w-5 transition-transform group-hover:translate-y-1" />
                      </a>
                    </Button>
                     <Button asChild variant="outline" size="lg" className="h-16 rounded-full border-primary/10 text-primary px-10 text-lg font-bold hover:bg-primary/5">
                      <Link href="/contact">Book Workshop</Link>
                    </Button>
                  </div>
                </div>

                <div className="relative group overflow-hidden rounded-[2.5rem] border border-primary/10 shadow-3xl transition-all duration-700 hover:border-primary/50">
                   <div className="relative aspect-[4/3] w-full">
                    <Image
                      src={project.image}
                      alt={project.imageAlt}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-110"
                      sizes="(min-width: 1024px) 40vw, 100vw"
                      priority
                      unoptimized={project.image.startsWith("http")}
                    />
                    <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
                   </div>
                </div>
              </div>
            </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="container animate-softFade py-10">
        <div className="grid gap-8 md:grid-cols-3">
          {project.metrics.map((metric) => (
            <div 
              key={`${project.slug}-${metric.label}`} 
              className="interactive-card p-10 text-center group bg-white shadow-xl"
            >
              <p className="text-5xl font-extrabold text-primary mb-3 group-hover:scale-110 transition-transform duration-500">{metric.value}</p>
              <p className="text-[11px] font-black uppercase tracking-[0.3em] text-muted-foreground group-hover:text-primary transition-colors">{metric.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Content Grid */}
      <section className="container animate-softFade py-20 text-left">
        <div className="space-y-20">
          <div className="grid gap-8 lg:grid-cols-3">
            <CaseSection title="The Challenge" items={project.challenge} icon={Target} color="primary" />
            <CaseSection title="Our Approach" items={project.approach} icon={Zap} color="secondary" />
            <CaseSection title="Architecture" items={project.architecture} icon={Layout} color="accent" />
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            <CaseSection title="Spire's Role" items={project.role} icon={Users} color="info" />
            <TimelineCard timeline={project.timeline} icon={Clock} />
            <CaseSection title="Project Pod" items={project.team} icon={Users} color="success" />
          </div>

          <div className="grid gap-8">
            <div className="interactive-card bg-white border border-primary/10 p-12 space-y-12 relative overflow-hidden group shadow-2xl">
               <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
                  <div className="space-y-4">
                    <h2 className="text-4xl font-extrabold text-secondary tracking-tight">System Outcomes</h2>
                    <div className="h-1 w-20 bg-primary/20 rounded-full group-hover:w-48 transition-all duration-700" />
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="rounded-full bg-primary/5 border border-primary/10 px-5 py-2 text-[10px] font-black uppercase tracking-widest text-primary">
                        {tech}
                      </span>
                    ))}
                  </div>
               </div>
               <div className="relative z-10 grid gap-10 md:grid-cols-2">
                 {project.outcomes.map((outcome) => (
                    <div key={outcome} className="flex gap-5 group/item">
                       <div className="mt-1 h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover/item:bg-primary transition-colors">
                          <CheckCircle2 className="h-4 w-4 text-primary group-hover/item:text-white" />
                       </div>
                       <p className="text-lg text-muted-foreground group-hover/item:text-foreground leading-relaxed transition-colors font-semibold">
                          {outcome}
                       </p>
                    </div>
                 ))}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container animate-softFade pb-32">
        <div className="relative overflow-hidden rounded-[3rem] bg-primary px-8 py-24 text-center text-white shadow-2xl shadow-primary/20">
           <div className="relative z-10 max-w-4xl mx-auto space-y-12">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-white/80 border border-white/20">
                  <span className="text-[10px] font-black uppercase tracking-widest">Growth Path</span>
                </div>
                <h2 className="text-5xl font-extrabold md:text-7xl tracking-tight">Need a similar initiative?</h2>
                <p className="text-2xl text-white/80 leading-relaxed max-w-2xl mx-auto font-medium">
                  We align delivery pods across strategy, design, and engineering in under two weeks. Let's discuss your roadmap.
                </p>
              </div>
              <div className="flex justify-center pt-8">
                <Button asChild size="lg" className="h-16 rounded-full bg-white text-primary px-16 text-xl font-bold group shadow-2xl hover:bg-white/95 border-none">
                  <Link href="/contact" className="flex items-center gap-3">
                    Book Discovery Workshop <ArrowRight className="h-6 w-6 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
}

function CaseSection({ title, items, icon: Icon, color }: { title: string; items: string[]; icon: any; color: string }) {
  return (
    <div className="interactive-card p-10 space-y-8 group transition-all duration-300 bg-white shadow-xl">
      <div className="flex items-center gap-4">
        <div className={`h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-sm`}>
          <Icon className="h-7 w-7" />
        </div>
        <h2 className="text-2xl font-black uppercase tracking-tight text-foreground">{title}</h2>
      </div>
      <ul className="grid gap-4">
        {items.map((item) => (
          <li key={item} className="flex gap-4 text-base text-muted-foreground group/item">
            <ArrowRight className="mt-1.5 h-4 w-4 text-primary/30 group-hover/item:text-primary transition-colors flex-shrink-0" />
            <span className="group-hover/item:text-foreground transition-colors leading-relaxed font-semibold">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function TimelineCard({ timeline, icon: Icon }: { timeline: { phase: string; detail: string }[]; icon: any }) {
  return (
     <div className="interactive-card p-10 space-y-8 group bg-white shadow-xl">
      <div className="flex items-center gap-4 text-left">
        <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
          <Icon className="h-7 w-7" />
        </div>
        <h2 className="text-2xl font-black uppercase tracking-tight text-foreground">Project Roadmap</h2>
      </div>
      <div className="space-y-8 relative before:absolute before:left-3 before:top-2 before:bottom-2 before:w-px before:bg-primary/10 text-left">
        {timeline.map((item) => (
          <div key={item.phase} className="relative pl-12 space-y-2 group/phase">
            <div className="absolute left-1.5 top-2.5 h-3 w-3 rounded-full bg-white border-2 border-primary transition-all group-hover/phase:scale-125 group-hover/phase:bg-primary" />
            <p className="text-[11px] font-black uppercase tracking-widest text-primary">{item.phase}</p>
            <p className="text-base font-bold text-muted-foreground group-hover/phase:text-foreground transition-colors leading-relaxed">{item.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
