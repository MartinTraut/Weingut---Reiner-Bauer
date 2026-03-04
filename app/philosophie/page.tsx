import type { Metadata } from "next";
import { PageHeader } from "@/components/page-transition";
import Philosophy from "@/components/philosophy";

export const metadata: Metadata = {
  title: "Philosophie | Weingut Rainer Bauer",
  description: "Naturnaher Weinbau, Handarbeit im Weinberg und traditionelle Kellerwirtschaft — die Philosophie hinter unseren Weinen.",
};

export default function PhilosophiePage() {
  return (
    <>
      <PageHeader
        title="Handwerk &"
        titleAccent="Leidenschaft"
        subtitle="Unsere Philosophie"
        backgroundImage="/images/keller-barrique.jpg"
        backgroundAlt="Barriquefässer im historischen Gewölbekeller"
      />
      <Philosophy />
    </>
  );
}
