import { ArrowRight, Award, CheckCircle2, Layers, Target, Sparkles, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PortfolioGrid } from "@/components/portfolio/portfolio-grid";

export default function PortfolioPage(): React.ReactElement {
  return (
    <div className="flex flex-1 flex-col">
      {/* Hero Section */}
      <section className="snap-section container animate-softFade">
        <div className="section-shell space-y-12 py-16 text-center">
          <div className="relative">
            {/* Animated gradient orbs */}
            <div className="absolute -top-20 left-1/4 h-64 w-64 rounded-full bg-primary/20 blur-3xl opacity-60 pulse-glow" />
            <div className="absolute -top-10 right-1/4 h-56 w-56 rounded-full bg-secondary/15 blur-3xl opacity-50 pulse-glow" style={{ animationDelay: '2s' }} />
            
            <div className="relative z-10 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 border border-primary/20">
                <Sparkles className="h-4 w-4 text-primary" />
                <p className="text-sm font-bold uppercase tracking-[0.4em] text-primary font-[var(--font-poppins)]">
                  Portfolio
                </p>
              </div>
              <h1 className="text-4xl font-bold md:text-6xl lg:text-7xl leading-tight">
                Projects that combine <span className="text-gradient-elegant">design, data, and domain expertise</span>
              </h1>
              <p className="mx-auto max-w-3xl text-lg text-muted-foreground md:text-xl leading-relaxed">
                Proof points from wellness ecosystems and cognitive care to enterprise audit, supply-chain quality, financial analytics, and
                industrial operations.
              </p>
            </div>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { value: "25+", label: "Products Delivered", icon: Layers, color: "hsl(var(--primary))" },
              { value: "100K+", label: "Users Reached", icon: Target, color: "hsl(var(--secondary))" },
              { value: "100%", label: "On-time Delivery", icon: CheckCircle2, color: "hsl(var(--accent))" },
              { value: "5", label: "Industries Served", icon: Award, color: "hsl(var(--info))" }
            ].map((stat, index) => (
              <div 
                key={stat.label}
                className="interactive-card bg-white/95 dark:bg-card/40 p-6 group transition-all"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div 
                  className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl transition-transform group-hover:scale-110"
                  style={{ backgroundColor: `${stat.color}15`, color: stat.color }}
                >
                  <stat.icon className="h-6 w-6" />
                </div>
                <p className="text-3xl font-black mb-1">{stat.value}</p>
                <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy & Transparency */}
      <section className="snap-section container animate-softFade">
        <div className="section-shell grid gap-8 lg:grid-cols-2 py-16">
          <div className="interactive-card bg-gradient-to-br from-primary/5 to-secondary/10 p-10 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              <p className="text-xs font-bold uppercase tracking-widest text-primary">Our Approach</p>
            </div>
            <h2 className="text-3xl font-bold leading-tight">
              Engineering impact through relentless focus on outcomes
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Every project reflects collaboration, innovation, and an obsession with metrics—spanning industries like healthcare,
              finance, and energy. We don't just ship code; we deliver business transformation.
            </p>
          </div>

          <div className="glass-panel p-10 space-y-6 border-white/20">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary/10">
              <ShieldCheck className="h-6 w-6 text-secondary" />
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Why some details are anonymized</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Client names and select metrics are anonymized to honor NDA obligations while sharing the core challenges,
                architecture decisions, and measurable outcomes. This transparency builds trust while respecting confidentiality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid Section */}
      <section className="snap-section container animate-softFade">
        <div className="section-shell space-y-12 py-16">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold md:text-5xl">
              Explore our <span className="text-gradient-elegant">proven track record</span>
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Filter by industry, technology, or region to discover projects that align with your needs.
            </p>
          </div>

          <PortfolioGrid />
        </div>
      </section>

      {/* CTA Section */}
      <section className="snap-section container animate-softFade pb-20">
        <div className="relative overflow-hidden rounded-[3rem] bg-slate-900 px-8 py-20 text-center text-white">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent opacity-20" />
          <div className="absolute -top-20 -right-20 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
          
          <div className="relative z-10 space-y-8 max-w-3xl mx-auto">
            <div className="space-y-4">
              <p className="text-xs font-black uppercase tracking-[0.4em] text-white/50">Next Project</p>
              <h2 className="text-4xl font-bold md:text-6xl">
                Let's build your success story
              </h2>
            </div>
            <p className="text-lg text-white/70 leading-relaxed mx-auto max-w-2xl">
              Whether you're scaling an existing platform or launching a new digital initiative, our team brings proven expertise
              and measurable results to every engagement.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Button asChild size="lg" className="rounded-full px-10 h-14 text-lg font-bold group">
                <Link href="/contact" className="flex items-center gap-2">
                  Start a Conversation <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full px-10 h-14 text-lg font-bold border-white/20 hover:bg-white/10">
                <Link href="/solutions">Explore Solutions</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

