import Link from "next/link";
import { ArrowRight, Sparkles, ShieldCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/section-header";
import { Badge } from "@/components/ui/badge";
import { PortfolioGrid } from "@/components/portfolio/portfolio-grid";
import { siteContent } from "@/content/site";

export const metadata = {
  title: "Portfolio | Spire Technosoft",
  description: "Projects that combine design, data, and domain expertise across healthcare, finance, and industrial sectors.",
  openGraph: {
    title: "Portfolio | Spire Technosoft",
    description: "Projects that combine design, data, and domain expertise across healthcare, finance, and industrial sectors.",
    images: [{ url: siteContent.seo.defaultOg }],
  },
};

export default function PortfolioPage(): React.ReactElement {
  const { portfolio } = siteContent;

  return (
    <div className="flex flex-1 flex-col bg-background">
      {/* Hero */}
      <section className="container animate-softFade py-20">
        <div className="section-shell w-full space-y-10 py-10 text-center">
          <div className="relative z-10 space-y-6">
            <Badge variant="soft">
              <Sparkles className="h-4 w-4 icon-accent" />
              {portfolio.hero.eyebrow}
            </Badge>
            <h1 className="display-hero text-foreground">{portfolio.hero.title}</h1>
            <p className="mx-auto max-w-3xl body-lg text-muted-foreground">{portfolio.hero.description}</p>
          </div>
        </div>
      </section>

      {/* NDA Note */}
      <section className="container py-8">
        <div className="grid gap-6 lg:grid-cols-[0.7fr,1.3fr] items-center rounded-[2.5rem] bg-surface p-8 shadow-soft">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
              <ShieldCheck className="h-6 w-6 icon-accent" />
            </div>
            <h2 className="text-xl font-semibold text-foreground">Why some details are anonymized</h2>
          </div>
          <p className="text-sm text-muted-foreground">{portfolio.anonymization}</p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="container animate-softFade py-20">
        <div className="space-y-10">
          <SectionHeader title={portfolio.intro.title} description={portfolio.intro.description} />
          <PortfolioGrid />
        </div>
      </section>

      {/* CTA */}
      <section className="container pb-32">
        <div className="cta-band rounded-[3rem] px-8 py-24 text-center shadow-float">
          <div className="cta-inner space-y-8 max-w-3xl mx-auto">
            <div className="space-y-4">
              <p className="eyebrow text-white/60">{portfolio.cta.eyebrow}</p>
              <h2 className="display-1 text-white">{portfolio.cta.title}</h2>
            </div>
            <p className="body-lg text-white/80">{portfolio.cta.description}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="xl" className="bg-white text-primary hover:bg-white/95">
                <Link href={portfolio.cta.primaryCta.href} className="flex items-center gap-2">
                  {portfolio.cta.primaryCta.label} <ArrowRight className="h-5 w-5 icon-accent" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="xl" className="border-white/40 text-white hover:bg-white/10">
                <Link href={portfolio.cta.secondaryCta.href}>{portfolio.cta.secondaryCta.label}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
