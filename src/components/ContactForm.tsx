"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("https://formspree.io/f/xlgzevzz", { 	
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        setStatus("success");
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      console.error(error);
      alert("Submission failed. Please try again or contact us via WhatsApp.");
      setStatus("idle");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-primary/5 border border-accent/20 p-12 text-center rounded-sm">
        <CheckCircle2 className="text-accent mx-auto mb-6" size={48} />
        <h3 className="text-2xl font-serif text-primary italic mb-4">Inquiry Received</h3>
        <p className="text-heritage-dark/60 italic font-light">
          A generational curator will review your request and reach out to you at the provided email within 24 business hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-2">
          <label htmlFor="name" className="text-[10px] uppercase tracking-widest font-bold text-primary/40">Full Name</label>
          <input
            required
            type="text"
            id="name"
            name="name"
            placeholder="e.g. Alexander Hamilton"
            className="w-full bg-transparent border-b border-accent/20 py-3 focus:outline-none focus:border-accent transition-colors placeholder:text-primary/10 italic"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-[10px] uppercase tracking-widest font-bold text-primary/40">Email Address</label>
          <input
            required
            type="email"
            id="email"
            name="email"
            placeholder="e.g. alex@heritage.com"
            className="w-full bg-transparent border-b border-accent/20 py-3 focus:outline-none focus:border-accent transition-colors placeholder:text-primary/10 italic"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="subject" className="text-[10px] uppercase tracking-widest font-bold text-primary/40">Subject of Inquiry</label>
        <select
          id="subject"
          name="subject"
          className="w-full bg-transparent border-b border-accent/20 py-3 focus:outline-none focus:border-accent transition-colors italic text-primary/60"
        >
          <option>General Gallery Inquiry</option>
          <option>Bespoke Commission Request</option>
          <option>Art Restoration Consultation</option>
          <option>International Shipping & Insurance</option>
        </select>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-[10px] uppercase tracking-widest font-bold text-primary/40">Your Message</label>
        <textarea
          required
          id="message"
          name="message"
          rows={4}
          placeholder="Describe the masterpiece or service you are seeking..."
          className="w-full bg-transparent border-b border-accent/20 py-3 focus:outline-none focus:border-accent transition-colors placeholder:text-primary/10 italic resize-none"
        ></textarea>
      </div>


      <button
        disabled={status === "submitting"}
        className="w-full bg-primary text-white py-6 font-bold uppercase tracking-[0.3em] text-[11px] hover:bg-accent hover:text-white transition-all shadow-premium disabled:opacity-50 flex items-center justify-center gap-4"
      >
        {status === "submitting" ? "Sending to Studio..." : (
          <>
            Send Inquiry <Send size={16} />
          </>
        )}
      </button>
    </form>
  );
}
