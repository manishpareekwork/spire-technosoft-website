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
      <section className="relative overflow-hidden pb-14 pt-10 sm:pt-14">
        <div className="absolute inset-0 -z-10 hero-mesh opacity-75" />
        <div className="absolute inset-0 -z-10 hero-lines opacity-15" />

        <div className="container grid gap-10 lg:grid-cols-[0.62fr,0.38fr] lg:items-start">
          <div className="max-w-[39rem] space-y-5">
            <Badge variant="soft" className="w-fit">
              {contact.hero.eyebrow}
            </Badge>
            <h1 className="display-1 max-w-[14ch] text-foreground">{contact.hero.title}</h1>
            <p className="max-w-3xl body-lg text-muted-foreground">{contact.hero.description}</p>
            <Button asChild size="xl" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <a href={contact.hero.cta.href} target="_blank" rel="noreferrer" className="flex items-center gap-3">
                {contact.hero.cta.label}
                <Calendar className="h-5 w-5" />
              </a>
            </Button>
          </div>

          <div className="compact-tile space-y-4 rounded-[2rem] px-6 py-6 shadow-soft">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-primary">
              Before we talk
            </p>
            <div className="space-y-4">
              {[
                "What are you trying to build or improve?",
                "Who needs to use it every day?",
                "What needs to be true after the first release?",
              ].map((item) => (
                <div key={item} className="rounded-[1rem] bg-white/48 px-4 py-3 dark:bg-surface/60">
                  <p className="text-sm text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="inquiry" className="container pb-20 pt-4">
        <div className="grid gap-10 lg:grid-cols-[0.64fr,0.36fr] lg:items-start">
          <div className="section-anchor rounded-[2.4rem] px-6 py-7">
            <div className="space-y-4">
              <Badge variant="soft" className="w-fit">
                {contact.formIntro.eyebrow}
              </Badge>
              <div className="space-y-2">
                <h2 className="heading-2 text-foreground">{contact.formIntro.title}</h2>
                <p className="text-sm text-muted-foreground">{contact.formIntro.description}</p>
              </div>
            </div>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>

          <div className="space-y-6 lg:sticky lg:top-28">
            <div className="compact-tile space-y-4 rounded-[1.7rem] px-5 py-5">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-primary">
                Fastest route
              </p>
              <h2 className="text-2xl font-semibold text-foreground">{contact.fastRoute.title}</h2>
              <p className="text-sm text-muted-foreground">{contact.fastRoute.description}</p>
              <Button asChild size="lg">
                <a href={contact.fastRoute.cta.href} target="_blank" rel="noreferrer">
                  {contact.fastRoute.cta.label}
                </a>
              </Button>
            </div>

            <div className="compact-tile space-y-3 rounded-[1.7rem] px-5 py-5">
              {contactPoints.map((point) => (
                <a key={point.label} href={point.href} className="grid gap-2 sm:grid-cols-[0.18fr,0.82fr]">
                  <div className="flex items-center gap-3">
                    <point.icon className="h-4 w-4 icon-accent" />
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-primary">
                      {point.label}
                    </p>
                  </div>
                  <p className="text-sm font-semibold text-foreground">{point.value}</p>
                </a>
              ))}
            </div>

            <div className="compact-tile space-y-4 rounded-[1.7rem] px-5 py-5">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-primary">
                What happens next
              </p>
              <div className="space-y-4">
                {contact.nextSteps.steps.map((step, index) => (
                  <div key={step.title} className="grid gap-3 sm:grid-cols-[0.14fr,0.86fr]">
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      0{index + 1}
                    </p>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{step.title}</p>
                      <p className="mt-1 text-sm text-muted-foreground">{step.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-[1.6rem] shadow-[inset_0_0_0_1px_hsla(var(--border),0.16),0_18px_40px_-30px_rgba(9,26,45,0.14)]">
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
