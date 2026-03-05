import type { Metadata } from "next";
import { PageHeader } from "@/components/page-transition";
import Contact from "@/components/contact";

export const metadata: Metadata = {
  title: "Kontakt | Weingut Rainer Bauer",
  description: "Kontaktieren Sie das Weingut Rainer Bauer in Talheim. Adresse, Telefon, Oeffnungszeiten und Kontaktformular.",
};

export default function KontaktPage() {
  return (
    <>
      <PageHeader
        title="Wir freuen uns"
        titleAccent="auf Sie"
        subtitle="Kontakt"
        backgroundImage="/images/trauben-weiss-nah.jpg"
        backgroundAlt="Weisse Trauben im Morgenlicht an der Rebe"
      />
      <Contact />
    </>
  );
}
