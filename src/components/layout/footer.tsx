"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Linkedin, Mail, MapPin, Phone } from "lucide-react";

import { resourceDownloads } from "@/data/resources";
import { buttonVariants } from "@/components/ui/button-variants";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/solutions", label: "Solutions" },
  { href: "/industries", label: "Industries" },
  { href: "/innovation", label: "Innovation Lab" },
  { href: "/portfolio", label: "Case Studies" },
  { href: "/insights", label: "Resources" },
  { href: "/contact", label: "Contact" },
];

const footerContent = [
  {
    match: (pathname: string) => pathname === "/",
    eyebrow: "Start a conversation",
    title: "Need a product team that can shape and ship with you?",
    description:
      "Bring the rough scope, the stalled build, or the next product bet. We will help you find a cleaner path to the first useful release.",
    primary: { label: "Book Free Consultation", href: "/contact" },
    secondary: { label: "View case studies", href: "/portfolio" },
  },
  {
    match: (pathname: string) => pathname.startsWith("/solutions"),
    eyebrow: "Solutions",
    title: "Need help choosing the right software direction?",
    description:
      "We can help shape the architecture, workflow, and release plan before the build turns into unnecessary complexity.",
    primary: { label: "Talk to us", href: "/contact" },
    secondary: { label: "See selected work", href: "/portfolio" },
  },
  {
    match: (pathname: string) => pathname.startsWith("/industries"),
    eyebrow: "Industries",
    title: "Looking for software shaped around your exact workflow?",
    description:
      "We adapt the product, delivery approach, and rollout plan to the way your team actually works, not the other way around.",
    primary: { label: "Book Free Consultation", href: "/contact" },
    secondary: { label: "Explore solutions", href: "/solutions" },
  },
  {
    match: (pathname: string) => pathname.startsWith("/innovation"),
    eyebrow: "Innovation Lab",
    title: "Want to validate an idea before a full build?",
    description:
      "Use the lab to pressure-test a product concept, AI workflow, or internal tool direction before you commit more time and budget.",
    primary: { label: "Book Strategy Session", href: "/contact" },
    secondary: { label: "Explore the lab", href: "/innovation" },
  },
  {
    match: (pathname: string) => pathname.startsWith("/insights"),
    eyebrow: "Stay informed",
    title: "Useful thinking for teams planning the next software move",
    description:
      "Read practical pieces on product delivery, AI workflows, dashboards, and modern software systems before the first call.",
    primary: { label: "Browse insights", href: "/insights" },
    secondary: { label: "Book consultation", href: "/contact" },
  },
  {
    match: (pathname: string) => pathname.startsWith("/portfolio"),
    eyebrow: "Case studies",
    title: "Want to see what this could look like for your team?",
    description:
      "If one of these projects feels close to your context, we can help map the first release and the delivery rhythm behind it.",
    primary: { label: "Book Free Consultation", href: "/contact" },
    secondary: { label: "Explore solutions", href: "/solutions" },
  },
  {
    match: (pathname: string) => pathname.startsWith("/contact"),
    eyebrow: "Book a free consultation",
    title: "Tell us what you are trying to build or improve",
    description:
      "Share the workflow issue, the product idea, or the delivery challenge. We will help you find a credible next step.",
    primary: { label: "Schedule a call", href: "/contact" },
    secondary: { label: "View case studies", href: "/portfolio" },
  },
  {
    match: () => true,
    eyebrow: "Start a conversation",
    title: "Need a product team that can shape and ship with you?",
    description:
      "Bring the rough scope, the stalled build, or the next product bet. We will help you find a cleaner path to the first useful release.",
    primary: { label: "Book Free Consultation", href: "/contact" },
    secondary: { label: "View case studies", href: "/portfolio" },
  },
];

export function Footer(): React.ReactElement {
  const pathname = usePathname() ?? "/";
  const content = footerContent.find((item) => item.match(pathname)) ?? footerContent[footerContent.length - 1];

  return (
    <footer className="site-footer relative z-20 mt-14 overflow-hidden text-white sm:mt-16">
      <div className="absolute inset-0 opacity-60">
        <div className="dark-grid absolute inset-x-0 top-0 h-56" />
        <div className="hero-orb absolute left-[10%] top-20 h-52 w-52 rounded-full bg-primary/12 blur-[90px]" />
        <div className="hero-orb absolute right-[8%] top-14 h-44 w-44 rounded-full bg-accent/10 blur-[88px]" />
      </div>

      <div className="container relative z-10 py-[4.5rem]">
        <div className="footer-cta-panel mx-auto max-w-5xl space-y-5 rounded-[1.35rem] px-6 py-10 text-center sm:px-10">
          <p className="text-[0.74rem] font-semibold uppercase tracking-[0.08em] text-primary">
            {content.eyebrow}
          </p>
          <h2 className="display-1 text-white">{content.title}</h2>
          <p className="mx-auto max-w-2xl body-lg text-white/74">{content.description}</p>
          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href={content.primary.href}
              className={cn(
                buttonVariants({ variant: "accent", size: "xl" }),
                "bg-gradient-brand text-white shadow-brand-glow-sm"
              )}
            >
              {content.primary.label}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href={content.secondary.href}
              className={cn(
                buttonVariants({ variant: "outline", size: "xl" }),
                "border-white/10 bg-white/[0.07] text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06),0_18px_40px_-30px_rgba(0,0,0,0.28)] hover:bg-white/10 hover:text-white"
              )}
            >
              {content.secondary.label}
            </Link>
          </div>
        </div>

        <div className="grid gap-10 py-14 lg:grid-cols-[1.05fr,0.78fr,0.88fr,1fr]">
          <div className="space-y-5">
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-[0.95rem] border border-slate-200/90 bg-white shadow-sm ring-1 ring-black/5 dark:border-slate-200 dark:bg-white">
                <Image
                  src="/images/logo/512x512.png"
                  alt="Spire Technosoft logo"
                  width={30}
                  height={30}
                  className="rounded-[0.7rem]"
                />
              </span>
              <span className="text-[1.9rem] font-bold tracking-[-0.055em] text-white">
                Spire<span className="text-primary">Technosoft</span>
              </span>
            </Link>
            <p className="max-w-sm text-[0.98rem] leading-8 text-white/74">
              Product engineering for teams that need measurable outcomes—custom software, mobile,
              dashboards, and AI workflows from discovery to launch.
            </p>
            <div className="rounded-[1rem] border border-white/10 bg-white/[0.05] p-4">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.08em] text-primary">
                Stay in the loop
              </p>
              <p className="mt-2 text-sm text-white/66">
                For delivery notes, AI workflow thinking, and selected product case studies.
              </p>
              <Link
                href="mailto:contact@spiretechnosoft.com?subject=Subscribe%20to%20Spire%20updates"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white"
              >
                Request updates
                <ArrowRight className="h-4 w-4 text-primary" />
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-[0.74rem] font-semibold uppercase tracking-[0.08em] text-primary">
              Quick Links
            </p>
            <div className="flex flex-col gap-3 text-sm text-white/76">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="transition-colors hover:text-white">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-[0.74rem] font-semibold uppercase tracking-[0.08em] text-primary">
              Contact
            </p>
            <div className="space-y-4 text-sm text-white/76">
              <Link
                href="mailto:contact@spiretechnosoft.com"
                className="flex items-center gap-3 transition-colors hover:text-white"
              >
                <Mail className="h-4 w-4 text-primary" />
                contact@spiretechnosoft.com
              </Link>
              <Link
                href="tel:+919910070933"
                className="flex items-center gap-3 transition-colors hover:text-white"
              >
                <Phone className="h-4 w-4 text-primary" />
                +91 99100 70933
              </Link>
              <p className="flex items-center gap-3 text-white/76">
                <MapPin className="h-4 w-4 text-primary" />
                India | Global delivery
              </p>
              <Link
                href="https://www.linkedin.com/company/spire-technosoft"
                target="_blank"
                className="inline-flex items-center gap-3 transition-colors hover:text-white"
              >
                <Linkedin className="h-4 w-4 text-primary" />
                LinkedIn
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-[0.74rem] font-semibold uppercase tracking-[0.08em] text-primary">
              Guides
            </p>
            <div className="flex flex-col gap-3 text-sm text-white/76">
              {resourceDownloads.slice(0, 3).map((resource) => (
                <a
                  key={resource.title}
                  href={resource.href}
                  download
                  className="transition-colors hover:text-white"
                >
                  {resource.title}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 pt-6 text-[0.72rem] uppercase tracking-[0.08em] text-white/50 md:flex-row md:items-center md:justify-between">
          <p>Copyright {new Date().getFullYear()} Spire Technosoft. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="transition-colors hover:text-white/82">
              Privacy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-white/82">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
