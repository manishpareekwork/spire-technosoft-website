/**
 * @file Contact page.
 * @module /src/app/contact/page.tsx
 */

import { ContactForm } from "@/components/forms/contact-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SocialProofBand } from "@/components/sections/social-proof";

const contactImage = "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=1400&q=80";
const mapImage = "https://images.unsplash.com/photo-1502920917128-1aa500764b9e?auto=format&fit=crop&w=1400&q=80";

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/spire-technosoft" },
  { label: "Twitter / X", href: "https://twitter.com" },
  { label: "YouTube", href: "https://youtube.com" },
];

const nextSteps = [
  {
    title: "Respond in 1-2 business days",
    detail: "We confirm scope, gather context, and align on stakeholders.",
  },
  {
    title: "Discovery & sprint plan",
    detail: "Co-create outcomes, delivery plan, and a success metric baseline.",
  },
  {
    title: "Proposal & pod kickoff",
    detail: "Finalize scope, budgets, and launch a Platform Pod within 2 weeks.",
  },
];

const routingOptions = [
  "Partnerships or alliances",
  "Hiring and career inquiries",
  "Vendor or procurement requests",
];

export default function ContactPage() {
  return (
    <div className="flex-1">
      <section className="container animate-softFade flex flex-col gap-8 pb-12 pt-6 md:py-16">
        <div className="section-shell space-y-10">
          <div className="mx-auto flex w-full max-w-4xl flex-col items-center gap-3 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-secondary font-[var(--font-poppins)]">Contact</p>
            <h1 className="text-3xl font-extrabold leading-tight tracking-tight md:text-4xl">
              Let&apos;s discuss how we can engineer growth together.
            </h1>
            <p className="max-w-2xl text-lg text-muted-foreground">
              Platform Pods, Experience Ops, and Intelligence Built-in keep every engagement modular, outcome-led, and accountable.
              Share your roadmap, RFP, or early idea and we will respond with next steps.
            </p>
            <Button asChild size="lg" className="mt-2">
              <a href="https://calendly.com/spire-technosoft/discovery" target="_blank" rel="noreferrer">
                Book a discovery call (Calendly)
              </a>
            </Button>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {nextSteps.map((step, index) => (
              <Card key={step.title} className="bg-card">
                <CardContent className="space-y-2 px-6 py-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-secondary">Step {index + 1}</p>
                  <p className="text-base font-semibold">{step.title}</p>
                  <p className="text-sm text-muted-foreground">{step.detail}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid gap-6 lg:grid-cols-[1fr,1fr]">
            <Card className="bg-card">
              <CardHeader>
                <CardTitle>Office & Contact Info</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm text-muted-foreground">
                <p>
                  <span className="font-semibold">📍</span> India (HQ) | Global Delivery Presence
                </p>
                <p>
                  <span className="font-semibold">📧</span>{" "}
                  <a href="mailto:contact@spiretechnosoft.com" className="text-primary underline">
                    contact@spiretechnosoft.com
                  </a>
                </p>
                <p>
                  <span className="font-semibold">📞</span>{" "}
                  <a href="tel:+919910070933" className="text-primary underline">
                    +91 99100 70933
                  </a>
                </p>
                <div className="space-y-2">
                  <p className="text-xs uppercase tracking-wide text-secondary">Connect with us</p>
                  <div className="flex flex-wrap gap-3">
                    {socialLinks.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        className="text-sm font-semibold text-primary underline"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
                <div
                  className="mt-4 rounded-2xl"
                  style={{
                    backgroundImage: `linear-gradient(180deg, rgba(0,152,121,0.4), rgba(43,43,43,0.6)), url(${contactImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    minHeight: "180px",
                  }}
                />
                <div
                  className="rounded-2xl"
                  style={{
                    backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.2), rgba(0,0,0,0.6)), url(${mapImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    minHeight: "160px",
                  }}
                />
                <div className="space-y-2 pt-2">
                  <p className="text-sm font-semibold text-primary">Need a faster route?</p>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    {routingOptions.map((option) => (
                      <li key={option} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                        <span>{option}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs text-muted-foreground">Select an inquiry type in the form to route faster.</p>
                </div>
                <div className="space-y-2 pt-3">
                  <p className="text-sm font-semibold text-primary">Prefer to schedule immediately?</p>
                  <Button asChild className="w-full">
                    <a href="https://calendly.com/spire-technosoft/discovery" target="_blank" rel="noreferrer">
                      Book a Discovery Call
                    </a>
                  </Button>
                  <p className="text-xs text-muted-foreground">Your information is secure and never shared externally.</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-card">
              <CardHeader>
                <CardTitle>Send us a brief</CardTitle>
              </CardHeader>
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>
          </div>

          <SocialProofBand
            title="Trusted partners"
            description="Proof of outcomes across regulated programs, global delivery pods, and innovation sprints."
            variant="compact"
          />
        </div>
      </section>
    </div>
  );
}
