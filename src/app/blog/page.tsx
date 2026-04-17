import { Metadata } from "next";
import BlogContent from "@/components/BlogContent";

export const metadata: Metadata = {
  title: "Whispers of Gold | Tanjore Art Journal & Collector Guide",
  description: "Explore the sacred stories, artisanal techniques, and heritage insights of Thanjavur art in our official journal.",
};

export default function BlogPage() {
  return <BlogContent />;
}
