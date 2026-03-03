"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const heroSlides = [
  {
    src: "/images/hero-2.png",
    alt: "Weinverkostung im Keller — Weingut Rainer Bauer",
  },
  {
    src: "/images/hero-1.png",
    alt: "Familie Bauer beim Anstoßen mit eigenen Weinen",
  },
  {
    src: "/images/hero-3.png",
    alt: "Kellermeister Martin Bauer an den Edelstahltanks",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image Slideshow */}
      <AnimatePresence mode="sync">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
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
            className="object-cover"
            sizes="100vw"
          />
        </motion.div>
      </AnimatePresence>

      {/* Dark overlay for text readability */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background: `
            linear-gradient(180deg, rgba(12, 10, 9, 0.6) 0%, rgba(12, 10, 9, 0.35) 40%, rgba(12, 10, 9, 0.5) 70%, rgba(12, 10, 9, 0.85) 100%),
            radial-gradient(ellipse 60% 50% at 50% 50%, transparent 0%, rgba(12, 10, 9, 0.3) 100%)
          `,
        }}
      />

      {/* Decorative lines */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent via-gold/20 to-transparent z-[2]" />
      <div className="absolute bottom-32 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-gold/20 to-transparent z-[2]" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex justify-center mb-8"
        >
          <Image
            src="/images/logo.png"
            alt="Weingut Rainer Bauer Logo"
            width={100}
            height={87}
            className="opacity-90 invert brightness-200"
          />
        </motion.div>

        {/* Overline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="font-[family-name:var(--font-inter)] text-[11px] md:text-[12px] tracking-[0.4em] uppercase text-gold/70 mb-8"
        >
          Familienweingut seit 1989 &middot; Talheim, Württemberg
        </motion.p>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.0 }}
          className="font-[family-name:var(--font-playfair)] text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-cream tracking-[0.04em] leading-[0.95]"
        >
          Weingut
          <br />
          <span className="text-gradient-gold">Rainer Bauer</span>
        </motion.h1>

        {/* Gold separator */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 1.4 }}
          className="gold-line-wide mx-auto my-8 md:my-10"
        />

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="font-[family-name:var(--font-cormorant)] text-xl md:text-2xl lg:text-3xl text-cream/60 tracking-wide italic"
        >
          Tradition &middot; Handwerk &middot; Leidenschaft
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.0 }}
          className="mt-12 md:mt-16 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          <a
            href="#weine"
            className="font-[family-name:var(--font-inter)] text-[12px] tracking-[0.25em] uppercase text-warmblack bg-gold hover:bg-gold-light px-10 py-4 transition-all duration-500"
          >
            Unsere Weine
          </a>
          <a
            href="#weingut"
            className="font-[family-name:var(--font-inter)] text-[12px] tracking-[0.25em] uppercase text-cream/70 border border-cream/20 px-10 py-4 hover:border-gold/50 hover:text-gold transition-all duration-500"
          >
            Entdecken
          </a>
        </motion.div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-10 flex gap-3">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`w-8 h-px transition-all duration-500 ${
              i === currentSlide ? "bg-gold w-12" : "bg-cream/30"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-10"
        style={{ animation: "scrollBounce 2s infinite" }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.3em] uppercase text-cream/30">
            Scroll
          </span>
          <div className="w-px h-8 bg-gradient-to-b from-cream/30 to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}
