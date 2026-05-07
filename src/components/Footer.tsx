"use client";

import { MapPin, Award, ShieldCheck } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import { FacebookIcon, InstagramIcon } from "@/components/Icons";

export default function Footer() {
  return (
    <footer className="relative bg-[#0d0d0d] text-white pt-24 pb-12 overflow-hidden">
      {/* Subtle Silk Texture Overlay */}
      <div className="absolute inset-0 opacity-5 mix-blend-overlay pointer-events-none grain-bg" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-accent/5 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="lg:col-span-1">
            <div className="flex flex-col gap-4 mb-8">
              <div className="relative h-20 w-48">
                <Image
                  src="/images/tanjore-creation-logo.png"
                  alt="Tanjore Creation - Traditional Indian Art"
                  fill
                  className="object-contain object-left"
                  quality={80}
                  loading="lazy"
                  sizes="192px"
                />
              </div>
              <p className="text-[10px] uppercase tracking-[0.4em] text-white/30 font-bold">Est. 1984</p>
            </div>
            <p className="text-white/40 text-sm mb-12 leading-relaxed italic font-light max-w-xs">
              Preserving the sacred techniques of Thanjavur art for over four decades. Each masterpiece is a portal to the divine, crafted with 24K gold and eternal devotion.
            </p>
            <div className="flex gap-4">
              {[
                { id: 'fb', icon: FacebookIcon, href: 'https://www.facebook.com/tanjore.creation' },
                { id: 'ig', icon: InstagramIcon, href: 'https://www.instagram.com/tanjore_creation' },
              ].map((social) => (
                <a 
                  key={social.id}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-accent hover:border-accent transition-all hover:-translate-y-1 bg-white/5 group"
                  aria-label={`Visit our ${social.id} page`}
                >
                  <social.icon size={20} className="group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          <div className="pt-4 lg:pl-10">
            <h5 className="text-accent font-bold uppercase text-[10px] tracking-[0.5em] mb-12 opacity-80">The Directory</h5>
            <ul className="space-y-6 text-[11px] uppercase tracking-[0.2em] font-bold">
              {[
                { name: 'Home', href: '/' },
                { name: 'About Us', href: '/about' },
                { name: 'Gallery', href: '/gallery' },
                { name: 'Journal', href: '/blog' },
                { name: 'Commissions', href: '/services' },
                { name: 'Contact Us', href: '/contact' }
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/40 hover:text-white transition-all flex items-center gap-4 group">
                    <div className="w-0 h-[1px] bg-accent group-hover:w-4 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-4">
            <h5 className="text-accent font-bold uppercase text-[10px] tracking-[0.5em] mb-12 opacity-80">Collector&apos;s Circle</h5>
            <p className="text-white/40 text-sm mb-8 leading-relaxed italic font-light max-w-xs">Join our restricted list for early access to palatial scale masterpieces and private auctions.</p>
            <div className="relative group max-w-xs">
              <input 
                type="email" 
                placeholder="The Collector&apos;s Email" 
                aria-label="Email address for Collector's Circle"
                className="w-full bg-transparent border-b border-white/10 px-0 py-4 text-sm focus:outline-none focus:border-accent transition-all placeholder:text-white/10 placeholder:italic"
              />
              <button className="absolute right-0 bottom-4 text-accent uppercase text-[10px] font-bold tracking-widest hover:text-white transition-colors">
                Apply
              </button>
            </div>
            <div className="mt-8 flex items-center gap-3 opacity-20">
              <ShieldCheck size={14} className="text-accent" />
              <span className="text-[10px] uppercase tracking-widest">Identity Verified</span>
            </div>
          </div>

          <div className="pt-4">
            <h5 className="text-accent font-bold uppercase text-[10px] tracking-[0.5em] mb-12 opacity-80">Studio Hub</h5>
            <div className="space-y-10">
              <div className="group cursor-pointer">
                <p className="text-white/30 text-[9px] uppercase tracking-[0.3em] mb-3 group-hover:text-accent transition-colors font-bold">Direct Studio Line</p>
                <a href="tel:+919830715802" className="text-white/80 text-lg md:text-xl font-serif italic hover:text-accent transition-colors">+91 98307 15802</a>
              </div>
              <div className="group cursor-pointer">
                <p className="text-white/30 text-[9px] uppercase tracking-[0.3em] mb-3 group-hover:text-accent transition-colors font-bold">Artisan Registry</p>
                <a href="mailto:tanjorecreation01@gmail.com" className="text-white/80 text-base md:text-lg font-serif italic hover:text-accent transition-colors break-all">tanjorecreation01@gmail.com</a>
              </div>
              <div className="pt-6 border-t border-white/5 space-y-6">
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Shree+Niket+11+Ashoka+Road+Alipore+Kolkata+700027"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full aspect-[2/1] bg-white/5 rounded-sm overflow-hidden grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-700 group/map"
                >
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.234567890123!2d88.3308!3d22.5367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02773d12d6a503%3A0x6b4c10c494399e82!2sShree%20Niket%2C%2011%2C%20Ashoka%20Rd%2C%20Alipore%2C%20Kolkata%2C%20West%20Bengal%20700027!5e0!3m2!1sen!2sin!4v1714131567890!5m2!1sen!2sin" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0, pointerEvents: 'none' }} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Shree Niket Location"
                  ></iframe>
                </a>
                <div className="flex items-start gap-4 group">
                  <MapPin size={18} className="text-accent mt-1 shrink-0 group-hover:animate-bounce" />
                  <span className="text-[10px] uppercase tracking-widest leading-relaxed text-white/60">
                    11 Ashoka Road, Alipore, Flat 7f, <br />
                    Near SBI, SHREE NIKET Building, <br />
                    Kolkata - 700027, West Bengal
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[9px] uppercase tracking-[0.4em] text-white/20 font-bold">
          <div className="flex items-center gap-2">
            <Award size={14} className="text-accent opacity-50" />
            <p>&copy; 2026 Tanjore Creation. Masterworks Protected.</p>
          </div>
          <div className="flex gap-10">
            {[
              { label: 'Catalogue', href: '/gallery' },
              { label: 'Privacy Protocol', href: '/privacy' },
              { label: 'Authenticity Cert', href: '/authenticity' }
            ].map(s => (
              <Link key={s.label} href={s.href} className="hover:text-accent cursor-pointer transition-all border-b border-transparent hover:border-accent/30 pb-1">{s.label}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
