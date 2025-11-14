import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ActivitySquare, HeartPulse, Factory, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const heroImage = "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1600&q=80";
const aboutPreviewImage = "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=900&q=80";
const domainCards = [
  {
    title: "Enterprise Transformation & Audit Platforms",
    meta: "Manufacturing • Audit • Compliance",
    icon: <ActivitySquare className="h-6 w-6 text-primary" />,
    summary:
      "Built global audit suites with offline capture, media uploads, and certification dashboards for regulators and quality teams.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Healthcare & Wellness Applications",
    meta: "Health & Wellness • Consumer Tech",
    icon: <HeartPulse className="h-6 w-6 text-primary" />,
    summary:
      "Launched mobile-first wellness ecosystems covering onboarding, workout tracking, cognitive care, and caregiver portals.",
    image: "https://images.unsplash.com/photo-1584982751630-71223ec43966?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Supply Chain, Retail & Energy Solutions",
    meta: "Retail • Energy • Industrial",
    icon: <Factory className="h-6 w-6 text-primary" />,
    summary:
      "Delivered compliance and operations platforms for suppliers, grids, and industrial programs with analytics and IoT insights.",
    image: "https://images.unsplash.com/photo-1527430253228-e93688616381?auto=format&fit=crop&w=800&q=80",
  },
];

const impactMetrics = [
  { label: "Products Delivered", value: "25+" },
  { label: "Users Reached", value: "100K+" },
  { label: "Interactions Processed", value: "1M+" },
  { label: "On-time Enterprise Deliveries", value: "100%" },
];

export default function Home() {
  return (
    <div className="flex flex-1 flex-col space-y-12 pb-12 pt-8">
      <section className="container">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#004D32] via-[#0f5b3f] to-[#66C2A5]/60 shadow-xl">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(135deg, rgba(0,77,50,0.82), rgba(102,194,165,0.35)), url(${heroImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="relative z-10 grid gap-8 px-6 py-8 text-white md:px-8 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <Image
                  src="/images/logo/1080x1080.png"
                  alt="Spire Technosoft Logo"
                  width={56}
                  height={56}
                  className="rounded-xl shadow-lg"
                  priority
                />
                <p className="text-[11px] font-semibold uppercase tracking-[0.5em] text-white/80 font-[var(--font-poppins)]">
                  Engineering Business Growth, Together
                </p>
              </div>
              <h1 className="text-3xl font-bold leading-tight md:text-4xl">
                Engineering Business Growth, Together.
              </h1>
              <p className="text-lg text-white/80">
                Empowering global enterprises and startups to innovate faster with AI, cloud, and mobile engineering.
              </p>
              <p className="text-base text-white/80">
                Adaptive delivery squads uniting strategy, design, engineering, and DevOps so enterprises move from concept to
                measurable growth faster.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link href="/solutions">
                  <Button size="lg" className="w-full bg-white text-primary hover:bg-white/90 sm:w-auto">
                    Explore Solutions
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full bg-white/15 text-white hover:bg-white/25 sm:w-auto"
                  >
                    Contact Us
                  </Button>
                </Link>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {impactMetrics.slice(0, 2).map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-2xl bg-gradient-to-br from-white/15 to-white/5 p-4 text-left text-white shadow-[0_10px_25px_rgba(0,0,0,0.25)] backdrop-blur-md"
                  >
                    <p className="text-2xl font-bold">{metric.value}</p>
                    <p className="text-xs uppercase tracking-wide text-white/80">{metric.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative rounded-3xl border border-white/30 bg-[#F7F9F7] p-5 text-slate-700 shadow-xl backdrop-blur-sm dark:border-0 dark:bg-charcoal/95 dark:text-foreground">
              <div
                className="h-48 rounded-3xl"
                style={{
                  backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.1), rgba(0,0,0,0.55)), url(${aboutPreviewImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div className="mt-4 space-y-3">
                <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-secondary">
                  <span className="h-[2px] w-10 bg-[#CBBE8A]" />
                  Preview Work
                </div>
                <p className="text-base text-slate-700">
                  Product engineering for Fortune 500s, life-science innovators, capital-market leaders, and energy programs—shaped
                  to each release plan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container grid gap-10 lg:grid-cols-[3fr,2fr]">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-secondary font-[var(--font-poppins)]">
            About Preview
          </p>
          <h2 className="text-3xl font-semibold">Delivering AI-ready platforms with enterprise rigor</h2>
          <p className="text-muted-foreground">
            Spire Technosoft is a global digital engineering company specializing in AI, cloud, and mobility. We help businesses
            accelerate transformation through scalable and human-centric products.
          </p>
        </div>
        <div className="min-h-[220px] rounded-2xl bg-card shadow-md">
          <div
            className="h-full w-full rounded-2xl"
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.25), rgba(0,0,0,0.6)), url(${aboutPreviewImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </div>
      </section>

      <section className="container space-y-6">
        <div className="flex flex-col gap-2 text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-secondary font-[var(--font-poppins)]">
            Key Domains
          </p>
          <h2 className="text-3xl font-semibold md:text-4xl">
            Built for compliance-heavy, data-rich environments
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {domainCards.map((card) => (
            <Card
              key={card.title}
              className="flex flex-col overflow-hidden rounded-2xl bg-card shadow-[0_15px_30px_rgba(0,0,0,0.08)] transition-transform hover:-translate-y-1"
            >
              <div
                className="h-36 w-full"
                style={{
                  backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.05), rgba(0,0,0,0.55)), url(${card.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <CardHeader>
                <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  {card.icon}
                </div>
                <CardTitle className="text-lg">{card.title}</CardTitle>
                <p className="text-xs uppercase tracking-wide text-muted-foreground">
                  {card.meta}
                </p>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">{card.summary}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="container">
        <div className="relative overflow-hidden rounded-3xl">
          <div
            className="absolute inset-0 opacity-90"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1400&q=80)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "grayscale(0.2)",
            }}
          />
          <div className="relative z-10 grid gap-6 bg-background/80 px-6 py-10 backdrop-blur-lg sm:grid-cols-2 lg:grid-cols-4">
            {impactMetrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-2xl bg-white/85 p-4 text-center text-foreground shadow-md backdrop-blur-sm dark:bg-charcoal/80"
              >
                <p className="text-3xl font-bold text-primary">{metric.value}</p>
                <p className="text-sm uppercase tracking-wide text-muted-foreground">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container rounded-3xl bg-card/70 px-6 py-12 text-center shadow-sm">
        <div className="flex flex-col gap-4">
          <p className="text-sm uppercase tracking-[0.4em] text-secondary font-[var(--font-poppins)]">
            Next Step
          </p>
          <h2 className="text-3xl font-semibold md:text-4xl">Partner with us to build what&apos;s next.</h2>
          <p className="text-muted-foreground md:text-lg">
            Whether you need an audit platform, a wellness companion, or intelligent supply chain tooling, we help you architect
            and launch with confidence.
          </p>
        </div>
        <div className="mt-6 flex justify-center">
          <Link href="/contact">
            <Button size="lg">
              Book a Discovery Call
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
        <div
          className="mt-8 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/20"
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgba(0,152,121,0.55), rgba(43,43,43,0.7)), url(https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=1400&q=80)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "200px",
          }}
        />
      </section>

      <section className="container rounded-3xl bg-gradient-to-br from-primary/15 to-secondary/30 px-8 py-12 text-center shadow-sm">
        <div className="space-y-4">
          <div className="flex items-center justify-center gap-2 text-primary font-[var(--font-poppins)]">
            <Sparkles className="h-5 w-5" />
            <p className="text-sm font-semibold uppercase tracking-widest">
              Innovation Lab
            </p>
          </div>
          <h2 className="text-3xl font-semibold md:text-4xl">
            From R&D prototypes to production-ready intelligence
          </h2>
          <p className="mx-auto max-w-3xl text-base text-muted-foreground md:text-lg">
            Explore how we apply AI, data visualization, computer vision, and immersive interfaces to research-led engagements. We
            coach distributed product teams, build accelerators, and publish insights that keep you ahead.
          </p>
        </div>
        <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/innovation">
            <Button size="lg" className="w-full sm:w-auto">
              Visit the Innovation Lab
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link href="/portfolio">
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              See Case Studies
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
