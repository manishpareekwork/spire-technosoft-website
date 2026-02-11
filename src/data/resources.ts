import { siteContent } from "@/content/site";

export type ResourceDownload = {
  title: string;
  description: string;
  href: string;
  label: string;
  cover: string;
  meta: string;
};

export const resourceDownloads: ResourceDownload[] = siteContent.resources;
