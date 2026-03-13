import type { MetadataRoute } from "next";

import { industryProfiles } from "@/data/industries";
import { insightArticles } from "@/data/insights";
import { portfolioProjects } from "@/data/portfolio";
import { solutionDetails } from "@/data/solutions";
import { siteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes = [
    { path: "/", priority: 1, changeFrequency: "weekly" as const },
    { path: "/about", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/solutions", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/industries", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/portfolio", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/innovation", priority: 0.75, changeFrequency: "monthly" as const },
    { path: "/careers", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/contact", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/insights", priority: 0.85, changeFrequency: "weekly" as const },
  ].map((route) => ({
    url: `${siteUrl}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const solutionRoutes = solutionDetails.map((solution) => ({
    url: `${siteUrl}/solutions/${solution.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.78,
  }));

  const industryRoutes = industryProfiles.map((industry) => ({
    url: `${siteUrl}/industries/${industry.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.78,
  }));

  const portfolioRoutes = portfolioProjects.map((project) => ({
    url: `${siteUrl}/portfolio/${project.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.72,
  }));

  const insightRoutes = insightArticles.map((article) => ({
    url: `${siteUrl}/insights/${article.slug}`,
    lastModified: new Date(article.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    ...staticRoutes,
    ...solutionRoutes,
    ...industryRoutes,
    ...portfolioRoutes,
    ...insightRoutes,
  ];
}
