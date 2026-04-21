import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, ShieldCheck, Globe } from "lucide-react";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Contact Tanjore Creation | Kolkata Studio | WhatsApp & Email",
  description: "Reach out for custom Tanjore painting commissions, pricing enquiries, or restoration consultations. Studio in Alipore, Kolkata.",
  keywords: ["Contact Tanjore artist", "Tanjore painting commission", "Thanjavur art studio location", "Art restoration services", "Buy Tanjore paintings online"],
  openGraph: {
    title: "Contact Tanjore Creation | Kolkata Studio | WhatsApp & Email",
    description: "Reach out for custom Tanjore painting commissions, pricing enquiries, or restoration consultations. Studio in Alipore, Kolkata.",
    url: "https://tanjorecreation.com/contact",
    siteName: "Tanjore Creation",
    images: [{ url: "/images/tanjore_ganesha.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Tanjore Creation | Kolkata Studio | WhatsApp & Email",
    description: "Reach out for custom Tanjore painting commissions, pricing enquiries, or restoration consultations. Studio in Alipore, Kolkata.",
    images: ["/images/tanjore_ganesha.png"],
  },
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://tanjorecreation.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Contact",
        "item": "https://tanjorecreation.com/contact"
      }
    ]
  };

  return (
    <main className="min-h-screen bg-heritage-cream text-primary overflow-x-hidden grain-bg">
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      
      <section className="pt-48 pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
            
            {/* Left: Contact Info */}
            <div className="space-y-16">
              <div>
                <span className="text-accent font-bold tracking-[0.4em] uppercase text-xs mb-6 block">Get in Touch</span>
                <h1 className="text-5xl md:text-8xl font-serif italic mb-10 leading-[0.9]">Begin Your Acquisition</h1>
                <p className="text-heritage-dark/60 text-xl font-light italic leading-relaxed max-w-lg">
                  Whether you are a seasoned collector or a first-time admirer, we are here to guide your journey into the divine world of Thanjavur art.
                </p>
              </div>

              <div className="space-y-10">
                <div className="flex gap-8 group">
                  <div className="w-16 h-16 bg-white border border-accent/10 flex items-center justify-center group-hover:bg-accent transition-colors duration-500">
                    <Phone className="text-accent group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase tracking-widest font-bold text-accent mb-2">WhatsApp / Voice</h4>
                    <p className="text-xl font-serif italic text-primary">+91 98307 15802</p>
                  </div>
                </div>

                <div className="flex gap-8 group">
                  <div className="w-16 h-16 bg-white border border-accent/10 flex items-center justify-center group-hover:bg-accent transition-colors duration-500">
                    <Mail className="text-accent group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase tracking-widest font-bold text-accent mb-2">Artisan Registry</h4>
                    <a href="mailto:harlalkasweety@yahoo.co.in" className="text-xl font-serif italic text-primary hover:text-accent transition-colors">harlalkasweety@yahoo.co.in</a>
                  </div>
                </div>

                <div className="flex gap-8 group">
                  <div className="w-16 h-16 bg-white border border-accent/10 flex items-center justify-center group-hover:bg-accent transition-colors duration-500">
                    <MapPin className="text-accent group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-lg font-serif italic text-primary leading-tight">
                      11 Ashoka Road, Alipore, Flat 7f, <br />
                      Near SBI, SHREE NIKET Building, <br />
                      Kolkata - 700027, West Bengal
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-16 border-t border-accent/10 grid grid-cols-2 gap-10">
                 <div className="flex gap-4 items-center">
                    <Clock className="text-accent/40" size={20} />
                    <span className="text-[10px] uppercase tracking-widest font-bold">10 AM - 8 PM IST</span>
                 </div>
                 <div className="flex gap-4 items-center">
                    <Globe className="text-accent/40" size={20} />
                    <span className="text-[10px] uppercase tracking-widest font-bold">Global Shipping</span>
                 </div>
              </div>
            </div>

            {/* Right: Immersive Location/Trust card */}
            <div className="relative">
               <div className="absolute -inset-4 border border-accent/10 gold-border-glow pointer-events-none" />
               <div className="bg-white p-12 md:p-20 shadow-premium relative z-10">
                  <ShieldCheck className="text-accent mb-10" size={48} />
                  <h3 className="text-3xl font-serif italic mb-8">Studio Consultation</h3>
                  <p className="text-heritage-dark/60 leading-relaxed mb-10 font-light italic">
                    We welcome visitors to our studio to witness the 6-step artisanal process firsthand. For international collectors, we offer dedicated high-definition video consultations to discuss deity selection and Vastu requirements.
                  </p>
                  <div className="space-y-6 mb-12">
                     <div className="flex justify-between items-center py-4 border-b border-accent/5">
                        <span className="text-[10px] uppercase tracking-widest font-bold text-accent">Availability</span>
                        <span className="text-sm font-serif italic underline decoration-accent/20">By Appointment Only</span>
                     </div>
                     <div className="flex justify-between items-center py-4 border-b border-accent/5">
                        <span className="text-[10px] uppercase tracking-widest font-bold text-accent">Languages</span>
                        <span className="text-sm font-serif italic underline decoration-accent/20">English, Hindi, Bengali</span>
                     </div>
                  </div>
                  <a href="https://wa.me/919830715802" className="block w-full text-center bg-primary text-white py-6 font-bold uppercase tracking-[0.3em] text-[10px] hover:bg-black hover:scale-[1.02] transition-all shadow-xl">
                    Request Appointment
                  </a>
               </div>
               
               <div className="mt-12 overflow-hidden rounded-sm grayscale hover:grayscale-0 transition-all duration-1000 border border-accent/5 aspect-video w-full">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14742.06240251786!2d88.3308!3d22.5367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02773d12d6a503%3A0x6b4c10c494399e82!2sShree%20Niket%2C%2011%2C%20Ashoka%20Rd%2C%20Alipore%2C%20Kolkata%2C%20West%20Bengal%20700027!5e0!3m2!1sen!2sin!4v1714131567890!5m2!1sen!2sin" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0, filter: 'grayscale(1) contrast(1.1) brightness(0.9) opacity(0.8)' }} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Shree Niket Studio Location"
                  ></iframe>
               </div>
               <a 
                 href="https://www.google.com/maps/search/?api=1&query=Shree+Niket+11+Ashoka+Road+Alipore+Kolkata+700027" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="mt-6 flex items-center justify-center gap-3 w-full py-4 border border-accent/20 text-[10px] uppercase tracking-[0.3em] font-bold text-accent hover:bg-accent hover:text-white transition-all group"
               >
                 <MapPin size={14} className="group-hover:animate-bounce" />
                 Open in Google Maps
               </a>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
