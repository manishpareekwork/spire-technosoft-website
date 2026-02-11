import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Youtube,
  ShieldCheck,
  Calendar,
  Sparkles,
  Layers,
  Zap,
} from "lucide-react";

import { ContactForm } from "@/components/forms/contact-form";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/section-header";
import { Badge } from "@/components/ui/badge";
import { SocialProofBand } from "@/components/sections/social-proof";
import { siteContent } from "@/content/site";

export const metadata = {
  title: "Contact | Spire Technosoft",
  description: "Let's discuss how we can engineer growth together. Book a discovery call or send us a brief.",
  openGraph: {
    title: "Contact | Spire Technosoft",
    description: "Let's discuss how we can engineer growth together. Book a discovery call or send us a brief.",
    images: [{ url: siteContent.seo.defaultOg }],
  },
};

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/spire-technosoft", icon: Linkedin },
  { label: "Twitter", href: "https://twitter.com", icon: Twitter },
  { label: "YouTube", href: "https://youtube.com", icon: Youtube },
];

const contactPoints = [
  { label: "Email", value: "contact@spiretechnosoft.com", href: "mailto:contact@spiretechnosoft.com", icon: Mail },
  { label: "Phone", value: "+91 99100 70933", href: "tel:+919910070933", icon: Phone },
  { label: "Headquarters", value: "India | Global Delivery Presence", href: "#", icon: MapPin },
];

const nextStepIcons = [Sparkles, Zap, Layers];

export default function ContactPage() {
  const { contact } = siteContent;

  return (
    <div className="flex flex-1 flex-col bg-background">
      {/* Hero */}
      <section className="container animate-softFade py-20">
        <div className="section-shell w-full space-y-12 py-10 text-center">
          <div className="relative z-10 space-y-6">
            <Badge variant="soft">{contact.hero.eyebrow}</Badge>
            <h1 className="display-hero text-foreground">{contact.hero.title}</h1>
            <p className="mx-auto max-w-3xl body-lg text-muted-foreground">{contact.hero.description}</p>
            <div className="flex justify-center pt-6">
              <Button asChild size="xl">
                <a href={contact.hero.cta.href} target="_blank" rel="noreferrer" className="flex items-center gap-3">
                  {contact.hero.cta.label} <Calendar className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Routing */}
      <section className="container py-10">
        <SectionHeader title={contact.routing.title} description={contact.routing.description} />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="surface-card rounded-3xl p-8 shadow-soft text-left">
            <h3 className="heading-3 text-foreground">{contact.routing.sessionCard.title}</h3>
            <p className="mt-3 text-sm text-muted-foreground">{contact.routing.sessionCard.description}</p>
            <Button asChild size="lg" className="mt-6">
              <a href={contact.routing.sessionCard.cta.href} target="_blank" rel="noreferrer">
                {contact.routing.sessionCard.cta.label}
              </a>
            </Button>
          </div>
          <div className="surface-card rounded-3xl p-8 shadow-soft text-left">
            <h3 className="heading-3 text-foreground">{contact.routing.inquiryCard.title}</h3>
            <p className="mt-3 text-sm text-muted-foreground">{contact.routing.inquiryCard.description}</p>
            <Button asChild variant="outline" size="lg" className="mt-6">
              <Link href={contact.routing.inquiryCard.cta.href}>{contact.routing.inquiryCard.cta.label}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="container py-20">
        <SectionHeader title={contact.nextSteps.title} description="" />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {contact.nextSteps.steps.map((step, index) => {
            const Icon = nextStepIcons[index % nextStepIcons.length];
            return (
              <div key={step.title} className="surface-card rounded-3xl p-6 shadow-soft text-left">
                <div className="flex items-center justify-between">
                  <div className="h-12 w-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-muted-foreground">Step 0{index + 1}</span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{step.detail}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Contact + Form */}
      <section id="inquiry" className="container animate-softFade py-20">
        <div className="grid gap-16 lg:grid-cols-[1fr,1.2fr] items-start text-left">
          <div className="space-y-12">
            <div className="space-y-6">
              <SectionHeader align="left" title="Direct access" description="Reach the core delivery pod in a single step." />
              <div className="grid gap-6">
                {contactPoints.map((point) => (
                  <a
                    key={point.label}
                    href={point.href}
                    className="surface-card flex items-center gap-6 rounded-2xl p-5 shadow-soft"
                  >
                    <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                      <point.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">{point.label}</p>
                      <p className="text-lg font-semibold text-foreground">{point.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="surface-card rounded-3xl p-6 shadow-soft">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">Global presence</h3>
                <div className="flex gap-3">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="h-12 w-12 rounded-2xl bg-primary/5 text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-all border border-primary/10"
                      title={link.label}
                    >
                      <link.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
              <div className="pt-6 border-t border-border/60 mt-6 space-y-3">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="h-5 w-5 text-primary" />
                  <p className="text-sm font-semibold">Secure intake process</p>
                </div>
                <p className="text-sm text-muted-foreground">
                  Your roadmap and technical details are handled under strict confidentiality from the first interaction.
                </p>
              </div>
            </div>
          </div>

          <div className="surface-card rounded-[3rem] p-8 shadow-float border border-border/60">
            <div className="space-y-4">
              <Badge variant="soft">{contact.formIntro.eyebrow}</Badge>
              <h2 className="heading-2 text-secondary">{contact.formIntro.title}</h2>
              <p className="text-sm text-muted-foreground">{contact.formIntro.description}</p>
            </div>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="container py-20">
        <SocialProofBand
          title="Trusted partners"
          description="Proof of outcomes across regulated programs, global delivery pods, and innovation sprints."
          variant="compact"
        />
      </section>

      {/* CTA Footer */}
      <section className="container pb-32">
        <div className="relative overflow-hidden rounded-[3rem] bg-primary px-8 py-24 text-center text-white shadow-float">
          <div className="relative z-10 space-y-8 max-w-2xl mx-auto">
            <h2 className="display-1 text-white">{contact.fastRoute.title}</h2>
            <p className="body-lg text-white/80">{contact.fastRoute.description}</p>
            <div className="flex justify-center pt-4">
              <Button asChild size="xl" className="bg-white text-primary hover:bg-white/95">
                <a href={contact.fastRoute.cta.href} target="_blank" rel="noreferrer" className="flex items-center gap-3">
                  {contact.fastRoute.cta.label}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
