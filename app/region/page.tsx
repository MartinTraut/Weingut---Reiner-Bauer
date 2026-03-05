import type { Metadata } from "next";
import { PageHeader } from "@/components/page-transition";
import Vineyard from "@/components/vineyard";

export const metadata: Metadata = {
  title: "Region & Terroir | Weingut Rainer Bauer",
  description: "Talheim am Neckar, direkt an der Wuerttemberger Weinstrasse. Erfahren Sie mehr ueber unsere Weinlagen, Boeden und das Terroir.",
};

export default function RegionPage() {
  return (
    <>
      <PageHeader
        title="Wuerttemberg -"
        titleAccent="unser Terroir"
        subtitle="Region"
        backgroundImage="/images/weinberg-panorama.jpg"
        backgroundAlt="Herbstliches Weinberg-Panorama in Wuerttemberg"
      />
      <Vineyard />
    </>
  );
}
