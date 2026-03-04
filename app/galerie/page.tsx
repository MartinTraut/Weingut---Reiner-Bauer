import type { Metadata } from "next";
import { PageHeader } from "@/components/page-transition";
import Gallery from "@/components/gallery";

export const metadata: Metadata = {
  title: "Galerie | Weingut Rainer Bauer",
  description: "Impressionen aus dem Weingut Rainer Bauer — Weinberge, Keller, Familie und Trauben.",
};

export default function GaleriePage() {
  return (
    <>
      <PageHeader
        title="Momente aus dem"
        titleAccent="Weingut"
        subtitle="Impressionen"
        backgroundImage="/images/weinberg-sonnenuntergang.jpg"
        backgroundAlt="Weinberge im goldenen Abendlicht"
      />
      <Gallery />
    </>
  );
}
