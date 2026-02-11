import * as React from "react";

import { cn } from "@/lib/utils";

export function Accordion({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("space-y-4", className)} {...props} />;
}

type AccordionItemProps = Omit<React.HTMLAttributes<HTMLDetailsElement>, "open"> & {
  title: string;
  defaultOpen?: boolean;
};

export function AccordionItem({ title, defaultOpen, className, children, ...props }: AccordionItemProps) {
  return (
    <details
      className={cn(
        "group rounded-2xl border border-border/60 bg-surface px-6 py-4 shadow-soft",
        className
      )}
      open={defaultOpen}
      {...props}
    >
      <summary className="cursor-pointer list-none text-base font-semibold text-foreground outline-none">
        <div className="flex items-center justify-between">
          <span>{title}</span>
          <span className="text-muted-foreground transition-transform group-open:rotate-45">+</span>
        </div>
      </summary>
      <div className="mt-3 text-sm text-muted-foreground">{children}</div>
    </details>
  );
}
