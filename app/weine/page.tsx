import type { Metadata } from "next";
import { Suspense } from "react";
import { PageHeader } from "@/components/page-transition";
import WinesClient from "./wines-client";

export const metadata: Metadata = {
  title: "Weine | Weingut Rainer Bauer",
  description:
    "Rotweine, Weissweine, Sekt und Destillate aus Talheim. Entdecken Sie Trollinger, Lemberger, Riesling und viele weitere Weine.",
};

export default function WeinePage() {
  return (
    <>
      <PageHeader
        title="Unsere"
        titleAccent="Weine"
        subtitle="Sortiment"
        backgroundImage="/images/weinregal-dunkel.jpg"
        backgroundAlt="Edles Weinregal mit erlesener Flaschensammlung"
      />
      <Suspense>
        <WinesClient />
      </Suspense>
    </>
  );
}
