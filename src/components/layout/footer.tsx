/**
 * @file Reusable Footer component for the website.
 * @module /src/components/layout/footer.tsx
 */

import Link from "next/link";
import { Linkedin, Mail, Phone, MapPin } from "lucide-react";

/**
 * The main Footer component for the website.
 * It displays copyright information and social media links.
 *
 * @returns {React.ReactElement} The rendered footer element.
 */
export function Footer(): React.ReactElement {
  return (
    <footer className="w-full border-t border-border/40 bg-card/60">
      <div className="container flex flex-col gap-10 py-10">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-wide text-primary">
              Core Expertise
            </p>
            <p className="text-sm text-muted-foreground">
              Agile Product Delivery • Web & Mobile Architecture • UI/UX Leadership • Data Visualization • Cloud & DevOps • Cross-Functional Mentorship
            </p>
          </div>
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-wide text-primary">Impact</p>
            <p className="text-sm text-muted-foreground">
              25+ Products Delivered • Global User Base &gt; 1 Million • Multi-Industry Presence (FinTech | HealthTech | Energy | Enterprise Solutions)
            </p>
          </div>
          <div className="space-y-3 text-sm text-muted-foreground">
            <p className="text-sm uppercase tracking-wide text-primary">
              Contact
            </p>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />
              <span>India | Global Delivery Presence</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-primary" />
              <Link
                href="mailto:info@spiretechnosoft.com"
                className="hover:text-foreground"
              >
                info@spiretechnosoft.com
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-primary" />
              <Link href="tel:+919910070933" className="hover:text-foreground">
                +91 99100 70933
              </Link>
            </div>
            <Link
              href="https://www.spiretechnosoft.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline underline-offset-4"
            >
              www.spiretechnosoft.com
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 border-t border-dashed border-border/60 pt-6 text-sm text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} Spire Technosoft. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link
              href="https://linkedin.com/in/manishpareek"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Manish Pareek's LinkedIn Profile"
              className="rounded-full p-2 transition-colors hover:bg-accent"
            >
              <Linkedin className="h-5 w-5 text-muted-foreground transition-colors hover:text-foreground" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
