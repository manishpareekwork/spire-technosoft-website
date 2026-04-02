import {
  Calendar,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";

import { ContactForm } from "@/components/forms/contact-form";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { siteContent } from "@/content/site";

export const metadata = {
  title: "Contact | Spire Technosoft",
  description:
    "Talk to Spire Technosoft about custom software, product design, mobile apps, and AI-assisted workflows. Book a free consultation or send a brief.",
  openGraph: {
    title: "Contact | Spire Technosoft",
    description:
      "Talk to Spire Technosoft about custom software, product design, mobile apps, and AI-assisted workflows. Book a free consultation or send a brief.",
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
  { label: "Location", value: "India | Global delivery", href: "https://maps.google.com/?q=Gurugram,India", icon: MapPin },
];

export default function ContactPage() {
  const { contact } = siteContent;

  return (
    <div className="flex flex-1 flex-col bg-background">
      <section className="innovation-hero relative overflow-hidden pb-16 pt-14 sm:pt-20 lg:pb-20 lg:pt-28">
        <div className="innovation-mesh innovation-mesh-one" />
        <div className="innovation-mesh innovation-mesh-two" />
        <div className="innovation-mesh innovation-mesh-three" />
        <div className="innovation-grid pointer-events-none absolute inset-0 z-0 opacity-25" />

        <div className="relative z-10 container max-w-[1440px] grid gap-10 lg:grid-cols-[0.62fr,0.38fr] lg:items-start">
          <div className="max-w-[42rem] space-y-6 text-slate-50">
            <Badge variant="soft" className="w-fit border-white/20 bg-white/10 text-slate-50">
              {contact.hero.eyebrow}
            </Badge>
            <p className="text-[0.8rem] font-semibold uppercase tracking-[0.08em] text-blue-100/70">
              Direct contact, structured discovery, and a cleaner project brief from the start
            </p>
            <h1 className="innovation-display max-w-[18ch] sm:max-w-[16ch] lg:max-w-[15ch] text-slate-50">
              {contact.hero.title}
            </h1>
            <p className="max-w-3xl text-lg leading-relaxed text-slate-300">{contact.hero.description}</p>
            <Button
              asChild
              size="xl"
              className="bg-gradient-brand text-white shadow-brand-glow-sm"
            >
              <a href={contact.hero.cta.href} target="_blank" rel="noreferrer" className="flex items-center gap-3">
                {contact.hero.cta.label}
                <Calendar className="h-5 w-5" />
              </a>
            </Button>
          </div>

          <div className="innovation-panel-dark space-y-5 rounded-[1.2rem] px-6 py-6">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.08em] text-blue-100/64">
              Before we talk
            </p>
            <div className="space-y-4">
              {[
                "What are you trying to build or improve?",
                "Who needs to use it every day?",
                "What needs to be true after the first release?",
              ].map((item) => (
                <div key={item} className="rounded-[1rem] border border-white/10 bg-white/[0.06] px-4 py-4">
                  <p className="text-sm leading-7 text-slate-300">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="inquiry" className="container max-w-[1440px] pb-24 pt-8 md:pt-12">
        <div className="grid gap-8 md:gap-10 lg:grid-cols-[0.64fr,0.36fr] lg:items-start">
          <div className="section-anchor rounded-[1.4rem] px-6 py-8 md:px-8 md:py-10">
            <div className="space-y-5">
              <Badge variant="soft" className="w-fit">
                {contact.formIntro.eyebrow}
              </Badge>
              <div className="space-y-3">
                <h2 className="heading-2 max-w-2xl text-foreground">{contact.formIntro.title}</h2>
                <p className="max-w-3xl text-sm leading-7 text-muted-foreground">
                  {contact.formIntro.description}
                </p>
              </div>
            </div>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>

          <div className="space-y-6 lg:sticky lg:top-28">
            <div className="innovation-panel space-y-4 rounded-[1rem] px-6 py-6">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.08em] text-primary">
                Fastest route
              </p>
              <h2 className="text-2xl font-semibold text-foreground">{contact.fastRoute.title}</h2>
              <p className="text-sm leading-7 text-muted-foreground">{contact.fastRoute.description}</p>
              <Button
                asChild
                size="lg"
                className="w-full bg-gradient-brand text-white shadow-brand-glow-sm"
              >
                <a href={contact.fastRoute.cta.href} target="_blank" rel="noreferrer">
                  {contact.fastRoute.cta.label}
                </a>
              </Button>
            </div>

            <div className="innovation-panel space-y-4 rounded-[1rem] px-6 py-6">
              {contactPoints.map((point) => (
                <a key={point.label} href={point.href} className="grid gap-2 sm:grid-cols-[0.22fr,0.78fr]">
                  <div className="flex items-center gap-2.5">
                    <point.icon className="h-4 w-4 shrink-0 icon-accent" />
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.08em] text-primary">
                      {point.label}
                    </p>
                  </div>
                  <p className="text-sm font-semibold text-foreground">{point.value}</p>
                </a>
              ))}
            </div>

            <div className="innovation-panel space-y-5 rounded-[1rem] px-6 py-6">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.08em] text-primary">
                What happens next
              </p>
              <div className="space-y-4">
                {contact.nextSteps.steps.map((step, index) => (
                  <div key={step.title} className="grid gap-3 sm:grid-cols-[0.16fr,0.84fr]">
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
                      0{index + 1}
                    </p>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{step.title}</p>
                      <p className="mt-1 text-sm leading-7 text-muted-foreground">{step.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-[1rem] shadow-[inset_0_0_0_1px_hsla(var(--border),0.16),0_18px_40px_-30px_rgba(9,26,45,0.14)]">
              <iframe
                title="Spire Technosoft location"
                src="https://www.google.com/maps?q=Gurugram%2C%20India&z=10&output=embed"
                className="h-[200px] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="flex gap-3 pt-1">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-white/65 shadow-sm transition-colors hover:bg-primary hover:text-white dark:bg-surface/75"
                  title={link.label}
                >
                  <link.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
