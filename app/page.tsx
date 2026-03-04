"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Hero from "@/components/hero";
import { ScrollReveal, StaggerContainer, StaggerItem, LuxuryReveal, ImageReveal, TextReveal, CountUp } from "@/components/scroll-reveal";

const teasers = [
  {
    href: "/weingut",
    label: "Unsere Geschichte",
    title: "Ein Weingut,",
    titleAccent: "eine Familie",
    description:
      "Seit 1989 führen wir unser Familienweingut mit Leidenschaft in Talheim an der Württemberger Weinstraße.",
    image: "/images/weingut-terrasse.jpg",
    imageAlt: "Weingut-Terrasse mit Wein und Trauben bei Sonnenuntergang",
    stats: [
      { value: 10.5, suffix: "", decimals: 1, label: "Hektar" },
      { value: 35, suffix: "+", decimals: 0, label: "Jahre" },
      { value: 3, suffix: "", decimals: 0, label: "Generationen" },
    ],
  },
  {
    href: "/weine",
    label: "Weinsortiment",
    title: "Unsere",
    titleAccent: "Weine",
    description:
      "Edle, sortentypische und genussreiche Charaktere — Rotweine, Weißweine, Sekt und Destillate aus sorgfältiger Handarbeit.",
    image: "/images/weinflaschen-holzkiste-premium.jpg",
    imageAlt: "Premium Weinflaschen in Holzkiste",
  },
  {
    href: "/philosophie",
    label: "Unsere Philosophie",
    title: "Handwerk &",
    titleAccent: "Leidenschaft",
    description:
      "Naturnaher Weinbau, Handarbeit im Weinberg und traditionelle Kellerwirtschaft — so entstehen Weine mit Charakter.",
    image: "/images/weinberg-panorama.jpg",
    imageAlt: "Weinberge im Herbst mit Blick auf die Hügel",
  },
  {
    href: "/region",
    label: "Unsere Region",
    title: "Württemberg —",
    titleAccent: "unser Terroir",
    description:
      "Talheim am Neckar, direkt an der Württemberger Weinstraße. Keuperböden und Südlagen prägen den Charakter unserer Weine.",
    image: "/images/weinberg-sonnenuntergang.jpg",
    imageAlt: "Weinberge bei goldenem Sonnenuntergang",
  },
];

export default function Home() {
  return (
    <>
      <Hero />

      {/* Teaser Sections */}
      {teasers.map((teaser, index) => (
        <section
          key={teaser.href}
          className={`relative overflow-hidden ${
            index % 2 === 0 ? "bg-gradient-dark" : "bg-gradient-warm"
          }`}
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] max-w-3xl h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

          <div className="section-padding">
            <div className="max-w-7xl mx-auto">
              <div
                className={`grid lg:grid-cols-2 gap-16 lg:gap-24 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-dense" : ""
                }`}
              >
                {/* Image */}
                <ImageReveal
                  direction={index % 2 === 0 ? "left" : "right"}
                  className={index % 2 === 1 ? "lg:col-start-2" : ""}
                >
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src={teaser.image}
                      alt={teaser.imageAlt}
                      fill
                      className="object-cover image-sharp"
                      sizes="(max-width: 1024px) 100vw, 50vw"

                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background: `linear-gradient(180deg, transparent 50%, rgba(12, 10, 9, 0.5) 100%)`,
                      }}
                    />
                    <div className="absolute inset-4 md:inset-6 border border-gold/15 pointer-events-none" />
                  </div>
                </ImageReveal>

                {/* Text */}
                <div className={index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                  <ScrollReveal>
                    <p className="font-[family-name:var(--font-inter)] text-[11px] tracking-[0.4em] uppercase text-gold/80 mb-6">
                      {teaser.label}
                    </p>
                  </ScrollReveal>

                  <TextReveal
                    text={`${teaser.title} ${teaser.titleAccent}`}
                    className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl text-cream tracking-wide mb-8 leading-[1.1]"
                    tag="h2"
                    delay={0.2}
                  />

                  <ScrollReveal delay={0.3}>
                    <p className="font-[family-name:var(--font-cormorant)] text-xl md:text-2xl text-cream/75 leading-relaxed mb-10">
                      {teaser.description}
                    </p>
                  </ScrollReveal>

                  {teaser.stats && (
                    <ScrollReveal delay={0.4}>
                      <div className="flex items-center gap-6 mb-10 pt-8 border-t border-gold/10">
                        {teaser.stats.map((stat, si) => (
                          <div key={si} className="flex items-center gap-6">
                            {si > 0 && (
                              <div className="w-px h-12 bg-gold/20" />
                            )}
                            <div className="text-center">
                              <p className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl text-gold">
                                <CountUp
                                  target={stat.value}
                                  suffix={stat.suffix}
                                  decimals={stat.decimals}
                                />
                              </p>
                              <p className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.3em] uppercase text-cream/50 mt-1">
                                {stat.label}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </ScrollReveal>
                  )}

                  <ScrollReveal delay={0.5}>
                    <Link
                      href={teaser.href}
                      className="group inline-flex items-center gap-3 font-[family-name:var(--font-inter)] text-[12px] tracking-[0.25em] uppercase text-gold border border-gold/30 px-8 py-4 hover:bg-gold/10 hover:border-gold/60 transition-all duration-500"
                    >
                      Mehr erfahren
                      <motion.span
                        className="inline-block"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        &rarr;
                      </motion.span>
                    </Link>
                  </ScrollReveal>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Erlebnis Teaser */}
      <section className="relative overflow-hidden bg-gradient-wine">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] max-w-3xl h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
        <div className="section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <LuxuryReveal>
              <p className="font-[family-name:var(--font-inter)] text-[11px] tracking-[0.4em] uppercase text-gold/80 mb-6">
                Besuchen Sie uns
              </p>
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl text-cream tracking-wide mb-8">
                Das{" "}
                <span className="italic text-gold/90">Erlebnis</span>
              </h2>
              <p className="font-[family-name:var(--font-cormorant)] text-xl md:text-2xl text-cream/75 leading-relaxed mb-6">
                Verkauf ab Hof, Weinproben und besondere Veranstaltungen —
                erleben Sie unser Weingut persönlich.
              </p>
              <div className="gold-line mx-auto mb-10" />

              {/* Event Highlight */}
              <div className="relative border border-gold/15 p-8 md:p-12 bg-warmblack/30 mb-10">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-warmblack px-6">
                  <span className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.4em] uppercase text-gold/80">
                    Aktuell
                  </span>
                </div>
                <h3 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl text-cream mb-2">
                  KellerKücheKlang
                </h3>
                <p className="font-[family-name:var(--font-inter)] text-[11px] tracking-[0.15em] text-gold/70 mb-4">
                  6. & 7. März 2026
                </p>
                <p className="font-[family-name:var(--font-cormorant)] text-lg text-cream/65 leading-relaxed max-w-xl mx-auto">
                  Kitchen Party im Restaurant &bdquo;Wo der Hahn kräht&ldquo; — Wein,
                  erlesene Häppchen und Live-Musik der &bdquo;Drive Combo&ldquo;.
                </p>
              </div>

              <Link
                href="/erlebnis"
                className="inline-flex items-center gap-3 font-[family-name:var(--font-inter)] text-[12px] tracking-[0.25em] uppercase text-warmblack bg-gold hover:bg-gold-light px-10 py-4 transition-all duration-500"
              >
                Alle Erlebnisse
              </Link>
            </LuxuryReveal>
          </div>
        </div>
      </section>

      {/* Gallery Teaser */}
      <section className="relative overflow-hidden bg-gradient-warm">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] max-w-3xl h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
        <div className="section-padding">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal className="text-center mb-16">
              <p className="font-[family-name:var(--font-inter)] text-[11px] tracking-[0.4em] uppercase text-gold/80 mb-6">
                Impressionen
              </p>
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl text-cream tracking-wide">
                Momente aus dem{" "}
                <span className="italic text-gold/90">Weingut</span>
              </h2>
              <div className="gold-line mx-auto mt-8" />
            </ScrollReveal>

            <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-12">
              {[
                { src: "/images/keller-barrique.jpg", alt: "Barriquefässer im Gewölbekeller", span: "col-span-2", aspect: "aspect-[16/9]" },
                { src: "/images/trauben-rot-nah.jpg", alt: "Rotweintrauben Nahaufnahme", span: "", aspect: "aspect-square" },
                { src: "/images/weinglaeser-sonnenuntergang.jpg", alt: "Weingläser bei Sonnenuntergang", span: "", aspect: "aspect-square" },
              ].map((img, i) => (
                <StaggerItem key={i} className={img.span}>
                  <div className={`group relative overflow-hidden ${img.aspect}`}>
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700 image-sharp"
                      sizes={img.span ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 50vw, 25vw"}

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
                className="inline-flex items-center gap-3 font-[family-name:var(--font-inter)] text-[12px] tracking-[0.25em] uppercase text-gold border border-gold/30 px-8 py-4 hover:bg-gold/10 hover:border-gold/60 transition-all duration-500"
              >
                Alle Impressionen
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Contact Teaser */}
      <section className="relative overflow-hidden bg-gradient-dark">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] max-w-3xl h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
        <div className="section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <LuxuryReveal>
              <p className="font-[family-name:var(--font-inter)] text-[11px] tracking-[0.4em] uppercase text-gold/80 mb-6">
                Kontakt
              </p>
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl text-cream tracking-wide mb-8">
                Besuchen Sie{" "}
                <span className="italic text-gold/90">uns</span>
              </h2>
              <p className="font-[family-name:var(--font-cormorant)] text-xl md:text-2xl text-cream/75 leading-relaxed mb-4">
                Betteläcker 1, 74388 Talheim
              </p>
              <p className="font-[family-name:var(--font-cormorant)] text-lg text-cream/60 mb-10">
                Mo–Fr 18–20 Uhr &middot; Sa 9:30–16 Uhr
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/kontakt"
                  className="font-[family-name:var(--font-inter)] text-[12px] tracking-[0.25em] uppercase text-warmblack bg-gold hover:bg-gold-light px-10 py-4 transition-all duration-500"
                >
                  Kontakt aufnehmen
                </Link>
                <a
                  href="tel:+497133960420"
                  className="font-[family-name:var(--font-inter)] text-[12px] tracking-[0.25em] uppercase text-cream/70 border border-cream/20 px-10 py-4 hover:border-gold/50 hover:text-gold transition-all duration-500"
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
