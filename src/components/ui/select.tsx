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
          "flex h-11 w-full appearance-none rounded-xl border border-input bg-background px-3 pr-10 text-sm font-medium text-foreground shadow-sm focus:outline-none focus:ring-2 focus:ring-ring/60 focus:ring-offset-2 focus:ring-offset-background data-[invalid=true]:border-destructive data-[invalid=true]:focus:ring-destructive/40",
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
