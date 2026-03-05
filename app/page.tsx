"use client";

import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/hero";
import BestsellerSection from "@/components/bestseller-section";
import CategoryPreview from "@/components/category-preview";

import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
  LuxuryReveal,
} from "@/components/scroll-reveal";

export default function Home() {
  return (
    <>
      {/* 1. Hero */}
      <Hero />

      {/* 2. Bestseller Section */}
      <BestsellerSection />

      {/* 3. Full-width Weinberg Separator */}
      <section className="relative h-[40vh] sm:h-[50vh] min-h-[280px] overflow-hidden">
        <Image
          src="/images/weinberg-panorama.jpg"
          alt="Panoramablick ueber die Weinberge bei Talheim"
          fill
          className="object-cover object-center image-sharp"
          sizes="100vw"
          quality={85}
          loading="lazy"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(26,26,26,0.5) 0%, rgba(26,26,26,0.15) 50%, rgba(26,26,26,0.5) 100%)",
          }}
        />

        <div className="absolute inset-0 flex items-center justify-center z-[4]">
          <p className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-cream/15 tracking-[0.15em] uppercase select-none text-shadow-luxury">
            Wuerttemberg
          </p>
        </div>
      </section>

      {/* 4. Rotweine Preview */}
      <CategoryPreview category="rot" position="left" />

      {/* 5. Weissweine Preview */}
      <CategoryPreview category="weiss" position="right" />

      {/* 6. Erlebnis Teaser */}
      <section className="relative overflow-hidden bg-gradient-wine">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] max-w-3xl h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

        <div className="section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <LuxuryReveal>
              <p className="font-[family-name:var(--font-inter)] text-[11px] tracking-[0.4em] uppercase text-gold/80 mb-6">
                Besuchen Sie uns
              </p>
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-cream tracking-wide mb-6 sm:mb-8">
                Das{" "}
                <span className="italic text-gold/90">Erlebnis</span>
              </h2>
              <p className="font-[family-name:var(--font-cormorant)] text-lg sm:text-xl md:text-2xl text-cream/75 leading-relaxed mb-6">
                Verkauf ab Hof, Weinproben und besondere Veranstaltungen -
                erleben Sie unser Weingut persoenlich.
              </p>
              <div className="gold-line mx-auto mb-8 sm:mb-10" />

              {/* Event Highlight */}
              <div className="relative border border-gold/15 p-6 sm:p-8 md:p-12 bg-warmblack/30 mb-8 sm:mb-10">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-warmblack px-6">
                  <span className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.4em] uppercase text-gold/80">
                    Aktuell
                  </span>
                </div>
                <h3 className="font-[family-name:var(--font-playfair)] text-xl sm:text-2xl md:text-3xl text-cream mb-2">
                  KellerKuecheKlang
                </h3>
                <p className="font-[family-name:var(--font-inter)] text-[11px] tracking-[0.15em] text-gold/70 mb-4">
                  6. & 7. Maerz 2026
                </p>
                <p className="font-[family-name:var(--font-cormorant)] text-base sm:text-lg text-cream/65 leading-relaxed max-w-xl mx-auto">
                  Kitchen Party im Restaurant &bdquo;Wo der Hahn kraeht&ldquo; - Wein,
                  erlesene Haeppchen und Live-Musik der &bdquo;Drive Combo&ldquo;.
                </p>
              </div>

              <Link
                href="/erlebnis"
                className="inline-flex items-center gap-3 font-[family-name:var(--font-inter)] text-[11px] sm:text-[12px] tracking-[0.25em] uppercase text-warmblack bg-gold hover:bg-gold-light px-8 sm:px-10 py-3.5 sm:py-4 transition-all duration-500"
              >
                Alle Erlebnisse entdecken
              </Link>
            </LuxuryReveal>
          </div>
        </div>
      </section>

      {/* 7. Gallery Teaser */}
      <section className="relative overflow-hidden bg-gradient-warm">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] max-w-3xl h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
        <div className="section-padding">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal className="text-center mb-12 sm:mb-16">
              <p className="font-[family-name:var(--font-inter)] text-[11px] tracking-[0.4em] uppercase text-gold/80 mb-6">
                Impressionen
              </p>
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-cream tracking-wide">
                Momente aus dem{" "}
                <span className="italic text-gold/90">Weingut</span>
              </h2>
              <div className="gold-line mx-auto mt-8" />
            </ScrollReveal>

            <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4 mb-10 sm:mb-12">
              {[
                {
                  src: "/images/rotwein-einschenken.jpg",
                  alt: "Rotwein wird ins Glas eingeschenkt",
                  span: "col-span-2",
                  aspect: "aspect-[16/9]",
                },
                {
                  src: "/images/weinflaschen-sammlung.jpg",
                  alt: "Sammlung erlesener Weinflaschen",
                  span: "",
                  aspect: "aspect-square",
                },
                {
                  src: "/images/weinglaeser-sonnenuntergang.jpg",
                  alt: "Weinglaeser bei Sonnenuntergang",
                  span: "",
                  aspect: "aspect-square",
                },
              ].map((img, i) => (
                <StaggerItem key={i} className={img.span}>
                  <div
                    className={`group relative overflow-hidden ${img.aspect}`}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700 image-sharp"
                      sizes={
                        img.span
                          ? "(max-width: 768px) 100vw, 50vw"
                          : "(max-width: 768px) 50vw, 25vw"
                      }
                      quality={85}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-warmblack/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute inset-2 border border-gold/0 group-hover:border-gold/20 transition-all duration-700 pointer-events-none" />
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <ScrollReveal className="text-center">
              <Link
                href="/galerie"
                className="inline-flex items-center gap-3 font-[family-name:var(--font-inter)] text-[11px] sm:text-[12px] tracking-[0.25em] uppercase text-gold border border-gold/30 px-6 sm:px-8 py-3 sm:py-4 hover:bg-gold/10 hover:border-gold/60 transition-all duration-500"
              >
                Alle Impressionen
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 8. Contact CTA */}
      <section className="relative overflow-hidden bg-gradient-dark">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] max-w-3xl h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
        <div className="section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <LuxuryReveal>
              <p className="font-[family-name:var(--font-inter)] text-[11px] tracking-[0.4em] uppercase text-gold/80 mb-6">
                Kontakt
              </p>
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-cream tracking-wide mb-6 sm:mb-8">
                Wir freuen uns auf{" "}
                <span className="italic text-gold/90">Sie</span>
              </h2>
              <p className="font-[family-name:var(--font-cormorant)] text-lg sm:text-xl md:text-2xl text-cream/75 leading-relaxed mb-4">
                Bettelaecker 1, 74388 Talheim
              </p>
              <p className="font-[family-name:var(--font-cormorant)] text-base sm:text-lg text-cream/60 mb-8 sm:mb-10">
                Mo-Fr 18-20 Uhr &middot; Sa 9:30-16 Uhr
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                <Link
                  href="/kontakt"
                  className="w-full sm:w-auto text-center font-[family-name:var(--font-inter)] text-[11px] sm:text-[12px] tracking-[0.25em] uppercase text-warmblack bg-gold hover:bg-gold-light px-8 sm:px-10 py-3.5 sm:py-4 transition-all duration-500"
                >
                  Kontakt aufnehmen
                </Link>
                <a
                  href="tel:+497133960420"
                  className="w-full sm:w-auto text-center font-[family-name:var(--font-inter)] text-[11px] sm:text-[12px] tracking-[0.25em] uppercase text-cream/70 border border-cream/20 px-8 sm:px-10 py-3.5 sm:py-4 hover:border-gold/50 hover:text-gold transition-all duration-500"
                >
                  Anrufen
                </a>
              </div>
            </LuxuryReveal>
          </div>
        </div>
      </section>
    </>
  );
}
