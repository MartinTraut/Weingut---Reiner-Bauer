"use client";

import React from "react";
import Image from "next/image";
import { ScrollReveal, LuxuryReveal } from "./scroll-reveal";


const principles = [
  {
    title: "Naturnaher Weinbau",
    description:
      "Sorgfaeltige, naturnahe Pflege der Reben - im Einklang mit dem Rhythmus der Jahreszeiten und dem Respekt vor dem Terroir.",
    icon: "leaf",
  },
  {
    title: "Handarbeit im Weinberg",
    description:
      "Jede Rebe wird mit Sorgfalt und Hingabe betreut. Qualitaet beginnt im Weinberg, nicht im Keller.",
    icon: "hand",
  },
  {
    title: "Traditionelle Kellerwirtschaft",
    description:
      "Reifung in Edelstahltanks und Barriquefaessern - fuer sortentypische Weine mit Charakter und Tiefe.",
    icon: "barrel",
  },
  {
    title: "Familientradition",
    description:
      "Seit ueber 35 Jahren fuehren wir unser Weingut als Familienbetrieb mit Leidenschaft und Hingabe.",
    icon: "family",
  },
];

function PrincipleIcon({ icon }: { icon: string }) {
  const iconMap: Record<string, React.ReactNode> = {
    leaf: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-8 h-8">
        <path d="M12 22c-4-4-8-7.5-8-12S6 2 12 2s8 5.5 8 8-4 8-8 12z" />
        <path d="M12 22V8" />
        <path d="M8 12l4-4 4 4" />
      </svg>
    ),
    hand: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-8 h-8">
        <path d="M18 11V6a2 2 0 0 0-4 0v1M14 10V4a2 2 0 0 0-4 0v6M10 10V5a2 2 0 0 0-4 0v9" />
        <path d="M18 11a2 2 0 0 1 4 0v3a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L8 16" />
      </svg>
    ),
    barrel: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-8 h-8">
        <ellipse cx="12" cy="5" rx="8" ry="3" />
        <path d="M4 5v14c0 1.66 3.58 3 8 3s8-1.34 8-3V5" />
        <path d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3" />
      </svg>
    ),
    family: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-8 h-8">
        <circle cx="12" cy="5" r="3" />
        <path d="M12 8v4" />
        <circle cx="6" cy="9" r="2.5" />
        <circle cx="18" cy="9" r="2.5" />
        <path d="M6 11.5v2.5c0 1 .5 2 2 2h8c1.5 0 2-1 2-2v-2.5" />
        <path d="M8 22v-6M16 22v-6M12 12v10" />
      </svg>
    ),
  };
  return <div className="text-gold/70">{iconMap[icon]}</div>;
}

export default function Philosophy() {
  return (
    <section className="relative overflow-hidden">
      {/* Full-width image banner with quote */}
      <div className="relative h-[50vh] min-h-[400px]">
        <Image
          src="/images/keller-barrique.jpg"
          alt="Barriquefaesser im historischen Gewoelbekeller"
          fill
          className="object-cover object-center image-sharp"
          sizes="100vw"
          loading="lazy"
        />
        {/* Dark overlay for text readability */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.35) 40%, rgba(0,0,0,0.65) 100%)",
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <blockquote className="max-w-3xl text-center">
            <span className="font-[family-name:var(--font-playfair)] text-5xl sm:text-6xl md:text-7xl text-gold/30">&bdquo;</span>
            <p className="font-[family-name:var(--font-cormorant)] text-lg sm:text-xl md:text-2xl lg:text-3xl text-white italic leading-relaxed -mt-6 text-shadow-luxury">
              Die Weine vom Weingut Rainer Bauer sind edle, sortentypische und
              genussreiche Charaktere - entstanden aus sorgfaeltiger, naturnaher
              Pflege der Reben und naturorientierter Verarbeitung der Trauben.
            </p>
          </blockquote>
        </div>
      </div>

      {/* Content section */}
      <div className="section-padding bg-gradient-warm">
        <div className="max-w-7xl mx-auto">
          <LuxuryReveal className="text-center mb-16 md:mb-24">
            <p className="font-[family-name:var(--font-inter)] text-[11px] tracking-[0.4em] uppercase text-gold/80 mb-6">
              Unsere Werte
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-cream tracking-wide">
              Handwerk &{" "}
              <span className="italic text-gold/90">Leidenschaft</span>
            </h2>
            <p className="font-[family-name:var(--font-cormorant)] text-lg sm:text-xl text-cream/65 max-w-2xl mx-auto mt-6">
              Vier Grundsaetze leiten uns bei allem, was wir tun - im Weinberg wie im Keller.
            </p>
            <div className="gold-line mx-auto mt-8" />
          </LuxuryReveal>

          {/* Principles Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {principles.map((principle, index) => (
              <ScrollReveal key={principle.title} delay={index * 0.12}>
                <div className="group text-center p-8 md:p-10 border border-gold/8 hover:border-gold/25 transition-all duration-700 bg-warmblack/20 hover:bg-warmblack/40 luxury-card h-full">
                  <div className="flex justify-center mb-6">
                    <PrincipleIcon icon={principle.icon} />
                  </div>
                  <h3 className="font-[family-name:var(--font-playfair)] text-lg md:text-xl text-cream mb-4 tracking-wide">
                    {principle.title}
                  </h3>
                  <p className="font-[family-name:var(--font-cormorant)] text-base text-cream/65 leading-relaxed">
                    {principle.description}
                  </p>
                  <div className="w-0 h-px bg-gold/30 mx-auto mt-6 transition-all duration-700 group-hover:w-12" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
