"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { portfolioProjects } from "@/data/portfolio";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Download, Filter } from "lucide-react";

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
    <div className="space-y-12">
      {/* Filter Panel */}
      <div className="glass-panel flex flex-col gap-6 rounded-[2rem] p-8 md:flex-row md:items-end md:justify-between border-white/20">
        <div className="grid flex-1 gap-6 md:grid-cols-3">
          {(Object.keys(filterLabels) as FilterKey[]).map((key) => (
            <div key={key} className="space-y-2">
              <label className="text-xs font-black uppercase tracking-[0.2em] text-primary ml-1">
                {filterLabels[key]}
              </label>
              <select
                className="w-full rounded-2xl border-none bg-white/50 dark:bg-card/40 px-5 py-3.5 text-sm font-semibold text-foreground shadow-sm transition-all duration-300 focus:bg-white focus:ring-4 focus:ring-primary/10 outline-none appearance-none cursor-pointer"
                value={filters[key]}
                onChange={(event) => updateFilter(key, event.target.value)}
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 1.25rem center',
                  backgroundSize: '1rem',
                }}
              >
                {filterOptions[key].map((option) => (
                  <option key={option} value={option} className="bg-background">
                    {option === "All" ? `All ${filterLabels[key]}s` : option}
                  </option>
                ))}
              </select>
            </div>
          ))}
        </div>
        <button
          type="button"
          className="rounded-full bg-primary/10 h-14 px-8 text-sm font-bold text-primary transition-all duration-300 hover:bg-primary hover:text-white flex items-center gap-2"
          onClick={clearFilters}
        >
          <Filter className="h-4 w-4" />
          Clear Filters
        </button>
      </div>

      {/* Results Count */}
      <div className="flex items-center gap-3">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
        <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest">
          Showing <span className="text-primary">{filteredProjects.length}</span> proven case studies
        </p>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
      </div>

      {/* Portfolio Grid */}
      <div className="grid gap-8 md:grid-cols-2">
        {filteredProjects.map((project, index) => (
          <div 
            key={project.slug} 
            className="interactive-card group flex flex-col overflow-hidden bg-white/95 dark:bg-card/40 transition-all duration-500"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Vibrant Brand Gradient Header */}
            <div className="relative h-64 w-full overflow-hidden bg-gradient-to-br from-primary via-secondary to-accent">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_rgba(255,255,255,0.2),_transparent_50%),_radial-gradient(circle_at_70%_80%,_rgba(0,0,0,0.1),_transparent_60%)]" />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center text-white space-y-4">
                <div className="inline-block rounded-full bg-white/10 px-4 py-1.5 backdrop-blur-md border border-white/20">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em]">{project.industry}</p>
                </div>
                <h3 className="text-3xl font-black leading-tight group-hover:scale-105 transition-transform duration-500">{project.title}</h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {project.metrics.slice(0, 2).map((metric) => (
                    <span key={`${project.slug}-${metric.label}-hero`} className="rounded-full bg-black/10 px-3 py-1 text-[10px] font-bold border border-white/10 backdrop-blur-md">
                      {metric.value} {metric.label}
                    </span>
                  ))}
                </div>
              </div>
              {/* Decorative Orbs */}
              <div className="absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-white/10 blur-2xl" />
            </div>

            <div className="flex flex-1 flex-col gap-6 p-10">
              <div className="space-y-3">
                <p className="text-lg font-medium text-foreground/80 leading-relaxed italic border-l-4 border-primary/20 pl-4">
                  "{project.headline}"
                </p>
                <div className="flex flex-wrap gap-4 text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/60">
                  <span className="text-primary">{project.domain}</span>
                  <span>/</span>
                  <span className="text-secondary">{project.platform}</span>
                  <span>/</span>
                  <span className="text-accent">{project.region}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {project.metrics.map((metric) => (
                  <div key={`${project.slug}-${metric.label}-badge`} className="p-4 rounded-2xl bg-primary/5 space-y-1 group/metric hover:bg-primary transition-colors">
                    <p className="text-xl font-black group-hover/metric:text-white transition-colors">{metric.value}</p>
                    <p className="text-[10px] uppercase font-bold text-muted-foreground group-hover/metric:text-white/70 transition-colors tracking-widest">{metric.label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-auto pt-6 space-y-6">
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="text-[10px] font-bold text-primary bg-primary/5 px-3 py-1 rounded-lg">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-4">
                  <Link
                    href={`/portfolio/${project.slug}`}
                    className="flex-1 inline-flex items-center justify-center h-14 rounded-2xl bg-primary text-sm font-bold text-white shadow-xl shadow-primary/10 transition-all duration-300 hover:bg-secondary hover:shadow-secondary/20 hover:-translate-y-1"
                  >
                    View Transformation Case
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                  <a
                    href={project.caseStudyPdf}
                    download
                    title="Download PDF"
                    className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-muted/50 text-muted-foreground transition-all duration-300 hover:bg-primary hover:text-white"
                  >
                    <Download className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <div className="rounded-[2.5rem] border-2 border-dashed border-primary/10 bg-white/40 p-20 text-center space-y-4">
          <div className="h-20 w-20 rounded-full bg-primary/5 flex items-center justify-center mx-auto">
            <Filter className="h-10 w-10 text-primary/20" />
          </div>
          <h3 className="text-2xl font-bold">No results found</h3>
          <p className="text-muted-foreground max-w-sm mx-auto">
            We haven't shared projects matching these specific filters yet. Try adjusting your criteria.
          </p>
          <button onClick={clearFilters} className="text-primary font-bold underline underline-offset-4">
            Reset all filters
          </button>
        </div>
      )}
    </div>
  );
}

