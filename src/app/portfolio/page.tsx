import { ArrowRight, Award, CheckCircle2, Layers, Target, Sparkles, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PortfolioGrid } from "@/components/portfolio/portfolio-grid";

export const metadata = {
  title: "Portfolio | Spire Technosoft",
  description: "Projects that combine design, data, and domain expertise across healthcare, finance, and industrial sectors.",
};

export default function PortfolioPage(): React.ReactElement {
  return (
    <div className="flex flex-1 flex-col bg-background">
      {/* Hero Section */}
      <section className="container animate-softFade py-20">
        <div className="section-shell w-full space-y-12 py-10 text-center border-none shadow-none bg-transparent">
          <div className="relative z-10 space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 border border-primary/20">
              <Sparkles className="h-4 w-4 text-primary" />
              <p className="text-sm font-bold uppercase tracking-[0.4em] text-primary">
                Portfolio
              </p>
            </div>
            <h1 className="text-5xl font-extrabold md:text-7xl lg:text-8xl leading-tight">
              Impact-led <span className="text-secondary">digital systems</span>
            </h1>
            <p className="mx-auto max-w-3xl text-xl text-muted-foreground md:text-2xl leading-relaxed">
              Proof points from wellness ecosystems and cognitive care to enterprise audit, supply-chain quality, financial analytics, and
              industrial operations.
            </p>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 pt-8">
            {[
              { value: "25+", label: "Products Delivered", icon: Layers },
              { value: "100K+", label: "Users Reached", icon: Target },
              { value: "100%", label: "On-time Delivery", icon: CheckCircle2 },
              { value: "5", label: "Industries Served", icon: Award }
            ].map((stat) => (
              <div 
                key={stat.label}
                className="interactive-card p-8 group text-left"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                  <stat.icon className="h-6 w-6" />
                </div>
                <p className="text-3xl font-black text-foreground mb-1">{stat.value}</p>
                <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy & Transparency */}
      <section className="container animate-softFade py-10">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="interactive-card p-12 space-y-8 text-left bg-primary/5 border-primary/10">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-primary border border-primary/20">
              <CheckCircle2 className="h-4 w-4" />
              <p className="text-xs font-bold uppercase tracking-widest">Our Approach</p>
            </div>
            <h2 className="text-4xl font-bold leading-tight text-foreground">
              Engineering impact with outcome focus
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Every project reflects collaboration, innovation, and an obsession with metrics—spanning industries like healthcare,
              finance, and energy. We don't just ship code; we deliver business transformation.
            </p>
          </div>

          <div className="interactive-card p-12 space-y-8 text-left bg-white shadow-xl">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <ShieldCheck className="h-7 w-7" />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground font-heading">Why some details are anonymized</h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                Client names and select metrics are anonymized to honor NDA obligations while sharing the core challenges,
                architecture decisions, and measurable outcomes. This transparency builds trust while respecting confidentiality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid Section */}
      <section className="container animate-softFade py-20 px-4">
        <div className="space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-extrabold md:text-6xl text-secondary">
              Proven Track Record
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground leading-relaxed">
              Filter by industry, technology, or region to discover projects that align with your needs.
            </p>
          </div>

          <PortfolioGrid />
        </div>
      </section>

      {/* CTA Section */}
      <section className="container animate-softFade pb-32">
        <div className="relative overflow-hidden rounded-[3rem] bg-primary px-8 py-24 text-center text-white shadow-2xl shadow-primary/20">
          <div className="relative z-10 space-y-10 max-w-3xl mx-auto">
            <div className="space-y-4">
              <p className="text-xs font-black uppercase tracking-[0.4em] text-white/50">Next Project</p>
              <h2 className="text-4xl font-extrabold md:text-7xl">
                Let's build your success story
              </h2>
            </div>
            <p className="text-xl text-white/80 leading-relaxed mx-auto max-w-2xl">
              Whether you're scaling an existing platform or launching a new digital initiative, our team brings proven expertise
              and measurable results to every engagement.
            </p>
            <div className="flex flex-wrap justify-center gap-6 pt-4">
              <Button asChild size="lg" className="h-16 rounded-full bg-white text-primary px-12 text-lg font-bold group shadow-2xl hover:bg-white/95 border-none">
                <Link href="/contact" className="flex items-center gap-2">
                  Start a Conversation <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-16 rounded-full border-white/30 text-white px-12 text-lg font-bold hover:bg-white/10 hover:text-white">
                <Link href="/solutions">Explore Solutions</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
