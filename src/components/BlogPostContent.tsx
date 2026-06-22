"use client";
/* eslint-disable @typescript-eslint/no-unused-vars */

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, User, Share2 } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface Post {
  title: string;
  content: string;
  date: string;
  author: string;
  category: string;
  image: string;
}

export default function BlogPostContent({ post, otherPosts }: { post: Post, otherPosts: [string, Post][] }) {
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
            className="prose prose-stone text-heritage-dark/80 max-w-none"
          >
            <div className="mb-12">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  p: ({node: _node, ...props}) => <p className="mb-8 text-heritage-dark/80 font-sans text-[17px] md:text-lg leading-relaxed text-left" {...props} />,
                  h2: ({node: _node, ...props}) => <h2 className="text-2xl md:text-3xl font-serif text-primary mt-12 mb-6 font-bold tracking-tight not-italic" {...props} />,
                  h3: ({node: _node, ...props}) => <h3 className="text-xl md:text-2xl font-serif text-primary mt-8 mb-4 font-bold tracking-tight not-italic" {...props} />,
                  ul: ({node: _node, ...props}) => <ul className="list-disc pl-6 space-y-3 my-6 text-heritage-dark/80 font-sans text-[17px] md:text-lg not-italic" {...props} />,
                  ol: ({node: _node, ...props}) => <ol className="list-decimal pl-6 space-y-3 my-6 text-heritage-dark/80 font-sans text-[17px] md:text-lg not-italic" {...props} />,
                  li: ({node: _node, ...props}) => <li className="pl-1 not-italic" {...props} />,
                  blockquote: ({node: _node, ...props}) => <blockquote className="border-l-4 border-accent pl-6 py-2 my-8 italic text-primary/95 text-lg md:text-xl bg-accent/5 pr-4 rounded-r-md font-serif" {...props} />,
                  strong: ({node: _node, ...props}) => <strong className="text-primary font-bold not-italic" {...props} />,
                  table: ({node: _node, ...props}) => <div className="overflow-x-auto my-8 border border-accent/20 rounded-md shadow-sm"><table className="w-full border-collapse text-left font-sans text-[15px] md:text-[16px] text-heritage-dark not-italic" {...props} /></div>,
                  thead: ({node: _node, ...props}) => <thead className="bg-accent/10 border-b border-accent/20 text-primary font-bold uppercase tracking-wider text-xs not-italic" {...props} />,
                  th: ({node: _node, ...props}) => <th className="p-4 border-b border-accent/20 not-italic" {...props} />,
                  td: ({node: _node, ...props}) => <td className="p-4 border-b border-accent/10 leading-normal not-italic" {...props} />,
                  tr: ({node: _node, ...props}) => <tr className="hover:bg-accent/5 transition-colors odd:bg-heritage-cream/10 not-italic" {...props} />,
                  code: ({node: _node, ...props}) => <code className="bg-primary/5 text-accent px-1.5 py-0.5 rounded font-mono text-sm border border-accent/10 not-italic" {...props} />,
                  pre: ({node: _node, ...props}) => <pre className="bg-primary/5 border border-accent/15 p-6 rounded-md my-8 overflow-x-auto text-[14px] leading-relaxed font-mono text-primary/90 not-italic" {...props} />,
                  a: ({node: _node, ...props}) => <a className="text-accent hover:text-primary underline transition-colors font-semibold not-italic" {...props} />,
                  em: ({node: _node, ...props}) => <span className="italic" {...props} />,
                  hr: ({node: _node, ...props}) => <hr className="border-accent/20 my-8" {...props} />,
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
            <h2 className="text-3xl font-serif mb-12 text-center text-heritage-dark/80 italic">Explore More Secrets</h2>
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
