export type PortfolioProject = {
  slug: string;
  title: string;
  headline: string;
  industry: string;
  domain: string;
  platform: string;
  region: string;
  description: string;
  problem: string[];
  constraints: string[];
  challenge: string[];
  solution: string[];
  approach: string[];
  architecture: string[];
  role: string[];
  outcomes: string[];
  timeline: {
    phase: string;
    detail: string;
  }[];
  team: string[];
  metrics: {
    label: string;
    value: string;
  }[];
  techStack: string[];
  image: string;
  imageAlt: string;
  caseStudyPdf: string;
};

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: "enterprise-fitness-wellness-platform",
    title: "Enterprise Fitness & Wellness Platform",
    headline: "Mobile-first wellness ecosystem spanning onboarding, workouts, nutrition, and analytics.",
    industry: "Health & Wellness / Consumer Tech",
    domain: "Healthcare & Wellness",
    platform: "Mobile + Web",
    region: "Global",
    description:
      "Mobile (iOS/Android) and web suite for a global wellness brand-covering onboarding, workouts, nutrition, analytics, and community modules.",
    problem: [
      "Fragmented experiences across regional launches reduced member adoption.",
      "Legacy content delivery could not personalize workouts, nutrition, or analytics.",
    ],
    constraints: [
      "Multi-region rollout needed consistent UX with localized content.",
      "Personalization at scale across mobile and web surfaces.",
    ],
    challenge: [
      "Fragmented experiences across regional launches reduced member adoption.",
      "Legacy content delivery could not personalize workouts, nutrition, or analytics.",
    ],
    solution: [
      "Architected a modular design system and GraphQL APIs to deliver consistent journeys across mobile and portal surfaces.",
      "Launched personalization engines combining biometrics, community signals, and weekly goals.",
    ],
    approach: [
      "Discovery sprint with product, wellness, and coaching stakeholders.",
      "Experience prototyping with weekly engagement analytics.",
      "Phased rollout with regional playbooks and release train governance.",
    ],
    architecture: [
      "React Native mobile app and React web portal",
      "GraphQL API gateway with modular content services",
      "Analytics pipeline for engagement, retention, and personalization",
    ],
    role: [
      "Led offshore squads across mobile/web streams with predictable cadences and store submissions.",
      "Embedded analytics dashboards plus automated CI/CD pipelines for staged rollout.",
    ],
    outcomes: [
      "+50% weekly engagement uplift within 3 months of launch.",
      "40% fewer production bugs due to automated testing and observability.",
    ],
    timeline: [
      { phase: "Weeks 1-2", detail: "Product discovery, journey mapping, and KPI baselining." },
      { phase: "Weeks 3-8", detail: "Mobile + web MVP with personalization and analytics." },
      { phase: "Weeks 9-14", detail: "Regional rollout, community modules, and operations handoff." },
    ],
    team: [
      "Product lead, 2 UX designers, 5 engineers, 1 QA automation specialist.",
      "Client stakeholders across wellness coaching, marketing, and data teams.",
    ],
    metrics: [
      { label: "Members", value: "250K+" },
      { label: "Regions", value: "6" },
      { label: "Engagement", value: "+50%" },
    ],
    techStack: ["React Native", "React", "GraphQL", "AWS"],
    image: "/images/img1.png",
    imageAlt: "Mobile and web screens showcasing the wellness platform",
    caseStudyPdf: "/downloads/case-studies/enterprise-fitness-wellness-platform.pdf",
  },
  {
    slug: "older-adults-caregivers-companion",
    title: "Companion App for Older Adults & Caregivers",
    headline: "Senior-friendly mobile companion with caregiver oversight and safety automations.",
    industry: "HealthTech / Aging & Memory Support",
    domain: "Healthcare & Wellness",
    platform: "Mobile + Portal",
    region: "India & US",
    description:
      "Senior-friendly mobile app with location safety, cognitive games, reminders, and messaging; caregiver web portal for oversight.",
    problem: [
      "Care teams needed a unified view of medication, appointments, and safety alerts.",
      "Accessibility requirements demanded gesture-friendly, high-contrast UX.",
    ],
    constraints: [
      "Privacy-safe handling of location and health data with explicit consent.",
      "Low-friction workflows for older adults in variable connectivity conditions.",
    ],
    challenge: [
      "Care teams needed a unified view of medication, appointments, and safety alerts.",
      "Accessibility requirements demanded gesture-friendly, high-contrast UX.",
    ],
    solution: [
      "Co-created age-inclusive UX, large-type settings, and spoken prompts for critical workflows.",
      "Built caregiver portal with role-based permissions, activity timelines, and alert routing.",
    ],
    approach: [
      "Co-design workshops with caregivers and clinicians for accessibility testing.",
      "Prototype-driven pilots across two regions with weekly feedback loops.",
      "Security review focusing on consent, location safety, and notifications.",
    ],
    architecture: [
      "React Native mobile app with accessibility settings",
      "Caregiver portal with role-based access",
      "Notification and reminder engine with secure messaging",
    ],
    role: [
      "Implemented reminder engine, voice prompts, and location alerts using privacy-safe services.",
      "Mentored squads on TDD and release rituals for rapid pilot execution.",
    ],
    outcomes: [
      "30% drop in missed appointments within two pilot regions.",
      "65% increase in daily cognitive-game participation.",
    ],
    timeline: [
      { phase: "Weeks 1-2", detail: "Discovery, accessibility testing, and pilot scope." },
      { phase: "Weeks 3-7", detail: "Mobile MVP, caregiver portal, and reminders." },
      { phase: "Weeks 8-12", detail: "Regional pilots, analytics dashboards, and training." },
    ],
    team: [
      "Product lead, 1 UX researcher, 3 mobile engineers, 2 web engineers.",
      "Clinical advisors and caregiver coordinators for pilot feedback.",
    ],
    metrics: [
      { label: "Care teams", value: "120+" },
      { label: "Support calls reduced", value: "35%" },
      { label: "NPS", value: "62" },
    ],
    techStack: ["React Native", "Firebase", "AWS Cognito"],
    image: "/images/senior-care-companion-app.png",
    imageAlt: "Senior-friendly companion app and caregiver portal",
    caseStudyPdf: "/downloads/case-studies/older-adults-caregivers-companion.pdf",
  },
  {
    slug: "enterprise-audit-compliance-platform",
    title: "Enterprise Audit & Compliance Platform",
    headline: "Web + mobile tool digitizing inspections with offline mode, media uploads, certifications, and analytics dashboards.",
    industry: "Manufacturing / Quality Assurance",
    domain: "Audit & Compliance",
    platform: "Web + Mobile",
    region: "Europe & APAC",
    description:
      "Digitized inspections with offline capture, guided workflows, certification packaging, and analytics dashboards for regulators and suppliers.",
    problem: [
      "Paper-heavy audit programs created compliance gaps across five countries.",
      "Quality teams lacked real-time visibility into readiness, risks, and approvals.",
    ],
    constraints: [
      "Offline-first inspections for remote facilities and low connectivity.",
      "Multi-tenant governance with regulator and supplier access.",
    ],
    challenge: [
      "Paper-heavy audit programs created compliance gaps across five countries.",
      "Quality teams lacked real-time visibility into readiness, risks, and approvals.",
    ],
    solution: [
      "Implemented multi-tenant permissions, digital forms, and e-signature flows with automatic CAPA creation.",
      "Integrated Power BI for longitudinal trend reporting and remediation forecasting.",
    ],
    approach: [
      "Mapped audit workflows across regulators, plants, and suppliers.",
      "Built offline-first inspection flows with validation and evidence capture.",
      "Scaled release trains with governance checkpoints and training.",
    ],
    architecture: [
      "React web portal and mobile inspector app",
      "Node + PostgreSQL core with multi-tenant RBAC",
      "Power BI analytics with readiness scoring",
    ],
    role: [
      "Architected React/Node/PostgreSQL stack with security reviews and API guardrails.",
      "Automated deployments, regression suites, and environment provisioning.",
    ],
    outcomes: [
      "45% faster audit cycles and >98% report accuracy.",
      "Regulators gained single-pane dashboards with predictive readiness scoring.",
    ],
    timeline: [
      { phase: "Weeks 1-2", detail: "Process mapping, compliance gap analysis, and pilot planning." },
      { phase: "Weeks 3-8", detail: "Offline inspections, dashboards, and CAPA automation." },
      { phase: "Weeks 9-16", detail: "Multi-country rollout, analytics, and governance playbooks." },
    ],
    team: [
      "Program lead, 2 product owners, 6 engineers, 2 QA automation specialists.",
      "Regulatory advisors and plant quality leads across regions.",
    ],
    metrics: [
      { label: "Sites onboarded", value: "1,200+" },
      { label: "Offline inspections", value: "30K+" },
      { label: "Accuracy", value: "98%" },
    ],
    techStack: ["React", "Node.js", "PostgreSQL", "Azure", "Power BI"],
    image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Audit and compliance dashboard with inspection interface",
    caseStudyPdf: "/downloads/case-studies/enterprise-audit-compliance-platform.pdf",
  },
  {
    slug: "supply-chain-quality-system",
    title: "Supply-Chain Quality System",
    headline: "SaaS portal plus supplier mobile app for onboarding, product tests, and compliance heat maps across regions.",
    industry: "Retail / FMCG",
    domain: "Supply Chain & Retail",
    platform: "Web + Mobile",
    region: "APAC",
    description:
      "SaaS portal plus supplier mobile app for onboarding, product tests, corrective actions, and compliance heat maps.",
    problem: [
      "Manual supplier onboarding and audits slowed seasonal launches.",
      "Distributed quality data lived in spreadsheets and inboxes.",
    ],
    constraints: [
      "ERP integrations and multi-region compliance requirements.",
      "Supplier onboarding at scale with consistent evidence capture.",
    ],
    challenge: [
      "Manual supplier onboarding and audits slowed seasonal launches.",
      "Distributed quality data lived in spreadsheets and inboxes.",
    ],
    solution: [
      "Built shared component library, status dashboards, and GIS maps for alerts.",
      "Connected ERP feeds and notification engines for proactive nudges.",
    ],
    approach: [
      "Supplier journey mapping and KPI definition with procurement leadership.",
      "Phased rollout with high-risk suppliers prioritized first.",
      "Automation playbooks for document review and escalation.",
    ],
    architecture: [
      "Angular supplier portal with role-based access",
      "Mobile inspection app for onsite evidence",
      "ERP integrations and analytics layer",
    ],
    role: [
      "Defined multi-tenant architecture with secure document vaults.",
      "Coached client engineers on component reuse and CI/CD pipelines.",
    ],
    outcomes: [
      "Rolled to 2,000+ supplier sites with 60% less manual data entry.",
      "Predictive scoring highlighted at-risk factories two weeks earlier.",
    ],
    timeline: [
      { phase: "Weeks 1-2", detail: "Supplier research, taxonomy, and compliance requirements." },
      { phase: "Weeks 3-7", detail: "Portal MVP, onboarding flows, and inspection tooling." },
      { phase: "Weeks 8-12", detail: "ERP integration, analytics, and rollout playbooks." },
    ],
    team: [
      "Program lead, 4 engineers, 1 UX designer, 1 QA automation specialist.",
      "Supplier compliance and procurement stakeholder group.",
    ],
    metrics: [
      { label: "Suppliers", value: "2,000+" },
      { label: "Manual effort saved", value: "60%" },
      { label: "Regions", value: "4" },
    ],
    techStack: ["Angular", "Node.js", "MongoDB", "AWS"],
    image: "/images/supply-chain-quality-system.png",
    imageAlt: "Supply-chain quality portal with map-based dashboard",
    caseStudyPdf: "/downloads/case-studies/supply-chain-quality-system.pdf",
  },
  {
    slug: "financial-visualization-analytics",
    title: "Financial Visualization & Analytics Suite",
    headline: "Real-time trading workspace with drill-down charts, customizable widgets, and streaming market feeds.",
    industry: "Investment Banking",
    domain: "Financial Services",
    platform: "Web",
    region: "North America",
    description:
      "Real-time trading workspace featuring high-performance charts, streaming data, and configurable workbenches.",
    problem: [
      "Analysts juggled multiple dashboards without synchronized layouts.",
      "Legacy tooling could not render real-time market depth at scale.",
    ],
    constraints: [
      "Sub-120ms latency requirements under peak trading volumes.",
      "Multi-monitor workspaces with strict access controls.",
    ],
    challenge: [
      "Analysts juggled multiple dashboards without synchronized layouts.",
      "Legacy tooling could not render real-time market depth at scale.",
    ],
    solution: [
      "Implemented WebSocket-driven data layer with optimized virtualized components.",
      "Crafted multi-monitor layouts, alerts, and saved workspaces with user preferences.",
    ],
    approach: [
      "Co-designed KPI dashboards with quant and research teams.",
      "Performance profiling to maintain sub-120ms latency.",
      "Phased rollout by desk with training and adoption metrics.",
    ],
    architecture: [
      "React workspace with real-time streaming widgets",
      "WebSocket data services with caching and throttling",
      "Analytics telemetry for usage and performance budgets",
    ],
    role: [
      "Partnered with quant teams to codify KPIs and risk indicators.",
      "Set up performance budgets, memory profiling, and regression suites.",
    ],
    outcomes: [
      "Improved decision velocity by ~35%.",
      "Reduced context switching with unified workspace templates.",
    ],
    timeline: [
      { phase: "Weeks 1-2", detail: "Analytics requirements, workflow mapping, and UX prototypes." },
      { phase: "Weeks 3-6", detail: "Streaming data layer and initial workspace build." },
      { phase: "Weeks 7-12", detail: "Desk-by-desk rollout with performance tuning." },
    ],
    team: [
      "Product owner, 3 frontend engineers, 2 backend engineers, 1 QA automation specialist.",
      "Quant and trading desk partners for validation.",
    ],
    metrics: [
      { label: "Latency", value: "<120ms" },
      { label: "Widgets", value: "25+" },
      { label: "Analysts onboarded", value: "800+" },
    ],
    techStack: ["React", "WebSockets", "D3.js", ".NET"],
    image: "https://images.unsplash.com/photo-1517148815978-75f6acaaf32c?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Dual-monitor trading analytics workspace",
    caseStudyPdf: "/downloads/case-studies/financial-visualization-analytics.pdf",
  },
  {
    slug: "industrial-operations-energy-dashboard",
    title: "Industrial Operations & Energy Dashboard",
    headline: "Web + tablet dashboards for grid monitoring, inspections, and predictive maintenance analytics tied to IoT data.",
    industry: "Energy / Utilities",
    domain: "Energy & Infrastructure",
    platform: "Web + Tablet",
    region: "Middle East",
    description:
      "Web + tablet dashboards for grid monitoring, inspections, and predictive maintenance analytics tied to IoT data.",
    problem: [
      "Operations teams lacked a unified command view connecting OT telemetry and field inspections.",
      "Need for offline-first tooling for remote substations.",
    ],
    constraints: [
      "OT/IT segmentation with strict security controls.",
      "Harsh field conditions requiring resilient offline workflows.",
    ],
    challenge: [
      "Operations teams lacked a unified command view connecting OT telemetry and field inspections.",
      "Need for offline-first tooling for remote substations.",
    ],
    solution: [
      "Defined UI architecture, GIS map visualization, and offline tablet tooling with sync.",
      "Embedded forecasting models co-built with data science teams to predict failures.",
    ],
    approach: [
      "Asset taxonomy mapping with field engineers and control-room teams.",
      "Prototype dashboards for live telemetry and inspections.",
      "Operational playbooks for incident response and escalation.",
    ],
    architecture: [
      "React dashboards with GIS overlays",
      "Azure IoT Hub data ingestion",
      "Predictive analytics layer and alerting workflows",
    ],
    role: [
      "Integrated Azure IoT Hub streams, alarm escalations, and service tickets.",
      "Created operator handbooks, training, and day-2 playbooks.",
    ],
    outcomes: [
      "Cut unplanned downtime by ~25%.",
      "Improved field-to-control-room collaboration with shared telemetry.",
    ],
    timeline: [
      { phase: "Weeks 1-2", detail: "Telemetry assessment, workflow mapping, and KPI baseline." },
      { phase: "Weeks 3-8", detail: "Dashboards, offline tooling, and alerting." },
      { phase: "Weeks 9-14", detail: "Predictive models, rollout, and training." },
    ],
    team: [
      "Program lead, 2 UX designers, 5 engineers, 1 data engineer.",
      "Operations and reliability leaders for validation.",
    ],
    metrics: [
      { label: "Assets tracked", value: "4,500+" },
      { label: "Downtime reduction", value: "25%" },
      { label: "Inspection forms digitized", value: "2,800+" },
    ],
    techStack: ["React", "Node.js", "Azure IoT", "Power BI"],
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Field engineer using tablet with energy dashboard",
    caseStudyPdf: "/downloads/case-studies/industrial-operations-energy-dashboard.pdf",
  },
  {
    slug: "innovation-rd-knowledge-platform",
    title: "Innovation & R&D Knowledge Platform",
    headline: "Searchable CMS and analytics portal for technical publications and project data with semantic search.",
    industry: "Research / Publishing",
    domain: "Knowledge Management",
    platform: "Web",
    region: "Global",
    description:
      "Searchable CMS and analytics portal for technical publications and project data with semantic search.",
    problem: [
      "Research teams faced long discovery cycles due to scattered repositories.",
      "Need to control granular access for different innovation cohorts.",
    ],
    constraints: [
      "Editorial governance with audit trails and approvals.",
      "Semantic search performance across large content volumes.",
    ],
    challenge: [
      "Research teams faced long discovery cycles due to scattered repositories.",
      "Need to control granular access for different innovation cohorts.",
    ],
    solution: [
      "Designed CMS schema, editorial workflows, and Elasticsearch-backed semantic search.",
      "Added analytics dashboards for engagement, contributor KPIs, and topic gaps.",
    ],
    approach: [
      "Taxonomy workshops and knowledge mapping with researchers.",
      "Iterative migration with validation and audit trails.",
      "Training playbooks for editors and reviewers.",
    ],
    architecture: [
      "Next.js CMS with role-based workflows",
      "Elasticsearch semantic search layer",
      "Analytics dashboards with engagement insights",
    ],
    role: [
      "Facilitated taxonomy workshops and migration playbooks.",
      "Implemented role-based access and governance automation.",
    ],
    outcomes: [
      "70% faster research discovery and improved publishing cadence.",
      "Centralized institutional knowledge with auditable trails.",
    ],
    timeline: [
      { phase: "Weeks 1-2", detail: "Knowledge audit and taxonomy alignment." },
      { phase: "Weeks 3-7", detail: "CMS build, semantic search, and pilot migration." },
      { phase: "Weeks 8-12", detail: "Full migration, analytics, and training." },
    ],
    team: [
      "Product lead, 3 engineers, 1 data engineer, 1 UX designer.",
      "Research governance committee for validation.",
    ],
    metrics: [
      { label: "Articles migrated", value: "8,000+" },
      { label: "Search latency", value: "<300ms" },
      { label: "Publishing cadence", value: "+40%" },
    ],
    techStack: ["Next.js", "Node.js", "Elasticsearch", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Knowledge platform interface in modern workspace",
    caseStudyPdf: "/downloads/case-studies/innovation-rd-knowledge-platform.pdf",
  },
];

export function getPortfolioProject(slug: string): PortfolioProject | undefined {
  return portfolioProjects.find((project) => project.slug === slug);
}
