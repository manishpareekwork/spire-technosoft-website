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
      <div className="space-y-3 text-center">
        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-primary">
          Resources
        </p>
        <h2 className="text-2xl font-semibold text-foreground md:text-3xl">{title}</h2>
        <p className="mx-auto max-w-2xl text-base text-muted-foreground md:text-lg">
          {description}
        </p>
      </div>

      <div className="space-y-4">
        {resourceDownloads.map((resource) => (
          <a
            key={resource.title}
            href={resource.href}
            download
            className="group grid gap-5 rounded-[2rem] section-contrast p-4 sm:grid-cols-[0.28fr,0.72fr] sm:items-center sm:p-5"
          >
            <div className="relative overflow-hidden rounded-[1.5rem] bg-surface-2">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={resource.cover}
                  alt={`${resource.title} cover`}
                  fill
                  sizes="(min-width: 768px) 22vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/28 via-transparent to-transparent" />
              <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/88 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-primary shadow-sm">
                <FileDown className="h-3 w-3 icon-accent" />
                {resource.label}
              </div>
            </div>

            <div className="flex h-full flex-col gap-4 px-2">
              <div className="flex items-center justify-between text-[0.66rem] uppercase tracking-[0.16em] text-muted-foreground">
                <span>{resource.meta}</span>
                <ArrowDownRight className="h-4 w-4 icon-accent transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>

              <div className="space-y-2">
                <p className="text-lg font-semibold text-foreground">{resource.title}</p>
                <p className="text-sm text-muted-foreground">{resource.description}</p>
              </div>

              <span className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-primary">
                Download PDF
                <ArrowDownRight className="h-4 w-4 icon-accent" />
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
