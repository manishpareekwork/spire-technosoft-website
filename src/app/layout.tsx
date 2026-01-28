import type { Metadata } from "next";
import { Montserrat, Open_Sans, Poppins, Inter } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ParticleBackground } from "@/components/ui/particle-background";
import { ThemeProvider } from "@/components/theme-provider";
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
  title: "Spire Technosoft | Secure Digital Product Engineering",
  description:
    "Spire Technosoft builds secure, scalable web & mobile products with AI, cloud, and modern UX—end-to-end delivery for enterprises and startups.",
  icons: {
    icon: [
      { url: "/images/logo/24x24.png", sizes: "24x24", type: "image/png" },
      { url: "/images/logo/1080x1080.png", sizes: "1080x1080", type: "image/png" },
    ],
    apple: [
      { url: "/images/logo/1080x1080.png", sizes: "180x180", type: "image/png" },
    ],
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
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <ParticleBackground />
            <Header />
            <main className="relative z-10 flex-1 bg-background/95">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
