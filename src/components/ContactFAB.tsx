"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Phone } from "lucide-react";
import { WhatsAppOfficialIcon } from "@/components/Icons";
import { useState } from "react";

export default function ContactFAB() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end gap-6">
      <div className="relative flex items-center gap-4">
        <AnimatePresence>
          {hovered === 'whatsapp' && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="bg-white px-4 py-2 rounded-full shadow-xl border border-accent/10 text-[10px] uppercase tracking-widest font-bold text-primary"
            >
              Consult Artisans
            </motion.div>
          )}
        </AnimatePresence>
        <div className="relative">
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 bg-green-500 rounded-full"
            style={{ willChange: "transform, opacity", contain: "layout" }}
          />
          <motion.a
            href="https://wa.me/919830715802"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0, rotate: -45 }}
            animate={{ scale: 1, rotate: 0 }}
            whileHover={{ scale: 1.15, rotate: 10 }}
            onMouseEnter={() => setHovered('whatsapp')}
            onMouseLeave={() => setHovered(null)}
            className="relative w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition-shadow z-10"
          >
            <WhatsAppOfficialIcon size={32} />
          </motion.a>
        </div>
      </div>
      
      <div className="relative flex items-center gap-4">
        <AnimatePresence>
          {hovered === 'phone' && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="bg-white px-4 py-2 rounded-full shadow-xl border border-accent/10 text-[10px] uppercase tracking-widest font-bold text-primary"
            >
              Direct Line
            </motion.div>
          )}
        </AnimatePresence>
        <motion.a
          href="tel:+919830715802"
          initial={{ scale: 0, rotate: 45 }}
          animate={{ scale: 1, rotate: 0 }}
          whileHover={{ scale: 1.15, rotate: -10 }}
          onMouseEnter={() => setHovered('phone')}
          onMouseLeave={() => setHovered(null)}
          className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition-shadow"
        >
          <Phone size={32} />
        </motion.a>
      </div>
    </div>
  );
}
