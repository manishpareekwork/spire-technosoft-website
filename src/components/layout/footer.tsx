import Link from "next/link";
import Image from "next/image";
import { Linkedin, Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { resourceDownloads } from "@/data/resources";

export function Footer(): React.ReactElement {
  return (
    <footer className="relative z-20 w-full bg-[#0f172a] text-white">
      <div className="container py-20 space-y-12">
        <div className="grid gap-12 lg:grid-cols-[1.3fr,1fr,1fr,1fr]">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/images/logo/24x24.png"
                alt="Spire logo"
                width={40}
                height={40}
                className="rounded-lg"
              />
              <div className="flex flex-col leading-none">
                <span className="text-lg font-bold uppercase tracking-tight text-white">Spire</span>
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/70">
                  Technosoft
                </span>
              </div>
            </Link>
            <p className="text-sm text-white/70 max-w-sm">
              Engineering intelligent digital systems for business scale. Product engineering partner
              for regulated enterprise transformation.
            </p>
            <div className="flex items-center gap-3">
              <Link
                href="https://linkedin.com/in/manishpareek"
                target="_blank"
                className="h-11 w-11 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center text-white hover:bg-white hover:text-foreground transition-all"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/50">Resources</p>
            <div className="space-y-3">
              {resourceDownloads.map((resource) => (
                <a
                  key={resource.title}
                  href={resource.href}
                  download
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white/90 hover:border-white/30"
                >
                  <span>{resource.title}</span>
                  <ArrowRight className="h-4 w-4 icon-inverse" />
                </a>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/50">Connect</p>
            <div className="space-y-4 text-sm text-white/70">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 icon-inverse" />
                India | Global Delivery Presence
              </div>
              <Link
                href="mailto:contact@spiretechnosoft.com"
                className="flex items-center gap-3 text-white/70 hover:text-white"
              >
                <Mail className="h-5 w-5 icon-inverse" />
                contact@spiretechnosoft.com
              </Link>
              <Link
                href="tel:+919910070933"
                className="flex items-center gap-3 text-white/70 hover:text-white"
              >
                <Phone className="h-5 w-5 icon-inverse" />
                +91 99100 70933
              </Link>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/50">Newsletter</p>
            <p className="text-sm text-white/70">
              Stay updated with thought leadership and new case studies.
            </p>
            <form className="space-y-3">
              <label className="text-xs font-semibold uppercase tracking-[0.3em] text-white/50" htmlFor="newsletter-email">
                Email
              </label>
              <div className="flex flex-col gap-3 sm:flex-row">
                <input
                  id="newsletter-email"
                  type="email"
                  placeholder="you@company.com"
                  className="h-11 flex-1 rounded-xl border border-white/10 bg-white/5 px-4 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/40"
                  required
                />
                <button
                  type="submit"
                  className="h-11 rounded-xl bg-white px-5 text-sm font-semibold text-foreground transition hover:bg-white/90"
                >
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-white/50">No spam. Unsubscribe anytime.</p>
            </form>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-[10px] font-semibold uppercase tracking-[0.3em] text-white/50 md:flex-row">
          <p>Copyright {new Date().getFullYear()} Spire Technosoft Private Limited. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
