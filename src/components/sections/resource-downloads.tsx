import Image from "next/image";
import { ArrowDownRight, FileDown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
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
        <h2 className="text-2xl font-semibold md:text-3xl text-foreground">{title}</h2>
        <p className="mx-auto max-w-2xl text-base text-muted-foreground md:text-lg">
          {description}
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {resourceDownloads.map((resource) => (
          <Card key={resource.title}>
            <CardContent className="flex h-full flex-col gap-5 px-6 py-6">
              <div className="relative overflow-hidden rounded-[1.5rem] bg-surface-2">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={resource.cover}
                    alt={`${resource.title} cover`}
                    fill
                    sizes="(min-width: 768px) 30vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/30 via-transparent to-transparent" />
                <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/88 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-primary shadow-sm">
                  <FileDown className="h-3 w-3 icon-accent" />
                  {resource.label}
                </div>
              </div>

              <div className="flex items-center justify-between text-[0.66rem] uppercase tracking-[0.16em] text-muted-foreground">
                <span>{resource.meta}</span>
                <ArrowDownRight className="h-4 w-4 icon-accent" />
              </div>

              <div className="space-y-2">
                <p className="text-lg font-semibold text-foreground">{resource.title}</p>
                <p className="text-sm text-muted-foreground">{resource.description}</p>
              </div>

              <a
                href={resource.href}
                className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-primary"
                download
              >
                Download PDF
                <ArrowDownRight className="h-4 w-4 icon-accent" />
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
