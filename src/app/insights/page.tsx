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

        <div className="container space-y-10">
          <div className="max-w-4xl space-y-5">
            <Badge variant="soft" className="w-fit">
              Resources & Insights
            </Badge>
            <h1 className="display-1 text-foreground">
              A more editorial feed for AI, compliance, and operational platform thinking
            </h1>
            <p className="body-lg text-muted-foreground">
              Instead of oversized cards, this page now works like a compact insight hub: featured
              story at the top, filterable article rows below, and clear paths into deeper
              conversations.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.06fr,0.94fr]">
            <Link
              href={`/insights/${featuredArticle.slug}`}
              className="group overflow-hidden rounded-[2.4rem] section-contrast p-4 sm:p-5"
            >
              <div className="relative min-h-[340px] overflow-hidden rounded-[1.9rem] bg-surface-2">
                <Image
                  src={featuredArticle.image}
                  alt={featuredArticle.imageAlt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  sizes="(min-width: 1024px) 54vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/55 via-slate-900/10 to-transparent" />
                <div className="absolute left-5 top-5">
                  <Badge variant="soft">{featuredArticle.category}</Badge>
                </div>
              </div>

              <div className="space-y-4 p-2 pt-6">
                <h2 className="heading-2 text-foreground">{featuredArticle.title}</h2>
                <p className="body-md max-w-2xl text-muted-foreground">{featuredArticle.description}</p>
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <span className="inline-flex items-center gap-2">
                    <CalendarDays className="h-4 w-4 icon-accent" />
                    {formatDate(featuredArticle.publishedAt)}
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <Clock3 className="h-4 w-4 icon-accent" />
                    {featuredArticle.readTime}
                  </span>
                </div>
              </div>
            </Link>

            <div className="space-y-4">
              <div className="rounded-[2rem] section-contrast px-6 py-6">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-primary">
                  Why this matters
                </p>
                <div className="mt-4 space-y-3">
                  {[
                    "Build search visibility around long-tail buying questions.",
                    "Support solution pages with educational, indexable content.",
                    "Give prospects something useful before the first call.",
                  ].map((item) => (
                    <div key={item} className="compact-tile rounded-[1.4rem] px-4 py-4">
                      <p className="text-sm text-muted-foreground">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[2rem] cta-band px-6 py-7">
                <div className="cta-inner space-y-5">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-white/64">
                    Need a tailored point of view?
                  </p>
                  <h2 className="heading-2 text-white">
                    Book a working session around your roadmap, controls, and delivery risks.
                  </h2>
                  <p className="text-sm text-white/74">
                    We can map the first release, the right architecture, and the operational
                    metrics worth tracking before build starts.
                  </p>
                  <Link
                    href="/contact"
                    className={cn(
                      buttonVariants({ size: "lg" }),
                      "w-full bg-white text-slate-900 hover:bg-white/92"
                    )}
                  >
                    Book Free Consultation
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container pb-28 pt-6">
        <InsightFeed articles={insightArticles} />
      </section>
    </div>
  );
}
