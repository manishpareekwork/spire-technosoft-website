import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const solutionSections = [
  {
    title: "Enterprise Transformation & Audit Solutions",
    intro: "Digitize and streamline audit, inspection, and certification processes for distributed field teams and regulators.",
    detail:
      "From offline-ready mobile data capture to real-time dashboards, we ensure transparency, traceability, and accuracy across global operations.",
    features: [
      "Role-based workbenches with checklists, annotations, and multimedia evidence capture.",
      "Automation pipelines converting findings into certificates, CAPA, and compliance packages.",
      "Analytics overlays that surface readiness, risk, and remediation progress in real time.",
    ],
    outcomes: "Outcomes: 45% faster audit closure | 98% report accuracy.",
    industries: "Typical clients: manufacturing, ESG programs, certification bodies across APAC, MEA, and North America.",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Healthcare & Wellness Ecosystems",
    intro: "Empower patients, caregivers, clinicians, and wellness communities with connected applications.",
    detail:
      "We design mobile and web experiences spanning onboarding, monitoring, caregiver coordination, and digital therapeutics.",
    features: [
      "HIPAA-ready data layers with consent, privacy controls, and audit trails.",
      "Personalization engines blending biometrics, behavioral data, and coaching protocols.",
      "Care-team portals for scheduling, remote monitoring, and intervention workflows.",
    ],
    outcomes: "Outcomes: 90% user satisfaction | 30% fewer missed appointments.",
    industries: "Typical clients: hospital networks, wellness brands, med-tech startups in India, EU, and the US.",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Supply Chain & Retail Modernization",
    intro: "Build resilient, data-driven supply chains that connect suppliers, compliance, inventory, and analytics.",
    detail:
      "Our cloud-based suites orchestrate onboarding, quality programs, and predictive insights for procurement leaders and plant managers.",
    features: [
      "Supplier portals with onboarding journeys, document collection, and KPI dashboards.",
      "Mobile tooling for factory inspections, IoT telemetry, and geo-tagged evidence capture.",
      "Predictive analytics reducing manual effort and highlighting at-risk workflows.",
    ],
    outcomes: "Outcomes: 60% less manual effort | 2,000+ supplier onboardings automated.",
    industries: "Typical clients: retail, FMCG, logistics, and energy operators with global partner networks.",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Industrial & Energy Intelligence",
    intro: "Deliver IoT-powered dashboards for field engineers, asset managers, and energy operators.",
    detail:
      "From predictive maintenance to energy optimization, our systems provide operational foresight, safety, and reliability.",
    features: [
      "Digital twins mapping equipment, telemetry, events, and maintenance schedules.",
      "Edge-to-cloud data pipelines with diagnostics, alerting, and remote-control hooks.",
      "Immersive visualizations (3D, AR, GIS) for control-room and on-site experiences.",
    ],
    outcomes: "Outcomes: 25% downtime reduction | 360° equipment visibility.",
    industries: "Typical clients: utilities, smart grid programs, industrial automation, and infrastructure agencies.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function SolutionsPage(): React.ReactElement {
  return (
    <section className="container animate-softFade space-y-10 py-12 md:py-16">
      <div className="space-y-4 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-secondary font-[var(--font-poppins)]">
          Solutions
        </p>
        <h1 className="text-3xl font-bold md:text-5xl">
          Cross-industry platforms built with modular, secure architecture
        </h1>
        <p className="mx-auto max-w-3xl text-muted-foreground md:text-lg">
          Spire Technosoft delivers domain-focused digital solutions engineered for reliability, scalability, and measurable outcomes.
          Each solution blends technology, design, and process expertise tailored to your industry context.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {solutionSections.map((solution) => (
          <Card key={solution.title} className="flex flex-col overflow-hidden">
            <div
              className="h-40 w-full"
              style={{
                backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.15), rgba(0,0,0,0.45)), url(${solution.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <CardHeader className="space-y-2">
              <CardTitle className="text-xl">{solution.title}</CardTitle>
              <p className="text-sm text-muted-foreground">{solution.intro}</p>
              <p className="text-xs uppercase tracking-wide text-secondary">{solution.industries}</p>
            </CardHeader>
            <CardContent className="flex flex-1 flex-col gap-3">
              <p className="text-sm text-muted-foreground">{solution.detail}</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {solution.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm font-semibold text-primary">{solution.outcomes}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
