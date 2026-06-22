import { Metadata } from "next";
import HomeContent from "@/components/HomeContent";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Buy Authentic Tanjore Paintings Online | 24K Gold Foil | Tanjore Creation",
  description: "Shop handcrafted Thanjavur paintings with certified 24K gold foil from Kolkata. Custom commissions, international shipping to 40+ countries. Est. 1984.",
  keywords: ["Buy Tanjore painting online", "Thanjavur art", "24K gold foil", "Indian classical art", "Heritage paintings", "Vastu art", "Tanjore Creation"],
  openGraph: {
    title: "Buy Authentic Tanjore Paintings Online | 24K Gold Foil | Tanjore Creation",
    description: "Shop handcrafted Thanjavur paintings with certified 24K gold foil from Kolkata. Custom commissions, international shipping to 40+ countries. Est. 1984.",
    url: "https://tanjorecreation.com",
    siteName: "Tanjore Creation",
    images: [{ url: "/images/tanjore_ganesha.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Buy Authentic Tanjore Paintings Online | 24K Gold Foil | Tanjore Creation",
    description: "Shop handcrafted Thanjavur paintings with certified 24K gold foil from Kolkata. Custom commissions, international shipping to 40+ countries. Est. 1984.",
    images: ["/images/tanjore_ganesha.png"],
  },
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is it real 24K gold foil?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we use only certified 24-carat gold leaves. Unlike synthetic gold, our foils never lose their luster and will shine for generations."
        }
      },
      {
        "@type": "Question",
        "name": "How do I maintain the painting?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Avoid direct moisture or sunlight. A gentle dusting with a soft brush once a month is sufficient to keep the gold glimmering."
        }
      },
      {
        "@type": "Question",
        "name": "Do you ship internationally?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We provide museum-grade packing and fully insured worldwide shipping to over 40 countries."
        }
      }
    ]
  };

  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <HomeContent />
    </>
  );
}
