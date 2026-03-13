import * as React from "react";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

export function Accordion({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("space-y-3", className)} {...props} />;
}

type AccordionItemProps = Omit<React.HTMLAttributes<HTMLDetailsElement>, "open"> & {
  title: string;
  defaultOpen?: boolean;
  meta?: string;
};

export function AccordionItem({
  title,
  defaultOpen,
  meta,
  className,
  children,
  ...props
}: AccordionItemProps) {
  return (
    <details
      className={cn(
        "group rounded-[1.6rem] border border-border/55 bg-white/38 px-6 py-5 shadow-sm backdrop-blur-md transition-colors dark:bg-surface/62",
        className
      )}
      open={defaultOpen}
      {...props}
    >
      <summary className="cursor-pointer list-none outline-none">
        <div className="flex items-center justify-between gap-5">
          <div className="space-y-1">
            {meta ? (
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-primary">
                {meta}
              </p>
            ) : null}
            <span className="block text-base font-semibold text-foreground">{title}</span>
          </div>
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/8 text-primary transition-all group-open:rotate-180 group-open:bg-primary/12">
            <ChevronDown className="h-4 w-4" />
          </span>
        </div>
      </summary>
      <div className="mt-4 border-t border-border/45 pt-4 text-sm text-muted-foreground">{children}</div>
    </details>
  );
}
