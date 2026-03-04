import type { Metadata } from "next";
import { PageHeader } from "@/components/page-transition";
import Vineyard from "@/components/vineyard";

export const metadata: Metadata = {
  title: "Region & Terroir | Weingut Rainer Bauer",
  description: "Talheim am Neckar, direkt an der Württemberger Weinstraße. Erfahren Sie mehr über unsere Weinlagen, Böden und das Terroir.",
};

export default function RegionPage() {
  return (
    <>
      <PageHeader
        title="Württemberg —"
        titleAccent="unser Terroir"
        subtitle="Unsere Region"
        backgroundImage="/images/weinberg-panorama.jpg"
        backgroundAlt="Herbstliches Weinberg-Panorama in Württemberg"
      />
      <Vineyard />
    </>
  );
}
