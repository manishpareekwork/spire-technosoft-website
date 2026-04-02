/**
 * Spire-owned products (see PRODUCT_DESCRIPTIONS.md / ECOSYSTEM_AND_IMAGE_BRIEF.md).
 * Distinct from client portfolio case studies.
 */
export type EcosystemProduct = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
};

export const ecosystemProducts: EcosystemProduct[] = [
  {
    slug: "platform-admin",
    title: "Platform Admin",
    tagline: "Tenant governance and onboarding control plane.",
    description:
      "Central governance for the Spire ecosystem: tenant lifecycle, product entitlements, themes, dashboard configuration, and consistent onboarding before other Spire products go live.",
  },
  {
    slug: "lift-erp",
    title: "Lift ERP",
    tagline: "Elevator service, project, and contract operations ERP.",
    description:
      "India-first multi-tenant ERP for elevator businesses—customer and site management, asset tracking, service jobs, installations, quotations, warranty, and AMC/CAMC—with BillerHQ for billing and Security for uploads.",
  },
  {
    slug: "security",
    title: "Security",
    tagline: "Shared file scanning and upload protection.",
    description:
      "Reusable APIs and SDK patterns for malware scanning across Spire products—hash caching, cloud verification, optional local agents—so every app gets the same upload safety standard.",
  },
  {
    slug: "spire-assessments",
    title: "Spire Assessments",
    tagline: "Question bank and exam paper generation.",
    description:
      "Structured question intake, review and approval, print-ready exam papers, per-student variants, and answer-key alignment for schools, institutes, and exam operations teams.",
  },
  {
    slug: "billerhq",
    title: "BillerHQ",
    tagline: "Multi-tenant billing and invoicing.",
    description:
      "Invoices, payments, credit and debit notes, recurring billing, exports, and reporting—India-first GST readiness with room for multi-currency and broader tax models.",
  },
  {
    slug: "digital-marketing",
    title: "Spire Digital Marketing",
    tagline: "AI-assisted branded campaign content.",
    description:
      "Turns brand context and offerings into platform-ready social assets—multilingual variants, approvals, and publish or export for Instagram, Facebook, and WhatsApp at enterprise quality.",
  },
];
