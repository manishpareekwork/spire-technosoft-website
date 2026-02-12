import * as React from "react";

import { cn } from "@/lib/utils";

type StatProps = {
  label: string;
  value: string;
  helper?: string;
  icon?: React.ElementType;
  className?: string;
};

export function Stat({ label, value, helper, icon: Icon, className }: StatProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-3xl border border-border/40 bg-surface card-pad shadow-soft card-lift",
        className
      )}
    >
      <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute inset-0 hero-lines opacity-40" />
      </div>
      <div className="relative flex items-start justify-between gap-4">
        {Icon ? (
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-secondary/10 text-secondary">
            <Icon className="h-5 w-5 icon-accent" />
          </div>
        ) : null}
        <p className="text-4xl font-bold text-primary">{value}</p>
      </div>
      <p className="mt-4 text-xs uppercase tracking-[0.35em] text-muted-foreground">{label}</p>
      {helper ? <p className="mt-3 text-sm text-muted-foreground">{helper}</p> : null}
    </div>
  );
}
