"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Calendar, User } from "lucide-react";
import Link from "next/link";

export const blogPosts = [
  {
    id: 1,
    title: "The Alchemy of Gesso: How Mukk Paste Creates 3D Divinity",
    excerpt: "Discover the secret recipe of Arabic gum and French chalk that gives Tanjore paintings their iconic relief work.",
    date: "April 05, 2026",
    author: "Master Artisan",
    category: "Technique",
    image: "/images/blog_gesso.png",
    slug: "gesso-alchemy"
  },
  {
    id: 2,
    title: "Identifying Authentic 22K Gold Foil in Heritage Art",
    excerpt: "A collector's guide to distinguishing between pure 24K gold leaves and synthetic modern imitations.",
    date: "March 28, 2026",
    author: "Heritage Consultant",
    category: "Collector Guide",
    image: "/images/blog_gold.png",
    slug: "gold-foil-guide"
  },
  {
    id: 3,
    title: "Vastu Shastra and the Placement of Tanjore Masterpieces",
    excerpt: "Guidelines on how to position sacred artwork in your home for maximum spiritual and aesthetic harness.",
    date: "March 15, 2026",
    author: "Vastu Expert",
    category: "Lifestyle",
    image: "/images/blog_vastu.png",
    slug: "vastu-placement"
  },
  {
    id: 4,
    title: "The Chola Legacy: A 500-Year History of Thanjavur Art",
    excerpt: "Journey back to the royal courts where this gold-leaf tradition was born and how it survived the test of time.",
    date: "March 10, 2026",
    author: "Art Historian",
    category: "Heritage",
    image: "/images/blog_chola.png",
    slug: "chola-legacy-history"
  },
  {
    id: 5,
    title: "5 Reasons Why Tanjore Paintings Are a Generational Investment",
    excerpt: "Why these pieces appreciate in value and why they are considered the ultimate heirlooms for Indian families.",
    date: "March 02, 2026",
    author: "Investment Advisor",
    category: "Investment",
    image: "/images/blog_investment.png",
    slug: "investment-value-tanjore"
  },
  {
    id: 6,
    title: "How to Restore and Clean Heirloom Tanjore Paintings",
    excerpt: "Expert tips on preserving the gold foil and repairing stone inlays without damaging the original pigments.",
    date: "Feb 22, 2026",
    author: "Restoration Expert",
    category: "Maintenance",
    image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&q=80&w=2000",
    slug: "restoration-cleaning-guide"
  },
  {
    id: 7,
    title: "The Symbolism of Ganesha: Decoding Mudras in Thanjavur Art",
    excerpt: "Understanding the hidden spiritual meanings behind the postures and ornaments of Lord Ganesha.",
    date: "Feb 15, 2026",
    author: "Spiritual Scholar",
    category: "Symbolism",
    image: "/images/tanjore_ganesha.png",
    slug: "ganesha-symbolism-mudras"
  },
  {
    id: 8,
    title: "Tanjore vs. Mysore Art: The Crucial Differences Explained",
    excerpt: "A comparative study of the two greatest classical painting styles of South India and how to tell them apart.",
    date: "Feb 08, 2026",
    author: "Gallery Curator",
    category: "Expertise",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=2000",
    slug: "tanjore-vs-mysore-art"
  },
  {
    id: 9,
    title: "Ethical Sourcing: How We Support Traditional Artisan Communities",
    excerpt: "Our commitment to fair trade and preserving the livelihoods of generational artist families in Thanjavur.",
    date: "Jan 28, 2026",
    author: "Foundation Director",
    category: "Ethics",
    image: "/images/tanjore_worker.png",
    slug: "ethical-sourcing-artisans"
  },
  {
    id: 10,
    title: "The Divine Feminine: Representing Saraswati in Gold Leaf",
    excerpt: "Exploring the ethereal beauty and artistic challenges of depicting the Goddess of Wisdom in relief art.",
    date: "Jan 20, 2026",
    author: "Master Artisan",
    category: "Spirituality",
    image: "/images/tanjore_saraswati.png",
    slug: "saraswati-divine-feminine"
  },
  {
    id: 11,
    title: "The Science of Sacred Jaipur Stones in Elite Home Sanctuaries",
    excerpt: "How the authentic rubies and emeralds embedded in Tanjore art impact the energy dynamics of your living spaces.",
    date: "Jan 12, 2026",
    author: "Gallery Curator",
    category: "Excellence",
    image: "/images/blog_jaipur_stones.png",
    slug: "jaipur-stones-energy"
  },
  {
    id: 12,
    title: "From Sketch to Shrine: The 100-Day Voyage of Custom Creation",
    excerpt: "Step inside our studios to trace the painstaking journey of a bespoke Thanjavur masterpiece from bare teak to pure gold.",
    date: "Jan 03, 2026",
    author: "Master Artisan",
    category: "Process",
    image: "/images/blog_100_day_journey.png",
    slug: "100-day-custom-voyage"
  }
];

export default function BlogContent() {
  return (
    <main className="min-h-screen bg-heritage-cream text-primary overflow-x-hidden grain-bg">
      <section className="pt-48 pb-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-24">
            <span className="text-accent font-bold tracking-[0.4em] uppercase mb-6 block text-xs">The Artisan&apos;s Journal</span>
            <h1 className="text-5xl md:text-7xl font-serif text-primary italic leading-[1] tracking-tight mb-10">Whispers of Gold</h1>
            <p className="text-heritage-dark/70 text-xl font-light italic font-serif leading-relaxed">
              An archive of expertise, heritage preservation, and the eternal evolution of Thanjavur art.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
            {blogPosts.map((post, i) => (
              <Link key={post.id} href={`/blog/${post.slug}`} className="block group">
                <motion.article 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (i % 3) * 0.1 }}
                  className="cursor-pointer"
                >
                  <div className="relative aspect-[4/5] overflow-hidden mb-8 shadow-premium gold-border-glow">
                    <Image 
                      src={post.image} 
                      alt={post.title} 
                      fill 
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
                    />
                    <div className="absolute top-6 left-6">
                      <span className="bg-primary/90 backdrop-blur-md text-accent px-4 py-2 text-[8px] font-bold uppercase tracking-widest rounded-full border border-accent/20">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-6 text-[9px] uppercase tracking-[0.2em] font-bold text-accent mb-4">
                     <span className="flex items-center gap-2"><Calendar size={12} /> {post.date}</span>
                     <span className="flex items-center gap-2"><User size={12} /> {post.author}</span>
                  </div>

                  <h2 className="text-3xl font-serif italic mb-6 text-primary group-hover:text-accent transition-colors leading-tight">
                    {post.title}
                  </h2>
                  
                  <p className="text-heritage-dark/60 text-sm leading-relaxed mb-8 font-light italic">
                    {post.excerpt}
                  </p>

                  <div className="inline-flex items-center gap-4 text-primary font-bold uppercase tracking-widest text-[10px] group/link">
                     <div className="w-8 h-[1px] bg-accent group-hover/link:w-12 transition-all" />
                     READ STORY
                  </div>
                </motion.article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter / Circle */}
      <section className="py-32 bg-primary text-white relative h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 opacity-10 grain-bg" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2" />
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <span className="text-accent font-bold tracking-[0.5em] uppercase text-xs mb-8 block">Collector&apos;s Circle</span>
          <h2 className="text-4xl md:text-6xl font-serif italic mb-10 leading-[1] tracking-tight">Never miss a golden stroke.</h2>
          <p className="text-white/40 text-lg mb-16 font-light italic max-w-2xl mx-auto leading-relaxed">
            Join our private newsletter for early previews of palatial scale commissions and exclusive studio insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
             <input 
               type="email" 
               placeholder="Your Email Address" 
               className="flex-1 bg-white/5 border border-white/20 px-8 py-5 text-sm focus:outline-none focus:border-accent transition-all italic rounded-sm"
             />
             <button className="bg-accent text-heritage-dark px-10 py-5 font-bold uppercase tracking-widest text-xs hover:bg-white transition-all rounded-sm shadow-premium">
               Subscribe
             </button>
          </div>
        </div>
      </section>
    </main>
  );
}
