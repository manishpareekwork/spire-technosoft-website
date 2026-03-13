import * as React from "react";

import { cn } from "@/lib/utils";

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        data-invalid={props["aria-invalid"] === true ? "true" : undefined}
        className={cn(
          "flex min-h-[128px] w-full rounded-[1.5rem] border border-transparent bg-white/76 px-4 py-3 text-sm text-foreground shadow-[inset_0_0_0_1px_hsla(var(--border),0.22),0_12px_28px_-24px_rgba(9,26,45,0.16)] backdrop-blur placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[invalid=true]:shadow-[inset_0_0_0_1px_hsla(var(--destructive),0.45),0_12px_28px_-24px_rgba(9,26,45,0.16)] data-[invalid=true]:focus-visible:ring-destructive/40 dark:bg-surface/78 dark:shadow-[inset_0_0_0_1px_hsla(var(--border),0.3),0_14px_30px_-24px_rgba(0,0,0,0.34)]",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
