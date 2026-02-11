export type SolutionDetail = {
  slug: string;
  title: string;
  summary: string;
  intro: string;
  image: string;
  tags: string[];
  outcomes: string[];
  typicalProblems: string[];
  deliveryPlan: {
    phase: string;
    timeframe: string;
    items: string[];
  }[];
  architecture: {
    layer: string;
    items: string[];
  }[];
  security: string[];
  successMetrics: string[];
  caseStudies: {
    title: string;
    href: string;
  }[];
};

export const solutionDetails: SolutionDetail[] = [
  {
    slug: "audit",
    title: "Audit & Compliance Platforms",
    summary: "Digitize inspections, evidence capture, certifications, and regulator dashboards with offline-ready tooling.",
    intro:
      "Regulated programs need traceability, speed, and accuracy. We build audit ecosystems that replace paper processes and keep evidence audit-ready across regions.",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1400&q=80",
    tags: ["Manufacturing", "ESG", "Quality", "Regulatory"],
    outcomes: [
      "Accelerated audit cycles with offline-first inspections.",
      "Real-time readiness visibility across plants and vendors.",
      "Automated CAPA workflows tied to compliance KPIs.",
    ],
    typicalProblems: [
      "Paper-heavy inspections slowing closures and increasing audit risk.",
      "Inconsistent evidence capture across regions and vendors.",
      "Limited visibility into readiness, CAPA progress, and certification status.",
    ],
    deliveryPlan: [
      {
        phase: "Discovery",
        timeframe: "Weeks 1-2",
        items: [
          "Process mapping, evidence taxonomy, and compliance gap assessment.",
          "Define inspection roles, approval workflows, and reporting KPIs.",
          "Select pilot sites and success metrics for the first release train.",
        ],
      },
      {
        phase: "Pilot Build",
        timeframe: "Weeks 3-6",
        items: [
          "Offline-ready inspector app with media capture and validation rules.",
          "Supervisor dashboards with readiness scoring and remediation queues.",
          "Compliance data model plus audit trail logging.",
        ],
      },
      {
        phase: "Scale",
        timeframe: "Weeks 7-12",
        items: [
          "Multi-tenant portal, certificate generation, and CAPA automation.",
          "Analytics dashboards with predictive risk insights.",
          "Integrations with QMS/ERP and single sign-on.",
        ],
      },
    ],
    architecture: [
      {
        layer: "Experience Layer",
        items: ["Inspector mobile app", "Supervisor portal", "Regulator dashboards"],
      },
      {
        layer: "Integration Layer",
        items: ["ERP/QMS connectors", "Document vaults", "IoT evidence ingestion"],
      },
      {
        layer: "Data & Intelligence",
        items: ["Evidence store", "Risk scoring models", "Certification analytics"],
      },
      {
        layer: "Ops & Governance",
        items: ["RBAC", "Audit trails", "Release governance"],
      },
    ],
    security: [
      "Role-based access and approval workflows.",
      "Immutable audit logs with evidence versioning.",
      "Encryption in transit and at rest with data residency options.",
      "SOC2/ISO-aligned controls and periodic security reviews.",
    ],
    successMetrics: [
      "45% faster audit closures",
      "98% report accuracy",
      "30K+ offline inspections digitized",
    ],
    caseStudies: [
      { title: "Enterprise Audit & Compliance Platform", href: "/portfolio/enterprise-audit-compliance-platform" },
    ],
  },
  {
    slug: "healthcare",
    title: "Healthcare & Wellness Ecosystems",
    summary: "Connect patients, caregivers, and clinicians with secure mobile and web experiences.",
    intro:
      "We build healthcare platforms that balance compassionate UX with HIPAA-grade security. From patient onboarding to remote monitoring, every workflow is designed for adherence and outcomes.",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1400&q=80",
    tags: ["Digital Health", "Wellness", "Care Teams", "Patient Experience"],
    outcomes: [
      "Improved adherence with personalized care journeys.",
      "Unified caregiver and clinician visibility.",
      "HIPAA-grade security with consent-led data flows.",
    ],
    typicalProblems: [
      "Fragmented patient journeys across apps, clinics, and programs.",
      "Limited caregiver visibility into schedules, adherence, and alerts.",
      "Regulatory and privacy constraints slowing innovation cycles.",
    ],
    deliveryPlan: [
      {
        phase: "Discovery",
        timeframe: "Weeks 1-2",
        items: [
          "Journey mapping with patients, caregivers, and clinicians.",
          "Privacy impact assessment and consent flow design.",
          "Define measurable outcomes for adherence and engagement.",
        ],
      },
      {
        phase: "Pilot Build",
        timeframe: "Weeks 3-6",
        items: [
          "Mobile onboarding, reminders, and care-plan modules.",
          "Care-team portal for triage, scheduling, and remote monitoring.",
          "Analytics dashboards for engagement and intervention tracking.",
        ],
      },
      {
        phase: "Scale",
        timeframe: "Weeks 7-12",
        items: [
          "Personalization engine with biometric and behavioral signals.",
          "Integration with EHR/EMR systems and secure messaging.",
          "Operational playbooks for support, escalation, and updates.",
        ],
      },
    ],
    architecture: [
      {
        layer: "Experience Layer",
        items: ["Patient mobile app", "Caregiver portal", "Clinician workbench"],
      },
      {
        layer: "Integration Layer",
        items: ["EHR/EMR connectors", "Device integrations", "Notification services"],
      },
      {
        layer: "Data & Intelligence",
        items: ["Consent-led data lake", "Engagement scoring", "Risk alerts"],
      },
      {
        layer: "Ops & Governance",
        items: ["HIPAA controls", "Audit trails", "Clinical QA workflows"],
      },
    ],
    security: [
      "HIPAA-ready data storage and access controls.",
      "Consent management and PHI segregation.",
      "Audit trails for every care interaction.",
      "Secure messaging and device encryption standards.",
    ],
    successMetrics: [
      "90% user satisfaction",
      "30% fewer missed visits",
      "+50% weekly engagement",
    ],
    caseStudies: [
      { title: "Enterprise Fitness & Wellness Platform", href: "/portfolio/enterprise-fitness-wellness-platform" },
      { title: "Companion App for Older Adults", href: "/portfolio/older-adults-caregivers-companion" },
    ],
  },
  {
    slug: "supply-chain",
    title: "Supply Chain & Retail Modernization",
    summary: "Supplier onboarding, quality workflows, and predictive analytics in one compliant platform.",
    intro:
      "We help procurement and operations leaders build resilient supply chains with real-time visibility across suppliers, factories, and logistics partners.",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1400&q=80",
    tags: ["Retail", "FMCG", "Procurement", "Supplier Ops"],
    outcomes: [
      "Faster supplier onboarding and compliance readiness.",
      "Predictive risk alerts with real-time dashboards.",
      "Automated document and approval workflows.",
    ],
    typicalProblems: [
      "Manual supplier onboarding and inspection workflows.",
      "Disconnected data across ERP, QA, and field teams.",
      "Limited insight into quality risks and remediation status.",
    ],
    deliveryPlan: [
      {
        phase: "Discovery",
        timeframe: "Weeks 1-2",
        items: [
          "Supplier journey mapping and compliance requirements review.",
          "Data model and KPI alignment with procurement leadership.",
          "Pilot scope for priority suppliers and facilities.",
        ],
      },
      {
        phase: "Pilot Build",
        timeframe: "Weeks 3-6",
        items: [
          "Supplier portal for onboarding, document collection, and KPI dashboards.",
          "Mobile inspection workflows with geo-tagged evidence.",
          "Quality dashboards highlighting risk and CAPA status.",
        ],
      },
      {
        phase: "Scale",
        timeframe: "Weeks 7-12",
        items: [
          "ERP integrations, automated alerts, and compliance scoring.",
          "Predictive analytics for at-risk suppliers and lead times.",
          "Playbooks for rollout across regions and categories.",
        ],
      },
    ],
    architecture: [
      {
        layer: "Experience Layer",
        items: ["Supplier portal", "Field inspection app", "Executive dashboards"],
      },
      {
        layer: "Integration Layer",
        items: ["ERP feeds", "Document vault", "Notification services"],
      },
      {
        layer: "Data & Intelligence",
        items: ["Supplier scorecards", "Risk heat maps", "Predictive lead-time models"],
      },
      {
        layer: "Ops & Governance",
        items: ["Vendor RBAC", "Audit trails", "Compliance workflows"],
      },
    ],
    security: [
      "Secure supplier access with granular permissions.",
      "Document vault with versioning and approvals.",
      "Audit-ready reporting and governance logs.",
      "Data residency options for multi-region compliance.",
    ],
    successMetrics: [
      "60% less manual effort",
      "2,000+ supplier sites onboarded",
      "Predictive risk flagged 2 weeks earlier",
    ],
    caseStudies: [
      { title: "Supply-Chain Quality System", href: "/portfolio/supply-chain-quality-system" },
    ],
  },
  {
    slug: "industrial-iot",
    title: "Industrial & IoT Intelligence",
    summary: "Operational dashboards, digital twins, and predictive maintenance for field and control-room teams.",
    intro:
      "Spire builds industrial intelligence platforms that fuse IoT telemetry with actionable workflows for reliability, safety, and energy efficiency.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=80",
    tags: ["Energy", "Utilities", "Industrial Ops", "IoT"],
    outcomes: [
      "Reduced downtime with predictive maintenance models.",
      "Unified telemetry across OT and field operations.",
      "Offline-ready tooling for remote assets.",
    ],
    typicalProblems: [
      "Telemetry scattered across SCADA, ERP, and manual field logs.",
      "Limited predictive insights for maintenance planning.",
      "Remote sites lacking offline-capable tooling.",
    ],
    deliveryPlan: [
      {
        phase: "Discovery",
        timeframe: "Weeks 1-2",
        items: [
          "Asset taxonomy and data source assessment.",
          "Define reliability KPIs and alert thresholds.",
          "Prototype experience flows for operators and field crews.",
        ],
      },
      {
        phase: "Pilot Build",
        timeframe: "Weeks 3-6",
        items: [
          "Operational dashboards with live telemetry ingestion.",
          "Offline tablet workflows for inspections and maintenance.",
          "Alerting and escalation playbooks for critical events.",
        ],
      },
      {
        phase: "Scale",
        timeframe: "Weeks 7-12",
        items: [
          "Predictive maintenance models and digital twin views.",
          "Integration with ticketing and asset systems.",
          "Reliability playbooks and day-2 monitoring dashboards.",
        ],
      },
    ],
    architecture: [
      {
        layer: "Experience Layer",
        items: ["Control-room dashboards", "Field technician app", "Executive reporting"],
      },
      {
        layer: "Integration Layer",
        items: ["IoT gateway", "SCADA/PLC connectors", "Ticketing integrations"],
      },
      {
        layer: "Data & Intelligence",
        items: ["Real-time telemetry lake", "Predictive maintenance models", "Anomaly alerts"],
      },
      {
        layer: "Ops & Governance",
        items: ["Device auth", "Network segmentation", "Audit-ready logs"],
      },
    ],
    security: [
      "Device authentication and secure telemetry ingestion.",
      "Network segmentation between OT and IT environments.",
      "Immutable audit logs for operational actions.",
      "Regular vulnerability assessments and patch cycles.",
    ],
    successMetrics: [
      "25% downtime reduction",
      "4,500+ assets tracked",
      "360-degree asset visibility",
    ],
    caseStudies: [
      { title: "Industrial Operations & Energy Dashboard", href: "/portfolio/industrial-operations-energy-dashboard" },
    ],
  },
];

export function getSolutionDetail(slug: string): SolutionDetail | undefined {
  return solutionDetails.find((solution) => solution.slug === slug);
}
