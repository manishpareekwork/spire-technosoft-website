import * as React from "react";

import { cn } from "@/lib/utils";

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        data-invalid={props["aria-invalid"] === true ? "true" : undefined}
        className={cn(
          "flex min-h-[100px] w-full rounded-xl border border-input bg-background px-3 py-2 text-sm font-medium text-foreground shadow-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[invalid=true]:border-destructive data-[invalid=true]:focus-visible:ring-destructive/40",
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
