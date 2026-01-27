import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { solutionDetails, getSolutionDetail } from "@/data/solutions";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SocialProofBand } from "@/components/sections/social-proof";

type SolutionPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return solutionDetails.map((solution) => ({ slug: solution.slug }));
}

export function generateMetadata({ params }: SolutionPageProps): Metadata {
  const solution = getSolutionDetail(params.slug);
  if (!solution) {
    return {
      title: "Solution | Spire Technosoft",
    };
  }

  return {
    title: `${solution.title} | Spire Technosoft Solutions`,
    description: solution.summary,
  };
}

export default function SolutionDetailPage({ params }: SolutionPageProps): React.ReactElement {
  const solution = getSolutionDetail(params.slug);

  if (!solution) {
    notFound();
  }

  return (
    <section className="container animate-softFade py-12 md:py-16">
      <div className="section-shell space-y-10">
        <div className="flex items-center gap-3 text-sm text-muted-foreground">
          <ArrowLeft className="h-4 w-4" />
          <Link href="/solutions" className="font-semibold text-primary">
            Back to Solutions
          </Link>
        </div>

        <div className="grid gap-8 lg:grid-cols-[3fr,2fr]">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.4em] text-secondary font-[var(--font-poppins)]">Solution</p>
            <h1 className="text-3xl font-bold md:text-5xl">{solution.title}</h1>
            <p className="text-lg text-muted-foreground">{solution.summary}</p>
            <p className="text-sm text-muted-foreground">{solution.intro}</p>
            <div className="flex flex-wrap gap-2">
              {solution.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div
            className="min-h-[260px] rounded-3xl"
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.1), rgba(0,0,0,0.65)), url(${solution.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="bg-card">
            <CardHeader>
              <CardTitle>Typical problems we solve</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {solution.typicalProblems.map((problem) => (
                  <li key={problem} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                    <span>{problem}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-card">
            <CardHeader>
              <CardTitle>Success metrics we target</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {solution.successMetrics.map((metric) => (
                <div key={metric} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  <span>{metric}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold md:text-3xl">What we deliver in 2-6-12 weeks</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {solution.deliveryPlan.map((phase) => (
              <Card key={phase.phase} className="bg-card">
                <CardContent className="space-y-3 px-6 py-5">
                  <p className="text-xs uppercase tracking-[0.3em] text-secondary font-[var(--font-poppins)]">{phase.timeframe}</p>
                  <p className="text-lg font-semibold">{phase.phase}</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {phase.items.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold md:text-3xl">Reference architecture</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {solution.architecture.map((layer) => (
              <Card key={layer.layer} className="bg-card">
                <CardHeader>
                  <CardTitle className="text-lg">{layer.layer}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {layer.items.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="bg-card">
            <CardHeader>
              <CardTitle>Security & compliance posture</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {solution.security.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-card">
            <CardHeader>
              <CardTitle>Related case studies</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {solution.caseStudies.map((caseStudy) => (
                <Link key={caseStudy.href} href={caseStudy.href} className="flex items-center justify-between text-sm font-semibold text-primary">
                  {caseStudy.title}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              ))}
            </CardContent>
          </Card>
        </div>

        <SocialProofBand
          title="Proof across regulated programs"
          description="Trusted delivery for global compliance, healthcare, supply chain, and industrial transformations."
          variant="compact"
        />

        <Card className="bg-gradient-to-r from-primary/10 to-secondary/30">
          <CardContent className="flex flex-col gap-4 px-6 py-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.4em] text-secondary font-[var(--font-poppins)]">Next Step</p>
              <p className="text-lg font-semibold text-foreground">Book a discovery workshop to scope your engagement.</p>
              <p className="text-sm text-muted-foreground">We align pods across strategy, design, and engineering within two weeks.</p>
            </div>
            <Button asChild size="lg" className="px-6">
              <Link href="/contact">
                Start a conversation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
