/**
 * @file Contact page.
 * @module /src/app/contact/page.tsx
 */

import { ContactForm } from "@/components/forms/contact-form";

export default function ContactPage() {
  return (
    <section className="container flex flex-col items-center gap-8 pb-8 pt-6 md:py-10">
      <div className="mx-auto flex w-full max-w-3xl flex-col items-center gap-2 text-center">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Get in Touch
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          Have a project in mind or just want to say hello? I&apos;d love to
          hear from you.
        </p>
      </div>
      <ContactForm />
    </section>
  );
}
