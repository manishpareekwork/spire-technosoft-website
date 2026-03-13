import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, Clock3 } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button-variants";
import { InsightFeed } from "@/components/insights/insight-feed";
import { insightArticles } from "@/data/insights";
import { siteContent } from "@/content/site";
import { siteKeywords } from "@/lib/seo";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Insights on Software, AI, Healthcare, and Operations | Spire Technosoft",
  description:
    "Practical articles on software design, AI workflows, healthcare platforms, predictive maintenance dashboards, and modern product delivery.",
  keywords: [
    ...siteKeywords,
    "AI software blog",
    "healthcare platform insights",
    "predictive maintenance articles",
  ],
  alternates: {
    canonical: "/insights",
  },
  openGraph: {
    title: "Insights on Software, AI, Healthcare, and Operations | Spire Technosoft",
    description:
      "Practical articles on software design, AI workflows, healthcare platforms, predictive maintenance dashboards, and modern product delivery.",
    images: [{ url: siteContent.seo.defaultOg }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Insights on Software, AI, Healthcare, and Operations | Spire Technosoft",
    description:
      "Practical articles on software design, AI workflows, healthcare platforms, predictive maintenance dashboards, and modern product delivery.",
    images: [siteContent.seo.defaultOg],
  },
};

const featuredArticle = insightArticles[0];

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

        <div className="container grid gap-10 lg:grid-cols-[0.62fr,0.38fr] lg:items-start">
          <div className="max-w-[39rem] space-y-5">
            <Badge variant="soft" className="w-fit">
              Resources & Insights
            </Badge>
            <h1 className="display-1 max-w-[14ch] text-foreground">Writing that supports better product decisions</h1>
            <p className="max-w-3xl body-lg text-muted-foreground">
              Notes, articles, and practical thinking for teams planning new software, improving
              operations, or figuring out where AI fits without the noise.
            </p>
          </div>

          <div className="space-y-4 rounded-[2rem] border border-border/45 bg-white/70 px-6 py-6 shadow-soft backdrop-blur dark:bg-surface/76">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-primary">
              What you will find here
            </p>
            <div className="space-y-4">
              {[
                "Long-tail answers to questions buyers actually search for",
                "Operational perspectives from product, design, and engineering work",
                "Pieces that help a team make sense of the next release or roadmap move",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 border-t border-border/45 pt-4 first:border-t-0 first:pt-0">
                  <ArrowRight className="mt-0.5 h-4 w-4 icon-accent" />
                  <p className="text-sm text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container py-14">
        <div className="grid gap-8 border-y border-border/55 py-8 lg:grid-cols-[168px,1fr] lg:items-start">
          <Link
            href={`/insights/${featuredArticle.slug}`}
            className="group relative aspect-[5/4] overflow-hidden rounded-[1.2rem] bg-surface-2"
          >
            <Image
              src={featuredArticle.image}
              alt={featuredArticle.imageAlt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              sizes="168px"
            />
          </Link>

          <div className="space-y-5">
            <div className="flex flex-wrap items-center gap-3">
              <Badge variant="soft">{featuredArticle.category}</Badge>
              <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                <CalendarDays className="h-4 w-4 icon-accent" />
                {formatDate(featuredArticle.publishedAt)}
              </span>
              <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                <Clock3 className="h-4 w-4 icon-accent" />
                {featuredArticle.readTime}
              </span>
            </div>
            <div className="space-y-3">
              <h2 className="heading-2 text-foreground">{featuredArticle.title}</h2>
              <p className="body-md text-muted-foreground">{featuredArticle.description}</p>
            </div>
            <Link href={`/insights/${featuredArticle.slug}`} className="inline-flex items-center gap-2 text-sm font-semibold text-foreground">
              Read featured article
              <ArrowRight className="h-4 w-4 icon-accent" />
            </Link>
          </div>
        </div>
      </section>

      <section className="container py-6">
        <InsightFeed articles={insightArticles} />
      </section>

      <section className="container pb-28 pt-12">
        <div className="grid gap-8 border-t border-border/55 pt-8 lg:grid-cols-[0.62fr,0.38fr] lg:items-start">
          <div className="space-y-4">
            <p className="eyebrow">Need a point of view?</p>
            <h2 className="heading-2 text-foreground">Bring the roadmap question behind the search term</h2>
            <p className="body-md text-muted-foreground">
              If a topic here connects to a real product decision you are making, we can turn it
              into a working conversation.
            </p>
          </div>

          <Link href="/contact" className={cn(buttonVariants({ size: "xl" }), "w-fit")}>
            Book Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
