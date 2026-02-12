import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ShieldCheck, Zap, Activity, Globe, Compass, Target, CheckCircle2 } from "lucide-react";
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
    <div className="flex flex-1 flex-col bg-background">
      {/* Hero Section */}
      <section className="container animate-softFade py-12">
        <div className="space-y-12">
          <div className="flex items-center gap-3">
             <Link href="/industries" className="group flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground hover:text-primary transition-colors">
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1 icon-muted group-hover:text-primary" />
              Back to Industries
            </Link>
          </div>

          <div className="relative overflow-hidden rounded-[3rem] bg-white border border-primary/5 px-8 py-20 text-center md:px-16 lg:py-28 shadow-2xl">
            <div className="relative z-10 max-w-4xl mx-auto space-y-10">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 border border-primary/20">
                  <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                  <p className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">Vertical Insight</p>
                </div>
                <h1 className="text-5xl font-extrabold md:text-7xl tracking-tight leading-[1.1] text-foreground">
                  {industry.title}
                </h1>
                <p className="max-w-2xl mx-auto text-xl text-muted-foreground font-medium leading-relaxed">
                  {industry.summary}
                </p>
              </div>
              <div className="flex justify-center">
                <Button asChild size="lg" className="h-16 rounded-full bg-primary text-white hover:text-white px-12 text-lg font-bold group shadow-2xl hover:bg-secondary border-none">
                  <Link href="/contact" className="flex items-center gap-3">
                     Start Roadmap Strategy <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1 icon-inverse" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Details Grid */}
      <section className="container animate-softFade py-10">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Focus Areas Card */}
          <div className="interactive-card p-10 space-y-8 group text-left bg-white shadow-xl">
            <div className="flex items-center gap-4">
               <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                  <Target className="h-7 w-7 icon-accent group-hover:text-white" />
               </div>
               <h2 className="text-2xl font-black uppercase tracking-tight text-foreground">Core Focus Areas</h2>
            </div>
            <ul className="grid gap-5">
              {industry.focusAreas.map((item) => (
                <li key={item} className="flex gap-4 text-base text-muted-foreground group/item">
                  <ArrowRight className="mt-1.5 h-4 w-4 icon-muted group-hover/item:text-primary transition-colors flex-shrink-0" />
                  <span className="group-hover/item:text-foreground transition-colors leading-relaxed font-semibold">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs Card */}
          <div className="interactive-card p-10 space-y-8 group text-left bg-white shadow-xl">
            <div className="flex items-center gap-4">
               <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                  <Zap className="h-7 w-7 icon-accent group-hover:text-white" />
               </div>
               <h2 className="text-2xl font-black uppercase tracking-tight text-foreground">Typical Programs</h2>
            </div>
            <ul className="grid gap-5">
              {industry.typicalPrograms.map((item) => (
                <li key={item} className="flex gap-4 text-base text-muted-foreground group/item">
                  <ArrowRight className="mt-1.5 h-4 w-4 icon-muted group-hover/item:text-primary transition-colors flex-shrink-0" />
                  <span className="group-hover/item:text-foreground transition-colors leading-relaxed font-semibold">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Compliance Card */}
          <div className="interactive-card p-10 space-y-8 group text-left bg-white shadow-xl">
            <div className="flex items-center gap-4">
               <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                  <ShieldCheck className="h-7 w-7 icon-accent group-hover:text-white" />
               </div>
               <h2 className="text-2xl font-black uppercase tracking-tight text-foreground">Compliance & Rigor</h2>
            </div>
            <ul className="grid gap-5">
              {industry.compliance.map((item) => (
                <li key={item} className="flex gap-4 text-base text-muted-foreground group/item">
                  <ArrowRight className="mt-1.5 h-4 w-4 icon-muted group-hover/item:text-primary transition-colors flex-shrink-0" />
                  <span className="group-hover/item:text-foreground transition-colors leading-relaxed font-semibold">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Success Metrics Card */}
          <div className="interactive-card p-10 space-y-8 group text-left bg-white shadow-xl">
            <div className="flex items-center gap-4">
               <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                  <Activity className="h-7 w-7 icon-accent group-hover:text-white" />
               </div>
               <h2 className="text-2xl font-black uppercase tracking-tight text-foreground">Impact Metrics</h2>
            </div>
            <ul className="grid gap-5">
              {industry.successMetrics.map((item) => (
                <li key={item} className="flex gap-4 text-base text-muted-foreground group/item">
                  <ArrowRight className="mt-1.5 h-4 w-4 icon-muted group-hover/item:text-primary transition-colors flex-shrink-0" />
                  <span className="group-hover/item:text-foreground transition-colors leading-relaxed font-semibold">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Relevant Cases */}
      <section className="container animate-softFade py-20 pb-32">
        <div className="space-y-12 text-left">
           <div className="space-y-4">
              <h2 className="text-4xl font-extrabold text-secondary tracking-tight">Relevant Case Portfolios</h2>
              <div className="h-1 w-20 bg-primary/20 rounded-full" />
           </div>
           <div className="grid gap-6">
              {industry.caseStudies.map((caseStudy) => (
                <Link 
                  key={caseStudy.href} 
                  href={caseStudy.href} 
                  className="interactive-card p-10 flex items-center justify-between group bg-white shadow-lg transition-all hover:pl-12"
                >
                  <span className="text-2xl font-bold group-hover:text-primary transition-colors text-foreground">{caseStudy.title}</span>
                  <div className="h-14 w-14 rounded-full bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                    <ArrowRight className="h-6 w-6 transition-transform group-hover:translate-x-1 icon-accent group-hover:text-white" />
                  </div>
                </Link>
              ))}
           </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container animate-softFade pb-32">
        <div className="cta-band rounded-[3rem] px-8 py-24 text-center shadow-float">
           <div className="cta-inner max-w-4xl mx-auto space-y-12">
              <div className="space-y-6">
                <p className="text-xs font-black uppercase tracking-[0.5em] text-white/50">Consulting Partnership</p>
                <h2 className="text-4xl font-extrabold md:text-7xl tracking-tight">Define Your Sector Strategy</h2>
                <p className="text-2xl text-white/80 leading-relaxed max-w-2xl mx-auto font-medium">
                   Discuss an industry-specific roadmap with our delivery pods and align on compliance and impact milestones.
                </p>
              </div>
              <div className="flex justify-center pt-4">
                <Button asChild size="lg" className="h-16 rounded-full bg-white text-primary px-16 text-xl font-bold group shadow-2xl hover:bg-white/95 border-none">
                  <Link href="/contact" className="flex items-center gap-3">
                    Book Discovery Session <ArrowRight className="h-6 w-6 transition-transform group-hover:translate-x-1 icon-accent" />
                  </Link>
                </Button>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
}
