import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, Clock3 } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button-variants";
import { cn } from "@/lib/utils";
import { insightArticles } from "@/data/insights";
import { siteContent } from "@/content/site";
import { siteKeywords } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Insights on AI, Compliance, Healthcare, and Utility Platforms | Spire Technosoft",
  description:
    "Practical articles on AI compliance systems, healthcare platform design, predictive maintenance dashboards, and digital product delivery for regulated industries.",
  keywords: [
    ...siteKeywords,
    "AI compliance blog",
    "healthcare platform insights",
    "predictive maintenance articles",
  ],
  alternates: {
    canonical: "/insights",
  },
  openGraph: {
    title: "Insights on AI, Compliance, Healthcare, and Utility Platforms | Spire Technosoft",
    description:
      "Practical articles on AI compliance systems, healthcare platform design, predictive maintenance dashboards, and digital product delivery for regulated industries.",
    images: [{ url: siteContent.seo.defaultOg }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Insights on AI, Compliance, Healthcare, and Utility Platforms | Spire Technosoft",
    description:
      "Practical articles on AI compliance systems, healthcare platform design, predictive maintenance dashboards, and digital product delivery for regulated industries.",
    images: [siteContent.seo.defaultOg],
  },
};

const formatDate = (value: string) =>
  new Intl.DateTimeFormat("en-US", { month: "long", day: "numeric", year: "numeric" }).format(
    new Date(value)
  );

export default function InsightsPage() {
  return (
    <div className="flex flex-1 flex-col">
      <section className="relative overflow-hidden pb-14 pt-12 sm:pt-16">
        <div className="absolute inset-0 -z-10 hero-mesh opacity-80" />
        <div className="absolute inset-0 -z-10 hero-lines opacity-20" />

        <div className="container space-y-10">
          <div className="max-w-4xl space-y-5">
            <Badge variant="soft" className="w-fit">
              Insights
            </Badge>
            <h1 className="display-1 text-foreground">
              Practical thinking for teams building in regulated environments
            </h1>
            <p className="body-lg text-muted-foreground">
              Articles focused on the questions buyers actually search for: AI compliance,
              healthcare platform design, utility dashboards, privacy, and delivery decisions.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.08fr,0.92fr]">
            <Link
              href={`/insights/${insightArticles[0].slug}`}
              className="group overflow-hidden rounded-[2.25rem] surface-card p-4 sm:p-5"
            >
              <div className="relative min-h-[320px] overflow-hidden rounded-[1.75rem] bg-surface-2">
                <Image
                  src={insightArticles[0].image}
                  alt={insightArticles[0].imageAlt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  sizes="(min-width: 1024px) 54vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/55 via-slate-900/10 to-transparent" />
                <div className="absolute left-5 top-5">
                  <Badge variant="soft">{insightArticles[0].category}</Badge>
                </div>
              </div>

              <div className="space-y-4 p-3 pt-6">
                <h1 className="heading-2 text-foreground">{insightArticles[0].title}</h1>
                <p className="body-md max-w-2xl text-muted-foreground">
                  {insightArticles[0].description}
                </p>
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <span className="inline-flex items-center gap-2">
                    <CalendarDays className="h-4 w-4 icon-accent" />
                    {formatDate(insightArticles[0].publishedAt)}
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <Clock3 className="h-4 w-4 icon-accent" />
                    {insightArticles[0].readTime}
                  </span>
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-foreground">
                  Read article
                  <ArrowRight className="h-4 w-4 icon-accent transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>

            <div className="grid gap-6">
              {insightArticles.slice(1).map((article) => (
                <Link
                  key={article.slug}
                  href={`/insights/${article.slug}`}
                  className="group interactive-card rounded-[2rem] p-6"
                >
                  <div className="space-y-4">
                    <Badge variant="outline" className="w-fit">
                      {article.category}
                    </Badge>
                    <div className="space-y-3">
                      <h2 className="text-2xl font-semibold text-foreground">{article.title}</h2>
                      <p className="text-sm text-muted-foreground">{article.excerpt}</p>
                    </div>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <span className="inline-flex items-center gap-2">
                        <CalendarDays className="h-4 w-4 icon-accent" />
                        {formatDate(article.publishedAt)}
                      </span>
                      <span className="inline-flex items-center gap-2">
                        <Clock3 className="h-4 w-4 icon-accent" />
                        {article.readTime}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}

              <div className="glass-effect rounded-[2rem] p-6 sm:p-8">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-primary">
                  Need a tailored point of view?
                </p>
                <h2 className="mt-3 text-2xl font-semibold text-foreground">
                  Book a working session around your roadmap, controls, and delivery risks.
                </h2>
                <p className="mt-3 text-sm text-muted-foreground">
                  We can map the first release, the right architecture, and the operational metrics
                  worth tracking before build starts.
                </p>
                <div className="mt-6">
                  <Link href="/contact" className={cn(buttonVariants({ size: "lg" }))}>
                    Book Free Consultation
                    <ArrowRight className="h-4 w-4 icon-inverse" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
