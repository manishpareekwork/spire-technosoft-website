import Link from "next/link";
import {
  ShieldCheck,
  Lightbulb,
  Users,
  Leaf,
  Trophy,
  Target,
  Eye,
  Quote,
  ArrowRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/section-header";
import { Stat } from "@/components/ui/stat";
import { Badge } from "@/components/ui/badge";
import { siteContent } from "@/content/site";

export const metadata = {
  title: "About | Spire Technosoft",
  description:
    "Product partners turning technology into measurable impact through innovation, intelligence, and collaboration.",
  openGraph: {
    title: "About | Spire Technosoft",
    description:
      "Product partners turning technology into measurable impact through innovation, intelligence, and collaboration.",
    images: [{ url: siteContent.seo.defaultOg }],
  },
};

const valueIcons = [ShieldCheck, Lightbulb, Users, Leaf, Trophy];

export default function AboutPage() {
  const { about } = siteContent;

  return (
    <div className="flex flex-1 flex-col">
      {/* Hero Section */}
      <section className="container animate-softFade py-20">
        <div className="section-shell w-full space-y-12 py-10 text-center">
          <div className="relative z-10 space-y-6">
            <Badge variant="soft">{about.hero.eyebrow}</Badge>
            <h1 className="display-hero text-foreground">{about.hero.title}</h1>
            <p className="mx-auto max-w-3xl body-lg text-muted-foreground">{about.hero.description}</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 text-left">
            <div className="surface-card rounded-3xl p-8 shadow-soft">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                  <Target className="h-6 w-6 icon-accent" />
                </div>
                <h2 className="text-2xl font-semibold text-foreground">{about.mission.title}</h2>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">{about.mission.description}</p>
            </div>

            <div className="surface-card rounded-3xl p-8 shadow-soft">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                  <Eye className="h-6 w-6 icon-accent" />
                </div>
                <h2 className="text-2xl font-semibold text-foreground">{about.vision.title}</h2>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">{about.vision.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="container py-20">
        <div className="space-y-12">
          <SectionHeader
            title={about.valuesIntro.title}
            description={about.valuesIntro.description}
            eyebrow="Values"
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {about.values.map((value, index) => {
              const Icon = valueIcons[index % valueIcons.length];
              return (
                <div key={value.name} className="surface-card rounded-3xl p-6 shadow-soft">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                      <Icon className="h-6 w-6 icon-accent" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">{value.name}</h3>
                  </div>
                  <p className="mt-4 text-sm text-muted-foreground">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Proof Grid + Testimonial */}
      <section className="container py-20">
        <div className="grid gap-10 lg:grid-cols-[1.2fr,0.8fr] items-start">
          <div className="space-y-8">
            <SectionHeader
              align="left"
              eyebrow="Proof"
              title={about.proof.title}
              description={about.proof.description}
            />
            <div className="grid gap-4 sm:grid-cols-2">
              {about.proof.metrics.map((metric) => (
                <Stat key={metric.label} label={metric.label} value={metric.value} />
              ))}
            </div>
            <div className="surface-card rounded-3xl p-6 shadow-soft">
              <h3 className="text-lg font-semibold text-foreground">Capabilities that accelerate outcomes</h3>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                {about.proof.capabilities.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="surface-card rounded-3xl p-8 shadow-float">
            <Quote className="h-10 w-10 icon-muted opacity-50" />
            <p className="mt-6 text-lg italic text-muted-foreground">"{about.testimonial.quote}"</p>
            <div className="mt-6 border-t border-border/60 pt-4">
              <p className="text-sm font-semibold text-foreground">{about.testimonial.role}</p>
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">{about.testimonial.label}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="container pb-24">
        <div className="relative overflow-hidden rounded-[3rem] bg-primary px-8 py-20 text-center text-white shadow-float">
          <div className="relative z-10 max-w-4xl mx-auto space-y-8">
            <div className="space-y-3">
              <p className="eyebrow text-white/60">{about.cta.eyebrow}</p>
              <h2 className="display-1 text-white">{about.cta.title}</h2>
              <p className="body-lg text-white/80">{about.cta.description}</p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="xl" className="bg-white text-primary hover:bg-white/95">
                <Link href={about.cta.primaryCta.href} className="flex items-center gap-2">
                  {about.cta.primaryCta.label} <ArrowRight className="h-5 w-5 icon-accent" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="xl" className="border-white/40 text-white hover:bg-white/10">
                <Link href={about.cta.secondaryCta.href}>{about.cta.secondaryCta.label}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
