import Image from "next/image";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const projects = [
  {
    title: "Enterprise Fitness & Wellness Platform",
    industry: "Health & Wellness • Consumer Tech",
    description:
      "Mobile (iOS/Android) and web suite for a global wellness brand—covering onboarding, workouts, nutrition, analytics, and community modules.",
    contributions: [
      "Led offshore teams across mobile/web, defining agile cadences and store submissions.",
      "Architected modular UI/UX system with reusable components for mobile & portal.",
      "Launched analytics dashboards plus automated CI/CD pipelines for staged rollout.",
    ],
    outcomes: "Shipped v1 in 6 months, +50% weekly engagement uplift, 40% fewer prod bugs.",
    tags: ["React Native", "React", "GraphQL", "AWS"],
    image: "/images/img1.png",
    imageAlt: "Mobile and web screens showcasing the wellness platform",
  },
  {
    title: "Companion App for Older Adults & Caregivers",
    industry: "HealthTech • Aging & Memory Support",
    description:
      "Senior-friendly mobile app with location safety, cognitive games, reminders, and messaging; caregiver web portal for oversight.",
    contributions: [
      "Co-created age-inclusive UX, architected mobile/portal stack with offline sync.",
      "Integrated reminder engine, voice prompts, and location alerts.",
      "Mentored team on TDD and sprint delivery for rapid pilot execution.",
    ],
    outcomes: "30% drop in missed appointments, 65% increase in daily cognitive-game usage.",
    tags: ["React Native", "Firebase", "AWS Cognito"],
    image: "/images/senior-care-companion-app.png",
    imageAlt: "Senior-friendly companion app and caregiver portal",
  },
  {
    title: "Enterprise Audit & Compliance Platform",
    industry: "Manufacturing • Quality Assurance",
    description:
      "Web + mobile tool digitizing inspections with offline mode, media uploads, certifications, and analytics dashboards.",
    contributions: [
      "Full-stack architecture (React, Node.js, PostgreSQL) with multi-tenant permissions.",
      "Document generation, e-signature flows, and DevOps automation.",
      "Power BI integration for audit trend reporting and CAPA actions.",
    ],
    outcomes: "45% faster audit cycles and >98% report accuracy.",
    tags: ["React", "Node.js", "PostgreSQL", "Azure"],
    image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Audit and compliance dashboard with inspection interface",
  },
  {
    title: "Supply-Chain Quality System",
    industry: "Retail • FMCG",
    description:
      "SaaS portal plus supplier mobile app for onboarding, product tests, and compliance heat maps across regions.",
    contributions: [
      "Built shared component library and map-based dashboards for alerts.",
      "Connected third-party ERP systems and notification engine.",
    ],
    outcomes: "Rolled to 2000+ supplier sites; 60% less manual data entry.",
    tags: ["Angular", "Node.js", "MongoDB", "AWS"],
    image: "/images/supply-chain-quality-system.png",
    imageAlt: "Supply-chain quality portal with map-based dashboard",
  },
  {
    title: "Financial Visualization & Analytics Suite",
    industry: "Investment Banking",
    description:
      "Real-time trading workspace with drill-down charts, customizable widgets, and streaming market feeds.",
    contributions: [
      "Implemented high-performance chart components (>500 updates/sec).",
      "Collaborated with quant teams on multi-monitor layouts and alerts.",
    ],
    outcomes: "Improved decision velocity by ~35%.",
    tags: ["React", "WebSockets", "D3.js", ".NET"],
    image: "https://images.unsplash.com/photo-1517148815978-75f6acaaf32c?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Dual-monitor trading analytics workspace",
  },
  {
    title: "Industrial Operations & Energy Dashboard",
    industry: "Energy • Utilities",
    description:
      "Web + tablet dashboards for grid monitoring, inspections, and predictive maintenance analytics tied to IoT data.",
    contributions: [
      "Defined UI architecture, GIS map visualization, and offline tablet tooling.",
      "Embedded forecasting models with data science teams.",
    ],
    outcomes: "Cut unplanned downtime by ~25%.",
    tags: ["React", "Node.js", "Azure IoT", "Power BI"],
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Field engineer using tablet with energy dashboard",
  },
  {
    title: "Innovation & R&D Knowledge Platform",
    industry: "Research • Publishing",
    description:
      "Searchable CMS and analytics portal for technical publications and project data with semantic search.",
    contributions: [
      "Designed CMS schema, Elasticsearch queries, and review workflows.",
      "Added analytics dashboards for engagement and role-based access.",
    ],
    outcomes: "70% faster discovery and improved research accessibility.",
    tags: ["Next.js", "Node.js", "Elasticsearch", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Knowledge platform interface in modern workspace",
  },
];

const portfolioFilters = ["Domain", "Platform", "Region", "Impact"];

export default function PortfolioPage(): React.ReactElement {
  return (
    <section className="container animate-softFade py-12 md:py-16">
      <div className="section-shell space-y-10">
        <div className="space-y-4 text-center">
        <p className="text-sm uppercase tracking-[0.4em] text-secondary font-[var(--font-poppins)]">
          Portfolio
        </p>
        <h1 className="text-3xl font-bold md:text-5xl">
          Projects that combine design, data, and domain expertise
        </h1>
        <p className="mx-auto max-w-3xl text-muted-foreground md:text-lg">
          Proof points from wellness ecosystems and cognitive care to enterprise audit, supply-chain quality, financial analytics, and
          industrial operations.
        </p>
      </div>
      <Card className="bg-card shadow-[0_15px_30px_rgba(0,0,0,0.08)]">
        <CardContent className="space-y-4 px-6 py-6 text-center">
          <p className="text-lg font-semibold">
            Our portfolio demonstrates how intelligent engineering drives measurable growth.
          </p>
          <p className="text-sm text-muted-foreground">
            Every project reflects collaboration, innovation, and an obsession with outcomes—spanning industries like healthcare,
            finance, manufacturing, and energy.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {portfolioFilters.map((filter) => (
              <Badge key={filter} variant="outline">
                {filter}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
      <div className="flex flex-col gap-10">
        {projects.map((project, index) => (
          <div
            key={project.title}
            className={cn(
              "min-h-[70vh] rounded-3xl bg-card shadow-[0_20px_40px_rgba(0,0,0,0.07)] p-6 transition-transform duration-500 ease-out hover:-translate-y-2",
              "grid items-center gap-6 lg:grid-cols-2"
            )}
          >
            <div className={cn("order-1", index % 2 === 1 && "lg:order-2")}>
              <Image
                src={project.image}
                alt={project.imageAlt}
                width={1200}
                height={720}
                className="h-[320px] w-full rounded-2xl object-cover md:h-[420px]"
                priority={index < 2}
                unoptimized={project.image.startsWith("http")}
              />
            </div>
            <div className={cn("order-2 space-y-4", index % 2 === 1 && "lg:order-1")}>
              <p className="text-xs uppercase tracking-wide text-muted-foreground">
                {project.industry}
              </p>
              <h3 className="text-2xl font-semibold">{project.title}</h3>
              <p className="text-base text-muted-foreground">{project.description}</p>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                {project.contributions.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="font-semibold text-primary">{project.outcomes}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}
