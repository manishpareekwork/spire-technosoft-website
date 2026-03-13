import Link from "next/link";
import Image from "next/image";
import { Linkedin, Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { resourceDownloads } from "@/data/resources";

export function Footer(): React.ReactElement {
  return (
    <footer className="relative z-20 w-full bg-slate-950 text-white overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/4 h-px w-1/2 bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
      <div className="absolute -top-[300px] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container relative py-24 space-y-16">
        <div className="grid gap-16 lg:grid-cols-[1.5fr,1fr,1fr,1.2fr]">
          {/* Brand */}
          <div className="space-y-8">
            <Link href="/" className="inline-flex items-center gap-4 group">
              <div className="p-2.5 bg-white/5 rounded-2xl border border-white/10 group-hover:border-accent/40 group-hover:bg-white/10 transition-all duration-300">
                <Image
                  src="/images/logo/24x24.png"
                  alt="Spire logo"
                  width={44}
                  height={44}
                  className="rounded-lg"
                />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-xl font-black uppercase tracking-widest text-white drop-shadow-sm">Spire</span>
                <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-accent">
                  Technosoft
                </span>
              </div>
            </Link>
            <p className="text-base text-white/60 max-w-sm leading-relaxed font-medium">
              Engineering intelligent digital systems for business scale. Product engineering partner
              for regulated enterprise transformation.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <Link
                href="https://linkedin.com/in/manishpareek"
                target="_blank"
                className="h-12 w-12 rounded-full border-transparent bg-white/5 flex items-center justify-center text-white/80 hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:text-white hover:scale-110 transition-all duration-300 shadow-sm hover:shadow-glow"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Resources */}
          <div className="space-y-6">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-white/40">Resources</p>
            <div className="flex flex-col gap-4">
              {resourceDownloads.map((resource) => (
                <a
                  key={resource.title}
                  href={resource.href}
                  download
                  className="group flex items-center justify-between py-2 text-sm font-semibold text-white/70 hover:text-white transition-colors"
                >
                  <span className="relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-accent after:transition-all after:duration-300 group-hover:after:w-full">{resource.title}</span>
                  <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-accent" />
                </a>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div className="space-y-6">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-white/40">Connect</p>
            <div className="flex flex-col gap-5 text-sm font-medium text-white/70">
              <div className="flex items-center gap-4 group">
                <div className="p-2 rounded-full bg-white/5 group-hover:bg-white/10 group-hover:text-accent transition-colors">
                  <MapPin className="h-4 w-4" />
                </div>
                India | Global Delivery Presence
              </div>
              <Link
                href="mailto:contact@spiretechnosoft.com"
                className="flex items-center gap-4 group hover:text-white transition-colors"
              >
                <div className="p-2 rounded-full bg-white/5 group-hover:bg-white/10 group-hover:text-accent transition-colors">
                  <Mail className="h-4 w-4" />
                </div>
                contact@spiretechnosoft.com
              </Link>
              <Link
                href="tel:+919910070933"
                className="flex items-center gap-4 group hover:text-white transition-colors"
              >
                <div className="p-2 rounded-full bg-white/5 group-hover:bg-white/10 group-hover:text-accent transition-colors">
                  <Phone className="h-4 w-4" />
                </div>
                +91 99100 70933
              </Link>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-white/40">Newsletter</p>
            <p className="text-sm font-medium text-white/70 leading-relaxed">
              Stay updated with thought leadership and new case studies.
            </p>
            <form className="space-y-4 pt-2">
              <div className="flex flex-col gap-3 relative">
                <input
                  id="newsletter-email"
                  type="email"
                  placeholder="you@company.com"
                  className="h-14 w-full rounded-2xl border border-white/10 bg-white/5 pl-5 pr-32 text-sm font-medium text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-transparent transition-all"
                  required
                />
                <button
                  type="submit"
                  className="absolute right-1.5 top-1.5 bottom-1.5 rounded-xl bg-white px-5 text-sm font-bold text-[#0c0d12] hover:bg-accent hover:text-white transition-colors shadow-sm"
                >
                  Subscribe
                </button>
              </div>
              <p className="text-[11px] font-medium text-white/40">No spam. Unsubscribe anytime.</p>
            </form>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 mt-8 text-[11px] font-bold uppercase tracking-[0.2em] text-white/40 md:flex-row">
          <p>Copyright {new Date().getFullYear()} Spire Technosoft Private Limited. All rights reserved.</p>
          <div className="flex items-center gap-8">
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
