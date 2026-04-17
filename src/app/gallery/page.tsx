import type { Metadata } from "next";
import ArtGallery from "@/components/ArtGallery";

export const metadata: Metadata = {
  title: "The Masterpiece Gallery",
  description: "Explore our curated collection of authentic Tanjore paintings. Each piece is handcrafted with 24K gold foil, Jaipur stones, and traditional pigments.",
  keywords: ["Tanjore gallery", "Thanjavur painting collection", "Gold foil art gallery", "Indian religious art", "Ganesha Tanjore painting", "Krishna Tanjore painting"],
};

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-heritage-cream text-primary overflow-x-hidden grain-bg">
      
      <div className="pt-32 md:pt-48 pb-20">
        <ArtGallery />
      </div>

    </main>
  );
}
