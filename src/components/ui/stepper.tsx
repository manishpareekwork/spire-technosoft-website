import * as React from "react";
import { cn } from "@/lib/utils";

type Step = {
  title: string;
  description: string;
  meta?: string;
};

type StepperProps = {
  steps: Step[];
  className?: string;
};

export function Stepper({ steps, className }: StepperProps) {
  return (
    <div className={cn("relative space-y-12 py-4", className)}>
      <div className="absolute left-7 top-6 bottom-6 w-1">
        <svg
          className="h-full w-full"
          preserveAspectRatio="none"
          viewBox="0 0 2 100"
          width="2"
          height="100%"
        >
          <line
            x1="1"
            y1="0"
            x2="1"
            y2="100"
            stroke="currentColor"
            strokeWidth="2"
            vectorEffect="non-scaling-stroke"
            className="text-border/40"
          />
          <line
            x1="1"
            y1="0"
            x2="1"
            y2="100"
            stroke="currentColor"
            strokeWidth="2"
            vectorEffect="non-scaling-stroke"
            className="text-primary/60"
            strokeDasharray="4 8"
          />
        </svg>
      </div>

      {steps.map((step, index) => (
        <div key={step.title} className="relative flex gap-8 group">
          <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-[1.25rem] border border-border/65 bg-white/80 text-primary shadow-sm transition-all duration-500 group-hover:scale-105 group-hover:border-primary/25 dark:bg-surface-2">
            <span className="text-sm font-semibold tracking-[0.18em]">
              0{index + 1}
            </span>
          </div>

          <div className="flex-1 interactive-card rounded-[1.75rem] p-6 transition-all duration-500 group-hover:border-primary/30">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary/50" />
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-primary">
                    Stage {index + 1}
                  </p>
                </div>
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {step.title}
                </h3>
              </div>
              {step.meta ? (
                <span className="inline-block rounded-full border border-border/60 bg-white/60 px-3 py-1 text-[0.66rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground dark:bg-surface/70">
                  {step.meta}
                </span>
              ) : null}
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground transition-colors group-hover:text-foreground/80">
              {step.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
