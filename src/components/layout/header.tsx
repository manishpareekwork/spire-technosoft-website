"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

import { ThemeToggle } from "@/components/ui/theme-toggle";
import { buttonVariants } from "@/components/ui/button-variants";
import { Drawer } from "@/components/ui/drawer";
import { siteContent } from "@/content/site";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/solutions", label: "Solutions" },
  { href: "/industries", label: "Industries" },
  { href: "/innovation", label: "Innovation Lab" },
  { href: "/insights", label: "Resources" },
  { href: "/contact", label: "Contact" },
];

const mobileUtilityLinks = [
  { href: "/portfolio", label: "Case Studies" },
  { href: "/about", label: "About" },
  { href: "/careers", label: "Careers" },
];

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
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-white/10 bg-secondary/92 backdrop-blur-xl transition-all duration-500",
        scrolled && "shadow-[0_20px_60px_-32px_rgba(2,12,27,0.72)]"
      )}
    >
      <div className="container flex h-[5.5rem] items-center justify-between gap-6 py-5">
        <Link href="/" className="shrink-0" aria-label="Spire Technosoft Home">
          <span className="text-[1.9rem] font-bold tracking-[-0.06em] text-white">
            Spire<span className="text-primary">Technosoft</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "relative py-2 text-[0.95rem] font-medium transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-primary after:transition-transform after:duration-300",
                isActive(link.href)
                  ? "text-primary after:scale-x-100"
                  : "text-white/84 hover:text-white"
              )}
              aria-current={isActive(link.href) ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle className="border-white/14 bg-white/8 text-white hover:bg-white/12 hover:text-white dark:border-white/14 dark:bg-white/8" />
          <Link href={siteContent.nav.ctaHref} className={cn(buttonVariants({ variant: "accent", size: "sm" }), "px-6")}>
            {siteContent.nav.ctaLabel}
          </Link>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle className="border-white/14 bg-white/8 text-white hover:bg-white/12 hover:text-white dark:border-white/14 dark:bg-white/8" />
          <button
            aria-label="Toggle navigation"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/8 text-white transition-colors hover:bg-white/14"
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
        className="border-l border-white/10 bg-secondary/96 text-white backdrop-blur-2xl md:hidden"
      >
        <nav className="mt-8 flex flex-col gap-3 text-base font-semibold">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-[1.25rem] px-4 py-4 text-lg transition-all duration-300",
                isActive(link.href)
                  ? "bg-white/8 text-primary"
                  : "text-white/84 hover:bg-white/8 hover:text-white"
              )}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-4 grid gap-3 border-t border-white/10 pt-5">
            {mobileUtilityLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-[1.25rem] px-4 py-4 text-base text-white/78 transition-all duration-300 hover:bg-white/8 hover:text-white"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <Link
            href={siteContent.nav.ctaHref}
            onClick={() => setMobileOpen(false)}
            className={cn(buttonVariants({ variant: "accent", size: "lg" }), "mt-6 w-full")}
          >
            {siteContent.nav.mobileCtaLabel}
          </Link>
        </nav>
      </Drawer>
    </header>
  );
}
