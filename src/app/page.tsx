import { Metadata } from "next";
import HomeContent from "@/components/HomeContent";

export const metadata: Metadata = {
  title: "Buy Authentic Tanjore Paintings Online | 24K Gold Foil | Tanjore Creation",
  description: "Shop handcrafted Thanjavur paintings with certified 22K gold foil from Kolkata. Custom commissions, international shipping to 40+ countries. Est. 1984.",
  keywords: ["Buy Tanjore painting online", "Thanjavur art", "24K gold foil", "Indian classical art", "Heritage paintings", "Vastu art", "Tanjore Creation"],
  openGraph: {
    title: "Buy Authentic Tanjore Paintings Online | 24K Gold Foil | Tanjore Creation",
    description: "Shop handcrafted Thanjavur paintings with certified 22K gold foil from Kolkata. Custom commissions, international shipping to 40+ countries. Est. 1984.",
    url: "https://tanjorecreation.com",
    siteName: "Tanjore Creation",
    images: [{ url: "/images/tanjore_ganesha.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Buy Authentic Tanjore Paintings Online | 24K Gold Foil | Tanjore Creation",
    description: "Shop handcrafted Thanjavur paintings with certified 22K gold foil from Kolkata. Custom commissions, international shipping to 40+ countries. Est. 1984.",
    images: ["/images/tanjore_ganesha.png"],
  },
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return <HomeContent />;
}
