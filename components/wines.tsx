"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal, LuxuryReveal } from "./scroll-reveal";

type WineCategory = "rot" | "weiss" | "sekt" | "destillate";

interface Wine {
  name: string;
  grape: string;
  style: string;
  volume: string;
  description: string;
}

const categories: { key: WineCategory; label: string; subtitle: string }[] = [
  { key: "rot", label: "Rotweine", subtitle: "Kraftvoll & Charakterstark" },
  { key: "weiss", label: "Weißweine", subtitle: "Frisch & Elegant" },
  { key: "sekt", label: "Sekt", subtitle: "Prickelnd & Festlich" },
  { key: "destillate", label: "Destillate & Liköre", subtitle: "Edel & Intensiv" },
];

const wines: Record<WineCategory, Wine[]> = {
  rot: [
    {
      name: "Trollinger",
      grape: "Trollinger",
      style: "QbA · trocken, halbtrocken & lieblich",
      volume: "0,75 L & 1,0 L",
      description:
        "Der württembergische Klassiker — fruchtig, mild und vielseitig. Perfekt zu regionaler Küche.",
    },
    {
      name: "Trollinger-Lemberger",
      grape: "Trollinger · Lemberger",
      style: "QbA · halbtrocken",
      volume: "0,75 L",
      description:
        "Eine harmonische Cuvée zweier württembergischer Rebsorten, vereint Fruchtigkeit mit Tiefe.",
    },
    {
      name: "Lemberger",
      grape: "Lemberger",
      style: "QbA · trocken",
      volume: "0,75 L",
      description:
        "Kraftvoll und ausdrucksstark mit dunklen Beerennoten und feiner Würze. Ein Wein mit Charakter.",
    },
    {
      name: "Spätburgunder",
      grape: "Spätburgunder",
      style: "Vollmundig",
      volume: "0,75 L",
      description:
        "Samtiger Rotwein mit eleganter Struktur — Noten von Kirsche und feiner Reife.",
    },
    {
      name: "Schwarzriesling",
      grape: "Schwarzriesling",
      style: "Fruchtig",
      volume: "0,75 L",
      description:
        "Fruchtbetonter, weicher Rotwein — ideal für den unkomplizierten Weingenuss.",
    },
    {
      name: "Samtrot",
      grape: "Samtrot",
      style: "Lieblich",
      volume: "0,75 L",
      description:
        "Sanft und samtig, wie der Name verspricht. Eine württembergische Spezialität.",
    },
    {
      name: "Dornfelder",
      grape: "Dornfelder",
      style: "Tiefrot & Fruchtig",
      volume: "0,75 L",
      description:
        "Intensiv in Farbe und Geschmack — vollmundig mit samtigen Tanninen.",
    },
    {
      name: "Cabernet Mitos",
      grape: "Cabernet Mitos",
      style: "Kräftig & Komplex",
      volume: "0,75 L",
      description:
        "Kräftiger, dunkelroter Wein mit komplexer Aromatik und langem Nachhall.",
    },
  ],
  weiss: [
    {
      name: "Riesling",
      grape: "Riesling",
      style: "QbA · halbtrocken",
      volume: "0,75 L & 1,0 L",
      description:
        "Der König der deutschen Rebsorten — mineralisch, lebendig und mit feiner Frucht.",
    },
    {
      name: "Grauburgunder",
      grape: "Grauburgunder",
      style: "QbA · trocken",
      volume: "0,75 L",
      description:
        "Elegant und vielschichtig mit Nuancen von Birne und Mandel. Perfekt als Speisebegleiter.",
    },
    {
      name: "Weißburgunder",
      grape: "Weißburgunder",
      style: "Fein & Cremig",
      volume: "0,75 L",
      description:
        "Dezente Frucht, feine Cremigkeit — ein Weißwein für anspruchsvolle Genießer.",
    },
    {
      name: "Muskateller",
      grape: "Muskateller",
      style: "Aromatisch",
      volume: "0,75 L",
      description:
        "Ausdrucksstarkes Bouquet mit intensivem Muskatduft und blumiger Eleganz.",
    },
    {
      name: "Kerner",
      grape: "Kerner",
      style: "Fruchtig & Frisch",
      volume: "0,75 L",
      description:
        "Frischer, unkomplizierter Weißwein mit feiner Muskatnote und lebendiger Säure.",
    },
  ],
  sekt: [
    {
      name: "Riesling Sekt",
      grape: "Riesling",
      style: "Brut",
      volume: "0,75 L",
      description:
        "Feinperlig und elegant — Riesling in seiner festlichsten Form. Ideal zum Anstoßen.",
    },
    {
      name: "Trollinger Rosé Sekt",
      grape: "Trollinger",
      style: "Trocken",
      volume: "0,75 L",
      description:
        "Zartrosa Schaumwein mit beeriger Frische — ein Genuss in jedem Moment.",
    },
    {
      name: "Trollinger Sekt",
      grape: "Trollinger",
      style: "Trocken",
      volume: "0,75 L",
      description:
        "Ein Sekt mit württembergischem Charakter — fruchtig, spritzig und einzigartig.",
    },
  ],
  destillate: [
    {
      name: "Weinbrand",
      grape: "Traubendestillat",
      style: "10 Jahre Holzfassreifung",
      volume: "0,5 L",
      description:
        "Zehn Jahre im Holzfass gereift — tiefgolden, weich und mit vielschichtigen Aromen von Vanille und Trockenfrucht.",
    },
    {
      name: "Johannisbeerlikör",
      grape: "Schwarze Johannisbeere",
      style: "Fruchtlikör",
      volume: "0,5 L",
      description:
        "Intensiv fruchtiger Likör aus sonnengereiften schwarzen Johannisbeeren.",
    },
    {
      name: "Weinbergpfirsichlikör",
      grape: "Weinbergpfirsich",
      style: "Fruchtlikör",
      volume: "0,5 L",
      description:
        "Der Geschmack des Weinbergs — aromatischer Pfirsichlikör aus eigener Ernte.",
    },
    {
      name: "Kräuterlikör",
      grape: "Kräuter",
      style: "Kräuterlikör",
      volume: "0,5 L",
      description:
        "Hauseigene Kräuterkomposition — würzig, herb und wunderbar bekömmlich.",
    },
  ],
};

export default function Wines() {
  const [activeCategory, setActiveCategory] = useState<WineCategory>("rot");
  const activeWines = wines[activeCategory];
  const activeCat = categories.find((c) => c.key === activeCategory)!;

  return (
    <section className="relative overflow-hidden">
      {/* Wine tasting image banner */}
      <div className="relative h-[35vh] min-h-[250px]">
        <Image
          src="/images/weinregal-dunkel.jpg"
          alt="Edles Weinregal mit erlesener Flaschensammlung"
          fill
          className="object-cover image-sharp"
          sizes="100vw"

        />
        <div
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(180deg, rgba(12, 10, 9, 0.5) 0%, rgba(12, 10, 9, 0.2) 40%, rgba(12, 10, 9, 0.9) 100%)
            `,
          }}
        />
      </div>

      <div className="section-padding bg-gradient-wine">
      {/* Decorative */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] max-w-3xl h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <LuxuryReveal className="text-center mb-16 md:mb-24">
          <p className="font-[family-name:var(--font-inter)] text-[11px] tracking-[0.4em] uppercase text-gold/80 mb-6">
            Weinsortiment
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl text-cream tracking-wide">
            Unsere{" "}
            <span className="italic text-gold/90">Weine</span>
          </h2>
          <p className="font-[family-name:var(--font-cormorant)] text-lg md:text-xl text-cream/65 max-w-2xl mx-auto mt-6">
            Edle, sortentypische und genussreiche Charaktere — entstanden aus
            sorgfältiger, naturnaher Pflege der Reben und naturorientierter
            Verarbeitung der Trauben.
          </p>
          <div className="gold-line mx-auto mt-8" />
        </LuxuryReveal>

        {/* Category Tabs */}
        <ScrollReveal className="flex flex-wrap justify-center gap-2 md:gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`font-[family-name:var(--font-inter)] text-[11px] md:text-[12px] tracking-[0.2em] uppercase px-6 md:px-8 py-3 border transition-all duration-500 ${
                activeCategory === cat.key
                  ? "border-gold/60 text-gold bg-gold/5"
                  : "border-cream/15 text-cream/55 hover:border-cream/40 hover:text-cream/80"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </ScrollReveal>

        {/* Category subtitle */}
        <AnimatePresence mode="wait">
          <motion.p
            key={activeCat.key}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="font-[family-name:var(--font-cormorant)] text-xl md:text-2xl text-cream/55 italic text-center mb-12"
          >
            {activeCat.subtitle}
          </motion.p>
        </AnimatePresence>

        {/* Wine Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6"
          >
            {activeWines.map((wine, index) => (
              <motion.div
                key={wine.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                className="group relative bg-warmblack/50 border border-gold/8 hover:border-gold/25 transition-all duration-700 p-6 md:p-8 luxury-card"
              >
                {/* Wine color indicator */}
                <div
                  className={`w-8 h-px mb-6 transition-all duration-500 group-hover:w-12 ${
                    activeCategory === "rot"
                      ? "bg-wine"
                      : activeCategory === "weiss"
                      ? "bg-gold-light"
                      : activeCategory === "sekt"
                      ? "bg-rose-300/50"
                      : "bg-amber-700/50"
                  }`}
                />

                {/* Wine Name */}
                <h3 className="font-[family-name:var(--font-playfair)] text-xl md:text-2xl text-cream group-hover:text-gold transition-colors duration-500 mb-3">
                  {wine.name}
                </h3>

                {/* Grape & Style */}
                <p className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.2em] uppercase text-gold/60 mb-4">
                  {wine.style}
                </p>

                {/* Description */}
                <p className="font-[family-name:var(--font-cormorant)] text-base text-cream/65 leading-relaxed mb-4">
                  {wine.description}
                </p>

                {/* Volume */}
                <p className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.15em] text-cream/40 mt-auto">
                  {wine.volume}
                </p>

                {/* Hover accent */}
                <div className="absolute bottom-0 left-0 w-0 h-px bg-gold/40 transition-all duration-700 group-hover:w-full" />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Wine Package Highlight */}
        <ScrollReveal className="mt-20 md:mt-28">
          <div className="relative border border-gold/15 p-8 md:p-14 text-center bg-warmblack/30">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-warmblack px-6">
              <span className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.4em] uppercase text-gold/70">
                Empfehlung
              </span>
            </div>
            <h3 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl text-cream mb-4">
              &bdquo;Von jedem Etwas&ldquo;
            </h3>
            <p className="font-[family-name:var(--font-cormorant)] text-lg text-cream/65 max-w-xl mx-auto mb-6">
              Unser Weinpaket mit 6 ausgewählten Weinen — von Riesling über
              Grauburgunder bis Lemberger. Der perfekte Einstieg in die Vielfalt
              unseres Weinguts.
            </p>
            <p className="font-[family-name:var(--font-playfair)] text-3xl text-gold mb-2">
              29,00 €
            </p>
            <p className="font-[family-name:var(--font-inter)] text-[11px] text-cream/40 tracking-wide">
              6 Flaschen · 5 Liter · inkl. MwSt.
            </p>
            <Link
              href="/kontakt"
              className="inline-block mt-8 font-[family-name:var(--font-inter)] text-[12px] tracking-[0.2em] uppercase text-warmblack bg-gold hover:bg-gold-light px-10 py-3.5 transition-all duration-500 hover:shadow-[0_0_30px_rgba(197,164,126,0.2)]"
            >
              Jetzt anfragen
            </Link>
          </div>
        </ScrollReveal>
      </div>
      </div>
    </section>
  );
}
