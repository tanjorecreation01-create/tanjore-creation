import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Home, Sparkles, PhoneCall } from "lucide-react";

export const metadata: Metadata = {
  title: "Thank You | Tanjore Creation",
  description: "Thank you for your inquiry. A generational curator will reach out to you shortly.",
  robots: {
    index: false,
    follow: false,
  }
};

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-heritage-cream flex items-center justify-center pt-24 pb-20 grain-bg">
      <div className="max-w-xl mx-auto px-6 text-center">
        {/* Success Icon */}
        <div className="w-24 h-24 bg-primary/5 border border-accent/20 rounded-full flex items-center justify-center mx-auto mb-12 animate-pulse">
          <CheckCircle2 className="text-accent" size={48} />
        </div>

        {/* Message */}
        <span className="text-accent font-bold tracking-[0.5em] uppercase text-[10px] mb-6 block">Inquiry Submitted</span>
        <h1 className="text-4xl md:text-6xl font-serif italic text-primary leading-tight mb-8">
          The Journey Has Begun
        </h1>
        <p className="text-heritage-dark/70 text-lg leading-relaxed mb-12 font-light italic max-w-md mx-auto">
          Your digital inquiry has been securely registered in our artisan registry. A generational curator will review your Vastu or catalog details and reach out to you within 24 business hours.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Link 
            href="/" 
            className="flex items-center justify-center gap-3 w-full sm:w-auto bg-primary text-white px-10 py-5 font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-black transition-all shadow-xl rounded-sm"
          >
            <Home size={14} /> Return Home
          </Link>
          <Link 
            href="/gallery" 
            className="flex items-center justify-center gap-3 w-full sm:w-auto border border-primary text-primary px-10 py-5 font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-primary hover:text-white transition-all rounded-sm"
          >
            <Sparkles size={14} /> View Gallery
          </Link>
        </div>

        {/* Support Section */}
        <div className="mt-16 pt-12 border-t border-accent/15">
          <p className="text-primary/40 text-[9px] uppercase tracking-[0.3em] mb-6 font-bold font-sans">Immediate Assistance</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href="https://wa.me/919830715802?text=I%20just%20submitted%20a%20form%20inquiry."
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-accent font-serif italic text-base flex items-center gap-3 transition-colors"
            >
              <PhoneCall size={16} className="text-accent" /> +91 98307 15802
            </a>
            <span className="text-accent/30 hidden sm:inline">|</span>
            <span className="text-heritage-dark/60 font-serif italic text-base">By Appointment Only</span>
          </div>
        </div>
      </div>
    </main>
  );
}
