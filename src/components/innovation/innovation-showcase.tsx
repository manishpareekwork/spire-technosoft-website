"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowRight, MonitorPlay } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export type InnovationShowcaseItem = {
  title: string;
  category: string;
  caption: string;
  detail: string;
  image: string;
  imageAlt: string;
  metrics: string[];
  fit: string[];
  output: string;
};

type InnovationShowcaseProps = {
  items: InnovationShowcaseItem[];
  className?: string;
};

export function InnovationShowcase({ items, className }: InnovationShowcaseProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % items.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, [items.length]);

  const activeItem = items[activeIndex];

  return (
    <div className={cn("grid gap-10 lg:grid-cols-[0.56fr,0.44fr]", className)}>
      <div className="space-y-5">
        <div className="relative aspect-[16/11] overflow-hidden rounded-[2.2rem] bg-surface-2">
          <Image
            src={activeItem.image}
            alt={activeItem.imageAlt}
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 42vw, 100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-slate-950/12 to-transparent" />
          <div className="absolute left-4 top-4">
            <Badge variant="soft">{activeItem.category}</Badge>
          </div>
          <div className="absolute bottom-4 left-4 flex items-center gap-3 rounded-full bg-slate-950/64 px-4 py-2 text-sm text-white backdrop-blur">
            <MonitorPlay className="h-4 w-4" />
            Concept walkthrough
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-[0.58fr,0.42fr]">
          <div className="rounded-[1.8rem] border border-border/45 bg-white/70 px-5 py-5 shadow-soft backdrop-blur dark:bg-surface/76">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-primary">
              Good fit
            </p>
            <div className="mt-4 space-y-3">
              {activeItem.fit.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
                  <p className="text-sm text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[1.8rem] border border-border/45 bg-white/70 px-5 py-5 shadow-soft backdrop-blur dark:bg-surface/76">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-primary">
              Expected output
            </p>
            <p className="mt-4 text-sm text-muted-foreground">{activeItem.output}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {activeItem.metrics.map((metric) => (
                <span
                  key={metric}
                  className="rounded-full bg-white/65 px-3 py-1 text-xs font-medium text-muted-foreground shadow-sm dark:bg-surface-2/75"
                >
                  {metric}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="space-y-3">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-primary">
            Active concept
          </p>
          <h3 className="heading-2 text-foreground">{activeItem.title}</h3>
          <p className="body-md text-muted-foreground">{activeItem.caption}</p>
          <p className="text-sm text-muted-foreground">{activeItem.detail}</p>
        </div>

        <div className="space-y-3">
          {items.map((item, index) => (
            <button
              key={item.title}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={cn(
                "grid w-full gap-4 rounded-[1.7rem] border border-border/45 bg-white/60 p-4 text-left shadow-soft transition-all dark:bg-surface/72",
                index === activeIndex
                  ? "translate-x-1 border-primary/30"
                  : "hover:-translate-y-0.5 hover:border-primary/18"
              )}
            >
              <div className="grid gap-4 sm:grid-cols-[96px,1fr] sm:items-center">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[1rem] bg-surface-2">
                  <Image src={item.image} alt="" fill className="object-cover" sizes="96px" />
                </div>
                <div className="space-y-2">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-primary">
                    {item.category}
                  </p>
                  <p className="text-base font-semibold text-foreground">{item.title}</p>
                  <p className="text-sm text-muted-foreground">{item.caption}</p>
                </div>
              </div>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-foreground">
                Explore concept
                <ArrowRight className="h-4 w-4 icon-accent" />
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
