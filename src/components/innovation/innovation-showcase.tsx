"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowRight, MonitorPlay, Sparkles, X } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Modal } from "@/components/ui/modal";
import { cn } from "@/lib/utils";

export type InnovationShowcaseItem = {
  title: string;
  category: string;
  caption: string;
  detail: string;
  image: string;
  imageAlt: string;
  metrics: string[];
  fit: string[];
  output: string;
};

type InnovationShowcaseProps = {
  items: InnovationShowcaseItem[];
  className?: string;
};

export function InnovationShowcase({ items, className }: InnovationShowcaseProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % items.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, [items.length]);

  const activeItem = items[activeIndex];

  return (
    <div className={cn("grid gap-10 lg:grid-cols-[0.42fr,0.58fr]", className)}>
      <div className="space-y-5">
        <div className="innovation-media-shell group relative aspect-[5/4] max-w-[480px] overflow-hidden rounded-[1.25rem] bg-surface-2">
          <Image
            src={activeItem.image}
            alt={activeItem.imageAlt}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            sizes="(max-width: 1024px) 100vw, 480px"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,13,24,0.08),rgba(7,13,24,0.72))]" />
          <div className="absolute left-4 top-4 flex flex-wrap gap-2">
            <Badge variant="soft">{activeItem.category}</Badge>
            <span className="rounded-full border border-white/18 bg-white/10 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.08em] text-white/88 backdrop-blur">
              Prototype spotlight
            </span>
          </div>
          <div className="absolute bottom-4 left-4 right-4 rounded-[1rem] border border-white/14 bg-slate-950/54 p-4 text-white backdrop-blur-md">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-sm font-semibold text-white">{activeItem.title}</p>
                <p className="text-xs text-white/70">{activeItem.caption}</p>
              </div>
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/16 bg-white/10 text-white transition-all hover:scale-[1.04] hover:bg-white/16"
                aria-label={`Open details for ${activeItem.title}`}
              >
                <MonitorPlay className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-[0.58fr,0.42fr]">
          <div className="innovation-panel rounded-[1rem] px-5 py-5">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.08em] text-primary">
              Good fit
            </p>
            <div className="mt-4 space-y-3">
              {activeItem.fit.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-[linear-gradient(135deg,hsl(var(--primary)),hsl(var(--accent)))]" />
                  <p className="text-sm text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="innovation-panel rounded-[1rem] px-5 py-5">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.08em] text-primary">
              Expected output
            </p>
            <p className="mt-4 text-sm text-muted-foreground">{activeItem.output}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {activeItem.metrics.map((metric) => (
                <span
                  key={metric}
                  className="rounded-full bg-white/65 px-3 py-1 text-xs font-medium text-muted-foreground shadow-sm dark:bg-surface-2/75"
                >
                  {metric}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="space-y-3">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.08em] text-primary">
            Active concept
          </p>
          <h3 className="heading-2 text-foreground">{activeItem.title}</h3>
          <p className="body-md text-muted-foreground">{activeItem.caption}</p>
          <p className="text-sm text-muted-foreground">{activeItem.detail}</p>
        </div>

        <div className="space-y-3">
          {items.map((item, index) => (
            <button
              key={item.title}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={cn(
                "innovation-list-item grid w-full gap-4 rounded-[1rem] p-4 text-left transition-all",
                index === activeIndex
                  ? "translate-x-1 border-primary/30"
                  : "hover:-translate-y-1 hover:border-primary/18"
              )}
            >
              <div className="grid gap-4 sm:grid-cols-[84px,1fr] sm:items-center">
                <div className="relative aspect-[5/4] overflow-hidden rounded-[0.8rem] bg-surface-2">
                  <Image src={item.image} alt="" fill className="object-cover" sizes="84px" />
                </div>
                <div className="space-y-2">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.08em] text-primary">
                    {item.category}
                  </p>
                  <p className="text-base font-semibold text-foreground">{item.title}</p>
                  <p className="text-sm text-muted-foreground">{item.caption}</p>
                </div>
              </div>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-foreground">
                Explore concept
                <ArrowRight className="h-4 w-4 icon-accent" />
              </span>
            </button>
          ))}
        </div>
      </div>

      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        title={activeItem.title}
        description="A concise read on what the concept proves, who it serves, and how the sprint turns it into a decision."
        className="max-w-3xl border-white/10 bg-[linear-gradient(180deg,rgba(9,16,28,0.98),rgba(13,24,40,0.98))] text-white"
        footer={
          <>
            <button
              type="button"
              onClick={() => setModalOpen(false)}
              className="inline-flex items-center gap-2 rounded-full border border-white/14 bg-white/8 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/12"
            >
              <X className="h-4 w-4" />
              Close
            </button>
            <a
              href="mailto:innovation@spiretechnosoft.com?subject=Innovation%20Lab%20Inquiry"
              className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,#3b82f6,#06b6d4)] px-5 py-3 text-sm font-semibold text-white shadow-[0_20px_50px_-28px_rgba(59,130,246,0.7)] transition-transform hover:-translate-y-0.5"
            >
              Discuss this direction
              <ArrowRight className="h-4 w-4" />
            </a>
          </>
        }
      >
        <div className="grid gap-6 lg:grid-cols-[0.54fr,0.46fr]">
          <div className="space-y-4 rounded-[1.1rem] border border-white/10 bg-white/[0.05] p-5">
            <div className="flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.08em] text-cyan-200">
              <Sparkles className="h-4 w-4" />
              What gets tested
            </div>
            <p className="text-sm leading-7 text-white/76">{activeItem.detail}</p>
            <div className="flex flex-wrap gap-2">
              {activeItem.metrics.map((metric) => (
                <span
                  key={metric}
                  className="rounded-full border border-white/10 bg-white/8 px-3 py-1 text-xs font-medium text-white/84"
                >
                  {metric}
                </span>
              ))}
            </div>
          </div>
          <div className="space-y-4 rounded-[1.1rem] border border-white/10 bg-white/[0.05] p-5">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.08em] text-cyan-200">
              Decision signals
            </p>
            <div className="space-y-3">
              {activeItem.fit.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-cyan-300" />
                  <p className="text-sm leading-7 text-white/76">{item}</p>
                </div>
              ))}
            </div>
            <div className="rounded-[0.95rem] border border-white/10 bg-white/[0.04] p-4">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.08em] text-white/55">
                Sprint output
              </p>
              <p className="mt-2 text-sm leading-7 text-white/78">{activeItem.output}</p>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
