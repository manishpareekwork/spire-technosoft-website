/**
 * @file Reusable Header component for the website.
 * @module /src/components/layout/header.tsx
 */

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sprout } from "lucide-react"; // Using a placeholder icon for the logo.
import { cn } from "@/lib/utils";

/**
 * Defines the navigation links for the header.
 * Each object in the array represents a link.
 *
 * @property {string} href - The URL path for the navigation link.
 * @property {string} label - The display text for the link.
 */
const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

/**
 * The main Header component for the website.
 * It displays the company logo and primary navigation links.
 * This is a client component to track the current active path.
 *
 * @returns {React.ReactElement} The rendered header element.
 */
export function Header(): React.ReactElement {
  // Get the current path to highlight the active link.
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur-sm">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        {/* Logo and Company Name */}
        <Link
          href="/"
          className="mr-6 flex items-center space-x-2"
          aria-label="Spire Technosoft Home"
        >
          <Sprout className="h-6 w-6" />
          <span className="font-bold">Spire Technosoft</span>
        </Link>

        {/* Main Navigation */}
        <nav className="flex flex-1 items-center justify-end space-x-6 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "transition-colors hover:text-foreground/80",
                pathname === link.href
                  ? "text-foreground"
                  : "text-foreground/60"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
