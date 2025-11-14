/**
 * @file Reusable Header component for the website.
 * @module /src/components/layout/header.tsx
 */

import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "./theme-toggle";

/**
 * Defines the navigation links for the header.
 * Each object in the array represents a link.
 *
 * @property {string} href - The URL path for the navigation link.
 * @property {string} label - The display text for the link.
 */
const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/solutions", label: "Solutions" },
  { href: "/innovation", label: "Innovation Lab" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

/**
 * The main Header component for the website.
 * It displays the company logo and primary navigation links.
 * This is a server component by default.
 *
 * @returns {React.ReactElement} The rendered header element.
 */
export function Header(): React.ReactElement {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur-sm">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        {/* Logo and Company Name */}
        <Link
          href="/"
          className="mr-6 flex items-center space-x-2"
          aria-label="Spire Technosoft Home"
        >
          <Image
            src="/images/logo/24x24.png"
            alt="Spire Technosoft Logo"
            width={32}
            height={32}
            className="rounded-sm"
          />
          <span className="hidden font-bold sm:inline-block">
            Spire Technosoft
          </span>
        </Link>

        {/* Main Navigation */}
        <nav className="flex flex-1 items-center justify-end space-x-6 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
          <div className="pl-4">
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </header>
  );
}
