"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { MonitorPlay } from "lucide-react";

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
    <div className={cn("space-y-5", className)}>
      <div className="grid gap-8 lg:grid-cols-[0.62fr,0.38fr] lg:items-start">
        <div className="space-y-4">
          <div className="relative min-h-[300px] overflow-hidden rounded-[2rem] bg-surface-2 sm:min-h-[360px]">
            <Image
              src={activeItem.image}
              alt={activeItem.imageAlt}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 42vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/52 via-slate-900/12 to-transparent" />
            <div className="absolute left-4 top-4">
              <Badge variant="soft">{activeItem.category}</Badge>
            </div>
            <div className="absolute bottom-4 left-4 flex items-center gap-3 rounded-full bg-slate-950/62 px-4 py-2 text-sm text-white backdrop-blur">
              <MonitorPlay className="h-4 w-4" />
              Prototype walkthrough
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
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

        <div className="space-y-6">
          <div className="space-y-3">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-primary">
              Active concept
            </p>
            <h3 className="heading-2 text-foreground">{activeItem.title}</h3>
            <p className="body-md text-muted-foreground">{activeItem.caption}</p>
            <p className="text-sm text-muted-foreground">{activeItem.detail}</p>
          </div>

          <div className="space-y-2">
            {items.map((item, index) => (
              <button
                key={item.title}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "grid w-full gap-4 border-t border-border/55 py-4 text-left transition-colors",
                  index === activeIndex ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                )}
              >
                <div className="flex items-center gap-3">
                  <div className="relative h-14 w-20 overflow-hidden rounded-[1rem] bg-surface-2">
                    <Image
                      src={item.image}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="120px"
                    />
                  </div>
                  <div className="space-y-1">
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-primary">
                      {item.category}
                    </p>
                    <p className="text-sm font-semibold text-foreground">{item.title}</p>
                  </div>
                </div>
                <p className="text-sm">{item.caption}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
