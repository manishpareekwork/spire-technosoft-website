"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { portfolioProjects } from "@/data/portfolio";
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
      {/* Filter Panel */}
      <div className="interactive-card surface-panel flex flex-col gap-4 rounded-2xl border border-primary/10 bg-white/95 p-6 dark:bg-white/5 md:flex-row md:items-end md:justify-between">
        <div className="grid flex-1 gap-4 md:grid-cols-3">
          {(Object.keys(filterLabels) as FilterKey[]).map((key) => (
            <label key={key} className="text-sm font-medium text-muted-foreground">
              {filterLabels[key]}
              <select
                className="mt-2 w-full rounded-xl border border-primary/15 bg-white px-4 py-2.5 text-sm font-normal text-foreground shadow-sm transition-all duration-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 dark:bg-transparent"
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
          className="rounded-full border-2 border-primary/20 bg-primary/5 px-6 py-2.5 text-sm font-semibold text-primary transition-all duration-300 hover:border-primary/40 hover:bg-primary/10"
          onClick={clearFilters}
        >
          Reset filters
        </button>
      </div>

      {/* Results Count */}
      <p className="text-sm text-muted-foreground">
        Showing{" "}
        <span className="font-semibold text-primary">
          {filteredProjects.length} case{filteredProjects.length === 1 ? "" : "s"}
        </span>{" "}
        that match your filter criteria.
      </p>

      {/* Portfolio Grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {filteredProjects.map((project, index) => (
          <Card 
            key={project.slug} 
            className="group flex flex-col overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.08)] interactive-card hover:shadow-[0_25px_50px_rgba(0,0,0,0.12)] transition-shadow duration-300"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Vibrant gradient header instead of image for instant loading */}
            <div className="relative h-56 w-full overflow-hidden bg-gradient-to-br from-primary via-secondary to-accent">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_rgba(255,255,255,0.25),_transparent_50%),_radial-gradient(circle_at_70%_80%,_rgba(0,0,0,0.15),_transparent_60%)]" />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-white">
                <div className="inline-block rounded-full bg-white/20 px-4 py-2 backdrop-blur-sm mb-3">
                  <p className="text-xs font-bold uppercase tracking-wider">{project.industry}</p>
                </div>
                <p className="text-2xl font-bold mb-2">{project.title}</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {project.metrics.slice(0, 2).map((metric) => (
                    <span key={`${project.slug}-${metric.label}-hero`} className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold backdrop-blur-sm">
                      {metric.value} {metric.label}
                    </span>
                  ))}
                </div>
              </div>
              {/* Animated orb */}
              <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-white/20 blur-3xl pulse-glow" />
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
                  <span key={`${project.slug}-${metric.label}-badge`} className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary">
                    {metric.value} {metric.label}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex flex-col gap-3 pt-2">
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
                    className="flex-1 inline-flex items-center justify-center rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:bg-secondary hover:shadow-xl hover:shadow-primary/30"
                  >
                    View Case Study
                  </Link>
                  <a
                    href={project.caseStudyPdf}
                    download
                    className="inline-flex items-center rounded-full border-2 border-primary/20 bg-primary/5 px-4 py-2.5 text-xs font-semibold text-primary transition-all duration-300 hover:border-primary/40 hover:bg-primary/10"
                  >
                    PDF
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <p className="rounded-2xl border border-dashed border-primary/20 bg-white/60 p-8 text-center text-sm text-muted-foreground dark:bg-white/5">
          No case studies match those filters yet. Reset filters to explore the full library.
        </p>
      )}
    </div>
  );
}
