import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { StoreProvider } from "@/components/store-provider";
import { ToastProvider } from "@/components/toast-provider";
import { SiteShell } from "@/components/site-shell";
import { company } from "@/lib/data";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.onifiventures.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "ONIFI VENTURES LLC | Premium Beauty, Baby, Toys & Household Essentials",
    template: "%s | ONIFI VENTURES LLC"
  },
  description: "Shop premium beauty and personal care, baby products, toys, and health and household essentials from ONIFI VENTURES LLC.",
  openGraph: {
    title: "ONIFI VENTURES LLC",
    description: "A premium ecommerce storefront for beauty, baby, toys, and household essentials with a modern U.S. retail feel.",
    url: siteUrl,
    siteName: "ONIFI VENTURES LLC",
    type: "website"
  },
  alternates: { canonical: "/" },
  keywords: [
    "ONIFI VENTURES LLC",
    "beauty products",
    "baby products",
    "toys online",
    "health and household",
    "premium ecommerce store"
  ]
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: company.name,
  url: siteUrl,
  address: {
    "@type": "PostalAddress",
    streetAddress: company.addressLine1,
    addressLocality: "ALBUQUERQUE",
    addressRegion: "NM",
    postalCode: "87110",
    addressCountry: "US"
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    email: company.email,
    telephone: company.phone
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <StoreProvider>
            <ToastProvider>
              <SiteShell>{children}</SiteShell>
            </ToastProvider>
          </StoreProvider>
        </ThemeProvider>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      </body>
    </html>
  );
}
