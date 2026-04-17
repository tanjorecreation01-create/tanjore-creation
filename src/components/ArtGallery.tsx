"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2, X, Info, Sparkles } from "lucide-react";
import Image from "next/image";

const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#f5f1e8" offset="20%" />
      <stop stop-color="#e8e1d0" offset="50%" />
      <stop stop-color="#f5f1e8" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#f5f1e8" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str: string) =>
  typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);

const paintings = [
  // DEITIES - PREMIUM MAPPING
  { 
    id: 1, 
    title: "Lord Ganesha: The Threshold Guardian", 
    category: "Deities", 
    img: "/images/tanjore_ganesha.png", 
    desc: "24K Gold Foil | Teak Wood",
    narrative: "This masterpiece depicts Ganesha under a majestic temple arch. The thick gesso work on the arch uses a special 'Mukk' paste, layered with pure 24K gold leaves."
  },
  { 
    id: 2, 
    title: "Radha Krishna: Eternal Union", 
    category: "Deities", 
    img: "/images/tanjore_radhakrishna.png", 
    desc: "Traditional Pigments",
    narrative: "A tender portrayal of Radha and Krishna. Notice the classical rounded faces and almond eyes characteristic of the Maratha influence."
  },
  { 
    id: 3, 
    title: "Goddess Lakshmi: Eternal Prosperity", 
    category: "Deities", 
    img: "/images/tanjore_lakshmi.png", 
    desc: "Embossed Foil Details",
    narrative: "Lakshmi with four arms, holding lotuses. The golden 'Kaasu Malai' is meticulously embossed and gilded."
  },
  { 
    id: 4, 
    title: "Lord Venkateswara: The Seven Hills", 
    category: "Deities", 
    img: "/images/tanjore_balaji.png", 
    desc: "Majestic Ornaments",
    narrative: "A grand depiction of Lord Balaji encrusted with Jaipur stones, creating a royal luminescence."
  },
  { 
    id: 5, 
    title: "Saraswati: The Wisdom Flow", 
    category: "Deities", 
    img: "/images/tanjore_saraswati.png", 
    desc: "Divine Wisdom",
    narrative: "The Goddess of learning shown with her Veena. White sari achieved through traditional chalk-based pigments."
  },
  { 
    id: 6, 
    title: "Meditative Lord Shiva", 
    category: "Deities", 
    img: "/images/tanjore_shiva.png", 
    desc: "Powerful Presence",
    narrative: "Rare meditative pose. The 'Prabhavali' halo features intricate floral motifs and the mythical Yali."
  },
  { 
    id: 13, 
    title: "Lord Hanuman: Devotional Strength", 
    category: "Deities", 
    img: "/images/tanjore_hanuman_placeholder_1774508979073.png", 
    desc: "Spiritual Power",
    narrative: "A powerful depiction of Hanuman. The muscles and jewelry are raised with mukk paste for tactile depth."
  },
  { 
    id: 14, 
    title: "Goddess Durga: The Protector", 
    category: "Deities", 
    img: "/images/tanjore_durga_placeholder_1774508998725.png", 
    desc: "Divine Power",
    narrative: "Durga in her benevolent form. The lion mascot is detailed with fine brushwork and gold trimmings."
  },
  { 
    id: 21, 
    title: "Sita Rama Kalyanam: Sacred Union", 
    category: "Deities", 
    img: "/images/tanjore_sita_rama_kalyanam_placeholder_1774510531892.png", 
    desc: "Divine Marriage",
    narrative: "A grand narrative of the celestial wedding. Features over 50 individual gold-foiled architectural elements."
  },
  { 
    id: 22, 
    title: "Lord Krishna: The Divine Flutist", 
    category: "Deities", 
    img: "/images/tanjore_small_krishna_mini_17112024.png", 
    desc: "Bhakti Tradition",
    narrative: "A miniature masterpiece focusing on the expressive eyes and posture of young Krishna."
  },
  { 
    id: 23, 
    title: "The Sacred Om", 
    category: "Deities", 
    img: "/images/tanjore_om_mini_17112024.png", 
    desc: "Cosmic Sound",
    narrative: "The universal seed syllable 'Om', rendered in thick 24K gold relief work with Jaipur stone embellishments."
  },

  // HERITAGE
  { 
    id: 9, 
    title: "Ceremonial Elephant", 
    category: "Heritage", 
    img: "/images/tanjore_elephant_placeholder_1774508897229.png", 
    desc: "Majestic Jewelry",
    narrative: "Inspired by temple festivals. Features 'Netri Pattam' gear encrusted with emerald and ruby stones."
  },
  { 
    id: 10, 
    title: "The Master's Touch", 
    category: "Heritage", 
    img: "/images/tanjore_worker.png", 
    desc: "Artisan Workspace",
    narrative: "Inside the studio of a 5th-generation master. Every stroke is guided by centuries of tradition."
  },
  { 
    id: 24, 
    title: "The Royal Court Scene", 
    category: "Heritage", 
    img: "/images/tanjore_court_scene_placeholder_1774508924435.png", 
    desc: "Maratha Splendor",
    narrative: "A detailed depiction of a royal audience, showcasing the influence of the Maratha kings on Tanjore art."
  },
  { 
    id: 25, 
    title: "Festival Utsavam", 
    category: "Heritage", 
    img: "/images/tanjore_festival_utsavam_placeholder_1774510512133.png", 
    desc: "Temple Procession",
    narrative: "Captures the vibrant energy of a temple festival with palatial scale relief work on the deity's chariot."
  },
  { 
    id: 26, 
    title: "Palace Celebrations", 
    category: "Heritage", 
    img: "/images/tanjore_palace_celebration_placeholder_1774510473506.png", 
    desc: "Kingdom Legacy",
    narrative: "A multifaceted composition highlighting traditional music and dance within the palace grounds."
  },

  // NATURE & THEMES
  { 
    id: 19, 
    title: "Hamsa: The Celestial Swan", 
    category: "Nature", 
    img: "/images/tanjore_swan_hamsa_17112024.png", 
    desc: "Sacred Avian",
    narrative: "The celestial swan portrayed with pure gold filigree. A symbol of discernment and spiritual clarity."
  },
  { 
    id: 20, 
    title: "Kalpavriksha: The Wish-Fulfilling Tree", 
    category: "Nature", 
    img: "/images/tanjore_tree_of_life_17112024.png", 
    desc: "Divine Flora",
    narrative: "Every leaf on this wish-fulfilling tree is individually embossed and gilded with 24K goldfoil."
  },
  { 
    id: 27, 
    title: "The Royal Peacock", 
    category: "Nature", 
    img: "/images/tanjore_peacock_placeholder_1774505147374.png", 
    desc: "Traditional Motif",
    narrative: "The vibrant plumage of the peacock is brought to life using natural dyes and painstaking gold foil inlay."
  },
  { 
    id: 28, 
    title: "The Golden Parrot", 
    category: "Nature", 
    img: "/images/tanjore_parrot_decorative_placeholder_1774508960598.png", 
    desc: "Auspicious Symbol",
    narrative: "Commonly seen perched on the shoulders of goddesses, the parrot symbolizes love and divine protection."
  },
  { 
    id: 29, 
    title: "Vishnu Dashavatara: Ten Avatars", 
    category: "Deities", 
    img: "/images/tanjore_vishnu_dashavatara.png", 
    desc: "Cosmic Lineage",
    narrative: "A grand circular composition depicting the ten incarnations of Lord Vishnu. Each avatar is rendered with high-relief gold work and symbolic weapons."
  },
  { 
    id: 30, 
    title: "The Sacred Temple Gopuram", 
    category: "Heritage", 
    img: "/images/tanjore_temple_gopuram.png", 
    desc: "Divine Architecture",
    narrative: "An architectural marvel in gold. This painting captures the intricate tiers of a South Indian Temple Gopuram, gilded with pure 24K gold foil."
  },
  { 
    id: 31, 
    title: "The Sacred Lotus Pond", 
    category: "Nature", 
    img: "/images/tanjore_lotus_pond.png", 
    desc: "Floral Serenity",
    narrative: "A serene depiction of blooming lotuses in a temple pond. The floating leaves and shimmering water are brought to life through embossed gold filigree."
  },
  { 
    id: 32, 
    title: "Paradise Flycatchers", 
    category: "Nature", 
    img: "/images/tanjore_paradise_birds.png", 
    desc: "Avian Elegance",
    narrative: "A pair of elusive Paradise Flycatchers with flowing gold-tipped tails. A masterpiece of natural detail and traditional craftsmanship."
  }
];

const categories = ["All", "Deities", "Heritage", "Nature"];

export default function ArtGallery() {
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
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-4 lg:gap-10">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.05 }}
                onClick={() => setSelectedId(item.id)}
                className={`group relative cursor-pointer overflow-hidden gold-border-glow shadow-premium aspect-[4/5]`}
              >
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
                            <p className="text-[15px] font-bold text-primary tracking-tight">22K Gold Foil, Burma Teak, Jaipur Stones</p>
                          </div>
                          <div>
                            <span className="flex items-center gap-3 text-[10px] uppercase tracking-widest text-accent mb-4 font-bold">
                               <Maximize2 size={14} /> Dimensions
                            </span>
                            <p className="text-[15px] font-bold text-primary tracking-tight">Standard & Bespoke Options</p>
                          </div>
                       </div>
                    </div>

                    <div className="mt-16">
                      <a 
                        href={`https://wa.me/919830715802?text=I wish to inquire about acquiring the masterpiece: ${selectedPainting.title}.`} 
                        className="block w-full bg-primary text-white text-center py-6 font-bold uppercase tracking-[0.3em] text-[11px] hover:bg-black transition-all shadow-xl"
                      >
                        Acquisition Inquiry
                      </a>
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
