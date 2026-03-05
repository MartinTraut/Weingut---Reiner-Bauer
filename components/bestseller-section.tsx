"use client";

import { getBestsellers, winePackage } from "@/lib/wine-data";
import WineCard from "./ui/wine-card";
import Link from "next/link";
import { ScrollReveal, LuxuryReveal } from "./scroll-reveal";

export default function BestsellerSection() {
  const bestsellers = getBestsellers();

  return (
    <section className="relative overflow-hidden bg-gradient-dark">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] max-w-3xl h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="section-padding">
        <div className="max-w-7xl mx-auto">
          <LuxuryReveal className="text-center mb-12 md:mb-20">
            <p className="font-[family-name:var(--font-inter)] text-[11px] tracking-[0.4em] uppercase text-gold/80 mb-6">
              Empfehlungen
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-cream tracking-wide">
              Unsere{" "}
              <span className="italic text-gold/90">Bestseller</span>
            </h2>
            <p className="font-[family-name:var(--font-cormorant)] text-lg sm:text-xl text-cream/65 max-w-2xl mx-auto mt-6">
              Die beliebtesten Weine unseres Sortiments - handverlesen
              und von unseren Kunden am meisten geschaetzt.
            </p>
            <div className="gold-line mx-auto mt-8" />
          </LuxuryReveal>

          {/* Bestseller Grid — centered */}
          <ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {bestsellers.map((wine, index) => (
                <WineCard
                  key={wine.id}
                  wine={wine}
                  variant="bestseller"
                  index={index}
                />
              ))}
            </div>
          </ScrollReveal>

          {/* Wine Package */}
          <ScrollReveal className="mt-12 md:mt-20">
            <div className="relative border border-gold/15 p-6 sm:p-8 md:p-14 text-center bg-warmblack/30 max-w-4xl mx-auto">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-warmblack px-6">
                <span className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.4em] uppercase text-gold/70">
                  Empfehlung
                </span>
              </div>
              <h3 className="font-[family-name:var(--font-playfair)] text-xl sm:text-2xl md:text-3xl text-cream mb-4">
                &bdquo;{winePackage.name}&ldquo;
              </h3>
              <p className="font-[family-name:var(--font-cormorant)] text-base sm:text-lg text-cream/65 max-w-xl mx-auto mb-6">
                {winePackage.description}
              </p>
              <p className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl text-gold mb-2">
                {winePackage.price}
              </p>
              <p className="font-[family-name:var(--font-inter)] text-[11px] text-cream/45 tracking-wide">
                {winePackage.details}
              </p>
              <Link
                href="/kontakt"
                className="inline-block mt-6 sm:mt-8 font-[family-name:var(--font-inter)] text-[11px] sm:text-[12px] tracking-[0.2em] uppercase text-warmblack bg-gold hover:bg-gold-light px-8 sm:px-10 py-3 sm:py-3.5 transition-all duration-500 hover:shadow-[0_0_30px_rgba(201,168,76,0.2)]"
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
