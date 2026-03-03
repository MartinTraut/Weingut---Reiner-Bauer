"use client";

import Image from "next/image";
import { ScrollReveal, StaggerContainer, StaggerItem } from "./scroll-reveal";

const vineyardSites = [
  {
    name: "Talheimer Schlossberg",
    description:
      "Unsere Hauptlage am Schlossberg — geprägt von Keuperböden, die den Weinen Mineralität und Tiefe verleihen.",
  },
  {
    name: "Heilbronner Stiftsberg",
    description:
      "Historische Weinlage mit hervorragender Südausrichtung — ideale Bedingungen für aromareiche Trauben.",
  },
];

const soilTypes = [
  {
    name: "Keuper",
    effect: "Mineralität & Erdigkeit",
    description: "Fördert kraftvolle Rotweine mit mineralischem Charakter",
  },
  {
    name: "Löss",
    effect: "Fruchtigkeit",
    description: "Ermöglicht aromatische, fruchtbetonte Weine",
  },
  {
    name: "Kalkstein",
    effect: "Eleganz & Finesse",
    description: "Verleiht den Weinen eine feine Struktur und Eleganz",
  },
  {
    name: "Sandstein",
    effect: "Leichtigkeit",
    description: "Bringt Frische und helle Frucht in die Weine",
  },
];

export default function Vineyard() {
  return (
    <section id="region" className="relative bg-gradient-dark overflow-hidden">
      {/* Full-width Weingut building image */}
      <div className="relative h-[40vh] min-h-[300px]">
        <Image
          src="/images/old-visual.jpg"
          alt="Weingut Rainer Bauer — Gebäude mit Weinbergen in Talheim"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(180deg, rgba(12, 10, 9, 0.3) 0%, rgba(12, 10, 9, 0.15) 40%, rgba(12, 10, 9, 0.85) 100%)
            `,
          }}
        />
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
          <p className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.4em] uppercase text-gold/50 mb-2">
            Unser Weingut in
          </p>
          <p className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl text-cream/90">
            Talheim am Neckar
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="section-padding">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <ScrollReveal className="text-center mb-20 md:mb-28">
            <p className="font-[family-name:var(--font-inter)] text-[11px] tracking-[0.4em] uppercase text-gold/60 mb-6">
              Unsere Region
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl text-cream tracking-wide">
              Württemberg &mdash;{" "}
              <span className="italic text-gold/80">unser Terroir</span>
            </h2>
            <div className="gold-line mx-auto mt-8" />
          </ScrollReveal>

          {/* Region Overview */}
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start mb-20 md:mb-28">
            {/* Left: Region text */}
            <ScrollReveal>
              <p className="font-[family-name:var(--font-cormorant)] text-xl md:text-2xl text-cream/70 leading-relaxed mb-8">
                Das Weingut liegt in Talheim am Neckar, direkt an der
                Württemberger Weinstraße. Die Region Württemberg ist Deutschlands
                viertgrößtes Weinanbaugebiet mit 11.500 Hektar Rebfläche —
                71 Prozent davon bestockt mit roten Rebsorten.
              </p>
              <p className="font-[family-name:var(--font-cormorant)] text-lg text-cream/50 leading-relaxed mb-8">
                Die Württemberger Weinstraße erstreckt sich von den Tälern
                von Kocher, Jagst und Tauber entlang des Neckartals über
                Heilbronn und Stuttgart bis nach Tübingen — eine der
                schönsten Weinlandschaften Deutschlands.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gold/10">
                <div>
                  <p className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl text-gold">
                    11.500
                  </p>
                  <p className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.2em] uppercase text-cream/30 mt-1">
                    Hektar Rebfläche
                  </p>
                </div>
                <div>
                  <p className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl text-gold">
                    71%
                  </p>
                  <p className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.2em] uppercase text-cream/30 mt-1">
                    Rotweinanteil
                  </p>
                </div>
                <div>
                  <p className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl text-gold">
                    №4
                  </p>
                  <p className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.2em] uppercase text-cream/30 mt-1">
                    Deutschlands Regionen
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Right: Grape images collage */}
            <ScrollReveal direction="right">
              <div className="grid grid-cols-2 gap-3">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src="/images/old-traub11.jpg"
                    alt="Blaue Trauben am Rebstock — Rotweintrauben aus Talheim"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-warmblack/50 to-transparent" />
                  <p className="absolute bottom-3 left-3 font-[family-name:var(--font-inter)] text-[9px] tracking-[0.2em] uppercase text-cream/60">
                    Rotwein
                  </p>
                </div>
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src="/images/old-traube1.jpg"
                    alt="Weiße Trauben — Weißweintrauben im Sonnenlicht"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-warmblack/50 to-transparent" />
                  <p className="absolute bottom-3 left-3 font-[family-name:var(--font-inter)] text-[9px] tracking-[0.2em] uppercase text-cream/60">
                    Weißwein
                  </p>
                </div>
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src="/images/old-traub16.jpg"
                    alt="Weiße Trauben im Sonnenlicht kurz vor der Lese"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-warmblack/50 to-transparent" />
                  <p className="absolute bottom-3 left-3 font-[family-name:var(--font-inter)] text-[9px] tracking-[0.2em] uppercase text-cream/60">
                    Sonnenlicht
                  </p>
                </div>
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src="/images/old-traub12.jpg"
                    alt="Rosé-Trauben am Rebstock im Weinberg"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-warmblack/50 to-transparent" />
                  <p className="absolute bottom-3 left-3 font-[family-name:var(--font-inter)] text-[9px] tracking-[0.2em] uppercase text-cream/60">
                    Rosé
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Vineyard Sites */}
          <ScrollReveal className="mb-20">
            <h3 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl text-cream text-center mb-12">
              Unsere Weinlagen
            </h3>
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              {vineyardSites.map((site, index) => (
                <ScrollReveal key={site.name} delay={index * 0.15}>
                  <div className="group p-8 md:p-12 border border-gold/10 hover:border-gold/25 transition-all duration-700 bg-warmblack/20">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-2 h-2 bg-gold/40 rotate-45" />
                      <h4 className="font-[family-name:var(--font-playfair)] text-xl md:text-2xl text-cream tracking-wide">
                        {site.name}
                      </h4>
                    </div>
                    <p className="font-[family-name:var(--font-cormorant)] text-lg text-cream/50 leading-relaxed">
                      {site.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>

          {/* Soil Types */}
          <ScrollReveal>
            <h3 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl text-cream text-center mb-4">
              Das Terroir
            </h3>
            <p className="font-[family-name:var(--font-cormorant)] text-lg text-cream/40 text-center mb-12 italic">
              Vier Bodenarten prägen den Charakter unserer Weine
            </p>
            <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {soilTypes.map((soil) => (
                <StaggerItem key={soil.name}>
                  <div className="text-center p-6 md:p-8 border border-gold/5 hover:border-gold/15 transition-all duration-500 bg-warmblack/10">
                    <p className="font-[family-name:var(--font-playfair)] text-xl text-cream mb-1">
                      {soil.name}
                    </p>
                    <p className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.2em] uppercase text-gold/50 mb-4">
                      {soil.effect}
                    </p>
                    <p className="font-[family-name:var(--font-cormorant)] text-sm text-cream/35 leading-relaxed">
                      {soil.description}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
