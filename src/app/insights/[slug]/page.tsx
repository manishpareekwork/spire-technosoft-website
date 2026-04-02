import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CalendarDays, Clock3 } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button-variants";
import { getInsightArticle, insightArticles } from "@/data/insights";
import { absoluteUrl, siteName } from "@/lib/seo";
import { cn } from "@/lib/utils";

type InsightPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return insightArticles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: InsightPageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getInsightArticle(slug);

  if (!article) {
    return {
      title: `Insight Not Found | ${siteName}`,
    };
  }

  return {
    title: `${article.title} | ${siteName}`,
    description: article.description,
    keywords: article.keywords,
    alternates: {
      canonical: `/insights/${article.slug}`,
    },
    openGraph: {
      title: `${article.title} | ${siteName}`,
      description: article.description,
      type: "article",
      publishedTime: article.publishedAt,
      images: [{ url: article.image }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${article.title} | ${siteName}`,
      description: article.description,
      images: [article.image],
    },
  };
}

const formatDate = (value: string) =>
  new Intl.DateTimeFormat("en-US", { month: "long", day: "numeric", year: "numeric" }).format(
    new Date(value)
  );

export default async function InsightArticlePage({ params }: InsightPageProps) {
  const { slug } = await params;
  const article = getInsightArticle(slug);

  if (!article) {
    notFound();
  }

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    image: absoluteUrl(article.image),
    datePublished: article.publishedAt,
    dateModified: article.publishedAt,
    author: {
      "@type": "Organization",
      name: siteName,
    },
    publisher: {
      "@type": "Organization",
      name: siteName,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/images/logo/1080x1080.png"),
      },
    },
    mainEntityOfPage: absoluteUrl(`/insights/${article.slug}`),
    keywords: article.keywords.join(", "),
  };

  return (
    <div className="flex flex-1 flex-col">
      <article className="pb-24 pt-10 sm:pt-14">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
        />

        <div className="container space-y-10">
          <div className="space-y-6">
            <Badge variant="soft" className="w-fit">
              {article.category}
            </Badge>
            <div className="max-w-4xl space-y-5">
              <h1 className="display-1 text-foreground">{article.title}</h1>
              <p className="body-lg text-muted-foreground">{article.description}</p>
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

          <div className="grid gap-6 border-y border-border/55 py-8 lg:grid-cols-[1fr,240px] lg:items-start">
            <div className="space-y-3">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-primary">
                Article overview
              </p>
              <p className="body-md text-muted-foreground">
                A concise point of view on the workflow issue behind the topic, written to help teams
                make a better product decision before they commit to the wrong build.
              </p>
            </div>

            <div className="relative aspect-[5/4] overflow-hidden rounded-[1.4rem] bg-surface-2 shadow-soft">
              <Image
                src={article.image}
                alt={article.imageAlt}
                fill
                className="object-cover object-center"
                sizes="240px"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/18 via-transparent to-transparent" />
            </div>
          </div>

          <div className="grid gap-10 lg:grid-cols-[0.7fr,1.3fr] lg:items-start">
            <aside className="glass-effect rounded-[2rem] p-6 sm:p-8 lg:sticky lg:top-28">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-primary">
                Related links
              </p>
              <div className="mt-5 flex flex-col gap-3">
                {article.relatedLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="rounded-[1.25rem] bg-white/55 px-4 py-4 text-sm font-medium text-foreground transition-colors hover:bg-white/80 dark:bg-surface-2/75"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </aside>

            <div className="space-y-10">
              {article.sections.map((section) => (
                <section key={section.heading} className="space-y-4">
                  <h2 className="heading-3 text-foreground">{section.heading}</h2>
                  <div className="space-y-4">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph} className="body-md text-muted-foreground">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </section>
              ))}

              <div className="cta-band rounded-[2.25rem] px-8 py-10 sm:px-10">
                <div className="cta-inner space-y-5">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-white/70">
                    Next step
                  </p>
                  <h2 className="heading-2 text-white">
                    Want this translated into a roadmap for your team?
                  </h2>
                  <p className="body-md max-w-2xl text-white/75">
                    We can turn these ideas into a scoped first release with the right workflow,
                    data model, controls, and operating cadence.
                  </p>
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <Link
                      href="/contact"
                      className={cn(
                        buttonVariants({ size: "lg" }),
                        "bg-white text-slate-900 hover:bg-white/92"
                      )}
                    >
                      Book Free Consultation
                    </Link>
                    <Link
                      href="/portfolio"
                      className={cn(
                        buttonVariants({ variant: "outline", size: "lg" }),
                        "border-white/25 bg-white/8 text-white hover:bg-white/14 hover:text-white"
                      )}
                    >
                      Explore Case Studies
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
