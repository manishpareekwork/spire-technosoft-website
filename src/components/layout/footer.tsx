import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Linkedin, Mail, MapPin, Phone } from "lucide-react";

import { resourceDownloads } from "@/data/resources";
import { buttonVariants } from "@/components/ui/button-variants";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/solutions", label: "Solutions" },
  { href: "/industries", label: "Industries" },
  { href: "/portfolio", label: "Case Studies" },
  { href: "/innovation", label: "Innovation Lab" },
  { href: "/insights", label: "Insights" },
  { href: "/contact", label: "Contact" },
];

export function Footer(): React.ReactElement {
  return (
    <footer className="relative z-20 mt-20 overflow-hidden border-t border-border/60 bg-[linear-gradient(180deg,transparent,rgba(28,42,45,0.04))]">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="container py-16">
        <div className="grid gap-12 lg:grid-cols-[1.15fr,0.8fr,1fr]">
          <div className="space-y-6">
            <Link href="/" className="inline-flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/80 shadow-sm dark:bg-surface/90">
                <Image
                  src="/images/logo/24x24.png"
                  alt="Spire Technosoft logo"
                  width={34}
                  height={34}
                  className="rounded-full"
                />
              </div>
              <div className="space-y-1">
                <p className="text-lg font-semibold tracking-tight text-foreground">
                  Spire Technosoft
                </p>
                <p className="text-[0.72rem] uppercase tracking-[0.18em] text-muted-foreground">
                  AI-powered platforms for regulated industries
                </p>
              </div>
            </Link>

            <p className="max-w-md text-sm text-muted-foreground">
              We design and deliver secure digital platforms for finance, healthcare,
              energy, and retail teams that need clearer operations and stronger compliance.
            </p>

            <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/60 px-4 py-2 shadow-sm dark:bg-surface/70">
                <MapPin className="h-4 w-4 icon-accent" />
                India | Global delivery
              </span>
              <Link
                href="mailto:contact@spiretechnosoft.com"
                className="inline-flex items-center gap-2 rounded-full bg-white/60 px-4 py-2 shadow-sm transition-colors hover:text-foreground dark:bg-surface/70"
              >
                <Mail className="h-4 w-4 icon-accent" />
                contact@spiretechnosoft.com
              </Link>
              <Link
                href="tel:+919910070933"
                className="inline-flex items-center gap-2 rounded-full bg-white/60 px-4 py-2 shadow-sm transition-colors hover:text-foreground dark:bg-surface/70"
              >
                <Phone className="h-4 w-4 icon-accent" />
                +91 99100 70933
              </Link>
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-1">
            <div className="space-y-4">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Explore
              </p>
              <div className="flex flex-col gap-3 text-sm text-muted-foreground">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Resources
              </p>
              <div className="flex flex-col gap-3 text-sm text-muted-foreground">
                {resourceDownloads.map((resource) => (
                  <a
                    key={resource.title}
                    href={resource.href}
                    download
                    className="transition-colors hover:text-foreground"
                  >
                    {resource.title}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="surface-card rounded-[2rem] p-6 sm:p-8">
            <div className="space-y-4">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-primary">
                Start a conversation
              </p>
              <h3 className="text-2xl font-semibold text-foreground">
                Bring the roadmap. We will shape the team, priorities, and first milestone.
              </h3>
              <p className="text-sm text-muted-foreground">
                Consultation sessions are structured around your goals, delivery constraints,
                and the first release needed to prove value quickly.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className={cn(buttonVariants({ size: "lg" }), "px-6")}
              >
                Book Free Consultation
                <ArrowRight className="h-4 w-4 icon-inverse" />
              </Link>
              <Link
                href="https://www.linkedin.com/company/spire-technosoft"
                target="_blank"
                className={cn(buttonVariants({ variant: "outline", size: "lg" }), "px-6")}
              >
                <Linkedin className="h-4 w-4 icon-accent" />
                LinkedIn
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-border/60 pt-6 text-[0.72rem] uppercase tracking-[0.14em] text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>Copyright {new Date().getFullYear()} Spire Technosoft. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="transition-colors hover:text-foreground">
              Privacy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-foreground">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
