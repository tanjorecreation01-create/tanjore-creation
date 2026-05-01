"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, User, Share2 } from "lucide-react";
import ReactMarkdown from "react-markdown";

interface Post {
  title: string;
  content: string;
  date: string;
  author: string;
  category: string;
  image: string;
}

export default function BlogPostContent({ post, otherPosts }: { post: Post, otherPosts: [string, any][] }) {
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
            <div className="text-xl md:text-2xl mb-12 space-y-8">
              <ReactMarkdown
                components={{
                  p: ({...props}) => <p className="leading-relaxed" {...props} />,
                  h2: ({...props}) => <h2 className="text-3xl md:text-4xl font-serif text-primary mt-16 mb-6 not-italic" {...props} />,
                  h3: ({...props}) => <h3 className="text-2xl md:text-3xl font-serif text-primary mt-12 mb-4 not-italic" {...props} />,
                  ul: ({...props}) => <ul className="list-disc pl-8 space-y-4 my-8" {...props} />,
                  li: ({...props}) => <li className="pl-2" {...props} />,
                  strong: ({...props}) => <strong className="text-primary font-bold not-italic" {...props} />,
                }}
              >
                {post.content}
              </ReactMarkdown>
            </div>
            
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
               {otherPosts.map(([s, p]) => (
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
