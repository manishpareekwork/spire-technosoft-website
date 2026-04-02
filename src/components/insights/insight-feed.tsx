"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowRight, CalendarDays, Clock3 } from "lucide-react";

import type { InsightArticle } from "@/data/insights";
import { cn } from "@/lib/utils";

type InsightFeedProps = {
  articles: InsightArticle[];
};

const formatDate = (value: string) =>
  new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", year: "numeric" }).format(
    new Date(value)
  );

export function InsightFeed({ articles }: InsightFeedProps) {
  const [category, setCategory] = useState("All");

  const categories = useMemo(
    () => ["All", ...new Set(articles.map((article) => article.category))],
    [articles]
  );

  const filteredArticles = useMemo(() => {
    if (category === "All") {
      return articles;
    }

    return articles.filter((article) => article.category === category);
  }, [articles, category]);

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-2">
        {categories.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setCategory(item)}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-medium transition-all",
              item === category
                ? "bg-primary text-primary-foreground shadow-soft"
                : "bg-white/55 text-muted-foreground shadow-sm backdrop-blur hover:text-foreground dark:bg-surface/70"
            )}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {filteredArticles.map((article) => (
          <Link
            key={article.slug}
            href={`/insights/${article.slug}`}
            className="compact-tile group block rounded-[1.7rem] px-4 py-4 shadow-soft"
          >
            <div className="grid gap-4 sm:grid-cols-[76px,1fr] sm:items-start">
              <div className="relative aspect-square overflow-hidden rounded-[0.95rem] bg-surface-2">
                <Image
                  src={article.image}
                  alt={article.imageAlt}
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
                  sizes="76px"
                />
              </div>

              <div className="space-y-3">
                <div className="flex flex-wrap items-center gap-3 text-[0.68rem] font-semibold uppercase tracking-[0.16em]">
                  <span className="text-primary">{article.category}</span>
                  <span className="text-muted-foreground">{article.readTime}</span>
                </div>
                <div className="space-y-2">
                  <h2 className="text-lg font-semibold text-foreground">{article.title}</h2>
                  <p className="text-sm text-muted-foreground">{article.description}</p>
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
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-foreground">
                  Read article
                  <ArrowRight className="h-4 w-4 icon-accent transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
