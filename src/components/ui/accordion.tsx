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
        "group rounded-[1.6rem] border border-transparent bg-white/62 px-6 py-5 shadow-[inset_0_0_0_1px_hsla(var(--border),0.16),0_18px_40px_-30px_rgba(9,26,45,0.14)] backdrop-blur-md transition-colors dark:bg-surface/68 dark:shadow-[inset_0_0_0_1px_hsla(var(--border),0.26),0_18px_40px_-30px_rgba(0,0,0,0.28)]",
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
      <div className="mt-4 pt-4 text-sm text-muted-foreground">{children}</div>
    </details>
  );
}
