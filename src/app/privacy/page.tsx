import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Tanjore Creation",
  description: "How we handle your data and ensure secure transactions for our art collectors.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-heritage-cream pt-48 pb-32">
      <div className="max-w-3xl mx-auto px-6">
        <span className="text-accent font-bold tracking-[0.4em] uppercase text-[10px] mb-6 block">Legal Governance</span>
        <h1 className="text-5xl md:text-7xl font-serif italic mb-16 text-primary">Privacy Policy</h1>
        
        <div className="prose prose-primary prose-lg italic font-light text-heritage-dark/80 space-y-12">
          <section>
            <h2 className="text-2xl font-serif text-primary not-italic mb-6 border-b border-accent/20 pb-4">Data Collection</h2>
            <p>
              Tanjore Creation collects minimal personal information necessary for processing commissions and shipping logistics. This includes names, addresses, and contact details provided during inquiries.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-primary not-italic mb-6 border-b border-accent/20 pb-4">Security of Transactions</h2>
            <p>
              We do not store financial information. All payments for our masterpieces are handled through secure bank transfers or verified international payment gateways.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-primary not-italic mb-6 border-b border-accent/20 pb-4">Collector Confidentiality</h2>
            <p>
              The identity of our collectors and the locations of commissioned palatial works are held in strict confidence. We never share your data with third-party marketing entities.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-primary not-italic mb-6 border-b border-accent/20 pb-4">Contact</h2>
            <p>
              For any privacy-related inquiries, please contact our registry at <a href="mailto:tanjorecreation01@gmail.com" className="text-accent underline">tanjorecreation01@gmail.com</a>.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
