"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { portfolioProjects } from "@/data/portfolio";
import { ArrowRight, Download, Filter, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

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
  const [search, setSearch] = useState("");

  const filterOptions = useMemo(() => {
    return {
      domain: ["All", ...new Set(portfolioProjects.map((project) => project.domain))],
      platform: ["All", ...new Set(portfolioProjects.map((project) => project.platform))],
      region: ["All", ...new Set(portfolioProjects.map((project) => project.region))],
    };
  }, []);

  const filteredProjects = portfolioProjects.filter((project) => {
    const matchesFilters = (Object.keys(filters) as FilterKey[]).every((key) => {
      if (filters[key] === "All") return true;
      return project[key] === filters[key];
    });

    const searchValue = search.trim().toLowerCase();
    const matchesSearch = searchValue
      ? [
          project.title,
          project.headline,
          project.industry,
          project.domain,
          project.platform,
          project.region,
          ...project.techStack,
        ]
          .join(" ")
          .toLowerCase()
          .includes(searchValue)
      : true;

    return matchesFilters && matchesSearch;
  });

  const updateFilter = (key: FilterKey, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const clearFilters = () => {
    setFilters({ domain: "All", platform: "All", region: "All" });
    setSearch("");
  };

  const hasActiveFilters =
    search.trim().length > 0 ||
    (Object.keys(filters) as FilterKey[]).some((key) => filters[key] !== "All");

  return (
    <div className="space-y-10">
      <div className="rounded-[2rem] border border-border/45 bg-white/55 p-6 backdrop-blur dark:bg-surface/72">
        <div className="flex flex-col gap-6">
          <div className="relative">
            <Search className="absolute left-4 top-3.5 h-5 w-5 icon-muted" />
            <Input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search by industry, platform, or outcome"
              className="pl-12"
            />
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {(Object.keys(filterLabels) as FilterKey[]).map((key) => (
              <div key={key} className="space-y-3">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  {filterLabels[key]}
                </p>
                <div className="flex flex-wrap gap-2">
                  {filterOptions[key].map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => updateFilter(key, option)}
                      className={`rounded-full border px-3 py-1 text-xs font-semibold transition-all ${
                        filters[key] === option
                          ? "border-primary/15 bg-primary/10 text-primary shadow-sm"
                          : "border-border/55 bg-white/55 text-muted-foreground hover:border-primary/15 hover:text-foreground hover:bg-white/80 dark:bg-surface/70"
                      }`}
                    >
                      {option === "All" ? `All ${filterLabels[key]}s` : option}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="text-[0.72rem] uppercase tracking-[0.16em] text-muted-foreground">
              Showing <span className="text-primary font-semibold">{filteredProjects.length}</span> transformations
            </p>
            {hasActiveFilters && (
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-full border border-primary/12 bg-primary/10 px-4 py-2 text-xs font-semibold text-primary shadow-sm transition-shadow hover:shadow-md"
                onClick={clearFilters}
              >
                <Filter className="h-4 w-4 icon-accent" />
                Clear filters
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="space-y-2">
        {filteredProjects.map((project) => {
          const metricHighlight = project.metrics[0];

          return (
            <article
              key={project.slug}
              className="grid gap-6 border-t border-border/55 py-6 lg:grid-cols-[220px,1fr] lg:items-center"
            >
              <Link
                href={`/portfolio/${project.slug}`}
                className="group relative min-h-[170px] overflow-hidden rounded-[1.8rem] bg-surface-2"
              >
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  sizes="220px"
                  unoptimized={project.image.startsWith("http")}
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/35 via-transparent to-transparent" />
              </Link>

              <div className="space-y-5">
                <div className="flex flex-wrap items-center gap-3">
                  <Badge variant="soft" className="normal-case tracking-normal">
                    {project.industry}
                  </Badge>
                  <span className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                    {project.domain} / {project.platform} / {project.region}
                  </span>
                </div>

                <div className="space-y-2">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <h3 className="text-2xl font-semibold text-foreground">{project.title}</h3>
                    {metricHighlight ? (
                      <div className="rounded-full bg-primary/10 px-3 py-2 text-xs font-semibold text-primary">
                        {metricHighlight.value} {metricHighlight.label}
                      </div>
                    ) : null}
                  </div>
                  <p className="text-sm text-muted-foreground">{project.headline}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-white/65 px-3 py-1 text-xs font-medium text-muted-foreground shadow-sm dark:bg-surface-2/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3 pt-1">
                  <Link
                    href={`/portfolio/${project.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-foreground"
                  >
                    View case study <ArrowRight className="h-4 w-4 icon-accent" />
                  </Link>
                  <a
                    href={project.caseStudyPdf}
                    download
                    title="Download PDF"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Download PDF <Download className="h-4 w-4 icon-accent" />
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {filteredProjects.length === 0 && (
        <div className="rounded-[2rem] border border-border/45 bg-white/55 p-16 text-center backdrop-blur dark:bg-surface/72">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <Filter className="h-8 w-8 icon-muted" />
          </div>
          <h3 className="text-xl font-semibold text-foreground">No results found</h3>
          <p className="text-sm text-muted-foreground max-w-sm mx-auto">
            We have not shared projects matching these filters yet. Try adjusting your criteria.
          </p>
          <button onClick={clearFilters} className="text-primary font-semibold underline underline-offset-4">
            Reset all filters
          </button>
        </div>
      )}
    </div>
  );
}
