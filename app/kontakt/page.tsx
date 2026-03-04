import type { Metadata } from "next";
import { PageHeader } from "@/components/page-transition";
import Contact from "@/components/contact";

export const metadata: Metadata = {
  title: "Kontakt | Weingut Rainer Bauer",
  description: "Kontaktieren Sie das Weingut Rainer Bauer in Talheim. Adresse, Telefon, Öffnungszeiten und Kontaktformular.",
};

export default function KontaktPage() {
  return (
    <>
      <PageHeader
        title="Besuchen Sie"
        titleAccent="uns"
        subtitle="Kontakt"
        backgroundImage="/images/weingut-terrasse.jpg"
        backgroundAlt="Weingut-Terrasse — Wein und Genuss"
      />
      <Contact />
    </>
  );
}
