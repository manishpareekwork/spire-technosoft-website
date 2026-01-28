import Link from "next/link";
import { ArrowRight, Shield, TrendingUp, Users, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SocialProofBand } from "@/components/sections/social-proof";
import { industryProfiles } from "@/data/industries";

export default function IndustriesPage(): React.ReactElement {
  return (
    <div className="flex flex-1 flex-col">
      {/* Hero Section */}
      <section className="snap-section container">
        <div className="section-shell gradient-mesh space-y-8 py-16 text-center">
          <div className="relative">
            {/* Animated gradient orbs */}
            <div className="absolute -top-20 left-1/4 h-40 w-40 rounded-full bg-primary/30 blur-3xl opacity-60 pulse-glow" />
            <div className="absolute -top-10 right-1/4 h-32 w-32 rounded-full bg-secondary/25 blur-2xl opacity-50 pulse-glow" style={{ animationDelay: '1.5s' }} />
            
            <div className="relative z-10 space-y-4">
              <p className="text-sm uppercase tracking-[0.35em] text-secondary font-[var(--font-poppins)]">Industries We Serve</p>
              <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">
                Industry expertise for <span className="text-gradient">regulated, high-impact programs</span>
              </h1>
              <p className="mx-auto max-w-3xl text-base text-muted-foreground md:text-lg">
                We bring platform engineering, Experience Ops, and intelligence-led workflows to the industries that demand trust, scale, and
                measurable outcomes.
              </p>
            </div>
          </div>

          {/* Value Props */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 pt-8">
            {[
              { icon: Shield, label: "Compliance-ready", desc: "Built-in regulatory controls" },
              { icon: TrendingUp, label: "Measurable ROI", desc: "KPI-driven outcomes" },
              { icon: Users, label: "Enterprise Scale", desc: "1000s of users supported" },
              { icon: Zap, label: "Rapid Delivery", desc: "Platform pods method" }
            ].map((item, index) => (
              <div 
                key={item.label} 
                className="interactive-card bg-white/95 p-5 text-left dark:bg-white/5"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <p className="text-sm font-bold">{item.label}</p>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="snap-section container">
        <div className="section-shell space-y-8 py-16">
          <div className="text-center space-y-3">
            <p className="text-sm uppercase tracking-[0.3em] text-secondary font-[var(--font-poppins)]">Our Expertise</p>
            <h2 className="text-3xl font-bold md:text-4xl">Proven success across critical sectors</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {industryProfiles.map((industry, index) => (
              <Card 
                key={industry.slug} 
                className="group flex flex-col overflow-hidden interactive-card"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Vibrant gradient header instead of external image */}
                <div className="relative h-44 w-full overflow-hidden bg-gradient-to-br from-primary via-secondary to-accent">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_rgba(255,255,255,0.25),_transparent_50%),_radial-gradient(circle_at_70%_80%,_rgba(0,0,0,0.15),_transparent_60%)]" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="inline-block rounded-full bg-white/20 px-4 py-2 backdrop-blur-sm mb-2">
                        <p className="text-xs font-bold uppercase tracking-wider">Industry Focus</p>
                      </div>
                      <p className="text-2xl font-bold">{industry.title}</p>
                    </div>
                  </div>
                  {/* Animated orb */}
                  <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-white/20 blur-2xl pulse-glow" />
                </div>

                <CardHeader className="space-y-2">
                  <CardTitle className="text-xl">{industry.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">{industry.summary}</p>
                </CardHeader>

                <CardContent className="flex flex-1 flex-col gap-4">
                  {/* Focus Areas */}
                  <div className="space-y-2">
                    <p className="text-xs uppercase tracking-wider text-secondary font-semibold">Key Focus Areas</p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {industry.focusAreas.slice(0, 3).map((item) => (
                        <li key={item} className="flex gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Success Metrics */}
                  <div className="space-y-2">
                    <p className="text-xs uppercase tracking-wider text-secondary font-semibold">Success Metrics</p>
                    <div className="flex flex-wrap gap-2">
                      {industry.successMetrics.slice(0, 2).map((metric) => (
                        <span key={metric} className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">
                          {metric}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <Link
                    href={`/industries/${industry.slug}`}
                    className="group/link mt-auto inline-flex items-center text-sm font-semibold text-primary transition-all duration-200 hover:text-secondary"
                  >
                    Explore {industry.title}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover/link:translate-x-1" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="snap-section container">
        <div className="section-shell gradient-mesh space-y-8 py-16">
          <div className="text-center space-y-3 mb-8">
            <p className="text-sm uppercase tracking-[0.3em] text-secondary font-[var(--font-poppins)]">Why Industry Expertise Matters</p>
            <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">
              We speak your language, <span className="text-gradient">understand your constraints</span>
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Domain Knowledge",
                description: "Teams with hands-on experience in your industry's workflows, regulations, and success metrics",
                stat: "10+ years",
                statLabel: "Industry experience"
              },
              {
                title: "Compliance Built-in",
                description: "Privacy-first architecture, audit trails, and regulatory reporting designed from day one",
                stat: "100%",
                statLabel: "Audit-ready"
              },
              {
                title: "Proven Outcomes",
                description: "Real metrics from live enterprise deployments across finance, healthcare, manufacturing, and energy",
                stat: "25+",
                statLabel: "Industry deployments"
              }
            ].map((item, index) => (
              <div 
                key={item.title}
                className="interactive-card bg-white/95 p-6 text-left dark:bg-white/5"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4 inline-block rounded-full bg-gradient-to-br from-primary to-secondary px-4 py-2">
                  <p className="text-xs font-bold text-white">{item.stat}</p>
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
                <p className="text-xs uppercase tracking-wider text-primary font-semibold">{item.statLabel}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="/contact">
              <Button size="lg" className="group">
                Discuss Your Industry Needs
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="container py-12">
        <SocialProofBand
          title="Enterprise credibility"
          description="Outcome-led partnerships across finance, healthcare, manufacturing, energy, and retail."
          variant="compact"
        />
      </section>
    </div>
  );
}
