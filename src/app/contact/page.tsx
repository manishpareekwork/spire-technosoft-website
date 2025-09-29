/**
 * @file Contact page.
 * @module /src/app/contact/page.tsx
 */

export default function ContactPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Get in Touch
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          A contact form and other ways to reach me will be available on this
          page.
        </p>
      </div>
    </section>
  );
}
