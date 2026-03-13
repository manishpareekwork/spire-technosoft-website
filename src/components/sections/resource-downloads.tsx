import Image from "next/image";
import { ArrowDownRight, FileDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { resourceDownloads } from "@/data/resources";

type ResourceDownloadsProps = {
  title?: string;
  description?: string;
  className?: string;
};

export function ResourceDownloads({
  title = "Downloadable resources",
  description = "Share-ready PDFs for stakeholder alignment, board updates, and procurement reviews.",
  className,
}: ResourceDownloadsProps) {
  return (
    <div className={cn("space-y-8", className)}>
      <div className="space-y-3">
        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-primary">
          Resources
        </p>
        <h2 className="text-2xl font-semibold text-foreground md:text-3xl">{title}</h2>
        <p className="max-w-2xl text-base text-muted-foreground md:text-lg">{description}</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {resourceDownloads.map((resource) => (
          <a
            key={resource.title}
            href={resource.href}
            download
            className="compact-tile group grid gap-4 rounded-[1.6rem] px-4 py-4 shadow-soft sm:grid-cols-[72px,1fr] sm:items-start"
          >
            <div className="relative overflow-hidden rounded-[1.1rem] bg-surface-2">
              <div className="relative aspect-square w-full">
                <Image
                  src={resource.cover}
                  alt={`${resource.title} cover`}
                  fill
                  sizes="72px"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
            </div>

            <div className="flex h-full flex-col gap-3">
              <div className="flex flex-wrap items-center justify-between gap-3 text-[0.66rem] uppercase tracking-[0.16em] text-muted-foreground">
                <span className="inline-flex items-center gap-2 text-primary">
                  <FileDown className="h-3 w-3 icon-accent" />
                  {resource.label}
                </span>
                <span>{resource.meta}</span>
              </div>

              <div className="space-y-2">
                <p className="text-base font-semibold text-foreground">{resource.title}</p>
                <p className="text-sm text-muted-foreground">{resource.description}</p>
              </div>

              <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                Download PDF
                <ArrowDownRight className="h-4 w-4 icon-accent transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
