import { Metadata } from "next";
import ServicesContent from "@/components/ServicesContent";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Custom Tanjore Painting Commissions | Restoration & Global Shipping",
  description: "Commission a bespoke Tanjore masterpiece up to 8ft. Custom dimensions, antique restoration, and museum-grade international delivery.",
  openGraph: {
    title: "Custom Tanjore Painting Commissions | Restoration & Global Shipping",
    description: "Commission a bespoke Tanjore masterpiece up to 8ft. Custom dimensions, antique restoration, and museum-grade international delivery.",
    url: "https://tanjorecreation.com/services",
    siteName: "Tanjore Creation",
    images: [{ url: "/images/tanjore_ganesha.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Tanjore Painting Commissions | Restoration & Global Shipping",
    description: "Commission a bespoke Tanjore masterpiece up to 8ft. Custom dimensions, antique restoration, and museum-grade international delivery.",
    images: ["/images/tanjore_ganesha.png"],
  },
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://tanjorecreation.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://tanjorecreation.com/services"
      }
    ]
  };

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden grain-bg">
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ServicesContent />
    </main>
  );
}
