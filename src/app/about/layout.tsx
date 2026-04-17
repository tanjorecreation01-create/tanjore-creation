import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Heritage | The Legacy of Tanjore Creation",
  description: "Learn about the 500-year-old tradition of Thanjavur paintings and our commitment to preserving this sacred art form using 24K gold and authentic materials.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
