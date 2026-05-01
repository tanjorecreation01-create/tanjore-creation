"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2, X, Info, Sparkles, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { paintings, type Painting } from "@/data/paintings";
import { useRouter } from "next/navigation";
import { shimmer, toBase64 } from "@/lib/utils";

const categories = ["All", "Deities", "Heritage", "Nature"];

export default function ArtGallery() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [zoomPos, setZoomPos] = useState({ x: 0, y: 0 });
  const [isZooming, setIsZooming] = useState(false);

  // Performance: Memorialized searching & filtering
  const filtered = useMemo(() => {
    return paintings.filter(p => {
      const matchesFilter = filter === "All" || p.category === filter;
      const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase()) || 
                             p.category.toLowerCase().includes(search.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  }, [filter, search]);

  const selectedPainting = useMemo(() => 
    paintings.find(p => p.id === selectedId),
  [selectedId]);

  return (
    <section id="gallery" className="relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Optimized Header Area */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
          <div className="max-w-xl text-center md:text-left">
            <motion.span 
               initial={{ opacity: 0 }} 
               animate={{ opacity: 1 }} 
               className="text-accent font-bold tracking-[0.4em] uppercase mb-4 block text-[10px]"
            >
               The Digital Sanctuary
            </motion.span>
            <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-serif text-primary italic mb-8 leading-[1] tracking-tight">Masterpiece Registry</h2>
            <p className="text-heritage-dark/60 text-lg font-light leading-relaxed italic max-w-prose">
              Our curated collection represents the pinnacle of Thanjavur art. Search by deity or category to discover your next heirloom.
            </p>
          </div>
          
          <div className="w-full md:w-auto flex flex-col gap-6 items-center md:items-end">
             {/* Integrated Search Bar */}
             <div className="relative w-full max-w-md group">
                <input 
                  type="text" 
                  placeholder="Search Deity (e.g. Ganesha, Krishna)..." 
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full bg-white/50 backdrop-blur-md border border-accent/20 px-8 py-4 text-sm focus:outline-none focus:border-accent transition-all italic rounded-sm shadow-sm placeholder:text-primary/20"
                />
                <div className="absolute right-6 top-1/2 -translate-y-1/2 text-accent/30 group-hover:text-accent transition-colors">
                   <Maximize2 size={18} className="rotate-45" />
                </div>
             </div>

             <div className="flex flex-wrap justify-center md:justify-end gap-2 p-1 bg-white/30 backdrop-blur-md border border-accent/10 rounded-full shadow-sm">
               {categories.map((cat) => (
                 <button
                   key={cat}
                   onClick={() => setFilter(cat)}
                   className={`px-6 py-2 text-[9px] font-bold tracking-[0.2em] uppercase transition-all duration-500 rounded-full ${
                     filter === cat ? "bg-primary text-white shadow-xl" : "bg-transparent text-primary hover:bg-heritage-cream"
                   }`}
                 >
                   {cat}
                 </button>
               ))}
             </div>
          </div>
        </div>

        {/* Enhanced Responsive Grid */}
        {/* Stable Grid Layout */}
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-4 lg:gap-10">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.05 }}
                className={`group relative cursor-pointer overflow-hidden gold-border-glow shadow-premium aspect-[4/5]`}
              >
                  <Link 
                    href={`/gallery/${item.slug}`} 
                    className="absolute inset-0 z-20"
                    onClick={(e) => {
                      e.preventDefault();
                      setSelectedId(item.id);
                    }}
                    aria-label={`View ${item.title}`}
                  />
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-[3000ms] group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={i < 4}
                    placeholder="blur"
                    blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
                    quality={85}
                  />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 flex flex-col justify-end p-10 translate-y-8 group-hover:translate-y-0">
                  <div className="flex items-center gap-4 mb-4">
                     <div className="w-8 h-[1px] bg-accent" />
                     <span className="text-accent text-[8px] font-bold tracking-[0.4em] uppercase">{item.category}</span>
                  </div>
                  <h3 className="text-3xl font-serif text-white mb-6 italic leading-tight tracking-tight">{item.title}</h3>
                  <div className="flex items-center gap-2 text-[10px] text-white/50 uppercase tracking-widest group-hover:text-accent transition-colors font-bold">
                     <Maximize2 size={14} />
                     <span>Review Masterpiece</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Dedicated CTA Section - Premium End of Gallery */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-24 p-12 md:p-16 bg-primary relative overflow-hidden shadow-premium border border-accent/10 text-center"
        >
          <div className="absolute inset-0 opacity-10 grain-bg pointer-events-none" />
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-accent/5 rounded-full blur-[100px]" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-accent/5 rounded-full blur-[100px]" />
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <Sparkles className="text-accent mx-auto mb-10" size={56} />
            <span className="text-accent font-bold tracking-[0.5em] uppercase text-[10px] mb-6 block font-sans">Bespoke Artisanry</span>
            <h3 className="text-[clamp(2rem,4vw,3.5rem)] font-serif text-white italic mb-10 leading-[1] tracking-tight">Your Vision, Gilded in Sovereignty.</h3>
            <p className="text-white/40 text-lg md:text-xl leading-relaxed mb-16 italic font-light max-w-prose mx-auto">
              Can&apos;t find the specific deity or narrative you seek? Our generational curators can translate any vision into a museum-grade masterpiece.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
               <a 
                href="https://wa.me/919830715802?text=I'm interested in a custom Tanjore commission." 
                className="w-full sm:w-auto bg-accent text-heritage-dark px-12 py-6 text-[11px] font-bold uppercase tracking-[0.3em] hover:bg-white transition-all shadow-2xl"
               >
                Private Commission
               </a>
               <a 
                href="tel:+919830715802" 
                className="w-full sm:w-auto border border-white/20 text-white px-12 py-6 text-[11px] font-bold uppercase tracking-[0.3em] hover:bg-white/5 transition-all"
               >
                Direct Consultation
               </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Lightbox / Immersive Review */}
      <AnimatePresence>
        {selectedId && selectedPainting && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[3000] bg-heritage-dark/98 backdrop-blur-2xl flex items-center justify-center p-4 md:p-12 overflow-hidden"
            onClick={() => setSelectedId(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-7xl w-full bg-white shadow-2xl overflow-hidden rounded-[1px] h-full max-h-[95vh] border border-accent/20"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedId(null)}
                className="absolute top-8 right-8 z-50 p-4 bg-primary text-white hover:bg-accent transition-all duration-300 rounded-full"
              >
                <X size={24} />
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
                {/* Visual Area with Lens Zoom */}
                <div className="relative h-[40vh] lg:h-full bg-heritage-cream/50 overflow-hidden flex items-center justify-center">
                  <div className="absolute inset-0 opacity-10 grain-bg" />
                 <div
                   className="relative z-10 w-full h-full flex items-center justify-center cursor-none p-12"
                   onMouseMove={(e) => {
                     const rect = e.currentTarget.getBoundingClientRect();
                     setZoomPos({
                       x: ((e.clientX - rect.left) / rect.width) * 100,
                       y: ((e.clientY - rect.top) / rect.height) * 100
                     });
                     setIsZooming(true);
                   }}
                   onMouseLeave={() => setIsZooming(false)}
                 >
                   <motion.div
                     initial={{ opacity: 0, scale: 0.8 }}
                     animate={{ opacity: 1, scale: 1 }}
                     transition={{ duration: 0.8 }}
                     className="relative w-full h-full"
                   >
                     <Image
                       src={selectedPainting.img}
                       alt={selectedPainting.title}
                       fill
                       className="object-contain drop-shadow-2xl"
                       quality={100}
                       priority
                     />

                     {/* Premium Zoom Lens */}
                     <AnimatePresence>
                       {isZooming && (
                         <motion.div
                           initial={{ opacity: 0, scale: 0 }}
                           animate={{ opacity: 1, scale: 1 }}
                           exit={{ opacity: 0, scale: 0 }}
                           className="absolute pointer-events-none z-20 w-80 h-80 rounded-full border-4 border-accent shadow-2xl overflow-hidden bg-white"
                           style={{
                             left: `${zoomPos.x}%`,
                             top: `${zoomPos.y}%`,
                             transform: 'translate(-50%, -50%)',
                           }}
                         >
                           <div
                             className="absolute inset-0"
                             style={{
                               backgroundImage: `url(${selectedPainting.img})`,
                               backgroundSize: '450%',
                               backgroundPosition: `${zoomPos.x}% ${zoomPos.y}%`,
                               backgroundRepeat: 'no-repeat'
                             }}
                           />
                         </motion.div>
                       )}
                     </AnimatePresence>
                   </motion.div>
                 </div>
                </div>

                {/* Content Area */}
                <div className="p-10 md:p-24 flex flex-col justify-center bg-white relative overflow-y-auto">
                  <div className="absolute top-0 right-0 p-12 opacity-[0.02] pointer-events-none">
                     <Info size={400} />
                  </div>
                  
                  <div className="max-w-[55ch]">
                    <span className="text-accent font-bold tracking-[0.5em] uppercase text-[10px] mb-8 block">Project Archetype #{selectedPainting.id}</span>
                    <h2 className="text-3xl md:text-5xl font-serif text-primary mb-10 italic leading-[1] tracking-tight">{selectedPainting.title}</h2>
                    
                    <div className="space-y-12">
                       <div className="bg-heritage-cream/30 p-10 border-l-4 border-accent italic shadow-sm">
                          <p className="text-heritage-dark/80 text-xl leading-relaxed font-light">
                             {selectedPainting.narrative}
                          </p>
                       </div>

                       <div className="grid grid-cols-2 gap-12 py-12 border-y border-accent/10">
                          <div>
                            <span className="flex items-center gap-3 text-[10px] uppercase tracking-widest text-accent mb-4 font-bold">
                               <Sparkles size={14} /> Materials
                            </span>
                            <p className="text-[15px] font-bold text-primary tracking-tight">24K Gold Foil, Burma Teak, Jaipur Stones</p>
                          </div>
                          <div>
                            <span className="flex items-center gap-3 text-[10px] uppercase tracking-widest text-accent mb-4 font-bold">
                               <Maximize2 size={14} /> Dimensions
                            </span>
                            <p className="text-[15px] font-bold text-primary tracking-tight">Standard & Bespoke Options</p>
                          </div>
                       </div>
                    </div>

                    <div className="mt-16 flex flex-col sm:flex-row gap-4">
                      <a 
                        href={`https://wa.me/919830715802?text=I wish to inquire about acquiring the masterpiece: ${selectedPainting.title}.`} 
                        className="flex-1 bg-primary text-white text-center py-6 font-bold uppercase tracking-[0.3em] text-[11px] hover:bg-black transition-all shadow-xl"
                      >
                        Acquisition Inquiry
                      </a>
                      <button 
                        onClick={() => router.push(`/gallery/${selectedPainting.slug}`)}
                        className="flex items-center justify-center gap-3 border border-primary text-primary px-8 py-6 font-bold uppercase tracking-[0.3em] text-[11px] hover:bg-primary hover:text-white transition-all"
                      >
                        <ExternalLink size={14} />
                        Full Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
