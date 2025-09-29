/**
 * @file Reusable Footer component for the website.
 * @module /src/components/layout/footer.tsx
 */

import Link from "next/link";
import { Linkedin } from "lucide-react";

/**
 * The main Footer component for the website.
 * It displays copyright information and social media links.
 *
 * @returns {React.ReactElement} The rendered footer element.
 */
export function Footer(): React.ReactElement {
  return (
    <footer className="w-full border-t border-border/40">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} Spire Technosoft. All Rights Reserved.
          </p>
        </div>
        <div className="flex items-center gap-4">
          {/* Social Link: LinkedIn */}
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
    </footer>
  );
}
