"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const links = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Gallery", href: "/gallery" },
  { name: "Journal", href: "/blog" },
  { name: "Commissions", href: "/services" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  // On non-home pages, always use solid background with dark text
  const useSolidBg = !isHome || scrolled;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 w-full z-[2000] transition-all duration-700 ease-in-out ${useSolidBg ? "h-14 md:h-20 bg-white/95 backdrop-blur-md shadow-2xl border-b border-accent/20" : "h-16 md:h-24 bg-transparent"}`}>
        <div className="max-w-7xl mx-auto h-full px-4 md:px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 transition-all hover:scale-105 group relative">
            <div className={`relative transition-all duration-700 ${useSolidBg ? "h-10 w-32 md:h-14 md:w-48" : "h-12 w-40 md:h-20 md:w-64"}`}>
              <Image
                src="/images/tanjore-creation-logo.png"
                alt="Tanjore Creation - Traditional Indian Art"
                fill
                priority
                className="object-contain"
                sizes="(max-width: 768px) 160px, 256px"
              />
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-10">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-[10px] uppercase tracking-[0.3em] font-bold transition-all hover:text-accent group relative py-2 ${useSolidBg ? "text-primary" : "text-white"}`}
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-accent transition-all group-hover:w-full" />
              </Link>
            ))}
            <Link href="/contact" className={`px-8 py-3 rounded-sm font-bold text-[10px] uppercase tracking-[0.2em] transition-all transform hover:scale-105 active:scale-95 ${useSolidBg ? "bg-primary text-white shadow-lg" : "bg-accent text-heritage-dark shadow-2xl"}`}>
              Contact Us
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className={`md:hidden p-2 transition-all rounded-full hover:bg-black/5 active:scale-90 ${useSolidBg ? "text-primary" : "text-white"}`}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[3000] bg-heritage-cream/98 backdrop-blur-2xl md:hidden overflow-y-auto"
          >
            <div className="min-h-screen flex flex-col items-center justify-center p-8 text-center relative">
              <button 
                onClick={() => setIsOpen(false)} 
                className="absolute top-8 right-8 text-primary p-2 active:scale-95 transition-all bg-white/50 rounded-full shadow-sm"
              >
                <X size={32} />
              </button>

              <div className="w-full max-w-sm flex flex-col items-center gap-12">
                <div className="mb-4">
                  <span className="text-accent font-bold tracking-[0.5em] uppercase text-[10px] block mb-2">Tanjore Masterpieces</span>
                  <div className="w-12 h-[1px] bg-accent/30 mx-auto" />
                </div>

                <div className="flex flex-col gap-6 w-full">
                  {links.map((link, i) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-4xl font-serif text-primary hover:text-accent transition-all italic active:scale-95"
                    >
                      <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        {link.name}
                      </motion.span>
                    </Link>
                  ))}
                </div>

                <div className="w-full pt-12 mt-4 border-t border-primary/5">
                  <p className="text-primary/40 text-[9px] uppercase tracking-[0.4em] mb-6 font-bold">Collector&apos;s Circle</p>
                  <Link 
                    href="/contact" 
                    onClick={() => setIsOpen(false)}
                    className="flex flex-col items-center gap-4 group"
                  >
                    <div className="bg-primary text-white w-full py-5 rounded-sm font-bold uppercase tracking-[0.2em] text-[11px] shadow-2xl active:scale-95 transition-all">
                      Contact Us
                    </div>
                  </Link>
                  <a href="tel:+919830715802" className="mt-8 block text-primary/60 font-serif italic text-lg hover:text-accent transition-colors">+91 98307 15802</a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
