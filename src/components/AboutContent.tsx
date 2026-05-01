"use client";

import { motion } from "framer-motion";
import { Award, ShieldCheck, History, Gem, Trees, Sparkles } from "lucide-react";
import Image from "next/image";

export default function AboutContent() {
  const values = [
    {
      title: "Authentic Materials",
      desc: "We use only pure 24-carat gold leaves, semi-precious stones, and traditionally treated jackfruit or teak wood boards.",
      icon: Award
    },
    {
      title: "Generational Mastery",
      desc: "Our artisans carry forward the techniques taught by their ancestors, maintaining the signature 'Mukk' relief work.",
      icon: History
    },
    {
      title: "Vastu Compliance",
      desc: "Every religious piece is crafted following divine proportions and iconography as per the sacred Agamas.",
      icon: ShieldCheck
    }
  ];

  return (
    <>
      {/* Heritage Narrative Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-accent font-bold tracking-[0.4em] uppercase mb-6 block text-[10px]">The Legacy Since 1984</span>
            <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-serif text-primary italic mb-10 leading-[0.9] tracking-tight">Four Decades of Divine Craftsmanship</h2>
            <p className="text-heritage-dark/80 text-xl font-light leading-relaxed italic mb-8 max-w-prose">
              Founded by the Harlalka family in Kolkata, Tanjore Creation began as a passion project to preserve the dying art of Thanjavur paintings. What started as a small studio has grown into a prestigious registry for art collectors worldwide.
            </p>
            <p className="text-heritage-dark/60 text-[17px] leading-relaxed mb-12 italic font-light max-w-prose">
              Our mission is to maintain the purity of the 16th-century Maratha style, using the exact materials and meditative focus required for museum-grade masterpieces. Unlike commercial alternatives, every piece at Tanjore Creation is an asset that appreciates in spiritual and material value.
            </p>
          </motion.div>
          
          <div className="relative order-1 lg:order-2">
            <div className="absolute -inset-10 border border-accent/20 rounded-full scale-75 animate-pulse pointer-events-none" />
            <div className="relative overflow-hidden gold-border-glow shadow-premium aspect-square bg-primary/5">
              <Image 
                src="/images/tanjore_worker.png" 
                alt="Artisan Craftsmanship - Handcrafting a 24K Gold Tanjore Painting" 
                width={800}
                height={800}
                className="grayscale hover:grayscale-0 transition-all duration-1000 object-cover" 
                priority
              />
            </div>
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-primary p-1 hidden lg:flex items-center justify-center text-center shadow-premium">
              <div className="border border-accent/30 w-full h-full flex flex-col items-center justify-center p-4">
                <span className="text-accent text-3xl font-serif italic leading-none mb-1">40+</span>
                <span className="text-white text-[8px] uppercase tracking-widest font-bold">Years of Heritage</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values / Material Purity */}
      <section className="py-24 bg-heritage-cream/50 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {values.map((v, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative p-10 bg-white border border-accent/5 hover:shadow-premium transition-all duration-500 group"
              >
                <div className="mb-8 p-4 bg-primary/5 inline-block rounded-sm group-hover:bg-accent transition-colors">
                  <v.icon className="text-accent group-hover:text-white transition-colors" size={32} />
                </div>
                <h3 className="text-2xl font-serif text-primary italic mb-6 tracking-tight">{v.title}</h3>
                <p className="text-heritage-dark/70 text-[15px] italic leading-relaxed font-light">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Artisanal Journey */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24 max-w-3xl mx-auto">
            <span className="text-accent font-bold tracking-[0.5em] uppercase text-[10px] mb-6 block">Our Process</span>
            <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-serif text-primary italic leading-[0.8] mb-10 tracking-tighter">Beyond the Gold Leaf</h2>
            <p className="text-heritage-dark/60 text-lg font-light leading-relaxed italic">
              A single Tanjore masterpiece takes anywhere between 6 to 10 weeks of meticulous effort. It is a journey of patience, precision, and devotion.
            </p>
          </div>

          <div className="space-y-16 relative">
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] bg-accent/20 hidden md:block" />
            
            {[
              { 
                step: "01",
                title: "Board Synthesis", 
                desc: "Using original Burmese Teak, we apply layers of French Chalk and natural Arabic gum to create a limestone-smooth foundation that won't crack for centuries.",
                icon: Gem
              },
              { 
                step: "02",
                title: "The Sacred Sketch", 
                desc: "Our master artisans hand-sketch the deity based on ancient Dhyana Shlokas, ensuring divine proportions and traditional iconography.",
                icon: Trees
              },
              { 
                step: "03",
                title: "Gold Gilding & Gems", 
                desc: "24K pure gold leaves are applied over the 'Mukk' relief work, followed by the embedding of Jaipur stones to add royalty to the work.",
                icon: Sparkles
              }
            ].map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row items-center gap-12 lg:gap-24 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <div className={`md:w-1/2 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'} mb-8 md:mb-0`}>
                   <span className="text-accent font-bold tracking-widest text-4xl font-serif italic mb-6 block opacity-20">{step.step}</span>
                   <h3 className="text-3xl font-serif text-primary italic mb-6 tracking-tight">{step.title}</h3>
                   <p className="text-heritage-dark/70 text-lg font-light leading-relaxed italic max-w-md mx-auto md:mx-0 inline-block">{step.desc}</p>
                </div>
                <div className="relative z-10 w-12 h-12 bg-primary rounded-full flex items-center justify-center border-4 border-heritage-cream shadow-xl">
                   <step.icon size={20} className="text-accent" />
                </div>
                <div className="md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy of Authenticity */}
      <section className="py-24 bg-primary text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 grain-bg mix-blend-overlay pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="relative h-[600px] shadow-premium gold-border-glow overflow-hidden">
            <Image 
              src="/images/tanjore_shiva.png"
              alt="Lord Shiva Masterpiece Detail"
              fill
              className="object-cover"
            />
             <div className="absolute inset-0 bg-primary/20" />
             <div className="absolute -bottom-10 -right-10 w-32 h-32 border-b-2 border-r-2 border-accent/30" />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-accent font-bold tracking-[0.5em] uppercase text-[10px] mb-8 block">The Collector&apos;s Seal</span>
            <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-serif italic leading-[0.9] mb-12 tracking-tighter">Art That Whispers Traditions</h2>
            <p className="text-white/40 text-xl font-light italic leading-relaxed mb-12 max-w-prose">
              In an age of mass-produced decor, Tanjore Creation stands as a bastion of authenticity. Our paintings are not just visual assets; they are vibrations of heritage meant to bless homes and be passed down through generations as ancestral legacies.
            </p>
            <div className="flex gap-16">
               <div className="flex flex-col gap-2">
                  <span className="text-3xl font-serif text-accent italic">100%</span>
                  <span className="text-[10px] uppercase tracking-widest text-white/30 font-bold">Pure 24K Gold</span>
               </div>
               <div className="flex flex-col gap-2">
                  <span className="text-3xl font-serif text-accent italic">Bespoke</span>
                  <span className="text-[10px] uppercase tracking-widest text-white/30 font-bold">Collector Design</span>
               </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
