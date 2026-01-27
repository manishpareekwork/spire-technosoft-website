import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { clientLogos, resultsCallouts, testimonials } from "@/data/social-proof";

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
    <div className={cn("space-y-6", className)}>
      {(title || description) && (
        <div className="space-y-2 text-center">
          {title && <p className="text-sm uppercase tracking-[0.3em] text-secondary font-[var(--font-poppins)]">{title}</p>}
          {description && <p className="text-base text-muted-foreground md:text-lg">{description}</p>}
        </div>
      )}

      <div className="grid gap-4 md:grid-cols-2">
        {resultsCallouts.map((callout) => (
          <Card key={callout.metric} className="bg-card">
            <CardContent className="space-y-2 px-6 py-5">
              <p className="text-sm uppercase tracking-[0.35em] text-secondary font-[var(--font-poppins)]">Results</p>
              <p className="text-2xl font-semibold text-primary">{callout.metric}</p>
              <p className="text-sm text-muted-foreground">{callout.detail}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3">
        {clientLogos.map((client) => (
          <div key={client.name} className="surface-panel flex min-h-[64px] min-w-[160px] flex-col items-center justify-center px-4 text-center">
            <span className="text-base font-semibold tracking-wide text-primary">{client.name}</span>
            <span className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">{client.tagline}</span>
          </div>
        ))}
      </div>

      {showTestimonials && (
        <div className="grid gap-4 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="bg-card">
              <CardContent className="space-y-3 px-6 py-5">
                <p className="text-sm text-muted-foreground">&quot;{testimonial.quote}&quot;</p>
                <div>
                  <p className="text-sm font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">{testimonial.company}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
