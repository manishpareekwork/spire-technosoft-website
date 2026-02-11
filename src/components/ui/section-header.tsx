import * as React from "react";

import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  size?: "md" | "lg";
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  size = "lg",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "space-y-4",
        align === "center" ? "text-center" : "text-left",
        className
      )}
    >
      {eyebrow ? <p className="eyebrow text-primary/70">{eyebrow}</p> : null}
      <h2 className={cn(size === "lg" ? "display-1" : "heading-2", "text-foreground")}>{title}</h2>
      {description ? <p className="body-lg text-muted-foreground">{description}</p> : null}
    </div>
  );
}
