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
      {/* Filter Panel */}
      <div className="rounded-[2rem] border border-border/40 bg-surface p-6 shadow-soft">
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
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
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
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-border/40 text-muted-foreground hover:text-foreground"
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
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Showing <span className="text-primary font-semibold">{filteredProjects.length}</span> transformations
            </p>
            {hasActiveFilters && (
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-xs font-semibold text-primary"
                onClick={clearFilters}
              >
                <Filter className="h-4 w-4 icon-accent" />
                Clear filters
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Portfolio Grid */}
      <div className="grid gap-8 md:grid-cols-2">
        {filteredProjects.map((project) => {
          const metricHighlight = project.metrics[0];
          return (
            <div key={project.slug} className="surface-card overflow-hidden rounded-3xl shadow-soft">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 45vw, 100vw"
                  unoptimized={project.image.startsWith("http")}
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-transparent" />
                <div className="absolute left-4 top-4 flex flex-col gap-2">
                  <Badge variant="soft" className="normal-case tracking-normal">
                    {project.industry}
                  </Badge>
                  <span className="rounded-full bg-black/30 px-3 py-1 text-xs font-semibold text-white">
                    NDA-safe preview
                  </span>
                </div>
              </div>

              <div className="p-6 space-y-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{project.headline}</p>
                  </div>
                  {metricHighlight && (
                    <div className="rounded-2xl bg-primary/10 px-3 py-2 text-xs font-semibold text-primary">
                      {metricHighlight.value} {metricHighlight.label}
                    </div>
                  )}
                </div>

                <div className="flex flex-wrap gap-2 text-xs font-semibold text-muted-foreground">
                  <span>{project.domain}</span>
                  <span>/</span>
                  <span>{project.platform}</span>
                  <span>/</span>
                  <span>{project.region}</span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="rounded-full border border-border/40 bg-surface-2 px-3 py-1 text-xs font-semibold text-foreground">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3 pt-4">
                  <Link
                    href={`/portfolio/${project.slug}`}
                    className="inline-flex flex-1 items-center justify-center rounded-full bg-primary px-4 py-3 text-sm font-semibold text-white"
                  >
                    View transformation case <ArrowRight className="ml-2 h-4 w-4 icon-inverse" />
                  </Link>
                  <a
                    href={project.caseStudyPdf}
                    download
                    title="Download PDF"
                    className="inline-flex items-center justify-center rounded-full border border-border/40 px-4 py-3 text-sm font-semibold text-foreground"
                  >
                    <Download className="h-4 w-4 icon-accent" />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <div className="rounded-[2.5rem] border-2 border-dashed border-border/40 bg-surface p-16 text-center space-y-4">
          <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
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
