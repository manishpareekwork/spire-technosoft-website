import Link from "next/link";
import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PortfolioGrid } from "@/components/portfolio/portfolio-grid";
import { siteContent } from "@/content/site";

export const metadata = {
  title: "Portfolio | Spire Technosoft",
  description:
    "Selected work from Spire Technosoft across custom software, mobile products, dashboards, and internal tools.",
  openGraph: {
    title: "Portfolio | Spire Technosoft",
    description:
      "Selected work from Spire Technosoft across custom software, mobile products, dashboards, and internal tools.",
    images: [{ url: siteContent.seo.defaultOg }],
  },
};

export default function PortfolioPage(): React.ReactElement {
  const { portfolio } = siteContent;

  return (
    <div className="flex flex-1 flex-col bg-background">
      <section className="container animate-softFade py-16 sm:py-20">
        <div className="max-w-4xl space-y-6">
          <Badge variant="soft" className="w-fit">
            <Sparkles className="h-4 w-4 icon-accent" />
            {portfolio.hero.eyebrow}
          </Badge>
          <h1 className="display-1 text-foreground">{portfolio.hero.title}</h1>
          <p className="max-w-3xl body-lg text-muted-foreground">{portfolio.hero.description}</p>
        </div>
      </section>

      <section className="container py-4">
        <div className="grid gap-6 border-y border-border/55 py-6 lg:grid-cols-[0.3fr,0.7fr] lg:items-center">
          <div className="flex items-center gap-4">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10">
              <ShieldCheck className="h-4 w-4 icon-accent" />
            </span>
            <h2 className="text-xl font-semibold text-foreground">NDA-safe presentation</h2>
          </div>
          <p className="text-sm text-muted-foreground">{portfolio.anonymization}</p>
        </div>
      </section>

      <section className="container py-16">
        <div className="grid gap-10 lg:grid-cols-[0.28fr,0.72fr] lg:items-start">
          <div className="space-y-4">
            <p className="eyebrow">Browse the work</p>
            <h2 className="heading-2 text-foreground">{portfolio.intro.title}</h2>
            <p className="body-md text-muted-foreground">{portfolio.intro.description}</p>
          </div>
          <PortfolioGrid />
        </div>
      </section>

      <section className="container pb-28 pt-8">
        <div className="cta-band rounded-[2.7rem] px-8 py-16 text-center shadow-float">
          <div className="cta-inner mx-auto max-w-3xl space-y-8">
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
