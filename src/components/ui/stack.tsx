import * as React from "react";

import { cn } from "@/lib/utils";

type StackProps = React.HTMLAttributes<HTMLDivElement> & {
  direction?: "row" | "col";
  gap?: string;
};

export function Stack({ className, direction = "col", gap = "gap-4", ...props }: StackProps) {
  return <div className={cn("flex", direction === "col" ? "flex-col" : "flex-row", gap, className)} {...props} />;
}
