import type { Metadata } from "next";
import ArtGallery from "@/components/ArtGallery";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Tanjore Painting Gallery | Ganesha, Lakshmi, Krishna, Shiva | Tanjore Creation",
  description: "Browse 24+ authentic Thanjavur masterpieces — Ganesha, Radha Krishna, Lakshmi, Shiva and more. Each hand-painted with 22K gold foil and Jaipur stones.",
  keywords: ["Tanjore gallery", "Thanjavur painting collection", "Gold foil art gallery", "Indian religious art", "Ganesha Tanjore painting", "Krishna Tanjore painting"],
  openGraph: {
    title: "Tanjore Painting Gallery | Ganesha, Lakshmi, Krishna, Shiva | Tanjore Creation",
    description: "Browse 24+ authentic Thanjavur masterpieces — Ganesha, Radha Krishna, Lakshmi, Shiva and more. Each hand-painted with 22K gold foil and Jaipur stones.",
    url: "https://tanjorecreation.com/gallery",
    siteName: "Tanjore Creation",
    images: [{ url: "/images/tanjore_lakshmi.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tanjore Painting Gallery | Ganesha, Lakshmi, Krishna, Shiva | Tanjore Creation",
    description: "Browse 24+ authentic Thanjavur masterpieces — Ganesha, Radha Krishna, Lakshmi, Shiva and more. Each hand-painted with 22K gold foil and Jaipur stones.",
    images: ["/images/tanjore_lakshmi.png"],
  },
  alternates: {
    canonical: "/gallery",
  },
};

export default function GalleryPage() {
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
        "name": "Gallery",
        "item": "https://tanjorecreation.com/gallery"
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
      
      <div className="pt-32 md:pt-48 pb-20">
        <ArtGallery />
      </div>

    </main>
  );
}
