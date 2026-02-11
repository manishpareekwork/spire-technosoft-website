"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import { siteContent } from "@/content/site";

export function FloatingCta() {
  return (
    <div className="fixed bottom-6 right-6 z-50 md:hidden">
      <Button asChild size="lg" className="shadow-float">
        <Link href={siteContent.nav.ctaHref} aria-label="Book a session">
          {siteContent.nav.mobileCtaLabel}
        </Link>
      </Button>
    </div>
  );
}
