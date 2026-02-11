import * as React from "react";

import { cn } from "@/lib/utils";

type DividerProps = React.HTMLAttributes<HTMLHRElement> & {
  orientation?: "horizontal" | "vertical";
};

export function Divider({ className, orientation = "horizontal", ...props }: DividerProps) {
  return (
    <hr
      className={cn(
        "border-0 bg-border/60",
        orientation === "horizontal" ? "h-px w-full" : "h-full w-px",
        className
      )}
      {...props}
    />
  );
}
