"use client";

import { motion } from "framer-motion";
import { Palette, ShieldCheck, MapPin, MessageSquare, ClipboardCheck, Sparkles, Truck } from "lucide-react";

export default function ServicesPage() {
  const commonSteps = [
    { title: "Consultation", desc: "Select your desired deity, dimensions, and any specific Vastu requirements.", icon: MessageSquare },
    { title: "Drafting", desc: "Our master artist creates a preliminary sketch for your approval.", icon: Palette },
    { title: "Creation", desc: "The 6-step traditional process begins, including gesso work and gold foiling.", icon: Sparkles },
    { title: "Verification", desc: "Final inspection ensuring material authenticity and artistic excellence.", icon: ClipboardCheck },
    { title: "Delivery", desc: "Museum-grade packing and fully insured global shipping to your doorstep.", icon: Truck }
  ];

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden grain-bg">
      
      {/* Hero Section */}
      <section className="pt-48 pb-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05] mix-blend-overlay pointer-events-none grain-bg" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-32">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-accent font-bold tracking-[0.5em] uppercase text-[10px] mb-6 block"
            >
              Artisanal Excellence
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-8xl font-serif mb-10 italic leading-[0.9]"
            >
              Masterpiece Services
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-white/50 max-w-2xl mx-auto text-xl leading-relaxed font-light italic"
            >
              We provide end-to-end heritage services to curate, preserve, and transport the sacred legacy of Thanjavur art for the modern global collector.
            </motion.p>
          </div>
          
          {/* Main Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { 
                num: "01",
                icon: Palette, 
                title: "Bespoke Commissions", 
                desc: "Every home has a unique spiritual energy. We help you select a deity and composition that aligns with your space's Vastu and architectural needs.",
                features: ["Custom Dimensions up to 8ft", "Traditional Iconography", "Life-long Warranty on Gold"]
              },
              { 
                num: "02",
                icon: ShieldCheck, 
                title: "Scientific Restoration", 
                desc: "Restore family heirlooms to their original glory. We use traditional cleaning methods and authentic materials to preserve the antique 'soul' of the painting.",
                features: ["Antique Pigment Matching", "Gold Leaf Re-leafing", "Frame Restoration"]
              },
              { 
                num: "03",
                icon: MapPin, 
                title: "Global Preservation", 
                desc: "We ensure your masterpiece travels safely across borders. Using museum-grade materials, we protect against humidity and shock during international transit.",
                features: ["Shock-Proof Wood Crate", "Humidity Control", "Fully Insured Global Delivery"]
              }
            ].map((s, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                className="group relative p-12 border border-white/5 bg-white/[0.02] backdrop-blur-sm transition-all duration-700 hover:border-accent/40"
              >
                <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/[0.03] transition-colors duration-700" />
                <span className="absolute top-8 right-10 text-white/5 font-serif text-7xl italic group-hover:text-accent/10 transition-colors duration-500 font-black">{s.num}</span>
                <s.icon className="text-accent mb-12 group-hover:scale-110 transition-transform duration-700" size={56} />
                <h3 className="text-3xl font-serif mb-8 group-hover:text-accent transition-colors italic leading-tight">{s.title}</h3>
                <p className="text-white/40 font-light leading-relaxed mb-10 text-sm italic">{s.desc}</p>
                <ul className="space-y-4">
                  {s.features.map((f, idx) => (
                    <li key={idx} className="flex items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-white/20 group-hover:text-white/60 transition-colors">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent/40" />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-accent group-hover:w-full transition-all duration-1000" />
              </motion.div>
            ))}
          </div>

          {/* How to Commission Guide - NEW */}
          <div className="mt-48">
             <div className="text-center mb-24">
                <span className="text-accent font-bold tracking-[0.5em] uppercase text-xs mb-4 block">Our Process</span>
                <h2 className="text-4xl md:text-6xl font-serif italic mb-8">How to Commission Your Masterpiece</h2>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                {commonSteps.map((step, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="text-center group"
                  >
                    <div className="w-20 h-20 bg-white/[0.03] border border-white/10 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:border-accent transition-colors">
                       <step.icon className="text-accent" size={32} />
                    </div>
                    <h4 className="text-lg font-serif italic mb-3">{step.title}</h4>
                    <p className="text-white/30 text-xs leading-relaxed font-light">{step.desc}</p>
                    {i < commonSteps.length - 1 && (
                      <div className="hidden md:block absolute right-[-10%] top-1/2 w-1/5 h-[1px] bg-white/10" />
                    )}
                  </motion.div>
                ))}
             </div>
          </div>

          <div className="mt-40 text-center bg-white/[0.02] border border-white/5 p-20 backdrop-blur-md">
            <h3 className="text-3xl md:text-5xl font-serif mb-12 italic">Ready to bring the divine home?</h3>
            <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
               <a href="https://wa.me/919830715802" className="bg-accent text-heritage-dark px-16 py-6 font-bold uppercase tracking-[0.3em] text-xs hover:bg-white transition-all shadow-premium w-full md:w-auto">
                 Inquire via WhatsApp
               </a>
               <a href="/contact" className="border border-white/20 text-white px-16 py-6 font-bold uppercase tracking-[0.3em] text-xs hover:bg-white hover:text-primary transition-all w-full md:w-auto">
                 Email Artisan Registry
               </a>
            </div>
            <p className="mt-10 text-white/20 text-xs uppercase tracking-widest font-light">Global Consultation Available via Video Call</p>
          </div>
        </div>
      </section>

    </main>
  );
}
