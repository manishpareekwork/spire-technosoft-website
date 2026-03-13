import * as React from "react";

import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  size?: "md" | "lg";
  className?: string;
  badge?: boolean;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  size = "lg",
  className,
  badge = false,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "space-y-5 animate-slideUp",
        align === "center" ? "text-center mx-auto" : "text-left",
        align === "center" && "max-w-3xl",
        className
      )}
    >
      {eyebrow ? (
        badge ? (
           <div className={cn(
             "inline-flex items-center gap-2 rounded-full border border-border/50 bg-surface-2/80 backdrop-blur px-5 py-2 shadow-sm",
             align === "center" && "mx-auto"
           )}>
             <span className="relative flex h-2 w-2">
               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
               <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
             </span>
             <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-foreground/80">{eyebrow}</p>
           </div>
        ) : (
          <p className="eyebrow text-accent font-extrabold tracking-[0.25em]">{eyebrow}</p>
        )
      ) : null}
      <h2 className={cn(size === "lg" ? "display-1" : "heading-2", "text-foreground font-black drop-shadow-sm")}>{title}</h2>
      {description ? (
        <p className={cn("body-lg text-muted-foreground/90 font-medium", align === "center" && "mx-auto")}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
