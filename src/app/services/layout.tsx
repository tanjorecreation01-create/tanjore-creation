import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Artisanal Services | Custom Tanjore Commissions & Restoration",
  description: "Explore our range of heritage services including bespoke Tanjore painting commissions, scientific restoration of antique pieces, and museum-grade global shipping.",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
