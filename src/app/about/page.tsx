import type { Metadata } from "next";
import AboutContent from "@/components/AboutContent";
import Script from "next/script";

export const metadata: Metadata = {
  title: "About Tanjore Creation | 40 Years of Thanjavur Art Heritage | Kolkata",
  description: "Since 1984, Tanjore Creation preserves the 500-year-old Thanjavur painting tradition using authentic Burmese teak, pure gold foil, and Jaipur stones.",
  keywords: ["Tanjore art history", "About Tanjore Creation", "Traditional gold painting techniques", "Artisan story Thanjavur", "Handmade Indian heritage art"],
  openGraph: {
    title: "About Tanjore Creation | 40 Years of Thanjavur Art Heritage | Kolkata",
    description: "Since 1984, Tanjore Creation preserves the 500-year-old Thanjavur painting tradition using authentic Burmese teak, pure gold foil, and Jaipur stones.",
    url: "https://tanjorecreation.com/about",
    siteName: "Tanjore Creation",
    images: [{ url: "/images/tanjore_worker.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Tanjore Creation | 40 Years of Thanjavur Art Heritage | Kolkata",
    description: "Since 1984, Tanjore Creation preserves the 500-year-old Thanjavur painting tradition using authentic Burmese teak, pure gold foil, and Jaipur stones.",
    images: ["/images/tanjore_worker.png"],
  },
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
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
        "name": "About",
        "item": "https://tanjorecreation.com/about"
      }
    ]
  };

  return (
    <main className="min-h-screen bg-heritage-cream text-primary overflow-x-hidden grain-bg">
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <AboutContent />
    </main>
  );
}
