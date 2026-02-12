import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Shield, TrendingUp, Users, Zap, Search, Activity, Globe, Scale, Heart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SocialProofBand } from "@/components/sections/social-proof";
import { industryProfiles } from "@/data/industries";

export const metadata = {
  title: "Industries | Spire Technosoft",
  description: "Industry expertise for regulated, high-impact programs. We bring platform engineering and intelligence to finance, healthcare, and energy.",
};

export default function IndustriesPage(): React.ReactElement {
  return (
    <div className="flex flex-1 flex-col bg-background">
      {/* Hero Section */}
      <section className="container animate-softFade py-20">
        <div className="section-shell w-full space-y-12 py-10 text-center border-none shadow-none bg-transparent">
          <div className="relative">
            <div className="relative z-10 space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2">
                <Globe className="h-4 w-4 icon-accent" />
                <p className="text-sm font-bold uppercase tracking-[0.4em] text-primary">Industries We Serve</p>
              </div>
              <h1 className="text-5xl font-extrabold md:text-7xl lg:text-8xl leading-tight">
                Expertise for <span className="text-secondary">High-Stakes Programs</span>
              </h1>
              <p className="mx-auto max-w-3xl text-xl text-muted-foreground md:text-2xl leading-relaxed">
                We bring platform engineering, Experience Ops, and intelligence-led workflows to the industries 
                that demand trust, scale, and measurable outcomes.
              </p>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 pt-8">
            {[
              { icon: Shield, label: "Compliance-ready", desc: "Built-in regulatory controls" },
              { icon: TrendingUp, label: "Measurable ROI", desc: "KPI-driven outcomes" },
              { icon: Scale, label: "Enterprise Scale", desc: "1000s of users supported" },
              { icon: Zap, label: "Rapid Delivery", desc: "Platform pods method" }
            ].map((item) => (
              <div 
                key={item.label} 
                className="interactive-card p-8 group text-left"
              >
                <div className="mb-4 flex items-center justify-center h-12 w-12 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <item.icon className="h-6 w-6 icon-accent group-hover:text-white" />
                </div>
                <div className="space-y-1">
                  <p className="text-lg font-bold text-foreground">{item.label}</p>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="container animate-softFade py-20 bg-white/50 border-y border-primary/5">
        <div className="space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-extrabold md:text-6xl text-secondary">Sectors We Transform</h2>
            <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
              Every vertical we serve has unique constraints. Our pods speak your industry language to deliver impact.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {industryProfiles.map((industry) => (
              <div 
                key={industry.slug} 
                className="interactive-card flex flex-col overflow-hidden p-0 group"
              >
                {/* Image Header */}
                <div className="relative h-72 w-full overflow-hidden">
                  <Image 
                    src={industry.image} 
                    alt={industry.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary/60 mix-blend-multiply group-hover:bg-primary/50 transition-colors" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center text-white">
                    <div className="inline-block rounded-full bg-white/20 px-4 py-1.5 backdrop-blur-md mb-4">
                      <p className="text-[10px] font-black uppercase tracking-[0.3em]">Vertical Focus</p>
                    </div>
                    <p className="text-4xl font-extrabold tracking-tight">{industry.title}</p>
                  </div>
                </div>

                <div className="p-10 flex flex-col flex-1 space-y-8">
                  <div className="space-y-4 text-left">
                    <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">{industry.summary}</h3>
                    <div className="h-1 w-12 bg-primary/30 rounded-full group-hover:w-24 transition-all duration-700" />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-8 flex-1 text-left">
                    {/* Focus Areas */}
                    <div className="space-y-4">
                      <p className="text-[10px] font-black uppercase tracking-widest text-primary border-b border-primary/10 pb-2">Key Areas</p>
                      <ul className="space-y-3">
                        {industry.focusAreas.slice(0, 3).map((item) => (
                          <li key={item} className="flex gap-3 text-sm font-medium text-muted-foreground group/item">
                            <ArrowRight className="h-4 w-4 icon-muted mt-1 shrink-0 group-hover/item:text-primary" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Success Metrics */}
                    <div className="space-y-4">
                      <p className="text-[10px] font-black uppercase tracking-widest text-secondary border-b border-secondary/10 pb-2">Impact Outcomes</p>
                      <div className="flex flex-wrap gap-2 pt-1">
                        {industry.successMetrics.slice(0, 2).map((metric) => (
                          <span key={metric} className="rounded-full bg-primary/5 px-4 py-2 text-xs font-bold text-primary">
                            {metric}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="pt-6 border-t border-muted/10 text-left">
                    <Link
                      href={`/industries/${industry.slug}`}
                      className="group/link inline-flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-primary hover:text-secondary transition-colors"
                    >
                      Case Strategy <ArrowRight className="h-5 w-5 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Domain Strength Section */}
      <section className="container animate-softFade py-24">
        <div className="section-shell bg-white rounded-[3rem] p-12 lg:p-20 space-y-16 overflow-hidden shadow-2xl">
          <div className="text-center space-y-6">
             <div className="inline-flex items-center gap-2 rounded-full bg-primary/5 px-4 py-1.5 text-primary">
                <Search className="h-4 w-4 icon-accent" />
                <span className="text-[10px] font-black uppercase tracking-widest">Industry Differentiation</span>
              </div>
            <h2 className="text-4xl font-extrabold md:text-6xl text-secondary">
              Strategic Domain Expertise
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3 text-left">
            {[
              {
                title: "Deep Domain Knowledge",
                description: "Our teams have decades of hands-on experience in the specific workflows, regulations, and pain points of your vertical.",
                stat: "10+ Years"
              },
              {
                title: "Zero-Trust Compliance",
                description: "Privacy-first architecture, immutable audit trails, and automated regulatory reporting designed into every sprint.",
                stat: "100%"
              },
              {
                title: "Tangible ROI Focus",
                description: "Every deployment is measured against board-level KPIs: speed to audit, user retention, and operational efficiency.",
                stat: "25+"
              }
            ].map((item) => (
              <div 
                key={item.title}
                className="interactive-card p-10 space-y-6 group"
              >
                <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                  <p className="text-lg font-black">{item.stat}</p>
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold group-hover:text-primary transition-colors text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground text-base leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-8">
            <Button asChild size="lg" className="h-16 rounded-full bg-primary text-white hover:text-white px-12 text-lg font-bold group shadow-2xl hover:bg-secondary border-none">
              <Link href="/contact" className="flex items-center">
                Discuss Your Industry Needs
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 icon-inverse" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="container py-20">
        <SocialProofBand
          title="Enterprise credibility"
          description="Outcome-led partnerships across finance, healthcare, manufacturing, energy, and retail."
          variant="compact"
        />
      </section>
    </div>
  );
}
