import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ShieldCheck, Zap, Activity, Globe, Compass, Target } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { industryProfiles, getIndustryProfile } from "@/data/industries";

type IndustryPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return industryProfiles.map((industry) => ({ slug: industry.slug }));
}

export function generateMetadata({ params }: IndustryPageProps): Metadata {
  const industry = getIndustryProfile(params.slug);
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

export default function IndustryDetailPage({ params }: IndustryPageProps): React.ReactElement {
  const industry = getIndustryProfile(params.slug);

  if (!industry) {
    notFound();
  }

  return (
    <div className="flex flex-1 flex-col">
      {/* Hero Section */}
      <section className="snap-section container animate-softFade py-16">
        <div className="section-shell space-y-12">
          <div className="flex items-center gap-3">
             <Link href="/industries" className="group flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground hover:text-primary transition-colors">
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to Industries
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
                    <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white/80">Vertical Insight</p>
                  </div>
                  <h1 className="text-5xl font-extrabold md:text-7xl tracking-tight leading-[1.1]">
                    {industry.title}
                  </h1>
                  <p className="max-w-xl text-xl text-white/70 leading-relaxed">
                    {industry.summary}
                  </p>
                </div>
                <div className="flex flex-wrap gap-4">
                  <Button asChild size="lg" className="h-16 rounded-full bg-white text-primary px-10 text-lg font-bold group shadow-2xl hover:bg-white/95 transition-all">
                    <Link href="/contact" className="flex items-center gap-2">
                       Start Roadmap <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="hidden lg:block relative">
                 <div className="glass-panel p-10 border-white/20 space-y-8">
                    <div className="space-y-2">
                       <p className="text-xs font-black uppercase tracking-widest text-primary">Key Focus Areas</p>
                       <div className="flex flex-wrap gap-2 pt-2">
                          {industry.focusAreas.slice(0, 3).map((area) => (
                             <span key={area} className="rounded-full bg-white/5 border border-white/10 px-4 py-2 text-xs font-bold text-white/80">
                                {area}
                             </span>
                          ))}
                       </div>
                    </div>
                    <div className="p-6 rounded-3xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-white/10">
                       <p className="text-sm text-white/60 leading-relaxed italic">
                          "We align on compliance and delivery milestones starting with discovery sessions."
                       </p>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Details Grid */}
      <section className="snap-section container animate-softFade py-20">
        <div className="section-shell grid gap-8 md:grid-cols-2">
          {/* Focus Areas Card */}
          <div className="interactive-card bg-white/95 dark:bg-card/40 p-10 space-y-8 group">
            <div className="flex items-center gap-4">
               <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-lg">
                  <Target className="h-7 w-7" />
               </div>
               <h2 className="text-2xl font-black uppercase tracking-tight">Core Focus Areas</h2>
            </div>
            <ul className="grid gap-4">
              {industry.focusAreas.map((item) => (
                <li key={item} className="flex gap-4 text-base text-muted-foreground group/item">
                  <span className="mt-2 h-2 w-2 rounded-full bg-primary/40 group-hover/item:bg-primary transition-colors flex-shrink-0" />
                  <span className="group-hover/item:text-foreground transition-colors leading-relaxed font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs Card */}
          <div className="interactive-card bg-white/95 dark:bg-card/40 p-10 space-y-8 group">
            <div className="flex items-center gap-4">
               <div className="h-14 w-14 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all shadow-lg">
                  <Zap className="h-7 w-7" />
               </div>
               <h2 className="text-2xl font-black uppercase tracking-tight">Typical Programs</h2>
            </div>
            <ul className="grid gap-4">
              {industry.typicalPrograms.map((item) => (
                <li key={item} className="flex gap-4 text-base text-muted-foreground group/item">
                  <span className="mt-2 h-2 w-2 rounded-full bg-secondary/40 group-hover/item:bg-secondary transition-colors flex-shrink-0" />
                  <span className="group-hover/item:text-foreground transition-colors leading-relaxed font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Compliance Card */}
          <div className="interactive-card bg-white/95 dark:bg-card/40 p-10 space-y-8 group">
            <div className="flex items-center gap-4">
               <div className="h-14 w-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all shadow-lg">
                  <ShieldCheck className="h-7 w-7" />
               </div>
               <h2 className="text-2xl font-black uppercase tracking-tight">Compliance & Rigor</h2>
            </div>
            <ul className="grid gap-4">
              {industry.compliance.map((item) => (
                <li key={item} className="flex gap-4 text-base text-muted-foreground group/item">
                  <span className="mt-2 h-2 w-2 rounded-full bg-accent/40 group-hover/item:bg-accent transition-colors flex-shrink-0" />
                  <span className="group-hover/item:text-foreground transition-colors leading-relaxed font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Success Metrics Card */}
          <div className="interactive-card bg-white/95 dark:bg-card/40 p-10 space-y-8 group">
            <div className="flex items-center gap-4">
               <div className="h-14 w-14 rounded-2xl bg-info/10 flex items-center justify-center text-info group-hover:bg-info group-hover:text-white transition-all shadow-lg">
                  <Activity className="h-7 w-7" />
               </div>
               <h2 className="text-2xl font-black uppercase tracking-tight">Impact Metrics</h2>
            </div>
            <ul className="grid gap-4">
              {industry.successMetrics.map((item) => (
                <li key={item} className="flex gap-4 text-base text-muted-foreground group/item">
                  <span className="mt-2 h-2 w-2 rounded-full bg-info/40 group-hover/item:bg-info transition-colors flex-shrink-0" />
                  <span className="group-hover/item:text-foreground transition-colors leading-relaxed font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Relevant Cases */}
      <section className="snap-section container animate-softFade py-20">
        <div className="section-shell space-y-12">
           <div className="space-y-4">
              <h2 className="text-3xl font-black uppercase tracking-tight">Relevant Case Studies</h2>
              <div className="h-1 w-20 bg-primary/20 rounded-full" />
           </div>
           <div className="grid gap-6">
              {industry.caseStudies.map((caseStudy) => (
                <Link 
                  key={caseStudy.href} 
                  href={caseStudy.href} 
                  className="interactive-card bg-white/95 dark:bg-card/40 p-8 flex items-center justify-between group transition-all duration-300 hover:pl-10"
                >
                  <span className="text-xl font-bold group-hover:text-primary transition-colors">{caseStudy.title}</span>
                  <div className="h-12 w-12 rounded-full bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              ))}
           </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="snap-section container animate-softFade pb-20">
        <div className="relative overflow-hidden rounded-[40px] bg-slate-900 px-8 py-20 text-center text-white shadow-2xl">
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_rgba(var(--primary),0.1),_transparent_40%)]" />
           <div className="relative z-10 max-w-4xl mx-auto space-y-10">
              <div className="space-y-4">
                <p className="text-xs font-black uppercase tracking-[0.5em] text-white/50">Next Step</p>
                <h2 className="text-4xl font-extrabold md:text-6xl">Ready to Define Your Vertical Strategy?</h2>
                <p className="text-xl text-white/80 leading-relaxed max-w-2xl mx-auto">
                   Discuss an industry-specific roadmap with our delivery pods and align on compliance and impact milestones.
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" className="h-16 rounded-full bg-white text-primary px-12 text-lg font-bold group shadow-2xl hover:bg-white/95">
                  <Link href="/contact" className="flex items-center gap-2">
                    Book a Discovery Call <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
}
