import { siteContent } from "@/content/site";

export const siteUrl = "https://www.spiretechnosoft.com";
export const siteName = siteContent.seo.siteName;
export const siteKeywords = siteContent.seo.baseKeywords;

export function absoluteUrl(path = "/") {
  return new URL(path, siteUrl).toString();
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteName,
  url: siteUrl,
  logo: absoluteUrl("/images/logo/1080x1080.png"),
  description: siteContent.seo.baseDescription,
  sameAs: ["https://www.linkedin.com/company/spire-technosoft"],
  areaServed: ["India", "United States", "Europe", "APAC"],
  knowsAbout: siteKeywords,
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "sales",
      email: "contact@spiretechnosoft.com",
      telephone: "+91 99100 70933",
      areaServed: "Global",
      availableLanguage: ["English"],
    },
  ],
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
  },
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteName,
  url: siteUrl,
  description: siteContent.seo.baseDescription,
  inLanguage: "en",
  publisher: {
    "@type": "Organization",
    name: siteName,
    url: siteUrl,
  },
};
