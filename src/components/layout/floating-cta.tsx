"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button-variants";
import { cn } from "@/lib/utils";
import { siteContent } from "@/content/site";

export function FloatingCta() {
  return (
    <div className="fixed bottom-6 right-6 z-50 md:hidden animate-slideUp" style={{ animationDelay: '1s' }}>
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-full blur opacity-40 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
        <Link href={siteContent.nav.ctaHref} aria-label="Book a session" className={cn(buttonVariants({ size: "lg" }), "relative shadow-glow border-none px-8 font-bold text-base h-14 w-full")}>
          {siteContent.nav.mobileCtaLabel}
        </Link>
      </div>
    </div>
  );
}
