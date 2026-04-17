import { Metadata } from "next";
import HomeContent from "@/components/HomeContent";

export const metadata: Metadata = {
  title: "Master Tanjore Paintings | Authentic 24K Gold Foil Heritage Art",
  description: "Exquisite Tanjore paintings handcrafted with generational mastery. Discover our collection of sacred deities, royal heritage, and Vastu-compliant masterpieces.",
  keywords: ["Tanjore painting", "Thanjavur art", "24K gold foil", "Indian classical art", "Heritage paintings", "Vastu art"],
};

export default function Home() {
  return <HomeContent />;
}
