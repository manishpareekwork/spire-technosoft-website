"use client";

import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

type HeroBenefitRotatorProps = {
  items: string[];
  className?: string;
};

export function HeroBenefitRotator({ items, className }: HeroBenefitRotatorProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (items.length <= 1) {
      return;
    }

    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % items.length);
    }, 2600);

    return () => window.clearInterval(interval);
  }, [items.length]);

  return (
    <span className={cn("relative inline-flex min-h-[1.2em] items-center", className)}>
      {items.map((item, index) => (
        <span
          key={item}
          className={cn(
            "absolute left-0 top-0 transition-all duration-500",
            index === activeIndex
              ? "translate-y-0 opacity-100"
              : "pointer-events-none translate-y-3 opacity-0"
          )}
        >
          {item}
        </span>
      ))}
      <span className="invisible">{items[activeIndex] ?? items[0]}</span>
    </span>
  );
}
