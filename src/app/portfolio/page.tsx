import { Card, CardContent } from "@/components/ui/card";
import { PortfolioGrid } from "@/components/portfolio/portfolio-grid";

export default function PortfolioPage(): React.ReactElement {
  return (
    <section className="container animate-softFade py-12 md:py-16">
      <div className="section-shell space-y-10">
        <div className="space-y-4 text-center">
        <p className="text-sm uppercase tracking-[0.4em] text-secondary font-[var(--font-poppins)]">
          Portfolio
        </p>
        <h1 className="text-3xl font-bold md:text-5xl">
          Projects that combine design, data, and domain expertise
        </h1>
        <p className="mx-auto max-w-3xl text-muted-foreground md:text-lg">
          Proof points from wellness ecosystems and cognitive care to enterprise audit, supply-chain quality, financial analytics, and
          industrial operations.
        </p>
      </div>
      <Card className="bg-card">
        <CardContent className="space-y-4 px-6 py-6 text-center">
          <p className="text-lg font-semibold">
            Our portfolio demonstrates how intelligent engineering drives measurable growth.
          </p>
          <p className="text-sm text-muted-foreground">
            Every project reflects collaboration, innovation, and an obsession with outcomes—spanning industries like healthcare,
            finance, manufacturing, and energy. Filter by domain, platform, or region to find relevant proof points.
          </p>
        </CardContent>
      </Card>
      <Card className="bg-card">
        <CardContent className="space-y-2 px-6 py-6 text-center">
          <p className="text-sm font-semibold text-primary">Why some details are anonymised</p>
          <p className="text-sm text-muted-foreground">
            Client names, logos, and select metrics are anonymised to honor NDA obligations while still sharing the core challenges,
            architecture decisions, and measurable outcomes.
          </p>
        </CardContent>
      </Card>
      <PortfolioGrid />
      </div>
    </section>
  );
}
