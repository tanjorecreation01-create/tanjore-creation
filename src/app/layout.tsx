import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactFAB from "@/components/ContactFAB";
import CustomCursor from "@/components/CustomCursor";
import Script from "next/script";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-serif",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tanjorecreation.in"),
  title: {
    default: "Tanjore Creation | Authentic 22K Gold Foil Thanjavur Paintings",
    template: "%s | Tanjore Creation"
  },
  description: "Bespoke Tanjore artwork since 1985. Experience the divine craftsmanship of 24K gold foil masterpieces, handcrafted by generational artisans in Thanjavur.",
  keywords: ["Tanjore painting", "Thanjavur art", "24K gold foil painting", "South Indian classical art", "Hindu deity paintings", "Heritage art restoration"],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Tanjore Creation | Authentic 24K Gold Thanjavur Paintings",
    description: "Bespoke Tanjore paintings crafted with 24K gold foil, semi-precious stones, and 500 years of artisanal heritage. Custom commissions for homes and temples.",
    url: "https://tanjorecreation.in",
    siteName: "Tanjore Creation",
    locale: "en_IN",
    type: "website",
    images: [{
      url: "/og-image.png",
      width: 1200,
      height: 630,
      alt: "Tanjore Creation Heritage Masterpiece"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Tanjore Creation | Authentic 24K Gold Thanjavur Paintings",
    description: "Handcrafted 24K gold Tanjore paintings for palatial homes.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Tanjore Creation",
    "url": "https://tanjorecreation.in",
    "logo": "https://tanjorecreation.in/icon.png",
    "description": "Authentic Tanjore / Thanjavur paintings handcrafted with 22K gold foil and semi-precious stones.",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91 98307 15802",
      "email": "harlalkasweety@yahoo.co.in",
      "contactType": "customer service",
      "areaServed": "IN",
      "availableLanguage": ["en", "Hindi", "Bengali"]
    }
  };

  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <Script
          id="organization-schema-ld-json"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className={`${cormorant.variable} ${inter.variable} antialiased selection:bg-accent selection:text-white relative`} suppressHydrationWarning>
        <CustomCursor />
        <Navbar />
        {children}
        <Footer />
        <ContactFAB />
      </body>
    </html>
  );
}
