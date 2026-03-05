"use client";

import Image from "next/image";
import { ScrollReveal, StaggerContainer, StaggerItem, ImageReveal, LuxuryReveal, CountUp } from "./scroll-reveal";


const vineyardSites = [
  {
    name: "Talheimer Schlossberg",
    description:
      "Unsere Hauptlage am Schlossberg - gepraegt von Keuperboeden, die den Weinen Mineralitaet und Tiefe verleihen.",
  },
  {
    name: "Heilbronner Stiftsberg",
    description:
      "Historische Weinlage mit hervorragender Suedausrichtung - ideale Bedingungen fuer aromareiche Trauben.",
  },
];

const soilTypes = [
  {
    name: "Keuper",
    effect: "Mineralitaet & Erdigkeit",
    description: "Foerdert kraftvolle Rotweine mit mineralischem Charakter",
  },
  {
    name: "Loess",
    effect: "Fruchtigkeit",
    description: "Ermoeglicht aromatische, fruchtbetonte Weine",
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
    <section className="relative bg-gradient-dark overflow-hidden">
      {/* Full-width vineyard panorama */}
      <div className="relative h-[40vh] min-h-[300px]">
        <Image
          src="/images/weinberg-panorama.jpg"
          alt="Weinberge in Wuerttemberg - Herbstliches Panorama"
          fill
          className="object-cover object-center image-sharp"
          sizes="100vw"
          quality={90}
          loading="lazy"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.2) 40%, rgba(0,0,0,0.7) 100%)",
          }}
        />
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-center z-[4]">
          <p className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.4em] uppercase text-gold/70 mb-2">
            Unser Weingut in
          </p>
          <p className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl md:text-4xl text-white text-shadow-luxury">
            Talheim am Neckar
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="section-padding">
        <div className="max-w-7xl mx-auto">
          <LuxuryReveal className="text-center mb-16 md:mb-24">
            <p className="font-[family-name:var(--font-inter)] text-[11px] tracking-[0.4em] uppercase text-gold/80 mb-6">
              Das Terroir
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-cream tracking-wide">
              Wuerttemberg &mdash;{" "}
              <span className="italic text-gold/90">unser Terroir</span>
            </h2>
            <p className="font-[family-name:var(--font-cormorant)] text-lg sm:text-xl text-cream/65 max-w-2xl mx-auto mt-6">
              Deutschlands viertgroesstes Weinanbaugebiet praegte seit Jahrhunderten
              den Charakter unserer Weine.
            </p>
            <div className="gold-line mx-auto mt-8" />
          </LuxuryReveal>

          {/* Region Overview */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-16 md:mb-24">
            <ScrollReveal>
              <p className="font-[family-name:var(--font-cormorant)] text-xl md:text-2xl text-cream/80 leading-relaxed mb-8">
                Das Weingut liegt in Talheim am Neckar, direkt an der
                Wuerttemberger Weinstrasse. Die Region Wuerttemberg ist Deutschlands
                viertgroesstes Weinanbaugebiet mit 11.500 Hektar Rebflaeche -
                71 Prozent davon bestockt mit roten Rebsorten.
              </p>
              <p className="font-[family-name:var(--font-cormorant)] text-lg text-cream/65 leading-relaxed mb-8">
                Die Wuerttemberger Weinstrasse erstreckt sich von den Taelern
                von Kocher, Jagst und Tauber entlang des Neckartals ueber
                Heilbronn und Stuttgart bis nach Tuebingen - eine der
                schoensten Weinlandschaften Deutschlands.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gold/10">
                <div>
                  <p className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl text-gold">
                    <CountUp target={11500} />
                  </p>
                  <p className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.2em] uppercase text-cream/45 mt-1">
                    Hektar Rebflaeche
                  </p>
                </div>
                <div>
                  <p className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl text-gold">
                    <CountUp target={71} suffix="%" />
                  </p>
                  <p className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.2em] uppercase text-cream/45 mt-1">
                    Rotweinanteil
                  </p>
                </div>
                <div>
                  <p className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl text-gold">
                    Nr. 4
                  </p>
                  <p className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.2em] uppercase text-cream/45 mt-1">
                    Deutschlands Regionen
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Right: Grape images collage */}
            <ImageReveal direction="right">
              <div className="grid grid-cols-2 gap-3">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src="/images/trauben-rot-nah.jpg"
                    alt="Rotweintrauben in voller Reife"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700 image-sharp"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-warmblack/50 to-transparent" />
                  <p className="absolute bottom-3 left-3 font-[family-name:var(--font-inter)] text-[9px] tracking-[0.2em] uppercase text-cream/80">
                    Rotwein
                  </p>
                </div>
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src="/images/trauben-weiss-nah.jpg"
                    alt="Weisse Trauben an der Rebe"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700 image-sharp"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-warmblack/50 to-transparent" />
                  <p className="absolute bottom-3 left-3 font-[family-name:var(--font-inter)] text-[9px] tracking-[0.2em] uppercase text-cream/80">
                    Weisswein
                  </p>
                </div>
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src="/images/trauben-gruen.jpg"
                    alt="Gruene Trauben am Rebstock"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700 image-sharp"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-warmblack/50 to-transparent" />
                  <p className="absolute bottom-3 left-3 font-[family-name:var(--font-inter)] text-[9px] tracking-[0.2em] uppercase text-cream/80">
                    Riesling
                  </p>
                </div>
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src="/images/weinberg-sonnenuntergang.jpg"
                    alt="Weinberge bei goldenem Sonnenuntergang"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700 image-sharp"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-warmblack/50 to-transparent" />
                  <p className="absolute bottom-3 left-3 font-[family-name:var(--font-inter)] text-[9px] tracking-[0.2em] uppercase text-cream/80">
                    Sonnenuntergang
                  </p>
                </div>
              </div>
            </ImageReveal>
          </div>

          {/* Vineyard Sites */}
          <ScrollReveal className="mb-16 md:mb-20">
            <h3 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl text-cream text-center mb-10">
              Unsere Weinlagen
            </h3>
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              {vineyardSites.map((site, index) => (
                <ScrollReveal key={site.name} delay={index * 0.15}>
                  <div className="group p-8 md:p-12 border border-gold/10 hover:border-gold/25 transition-all duration-700 bg-warmblack/20 luxury-card">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-2 h-2 bg-gold/50 rotate-45" />
                      <h4 className="font-[family-name:var(--font-playfair)] text-xl md:text-2xl text-cream tracking-wide">
                        {site.name}
                      </h4>
                    </div>
                    <p className="font-[family-name:var(--font-cormorant)] text-lg text-cream/65 leading-relaxed">
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
            <p className="font-[family-name:var(--font-cormorant)] text-lg text-cream/60 text-center mb-10 italic">
              Vier Bodenarten praegen den Charakter unserer Weine
            </p>
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {soilTypes.map((soil) => (
                <StaggerItem key={soil.name}>
                  <div className="text-center p-6 md:p-8 border border-gold/5 hover:border-gold/20 transition-all duration-500 bg-warmblack/10 luxury-card h-full">
                    <p className="font-[family-name:var(--font-playfair)] text-xl text-cream mb-1">
                      {soil.name}
                    </p>
                    <p className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.2em] uppercase text-gold/60 mb-4">
                      {soil.effect}
                    </p>
                    <p className="font-[family-name:var(--font-cormorant)] text-base text-cream/55 leading-relaxed">
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
