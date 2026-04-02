import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ComingSoonPage(): React.ReactElement {
  return (
    <section className="container py-16 animate-softFade">
      <div className="relative isolate overflow-hidden rounded-[2.5rem] hero-stage text-center">
        <div className="dark-grid absolute inset-0 opacity-45" />
        <div className="hero-orb absolute -left-8 top-8 h-52 w-52 rounded-full bg-primary/28 blur-[88px]" />
        <div className="hero-orb absolute -bottom-20 right-0 h-60 w-60 rounded-full bg-accent/22 blur-[96px]" />

        <div className="relative z-10 mx-auto flex min-h-[65vh] max-w-3xl flex-col items-center justify-center gap-8 px-6 py-16 text-white md:py-24">
          <div className="rounded-2xl border border-slate-200/90 bg-white p-5 shadow-xl ring-1 ring-black/5">
            <Image
              src="/images/logo/1080x1080.png"
              alt="Spire Technosoft Logo"
              width={80}
              height={80}
              className="rounded-xl bg-white"
              priority
            />
          </div>

          <div className="flex items-center justify-center gap-3 font-[var(--font-jakarta)] text-white">
            <Sparkles className="h-6 w-6 icon-float text-white/90" aria-hidden />
            <p className="text-sm font-bold uppercase tracking-[0.4em] text-white/85">Coming soon</p>
            <Rocket className="h-6 w-6 icon-float text-white/90" aria-hidden />
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              This page is on the way
            </h1>
            <p className="mx-auto max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
              We are finishing this experience. Meanwhile, explore solutions and case studies—or book a
              consultation to talk through your next product milestone.
            </p>
          </div>

          <div className="flex w-full max-w-md flex-col items-stretch justify-center gap-3 pt-2 sm:max-w-none sm:flex-row sm:justify-center">
            <Link href="/solutions" className="sm:w-auto">
              <Button
                size="lg"
                className="group w-full rounded-full bg-white px-8 text-foreground shadow-lg transition-all duration-300 hover:bg-white/95 sm:w-auto"
              >
                Explore solutions
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/portfolio" className="sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="group w-full rounded-full border-white/35 bg-white/10 px-8 text-white backdrop-blur-sm transition-all duration-300 hover:border-white/50 hover:bg-white/15 sm:w-auto"
              >
                Case studies
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>

          <Link
            href="/contact"
            className="group inline-flex items-center text-sm font-semibold text-white/85 underline-offset-4 transition-colors hover:text-white"
          >
            Book a free consultation
            <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

          <Link href="/" className="text-sm text-white/60 transition-colors hover:text-white/90">
            ← Back to home
          </Link>
        </div>
      </div>
    </section>
  );
}
