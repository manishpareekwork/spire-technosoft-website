import Link from "next/link";
import { ArrowRight, Shield, TrendingUp, Users, Zap, Search, Activity, Globe, Scale } from "lucide-react";
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
    <div className="flex flex-1 flex-col">
      {/* Hero Section */}
      <section className="snap-section container animate-softFade">
        <div className="section-shell space-y-12 py-16 text-center">
          <div className="relative">
            {/* Atmospheric Backgrounds */}
            <div className="absolute -top-20 left-1/4 h-64 w-64 rounded-full bg-primary/20 blur-3xl opacity-60 pulse-glow" />
            <div className="absolute top-0 right-1/4 h-56 w-56 rounded-full bg-secondary/15 blur-3xl opacity-50 pulse-glow" style={{ animationDelay: '2s' }} />
            
            <div className="relative z-10 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 border border-primary/20">
                <Globe className="h-4 w-4 text-primary" />
                <p className="text-sm font-bold uppercase tracking-[0.4em] text-primary font-[var(--font-poppins)]">Industries We Serve</p>
              </div>
              <h1 className="text-4xl font-extrabold md:text-6xl lg:text-7xl leading-tight">
                Expertise for <span className="text-gradient-elegant">High-Stakes Programs</span>
              </h1>
              <p className="mx-auto max-w-3xl text-lg text-muted-foreground md:text-xl leading-relaxed">
                We bring platform engineering, Experience Ops, and intelligence-led workflows to the industries 
                that demand trust, scale, and measurable outcomes.
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 pt-8">
            {[
              { icon: Shield, label: "Compliance-ready", desc: "Built-in regulatory controls", color: "primary" },
              { icon: TrendingUp, label: "Measurable ROI", desc: "KPI-driven outcomes", color: "secondary" },
              { icon: Scale, label: "Enterprise Scale", desc: "1000s of users supported", color: "accent" },
              { icon: Zap, label: "Rapid Delivery", desc: "Platform pods method", color: "info" }
            ].map((item, index) => (
              <div 
                key={item.label} 
                className="interactive-card bg-white/95 dark:bg-card/40 p-6 group text-left transition-all duration-300 hover:translate-y-[-4px]"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`mb-4 flex items-center justify-center h-12 w-12 rounded-2xl bg-${item.color}/10 text-${item.color} group-hover:bg-${item.color} group-hover:text-white transition-all shadow-lg`}>
                  <item.icon className="h-6 w-6" />
                </div>
                <div className="space-y-1">
                  <p className="text-base font-extrabold">{item.label}</p>
                  <p className="text-xs text-muted-foreground font-medium">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="snap-section container animate-softFade">
        <div className="section-shell space-y-12 py-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-extrabold md:text-5xl text-gradient-elegant inline-block">Proven Success Across Critical Sectors</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Every vertical we serve has unique constraints. Our pods speak your industry language to deliver impact.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {industryProfiles.map((industry, index) => (
              <div 
                key={industry.slug} 
                className="interactive-card group flex flex-col overflow-hidden transition-all duration-500 hover:translate-y-[-8px]"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Brand-aligned gradient header */}
                <div className="relative h-64 w-full overflow-hidden bg-slate-900">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent opacity-40 group-hover:scale-110 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_rgba(255,255,255,0.1),_transparent_50%)]" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center text-white space-y-4">
                    <div className="inline-block rounded-full bg-white/10 px-4 py-1.5 backdrop-blur-md border border-white/20">
                      <p className="text-[10px] font-black uppercase tracking-[0.3em]">Vertical Focus</p>
                    </div>
                    <p className="text-4xl font-extrabold tracking-tight">{industry.title}</p>
                  </div>
                  {/* Decorative corner orb */}
                  <div className="absolute -bottom-12 -right-12 h-40 w-40 rounded-full bg-white/10 blur-3xl opacity-50 pulse-glow" />
                </div>

                <div className="p-10 flex flex-col flex-1 space-y-10 bg-white/95 dark:bg-card/40">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">{industry.summary}</h3>
                    <div className="h-1 w-12 bg-primary/20 rounded-full group-hover:w-full transition-all duration-700" />
                  </div>

                  <div className="grid md:grid-cols-2 gap-8 flex-1">
                    {/* Focus Areas */}
                    <div className="space-y-4">
                      <p className="text-[10px] font-black uppercase tracking-widest text-primary border-b border-primary/10 pb-2">Key Areas</p>
                      <ul className="space-y-3">
                        {industry.focusAreas.slice(0, 3).map((item) => (
                          <li key={item} className="flex gap-3 text-sm font-medium text-muted-foreground group/item">
                            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary/40 group-hover/item:bg-primary transition-colors flex-shrink-0" />
                            <span className="group-hover/item:text-foreground transition-colors">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Success Metrics */}
                    <div className="space-y-4">
                      <p className="text-[10px] font-black uppercase tracking-widest text-secondary border-b border-secondary/10 pb-2">Impact</p>
                      <div className="flex flex-wrap gap-2 pt-1">
                        {industry.successMetrics.slice(0, 2).map((metric) => (
                          <span key={metric} className="rounded-full bg-secondary/5 border border-secondary/10 px-4 py-2 text-xs font-black text-secondary">
                            {metric}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="pt-6 border-t border-muted/5">
                    <Link
                      href={`/industries/${industry.slug}`}
                      className="group/link flex items-center gap-3 text-sm font-black uppercase tracking-widest text-primary hover:text-secondary transition-colors"
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
      <section className="snap-section container animate-softFade">
        <div className="section-shell bg-slate-900 text-white rounded-[40px] p-12 lg:p-24 space-y-16 overflow-hidden">
          <div className="text-center space-y-6">
             <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-white/70 border border-white/20">
                <Search className="h-4 w-4" />
                <span className="text-[10px] font-black uppercase tracking-widest">The Spire Advantage</span>
              </div>
            <h2 className="text-4xl font-extrabold md:text-6xl text-gradient-elegant inline-block">
              We Speak Your Industry Language
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Deep Domain Knowledge",
                description: "Our teams have decades of hands-on experience in the specific workflows, regulations, and pain points of your vertical.",
                stat: "10+ Years",
                color: "primary"
              },
              {
                title: "Zero-Trust Compliance",
                description: "Privacy-first architecture, immutable audit trails, and automated regulatory reporting designed into every sprint.",
                stat: "100%",
                color: "secondary"
              },
              {
                title: "Tangible ROI Focus",
                description: "Every deployment is measured against board-level KPIs: speed to audit, user retention, and operational efficiency.",
                stat: "25+",
                color: "accent"
              }
            ].map((item, index) => (
              <div 
                key={item.title}
                className="interactive-card bg-white/5 border border-white/10 p-10 space-y-6 group text-left"
              >
                <div className={`h-14 w-14 rounded-2xl bg-${item.color}/10 flex items-center justify-center text-${item.color} group-hover:scale-110 transition-all shadow-lg`}>
                  <p className="text-lg font-black">{item.stat}</p>
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-white/50 text-base leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-8">
            <Link href="/contact">
              <Button size="lg" className="h-16 rounded-full bg-white text-primary px-12 text-lg font-bold group shadow-2xl hover:bg-white/95">
                Discuss Your Industry Needs
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="snap-section container animate-softFade py-12">
        <SocialProofBand
          title="Enterprise credibility"
          description="Outcome-led partnerships across finance, healthcare, manufacturing, energy, and retail."
          variant="compact"
        />
      </section>
    </div>
  );
}

