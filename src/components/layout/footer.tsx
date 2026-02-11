/**
 * @file Reusable Footer component for the website.
 * @module /src/components/layout/footer.tsx
 */

import Link from "next/link";
import Image from "next/image";
import { Linkedin, Mail, Phone, MapPin, ArrowRight, Globe, ShieldCheck, Zap } from "lucide-react";
import { resourceDownloads } from "@/data/resources";

export function Footer(): React.ReactElement {
  return (
    <footer className="relative z-20 w-full overflow-hidden border-t border-white/10 bg-slate-900 text-white">
      {/* Brand background elements */}
      <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-primary/20 blur-[100px] opacity-30" />
      <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-secondary/15 blur-[100px] opacity-20" />
      
      <div className="container relative z-10 py-20">
        <div className="grid gap-16 lg:grid-cols-[1.5fr,1fr,1fr,1.2fr]">
          {/* Brand Info */}
          <div className="space-y-8">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="flex items-center gap-3 rounded-2xl bg-white/10 p-2.5 backdrop-blur-md border border-white/20 transition-all group-hover:bg-white/15">
                <Image
                  src="/images/logo/24x24.png"
                  alt="Spire logo"
                  width={32}
                  height={32}
                  className="rounded-lg"
                />
                <div className="flex flex-col leading-none">
                  <span className="text-xl font-black uppercase tracking-tight">Spire</span>
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">Technosoft</span>
                </div>
              </div>
            </Link>
            <p className="text-white/50 text-base leading-relaxed max-w-xs">
              Engineering intelligent digital systems for business scale. Product engineering partner for regulated enterprise transformation.
            </p>
            <div className="flex items-center gap-4">
               <Link
                href="https://linkedin.com/in/manishpareek"
                target="_blank"
                className="h-10 w-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-primary/20 transition-all shadow-lg"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Core Expertise */}
          <div className="space-y-8">
            <p className="text-xs font-black uppercase tracking-[0.4em] text-primary">Core Expertise</p>
            <ul className="space-y-4 text-sm font-medium text-white/50">
              <li className="flex items-center gap-3 hover:text-white transition-colors cursor-default">
                <span className="h-1 w-1 rounded-full bg-primary/40" /> Agile Delivery
              </li>
              <li className="flex items-center gap-3 hover:text-white transition-colors cursor-default">
                <span className="h-1 w-1 rounded-full bg-primary/40" /> Cloud Architecture
              </li>
              <li className="flex items-center gap-3 hover:text-white transition-colors cursor-default">
                <span className="h-1 w-1 rounded-full bg-primary/40" /> Experience Ops
              </li>
              <li className="flex items-center gap-3 hover:text-white transition-colors cursor-default">
                <span className="h-1 w-1 rounded-full bg-primary/40" /> AI Systems
              </li>
              <li className="flex items-center gap-3 hover:text-white transition-colors cursor-default">
                <span className="h-1 w-1 rounded-full bg-primary/40" /> Data Viz
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-8">
            <p className="text-xs font-black uppercase tracking-[0.4em] text-secondary">Resources</p>
            <div className="flex flex-col gap-5">
              {resourceDownloads.map((resource) => (
                <a
                  key={resource.title}
                  href={resource.href}
                  download
                  className="group flex items-center justify-between text-sm font-bold text-white/70 hover:text-secondary transition-all"
                >
                  {resource.title}
                  <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                </a>
              ))}
              <div className="pt-4 space-y-2 border-t border-white/5">
                 <p className="text-[10px] font-black uppercase tracking-widest text-white/30">Connect</p>
                 <Link href="/contact" className="text-xs font-bold text-primary hover:text-white transition-colors">
                    Join the Innovation Lab
                 </Link>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-8">
            <p className="text-xs font-black uppercase tracking-[0.4em] text-accent">Contact</p>
            <div className="space-y-6 text-sm">
              <div className="flex items-start gap-4 text-white/50 group cursor-default">
                <MapPin className="h-5 w-5 text-accent shrink-0 mt-1" />
                <span className="leading-relaxed group-hover:text-white transition-colors">India | Global Delivery Presence</span>
              </div>
              <Link href="mailto:contact@spiretechnosoft.com" className="flex items-start gap-4 text-white/50 group">
                <Mail className="h-5 w-5 text-accent shrink-0 mt-1" />
                <span className="leading-relaxed group-hover:text-white transition-colors">contact@spiretechnosoft.com</span>
              </Link>
              <Link href="tel:+919910070933" className="flex items-start gap-4 text-white/50 group">
                <Phone className="h-5 w-5 text-accent shrink-0 mt-1" />
                <span className="leading-relaxed group-hover:text-white transition-colors">+91 99100 70933</span>
              </Link>
              <div className="pt-4">
                <Link
                  href="https://www.spiretechnosoft.com"
                  target="_blank"
                  className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-2 text-xs font-bold hover:bg-white/10 transition-all"
                >
                  <Globe className="h-4 w-4 text-accent" />
                  www.spiretechnosoft.com
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 border-t border-white/5 pt-10 flex flex-col items-center justify-between gap-6 md:flex-row text-[10px] font-black uppercase tracking-[0.2em] text-white/30">
          <p>© {new Date().getFullYear()} Spire Technosoft. Engineering Growth.</p>
          <div className="flex items-center gap-8">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

