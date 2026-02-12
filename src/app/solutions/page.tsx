import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SectionHeader } from "@/components/ui/section-header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SocialProofBand } from "@/components/sections/social-proof";
import { ResourceDownloads } from "@/components/sections/resource-downloads";
import { siteContent } from "@/content/site";
import { solutionDetails } from "@/data/solutions";

export const metadata = {
  title: "Solutions | Spire Technosoft",
  description:
    "Modular platforms built for regulated environments. Explore our expertise in audit, healthcare, supply chain, and industrial IoT.",
  openGraph: {
    title: "Solutions | Spire Technosoft",
    description:
      "Modular platforms built for regulated environments. Explore our expertise in audit, healthcare, supply chain, and industrial IoT.",
    images: [{ url: siteContent.seo.defaultOg }],
  },
};

export default function SolutionsPage(): React.ReactElement {
  const { solutions } = siteContent;

  return (
    <div className="flex flex-1 flex-col bg-background">
      {/* Hero */}
      <section className="container animate-softFade py-20">
        <div className="section-shell w-full space-y-10 py-10 text-center">
          <div className="relative z-10 space-y-6">
            <Badge variant="soft">{solutions.hero.eyebrow}</Badge>
            <h1 className="display-hero text-foreground">{solutions.hero.title}</h1>
            <p className="mx-auto max-w-3xl body-lg text-muted-foreground">{solutions.hero.description}</p>
            <div className="flex flex-wrap justify-center gap-3 pt-4">
              {siteContent.differentiators.map((item) => (
                <Badge key={item.title} variant="outline" className="normal-case tracking-normal">
                  {item.title}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="container py-16">
        <div className="space-y-10">
          <SectionHeader
            eyebrow="Delivery Pillars"
            title="Platform strategy that compounds"
            description="Each pillar is designed to accelerate outcomes without compromising compliance." 
          />
          <Tabs defaultValue={solutions.pillars[0].key}>
            <TabsList className="justify-center">
              {solutions.pillars.map((pillar) => (
                <TabsTrigger key={pillar.key} value={pillar.key}>
                  {pillar.label}
                </TabsTrigger>
              ))}
            </TabsList>
            {solutions.pillars.map((pillar) => (
              <TabsContent key={pillar.key} value={pillar.key}>
                <div className="grid gap-8 lg:grid-cols-[1.1fr,0.9fr]">
                  <div className="surface-card rounded-3xl p-8 shadow-soft text-left">
                    <h3 className="heading-3 text-foreground">{pillar.title}</h3>
                    <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                      {pillar.outcomes.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="surface-card rounded-3xl p-8 shadow-soft">
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">How it works</p>
                    <div className="mt-6 flex items-center justify-between gap-3">
                      {pillar.steps.map((step, index) => (
                        <div key={step} className="flex flex-1 flex-col items-center gap-3">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary font-semibold">
                            0{index + 1}
                          </div>
                          <p className="text-xs text-muted-foreground text-center">{step}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Solution Portfolios */}
      <section className="container py-20">
        <div className="space-y-14">
          <SectionHeader
            eyebrow="Portfolios"
            title={solutions.portfoliosIntro.title}
            description={solutions.portfoliosIntro.description}
          />
          <div className="grid gap-8 lg:grid-cols-2">
            {solutionDetails.map((solution) => (
              <div key={solution.slug} className="surface-card rounded-3xl p-8 shadow-soft">
                <div className="grid gap-6 sm:grid-cols-[1fr,1.1fr] items-center">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                    <Image
                      src={solution.image}
                      alt={solution.title}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 35vw, 100vw"
                      unoptimized={solution.image.startsWith("http")}
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-transparent" />
                  </div>
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {solution.tags.map((tag) => (
                        <Badge key={tag} variant="soft">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <h3 className="heading-3 text-foreground">{solution.title}</h3>
                    <p className="text-sm font-semibold text-muted-foreground">{solution.summary}</p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {solution.successMetrics.map((metric) => (
                    <span
                      key={metric}
                      className="rounded-full bg-surface-2 px-3 py-1 text-xs font-semibold text-foreground"
                    >
                      {metric}
                    </span>
                  ))}
                </div>

                <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
                  {solution.outcomes.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Button asChild size="lg">
                    <Link href={`/solutions/${solution.slug}`} className="flex items-center gap-2">
                      Explore portfolio <ArrowRight className="h-4 w-4 icon-inverse" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="/contact">Book discovery</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-12">
        <SocialProofBand
          title="Enterprise credibility"
          description="Repeatable results across audit, healthcare, supply chain, and industrial programs."
          variant="compact"
        />
      </section>

      <section className="container py-20 pb-32">
        <ResourceDownloads title={solutions.assets.title} description={solutions.assets.description} />
      </section>
    </div>
  );
}
