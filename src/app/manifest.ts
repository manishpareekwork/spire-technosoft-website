import type { MetadataRoute } from "next";

import { siteContent } from "@/content/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteContent.seo.baseTitle,
    short_name: siteContent.seo.siteName,
    description: siteContent.seo.baseDescription,
    start_url: "/",
    display: "standalone",
    background_color: "#f8f3ed",
    theme_color: "#376f66",
    icons: [
      {
        src: "/images/logo/512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/images/logo/1080x1080.png",
        sizes: "1080x1080",
        type: "image/png",
      },
    ],
  };
}
