"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { portfolioProjects } from "@/data/portfolio";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

type FilterKey = "domain" | "platform" | "region";

const filterLabels: Record<FilterKey, string> = {
  domain: "Domain",
  platform: "Platform",
  region: "Region",
};

export function PortfolioGrid(): React.ReactElement {
  const [filters, setFilters] = useState<Record<FilterKey, string>>({
    domain: "All",
    platform: "All",
    region: "All",
  });

  const filterOptions = useMemo(() => {
    return {
      domain: ["All", ...new Set(portfolioProjects.map((project) => project.domain))],
      platform: ["All", ...new Set(portfolioProjects.map((project) => project.platform))],
      region: ["All", ...new Set(portfolioProjects.map((project) => project.region))],
    };
  }, []);

  const filteredProjects = portfolioProjects.filter((project) =>
    (Object.keys(filters) as FilterKey[]).every((key) => {
      if (filters[key] === "All") return true;
      return project[key] === filters[key];
    }),
  );

  const updateFilter = (key: FilterKey, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const clearFilters = () => {
    setFilters({ domain: "All", platform: "All", region: "All" });
  };

  return (
    <div className="space-y-6">
      <div className="interactive-card surface-panel flex flex-col gap-4 p-4 dark:bg-white/5 md:flex-row md:items-end md:justify-between">
        <div className="grid flex-1 gap-4 md:grid-cols-3">
          {(Object.keys(filterLabels) as FilterKey[]).map((key) => (
            <label key={key} className="text-sm font-medium text-muted-foreground">
              {filterLabels[key]}
              <select
                className="mt-1 w-full rounded-xl border border-primary/15 bg-white px-4 py-2 text-sm font-normal text-foreground shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 dark:bg-transparent"
                value={filters[key]}
                onChange={(event) => updateFilter(key, event.target.value)}
              >
                {filterOptions[key].map((option) => (
                  <option key={option} value={option}>
                    {option === "All" ? `All ${filterLabels[key]}s` : option}
                  </option>
                ))}
              </select>
            </label>
          ))}
        </div>
        <button
          type="button"
          className="rounded-full border border-primary/20 px-4 py-2 text-sm font-semibold text-primary transition hover:bg-primary/5"
          onClick={clearFilters}
        >
          Reset filters
        </button>
      </div>
      <p className="text-sm text-muted-foreground">
        Showing{" "}
        <span className="font-semibold text-primary">
          {filteredProjects.length} case{filteredProjects.length === 1 ? "" : "s"}
        </span>{" "}
        that match your filter criteria.
      </p>
      <div className="grid gap-6 md:grid-cols-2">
        {filteredProjects.map((project) => (
          <Card key={project.slug} className="flex flex-col overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.08)]">
            <div className="relative h-56 w-full overflow-hidden">
              <Image
                src={project.image}
                alt={project.imageAlt}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
                priority={false}
                unoptimized={project.image.startsWith("http")}
              />
            </div>
            <CardContent className="flex flex-1 flex-col gap-4 p-6">
              <div className="space-y-1">
                <p className="text-xs uppercase tracking-wide text-muted-foreground">{project.industry}</p>
                <h3 className="text-2xl font-semibold">{project.title}</h3>
                <p className="text-sm text-muted-foreground">{project.headline}</p>
              </div>
              <div className="flex flex-wrap gap-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                <span>{project.domain}</span>
                <span className="text-primary">•</span>
                <span>{project.platform}</span>
                <span className="text-primary">•</span>
                <span>{project.region}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.metrics.map((metric) => (
                  <Badge key={`${project.slug}-${metric.label}`} variant="outline" className="rounded-full border-primary/20 text-primary">
                    {metric.value} {metric.label}
                  </Badge>
                ))}
              </div>
              <div className="mt-auto flex items-center justify-between pt-2">
                <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="rounded-full bg-primary/5 px-3 py-1 font-medium text-primary">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-2">
                  <Link
                    href={`/portfolio/${project.slug}`}
                    className="inline-flex items-center rounded-full border border-primary/20 px-4 py-2 text-sm font-semibold text-primary"
                  >
                    View case
                  </Link>
                  <a
                    href={project.caseStudyPdf}
                    download
                    className="inline-flex items-center rounded-full border border-primary/20 px-4 py-2 text-xs font-semibold text-primary"
                  >
                    PDF
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      {filteredProjects.length === 0 && (
        <p className="rounded-2xl border border-dashed border-primary/20 bg-white/60 p-6 text-center text-sm text-muted-foreground dark:bg-white/5">
          No case studies match those filters yet. Reset filters to explore the full library.
        </p>
      )}
    </div>
  );
}
