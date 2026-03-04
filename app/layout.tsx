import type { Metadata } from "next";
import { Playfair_Display, Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Weingut Rainer Bauer | Familienweingut in Talheim, Württemberg",
  description:
    "Edle, sortentypische Weine aus Talheim an der Württemberger Weinstraße. Seit 1989 steht das Familienweingut Rainer Bauer für Handwerk, Tradition und Leidenschaft.",
  keywords: [
    "Weingut",
    "Rainer Bauer",
    "Talheim",
    "Württemberg",
    "Wein",
    "Rotwein",
    "Weißwein",
    "Trollinger",
    "Lemberger",
    "Riesling",
    "Familienweingut",
    "Württemberger Weinstraße",
  ],
  openGraph: {
    title: "Weingut Rainer Bauer | Familienweingut in Talheim",
    description:
      "Edle, sortentypische Weine aus sorgfältiger Handarbeit. Besuchen Sie unser Familienweingut an der Württemberger Weinstraße.",
    type: "website",
    locale: "de_DE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${cormorant.variable} ${inter.variable} antialiased`}
      >
        <div className="grain" />
        <Navigation />
        <main className="relative">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
