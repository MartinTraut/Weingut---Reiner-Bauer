import type { Metadata } from "next";
import { PageHeader } from "@/components/page-transition";
import About from "@/components/about";

export const metadata: Metadata = {
  title: "Das Weingut | Weingut Rainer Bauer",
  description: "Seit 1989 führen wir unser Familienweingut in Talheim mit Leidenschaft. Erfahren Sie die Geschichte von Rainer, Bärbel, Martin und Tanja Bauer.",
};

export default function WeingutPage() {
  return (
    <>
      <PageHeader
        title="Das"
        titleAccent="Weingut"
        subtitle="Unsere Geschichte"
        backgroundImage="/images/weingut-terrasse.jpg"
        backgroundAlt="Weingut-Terrasse bei Sonnenuntergang"
      />
      <About />
    </>
  );
}
