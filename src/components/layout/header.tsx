/**
 * @file Reusable Header component for the website.
 * @module /src/components/layout/header.tsx
 */

"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ui/theme-toggle";

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
  { href: "/industries", label: "Industries" },
  { href: "/innovation", label: "Innovation Lab" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/careers", label: "Careers" },
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
  const [mobileOpen, setMobileOpen] = useState(false);
  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname?.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 shadow-sm backdrop-blur-xl transition-all duration-300">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        {/* Logo and Company Name */}
        <Link
          href="/"
          className="group mr-6 flex items-center gap-3"
          aria-label="Spire Technosoft Home"
        >
          <div className="flex items-center gap-3 rounded-xl bg-white p-2 shadow-md ring-1 ring-primary/10 transition-all duration-300 group-hover:shadow-lg group-hover:ring-primary/30 dark:bg-card dark:ring-primary/20">
            <Image
              src="/images/logo/24x24.png"
              alt="Spire Technosoft logo"
              width={40}
              height={40}
              className="rounded-lg"
            />
            <div className="flex flex-col leading-none">
              <span className="font-bold uppercase tracking-wide text-foreground">
                Spire Technosoft
              </span>
              <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
                Product Engineering Studio
              </span>
            </div>
          </div>
        </Link>

        {/* Main Navigation */}
        <nav className="hidden flex-1 items-center justify-end gap-6 text-sm font-semibold md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "relative transition-all duration-200 hover:text-foreground after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-200 hover:after:w-full",
                isActive(link.href)
                  ? "text-primary after:w-full"
                  : "text-foreground/70"
              )}
            >
              {link.label}
            </Link>
          ))}
          <ThemeToggle />
        </nav>
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            aria-label="Toggle navigation"
            className="rounded-md border border-border p-2 text-foreground"
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {mobileOpen && (
        <div className="border-t border-border/60 bg-background/95 px-6 py-4 shadow-lg md:hidden">
          <nav className="flex flex-col gap-3 text-sm font-semibold">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-md px-3 py-2 transition-colors",
                  isActive(link.href) ? "bg-primary/10 text-primary" : "text-foreground/80"
                )}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
