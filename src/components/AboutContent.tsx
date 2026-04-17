"use client";

import { motion } from "framer-motion";
import { Award, ShieldCheck, History, Gem, TreeDeciduous, Sparkles } from "lucide-react";
import Image from "next/image";

export default function AboutContent() {
  const materials = [
    {
      title: "Pure 22K Gold Foil",
      desc: "We use only authentic 24-carat gold leaves sourced from traditional gold-beaters. This ensures a celestial glow that remains untarnished for centuries.",
      icon: Sparkles
    },
    {
      title: "Burmese Teak Wood",
      desc: "Every painting is mounted on high-quality teak or jackfruit wood planks, treated to resist termites and warping, providing a stable foundation for the heavy gesso work.",
      icon: TreeDeciduous
    },
    {
      title: "Jaipur Semi-Precious Stones",
      desc: "The intricate jewelry and temple arches are adorned with vibrant glass beads and semi-precious stones from Jaipur, adding color and royal depth.",
      icon: Gem
    }
  ];

  const milestones = [
    { year: "16th Century", event: "Origins in the Nayaka dynasty, following the fall of the Vijayanagara Empire." },
    { year: "18th Century", event: "Flourished in the Maratha court under King Serfoji II, who introduced the iconic gold leaf and stone embellishments." },
    { year: "1985", event: "Tanjore Creation was founded to preserve the 'Divine Vibration' through traditional artisan methods." },
    { year: "2007", event: "Tanjore Painting received the Geographical Indication (GI) tag, recognizing its unique heritage value." }
  ];

  return (
    <main className="min-h-screen bg-heritage-cream text-primary overflow-x-hidden grain-bg">
      
      {/* Hero / Introduction */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="order-2 lg:order-1"
          >
            <span className="text-accent font-bold tracking-[0.4em] uppercase mb-6 block text-xs">The Thanjavur Legacy</span>
            <h1 className="text-5xl md:text-7xl font-serif text-primary mb-10 italic leading-[1] tracking-tight">Sacred Spirit in Every Carat</h1>
            <p className="text-heritage-dark/70 text-xl leading-relaxed mb-8 font-light italic font-serif">
              Tanjore paintings are more than just art; they are devotional windows into the divine. At Tanjore Creation, we have been custodial to this sacred vibration for nearly four decades.
            </p>
            <div className="flex gap-8 mt-12">
               <div className="flex items-center gap-3">
                  <ShieldCheck className="text-accent" size={24} />
                  <span className="text-[10px] uppercase tracking-widest font-bold">Certified 24K Gold</span>
               </div>
               <div className="flex items-center gap-3">
                  <Award className="text-accent" size={24} />
                  <span className="text-[10px] uppercase tracking-widest font-bold">Generational Artisans</span>
               </div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative order-1 lg:order-2"
          >
            <div className="absolute -inset-10 border border-accent/20 rounded-full scale-75 animate-pulse pointer-events-none" />
            <Image 
              src="/images/tanjore_worker.png" 
              alt="Artisan Craftsmanship - Handcrafting a 24K Gold Tanjore Painting" 
              width={800}
              height={800}
              className="rounded-sm shadow-premium grayscale hover:grayscale-0 transition-all duration-1000 aspect-square object-cover"
              priority
            />
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-primary p-1 hidden lg:flex items-center justify-center text-center shadow-premium">
              <div className="w-full h-full border border-white/20 flex flex-col items-center justify-center p-4">
                <span className="text-4xl font-serif text-white mb-1">35+</span>
                <span className="text-[8px] uppercase tracking-widest font-bold text-accent">Years of Excellence</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Historical Timeline */}
      <section className="py-24 bg-white relative">
        <div className="max-w-5xl mx-auto px-6">
           <div className="text-center mb-24">
              <History className="text-accent mx-auto mb-6" size={40} />
              <h2 className="text-4xl md:text-6xl font-serif italic mb-6">A Journey Through Time</h2>
              <div className="w-20 h-1 bg-accent mx-auto" />
           </div>
           <div className="space-y-16 relative">
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] bg-accent/20 hidden md:block" />
              {milestones.map((item, i) => (
                <motion.div 
                   key={i}
                   initial={{ opacity: 0, y: 30 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   className={`flex flex-col md:flex-row gap-10 items-center ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                   <div className="flex-1 text-center md:text-right">
                      {i % 2 === 0 ? (
                        <>
                          <span className="text-accent font-serif text-3xl italic mb-4 block">{item.year}</span>
                          <p className="text-heritage-dark/60 italic font-light leading-relaxed">{item.event}</p>
                        </>
                      ) : <div className="hidden md:block" />}
                   </div>
                   <div className="w-4 h-4 rounded-full bg-accent border-4 border-white shadow-sm z-10 hidden md:block" />
                   <div className="flex-1 text-center md:text-left">
                      {i % 2 !== 0 ? (
                        <>
                          <span className="text-accent font-serif text-3xl italic mb-4 block">{item.year}</span>
                          <p className="text-heritage-dark/60 italic font-light leading-relaxed">{item.event}</p>
                        </>
                      ) : <div className="hidden md:block" />}
                   </div>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* Materials Showcase */}
      <section className="py-24 bg-primary text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 grain-bg mix-blend-overlay" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {materials.map((m, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <div className="mb-8 overflow-hidden rounded-sm">
                   <m.icon className="text-accent mb-6 group-hover:scale-110 transition-transform" size={48} />
                </div>
                <h3 className="text-2xl font-serif italic mb-6 group-hover:text-accent transition-colors">{m.title}</h3>
                <p className="text-white/40 leading-relaxed font-light italic text-sm">
                  {m.desc}
                </p>
                <div className="w-12 h-[1px] bg-accent mt-8 group-hover:w-full transition-all duration-700" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Studio Info */}
      <section className="py-24 bg-heritage-cream border-t border-accent/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
           <span className="text-accent font-bold tracking-[0.4em] uppercase text-xs mb-8 block">Our Sanctuary</span>
           <h2 className="text-4xl md:text-6xl font-serif italic text-primary leading-tight mb-12">&quot;We don&apos;t just create paintings; we preserve the sacred vibration of Tanjore for the modern home.&quot;</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left bg-white p-12 shadow-premium border border-accent/5">
              <div>
                <h4 className="font-bold text-xs uppercase tracking-widest text-accent mb-4">The Studio</h4>
                <p className="text-sm text-heritage-dark/60 leading-relaxed italic">Our workspace follows traditional Vastu principles, ensuring that every piece is created in a positive, spiritually charged environment.</p>
              </div>
              <div>
                <h4 className="font-bold text-xs uppercase tracking-widest text-accent mb-4">Our Commitment</h4>
                <p className="text-sm text-heritage-dark/60 leading-relaxed italic">Every commission is handled with absolute transparency regarding gold purity and material authenticity.</p>
              </div>
           </div>
        </div>
      </section>

    </main>
  );
}
