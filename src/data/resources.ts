export type ResourceDownload = {
  title: string;
  description: string;
  href: string;
  label: string;
};

export const resourceDownloads: ResourceDownload[] = [
  {
    title: "Company one-pager",
    description: "Snapshot of services, outcomes, and delivery model for quick stakeholder alignment.",
    href: "/downloads/company-one-pager.pdf",
    label: "PDF",
  },
  {
    title: "Platform Pods overview",
    description: "How cross-functional pods accelerate release trains, governance, and measurable KPIs.",
    href: "/downloads/platform-pods-overview.pdf",
    label: "PDF",
  },
  {
    title: "Innovation Lab sprint brochure",
    description: "Two-week sprint structure, artifacts, and handoff checklist for R&D programs.",
    href: "/downloads/innovation-lab-sprint-brochure.pdf",
    label: "PDF",
  },
];
