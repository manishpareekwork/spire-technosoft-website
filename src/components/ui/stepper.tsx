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
    <div className={cn("space-y-6", className)}>
      {steps.map((step, index) => (
        <div
          key={step.title}
          className="relative rounded-3xl border border-border/60 bg-surface px-6 py-5 shadow-soft"
        >
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/60">Step 0{index + 1}</p>
              <h3 className="heading-3 text-foreground">{step.title}</h3>
            </div>
            {step.meta ? <span className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">{step.meta}</span> : null}
          </div>
          <p className="mt-3 text-sm text-muted-foreground">{step.description}</p>
        </div>
      ))}
    </div>
  );
}
