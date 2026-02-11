import * as React from "react";

import { cn } from "@/lib/utils";

type StatProps = {
  label: string;
  value: string;
  helper?: string;
  className?: string;
};

export function Stat({ label, value, helper, className }: StatProps) {
  return (
    <div className={cn("surface-card rounded-3xl p-6 shadow-soft", className)}>
      <p className="text-3xl font-semibold text-foreground">{value}</p>
      <p className="mt-2 text-xs uppercase tracking-[0.35em] text-muted-foreground">{label}</p>
      {helper ? <p className="mt-3 text-sm text-muted-foreground">{helper}</p> : null}
    </div>
  );
}
