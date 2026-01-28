import { ArrowRight, Award, CheckCircle2, Layers, Target } from "lucide-react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PortfolioGrid } from "@/components/portfolio/portfolio-grid";

export default function PortfolioPage(): React.ReactElement {
  return (
    <div className="flex flex-1 flex-col">
      {/* Hero Section */}
      <section className="snap-section container">
        <div className="section-shell gradient-mesh space-y-8 py-16 text-center">
          <div className="relative">
            {/* Animated gradient orbs */}
            <div className="absolute -top-20 left-1/3 h-48 w-48 rounded-full bg-primary/35 blur-3xl opacity-70 pulse-glow" />
            <div className="absolute -top-10 right-1/3 h-40 w-40 rounded-full bg-accent/30 blur-2xl opacity-60 pulse-glow" style={{ animationDelay: '2s' }} />
            <div className="absolute top-0 left-1/2 h-32 w-32 rounded-full bg-secondary/25 blur-2xl opacity-50 pulse-glow" style={{ animationDelay: '1s' }} />
            
            <div className="relative z-10 space-y-4">
              <p className="text-sm uppercase tracking-[0.4em] text-secondary font-[var(--font-poppins)]">
                Portfolio
              </p>
              <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">
                Projects that combine <span className="text-gradient">design, data, and domain expertise</span>
              </h1>
              <p className="mx-auto max-w-3xl text-base text-muted-foreground md:text-lg">
                Proof points from wellness ecosystems and cognitive care to enterprise audit, supply-chain quality, financial analytics, and
                industrial operations.
              </p>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 pt-6">
            {[
              { value: "25+", label: "Products Delivered", icon: Layers },
              { value: "100K+", label: "Users Reached", icon: Target },
              { value: "100%", label: "On-time Delivery", icon: CheckCircle2 },
              { value: "5", label: "Industries Served", icon: Award }
            ].map((stat, index) => (
              <div 
                key={stat.label}
                className="interactive-card bg-white/95 p-5 dark:bg-white/5"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                  <stat.icon className="h-5 w-5 text-primary" />
                </div>
                <p className="text-2xl font-bold">{stat.value}</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wide">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="snap-section container">
        <div className="section-shell space-y-8 py-16">
          <div className="max-w-4xl mx-auto">
            <Card className="interactive-card bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 border-primary/10">
              <CardContent className="space-y-4 px-8 py-8 text-center">
                <div className="inline-block rounded-full bg-primary/10 px-4 py-2 mb-2">
                  <p className="text-xs font-bold uppercase tracking-wider text-primary">Our Approach</p>
                </div>
                <p className="text-xl font-semibold md:text-2xl">
                  Our portfolio demonstrates how intelligent engineering drives measurable growth
                </p>
                <p className="text-sm text-muted-foreground md:text-base">
                  Every project reflects collaboration, innovation, and an obsession with outcomes—spanning industries like healthcare,
                  finance, manufacturing, and energy. Filter by domain, platform, or region to find relevant proof points.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Transparency Note */}
      <section className="container">
        <div className="section-shell max-w-3xl mx-auto">
          <Card className="interactive-card bg-white/95 dark:bg-white/5 border-primary/10">
            <CardContent className="space-y-3 px-6 py-6">
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-primary">Why some details are anonymized</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Client names, logos, and select metrics are anonymized to honor NDA obligations while still sharing the core challenges,
                    architecture decisions, and measurable outcomes. This transparency builds trust while respecting confidentiality.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Portfolio Grid Section */}
      <section className="snap-section container">
        <div className="section-shell space-y-8 py-16">
          <div className="text-center space-y-3">
            <p className="text-sm uppercase tracking-[0.3em] text-secondary font-[var(--font-poppins)]">Case Studies</p>
            <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">
              Explore our <span className="text-gradient">proven track record</span>
            </h2>
            <p className="mx-auto max-w-2xl text-base text-muted-foreground">
              Filter by industry, technology, or region to discover projects that align with your needs
            </p>
          </div>

          <PortfolioGrid />
        </div>
      </section>

      {/* CTA Section */}
      <section className="snap-section container">
        <div className="section-shell gradient-mesh py-16">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-secondary to-accent p-12 text-center text-white">
            {/* Gradient overlays */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_rgba(255,255,255,0.2),_transparent_50%),_radial-gradient(circle_at_70%_80%,_rgba(0,0,0,0.15),_transparent_60%)]" />
            
            {/* Animated orbs */}
            <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-white/20 blur-3xl pulse-glow" />
            <div className="absolute -bottom-10 -left-10 h-48 w-48 rounded-full bg-white/15 blur-3xl pulse-glow" style={{ animationDelay: '1.5s' }} />
            
            <div className="relative z-10 space-y-6">
              <div className="inline-block rounded-full bg-white/20 px-4 py-2 backdrop-blur-sm">
                <p className="text-xs font-bold uppercase tracking-wider">Ready to Start?</p>
              </div>
              <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">
                Let's build your success story
              </h2>
              <p className="mx-auto max-w-2xl text-base text-white/90 md:text-lg">
                Whether you're scaling an existing platform or launching a new digital initiative, our team brings proven expertise
                and measurable results to every engagement.
              </p>
              <div className="flex flex-col gap-4 pt-4 sm:flex-row sm:justify-center">
                <Link href="/contact">
                  <Button size="lg" className="w-full bg-white text-primary shadow-lg hover:bg-white/90 sm:w-auto">
                    Start a Conversation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/solutions">
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="w-full border-2 border-white/40 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 sm:w-auto"
                  >
                    Explore Solutions
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
