import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const heroImage = "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1600&q=80";

export default function ComingSoonPage(): React.ReactElement {
  return (
    <section className="container animate-softFade py-16 md:py-20">
      <div className="section-shell relative overflow-hidden text-center">
        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage: `linear-gradient(120deg, rgba(0,0,0,0.6), rgba(0,0,0,0.2)), url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute -right-10 top-0 h-48 w-48 rounded-full bg-[#66C2A5]/30 blur-3xl opacity-70 icon-float" />
        <div className="absolute -bottom-10 left-10 h-40 w-40 rounded-full bg-[#004D32]/40 blur-3xl opacity-60" />
        <div className="relative z-10 mx-auto max-w-3xl space-y-6 py-10 text-white">
          <div className="flex items-center justify-center gap-2 text-white/80">
            <Sparkles className="h-5 w-5" />
            <p className="text-xs uppercase tracking-[0.4em]">Coming Soon</p>
          </div>
          <h1 className="text-4xl font-bold md:text-5xl">We&apos;re shaping the next release.</h1>
          <p className="text-base text-white/80 md:text-lg">
            The page you requested is being refreshed with new insights, case studies, and resources. In the meantime, explore our
            solutions and portfolio, or book a discovery call.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/solutions">
              <Button size="lg" className="rounded-full bg-white text-primary hover:bg-white/90">
                Explore Solutions
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/portfolio">
              <Button size="lg" variant="outline" className="rounded-full border-white/30 text-white hover:bg-white/10">
                View Case Studies
              </Button>
            </Link>
          </div>
          <div className="pt-4">
            <Link href="/contact" className="text-sm font-semibold text-emerald-100 underline">
              Book a discovery call
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
