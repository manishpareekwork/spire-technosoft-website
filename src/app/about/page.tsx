import Link from "next/link";
import {
  ArrowRight,
  Eye,
  Leaf,
  Lightbulb,
  Quote,
  ShieldCheck,
  Target,
  Trophy,
  Users,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { siteContent } from "@/content/site";

export const metadata = {
  title: "About | Spire Technosoft",
  description:
    "Spire Technosoft is a product studio focused on strategy, design, and engineering for custom software and modern digital products.",
  openGraph: {
    title: "About | Spire Technosoft",
    description:
      "Spire Technosoft is a product studio focused on strategy, design, and engineering for custom software and modern digital products.",
    images: [{ url: siteContent.seo.defaultOg }],
  },
};

const valueIcons = [ShieldCheck, Lightbulb, Users, Leaf, Trophy];

export default function AboutPage() {
  const { about } = siteContent;

  return (
    <div className="flex flex-1 flex-col">
      <section className="container animate-softFade py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[0.58fr,0.42fr] lg:items-start">
          <div className="space-y-6">
            <Badge variant="soft" className="w-fit">
              {about.hero.eyebrow}
            </Badge>
            <h1 className="display-1 text-foreground">{about.hero.title}</h1>
            <p className="max-w-2xl body-lg text-muted-foreground">{about.hero.description}</p>
          </div>

          <div className="grid gap-4">
            <div className="compact-tile rounded-[2rem] px-6 py-6 shadow-soft">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10">
                  <Target className="h-4 w-4 icon-accent" />
                </span>
                <h2 className="text-xl font-semibold text-foreground">{about.mission.title}</h2>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">{about.mission.description}</p>
            </div>

            <div className="compact-tile rounded-[2rem] px-6 py-6 shadow-soft">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10">
                  <Eye className="h-4 w-4 icon-accent" />
                </span>
                <h2 className="text-xl font-semibold text-foreground">{about.vision.title}</h2>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">{about.vision.description}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-16">
        <div className="grid gap-10 lg:grid-cols-[0.34fr,0.66fr] lg:items-start">
          <div className="space-y-4">
            <p className="eyebrow">Values</p>
            <h2 className="heading-2 text-foreground">{about.valuesIntro.title}</h2>
            <p className="body-md text-muted-foreground">{about.valuesIntro.description}</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {about.values.map((value, index) => {
              const Icon = valueIcons[index % valueIcons.length];

              return (
                <div
                  key={value.name}
                  className="compact-tile grid gap-4 rounded-[1.7rem] px-5 py-5 sm:grid-cols-[40px,1fr]"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <Icon className="h-4 w-4 icon-accent" />
                  </span>
                  <div className="space-y-2">
                    <p className="text-base font-semibold text-foreground">{value.name}</p>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container py-16">
        <div className="section-anchor rounded-[2.4rem] px-6 py-8 sm:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.42fr,0.58fr] lg:items-start">
            <div className="space-y-4">
              <p className="eyebrow">Why teams choose us</p>
              <h2 className="heading-2 text-foreground">{about.proof.title}</h2>
              <p className="body-md text-muted-foreground">{about.proof.description}</p>
            </div>

            <blockquote className="compact-tile space-y-4 rounded-[2rem] px-6 py-6 shadow-soft">
              <Quote className="h-8 w-8 icon-accent opacity-60" />
              <p className="text-xl font-semibold leading-snug text-foreground">
                &quot;{about.testimonial.quote}&quot;
              </p>
              <div>
                <p className="text-sm font-semibold text-foreground">{about.testimonial.role}</p>
                <p className="text-[0.68rem] uppercase tracking-[0.18em] text-muted-foreground">
                  {about.testimonial.label}
                </p>
              </div>
            </blockquote>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {about.proof.metrics.map((metric) => (
              <div key={metric.label} className="compact-tile rounded-[1.5rem] px-4 py-4 shadow-soft">
                <p className="text-3xl font-semibold text-foreground">{metric.value}</p>
                <p className="text-[0.68rem] uppercase tracking-[0.18em] text-muted-foreground">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {about.proof.capabilities.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <span className="mt-2 h-2.5 w-2.5 rounded-full bg-primary" />
                <p className="text-sm text-muted-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container pb-24 pt-8">
        <div className="cta-band rounded-[2.7rem] px-8 py-16 text-center shadow-float">
          <div className="cta-inner mx-auto max-w-4xl space-y-8">
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
