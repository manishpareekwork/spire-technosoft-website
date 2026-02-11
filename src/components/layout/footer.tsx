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
    <footer className="relative z-20 w-full overflow-hidden border-t border-primary/5 bg-white text-foreground">
      <div className="container relative z-10 py-24">
        <div className="grid gap-16 lg:grid-cols-[1.5fr,1fr,1fr,1.2fr]">
          {/* Brand Info */}
          <div className="space-y-10 text-left">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="flex items-center gap-4">
                <Image
                  src="/images/logo/24x24.png"
                  alt="Spire logo"
                  width={40}
                  height={40}
                  className="rounded-lg shadow-sm"
                />
                <div className="flex flex-col leading-none">
                  <span className="text-2xl font-black uppercase tracking-tight text-foreground">Spire</span>
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">Technosoft</span>
                </div>
              </div>
            </Link>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-sm font-medium">
              Engineering intelligent digital systems for business scale. Product engineering partner for regulated enterprise transformation.
            </p>
            <div className="flex items-center gap-4">
               <Link
                href="https://linkedin.com/in/manishpareek"
                target="_blank"
                className="h-12 w-12 rounded-2xl bg-primary/5 border border-primary/10 flex items-center justify-center text-primary hover:text-white hover:bg-primary transition-all shadow-sm"
              >
                <Linkedin className="h-6 w-6" />
              </Link>
            </div>
          </div>

          {/* Core Expertise */}
          <div className="space-y-10 text-left">
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">Core Expertise</p>
            <ul className="space-y-5 text-base font-bold text-muted-foreground">
              <li className="flex items-center gap-4 hover:text-primary transition-colors cursor-default group">
                <span className="h-1.5 w-1.5 rounded-full bg-primary/20 group-hover:bg-primary transition-all" /> Agile Delivery
              </li>
              <li className="flex items-center gap-4 hover:text-primary transition-colors cursor-default group">
                <span className="h-1.5 w-1.5 rounded-full bg-primary/20 group-hover:bg-primary transition-all" /> Cloud Architecture
              </li>
              <li className="flex items-center gap-4 hover:text-primary transition-colors cursor-default group">
                <span className="h-1.5 w-1.5 rounded-full bg-primary/20 group-hover:bg-primary transition-all" /> Experience Ops
              </li>
              <li className="flex items-center gap-4 hover:text-primary transition-colors cursor-default group">
                <span className="h-1.5 w-1.5 rounded-full bg-primary/20 group-hover:bg-primary transition-all" /> AI Systems
              </li>
              <li className="flex items-center gap-4 hover:text-primary transition-colors cursor-default group">
                <span className="h-1.5 w-1.5 rounded-full bg-primary/20 group-hover:bg-primary transition-all" /> Data Viz
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-10 text-left">
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-secondary">Resources</p>
            <div className="flex flex-col gap-6">
              {resourceDownloads.map((resource) => (
                <a
                  key={resource.title}
                  href={resource.href}
                  download
                  className="group flex items-center justify-between text-base font-bold text-muted-foreground hover:text-secondary transition-all"
                >
                  {resource.title}
                  <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                </a>
              ))}
              <div className="pt-6 space-y-3 border-t border-primary/5">
                 <p className="text-[10px] font-black uppercase tracking-widest text-primary/30">Innovation Hub</p>
                 <Link href="/innovation" className="text-sm font-black text-primary hover:text-secondary transition-colors uppercase tracking-widest">
                    Enter the Lab
                 </Link>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-10 text-left">
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-accent">Connect</p>
            <div className="space-y-8 text-base">
              <div className="flex items-start gap-5 text-muted-foreground group cursor-default">
                <div className="h-12 w-12 rounded-2xl bg-primary/5 flex items-center justify-center shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <span className="leading-relaxed group-hover:text-foreground font-semibold transition-colors">India | Global Delivery Presence</span>
              </div>
              <Link href="mailto:contact@spiretechnosoft.com" className="flex items-start gap-5 text-muted-foreground group">
                <div className="h-12 w-12 rounded-2xl bg-primary/5 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all">
                  <Mail className="h-6 w-6" />
                </div>
                <span className="leading-relaxed group-hover:text-foreground font-semibold transition-colors pt-3">contact@spiretechnosoft.com</span>
              </Link>
              <Link href="tel:+919910070933" className="flex items-start gap-5 text-muted-foreground group">
                <div className="h-12 w-12 rounded-2xl bg-primary/5 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all">
                  <Phone className="h-6 w-6" />
                </div>
                <span className="leading-relaxed group-hover:text-foreground font-semibold transition-colors pt-3">+91 99100 70933</span>
              </Link>
              <div className="pt-6">
                <Link
                  href="https://www.spiretechnosoft.com"
                  target="_blank"
                  className="inline-flex items-center gap-3 rounded-full bg-primary/5 border border-primary/10 px-6 py-3 text-xs font-black text-primary hover:bg-primary hover:text-white transition-all shadow-sm"
                >
                  <Globe className="h-4 w-4" />
                  SPIRETECHNOSOFT.COM
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-24 border-t border-primary/5 pt-12 flex flex-col items-center justify-between gap-8 md:flex-row text-[10px] font-black uppercase tracking-[0.3em] text-primary/30">
          <p>© {new Date().getFullYear()} Spire Technosoft Private Limited. All rights reserved.</p>
          <div className="flex items-center gap-10">
            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
