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
    <div className={cn("space-y-10", className)}>
      {(title || description) && (
        <div className="space-y-4 text-center">
          {title && (
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-primary">
              {title}
            </p>
          )}
          {description && (
            <p className="mx-auto max-w-2xl text-base text-muted-foreground">
              {description}
            </p>
          )}
        </div>
      )}

      <div className="grid gap-6 border-y border-border/55 py-8 md:grid-cols-2">
        {resultsCallouts.map((callout) => (
          <div key={callout.metric} className="space-y-4">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Business impact
            </p>
            <p className="text-3xl font-semibold text-foreground">{callout.metric}</p>
            <p className="text-sm leading-relaxed text-muted-foreground">{callout.detail}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
        {clientLogos.map((client) => (
          <div key={client.name} className="text-center">
            <span className="block text-sm font-medium tracking-tight text-foreground">{client.name}</span>
            <span className="block text-[0.62rem] uppercase tracking-[0.18em] text-muted-foreground">
              {client.tagline}
            </span>
          </div>
        ))}
      </div>

      {showTestimonials && (
        <div className="grid gap-8 border-t border-border/55 pt-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="space-y-5">
              <Quote className="h-8 w-8 icon-muted opacity-40" />
              <p className="text-sm italic leading-relaxed text-muted-foreground">
                &quot;{testimonial.quote}&quot;
              </p>
              <div className="border-t border-border/55 pt-4">
                <p className="text-sm font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-[0.66rem] uppercase tracking-[0.16em] text-muted-foreground">
                  {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
