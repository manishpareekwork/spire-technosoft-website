import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Download, Target, Zap, Layout, Users, Activity, Clock, Globe } from "lucide-react";
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
    <div className="flex flex-1 flex-col">
      {/* Hero Section */}
      <section className="snap-section container animate-softFade py-16">
        <div className="section-shell space-y-12">
            <div className="flex items-center gap-3">
              <Link href="/portfolio" className="group flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground hover:text-primary transition-colors">
                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                Back to Portfolio
              </Link>
            </div>

            <div className="relative overflow-hidden rounded-[40px] bg-slate-900 px-8 py-20 text-white md:px-16 lg:py-32 shadow-2xl">
              {/* Atmospheric Background */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_25%,_rgba(var(--primary),0.15),_transparent_60%),_radial-gradient(circle_at_80%_70%,_rgba(var(--secondary),0.20),_transparent_65%)] opacity-40" />
              
              <div className="relative z-10 grid gap-16 lg:grid-cols-[1.2fr,0.8fr] lg:items-center">
                <div className="space-y-8">
                  <div className="space-y-6">
                    <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 backdrop-blur-md border border-white/20">
                      <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                      <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white/80">{project.industry}</p>
                    </div>
                    <h1 className="text-4xl font-extrabold md:text-6xl tracking-tight leading-[1.1]">
                      {project.title}
                    </h1>
                    <p className="max-w-xl text-xl text-white/70 leading-relaxed">
                      {project.headline}
                    </p>
                    <div className="flex flex-wrap gap-4 text-[10px] font-black uppercase tracking-[0.3em] text-white/40">
                      <span className="flex items-center gap-2"><Globe className="h-3 w-3" /> {project.region}</span>
                      <span className="text-primary/40">•</span>
                      <span>{project.domain}</span>
                      <span className="text-primary/40">•</span>
                      <span>{project.platform}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-4">
                    <Button asChild size="lg" className="h-16 rounded-full bg-white text-primary px-10 text-lg font-bold group shadow-2xl hover:bg-white/95">
                      <a href={project.caseStudyPdf} download className="flex items-center gap-2">
                         Detailed Deck <Download className="h-5 w-5 transition-transform group-hover:translate-y-1" />
                      </a>
                    </Button>
                     <Button asChild variant="outline" size="lg" className="h-16 rounded-full border-white/30 text-white px-10 text-lg font-bold hover:bg-white/10">
                      <Link href="/contact">Book Workshop</Link>
                    </Button>
                  </div>
                </div>

                <div className="relative group overflow-hidden rounded-[2.5rem] border border-white/10 shadow-2xl transition-all duration-700 hover:border-primary/50">
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
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />
                   </div>
                </div>
              </div>
            </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="snap-section container animate-softFade py-10">
        <div className="section-shell grid gap-6 md:grid-cols-3">
          {project.metrics.map((metric, idx) => (
            <div 
              key={`${project.slug}-${metric.label}`} 
              className="interactive-card bg-white/95 dark:bg-card/40 p-8 text-center group"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <p className="text-4xl font-black text-primary group-hover:scale-110 transition-transform duration-500">{metric.value}</p>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground/60 group-hover:text-primary transition-colors">{metric.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Content Grid */}
      <section className="snap-section container animate-softFade py-20 text-left">
        <div className="section-shell space-y-16">
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
            <div className="interactive-card bg-slate-900 text-white p-12 space-y-10 relative overflow-hidden group">
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_rgba(var(--primary),0.1),_transparent_40%)]" />
               <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
                  <div className="space-y-4">
                    <h2 className="text-4xl font-extrabold uppercase tracking-tight">System Outcomes</h2>
                    <div className="h-1 w-20 bg-primary/40 rounded-full group-hover:w-full transition-all duration-700" />
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="rounded-full bg-white/10 border border-white/10 px-4 py-2 text-[10px] font-black uppercase tracking-widest text-white/50 group-hover:text-white transition-colors">
                        {tech}
                      </span>
                    ))}
                  </div>
               </div>
               <div className="relative z-10 grid gap-6 md:grid-cols-2">
                 {project.outcomes.map((outcome) => (
                    <div key={outcome} className="flex gap-4 group/item">
                       <div className="mt-1 h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 group-hover/item:bg-primary transition-colors">
                          <Activity className="h-3 w-3 text-primary group-hover/item:text-white" />
                       </div>
                       <p className="text-lg text-white/60 group-hover/item:text-white leading-relaxed transition-colors font-medium">
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
      <section className="snap-section container animate-softFade pb-24">
        <div className="relative overflow-hidden rounded-[40px] bg-white border border-slate-900/5 px-8 py-20 text-center shadow-2xl">
           <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5" />
           <div className="relative z-10 max-w-4xl mx-auto space-y-12">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-primary border border-primary/20">
                  <span className="text-[10px] font-black uppercase tracking-widest">Next Step</span>
                </div>
                <h2 className="text-4xl font-extrabold md:text-6xl text-slate-900 tracking-tight">Need a Similar Initiative?</h2>
                <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto font-medium">
                  We align delivery pods across strategy, design, and engineering in under two weeks. Let's discuss your roadmap.
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" className="h-16 rounded-full bg-slate-900 text-white px-12 text-lg font-bold group shadow-2xl hover:bg-slate-800">
                  <Link href="/contact" className="flex items-center gap-2">
                    Book Discovery Workshop <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
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
    <div className="interactive-card bg-white/95 dark:bg-card/40 p-10 space-y-8 group transition-all duration-300">
      <div className="flex items-center gap-4">
        <div className={`h-14 w-14 rounded-2xl bg-${color}/10 flex items-center justify-center text-${color} group-hover:bg-${color} group-hover:text-white transition-all shadow-lg`}>
          <Icon className="h-7 w-7" />
        </div>
        <h2 className="text-2xl font-black uppercase tracking-tight leading-none pt-1">{title}</h2>
      </div>
      <ul className="grid gap-4">
        {items.map((item) => (
          <li key={item} className="flex gap-4 text-base text-muted-foreground group/item">
            <span className={`mt-2 h-2 w-2 rounded-full bg-${color}/40 group-hover/item:bg-${color} transition-colors flex-shrink-0`} />
            <span className="group-hover/item:text-foreground transition-colors leading-relaxed font-medium">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function TimelineCard({ timeline, icon: Icon }: { timeline: { phase: string; detail: string }[]; icon: any }) {
  return (
     <div className="interactive-card bg-white/95 dark:bg-card/40 p-10 space-y-8 group">
      <div className="flex items-center gap-4">
        <div className="h-14 w-14 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all shadow-lg">
          <Icon className="h-7 w-7" />
        </div>
        <h2 className="text-2xl font-black uppercase tracking-tight leading-none pt-1">The Timeline</h2>
      </div>
      <div className="space-y-6 relative before:absolute before:left-3 before:top-2 before:bottom-2 before:w-px before:bg-muted/20">
        {timeline.map((item) => (
          <div key={item.phase} className="relative pl-10 space-y-1 group/phase">
            <div className="absolute left-1.5 top-1.5 h-3 w-3 rounded-full bg-white border-2 border-secondary transition-all group-hover/phase:scale-125 group-hover/phase:bg-secondary" />
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary">{item.phase}</p>
            <p className="text-sm font-semibold text-muted-foreground group-hover/phase:text-foreground transition-colors leading-relaxed">{item.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
