import type { Metadata } from "next";
import { siteContent } from "@/content/site";
import { ArrowRight, Compass, Map, Code2, Activity, Zap, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "How We Work",
  description: siteContent.home.operatingRhythm.description,
};

const icons = [Compass, Map, Code2, Activity];
const signals = ["Predictable velocity", "Zero-day observability", "Executive visibility"];
const readiness = ["Security reviewed", "A11y compliant", "Telemetry active", "Automated QA"];

export default function HowWeWorkPage() {
  const { operatingRhythm } = siteContent.home;

  return (
    <main className="flex-1 bg-background pb-16">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container relative z-10 mx-auto max-w-4xl text-center">
          <p className="eyebrow inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-[0.74rem] uppercase text-primary">
            {operatingRhythm.eyebrow}
          </p>
          <h1 className="mt-6 display-1 text-foreground">{operatingRhythm.title}</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            {operatingRhythm.description}
          </p>
        </div>
      </section>

      {/* Graphical Process Timeline Section */}
      <section className="container max-w-5xl py-12">
        <div className="relative">
          {/* Vertical Timeline Glow Line */}
          <div className="absolute left-[1.95rem] top-4 bottom-4 w-px bg-gradient-to-b from-primary/40 via-accent/40 to-transparent md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-12 md:space-y-24">
            {operatingRhythm.steps.map((step, index) => {
              const Icon = icons[index % icons.length];
              const isEven = index % 2 === 0;

              return (
                <article
                  key={step.title}
                  className={cn(
                    "relative flex flex-col md:flex-row md:items-center gap-8 pl-[4.5rem] md:pl-0 animate-softFade",
                    isEven ? "md:flex-row-reverse" : ""
                  )}
                  style={{ animationDelay: `${index * 120}ms` }}
                >
                  {/* Glowing Node Icon */}
                  <div className="absolute left-0 top-0 flex h-16 w-16 items-center justify-center rounded-full bg-background border border-primary/20 shadow-[0_0_24px_rgba(var(--primary),0.2)] md:left-1/2 md:-translate-x-1/2 md:top-1/2 md:-translate-y-1/2">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 backdrop-blur-md">
                      <Icon className="h-5 w-5 text-accent" />
                    </div>
                  </div>

                  {/* Content Panel */}
                  <div className={cn("flex-1", isEven ? "md:pl-16 text-left" : "md:pr-16 md:text-right")}>
                    <div className="group relative overflow-hidden rounded-[2rem] border border-white/5 bg-surface/40 p-8 shadow-2xl backdrop-blur-xl transition-all hover:border-white/10 hover:bg-surface/60">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-primary">
                        {step.duration}
                      </p>
                      <h3 className="mt-3 text-2xl font-bold text-foreground">{step.title}</h3>
                      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                        {step.detail}
                      </p>
                    </div>
                  </div>

                  {/* Spacer for the other half of the flex layout (Desktop) */}
                  <div className="hidden md:block flex-1" />
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Rhythm Results Bento Grid */}
      <section className="container max-w-5xl py-16">
        <div className="rounded-[2.8rem] border border-white/10 bg-secondary/95 p-8 md:p-12 shadow-2xl backdrop-blur-2xl">
          <div className="grid gap-8 lg:grid-cols-2">
            
            <div className="space-y-8">
              <div>
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-primary">
                  Launch Confidence
                </p>
                <h3 className="mt-3 text-3xl font-bold text-white">
                  Shipped with enough clarity to learn quickly, not just launch once.
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {readiness.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-white/90 backdrop-blur-md"
                  >
                    <ShieldCheck className="h-3.5 w-3.5 text-accent" />
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {signals.map((signal, index) => (
                <div
                  key={signal}
                  className="flex flex-col justify-center rounded-[1.5rem] bg-white/5 p-6 border border-white/5 backdrop-blur-md transition-colors hover:bg-white/10"
                >
                  <Zap className="mb-4 h-5 w-5 text-accent opacity-80" />
                  <p className="text-sm font-semibold text-white/90">{signal}</p>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* Action Call */}
        <div className="mt-16 text-center animate-softFade" style={{ animationDelay: "500ms" }}>
          <Button
            asChild
            variant="accent"
            size="xl"
            className="bg-gradient-brand text-white shadow-brand-glow-sm hover:shadow-brand-glow rounded-full px-10"
          >
            <Link href={operatingRhythm.cta.href}>
              {operatingRhythm.cta.label}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
