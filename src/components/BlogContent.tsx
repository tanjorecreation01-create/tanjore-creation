"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Calendar, User } from "lucide-react";
import Link from "next/link";
import { blogPostsArray } from "@/data/blogPosts";

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
            {blogPostsArray.map((post, i) => (
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
