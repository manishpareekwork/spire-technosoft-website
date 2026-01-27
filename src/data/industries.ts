export type IndustryProfile = {
  slug: string;
  title: string;
  summary: string;
  image: string;
  focusAreas: string[];
  typicalPrograms: string[];
  compliance: string[];
  successMetrics: string[];
  caseStudies: {
    title: string;
    href: string;
  }[];
};

export const industryProfiles: IndustryProfile[] = [
  {
    slug: "finance",
    title: "Finance & Capital Markets",
    summary: "Analytics platforms, risk dashboards, and secure digital workbenches for fast-moving markets.",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1400&q=80",
    focusAreas: [
      "Real-time market analytics and data visualization",
      "Regulatory reporting and audit readiness",
      "Secure collaboration across trading and research teams",
    ],
    typicalPrograms: [
      "Trading workspaces with streaming data and configurable layouts",
      "Risk dashboards with scenario modeling and alerts",
      "Client reporting portals with role-based controls",
    ],
    compliance: ["Data retention policies", "Encryption and access controls", "Audit trails for approvals"],
    successMetrics: ["35% faster decision velocity", "<120ms dashboard latency", "800+ analysts onboarded"],
    caseStudies: [
      { title: "Financial Visualization & Analytics Suite", href: "/portfolio/financial-visualization-analytics" },
    ],
  },
  {
    slug: "healthcare",
    title: "Healthcare & Wellness",
    summary: "Patient-first digital ecosystems with HIPAA-aligned security and caregiver workflows.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1400&q=80",
    focusAreas: [
      "Patient engagement and adherence programs",
      "Care-team coordination and scheduling",
      "Remote monitoring with privacy-first data flows",
    ],
    typicalPrograms: [
      "Caregiver portals for triage, reminders, and alerts",
      "Wellness applications with personalization and coaching",
      "Analytics dashboards for intervention effectiveness",
    ],
    compliance: ["HIPAA-ready controls", "Consent management", "PHI segregation and audit trails"],
    successMetrics: ["30% fewer missed visits", "+50% weekly engagement", "90% user satisfaction"],
    caseStudies: [
      { title: "Enterprise Fitness & Wellness Platform", href: "/portfolio/enterprise-fitness-wellness-platform" },
      { title: "Companion App for Older Adults", href: "/portfolio/older-adults-caregivers-companion" },
    ],
  },
  {
    slug: "manufacturing",
    title: "Manufacturing & Quality",
    summary: "Audit, inspection, and quality platforms that connect plants, suppliers, and regulators.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=1400&q=80",
    focusAreas: [
      "Inspection workflows and evidence capture",
      "Supplier quality programs and CAPA automation",
      "Real-time readiness dashboards",
    ],
    typicalPrograms: [
      "Offline inspection tools for distributed plants",
      "Digital certification and compliance reporting",
      "Predictive quality analytics across sites",
    ],
    compliance: ["Multi-region audit trails", "Data residency options", "Regulatory reporting"],
    successMetrics: ["45% faster audit closures", "98% report accuracy", "1,200+ sites onboarded"],
    caseStudies: [
      { title: "Enterprise Audit & Compliance Platform", href: "/portfolio/enterprise-audit-compliance-platform" },
      { title: "Supply-Chain Quality System", href: "/portfolio/supply-chain-quality-system" },
    ],
  },
  {
    slug: "energy",
    title: "Energy & Utilities",
    summary: "IoT-powered dashboards and predictive maintenance for grid and asset operations.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=80",
    focusAreas: [
      "Operational intelligence for field and control-room teams",
      "Predictive maintenance and asset reliability",
      "Safety and incident response automation",
    ],
    typicalPrograms: [
      "Digital twin views and GIS dashboards",
      "Offline field tooling with inspection sync",
      "Energy optimization analytics",
    ],
    compliance: ["OT/IT segmentation", "Device authentication", "Operational audit logs"],
    successMetrics: ["25% downtime reduction", "4,500+ assets tracked", "360-degree asset visibility"],
    caseStudies: [
      { title: "Industrial Operations & Energy Dashboard", href: "/portfolio/industrial-operations-energy-dashboard" },
    ],
  },
  {
    slug: "retail-fmcg",
    title: "Retail & FMCG",
    summary: "Supplier onboarding, compliance, and quality workflows across global retail networks.",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1400&q=80",
    focusAreas: [
      "Supplier onboarding and compliance",
      "Quality inspection and product testing",
      "Inventory and logistics visibility",
    ],
    typicalPrograms: [
      "Supplier portals with scorecards and alerts",
      "Mobile inspection apps with geo-tagged evidence",
      "Analytics for risk and remediation timelines",
    ],
    compliance: ["Vendor access controls", "Audit-ready document vaults", "Global reporting"],
    successMetrics: ["60% less manual effort", "2,000+ suppliers onboarded", "Predictive risk flagged early"],
    caseStudies: [
      { title: "Supply-Chain Quality System", href: "/portfolio/supply-chain-quality-system" },
    ],
  },
];

export function getIndustryProfile(slug: string): IndustryProfile | undefined {
  return industryProfiles.find((industry) => industry.slug === slug);
}
