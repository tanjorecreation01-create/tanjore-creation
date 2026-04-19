import { Metadata } from "next";
import HomeContent from "@/components/HomeContent";

export const metadata: Metadata = {
  title: "Tanjore Paintings Online | Authentic 24K Gold Foil Heritage Art",
  description: "Exquisite Tanjore paintings handcrafted with generational mastery. Discover our collection of sacred deities, royal heritage, and Vastu-compliant masterpieces at Tanjore Creation. Buy authentic art online.",
  keywords: ["Buy Tanjore painting online", "Thanjavur art", "24K gold foil", "Indian classical art", "Heritage paintings", "Vastu art", "Tanjore Creation"],
};

export default function Home() {
  return <HomeContent />;
}
