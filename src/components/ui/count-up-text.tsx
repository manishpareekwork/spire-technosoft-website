"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type CountUpTextProps = {
  value: string;
  durationMs?: number;
  className?: string;
};

type ParsedValue = {
  number: number;
  decimals: number;
  prefix: string;
  suffix: string;
};

function parseValue(value: string): ParsedValue | null {
  const match = value.match(/-?\d+(?:\.\d+)?/);

  if (!match || match.index === undefined) {
    return null;
  }

  const numberText = match[0];
  const number = Number(numberText);

  if (Number.isNaN(number)) {
    return null;
  }

  return {
    number,
    decimals: numberText.includes(".") ? numberText.split(".")[1].length : 0,
    prefix: value.slice(0, match.index),
    suffix: value.slice(match.index + numberText.length),
  };
}

function formatNumber(value: number, decimals: number) {
  return new Intl.NumberFormat("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(value);
}

export function CountUpText({
  value,
  durationMs = 1400,
  className,
}: CountUpTextProps) {
  const parsed = useMemo(() => parseValue(value), [value]);
  const [displayValue, setDisplayValue] = useState(parsed ? 0 : null);
  const [hasEnteredView, setHasEnteredView] = useState(false);
  const ref = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (!ref.current || hasEnteredView) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasEnteredView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [hasEnteredView]);

  useEffect(() => {
    if (!parsed) {
      return;
    }

    if (!hasEnteredView) {
      setDisplayValue(0);
      return;
    }

    let frame = 0;
    const start = performance.now();

    const tick = (timestamp: number) => {
      const progress = Math.min((timestamp - start) / durationMs, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(parsed.number * eased);

      if (progress < 1) {
        frame = window.requestAnimationFrame(tick);
      }
    };

    frame = window.requestAnimationFrame(tick);

    return () => window.cancelAnimationFrame(frame);
  }, [durationMs, hasEnteredView, parsed]);

  if (!parsed) {
    return (
      <span ref={ref} className={className}>
        {value}
      </span>
    );
  }

  const numericText = formatNumber(
    displayValue === null ? parsed.number : displayValue,
    parsed.decimals
  );

  return (
    <span ref={ref} className={className}>
      {parsed.prefix}
      {numericText}
      {parsed.suffix}
    </span>
  );
}
