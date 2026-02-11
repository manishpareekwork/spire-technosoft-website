import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

const heroImage = "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1600&q=80";

export default function ComingSoonPage(): React.ReactElement {
  return (
    <section className="snap-section container animate-softFade">
      <div className="section-shell relative w-full overflow-hidden rounded-[32px] bg-[radial-gradient(circle_at_top,_#0b3d2c_0%,_#022d1f_45%,_#011511_100%)] text-center">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `linear-gradient(120deg, rgba(0,0,0,0.8), rgba(0,0,0,0.4)), url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute -right-10 top-0 h-64 w-64 rounded-full bg-primary/30 blur-3xl opacity-70 icon-float" />
        <div className="absolute -bottom-10 left-10 h-56 w-56 rounded-full bg-secondary/40 blur-3xl opacity-60" />
        
        <div className="relative z-10 mx-auto flex min-h-[70vh] max-w-4xl flex-col items-center justify-center space-y-8 px-6 py-16 text-white md:py-20">
          <div className="rounded-2xl bg-white p-4 shadow-2xl ring-2 ring-white/20">
            <Image
              src="/images/logo/1080x1080.png"
              alt="Spire Technosoft Logo"
              width={80}
              height={80}
              className="rounded-xl"
              priority
            />
          </div>

          <div className="flex items-center justify-center gap-3 text-white font-[var(--font-poppins)]">
            <Sparkles className="h-6 w-6 icon-float text-primary" />
            <p className="text-sm font-bold uppercase tracking-[0.5em]">Coming Soon</p>
            <Rocket className="h-6 w-6 icon-float text-secondary" />
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">
              We're crafting something amazing
            </h1>
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/90 md:text-lg">
              This page is being built with cutting-edge insights, case studies, and resources. 
              In the meantime, explore our solutions and portfolio, or book a discovery call to discuss your next project.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center gap-4 pt-4 sm:flex-row">
            <Link href="/solutions">
              <Button size="lg" className="group w-full rounded-full bg-white text-primary shadow-lg transition-all duration-300 hover:bg-white/90 hover:shadow-xl hover:shadow-primary/30 sm:w-auto">
                Explore Solutions
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/portfolio">
              <Button size="lg" variant="outline" className="group w-full rounded-full border-2 border-white/40 bg-white/5 text-white backdrop-blur-sm transition-all duration-300 hover:border-white/60 hover:bg-white/15 sm:w-auto">
                View Case Studies
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>

          <div className="pt-4">
            <Link href="/contact" className="group inline-flex items-center text-sm font-semibold text-white/90 underline underline-offset-4 transition-colors hover:text-white">
              Book a discovery call
              <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="pt-8">
            <Link href="/" className="text-sm text-white/70 transition-colors hover:text-white/90">
              {"<- Back to Home"}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
