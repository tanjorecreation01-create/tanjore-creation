import type { Metadata } from "next";
import { ShieldCheck, Award, Gem, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Certificate of Authenticity | Tanjore Creation",
  description: "Learn about our 24K gold certification and the museum-grade standards of our Thanjavur paintings.",
};

export default function AuthenticityPage() {
  return (
    <main className="min-h-screen bg-heritage-cream pt-48 pb-32 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-24">
          <span className="text-accent font-bold tracking-[0.4em] uppercase text-[10px] mb-6 block">The Collector&apos;s Seal</span>
          <h1 className="text-5xl md:text-8xl font-serif italic mb-10 text-primary leading-[0.9]">Guarantee of Sovereignty</h1>
          <p className="text-heritage-dark/60 text-xl font-light italic leading-relaxed">
            Every masterpiece from Tanjore Creation is accompanied by a signed Certificate of Authenticity, ensuring its material purity and artisanal lineage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {[
            {
              title: "24K Gold Certification",
              desc: "We use only certified 24-carat gold leaves. Unlike 22K or synthetic imitations, our gold never tarnishes and retains its divine luster for generations.",
              icon: Sparkles
            },
            {
              title: "Generational Lineage",
              desc: "Each piece is hand-painted by master artisans whose families have practiced the Thanjavur tradition for over five centuries.",
              icon: Award
            },
            {
              title: "Sacred Materials",
              desc: "Authentic Burmese Teak and Jaipur stones are used in every commission, ensuring material value alongside spiritual merit.",
              icon: Gem
            },
            {
              title: "Registry Tracking",
              desc: "Every palatial-scale work is entered into our global registry, documenting its provenance for future generations of collectors.",
              icon: ShieldCheck
            }
          ].map((item, i) => (
            <div key={i} className="bg-white p-10 border border-accent/10 shadow-premium group hover:bg-primary transition-all duration-700">
              <item.icon className="text-accent mb-8 group-hover:scale-110 transition-transform" size={32} />
              <h3 className="text-2xl font-serif text-primary italic mb-6 group-hover:text-white transition-colors">{item.title}</h3>
              <p className="text-heritage-dark/60 text-sm leading-relaxed italic font-light group-hover:text-white/60 transition-colors">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <section className="mt-32 p-12 md:p-24 bg-primary relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 opacity-10 grain-bg pointer-events-none" />
          <div className="relative z-10 max-w-2xl text-white">
            <h2 className="text-4xl md:text-6xl font-serif italic mb-10 leading-tight">The Light Test</h2>
            <p className="text-white/40 text-xl font-light italic leading-relaxed mb-12">
              Authentic gold foil reflects light with a warm, deep glow that artificial colors cannot replicate. When you hold a Tanjore Creation piece, the light should &quot;dance&quot; across the relief work, revealing the hand-gilded texture of the master artisan.
            </p>
            <div className="border-l border-accent/30 pl-8">
              <p className="text-accent font-bold tracking-widest text-[10px] uppercase">Heirloom Grade Assurance</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
