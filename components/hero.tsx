"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";


const heroSlides = [
  {
    src: "/images/weinberg-sonnenuntergang.jpg",
    alt: "Weinberge im goldenen Sonnenuntergang bei Talheim",
  },
  {
    src: "/images/keller-barrique.jpg",
    alt: "Barriquefaesser im historischen Gewoelbekeller",
  },
  {
    src: "/images/weingut-terrasse.jpg",
    alt: "Genuss auf der Weingut-Terrasse mit erlesenen Weinen",
  },
  {
    src: "/images/trauben-rot-nah.jpg",
    alt: "Reife Rotweintrauben am Rebstock in Wuerttemberg",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="relative min-h-[100svh] flex items-stretch overflow-hidden bg-warmblack">
      {/* ── LEFT: Text Content ── */}
      <div className="relative z-10 flex flex-col justify-center w-full lg:w-1/2 px-8 sm:px-12 md:px-16 lg:px-20 xl:px-28 py-32 lg:py-20">
        {/* Vertical Deko */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 1.8 }}
          className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 hidden md:block"
        >
          <span className="text-vertical font-[family-name:var(--font-inter)] text-[11px] tracking-[0.5em] uppercase text-cream/15 select-none">
            Seit 1989
          </span>
        </motion.div>

        {/* Overline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-[family-name:var(--font-inter)] text-[10px] sm:text-[11px] md:text-[12px] tracking-[0.35em] uppercase text-gold/80 mb-6"
        >
          Familienweingut in Talheim, Wuerttemberg
        </motion.p>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-cream tracking-[0.02em] leading-[1.05]"
        >
          Wuerttemberger Wein
          <br />
          <span className="text-gradient-gold">mit Seele.</span>
        </motion.h1>

        {/* Gold separator */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 1.0 }}
          className="gold-line-wide my-6 md:my-8 origin-left"
        />

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="font-[family-name:var(--font-cormorant)] text-lg sm:text-xl md:text-2xl text-cream/70 leading-relaxed max-w-lg"
        >
          Seit 1989 keltern wir als Familienbetrieb edle, sortentypische Weine
          aus den besten Lagen Talheims an der Wuerttemberger Weinstrasse.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="mt-8 md:mt-12 flex flex-col sm:flex-row items-start gap-3 sm:gap-5"
        >
          <Link
            href="/weine"
            className="w-full sm:w-auto text-center font-[family-name:var(--font-inter)] text-[11px] sm:text-[12px] tracking-[0.25em] uppercase text-warmblack bg-gold hover:bg-gold-light px-8 sm:px-10 py-3.5 sm:py-4 transition-all duration-500 hover:shadow-[0_0_30px_rgba(201,168,76,0.2)]"
          >
            Weine entdecken
          </Link>
          <Link
            href="/erlebnis"
            className="w-full sm:w-auto text-center font-[family-name:var(--font-inter)] text-[11px] sm:text-[12px] tracking-[0.25em] uppercase text-cream/80 border border-cream/25 px-8 sm:px-10 py-3.5 sm:py-4 hover:border-gold/50 hover:text-gold transition-all duration-500"
          >
            Weinprobe buchen
          </Link>
        </motion.div>
      </div>

      {/* ── RIGHT: Image Carousel ── */}
      <div className="hidden lg:block relative w-1/2">
        <AnimatePresence mode="sync">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={heroSlides[currentSlide].src}
              alt={heroSlides[currentSlide].alt}
              fill
              priority
              quality={90}
              className="object-cover object-center image-sharp"
              sizes="50vw"
            />
          </motion.div>
        </AnimatePresence>

        {/* Subtle overlay for depth */}
        <div
          className="absolute inset-0 z-[1] pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, rgba(26,26,26,0.4) 0%, transparent 30%, transparent 70%, rgba(26,26,26,0.15) 100%)",
          }}
        />

      </div>

      {/* ── MOBILE: Background image ── */}
      <div className="lg:hidden absolute inset-0 z-0">
        <AnimatePresence mode="sync">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={heroSlides[currentSlide].src}
              alt={heroSlides[currentSlide].alt}
              fill
              priority
              quality={85}
              className="object-cover object-center image-sharp"
              sizes="100vw"
            />
          </motion.div>
        </AnimatePresence>
        <div
          className="absolute inset-0 z-[1]"
          style={{
            background:
              "linear-gradient(180deg, rgba(26,26,26,0.75) 0%, rgba(26,26,26,0.55) 40%, rgba(26,26,26,0.7) 100%)",
          }}
        />
      </div>
    </section>
  );
}
