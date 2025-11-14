/**
 * @file Contact page.
 * @module /src/app/contact/page.tsx
 */

import { ContactForm } from "@/components/forms/contact-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const contactImage = "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=1400&q=80";

export default function ContactPage() {
  return (
    <div className="flex-1">
      <section className="container flex flex-col gap-8 pb-12 pt-6 md:py-16">
        <div className="mx-auto flex w-full max-w-4xl flex-col items-center gap-3 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-secondary font-[var(--font-poppins)]">
            Contact
          </p>
          <h1 className="text-3xl font-extrabold leading-tight tracking-tight md:text-4xl">
            We&apos;d love to connect — whether you&apos;re planning a new product or partnership.
          </h1>
          <p className="max-w-2xl text-lg text-muted-foreground">
            Share your roadmap, RFP, or early idea. We respond within two business days with next steps and a clear path forward.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-[1fr,1fr]">
          <Card className="bg-card shadow-[0_15px_30px_rgba(0,0,0,0.08)]">
            <CardHeader>
              <CardTitle>Office & Contact Info</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <p>
                <span className="font-semibold">📍</span> India (HQ) | Global Delivery Presence
              </p>
              <p>
                <span className="font-semibold">📧</span>{" "}
                <a href="mailto:info@spiretechnosoft.com" className="text-primary underline">
                  info@spiretechnosoft.com
                </a>
              </p>
              <p>
                <span className="font-semibold">📞</span>{" "}
                <a href="tel:+919910070933" className="text-primary underline">
                  +91 99100 70933
                </a>
              </p>
              <div
                className="mt-6 rounded-2xl"
                style={{
                  backgroundImage: `linear-gradient(180deg, rgba(0,152,121,0.4), rgba(43,43,43,0.6)), url(${contactImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  minHeight: "180px",
                }}
              />
            </CardContent>
          </Card>
          <Card className="bg-card shadow-[0_15px_30px_rgba(0,0,0,0.08)]">
            <CardHeader>
              <CardTitle>Send us a brief</CardTitle>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
