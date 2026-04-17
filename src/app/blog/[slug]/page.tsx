"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft, Calendar, User, Share2 } from "lucide-react";

// Content Dictionary for 10 Posts
const blogPosts = {
  "gesso-alchemy": {
    title: "The Alchemy of Gesso: How Mukk Paste Creates 3D Divinity",
    content: `The hallmark of an authentic Tanjore painting is its deep, stone-hard relief work. This isn't just paint—it's alchemy. For centuries, master artisans have used a secret mixture called 'Mukk'. 

    Compounded from purified Arabic gum and finely powdered French chalk, this paste is applied layer by layer to create the three-dimensional structures of crowns, jewelry, and temple arches. In this long-form guide, we explore the precise ratios and the meditative patience required to breathe life into these embossed structures...`,
    date: "April 05, 2026",
    author: "Master Artisan",
    category: "Technique",
    image: "/images/blog_gesso.png",
  },
  "gold-foil-guide": {
    title: "Identifying Authentic 22K Gold Foil in Heritage Art",
    content: `When a Tanjore painting glimmers, it isn't just a reflection—it's a thousand-year-old conversation with the sun. Authentic Thanjavur art exclusively uses certified 22-carat gold foil. 

    Many modern imitations use 'imitation gold' or gold-tinted paper that tarnishes within years. Real gold foil, however, is eternal. It will never lose its luster, and in fact, it develops a deep, rich patina over generations. Learn the 'light-test' and the 'texture-scratch' methods used by collectors to verify their heritage acquisitions...`,
    date: "March 28, 2026",
    author: "Heritage Consultant",
    category: "Collector Guide",
    image: "/images/blog_gold.png",
  },
  "vastu-placement": {
    title: "Vastu Shastra and the Placement of Tanjore Masterpieces",
    content: `A Tanjore painting is more than art—it is a spiritual focal point. According to ancient Vastu Shastra, the placement of sacred imagery significantly influences the energetic resonance of a home.

    The Northeast corner, or the 'Ishanya', is the most auspicious quadrant for placing deities like Ganesha or Balaji. This allows the rising sun's rays to reflect off the gold foil, purifying the space. We delve into the specific directions for different deities and how to light these pieces to maximize both aesthetic and spiritual harp...`,
    date: "March 15, 2026",
    author: "Vastu Expert",
    category: "Lifestyle",
    image: "/images/blog_vastu.png",
  },
  "chola-legacy-history": {
    title: "The Chola Legacy: A 500-Year History of Thanjavur Art",
    content: `The roots of Thanjavur painting stretch deep into the 16th century, born under the patronage of the Nayakas and later flourishing in the Maratha courts. But its soul is Chola. 

    This art form transitioned from temple walls to wooden planks, becoming a portable sanctuary for devotees. We track the migration of skilled artists and the evolution of the style from grand murals to the intricate gold-leaf masterpieces we know today. Understanding this history is crucial for any serious collector...`,
    date: "March 10, 2026",
    author: "Art Historian",
    category: "Heritage",
    image: "/images/blog_chola.png",
  },
  "investment-value-tanjore": {
    title: "5 Reasons Why Tanjore Paintings Are a Generational Investment",
    content: `In an era of digital prints, physical heritage art is the ultimate hedge against the ephemeral. A high-quality Tanjore painting is more than a purchase; it is a capital asset.

    From the intrinsic value of 22K gold and precious stones to the rapidly shrinking pool of master artisans, the rarity factor is driving prices to record highs in international auctions. We break down the financial and emotional ROI of commissioning a palatial-scale piece for your family estate...`,
    date: "March 02, 2026",
    author: "Investment Advisor",
    category: "Investment",
    image: "/images/blog_investment.png",
  },
  "restoration-cleaning-guide": {
    title: "How to Restore and Clean Heirloom Tanjore Paintings",
    content: `Generational art requires generational care. Many 100-year-old Tanjore pieces are lost to poor cleaning techniques. 

    Never use water or chemical sprays on the gold foil. Instead, a dry, soft squirrel-hair brush should be used for dusting. If the stone inlays have fallen or the gesso shows cracks, professional restoration is the only path. We share the protocols used by museums to stabilize and revive antique Thanjavur art...`,
    date: "Feb 22, 2026",
    author: "Restoration Expert",
    category: "Maintenance",
    image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&q=80&w=2000",
  },
  "ganesha-symbolism-mudras": {
    title: "The Symbolism of Ganesha: Decoding Mudras in Thanjavur Art",
    content: `Lord Ganesha is the most popular subject in Tanjore art, yet few understand the 'hidden language' of his depiction. 

    The position of the trunk, the items held in the four hands, and the specifically embossed ornaments all carry profound spiritual codes. For instance, a trunk turned to the right (Valampuri) requires specific Vastu rituals. We decode the iconography of the elephant god through the lens of traditional Thanjavur masters...`,
    date: "Feb 15, 2026",
    author: "Spiritual Scholar",
    category: "Symbolism",
    image: "/images/tanjore_ganesha.png",
  },
  "tanjore-vs-mysore-art": {
    title: "Tanjore vs. Mysore Art: The Crucial Differences Explained",
    content: `Often confused by new collectors, the Tanjore and Mysore styles are sisters with very different personalities. 

    While both use gold leaf, Tanjore art is famous for its high-relief gesso work and stone embedding, creating a 'sculptural' feel. Mysore art, conversely, uses thinner gold foil and focuses on delicate line work and 'Sesso' (low relief). We provide a visual guide to differentiate these two pillars of South Indian classical painting...`,
    date: "Feb 08, 2026",
    author: "Gallery Curator",
    category: "Expertise",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=2000",
  },
  "ethical-sourcing-artisans": {
    title: "Ethical Sourcing: How We Support Traditional Artisan Communities",
    content: `The 'Maestro' behind your painting is likely a 5th-generation artist whose family has preserved these techniques through centuries of social change. 

    At Tanjore Creation, we bypass intermediaries, ensuring that true artists receive 100% of their worth. This direct-to-artisan model is the only way to preserve the purity of the craft. We take you inside our Thanjavur studio hub to meet the families who create your divine masterpieces...`,
    date: "Jan 28, 2026",
    author: "Foundation Director",
    category: "Ethics",
    image: "/images/tanjore_worker.png",
  },
  "saraswati-divine-feminine": {
    title: "The Divine Feminine: Representing Saraswati in Gold Leaf",
    content: `Depicting Goddess Saraswati is the ultimate test for any Tanjore artist. Her white sari and the intricate details of the Veena require a level of pigment control that few possess.

    In the Thanjavur style, the 'whiteness' is achieved through specific organic mineral extracts, contrasting beautifully with the 22K gold of her ornaments. We explore the artistic challenges and the spiritual ecstasy of bringing the Goddess of Wisdom to life through embossed gold...`,
    date: "Jan 20, 2026",
    author: "Master Artisan",
    category: "Spirituality",
    image: "/images/tanjore_saraswati.png",
  }
};

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts[slug as keyof typeof blogPosts];

  if (!post) return <div className="min-h-screen flex items-center justify-center font-serif italic text-2xl">Searching the Archives...</div>;

  return (
    <main className="min-h-screen bg-heritage-cream text-primary grain-bg pb-32">
      {/* Hero Header */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <Image 
          src={post.image} 
          alt={post.title} 
          fill 
          className="object-cover" 
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-heritage-cream via-heritage-cream/20 to-transparent" />
        
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-24">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <Link href="/blog" className="flex items-center gap-2 text-accent font-bold uppercase tracking-[0.4em] text-[10px] mb-8 hover:text-primary transition-colors">
              <ArrowLeft size={14} /> Back to Journal
            </Link>
            <h1 className="text-4xl md:text-7xl font-serif italic leading-tight mb-8 drop-shadow-sm">{post.title}</h1>
            <div className="flex flex-wrap items-center gap-8 text-[10px] uppercase tracking-widest font-bold text-heritage-dark/60">
               <span className="flex items-center gap-2"><Calendar size={14} className="text-accent" /> {post.date}</span>
               <span className="flex items-center gap-2"><User size={14} className="text-accent" /> By {post.author}</span>
               <span className="px-4 py-1 border border-accent/30 rounded-full text-accent">{post.category}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pt-20 px-6">
        <article className="max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="prose prose-xl font-serif italic text-heritage-dark/80 leading-relaxed"
          >
            <p className="whitespace-pre-line text-xl md:text-2xl mb-12">
               {post.content}
            </p>
            
            <div className="border-y border-accent/10 py-12 my-16">
               <h3 className="text-primary font-bold uppercase tracking-[0.5em] text-xs mb-8">Share this Wisdom</h3>
               <div className="flex gap-4">
                  {[1,2,3].map(i => (
                    <div key={i} className="w-12 h-12 rounded-full border border-accent/20 flex items-center justify-center text-accent hover:bg-accent hover:text-white transition-all cursor-pointer">
                       <Share2 size={18} />
                    </div>
                  ))}
               </div>
            </div>

            <div className="bg-white p-12 border border-accent/10 shadow-premium relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 -translate-y-1/2 translate-x-1/2 rounded-full" />
               <h4 className="text-accent font-bold uppercase tracking-widest text-[10px] mb-4">Artisan Quote</h4>
               <p className="text-2xl italic leading-tight text-primary">
                 &quot;Gold is the skin of God. When we apply it, we are not just decorating; we are manifesting the divine aura into the physical realm.&quot;
               </p>
            </div>
          </motion.div>
        </article>
      </section>

      {/* Suggested Reading - Contextualized */}
      <section className="mt-40 max-w-7xl mx-auto px-6">
         <div className="border-t border-accent/10 pt-20">
            <h2 className="text-3xl font-serif italic mb-12 text-center text-heritage-dark/40 italic">Explore More Secrets</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
               {Object.entries(blogPosts).slice(0, 2).map(([s, p]) => (
                 <Link key={s} href={`/blog/${s}`} className="group">
                   <div className="p-8 bg-white/50 backdrop-blur-md rounded-sm border border-accent/10 hover:border-accent transition-all">
                      <p className="text-accent text-[9px] uppercase tracking-widest font-bold mb-4">{p.category}</p>
                      <h4 className="text-xl font-serif italic text-primary group-hover:text-accent transition-colors">{p.title}</h4>
                   </div>
                 </Link>
               ))}
            </div>
         </div>
      </section>
    </main>
  );
}
