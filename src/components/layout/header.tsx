"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Menu, Search, X } from "lucide-react";
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

const quickLinks = [
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
        "sticky top-0 z-50 border-b border-white/8 bg-[linear-gradient(180deg,rgba(10,18,33,0.82),rgba(10,18,33,0.66))] backdrop-blur-xl transition-all duration-500",
        scrolled
          ? "border-white/10 bg-[linear-gradient(180deg,rgba(10,18,33,0.92),rgba(10,18,33,0.78))] shadow-[0_24px_70px_-34px_rgba(2,6,23,0.72)]"
          : "shadow-none"
      )}
    >
      <div className="hidden border-b border-white/8 md:block">
        <div className="container flex h-10 items-center justify-between text-[0.72rem] font-semibold uppercase tracking-[0.08em] text-white/52">
          <div className="flex items-center gap-5">
            <span>Shipping custom software, AI workflows, and modern product systems</span>
          </div>
          <div className="flex items-center gap-4">
            {quickLinks.map((link) => (
              <Link key={link.href} href={link.href} className="transition-colors hover:text-white/82">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="container flex h-[5.25rem] items-center justify-between gap-6">
        <Link href="/" className="flex shrink-0 items-center gap-3" aria-label="Spire Technosoft Home">
          <span className="flex h-11 w-11 items-center justify-center rounded-[0.95rem] border border-white/10 bg-white/[0.08] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)] backdrop-blur">
            <Image
              src="/images/logo/512x512.png"
              alt="Spire Technosoft logo"
              width={28}
              height={28}
              className="rounded-[0.7rem]"
              priority
            />
          </span>
          <span className="text-[1.6rem] font-bold tracking-[-0.055em] text-white">
            Spire<span className="text-primary">Technosoft</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "nav-link-modern relative py-2 text-[0.92rem] font-medium transition-colors duration-300",
                isActive(link.href) ? "text-white" : "text-white/74 hover:text-white"
              )}
              aria-current={isActive(link.href) ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/insights"
            className="inline-flex h-10 items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 text-sm text-white/72 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)] transition-colors hover:bg-white/[0.1] hover:text-white"
          >
            <Search className="h-4 w-4" />
            <span>Insights</span>
          </Link>
          <ThemeToggle className="border-white/10 bg-white/[0.06] text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)] hover:bg-white/[0.1] hover:text-white dark:border-white/10 dark:bg-white/[0.06]" />
          <Link
            href={siteContent.nav.ctaHref}
            className={cn(
              buttonVariants({ variant: "accent", size: "sm" }),
              "bg-gradient-brand px-6 text-white shadow-brand-glow-sm"
            )}
          >
            {siteContent.nav.ctaLabel}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle className="border-white/10 bg-white/[0.06] text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)] hover:bg-white/[0.1] hover:text-white dark:border-white/10 dark:bg-white/[0.06]" />
          <button
            aria-label="Toggle navigation"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)] transition-colors hover:bg-white/[0.12]"
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
        className="border-transparent bg-[linear-gradient(180deg,rgba(10,18,33,0.97),rgba(13,27,46,0.98))] text-white backdrop-blur-2xl md:hidden"
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
          <div className="mt-4 grid gap-3 pt-5">
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
