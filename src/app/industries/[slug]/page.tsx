import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { industryProfiles, getIndustryProfile } from "@/data/industries";

type IndustryPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return industryProfiles.map((industry) => ({ slug: industry.slug }));
}

export function generateMetadata({ params }: IndustryPageProps): Metadata {
  const industry = getIndustryProfile(params.slug);
  if (!industry) {
    return {
      title: "Industry | Spire Technosoft",
    };
  }

  return {
    title: `${industry.title} | Spire Technosoft Industries`,
    description: industry.summary,
  };
}

export default function IndustryDetailPage({ params }: IndustryPageProps): React.ReactElement {
  const industry = getIndustryProfile(params.slug);

  if (!industry) {
    notFound();
  }

  return (
    <section className="container animate-softFade py-12 md:py-16">
      <div className="section-shell space-y-10">
        <div className="flex items-center gap-3 text-sm text-muted-foreground">
          <ArrowLeft className="h-4 w-4" />
          <Link href="/industries" className="font-semibold text-primary">
            Back to Industries
          </Link>
        </div>

        <div className="grid gap-8 lg:grid-cols-[3fr,2fr]">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.4em] text-secondary font-[var(--font-poppins)]">Industry</p>
            <h1 className="text-3xl font-bold md:text-5xl">{industry.title}</h1>
            <p className="text-lg text-muted-foreground">{industry.summary}</p>
          </div>
          <div
            className="min-h-[260px] rounded-3xl"
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.1), rgba(0,0,0,0.65)), url(${industry.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="bg-card">
            <CardHeader>
              <CardTitle>Focus areas</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {industry.focusAreas.map((item) => (
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
              <CardTitle>Typical programs</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {industry.typicalPrograms.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="bg-card">
            <CardHeader>
              <CardTitle>Compliance considerations</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {industry.compliance.map((item) => (
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
              <CardTitle>Success metrics examples</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {industry.successMetrics.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-card">
          <CardHeader>
            <CardTitle>Relevant case studies</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {industry.caseStudies.map((caseStudy) => (
              <Link key={caseStudy.href} href={caseStudy.href} className="flex items-center justify-between text-sm font-semibold text-primary">
                {caseStudy.title}
                <ArrowRight className="h-4 w-4" />
              </Link>
            ))}
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-primary/10 to-secondary/30">
          <CardContent className="flex flex-col gap-4 px-6 py-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.4em] text-secondary font-[var(--font-poppins)]">Next Step</p>
              <p className="text-lg font-semibold text-foreground">Discuss an industry-specific roadmap with our pods.</p>
              <p className="text-sm text-muted-foreground">We align on compliance and delivery milestones during a discovery call.</p>
            </div>
            <Button asChild size="lg" className="px-6">
              <Link href="/contact">
                Book a discovery call
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
