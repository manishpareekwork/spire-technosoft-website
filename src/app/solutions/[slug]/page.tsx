import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Layers, 
  Network,
  Zap,
  Lock,
  Workflow,
  Sparkles,
  Activity
} from "lucide-react";
import { solutionDetails, getSolutionDetail } from "@/data/solutions";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SocialProofBand } from "@/components/sections/social-proof";

type SolutionPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return solutionDetails.map((solution) => ({ slug: solution.slug }));
}

export function generateMetadata({ params }: SolutionPageProps): Metadata {
  const solution = getSolutionDetail(params.slug);
  if (!solution) {
    return {
      title: "Solution | Spire Technosoft",
    };
  }

  return {
    title: `${solution.title} | Spire Technosoft Solutions`,
    description: solution.summary,
  };
}

export default function SolutionDetailPage({ params }: SolutionPageProps): React.ReactElement {
  const solution = getSolutionDetail(params.slug);

  if (!solution) {
    notFound();
  }

  return (
    <div className="flex flex-1 flex-col">
      {/* Hero Section */}
      <section className="snap-section container animate-softFade">
        <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-br from-primary via-secondary to-accent px-8 py-20 text-white md:px-16 lg:py-28">
          {/* Background Mesh */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_25%,_rgba(255,255,255,0.15),_transparent_60%),_radial-gradient(circle_at_80%_70%,_rgba(90,180,200,0.20),_transparent_65%)]" />
          <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
          
          <div className="relative z-10 max-w-4xl space-y-8">
            <Link href="/solutions" className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors group mb-4">
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              <span className="text-sm font-bold uppercase tracking-widest">Back to Solutions</span>
            </Link>
            
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-md">
                <Sparkles className="h-4 w-4" />
                <p className="text-sm font-bold uppercase tracking-[0.3em]">Solution Detail</p>
              </div>
              <h1 className="text-5xl font-extrabold md:text-7xl lg:text-8xl leading-tight">
                {solution.title}
              </h1>
              <p className="text-xl text-white/90 md:text-2xl leading-relaxed max-w-2xl font-medium">
                {solution.summary}
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button asChild size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 rounded-full px-10">
                <a href="#architecture">View Architecture</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-white border-white/30 hover:bg-white/10 rounded-full px-10">
                <Link href="/contact">Book Discovery Call</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Intro & Problems Section */}
      <section className="snap-section container animate-softFade">
        <div className="section-shell grid gap-12 lg:grid-cols-[1.2fr,1fr] py-16">
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold md:text-4xl">Platform Narrative</h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                {solution.intro}
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {solution.tags.map((tag) => (
                  <span key={tag} className="text-[10px] font-black uppercase tracking-[0.2em] text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold flex items-center gap-3">
                <Zap className="h-6 w-6 text-primary" />
                Typical Problems We Solve
              </h3>
              <div className="grid gap-4">
                {solution.typicalProblems.map((problem) => (
                  <div key={problem} className="interactive-card bg-white/95 dark:bg-card/40 p-5 flex items-start gap-4 group">
                    <div className="mt-1 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>
                    <p className="text-foreground/80 font-medium leading-relaxed">{problem}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-10">
            <div className="glass-panel p-8 space-y-8">
              <h3 className="text-2xl font-bold text-center">Success Metrics</h3>
              <div className="grid gap-6">
                {solution.successMetrics.map((metric, index) => (
                  <div key={metric} className="flex items-center gap-6 p-4 rounded-2xl bg-white/50 dark:bg-gray-800/50 border border-white/20 shadow-sm group hover:bg-white transition-colors">
                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-bold group-hover:bg-primary group-hover:text-white transition-all">
                      {index + 1}
                    </div>
                    <p className="text-lg font-bold leading-tight">{metric}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="interactive-card bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 p-8 space-y-6">
              <div className="flex items-center gap-3">
                <Workflow className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-bold">What we deliver in 2-6-12 weeks</h3>
              </div>
              <div className="space-y-8">
                {solution.deliveryPlan.map((phase) => (
                  <div key={phase.phase} className="space-y-3">
                    <p className="text-xs uppercase tracking-[0.2em] text-secondary font-bold">{phase.timeframe} — {phase.phase}</p>
                    <div className="grid gap-2">
                      {phase.items.map((item) => (
                        <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="h-1 w-1 rounded-full bg-primary/40" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture Section */}
      <section id="architecture" className="snap-section container animate-softFade">
        <div className="section-shell space-y-16 py-20 bg-slate-900 text-white overflow-hidden rounded-[3rem]">
          <div className="absolute top-0 right-0 p-12 text-white/5 opacity-20">
            <Network className="w-96 h-96 rotate-12" />
          </div>

          <div className="relative z-10 text-center space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">
              <Layers className="h-4 w-4 text-secondary" />
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-secondary">Reference Architecture</p>
            </div>
            <h2 className="text-4xl font-bold md:text-5xl">Engineered for Scale</h2>
          </div>

          <div className="relative max-w-4xl mx-auto space-y-6">
            {solution.architecture.map((layer, index) => (
              <div 
                key={layer.layer}
                className="interactive-card bg-white/10 backdrop-blur-xl p-8 border border-white/10 transition-all hover:bg-white/15 hover:translate-x-4 group"
                style={{ 
                  animationDelay: `${index * 150}ms`,
                  marginLeft: `${index * 2}rem`
                }}
              >
                <div className="flex items-center gap-6">
                  <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-xl font-black group-hover:scale-110 transition-transform">
                    {index + 1}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold">{layer.layer}</h3>
                    <div className="flex flex-wrap gap-2">
                      {layer.items.map(item => (
                        <span key={item} className="text-xs text-white/50 bg-white/5 px-2 py-1 rounded">{item}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="snap-section container animate-softFade">
        <div className="section-shell bg-gradient-to-br from-indigo-950 to-slate-900 text-white space-y-12 py-20 rounded-[3rem]">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 rounded-full bg-info/20 px-4 py-1.5 text-info border border-info/30">
                  <ShieldCheck className="h-4 w-4" />
                  <span className="text-xs font-black uppercase tracking-widest">Enterprise Grade</span>
                </div>
                <h2 className="text-4xl font-bold md:text-5xl">Security & Compliance</h2>
              </div>
              <div className="grid gap-6">
                {solution.security.map((item) => (
                  <div key={item} className="flex items-start gap-4 text-white/80 group">
                    <div className="mt-1 h-6 w-6 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                      <Lock className="h-3 w-3 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <p className="text-lg font-medium leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
              <div className="flex gap-6 pt-4">
                <div className="flex items-center gap-2 text-white/60">
                  <Activity className="h-4 w-4" />
                  <span className="text-xs font-bold uppercase tracking-widest">Real-time Monitoring</span>
                </div>
                <div className="flex items-center gap-2 text-white/60">
                  <ShieldCheck className="h-4 w-4" />
                  <span className="text-xs font-bold uppercase tracking-widest">Audit Ready</span>
                </div>
              </div>
            </div>
            <div className="relative aspect-square lg:aspect-video rounded-[2.5rem] bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.05),_transparent)]" />
              <div className="relative z-10 flex flex-col items-center gap-6">
                <div className="h-32 w-32 rounded-full bg-primary/20 flex items-center justify-center animate-pulse">
                  <ShieldCheck className="w-16 h-16 text-primary" />
                </div>
                <p className="text-sm font-bold uppercase tracking-[0.4em] text-white/40">Secure By Design</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Case Studies */}
      <section className="snap-section container animate-softFade">
        <div className="section-shell space-y-12 py-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 text-center md:text-left">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold md:text-4xl text-gradient-elegant inline-block">Related Case Studies</h2>
              <p className="text-muted-foreground text-lg max-w-xl">
                Cross-industry transformations using similar architecture patterns and delivery models.
              </p>
            </div>
            <Button asChild size="lg" variant="outline" className="rounded-full px-8 group">
              <Link href="/portfolio">
                Full Portfolio <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2">
            {solution.caseStudies.map((study) => (
              <Link
                key={study.href}
                href={study.href}
                className="interactive-card group bg-white/95 dark:bg-card/40 p-10 space-y-6 block transition-all hover:bg-white"
              >
                <div className="flex justify-between items-start">
                  <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    <Workflow className="h-7 w-7" />
                  </div>
                  <div className="h-10 w-10 rounded-full bg-muted/30 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                    <ArrowRight className="h-5 w-5" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold leading-tight group-hover:text-primary transition-colors">
                  {study.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="container py-12">
        <SocialProofBand
          title="Proof across regulated programs"
          description="Trusted delivery for global compliance, healthcare, supply chain, and industrial transformations."
          variant="compact"
        />
      </section>

      {/* CTA Footer */}
      <section className="snap-section container animate-softFade mb-12">
        <div className="relative overflow-hidden rounded-[3rem] bg-gradient-to-r from-primary via-secondary to-accent px-8 py-20 text-center text-white shadow-2xl shadow-primary/20">
          <div className="relative z-10 space-y-8 max-w-2xl mx-auto">
            <div className="space-y-4">
              <p className="text-sm font-black uppercase tracking-[0.4em] text-white/70">Next Step</p>
              <h2 className="text-4xl font-bold md:text-5xl">Book a discovery workshop</h2>
            </div>
            <p className="text-lg text-white/80 leading-relaxed max-w-lg mx-auto">
              We align pods across strategy, design, and engineering within two weeks to scope your engagement.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 rounded-full px-12 h-14 text-lg font-bold group">
                <Link href="/contact" className="flex items-center gap-2">
                  Start a conversation <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
          {/* Decorative Orbs */}
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-secondary/20 blur-3xl opacity-50" />
        </div>
      </section>
    </div>
  );
}

