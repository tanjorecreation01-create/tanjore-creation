"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { WhatsAppOfficialIcon } from "@/components/Icons";

const slides = [
  {
    image: "/images/tanjore_ganesha.png",
    title: "Handcrafted 24K Gold Tanjore Ganesha",
    subtitle: "Experience the majestic beauty of authentic Thanjavur art for your spiritual threshold.",
  },
  {
    image: "/images/tanjore_durga_placeholder_1774508998725.png",
    title: "Divine Goddess Durga Heritage Painting",
    subtitle: "Generational masterpieces imbued with traditional pigments and 22-carat gold leaves.",
  },
  {
    image: "/images/tanjore_elephant_placeholder_1774508897229.png",
    title: "Royal Ceremonial Elephant Gold Art",
    subtitle: "Exquisite palace-style heritage art featuring pure gold and Jaipur stones.",
  },
  {
    image: "/images/tanjore_shiva.png",
    title: "Meditative Lord Shiva Tanjore Masterpiece",
    subtitle: "A rare and powerful depiction of the cosmic dancer in high-relief gold work.",
  },
  {
    image: "/images/tanjore_saraswati.png",
    title: "Goddess Saraswati Wisdom Painting",
    subtitle: "Preserving the sacred hymns of the divine feminine through centuries of Thanjavur tradition.",
  },
  {
    image: "/images/tanjore_radhakrishna.png",
    title: "Radha Krishna Eternal Love Gold Painting",
    subtitle: "Inspired by the palatial splendor of the Maratha and Nayaka royal courts.",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1 }}
          animate={{ 
            opacity: 1, 
            scale: 1.1,
            x: current % 2 === 0 ? 20 : -20 
          }}
          exit={{ opacity: 0 }}
          transition={{ duration: 8, ease: "linear" }}
          className="absolute inset-0"
          style={{ willChange: "transform, opacity" }}
        >
          <div className="absolute inset-0 bg-black/40 z-10" />
          <Image
            src={slides[current].image}
            alt={slides[current].title}
            fill
            priority={current === 0}
            loading={current === 0 ? "eager" : "lazy"}
            className="object-cover"
            sizes="100vw"
            quality={80}
            fetchPriority={current === 0 ? "high" : "auto"}
          />
        </motion.div>
      </AnimatePresence>

      {/* Preload next slide image for smoother transitions */}
      {slides.map((slide, i) => (
        i !== current && i <= 1 ? (
          <link key={i} rel="preload" as="image" href={slide.image} />
        ) : null
      ))}

      <div className="absolute inset-0 z-20 flex items-center justify-center text-center text-white px-4">
        <div className="max-w-5xl">
          <motion.h1
            key={`title-${current}`}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif mb-6 md:mb-8 leading-[1.1] tracking-tight px-4"
          >
            {slides[current].title.split(" ").map((word, i) => (
              <motion.span 
                key={i} 
                initial={{ opacity: 0, y: 50, rotateX: -45 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ delay: 0.2 + i * 0.1, duration: 1, ease: "easeOut" }}
                className={`inline-block mr-4 ${word === "Golden" ? "text-accent text-gold-shadow italic" : ""}`}
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>
          <motion.p
            key={`sub-${current}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light opacity-90 mb-8 md:mb-12 tracking-wide font-serif italic px-6"
          >
            {slides[current].subtitle}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Link href="/gallery" className="w-full sm:w-auto relative group overflow-hidden bg-accent text-heritage-dark px-8 md:px-12 py-4 md:py-5 rounded-sm font-bold transition-all shadow-premium text-sm md:text-base">
              <span className="relative z-10">Explore the Gallery</span>
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-0" />
            </Link>
            <a href="https://wa.me/919830715802" className="w-full sm:w-auto group border border-white/30 backdrop-blur-md text-white hover:border-green-500 hover:bg-green-500/10 px-8 md:px-12 py-4 md:py-5 rounded-sm font-bold transition-all flex items-center justify-center gap-3 text-sm md:text-base">
              <span className="text-green-500"><WhatsAppOfficialIcon /></span>
              WhatsApp Inquiry
            </a>
          </motion.div>
        </div>
      </div>

      <button onClick={prev} className="absolute left-6 top-1/2 -translate-y-1/2 z-30 p-4 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-white transition-all" aria-label="Previous slide">
        <ChevronLeft size={32} aria-hidden="true" />
      </button>
      <button onClick={next} className="absolute right-6 top-1/2 -translate-y-1/2 z-30 p-4 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-white transition-all" aria-label="Next slide">
        <ChevronRight size={32} aria-hidden="true" />
      </button>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex gap-2" role="tablist">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className="p-2 flex items-center justify-center min-w-[44px] min-h-[44px]"
            aria-label={`Go to slide ${i + 1}`}
            role="tab"
            aria-selected={current === i}
          >
            <span className={`h-3 rounded-full transition-all ${current === i ? "bg-accent w-10" : "bg-white/30 w-3"}`} />
          </button>
        ))}
      </div>
    </div>
  );
}
