"use client";

import * as React from "react";
import { createPortal } from "react-dom";

import { cn } from "@/lib/utils";

export type DrawerProps = {
  open: boolean;
  onClose: () => void;
  side?: "right" | "left" | "bottom";
  title?: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
};

const sideClasses: Record<NonNullable<DrawerProps["side"]>, string> = {
  right: "right-0 top-0 h-full w-full max-w-md",
  left: "left-0 top-0 h-full w-full max-w-md",
  bottom: "bottom-0 left-0 w-full max-w-none rounded-t-3xl",
};

export function Drawer({ open, onClose, side = "right", title, description, children, className }: DrawerProps) {
  React.useEffect(() => {
    if (!open) return;
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open || typeof document === "undefined") return null;

  return createPortal(
    <div className="fixed inset-0 z-[60]">
      <button
        type="button"
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
        aria-label="Close drawer"
      />
      <aside
        className={cn(
          "absolute bg-surface shadow-float border border-border/60",
          sideClasses[side],
          side === "bottom" ? "p-6" : "p-8",
          className
        )}
        role="dialog"
        aria-modal="true"
      >
        {(title || description) && (
          <div className="mb-6 space-y-2">
            {title ? <h3 className="text-2xl font-semibold text-foreground">{title}</h3> : null}
            {description ? <p className="text-sm text-muted-foreground">{description}</p> : null}
          </div>
        )}
        <div className="overflow-y-auto pr-1" style={{ maxHeight: side === "bottom" ? "70vh" : "calc(100vh - 6rem)" }}>
          {children}
        </div>
      </aside>
    </div>,
    document.body
  );
}
