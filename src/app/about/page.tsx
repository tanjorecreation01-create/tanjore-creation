import type { Metadata } from "next";
import AboutContent from "@/components/AboutContent";

export const metadata: Metadata = {
  title: "Our Heritage & Craftsmanship",
  description: "Learn about the 500-year history of Tanjore art and our commitment to preserving it since 1985. Discover our use of 24K gold foil and traditional techniques.",
  keywords: ["Tanjore art history", "About Tanjore Creation", "Traditional gold painting techniques", "Artisan story Thanjavur", "Handmade Indian heritage art"],
};

export default function AboutPage() {
  return <AboutContent />;
}
