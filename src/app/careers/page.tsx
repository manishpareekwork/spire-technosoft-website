import Link from "next/link";
import { Suspense } from "react";
import {
  ArrowRight,
  Briefcase,
  Globe,
  GraduationCap,
  Heart,
  ListOrdered,
  Mail,
  Quote,
  Sparkles,
  Users,
  Workflow,
  Zap,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CareersForm } from "@/components/forms/careers-form";
import { RolesGrid } from "@/components/careers/roles-grid";
import { siteContent } from "@/content/site";

export const metadata = {
  title: "Careers | Spire Technosoft",
  description:
    "Join Spire Technosoft to work on thoughtful software products across product design, engineering, and delivery.",
  openGraph: {
    title: "Careers | Spire Technosoft",
    description:
      "Join Spire Technosoft to work on thoughtful software products across product design, engineering, and delivery.",
    images: [{ url: siteContent.seo.defaultOg }],
  },
};

const iconMap = {
  Globe,
  GraduationCap,
  Users,
  Heart,
  Briefcase,
  Sparkles,
  Workflow,
  Zap,
};

export default function CareersPage(): React.ReactElement {
  const { careers } = siteContent;

  return (
    <div className="flex flex-1 flex-col bg-background">
      <section className="container animate-softFade py-16 sm:py-20">
        <div className="space-y-8">
          <div className="max-w-4xl space-y-6">
            <Badge variant="soft" className="w-fit">
              {careers.hero.eyebrow}
            </Badge>
            <h1 className="display-1 text-foreground">{careers.hero.title}</h1>
            <p className="max-w-3xl body-lg text-muted-foreground">{careers.hero.description}</p>
            <Button asChild size="xl">
              <Link href={careers.hero.cta.href} className="flex items-center gap-3">
                {careers.hero.cta.label} <ArrowRight className="h-5 w-5 icon-inverse" />
              </Link>
            </Button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {careers.cultureHighlights.map((item) => {
              const Icon = iconMap[item.icon as keyof typeof iconMap];

              return (
                <div
                  key={item.text}
                  className="rounded-[1.6rem] border border-border/45 bg-white/55 px-5 py-5 backdrop-blur dark:bg-surface/72"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <Icon className="h-4 w-4 icon-accent" />
                    </span>
                    <p className="text-sm font-semibold text-foreground">{item.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container py-16">
        <div className="grid gap-10 lg:grid-cols-[0.3fr,0.7fr] lg:items-start">
          <div className="space-y-4">
            <p className="eyebrow">{careers.rolesIntro.eyebrow}</p>
            <h2 className="heading-2 text-foreground">{careers.rolesIntro.title}</h2>
            <p className="body-md text-muted-foreground">{careers.rolesIntro.description}</p>
          </div>
          <RolesGrid roles={careers.roles} />
        </div>
      </section>

      <section
        className="container py-16"
        aria-labelledby="careers-hiring-roadmap-title"
      >
        <div className="grid gap-10 border-y border-border/55 py-10 lg:grid-cols-[minmax(0,0.34fr)_minmax(0,1fr)] lg:items-start">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10">
                <ListOrdered className="h-5 w-5 text-primary" strokeWidth={2} aria-hidden />
              </span>
              <p className="eyebrow mb-0">{careers.roadmap.eyebrow}</p>
            </div>
            <h2 id="careers-hiring-roadmap-title" className="heading-2 text-foreground">
              {careers.roadmap.title}
            </h2>
            <p className="body-md text-muted-foreground">{careers.roadmap.description}</p>
          </div>

          <ol className="list-none space-y-4 p-0">
            {careers.hiringProcess.map((step, index) => {
              const Icon = [Sparkles, Workflow, Zap, Users][index % 4];

              return (
                <li key={step.title}>
                  <article className="rounded-[1.35rem] border border-border/70 bg-white/70 p-5 shadow-sm backdrop-blur-sm dark:border-border/80 dark:bg-surface/90">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                      <div className="flex shrink-0 items-center gap-3">
                        <span
                          className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/12 text-sm font-bold text-primary"
                          aria-hidden
                        >
                          {index + 1}
                        </span>
                        <span className="flex h-11 w-11 items-center justify-center rounded-full border border-border/60 bg-background/80">
                          <Icon className="h-5 w-5 text-primary" strokeWidth={2} aria-hidden />
                        </span>
                      </div>
                      <div className="min-w-0 flex-1 space-y-2">
                        <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-primary">
                          {step.time}
                        </p>
                        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                          {step.prep}
                        </p>
                      </div>
                    </div>
                    <p className="mt-4 border-t border-border/50 pt-4 text-sm leading-relaxed text-muted-foreground">
                      {step.text}
                    </p>
                  </article>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      <section className="container py-16">
        <div className="grid gap-12 lg:grid-cols-[0.56fr,0.44fr] lg:items-start">
          <div className="space-y-4">
            <p className="eyebrow">Why people stay</p>
            <h2 className="heading-2 text-foreground">{careers.benefitsIntro.title}</h2>
            <p className="body-md text-muted-foreground">{careers.benefitsIntro.description}</p>

            <div className="space-y-2">
              {careers.benefits.map((benefit) => {
                const Icon = iconMap[benefit.icon as keyof typeof iconMap];

                return (
                  <div
                    key={benefit.text}
                    className="grid gap-4 border-t border-border/55 py-5 sm:grid-cols-[0.08fr,0.92fr]"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <Icon className="h-4 w-4 icon-accent" />
                    </span>
                    <p className="text-sm text-muted-foreground">{benefit.text}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="rounded-[2rem] border border-border/45 bg-white/55 px-6 py-6 backdrop-blur dark:bg-surface/72">
            <Quote className="h-8 w-8 icon-accent opacity-60" />
            <p className="mt-5 text-2xl font-semibold leading-snug text-foreground">
              &quot;{careers.employeeStory.quote}&quot;
            </p>
            <div className="mt-6 border-t border-border/45 pt-4">
              <p className="text-sm font-semibold text-foreground">{careers.employeeStory.name}</p>
              <p className="text-[0.68rem] uppercase tracking-[0.18em] text-muted-foreground">
                {careers.employeeStory.area}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="apply" className="container py-16">
        <div className="grid gap-10 lg:grid-cols-[0.68fr,0.32fr] lg:items-start">
          <div className="rounded-[2.4rem] border border-border/45 bg-white/60 px-6 py-7 shadow-soft backdrop-blur dark:bg-surface/72">
            <div className="space-y-2">
              <h2 className="heading-2 text-foreground">{careers.applyIntro.title}</h2>
              <p className="text-sm text-muted-foreground">{careers.applyIntro.description}</p>
            </div>
            <div className="mt-8">
              <Suspense
                fallback={
                  <div className="rounded-2xl bg-surface-2 p-6 text-sm text-muted-foreground">
                    Loading application form...
                  </div>
                }
              >
                <CareersForm roles={careers.roles.map((role) => role.title)} />
              </Suspense>
            </div>
          </div>

          <div className="space-y-6">
            <div className="border-t border-border/55 pt-5">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-primary">
                Before you apply
              </p>
              <div className="mt-4 space-y-3">
                {careers.applyChecklist.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
                    <p className="text-sm text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[1.8rem] border border-border/45 bg-white/55 px-5 py-5 backdrop-blur dark:bg-surface/72">
              <div className="flex items-center gap-3 text-primary">
                <Mail className="h-5 w-5 icon-accent" />
                <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-foreground">
                  Talent inbox
                </h3>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">
                Prefer email first? Send your details to{" "}
                <a
                  href="mailto:careers@spiretechnosoft.com"
                  className="font-semibold text-primary underline underline-offset-4"
                >
                  careers@spiretechnosoft.com
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container pb-28 pt-8">
        <div className="cta-band rounded-[2.7rem] px-8 py-16 text-center shadow-float">
          <div className="cta-inner mx-auto max-w-3xl space-y-8">
            <h2 className="display-1 text-white">{careers.cta.title}</h2>
            <p className="body-lg text-white/80">{careers.cta.description}</p>
            <div className="flex justify-center pt-2">
              <Button asChild size="xl" className="bg-white text-primary hover:bg-white/95">
                <a href={careers.cta.href} className="flex items-center gap-3">
                  {careers.cta.label} <ArrowRight className="h-5 w-5 icon-accent" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
