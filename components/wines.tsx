"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal, LuxuryReveal } from "./scroll-reveal";
import {
  categories,
  getWinesByCategory,
  getCategoryImage,
  winePackage,
  type WineCategory,
  type Wine,
} from "@/lib/wine-data";
import WineCard from "./ui/wine-card";

interface WinesProps {
  initialCategory?: WineCategory;
}

export default function Wines({ initialCategory = "rot" }: WinesProps) {
  const [activeCategory, setActiveCategory] = useState<WineCategory>(initialCategory);
  const [selectedWine, setSelectedWine] = useState<Wine | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const activeWines = getWinesByCategory(activeCategory);
  const activeCat = categories.find((c) => c.key === activeCategory)!;

  useEffect(() => {
    setSelectedWine(null);
  }, [activeCategory]);

  const scrollCarousel = (direction: "left" | "right") => {
    if (!carouselRef.current) return;
    const scrollAmount = carouselRef.current.offsetWidth * 0.6;
    carouselRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative overflow-hidden">
      <div className="section-padding bg-gradient-wine">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] max-w-3xl h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

        <div className="max-w-7xl mx-auto">
          <LuxuryReveal className="text-center mb-10 sm:mb-16 md:mb-20">
            <p className="font-[family-name:var(--font-inter)] text-[11px] tracking-[0.4em] uppercase text-gold/80 mb-6">
              Sortiment
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-cream tracking-wide">
              Unsere{" "}
              <span className="italic text-gold/90">Weine</span>
            </h2>
            <p className="font-[family-name:var(--font-cormorant)] text-base sm:text-lg md:text-xl text-cream/65 max-w-2xl mx-auto mt-4 sm:mt-6">
              Edle, sortentypische und genussreiche Charaktere - entstanden aus
              sorgfaeltiger, naturnaher Pflege der Reben und naturorientierter
              Verarbeitung der Trauben.
            </p>
            <div className="gold-line mx-auto mt-6 sm:mt-8" />
          </LuxuryReveal>

          {/* Category Tabs */}
          <ScrollReveal className="flex flex-wrap justify-center gap-1 sm:gap-2 md:gap-6 mb-10 sm:mb-16">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className="relative font-[family-name:var(--font-inter)] text-[10px] sm:text-[11px] md:text-[12px] tracking-[0.15em] sm:tracking-[0.2em] uppercase px-3 sm:px-5 md:px-8 py-2.5 sm:py-3 transition-all duration-500 tab-active-underline"
              >
                <span
                  className={
                    activeCategory === cat.key
                      ? "text-gold"
                      : "text-cream/55 hover:text-cream/80"
                  }
                >
                  {cat.label}
                </span>
                {activeCategory === cat.key && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-2 right-2 h-px bg-gold"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
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
              className="font-[family-name:var(--font-cormorant)] text-lg sm:text-xl md:text-2xl text-cream/55 italic text-center mb-8 sm:mb-12"
            >
              {activeCat.subtitle}
            </motion.p>
          </AnimatePresence>

          {/* Wine Carousel */}
          <div className="relative mb-8 sm:mb-12">
            <button
              onClick={() => scrollCarousel("left")}
              className="absolute -left-2 sm:left-0 top-1/2 -translate-y-1/2 z-10 w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-gold/30 bg-warmblack/80 backdrop-blur-sm flex items-center justify-center text-gold hover:bg-gold/10 hover:border-gold/60 transition-all duration-300"
              aria-label="Vorherige Weine"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 sm:w-5 sm:h-5">
                <path d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={() => scrollCarousel("right")}
              className="absolute -right-2 sm:right-0 top-1/2 -translate-y-1/2 z-10 w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-gold/30 bg-warmblack/80 backdrop-blur-sm flex items-center justify-center text-gold hover:bg-gold/10 hover:border-gold/60 transition-all duration-300"
              aria-label="Naechste Weine"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 sm:w-5 sm:h-5">
                <path d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                <div
                  ref={carouselRef}
                  className="carousel-track flex gap-3 sm:gap-4 overflow-x-auto px-8 sm:px-12 py-4"
                >
                  {activeWines.map((wine, index) => (
                    <motion.div
                      key={wine.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.06, duration: 0.4 }}
                      className={`flex-shrink-0 w-[240px] sm:w-[260px] md:w-[280px] cursor-pointer transition-transform duration-500 ${
                        selectedWine?.id === wine.id
                          ? "scale-[1.02]"
                          : "hover:scale-[1.02]"
                      }`}
                      onClick={() =>
                        setSelectedWine(
                          selectedWine?.id === wine.id ? null : wine
                        )
                      }
                    >
                      <div
                        className={`relative bg-warmblack/50 border overflow-hidden transition-all duration-500 h-full ${
                          selectedWine?.id === wine.id
                            ? "border-gold/50 shadow-[0_0_30px_rgba(201,168,76,0.1)]"
                            : "border-gold/8 hover:border-gold/25"
                        }`}
                      >
                        <div className="relative h-36 sm:h-40 overflow-hidden">
                          <Image
                            src={getCategoryImage(wine.category)}
                            alt={wine.name}
                            fill
                            className="object-cover object-center image-sharp"
                            sizes="280px"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-warmblack/80 to-transparent" />
                          {wine.isBestseller && (
                            <div className="absolute top-2 right-2">
                              <span className="font-[family-name:var(--font-inter)] text-[8px] tracking-[0.15em] uppercase text-warmblack bg-gold px-2 py-0.5">
                                Bestseller
                              </span>
                            </div>
                          )}
                        </div>

                        <div className="p-4 sm:p-5">
                          <h3 className="font-[family-name:var(--font-playfair)] text-base sm:text-lg text-cream italic mb-1.5">
                            {wine.name}
                          </h3>
                          <p className="font-[family-name:var(--font-inter)] text-[9px] sm:text-[10px] tracking-[0.15em] uppercase text-gold/55 mb-2">
                            {wine.style}
                          </p>
                          <p className="font-[family-name:var(--font-cormorant)] text-sm text-cream/55 leading-relaxed line-clamp-2">
                            {wine.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Wine Detail Panel */}
          <AnimatePresence>
            {selectedWine && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
                className="overflow-hidden mb-10 sm:mb-16"
              >
                <div className="border border-gold/15 bg-warmblack/40 overflow-hidden">
                  <div className="grid md:grid-cols-5 gap-0">
                    <div className="relative md:col-span-2 h-56 sm:h-64 md:h-auto min-h-[250px] bg-gradient-bordeaux">
                      <Image
                        src={getCategoryImage(selectedWine.category)}
                        alt={selectedWine.name}
                        fill
                        className="object-cover object-center image-sharp opacity-60 mix-blend-luminosity"
                        sizes="(max-width: 768px) 100vw, 40vw"
                      />
                      <div className="absolute inset-0 bg-gradient-bordeaux opacity-70" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <p className="font-[family-name:var(--font-playfair)] text-5xl sm:text-6xl md:text-7xl text-cream/15 italic select-none">
                          {selectedWine.grape.charAt(0)}
                        </p>
                      </div>
                    </div>

                    <div className="md:col-span-3 p-6 sm:p-8 md:p-10 lg:p-14 flex flex-col justify-center">
                      <button
                        onClick={() => setSelectedWine(null)}
                        className="self-start mb-4 sm:mb-6 font-[family-name:var(--font-inter)] text-[11px] tracking-[0.15em] uppercase text-cream/45 hover:text-gold transition-colors duration-300 flex items-center gap-2"
                      >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-3.5 h-3.5">
                          <path d="M19 12H5M12 19l-7-7 7-7" />
                        </svg>
                        Zurueck
                      </button>

                      <h3 className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl md:text-4xl text-gold italic mb-3 sm:mb-4">
                        {selectedWine.name}
                      </h3>

                      <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                        <span className="font-[family-name:var(--font-inter)] text-[10px] sm:text-[11px] tracking-[0.15em] uppercase text-cream/55">
                          {selectedWine.style}
                        </span>
                        <span className="w-px h-3 bg-gold/20" />
                        <span className="font-[family-name:var(--font-inter)] text-[10px] sm:text-[11px] tracking-[0.15em] uppercase text-cream/55">
                          {selectedWine.volume}
                        </span>
                        <span className="w-px h-3 bg-gold/20" />
                        <span className="font-[family-name:var(--font-inter)] text-[10px] sm:text-[11px] tracking-[0.15em] uppercase text-cream/55">
                          {selectedWine.grape}
                        </span>
                      </div>

                      <div className="gold-line mb-4 sm:mb-6" />

                      <p className="font-[family-name:var(--font-cormorant)] text-base sm:text-lg md:text-xl text-cream/70 leading-relaxed mb-6 sm:mb-8">
                        {selectedWine.description}
                      </p>

                      {selectedWine.price ? (
                        <p className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl text-gold mb-4 sm:mb-6">
                          {selectedWine.price}
                        </p>
                      ) : (
                        <p className="font-[family-name:var(--font-inter)] text-[11px] tracking-[0.15em] uppercase text-cream/45 mb-4 sm:mb-6">
                          Preis auf Anfrage
                        </p>
                      )}

                      <Link
                        href="/kontakt"
                        className="self-start font-[family-name:var(--font-inter)] text-[11px] sm:text-[12px] tracking-[0.2em] uppercase text-warmblack bg-gold hover:bg-gold-light px-6 sm:px-8 py-3 sm:py-3.5 transition-all duration-500 hover:shadow-[0_0_30px_rgba(201,168,76,0.2)]"
                      >
                        Jetzt anfragen
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Wine Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6"
            >
              {activeWines.map((wine, index) => (
                <WineCard
                  key={wine.id}
                  wine={wine}
                  variant="grid"
                  index={index}
                  onClick={() =>
                    setSelectedWine(
                      selectedWine?.id === wine.id ? null : wine
                    )
                  }
                />
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Wine Package Highlight */}
          <ScrollReveal className="mt-14 sm:mt-20 md:mt-24">
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
