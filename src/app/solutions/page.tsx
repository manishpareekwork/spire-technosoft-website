import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const solutions = [
  {
    title: "Enterprise Transformation & Audit Platforms",
    description:
      "Real-time compliance, digital inspections, and secure certification workflows for multi-region operators.",
    bullets: [
      "Mobile inspector workflows with offline sync and digital signatures",
      "Executive dashboards surfacing readiness, risk, and remediation",
      "Automated evidence capture for regulators and accreditation bodies",
    ],
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Healthcare & Wellness",
    description:
      "Mobile and web experiences spanning patient engagement, caregiver coordination, and holistic wellness programs.",
    bullets: [
      "Jet108 faCTS App – unified tracker for personal and gym ecosystems",
      "ElderCare Companion – cognitive games, reminders, GPS safety, and caretaker sync",
      "Secure data layers supporting consent, privacy, and multi-region compliance",
    ],
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Supply Chain & Manufacturing",
    description:
      "Cloud-based quality and supplier-audit systems with analytics dashboards for distributed operations.",
    bullets: [
      "Role-based portals coordinating plants, suppliers, and auditors",
      "Warehouse and factory tooling with rugged, tablet-friendly UX",
      "Predictive reporting and KPI automation for procurement leaders",
    ],
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Financial Visualization & Data Tools",
    description:
      "Advanced dashboards for investment banks and financial institutions needing interactive charting and reporting.",
    bullets: [
      "Streaming market data rendered across multi-monitor workstations",
      "Custom visualization libraries for executive and trader workflows",
      "Secure APIs powering annotations, collaboration, and compliance logs",
    ],
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Retail & Consumer Platforms",
    description:
      "Omnichannel e-commerce, loyalty programs, and seasonal analytics to personalize engagement.",
    bullets: [
      "Mobile experiences for shoppers and in-store associates",
      "Catalog orchestration, offline-ready content, and localization",
      "Analytics loops powering promotions, loyalty, and merchandising",
    ],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Industrial & Energy Applications",
    description:
      "Smart grid tools, IoT dashboards, and predictive maintenance interfaces for field and control-room teams.",
    bullets: [
      "Real-time telemetry visualized across rugged tablets and kiosks",
      "Digital twins and asset views tied to engineering KPIs",
      "Edge-to-cloud data pipelines with diagnostics and alerts",
    ],
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function SolutionsPage(): React.ReactElement {
  return (
    <section className="container space-y-10 py-12 md:py-16">
      <div className="space-y-4 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-secondary font-[var(--font-poppins)]">
          Solutions
        </p>
        <h1 className="text-3xl font-bold md:text-5xl">
          Cross-industry platforms built with modular, secure architecture
        </h1>
        <p className="mx-auto max-w-3xl text-muted-foreground md:text-lg">
          We design products that merge technology, compliance, and creativity. Every release balances intelligence, usability, and
          trust at scale.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {solutions.map((solution) => (
          <Card
            key={solution.title}
            className="flex flex-col overflow-hidden bg-card shadow-[0_20px_35px_rgba(0,0,0,0.08)] transition-transform hover:-translate-y-1"
          >
            <div
              className="h-48 w-full"
              style={{
                backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.1), rgba(0,0,0,0.6)), url(${solution.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <CardHeader className="space-y-3">
              <CardTitle className="text-lg">{solution.title}</CardTitle>
              <p className="text-sm text-muted-foreground">{solution.description}</p>
            </CardHeader>
            <CardContent className="mt-auto">
              <ul className="space-y-2 text-sm text-muted-foreground">
                {solution.bullets.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
