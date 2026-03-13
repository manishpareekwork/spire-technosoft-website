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

      <div className="grid gap-8 md:grid-cols-2">
        {filteredArticles.map((article, index) => (
          <Link
            key={article.slug}
            href={`/insights/${article.slug}`}
            className={cn("group block space-y-4 border-t border-border/55 pt-5", index % 2 === 1 && "md:translate-y-10")}
          >
            <div className="relative aspect-[16/11] max-w-[340px] overflow-hidden rounded-[1.5rem] bg-surface-2">
              <Image
                src={article.image}
                alt={article.imageAlt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                sizes="(min-width: 768px) 24vw, 100vw"
              />
            </div>

            <div className="space-y-3">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-primary">
                {article.category}
              </p>
              <div className="space-y-2">
                <h2 className="text-xl font-semibold text-foreground">{article.title}</h2>
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
          </Link>
        ))}
      </div>
    </div>
  );
}
