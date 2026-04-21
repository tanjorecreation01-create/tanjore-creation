import { paintings } from "@/data/paintings";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Maximize2, Sparkles, ShieldCheck, Mail, Phone } from "lucide-react";
import Script from "next/script";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return paintings.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const painting = paintings.find((p) => p.slug === slug);
  if (!painting) return {};

  return {
    title: `${painting.title} | Authentic 24K Gold Tanjore Painting`,
    description: `${painting.narrative.substring(0, 160)}... Buy authentic handcrafted Tanjore paintings with 24K gold foil.`,
    openGraph: {
      title: painting.title,
      description: painting.desc,
      images: [{ url: painting.img }],
    },
  };
}

export default async function PaintingPage({ params }: Props) {
  const { slug } = await params;
  const painting = paintings.find((p) => p.slug === slug);

  if (!painting) {
    notFound();
  }

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": painting.title,
    "image": `https://tanjorecreation.com${painting.img}`,
    "description": painting.narrative,
    "brand": {
      "@type": "Brand",
      "name": "Tanjore Creation"
    },
    "offers": {
      "@type": "Offer",
      "url": `https://tanjorecreation.com/gallery/${painting.slug}`,
      "priceCurrency": "INR",
      "availability": "https://schema.org/PreOrder",
      "itemCondition": "https://schema.org/NewCondition"
    }
  };

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
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": painting.title,
        "item": `https://tanjorecreation.com/gallery/${painting.slug}`
      }
    ]
  };

  return (
    <main className="min-h-screen bg-heritage-cream pt-32 pb-24">
      <Script
        id="product-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <Link 
          href="/gallery" 
          className="inline-flex items-center gap-4 text-primary font-bold uppercase tracking-widest text-[11px] mb-16 hover:text-accent transition-colors group"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-2 transition-transform" />
          Back to Collection
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Image Display */}
          <div className="relative aspect-[4/5] bg-white shadow-premium gold-border-glow overflow-hidden group">
            <Image
              src={painting.img}
              alt={painting.title}
              fill
              className="object-cover transition-transform duration-[3000ms] group-hover:scale-110"
              priority
              quality={100}
            />
            <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
          </div>

          {/* Content */}
          <div className="flex flex-col">
            <span className="text-accent font-bold tracking-[0.5em] uppercase text-[10px] mb-8 block">Masterpiece Archive #{painting.id}</span>
            <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] font-serif text-primary italic mb-10 leading-[1] tracking-tight">
              {painting.title}
            </h1>

            <div className="space-y-12">
              <div className="bg-heritage-cream/50 p-10 border-l-4 border-accent italic shadow-sm">
                <p className="text-heritage-dark/80 text-xl leading-relaxed font-light font-serif">
                  {painting.narrative}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-12 py-12 border-y border-accent/10">
                <div>
                  <span className="flex items-center gap-3 text-[10px] uppercase tracking-widest text-accent mb-4 font-bold">
                    <Sparkles size={14} /> Materials
                  </span>
                  <p className="text-[15px] font-bold text-primary tracking-tight">22K Gold Foil, Burma Teak, Jaipur Stones</p>
                </div>
                <div>
                  <span className="flex items-center gap-3 text-[10px] uppercase tracking-widest text-accent mb-4 font-bold">
                    <Maximize2 size={14} /> Dimensions
                  </span>
                  <p className="text-[15px] font-bold text-primary tracking-tight">Standard & Bespoke Options</p>
                </div>
              </div>

              <div className="pt-8 space-y-8">
                <div className="flex items-start gap-4 text-heritage-dark/60">
                  <ShieldCheck className="text-accent shrink-0" size={20} />
                  <p className="text-sm italic leading-relaxed">
                    This masterpiece is handcrafted by generational artisans in Kolkata. Each piece comes with a certificate of authenticity and a lifetime warranty on the gold foil.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-6">
                  <a 
                    href={`https://wa.me/919830715802?text=I'm interested in the masterpiece: ${painting.title}.`}
                    className="flex-1 bg-primary text-white text-center py-6 font-bold uppercase tracking-[0.3em] text-[11px] hover:bg-black transition-all shadow-xl"
                  >
                    Acquire via WhatsApp
                  </a>
                  <a 
                    href="mailto:harlalkasweety@yahoo.co.in"
                    className="flex items-center justify-center border border-primary text-primary px-8 py-6 font-bold uppercase tracking-[0.3em] text-[11px] hover:bg-primary hover:text-white transition-all shadow-sm"
                  >
                    <Mail size={16} />
                  </a>
                  <a 
                    href="tel:+919830715802"
                    className="flex items-center justify-center border border-primary text-primary px-8 py-6 font-bold uppercase tracking-[0.3em] text-[11px] hover:bg-primary hover:text-white transition-all shadow-sm"
                  >
                    <Phone size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
