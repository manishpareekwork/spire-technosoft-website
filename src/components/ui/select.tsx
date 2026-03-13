import * as React from "react";

import { cn } from "@/lib/utils";

export type SelectOption = {
  label: string;
  value: string;
  disabled?: boolean;
};

export type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  options: SelectOption[];
  placeholder?: string;
};

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, options, placeholder, ...props }, ref) => {
    return (
      <select
        ref={ref}
        data-invalid={props["aria-invalid"] === true ? "true" : undefined}
        className={cn(
          "flex h-12 w-full appearance-none rounded-2xl border border-transparent bg-white/76 px-4 pr-10 text-sm text-foreground shadow-[inset_0_0_0_1px_hsla(var(--border),0.22),0_12px_28px_-24px_rgba(9,26,45,0.16)] backdrop-blur focus:outline-none focus:ring-2 focus:ring-ring/60 focus:ring-offset-2 focus:ring-offset-background data-[invalid=true]:shadow-[inset_0_0_0_1px_hsla(var(--destructive),0.45),0_12px_28px_-24px_rgba(9,26,45,0.16)] data-[invalid=true]:focus:ring-destructive/40 dark:bg-surface/78 dark:shadow-[inset_0_0_0_1px_hsla(var(--border),0.3),0_14px_30px_-24px_rgba(0,0,0,0.34)]",
          className
        )}
        {...props}
      >
        {placeholder ? (
          <option value="" disabled hidden>
            {placeholder}
          </option>
        ) : null}
        {options.map((option) => (
          <option key={option.value} value={option.value} disabled={option.disabled}>
            {option.label}
          </option>
        ))}
      </select>
    );
  }
);
Select.displayName = "Select";
