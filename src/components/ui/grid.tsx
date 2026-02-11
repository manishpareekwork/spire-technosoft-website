import * as React from "react";

import { cn } from "@/lib/utils";

type GridProps = React.HTMLAttributes<HTMLDivElement> & {
  columns?: string;
};

export function Grid({ className, columns = "grid gap-6", ...props }: GridProps) {
  return <div className={cn("grid", columns, className)} {...props} />;
}
