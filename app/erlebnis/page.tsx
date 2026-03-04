import type { Metadata } from "next";
import { PageHeader } from "@/components/page-transition";
import Experience from "@/components/experience";

export const metadata: Metadata = {
  title: "Erlebnis | Weingut Rainer Bauer",
  description: "Verkauf ab Hof, Weinproben und Veranstaltungen — besuchen Sie unser Weingut in Talheim an der Württemberger Weinstraße.",
};

export default function ErlebnisPage() {
  return (
    <>
      <PageHeader
        title="Das"
        titleAccent="Erlebnis"
        subtitle="Besuchen Sie uns"
        backgroundImage="/images/weinglaeser-sonnenuntergang.jpg"
        backgroundAlt="Weinverkostung bei Sonnenuntergang"
      />
      <Experience />
    </>
  );
}
