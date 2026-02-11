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
    <div className="flex flex-1 flex-col bg-background">
      {/* Hero Section */}
      <section className="container animate-softFade py-12">
        <div className="space-y-12">
          <Link href="/solutions" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group">
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em]">Back to Solutions</span>
          </Link>
          
          <div className="relative overflow-hidden rounded-[3rem] bg-white border border-primary/5 px-8 py-20 text-center md:px-16 lg:py-28 shadow-2xl">
            <div className="relative z-10 max-w-4xl mx-auto space-y-10">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 border border-primary/20">
                  <Sparkles className="h-4 w-4 text-primary" />
                  <p className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">Solution Portfolio</p>
                </div>
                <h1 className="text-5xl font-extrabold md:text-7xl lg:text-8xl tracking-tight leading-[1.1] text-foreground">
                  {solution.title}
                </h1>
                <p className="text-2xl text-muted-foreground md:text-3xl leading-relaxed max-w-3xl mx-auto font-medium">
                  {solution.summary}
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-6 pt-4">
                <Button asChild size="lg" className="h-16 rounded-full bg-primary text-white hover:text-white px-12 text-lg font-bold group shadow-2xl hover:bg-secondary border-none">
                  <Link href="/contact" className="flex items-center gap-3">
                    Book Discovery Call <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="h-16 rounded-full border-primary/10 text-primary px-12 text-lg font-bold hover:bg-primary/5">
                  <a href="#architecture">View Architecture</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro & Problems Section */}
      <section className="container animate-softFade py-20">
        <div className="grid gap-16 lg:grid-cols-[1.2fr,1fr] text-left">
          <div className="space-y-16">
            <div className="space-y-8">
              <h2 className="text-4xl font-extrabold text-secondary tracking-tight">Platform Narrative</h2>
              <p className="text-xl text-muted-foreground leading-relaxed font-medium">
                {solution.intro}
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {solution.tags.map((tag) => (
                  <span key={tag} className="text-[10px] font-black uppercase tracking-[0.2em] text-primary bg-primary/10 px-4 py-2 rounded-full border border-primary/5">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <h3 className="text-3xl font-bold flex items-center gap-4 text-foreground">
                <Zap className="h-8 w-8 text-primary" />
                Regulated Challenges Solved
              </h3>
              <div className="grid gap-6">
                {solution.typicalProblems.map((problem) => (
                  <div key={problem} className="interactive-card bg-white p-6 shadow-lg flex items-start gap-5 group">
                    <div className="mt-1 h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>
                    <p className="text-lg text-muted-foreground group-hover:text-foreground font-semibold leading-relaxed transition-colors">{problem}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-12">
            <div className="interactive-card bg-white p-10 space-y-10 shadow-2xl border border-primary/5">
              <h3 className="text-3xl font-extrabold text-secondary text-center tracking-tight">Impact Metrics</h3>
              <div className="grid gap-6">
                {solution.successMetrics.map((metric, index) => (
                  <div key={metric} className="flex items-center gap-8 p-6 rounded-2xl bg-primary/5 border border-primary/10 group hover:bg-primary transition-all">
                    <div className="h-14 w-14 rounded-2xl bg-white flex items-center justify-center text-primary text-xl font-black shadow-sm group-hover:scale-110 transition-transform">
                      {index + 1}
                    </div>
                    <p className="text-xl text-foreground group-hover:text-white font-bold leading-tight transition-colors">{metric}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="interactive-card bg-primary/5 p-10 space-y-8 border border-primary/10">
              <div className="flex items-center gap-4">
                <Workflow className="h-7 w-7 text-primary" />
                <h3 className="text-2xl font-bold text-foreground">Velocity Delivery</h3>
              </div>
              <div className="space-y-10">
                {solution.deliveryPlan.map((phase) => (
                  <div key={phase.phase} className="space-y-4">
                    <p className="text-xs uppercase tracking-[0.3em] text-primary font-black">{phase.timeframe} — {phase.phase}</p>
                    <div className="grid gap-3">
                      {phase.items.map((item) => (
                        <div key={item} className="flex items-center gap-3 text-base text-muted-foreground font-semibold">
                          <CheckCircle2 className="h-4 w-4 text-primary opacity-40 shrink-0" />
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
      <section id="architecture" className="container animate-softFade py-24">
        <div className="section-shell space-y-16 py-24 bg-white border border-primary/5 shadow-3xl overflow-hidden rounded-[3rem] text-center">
          <div className="relative z-10 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/5 px-4 py-2 border border-primary/10">
              <Layers className="h-4 w-4 text-primary" />
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">Reference Architecture</p>
            </div>
            <h2 className="text-4xl font-extrabold md:text-7xl text-secondary tracking-tight">Engineered for Scale</h2>
          </div>

          <div className="relative max-w-4xl mx-auto space-y-8 pt-10">
            {solution.architecture.map((layer, index) => (
              <div 
                key={layer.layer}
                className="interactive-card bg-white p-10 shadow-xl border border-primary/5 transition-all hover:translate-x-8 group text-left"
                style={{ 
                  animationDelay: `${index * 150}ms`,
                  marginLeft: `${index * 3}rem`
                }}
              >
                <div className="flex items-center gap-8">
                  <div className="h-16 w-16 rounded-2xl bg-primary text-white flex items-center justify-center text-2xl font-black shadow-lg group-hover:scale-110 transition-transform">
                    {index + 1}
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-3xl font-extrabold text-foreground">{layer.layer}</h3>
                    <div className="flex flex-wrap gap-3">
                      {layer.items.map(item => (
                        <span key={item} className="text-xs font-bold text-primary bg-primary/10 px-3 py-1.5 rounded-full border border-primary/10">{item}</span>
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
      <section className="container animate-softFade py-20">
        <div className="section-shell bg-primary px-8 py-24 rounded-[3rem] text-white shadow-2xl shadow-primary/20">
          <div className="grid gap-16 lg:grid-cols-2 items-center text-left">
            <div className="space-y-12">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-white/80 border border-white/20">
                  <ShieldCheck className="h-4 w-4" />
                  <span className="text-[10px] font-black uppercase tracking-widest">Enterprise Resilient</span>
                </div>
                <h2 className="text-5xl font-extrabold md:text-7xl tracking-tight">Secure By Architecture</h2>
              </div>
              <div className="grid gap-10">
                {solution.security.map((item) => (
                  <div key={item} className="flex items-start gap-6 group">
                    <div className="mt-1 h-10 w-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white transition-all shadow-sm shrink-0">
                      <Lock className="h-5 w-5 text-white group-hover:text-primary transition-colors" />
                    </div>
                    <p className="text-xl text-white/80 group-hover:text-white font-semibold leading-relaxed transition-colors">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-video rounded-[2.5rem] bg-white text-primary p-12 flex flex-col items-center justify-center gap-8 shadow-2xl">
                <div className="h-32 w-32 rounded-full bg-primary/10 flex items-center justify-center animate-pulse shadow-xl">
                  <ShieldCheck className="w-16 h-16 text-primary" />
                </div>
                <div className="space-y-2 text-center">
                  <p className="text-[11px] font-black uppercase tracking-[0.4em] text-primary/40">Regulatory Integrity</p>
                  <p className="text-2xl font-extrabold">Audit Ready Compliance</p>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Case Studies */}
      <section className="container animate-softFade py-24">
        <div className="space-y-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 text-left px-4">
            <div className="space-y-4">
              <h2 className="text-4xl font-extrabold text-secondary tracking-tight">Active Case Portfolios</h2>
              <p className="text-xl text-muted-foreground max-w-xl font-medium">
                Cross-industry transformations using similar architecture patterns and delivery models.
              </p>
            </div>
            <Button asChild size="lg" variant="outline" className="h-16 rounded-full border-primary/10 text-primary px-10 text-lg font-bold hover:bg-primary/5">
              <Link href="/portfolio" className="flex items-center gap-2">
                All Portfolios <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2">
            {solution.caseStudies.map((study) => (
              <Link
                key={study.href}
                href={study.href}
                className="interactive-card group p-12 space-y-8 block bg-white shadow-xl hover:translate-y-[-8px] transition-all"
              >
                <div className="flex justify-between items-center">
                  <div className="h-16 w-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                    <Workflow className="h-8 w-8" />
                  </div>
                  <div className="h-12 w-12 rounded-full bg-primary/5 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                    <ArrowRight className="h-6 w-6" />
                  </div>
                </div>
                <h3 className="text-3xl font-extrabold text-foreground group-hover:text-primary transition-colors text-left">
                  {study.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="container py-12">
        <SocialProofBand
          title="Field Proven Outcomes"
          description="Repeatable results across audit, healthcare, supply chain, and industrial programs."
          variant="compact"
        />
      </section>

      {/* Final CTA */}
      <section className="container animate-softFade pb-32">
        <div className="relative overflow-hidden rounded-[3rem] bg-primary px-8 py-24 text-center text-white shadow-2xl shadow-primary/20">
          <div className="relative z-10 max-w-4xl mx-auto space-y-12">
            <div className="space-y-6">
              <p className="text-xs font-black uppercase tracking-[0.4em] text-white/50">Partnership Model</p>
              <h2 className="text-5xl font-extrabold md:text-7xl">Book a delivery workshop</h2>
              <p className="text-2xl text-white/80 leading-relaxed max-w-2xl mx-auto font-medium">
                We align pods across strategy, design, and engineering within two weeks to scope your engagement.
              </p>
            </div>
            <div className="flex justify-center pt-4">
              <Button asChild size="lg" className="h-16 rounded-full bg-white text-primary px-16 text-xl font-bold group shadow-2xl hover:bg-white/95 border-none">
                <Link href="/contact" className="flex items-center gap-3">
                  Discuss Solution Roadmap <ArrowRight className="h-6 w-6 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
