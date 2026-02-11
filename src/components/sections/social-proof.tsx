import { cn } from "@/lib/utils";
import { clientLogos, resultsCallouts, testimonials } from "@/data/social-proof";
import { Quote } from "lucide-react";

type SocialProofBandProps = {
  title?: string;
  description?: string;
  variant?: "full" | "compact";
  className?: string;
};

export function SocialProofBand({
  title = "Trusted by enterprise teams",
  description,
  variant = "full",
  className,
}: SocialProofBandProps) {
  const showTestimonials = variant === "full";

  return (
    <div className={cn("space-y-12", className)}>
      {(title || description) && (
        <div className="space-y-4 text-center">
          {title && <p className="text-[10px] font-black uppercase tracking-[0.5em] text-primary">{title}</p>}
          {description && <p className="text-xl text-muted-foreground/80 max-w-2xl mx-auto italic font-medium">"{description}"</p>}
        </div>
      )}

      <div className="grid gap-6 md:grid-cols-2">
        {resultsCallouts.map((callout) => (
          <div key={callout.metric} className="interactive-card bg-white/95 dark:bg-card/40 p-10 space-y-4 group">
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-secondary group-hover:text-primary transition-colors">Business Impact</p>
            <p className="text-4xl font-black text-primary transition-transform group-hover:scale-110 group-hover:translate-x-1">{callout.metric}</p>
            <p className="text-base text-muted-foreground font-medium leading-relaxed">{callout.detail}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap items-center justify-center gap-4">
        {clientLogos.map((client) => (
          <div key={client.name} className="interactive-card flex min-h-[80px] min-w-[200px] flex-col items-center justify-center px-8 text-center group hover:bg-slate-900 hover:text-white transition-all duration-500">
            <span className="text-lg font-black tracking-tight text-primary group-hover:text-white transition-colors">{client.name}</span>
            <span className="text-[10px] uppercase tracking-[0.3em] font-black text-muted-foreground/50 group-hover:text-white/50 transition-colors">{client.tagline}</span>
          </div>
        ))}
      </div>

      {showTestimonials && (
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="interactive-card bg-white/95 dark:bg-card/40 p-8 space-y-6 group">
              <Quote className="h-8 w-8 text-primary/20 group-hover:text-primary transition-colors duration-500" />
              <p className="text-base text-muted-foreground italic leading-relaxed font-medium">&quot;{testimonial.quote}&quot;</p>
              <div className="pt-4 border-t border-primary/10">
                <p className="text-sm font-black uppercase tracking-tight text-foreground group-hover:text-primary transition-colors">{testimonial.name}</p>
                <p className="text-[10px] font-black uppercase tracking-[0.25em] text-muted-foreground/60">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

