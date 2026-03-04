import type { Metadata } from "next";
import { PageHeader } from "@/components/page-transition";
import Wines from "@/components/wines";

export const metadata: Metadata = {
  title: "Unsere Weine | Weingut Rainer Bauer",
  description: "Rotweine, Weißweine, Sekt und Destillate aus Talheim. Entdecken Sie Trollinger, Lemberger, Riesling und viele weitere Weine aus unserem Sortiment.",
};

export default function WeinePage() {
  return (
    <>
      <PageHeader
        title="Unsere"
        titleAccent="Weine"
        subtitle="Weinsortiment"
        backgroundImage="/images/weinregal-dunkel.jpg"
        backgroundAlt="Edles Weinregal mit erlesener Flaschensammlung"
      />
      <Wines />
    </>
  );
}
