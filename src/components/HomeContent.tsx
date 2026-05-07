"use client";

import HeroSlider from "@/components/HeroSlider";
import { motion } from "framer-motion";
import { ArrowRight, History, Brush, Gem, Sun, Frame, Sparkles, Quote, Star } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function HomeContent() {
  const processSteps = [
    { 
      title: "Board Preparation", 
      desc: "An authentic Burmese Teak or Jackfruit wood base is prepared and layered with organic Arabic gum and French chalk (Mukk) to create a stone-like foundation.",
      icon: Frame
    },
    { 
      title: "Sacred Sketching", 
      desc: "Detailed outlines of deities are sketched using traditional proportions, often following ancient Dhyana Shlokas for divine accuracy.",
      icon: History
    },
    { 
      title: "Gesso Relief Work", 
      desc: "The 'Mukk' paste is meticulously applied to create a three-dimensional embossed effect on ornaments, crowns, and architectural details.",
      icon: Brush
    },
    { 
      title: "24K Gold Foiling", 
      desc: "Pure 24-carat gold leaves are carefully applied over the relief work, ensuring a signature luster that never fades over generations.",
      icon: Sun
    },
    { 
      title: "Stone Inlaying", 
      desc: "The painting is further enriched by embedding semi-precious Jaipur stones and glass beads, adding royal opulence and color.",
      icon: Gem
    },
    { 
      title: "Traditional Painting", 
      desc: "The final layer uses vibrant natural pigments to breathe life into the deity, focusing on rounded faces and compassionate expressions.",
      icon: Sparkles
    }
  ];

  const testimonials = [
    {
      name: "Anirban Chatterjee",
      title: "Art Historian, Kolkata",
      quote: "Living in Kolkata, I've seen many art forms, but the Durga masterpiece I received from Tanjore Creation is breathtaking. The 24K gold foil has a divine glow that transforms my study into a sanctuary.",
      rating: 5
    },
    {
      name: "Lakshmi Narayanan",
      title: "Art Collector, Chennai",
      quote: "The depth of the relief work is unlike anything I've seen in modern galleries. It feels as though the legacy of the Tanjore kings has been breathed into this piece.",
      rating: 5
    },
    {
      name: "Vikram Malhotra",
      title: "Interior Architect, Mumbai",
      quote: "For my high-end residential projects in South Mumbai, I only trust Tanjore Creation. Their ability to deliver palatial-scale pieces with museum-grade quality is unmatched in India.",
      rating: 5
    },
    {
      name: "Priya Rao",
      title: "Entrepreneur, Bangalore",
      quote: "The Vastu-compliant Ganesha we commissioned fits perfectly in our modern home. It manages to look both ancient and timelessly elegant. The gold-leaf detail is simply stunning.",
      rating: 5
    },
    {
      name: "Dr. Rajesh Gupta",
      title: "Philanthropist, Delhi",
      quote: "We commissioned a large-scale Balaji for our family estate. The craftsmanship, from the Jaipur stones to the teak wood carving, is of a caliber that is becoming increasingly rare to find.",
      rating: 5
    },
    {
      name: "Sarah Jenkins",
      title: "Interior Designer, London/Dubai",
      quote: "My global clients appreciate the soulful craftsmanship. The Palatial pieces we've imported to Dubai have become the centerpiece of conversation in every home.",
      rating: 5
    }
  ];

  return (
    <main className="min-h-screen bg-heritage-cream overflow-x-hidden grain-bg">
      
      {/* Hero Entrance */}
      <div id="home">
        <h1 className="sr-only">Tanjore Creation - Authentic 24K Gold Foil Thanjavur Paintings in Kolkata</h1>
        <HeroSlider />
      </div>

      {/* Philosophy Section */}
      <section className="py-16 md:py-32 bg-white border-y border-accent/10 shadow-sm relative z-10">
        <div className="max-w-[80ch] mx-auto px-6 text-center">
           <motion.span 
             initial={{ opacity: 0, y: 10 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-[color:var(--color-accent-dark)] font-bold tracking-[0.4em] uppercase text-[10px] mb-8 block"
           >
             The Divine Vibration
           </motion.span>
           <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-[clamp(2rem,4vw,3.5rem)] font-serif italic text-primary leading-[1.1] tracking-tight mb-10"
           >
             &quot;Every brushstroke is a prayer, every gold leaf a legacy of devotion.&quot;
           </motion.h2>
           <motion.p 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             className="text-heritage-dark/60 text-xl font-light leading-relaxed italic max-w-prose mx-auto"
           >
             At Tanjore Creation, we preserve a 500-year-old tradition that originated in the royal courts of Thanjavur. Our art is not merely decorative; it is a sacred conduit of heritage and gold.
           </motion.p>
        </div>
      </section>
      
      {/* Featured Masterpieces Preview */}
      <section className="py-16 md:py-24 bg-heritage-cream relative overflow-hidden text-center md:text-left">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <span className="text-[color:var(--color-accent-dark)] font-bold tracking-[0.3em] uppercase mb-6 block text-[10px]">Curated Selection</span>
              <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-serif text-primary italic leading-[0.9] tracking-tighter">Featured Masterpieces</h2>
            </div>
            <Link href="/gallery" className="group flex items-center gap-4 text-primary font-bold uppercase tracking-widest text-[11px] hover:text-accent transition-colors mb-4 mx-auto md:mx-0">
              Explore Full Collection <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {[
               { title: "Ganesha with Temple Arch", img: "/images/tanjore_ganesha.png", slug: "lord-ganesha-threshold-guardian" },
               { title: "Radha Krishna in Vridavan", img: "/images/tanjore_radhakrishna.png", slug: "radha-krishna-eternal-union" },
               { title: "Goddess Lakshmi of Wealth", img: "/images/tanjore_lakshmi.png", slug: "goddess-lakshmi-eternal-prosperity" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -15 }}
                className="group relative h-[650px] overflow-hidden shadow-premium gold-border-glow bg-primary/5"
              >
                <Image 
                  src={item.img} 
                  alt={item.title} 
                  fill 
                  className="object-cover transition-transform duration-1000 group-hover:scale-110" 
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority={i === 0}
                  quality={80}
                />
                <Link href={`/gallery/${item.slug}`} className="absolute inset-0 z-20">
                  <span className="sr-only">View {item.title}</span>
                </Link>
                <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/20 to-transparent flex flex-col justify-end p-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <h3 className="text-3xl font-serif text-white italic mb-3 tracking-tight text-left">{item.title}</h3>
                  <p className="text-accent text-[11px] uppercase tracking-widest font-bold text-left">Heritage Collection</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Collector Testimonials */}
      <section className="py-16 md:py-24 bg-white relative overflow-hidden border-y border-accent/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <span className="text-[color:var(--color-accent-dark)] font-bold tracking-[0.5em] uppercase text-[10px] mb-6 block">Collector Voices</span>
            <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-serif italic text-primary leading-[0.8] tracking-tighter">Wisdom from the Circle</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
            {testimonials.map((t, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 3) * 0.2 }}
                className="relative p-12 bg-heritage-cream/20 border border-accent/5 shadow-sm hover:shadow-premium transition-all duration-700 flex flex-col justify-between"
              >
                <div>
                  <Quote className="text-accent/20 absolute top-8 right-8" size={48} />
                  <div className="flex gap-1 mb-8">
                    {[...Array(t.rating)].map((_, j) => <Star key={j} size={12} className="fill-accent text-accent" />)}
                  </div>
                  <p className="text-xl font-serif italic text-primary/80 mb-12 leading-relaxed">
                    &quot;{t.quote}&quot;
                  </p>
                </div>
                <div>
                   <h3 className="text-primary font-bold uppercase tracking-widest text-[11px] mb-1">{t.name}</h3>
                   <span className="text-[color:var(--color-accent-dark)] text-[9px] uppercase tracking-widest font-bold opacity-80 italic">{t.title}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Artisanal Process */}
      <section className="py-16 md:py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none grain-bg mix-blend-overlay" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-32">
            <span className="text-accent font-bold tracking-[0.5em] uppercase text-[10px] mb-6 block">How It&apos;s Created</span>
            <h2 className="text-[clamp(2.5rem,5vw,5rem)] font-serif italic mb-10 text-white leading-[0.8] tracking-tighter text-center">The Sacred 6-Step Process</h2>
            <p className="text-white/40 max-w-[65ch] mx-auto text-xl font-light leading-relaxed italic text-center">
              Creation of a single masterpiece takes 6 to 10 weeks of meticulous effort by master artisans.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12">
            {processSteps.map((step, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative"
              >
                <div className="flex items-start gap-8">
                  <div className="text-accent/15 font-serif text-7xl italic leading-none group-hover:text-accent/30 transition-colors">
                    0{i + 1}
                  </div>
                  <div>
                    <step.icon className="text-accent mb-8 shadow-sm" size={36} />
                    <h3 className="text-2xl font-serif italic mb-6 text-white group-hover:text-accent transition-colors tracking-tight text-left">{step.title}</h3>
                    <p className="text-white/40 text-[15px] leading-relaxed font-light italic max-w-[35ch] text-left">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Heritage Legacy Preview */}
      <section className="py-16 md:py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
             <div className="absolute -inset-8 border border-accent/20 translate-x-8 translate-y-8 pointer-events-none" />
             <div className="relative overflow-hidden gold-border-glow shadow-premium aspect-[4/5] bg-primary/5">
                <Image 
                  src="/images/tanjore_worker.png" 
                  alt="Traditional Artisan Workspace"
                  fill
                  className="grayscale hover:grayscale-0 transition-all duration-1000 object-cover" 
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={75}
                  loading="lazy"
                />
             </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[color:var(--color-accent-dark)] font-bold tracking-[0.3em] uppercase mb-8 block text-[10px]">A Dynasty of Art</span>
            <h2 className="text-[clamp(2rem,4vw,4rem)] font-serif text-primary mb-12 italic leading-[1.05] tracking-tight text-center md:text-left">Born in the Courts of Marathas</h2>
            <p className="text-heritage-dark/70 text-xl leading-relaxed mb-10 font-light font-serif italic max-w-prose text-center md:text-left">
               The Thanjavur painting style evolved under the rule of the Nayakas and later flourished in the Maratha court of Serfoji II in the 16th century. 
            </p>
            <p className="text-heritage-dark/60 text-[17px] leading-relaxed mb-16 font-light italic max-w-prose text-center md:text-left">
              Today, Tanjore Creation carries this royal torch, using the same Burmese Teak, pure gold foil, and Jaipur stones that once adorned the corridors of kings and saints alike.
            </p>
            <div className="flex justify-center md:justify-start">
              <Link href="/about" className="inline-flex items-center gap-6 text-primary font-bold uppercase tracking-widest text-[11px] group">
                <span className="border-b-2 border-accent pb-2 group-hover:border-primary transition-all">Discover Our Heritage</span>
                <ArrowRight size={20} className="group-hover:translate-x-3 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Maestro Topological Fragment */}
      <section className="py-16 md:py-24 bg-primary text-white overflow-hidden relative border-y border-white/5">
         <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/5 -skew-x-12 translate-x-1/2 pointer-events-none" />
         <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-12 xl:col-span-5 relative z-10 text-center xl:text-left">
               <span className="text-accent font-bold tracking-[0.5em] uppercase text-[10px] mb-12 block">The Topological Soul</span>
               <h2 className="text-[clamp(3rem,8vw,5.5rem)] font-serif italic leading-[0.8] mb-16 mix-blend-difference tracking-tighter">Golden Fragments</h2>
               <p className="text-white/40 text-xl font-light italic leading-relaxed mb-16 max-w-prose mx-auto xl:mx-0">
                  Our pieces are not just squares on a wall. They are dimensional portals, where every relief shard catches the light at a different angle, breaking the mundane grid of modern life.
               </p>
               <div className="grid grid-cols-2 gap-16 max-w-md mx-auto xl:mx-0">
                  <div className="border-l border-accent/20 pl-6 text-left">
                    <div className="text-5xl font-serif text-accent mb-3 italic tracking-tight">24K</div>
                    <div className="text-[10px] uppercase tracking-widest text-white/30 font-bold">Gold Purity</div>
                  </div>
                  <div className="border-l border-accent/20 pl-6 text-left">
                    <div className="text-5xl font-serif text-accent mb-3 italic tracking-tight">500</div>
                    <div className="text-[10px] uppercase tracking-widest text-white/30 font-bold">Year Heritage</div>
                  </div>
               </div>
            </div>
            <div className="lg:col-span-12 xl:col-span-7 relative">
               <div className="grid grid-cols-2 gap-8 relative items-center">
                  <motion.div 
                    initial={{ y: 0 }}
                    whileInView={{ y: -60 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    className="aspect-[3/4] bg-white/5 rounded-[2px] overflow-hidden shadow-2xl relative translate-y-20 border border-white/10"
                    style={{ willChange: "transform" }}
                  >
                     <Image src="/images/tanjore_balaji.png" alt="Balaji Fragment" fill className="object-cover opacity-60 hover:opacity-100 transition-all duration-700 hover:scale-105" sizes="(max-width: 768px) 100vw, 30vw" quality={75} loading="lazy" />
                  </motion.div>
                  <motion.div 
                    initial={{ y: 0 }}
                    whileInView={{ y: 60 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2.5, ease: "easeOut" }}
                    className="aspect-[3/4] bg-white/5 rounded-[2px] overflow-hidden shadow-2xl relative -translate-y-20 border border-white/10"
                    style={{ willChange: "transform" }}
                  >
                     <Image src="/images/tanjore_shiva.png" alt="Shiva Fragment" fill className="object-cover opacity-60 hover:opacity-100 transition-all duration-700 hover:scale-105" sizes="(max-width: 768px) 100vw, 30vw" quality={75} loading="lazy" />
                  </motion.div>
               </div>
               <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-accent/15 rounded-full blur-[120px]" />
            </div>
         </div>
      </section>

      {/* Trust & FAQ */}
      <section className="py-20 md:py-32 bg-heritage-cream border-t border-accent/10 relative">
        <div className="max-w-7xl mx-auto px-6">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-[color:var(--color-accent-dark)] font-bold tracking-[0.3em] uppercase mb-6 block text-[10px]">Common Inquiries</span>
                <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-serif text-primary mb-16 italic leading-tight tracking-tight text-center md:text-left">Authenticity & Care</h2>
                <div className="space-y-12">
                   {[
                     { q: "Is it real 24K gold foil?", a: "Yes, we use only certified 24-carat gold leaves. Unlike synthetic gold, our foils never lose their luster and will shine for generations." },
                     { q: "How do I maintain the painting?", a: "Avoid direct moisture or sunlight. A gentle dusting with a soft brush once a month is sufficient to keep the gold glimmering." },
                     { q: "Do you ship internationally?", a: "We provide museum-grade packing and fully insured worldwide shipping to over 40 countries." }
                   ].map((faq, i) => (
                     <div key={i} className="border-b border-accent/10 pb-10">
                        <h3 className="text-primary font-bold uppercase tracking-widest text-[11px] mb-5 text-left">{faq.q}</h3>
                        <p className="text-heritage-dark/70 text-[16px] italic font-light leading-relaxed max-w-prose text-left">{faq.a}</p>
                     </div>
                   ))}
                </div>
              </div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-primary p-12 md:p-24 flex flex-col justify-center text-white relative overflow-hidden shadow-2xl rounded-[1px]"
              >
                <div className="absolute inset-0 opacity-10 grain-bg pointer-events-none" />
                <h3 className="text-3xl md:text-5xl font-serif italic mb-12 relative z-10 leading-tight tracking-tight">&quot;A Tanjore painting is not just an acquisition; it is a legacy you pass down.&quot;</h3>
                <p className="text-accent font-bold tracking-[0.3em] uppercase text-[10px] mb-16 relative z-10">— Master Artisan, Tanjore Creation</p>
                <Link href="/contact" className="bg-white text-primary px-12 py-6 font-bold uppercase tracking-widest text-[11px] hover:bg-accent hover:text-white transition-all text-center relative z-10 shadow-premium">
                  Request a Private Consultation
                </Link>
              </motion.div>
           </div>
        </div>
      </section>

    </main>
  );
}
