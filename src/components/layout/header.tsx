/**
 * @file Reusable Header component for the website.
 * @module /src/components/layout/header.tsx
 */

"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button-variants";
import { Drawer } from "@/components/ui/drawer";
import { siteContent } from "@/content/site";

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
  const [scrolled, setScrolled] = useState(false);
  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname?.startsWith(href);
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-all duration-500",
        scrolled
          ? "border-border/40 bg-background/70 shadow-soft backdrop-blur-2xl"
          : "border-transparent bg-transparent"
      )}
    >
      <div
        className={cn(
          "container flex items-center justify-between transition-all duration-500",
          scrolled ? "h-16" : "h-20"
        )}
      >
        {/* Logo and Company Name */}
        <Link
          href="/"
          className="group mr-6 flex items-center gap-3"
          aria-label="Spire Technosoft Home"
        >
          <div className="flex items-center gap-3 transition-all duration-500">
            <Image
              src="/images/logo/24x24.png"
              alt="Spire Technosoft logo"
              width={34}
              height={34}
              className="rounded-lg transform transition-transform group-hover:scale-105"
            />
            <div className="flex flex-col leading-tight pr-2">
              <span className="font-extrabold uppercase tracking-widest text-foreground text-sm drop-shadow-sm">
                Spire Technosoft
              </span>
              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-muted-foreground/80">
                Product Engineering Studio
              </span>
            </div>
          </div>
        </Link>

        {/* Main Navigation */}
        <nav className="hidden flex-1 items-center justify-end gap-1 md:flex">
          <div className="flex items-center gap-6 mr-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative py-2 text-[13px] font-bold tracking-widest uppercase transition-all duration-300",
                  isActive(link.href)
                    ? "text-primary"
                    : "text-foreground/70 hover:text-foreground"
                )}
                aria-current={isActive(link.href) ? "page" : undefined}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <Link href={siteContent.nav.ctaHref} className={cn(buttonVariants({ size: "sm" }), "ml-2 px-6")}>
            {siteContent.nav.ctaLabel}
          </Link>
          <div className="ml-2">
            <ThemeToggle />
          </div>
        </nav>
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            aria-label="Toggle navigation"
            className="p-2 text-foreground hover:text-primary transition-colors"
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      <Drawer
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        side="right"
        title="Navigate"
        description="Explore Spire Technosoft"
        className="md:hidden glass-effect border-l border-border/40"
      >
        <nav className="flex flex-col gap-3 text-base font-bold mt-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "py-4 text-xl border-b border-border/30 transition-all duration-300 tracking-widest uppercase",
                isActive(link.href)
                  ? "text-primary"
                  : "text-foreground/80 hover:text-foreground"
              )}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link href={siteContent.nav.ctaHref} onClick={() => setMobileOpen(false)} className={cn(buttonVariants({ size: "lg" }), "mt-8 w-full h-14 text-lg")}>
            {siteContent.nav.mobileCtaLabel}
          </Link>
        </nav>
      </Drawer>
    </header>
  );
}
