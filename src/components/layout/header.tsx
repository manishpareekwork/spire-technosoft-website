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
    <header className="sticky top-0 z-50 px-0 pt-4">
      <div className="container">
        <div
          className={cn(
            "flex items-center justify-between rounded-full border px-4 py-3 transition-all duration-500 sm:px-6",
            scrolled
              ? "border-border/70 bg-background/82 shadow-soft backdrop-blur-xl"
              : "border-white/45 bg-white/55 shadow-[0_18px_44px_-34px_rgba(32,41,47,0.22)] backdrop-blur-md dark:border-border/50 dark:bg-surface/72"
          )}
        >
          <Link
            href="/"
            className="group flex items-center gap-3"
            aria-label="Spire Technosoft Home"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/70 shadow-sm transition-transform duration-300 group-hover:scale-105 dark:bg-surface/80">
              <Image
                src="/images/logo/24x24.png"
                alt="Spire Technosoft logo"
                width={28}
                height={28}
                className="rounded-full"
              />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-semibold tracking-tight text-foreground">
                Spire Technosoft
              </span>
              <span className="text-[0.68rem] uppercase tracking-[0.16em] text-muted-foreground">
                Product Engineering Studio
              </span>
            </div>
          </Link>

          <nav className="hidden flex-1 items-center justify-center px-6 md:flex">
            <div className="flex items-center gap-1 rounded-full bg-black/[0.025] p-1 dark:bg-white/[0.04]">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "rounded-full px-4 py-2 text-[0.86rem] font-medium transition-all duration-300",
                    isActive(link.href)
                      ? "bg-white text-foreground shadow-sm dark:bg-surface-2"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                  aria-current={isActive(link.href) ? "page" : undefined}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <ThemeToggle />
            <Link
              href={siteContent.nav.ctaHref}
              className={cn(buttonVariants({ size: "sm" }), "px-5")}
            >
              {siteContent.nav.ctaLabel}
            </Link>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              aria-label="Toggle navigation"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/70 text-foreground shadow-sm transition-colors hover:text-primary dark:bg-surface/80"
              onClick={() => setMobileOpen((prev) => !prev)}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      <Drawer
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        side="right"
        title="Navigate"
        description="Explore Spire Technosoft"
        className="md:hidden border-l border-border/50 bg-background/92 backdrop-blur-2xl"
      >
        <nav className="mt-8 flex flex-col gap-3 text-base font-semibold">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-[1.25rem] px-4 py-4 text-lg transition-all duration-300",
                isActive(link.href)
                  ? "bg-primary/10 text-primary"
                  : "text-foreground/80 hover:bg-white/60 hover:text-foreground dark:hover:bg-surface-2"
              )}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={siteContent.nav.ctaHref}
            onClick={() => setMobileOpen(false)}
            className={cn(buttonVariants({ size: "lg" }), "mt-6 w-full")}
          >
            {siteContent.nav.mobileCtaLabel}
          </Link>
        </nav>
      </Drawer>
    </header>
  );
}
