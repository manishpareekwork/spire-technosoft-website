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
    <div className={cn("relative space-y-8", className)}>
      <div className="absolute left-5 top-4 bottom-4 w-px bg-gradient-to-b from-primary via-secondary to-accent opacity-40" />
      {steps.map((step, index) => (
        <div key={step.title} className="relative flex gap-6">
          <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white shadow-soft">
            <span className="text-xs font-black tracking-[0.2em]">0{index + 1}</span>
          </div>
          <div className="flex-1 rounded-3xl border border-border/60 bg-surface card-pad shadow-soft card-lift">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-secondary">Stage</p>
                <h3 className="heading-3 text-foreground">{step.title}</h3>
              </div>
              {step.meta ? (
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                  {step.meta}
                </span>
              ) : null}
            </div>
            <p className="mt-3 text-sm text-muted-foreground">{step.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
