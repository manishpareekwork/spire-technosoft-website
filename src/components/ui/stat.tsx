import * as React from "react";

import { cn } from "@/lib/utils";
import { CountUpText } from "@/components/ui/count-up-text";

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
        "group relative overflow-hidden rounded-[1.75rem] surface-card card-pad card-lift",
        className
      )}
    >
      <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute inset-0 hero-lines opacity-20" />
      </div>
      <div className="relative flex items-start justify-between gap-4">
        {Icon ? (
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-secondary">
            <Icon className="h-5 w-5 icon-accent" />
          </div>
        ) : null}
        <CountUpText value={value} className="text-4xl font-semibold text-foreground" />
      </div>
      <p className="mt-5 text-[0.72rem] uppercase tracking-[0.18em] text-muted-foreground">{label}</p>
      {helper ? <p className="mt-2 text-sm text-muted-foreground">{helper}</p> : null}
    </div>
  );
}
