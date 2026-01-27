import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SocialProofBand } from "@/components/sections/social-proof";
import { industryProfiles } from "@/data/industries";

export default function IndustriesPage(): React.ReactElement {
  return (
    <section className="container animate-softFade py-12 md:py-16">
      <div className="section-shell space-y-12">
        <div className="space-y-4 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-secondary font-[var(--font-poppins)]">Industries</p>
          <h1 className="text-3xl font-bold md:text-5xl">Industry expertise for regulated, high-impact programs</h1>
          <p className="mx-auto max-w-3xl text-muted-foreground md:text-lg">
            We bring platform engineering, Experience Ops, and intelligence-led workflows to the industries that demand trust, scale, and
            measurable outcomes.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {industryProfiles.map((industry) => (
            <Card key={industry.slug} className="flex flex-col overflow-hidden">
              <div
                className="h-44 w-full"
                style={{
                  backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.2), rgba(0,0,0,0.65)), url(${industry.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <CardHeader className="space-y-2">
                <CardTitle className="text-xl">{industry.title}</CardTitle>
                <p className="text-sm text-muted-foreground">{industry.summary}</p>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col gap-3">
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {industry.focusAreas.slice(0, 3).map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/industries/${industry.slug}`}
                  className="mt-auto inline-flex items-center text-sm font-semibold text-primary"
                >
                  Explore industry
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <SocialProofBand
          title="Enterprise credibility"
          description="Outcome-led partnerships across finance, healthcare, manufacturing, energy, and retail."
          variant="compact"
        />
      </div>
    </section>
  );
}
