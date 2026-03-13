import type { Metadata } from "next";
import { Montserrat, Open_Sans, Poppins, Inter } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ScrollProgress } from "@/components/layout/scroll-progress";
import { FloatingCta } from "@/components/layout/floating-cta";
import { ThemeProvider, ThemeScript } from "@/components/theme-provider";
import { GoogleAnalytics } from "@/components/analytics/google-analytics";
import { siteContent } from "@/content/site";
import {
  organizationJsonLd,
  siteKeywords,
  siteName,
  siteUrl,
  websiteJsonLd,
} from "@/lib/seo";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteContent.seo.baseTitle,
  description: siteContent.seo.baseDescription,
  keywords: [...siteKeywords],
  applicationName: siteName,
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  category: "technology",
  alternates: {
    canonical: "/",
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/images/logo/24x24.png", sizes: "24x24", type: "image/png" },
      { url: "/images/logo/1080x1080.png", sizes: "1080x1080", type: "image/png" },
    ],
    apple: [
      { url: "/images/logo/1080x1080.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName,
    locale: "en_IN",
    title: siteContent.seo.baseTitle,
    description: siteContent.seo.baseDescription,
    images: [{ url: siteContent.seo.defaultOg }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteContent.seo.baseTitle,
    description: siteContent.seo.baseDescription,
    images: [siteContent.seo.defaultOg],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${montserrat.variable} ${openSans.variable} ${poppins.variable} ${inter.variable} antialiased bg-background font-sans text-foreground`}
      >
        <ThemeScript attribute="class" defaultTheme="system" enableSystem />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <GoogleAnalytics />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
          />
          <div className="relative flex min-h-screen flex-col">
            <ScrollProgress />
            <Header />
            <main className="relative z-10 flex-1">{children}</main>
            <FloatingCta />
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
