import Link from "next/link";
import { Suspense } from "react";
import {
  Sparkles,
  Users,
  Briefcase,
  Lightbulb,
  Globe,
  Heart,
  GraduationCap,
  Mail,
  ArrowRight,
  Workflow,
  Zap,
  Quote,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SectionHeader } from "@/components/ui/section-header";
import { Stepper } from "@/components/ui/stepper";
import { CareersForm } from "@/components/forms/careers-form";
import { RolesGrid } from "@/components/careers/roles-grid";
import { siteContent } from "@/content/site";

export const metadata = {
  title: "Careers | Spire Technosoft",
  description: "Work with innovators who engineer impact. Join our delivery pods and help scale digital systems for global enterprises.",
  openGraph: {
    title: "Careers | Spire Technosoft",
    description: "Work with innovators who engineer impact. Join our delivery pods and help scale digital systems for global enterprises.",
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
  Lightbulb,
  Workflow,
  Zap,
};

export default function CareersPage(): React.ReactElement {
  const { careers } = siteContent;

  return (
    <div className="flex flex-1 flex-col bg-background">
      {/* Hero */}
      <section className="container animate-softFade py-20">
        <div className="section-shell w-full space-y-12 py-10 text-center">
          <div className="relative z-10 space-y-6">
            <Badge variant="soft">{careers.hero.eyebrow}</Badge>
            <h1 className="display-hero text-foreground">{careers.hero.title}</h1>
            <p className="mx-auto max-w-3xl body-lg text-muted-foreground">{careers.hero.description}</p>
            <div className="flex justify-center pt-6">
              <Button asChild size="xl">
                <Link href={careers.hero.cta.href} className="flex items-center gap-3">
                  {careers.hero.cta.label} <ArrowRight className="h-5 w-5 icon-inverse" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 pt-10 text-left">
            {careers.cultureHighlights.map((item) => {
              const Icon = iconMap[item.icon as keyof typeof iconMap];
              return (
                <div key={item.text} className="surface-card rounded-3xl p-6 shadow-soft">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon className="h-6 w-6 icon-accent" />
                  </div>
                  <p className="text-sm font-semibold text-muted-foreground">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section className="container py-20">
        <div className="space-y-10 text-left">
          <SectionHeader
            align="left"
            eyebrow={careers.rolesIntro.eyebrow}
            title={careers.rolesIntro.title}
            description={careers.rolesIntro.description}
          />
          <RolesGrid roles={careers.roles} />
        </div>
      </section>

      {/* Hiring Process */}
      <section className="container py-20">
        <div className="rounded-[3rem] bg-surface p-10 shadow-float text-center">
          <SectionHeader
            eyebrow={careers.roadmap.eyebrow}
            title={careers.roadmap.title}
            description={careers.roadmap.description}
          />
          <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-4 text-left">
            {careers.hiringProcess.map((step, index) => {
              const Icon = [Lightbulb, Workflow, Zap, Users][index % 4];
              return (
                <div key={step.title} className="space-y-4">
                  <div className="relative">
                    <div className="h-20 w-20 rounded-3xl bg-primary/5 flex items-center justify-center text-primary">
                      <Icon className="h-10 w-10 icon-accent" />
                    </div>
                    <div className="absolute -top-3 -right-3 h-8 w-8 rounded-full bg-white border border-border/40 flex items-center justify-center text-xs font-semibold text-primary">
                      0{index + 1}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{step.text}</p>
                    <div className="mt-3 flex flex-col gap-1 text-xs uppercase tracking-[0.25em] text-muted-foreground">
                      <span>Time: {step.time}</span>
                      <span>Prepare: {step.prep}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits & Growth */}
      <section className="container py-20">
        <div className="grid gap-12 lg:grid-cols-[1.1fr,0.9fr] items-center text-left">
          <div className="space-y-8">
            <SectionHeader align="left" title={careers.benefitsIntro.title} description={careers.benefitsIntro.description} />
            <div className="grid gap-4">
              {careers.benefits.map((benefit) => {
                const Icon = iconMap[benefit.icon as keyof typeof iconMap];
                return (
                  <div key={benefit.text} className="surface-card rounded-2xl p-5 shadow-soft flex items-center gap-4">
                    <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                      <Icon className="h-6 w-6 icon-accent" />
                    </div>
                    <p className="text-sm font-semibold text-foreground">{benefit.text}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="surface-card rounded-3xl p-8 shadow-float">
            <Quote className="h-10 w-10 icon-muted opacity-50" />
            <p className="mt-6 text-lg italic text-muted-foreground">"{careers.employeeStory.quote}"</p>
            <div className="mt-6 flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary to-secondary" />
              <div>
                <p className="text-sm font-semibold text-foreground">{careers.employeeStory.name}</p>
                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-primary">{careers.employeeStory.area}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Apply Form */}
      <section id="apply" className="container py-20">
        <div className="grid gap-12 lg:grid-cols-[1.5fr,1fr] items-start text-left">
          <div className="surface-card rounded-[3rem] p-8 shadow-float">
            <div className="space-y-2">
              <h2 className="heading-2 text-secondary">{careers.applyIntro.title}</h2>
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
            <div className="surface-card rounded-3xl p-6 shadow-soft">
              <h3 className="text-lg font-semibold text-foreground">Intake readiness</h3>
              <div className="mt-4 space-y-3 text-sm text-muted-foreground">
                {careers.applyChecklist.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-primary" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="surface-card rounded-3xl p-6 shadow-soft">
              <div className="flex items-center gap-3 text-primary">
                <Mail className="h-6 w-6 icon-accent" />
                <h3 className="text-sm font-semibold uppercase tracking-[0.2em]">Talent pipeline</h3>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">
                Send your details directly to our talent pod at{" "}
                <a href="mailto:careers@spiretechnosoft.com" className="font-semibold text-primary underline underline-offset-4">
                  careers@spiretechnosoft.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="container pb-32">
        <div className="cta-band rounded-[3rem] px-8 py-24 text-center shadow-float">
          <div className="cta-inner space-y-8 max-w-3xl mx-auto">
            <h2 className="display-1 text-white">{careers.cta.title}</h2>
            <p className="body-lg text-white/80">{careers.cta.description}</p>
            <div className="flex justify-center pt-4">
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
