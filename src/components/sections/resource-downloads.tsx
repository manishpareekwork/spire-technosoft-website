import { ArrowDownRight } from "lucide-react";
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
    <div className={cn("space-y-6", className)}>
      <div className="space-y-2 text-center">
        <p className="text-sm uppercase tracking-[0.35em] text-secondary font-[var(--font-poppins)]">Resources</p>
        <h2 className="text-2xl font-semibold md:text-3xl">{title}</h2>
        <p className="text-base text-muted-foreground md:text-lg">{description}</p>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {resourceDownloads.map((resource) => (
          <Card key={resource.title} className="bg-card">
            <CardContent className="flex h-full flex-col gap-3 px-6 py-5">
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-muted-foreground">
                <span>{resource.label}</span>
                <ArrowDownRight className="h-4 w-4 text-primary" />
              </div>
              <div className="space-y-2">
                <p className="text-lg font-semibold text-foreground">{resource.title}</p>
                <p className="text-sm text-muted-foreground">{resource.description}</p>
              </div>
              <a
                href={resource.href}
                className="mt-auto inline-flex items-center text-sm font-semibold text-primary"
                download
              >
                Download PDF
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
