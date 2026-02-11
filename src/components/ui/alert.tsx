import * as React from "react";

import { cn } from "@/lib/utils";

type AlertVariant = "info" | "success" | "warning" | "error";

export type AlertProps = React.HTMLAttributes<HTMLDivElement> & {
  variant?: AlertVariant;
};

const variantClasses: Record<AlertVariant, string> = {
  info: "border-primary/20 bg-primary/5 text-foreground",
  success: "border-emerald-500/20 bg-emerald-500/10 text-foreground",
  warning: "border-amber-500/20 bg-amber-500/10 text-foreground",
  error: "border-destructive/30 bg-destructive/10 text-foreground",
};

export function Alert({ variant = "info", className, ...props }: AlertProps) {
  return (
    <div
      role={variant === "error" ? "alert" : "status"}
      className={cn(
        "rounded-2xl border px-4 py-3 text-sm font-medium",
        variantClasses[variant],
        className
      )}
      {...props}
    />
  );
}

export function Toast({ variant = "info", className, ...props }: AlertProps) {
  return (
    <div
      role="status"
      aria-live="polite"
      className={cn(
        "rounded-2xl border px-4 py-3 text-sm font-medium shadow-soft",
        variantClasses[variant],
        className
      )}
      {...props}
    />
  );
}
