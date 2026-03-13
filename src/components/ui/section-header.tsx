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
        align === "left" && "max-w-2xl",
        className
      )}
    >
      {eyebrow ? (
        badge ? (
          <div
            className={cn(
              "inline-flex items-center gap-2 rounded-full border border-transparent bg-white/78 px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-primary shadow-[inset_0_0_0_1px_hsla(var(--border),0.16),0_16px_34px_-28px_rgba(9,26,45,0.16)] backdrop-blur-md dark:bg-surface/78 dark:shadow-[inset_0_0_0_1px_hsla(var(--border),0.28),0_16px_34px_-28px_rgba(0,0,0,0.32)]",
              align === "center" && "mx-auto"
            )}
          >
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            <p>{eyebrow}</p>
          </div>
        ) : (
          <p className="eyebrow">{eyebrow}</p>
        )
      ) : null}
      <h2
        className={cn(
          size === "lg" ? "display-1" : "heading-2",
          "text-foreground"
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "body-lg text-muted-foreground",
            align === "center" && "mx-auto"
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
