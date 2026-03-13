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
      {/* Animated SVG Pipeline */}
      <div className="absolute left-7 top-6 bottom-6 w-1">
        <svg
          className="h-full w-full"
          preserveAspectRatio="none"
          viewBox="0 0 2 100"
          width="2"
          height="100%"
        >
          {/* Base muted line */}
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
          {/* Animated flowing line */}
          <line
            x1="1"
            y1="0"
            x2="1"
            y2="100"
            stroke="currentColor"
            strokeWidth="2"
            vectorEffect="non-scaling-stroke"
            className="text-primary/60 line-dash"
            strokeDasharray="4 8"
          />
        </svg>
      </div>

      {steps.map((step, index) => (
        <div key={step.title} className="relative flex gap-8 group">
          {/* Glowing Node */}
          <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-surface border border-border/50 text-primary shadow-sm group-hover:bg-primary group-hover:text-white group-hover:shadow-glow group-hover:scale-110 transition-all duration-500">
            <span className="text-sm font-black tracking-widest">
              0{index + 1}
            </span>
          </div>
          
          {/* Content Card */}
          <div className="flex-1 interactive-card p-8 group-hover:border-primary/30 transition-all duration-500 group-hover:translate-x-2">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-sm bg-primary/40 group-hover:bg-primary animate-pulse" />
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">Stage {index + 1}</p>
                </div>
                <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {step.title}
                </h3>
              </div>
              {step.meta ? (
                <span className="inline-block rounded-lg bg-surface-2 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-muted-foreground border border-border/50">
                  {step.meta}
                </span>
              ) : null}
            </div>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors">
              {step.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
