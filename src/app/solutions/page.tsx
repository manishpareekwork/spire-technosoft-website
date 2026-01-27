import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SocialProofBand } from "@/components/sections/social-proof";
import { ResourceDownloads } from "@/components/sections/resource-downloads";
import { differentiators } from "@/data/differentiators";
import { industryProfiles } from "@/data/industries";
import { solutionDetails } from "@/data/solutions";

export default function SolutionsPage(): React.ReactElement {
  return (
    <section className="container animate-softFade py-12 md:py-16">
      <div className="section-shell space-y-12">
        <div className="space-y-4 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-secondary font-[var(--font-poppins)]">Solutions</p>
          <h1 className="text-3xl font-bold md:text-5xl">Modular platforms built for regulated, data-rich environments</h1>
          <p className="mx-auto max-w-3xl text-muted-foreground md:text-lg">
            Platform Pods, Experience Ops, and Intelligence Built-in sit at the core of every engagement. Each solution area delivers
            secure, measurable outcomes in 2-6-12 week increments.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {differentiators.map((item) => (
              <span key={item.title} className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                {item.title}
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold md:text-3xl">Solution areas</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {solutionDetails.map((solution) => (
              <Card key={solution.slug} className="flex flex-col overflow-hidden">
                <div
                  className="h-44 w-full"
                  style={{
                    backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.2), rgba(0,0,0,0.65)), url(${solution.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <CardHeader className="space-y-2">
                  <CardTitle className="text-xl">{solution.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">{solution.summary}</p>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col gap-3">
                  <div className="flex flex-wrap gap-2">
                    {solution.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-primary/5 px-3 py-1 text-xs font-semibold text-primary">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">{solution.intro}</p>
                  <Link href={`/solutions/${solution.slug}`} className="mt-auto inline-flex items-center text-sm font-semibold text-primary">
                    Explore solution
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold md:text-3xl">Industry focus</h2>
          <p className="text-sm text-muted-foreground">
            Industry pages detail regulatory context, typical programs, and relevant proof points for executive stakeholders.
          </p>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {industryProfiles.map((industry) => (
              <Card key={industry.slug} className="flex flex-col overflow-hidden">
                <div
                  className="h-32 w-full"
                  style={{
                    backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.1), rgba(0,0,0,0.55)), url(${industry.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <CardHeader>
                  <CardTitle className="text-lg">{industry.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">{industry.summary}</p>
                </CardHeader>
                <CardContent className="pt-0">
                  <Link
                    href={`/industries/${industry.slug}`}
                    className="inline-flex items-center text-sm font-semibold text-primary"
                  >
                    View industry page
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <SocialProofBand
          title="Enterprise credibility"
          description="Repeatable results across audit, healthcare, supply chain, and industrial programs."
          variant="compact"
        />

        <ResourceDownloads
          title="Shareable sales assets"
          description="Download the one-pager, Platform Pods overview, and Innovation Lab brochure to support internal alignment."
        />
      </div>
    </section>
  );
}
