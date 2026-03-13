"use client";

import Link from "next/link";

import { buttonVariants } from "@/components/ui/button-variants";
import { cn } from "@/lib/utils";
import { siteContent } from "@/content/site";

export function FloatingCta() {
  return (
    <div className="fixed bottom-5 right-5 z-50 md:hidden animate-slideUp" style={{ animationDelay: "1s" }}>
      <div className="relative group">
        <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary/35 to-accent/35 blur opacity-70 transition-opacity duration-300 group-hover:opacity-100" />
        <Link
          href={siteContent.nav.ctaHref}
          aria-label="Book a session"
          className={cn(buttonVariants({ size: "lg" }), "relative px-7")}
        >
          {siteContent.nav.mobileCtaLabel}
        </Link>
      </div>
    </div>
  );
}
