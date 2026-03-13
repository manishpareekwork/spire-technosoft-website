"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

type TabsContextValue = {
  value: string;
  setValue: (value: string) => void;
};

const TabsContext = React.createContext<TabsContextValue | null>(null);

export type TabsProps = React.HTMLAttributes<HTMLDivElement> & {
  defaultValue: string;
  value?: string;
  onValueChange?: (value: string) => void;
};

export function Tabs({ defaultValue, value, onValueChange, className, ...props }: TabsProps) {
  const [internalValue, setInternalValue] = React.useState(defaultValue);
  const activeValue = value ?? internalValue;

  const setValue = React.useCallback(
    (nextValue: string) => {
      setInternalValue(nextValue);
      onValueChange?.(nextValue);
    },
    [onValueChange]
  );

  return (
    <TabsContext.Provider value={{ value: activeValue, setValue }}>
      <div className={cn("space-y-6", className)} {...props} />
    </TabsContext.Provider>
  );
}

export function TabsList({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "flex flex-wrap items-center gap-2 rounded-full border border-transparent bg-white/72 p-2 shadow-[inset_0_0_0_1px_hsla(var(--border),0.18),0_16px_36px_-28px_rgba(9,26,45,0.18)] backdrop-blur dark:bg-surface/78 dark:shadow-[inset_0_0_0_1px_hsla(var(--border),0.28),0_16px_36px_-28px_rgba(0,0,0,0.32)]",
        className
      )}
      role="tablist"
      {...props}
    />
  );
}

export type TabsTriggerProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  value: string;
};

export function TabsTrigger({ value, className, ...props }: TabsTriggerProps) {
  const context = React.useContext(TabsContext);

  if (!context) {
    throw new Error("TabsTrigger must be used within Tabs");
  }

  const isActive = context.value === value;

  return (
    <button
      type="button"
      role="tab"
      aria-selected={isActive}
      data-state={isActive ? "active" : "inactive"}
      onClick={() => context.setValue(value)}
      className={cn(
        "rounded-full px-5 py-2 text-sm font-medium transition-all",
        isActive
          ? "bg-primary text-primary-foreground shadow-soft"
          : "text-muted-foreground hover:bg-white/75 hover:text-foreground dark:hover:bg-surface/82",
        className
      )}
      {...props}
    />
  );
}

export type TabsContentProps = React.HTMLAttributes<HTMLDivElement> & {
  value: string;
};

export function TabsContent({ value, className, ...props }: TabsContentProps) {
  const context = React.useContext(TabsContext);

  if (!context) {
    throw new Error("TabsContent must be used within Tabs");
  }

  if (context.value !== value) return null;

  return (
    <div role="tabpanel" className={cn("animate-softFade", className)} {...props} />
  );
}
