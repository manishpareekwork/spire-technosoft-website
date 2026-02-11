import * as React from "react";

import { cn } from "@/lib/utils";

type ContainerProps = React.HTMLAttributes<HTMLDivElement> & {
  size?: "default" | "wide" | "narrow";
};

const sizeClasses: Record<NonNullable<ContainerProps["size"]>, string> = {
  default: "container",
  wide: "container max-w-screen-2xl",
  narrow: "container max-w-5xl",
};

export function Container({ className, size = "default", ...props }: ContainerProps) {
  return <div className={cn(sizeClasses[size], className)} {...props} />;
}
