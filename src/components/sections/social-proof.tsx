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
          <div key={callout.metric} className="surface-card rounded-3xl p-8 shadow-soft space-y-4">
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-secondary">Business Impact</p>
            <p className="text-3xl font-semibold text-primary">{callout.metric}</p>
            <p className="text-base text-muted-foreground font-medium leading-relaxed">{callout.detail}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap items-center justify-center gap-4">
        {clientLogos.map((client) => (
          <div key={client.name} className="surface-card flex min-h-[80px] min-w-[200px] flex-col items-center justify-center px-6 text-center shadow-soft">
            <span className="text-base font-semibold tracking-tight text-primary">{client.name}</span>
            <span className="text-[10px] uppercase tracking-[0.3em] font-semibold text-muted-foreground/50">{client.tagline}</span>
          </div>
        ))}
      </div>

      {showTestimonials && (
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="surface-card rounded-3xl p-6 shadow-soft space-y-6">
              <Quote className="h-8 w-8 text-primary/20" />
              <p className="text-base text-muted-foreground italic leading-relaxed font-medium">&quot;{testimonial.quote}&quot;</p>
              <div className="pt-4 border-t border-primary/10">
                <p className="text-sm font-black uppercase tracking-tight text-foreground">{testimonial.name}</p>
                <p className="text-[10px] font-black uppercase tracking-[0.25em] text-muted-foreground/60">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
