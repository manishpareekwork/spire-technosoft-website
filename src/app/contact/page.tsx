import {
  Calendar,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Twitter,
  Youtube,
} from "lucide-react";

import { ContactForm } from "@/components/forms/contact-form";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/section-header";
import { Badge } from "@/components/ui/badge";
import { siteContent } from "@/content/site";

export const metadata = {
  title: "Contact | Spire Technosoft",
  description:
    "Talk to Spire Technosoft about AI-powered platforms for finance, healthcare, energy, and retail. Book a free consultation or send us a brief.",
  openGraph: {
    title: "Contact | Spire Technosoft",
    description:
      "Talk to Spire Technosoft about AI-powered platforms for finance, healthcare, energy, and retail. Book a free consultation or send us a brief.",
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

        <div className="container space-y-8 text-center">
          <Badge variant="soft" className="mx-auto w-fit">
            {contact.hero.eyebrow}
          </Badge>
          <div className="mx-auto max-w-4xl space-y-5">
            <h1 className="display-1 text-foreground">{contact.hero.title}</h1>
            <p className="body-lg text-muted-foreground">{contact.hero.description}</p>
          </div>
          <div className="flex justify-center">
            <Button asChild size="xl" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <a href={contact.hero.cta.href} target="_blank" rel="noreferrer" className="flex items-center gap-3">
                {contact.hero.cta.label}
                <Calendar className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section id="inquiry" className="container pb-20 pt-4">
        <div className="grid gap-8 lg:grid-cols-[1.08fr,0.92fr] lg:items-start">
          <div className="rounded-[2.4rem] section-contrast px-6 py-6 sm:px-8 sm:py-8">
            <div className="space-y-4">
              <Badge variant="soft" className="w-fit">
                {contact.formIntro.eyebrow}
              </Badge>
              <SectionHeader
                align="left"
                title={contact.formIntro.title}
                description={contact.formIntro.description}
                className="max-w-none"
              />
            </div>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>

          <div className="space-y-5 lg:sticky lg:top-28">
            <div className="rounded-[2rem] cta-band px-6 py-7">
              <div className="cta-inner space-y-5">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-white/64">
                  Free consultation
                </p>
                <h2 className="heading-2 text-white">Want the fastest route to a working conversation?</h2>
                <p className="text-sm text-white/74">
                  Skip the form and book directly with our team if you already know the problem,
                  urgency, and stakeholders involved.
                </p>
                <Button asChild size="lg" className="w-full bg-white text-slate-900 hover:bg-white/92">
                  <a href={contact.fastRoute.cta.href} target="_blank" rel="noreferrer">
                    {contact.fastRoute.cta.label}
                  </a>
                </Button>
              </div>
            </div>

            <div className="rounded-[2rem] section-contrast px-4 py-4">
              <div className="overflow-hidden rounded-[1.6rem] bg-surface-2">
                <iframe
                  title="Spire Technosoft location"
                  src="https://www.google.com/maps?q=Gurugram%2C%20India&z=10&output=embed"
                  className="h-[250px] w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="mt-4 space-y-3 px-2">
                {contactPoints.map((point) => (
                  <a key={point.label} href={point.href} className="flex items-start gap-4 compact-tile rounded-[1.4rem] px-4 py-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10">
                      <point.icon className="h-4 w-4 icon-accent" />
                    </div>
                    <div>
                      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-primary">
                        {point.label}
                      </p>
                      <p className="mt-1 text-sm font-semibold text-foreground">{point.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] section-contrast px-6 py-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="h-5 w-5 icon-accent" />
                  <p className="text-sm font-semibold text-foreground">Secure intake process</p>
                </div>
                <p className="text-sm text-muted-foreground">
                  Your roadmap, constraints, and technical details are handled under strict
                  confidentiality from the first interaction.
                </p>
                <div className="flex gap-3">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/65 shadow-sm transition-colors hover:bg-primary hover:text-white dark:bg-surface/75"
                      title={link.label}
                    >
                      <link.icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
