import Link from "next/link";
import Image from "next/image";
import { Linkedin, Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { resourceDownloads } from "@/data/resources";

export function Footer(): React.ReactElement {
  return (
    <footer className="relative z-20 w-full border-t border-border/60 bg-surface text-foreground">
      <div className="container py-16 space-y-12">
        <div className="grid gap-12 lg:grid-cols-[1.2fr,1fr,1fr]">
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
                <span className="text-lg font-bold uppercase tracking-tight text-foreground">Spire</span>
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">Technosoft</span>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground max-w-sm">
              Engineering intelligent digital systems for business scale. Product engineering partner for regulated enterprise transformation.
            </p>
            <div className="flex items-center gap-3">
              <Link
                href="https://linkedin.com/in/manishpareek"
                target="_blank"
                className="h-11 w-11 rounded-2xl border border-border/60 bg-surface-2 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"
              >
                <Linkedin className="h-5 w-5 icon-accent" />
              </Link>
            </div>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">Resources</p>
            <div className="space-y-3">
              {resourceDownloads.map((resource) => (
                <a
                  key={resource.title}
                  href={resource.href}
                  download
                  className="flex items-center justify-between rounded-2xl border border-border/60 bg-surface-2 px-4 py-3 text-sm font-semibold text-foreground hover:border-primary/30"
                >
                  <span>{resource.title}</span>
                <ArrowRight className="h-4 w-4 icon-accent" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">Connect</p>
            <div className="space-y-4 text-sm">
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="h-5 w-5 icon-accent" />
                India | Global Delivery Presence
              </div>
              <Link href="mailto:contact@spiretechnosoft.com" className="flex items-center gap-3 text-muted-foreground">
                <Mail className="h-5 w-5 icon-accent" />
                contact@spiretechnosoft.com
              </Link>
              <Link href="tel:+919910070933" className="flex items-center gap-3 text-muted-foreground">
                <Phone className="h-5 w-5 icon-accent" />
                +91 99100 70933
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-border/60 pt-6 text-[10px] font-semibold uppercase tracking-[0.3em] text-muted-foreground md:flex-row">
          <p>Copyright {new Date().getFullYear()} Spire Technosoft Private Limited. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
