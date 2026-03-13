import Link from "next/link";
import { ArrowRight, Linkedin, Mail, MapPin, Phone } from "lucide-react";

import { resourceDownloads } from "@/data/resources";
import { buttonVariants } from "@/components/ui/button-variants";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/solutions", label: "Solutions" },
  { href: "/industries", label: "Industries" },
  { href: "/innovation", label: "Innovation Lab" },
  { href: "/portfolio", label: "Case Studies" },
  { href: "/insights", label: "Resources" },
  { href: "/contact", label: "Contact" },
];

export function Footer(): React.ReactElement {
  return (
    <footer className="relative z-20 mt-20 overflow-hidden bg-secondary text-white">
      <div className="absolute inset-0 opacity-40">
        <div className="dark-grid absolute inset-x-0 top-0 h-56" />
        <div className="hero-orb absolute left-[10%] top-24 h-52 w-52 rounded-full bg-primary/12 blur-[90px]" />
        <div className="hero-orb absolute right-[8%] top-14 h-44 w-44 rounded-full bg-accent/10 blur-[88px]" />
      </div>

      <div className="container relative z-10 py-[4.5rem]">
        <div className="mx-auto max-w-4xl space-y-6 border-b border-white/12 pb-14 text-center">
          <p className="text-[0.74rem] font-semibold uppercase tracking-[0.24em] text-primary">
            Ready to get started?
          </p>
          <h2 className="display-1 text-white">Need a product team that can shape and ship with you?</h2>
          <p className="mx-auto max-w-2xl body-lg text-white/72">
            Bring the rough scope, the stalled build, or the next product bet. We will help you
            find a cleaner path to the first useful release.
          </p>
          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/contact" className={cn(buttonVariants({ variant: "accent", size: "xl" }))}>
              Book Free Consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/portfolio"
              className={cn(
                buttonVariants({ variant: "outline", size: "xl" }),
                "border-white/18 bg-white/6 text-white hover:bg-white/10 hover:text-white"
              )}
            >
              View case studies
            </Link>
          </div>
        </div>

        <div className="grid gap-10 py-12 lg:grid-cols-[1.1fr,0.8fr,0.95fr,1fr]">
          <div className="space-y-5">
            <Link href="/" className="inline-block">
              <span className="text-[2rem] font-bold tracking-[-0.06em] text-white">
                Spire<span className="text-primary">Technosoft</span>
              </span>
            </Link>
            <p className="max-w-sm text-base leading-8 text-white/72">
              Custom software, mobile products, dashboards, and AI workflows designed with product
              clarity and delivered with dependable execution.
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-[0.74rem] font-semibold uppercase tracking-[0.22em] text-primary">
              Quick Links
            </p>
            <div className="flex flex-col gap-3 text-sm text-white/72">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="transition-colors hover:text-white">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-[0.74rem] font-semibold uppercase tracking-[0.22em] text-primary">
              Contact
            </p>
            <div className="space-y-4 text-sm text-white/72">
              <Link
                href="mailto:contact@spiretechnosoft.com"
                className="flex items-center gap-3 transition-colors hover:text-white"
              >
                <Mail className="h-4 w-4 text-primary" />
                contact@spiretechnosoft.com
              </Link>
              <Link
                href="tel:+919910070933"
                className="flex items-center gap-3 transition-colors hover:text-white"
              >
                <Phone className="h-4 w-4 text-primary" />
                +91 99100 70933
              </Link>
              <p className="flex items-center gap-3 text-white/72">
                <MapPin className="h-4 w-4 text-primary" />
                India | Global delivery
              </p>
              <Link
                href="https://www.linkedin.com/company/spire-technosoft"
                target="_blank"
                className="inline-flex items-center gap-3 transition-colors hover:text-white"
              >
                <Linkedin className="h-4 w-4 text-primary" />
                LinkedIn
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-[0.74rem] font-semibold uppercase tracking-[0.22em] text-primary">
              Guides
            </p>
            <div className="flex flex-col gap-3 text-sm text-white/72">
              {resourceDownloads.slice(0, 3).map((resource) => (
                <a
                  key={resource.title}
                  href={resource.href}
                  download
                  className="transition-colors hover:text-white"
                >
                  {resource.title}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 pt-6 text-[0.72rem] uppercase tracking-[0.14em] text-white/46 md:flex-row md:items-center md:justify-between">
          <p>Copyright {new Date().getFullYear()} Spire Technosoft. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="transition-colors hover:text-white/82">
              Privacy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-white/82">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
