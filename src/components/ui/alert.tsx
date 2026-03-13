import * as React from "react";

import { cn } from "@/lib/utils";

type AlertVariant = "info" | "success" | "warning" | "error";

export type AlertProps = React.HTMLAttributes<HTMLDivElement> & {
  variant?: AlertVariant;
};

const variantClasses: Record<AlertVariant, string> = {
  info: "border-transparent bg-gradient-to-r from-info/10 to-primary/10 text-foreground shadow-sm backdrop-blur-sm",
  success: "border-transparent bg-gradient-to-r from-success/10 to-emerald-500/10 text-foreground shadow-sm backdrop-blur-sm",
  warning: "border-transparent bg-gradient-to-r from-warning/10 to-amber-500/10 text-foreground shadow-sm backdrop-blur-sm",
  error: "border-transparent bg-gradient-to-r from-destructive/10 to-red-500/10 text-foreground shadow-sm backdrop-blur-sm",
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
