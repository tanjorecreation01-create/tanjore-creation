import { Metadata } from "next";
import BlogContent from "@/components/BlogContent";
import Script from "next/script";
import { blogPostsArray } from "@/data/blogPosts";

export const metadata: Metadata = {
  title: "Tanjore Art Journal | Collector Guides, Techniques & Heritage | Tanjore Creation",
  description: "Read expert guides on identifying authentic Tanjore paintings, Vastu placement, gold foil care, and the rich history of Thanjavur art.",
  openGraph: {
    title: "Tanjore Art Journal | Collector Guides, Techniques & Heritage | Tanjore Creation",
    description: "Read expert guides on identifying authentic Tanjore paintings, Vastu placement, gold foil care, and the rich history of Thanjavur art.",
    url: "https://tanjorecreation.com/blog",
    siteName: "Tanjore Creation",
    images: [{ url: "/images/blog_gold.webp", width: 1200, height: 630 }],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tanjore Art Journal | Collector Guides, Techniques & Heritage | Tanjore Creation",
    description: "Read expert guides on identifying authentic Tanjore paintings, Vastu placement, gold foil care, and the rich history of Thanjavur art.",
    images: ["/images/blog_gold.webp"],
  },
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogPage() {
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
        "name": "Blog",
        "item": "https://tanjorecreation.com/blog"
      }
    ]
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": blogPostsArray.map((post, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "url": `https://tanjorecreation.com/blog/${post.slug}`,
      "name": post.title
    }))
  };

  return (
    <>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="item-list-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <BlogContent />
    </>
  );
}
