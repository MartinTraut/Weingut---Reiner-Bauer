"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal, StaggerContainer, StaggerItem, LuxuryReveal } from "./scroll-reveal";

const galleryImages = [
  {
    src: "/images/keller-barrique.jpg",
    alt: "Barriquefaesser im historischen Gewoelbekeller",
    caption: "Im Gewoelbekeller",
    span: "col-span-2 md:col-span-2",
    aspect: "aspect-[16/9]",
  },
  {
    src: "/images/trauben-rot-nah.jpg",
    alt: "Rotweintrauben in voller Reife am Rebstock",
    caption: "Rotweintrauben",
    span: "",
    aspect: "aspect-square",
  },
  {
    src: "/images/trauben-weiss-nah.jpg",
    alt: "Weisse Trauben an der alten Rebe im Morgenlicht",
    caption: "Weissweintrauben",
    span: "",
    aspect: "aspect-square",
  },
  {
    src: "/images/rotwein-bordeaux.jpg",
    alt: "Edle Rotweinflaschen mit Weinglaesern",
    caption: "Edle Tropfen",
    span: "",
    aspect: "aspect-square",
  },
  {
    src: "/images/weinflasche-holzkiste.jpg",
    alt: "Weinflasche liebevoll in Holzkiste verpackt",
    caption: "Handverlesene Weine",
    span: "",
    aspect: "aspect-square",
  },
  {
    src: "/images/weinglaeser-sonnenuntergang.jpg",
    alt: "Verschiedene Weine im Glas bei Sonnenuntergang",
    caption: "Weinverkostung",
    span: "",
    aspect: "aspect-square",
  },
  {
    src: "/images/trauben-gruen.jpg",
    alt: "Gruene Trauben am Rebstock mit Blick auf die Weinberge",
    caption: "Im Weinberg",
    span: "",
    aspect: "aspect-square",
  },
  {
    src: "/images/weinberg-sonnenuntergang.jpg",
    alt: "Weinberge im goldenen Abendlicht",
    caption: "Goldene Stunde",
    span: "col-span-2 md:col-span-2",
    aspect: "aspect-[16/9]",
  },
  {
    src: "/images/weingut-terrasse.jpg",
    alt: "Genuss auf der Terrasse - Wein, Trauben und Abendstimmung",
    caption: "Weingut-Terrasse",
    span: "",
    aspect: "aspect-square",
  },
  {
    src: "/images/weinregal-dunkel.jpg",
    alt: "Edles Weinregal mit erlesener Flaschensammlung",
    caption: "Die Schatzkammer",
    span: "",
    aspect: "aspect-square",
  },
  {
    src: "/images/weinflaschen-holzkiste-premium.jpg",
    alt: "Premium-Weinflaschen in edler Holzkiste",
    caption: "Premium-Auswahl",
    span: "col-span-2 md:col-span-2",
    aspect: "aspect-[16/9]",
  },
  {
    src: "/images/rotwein-einschenken.jpg",
    alt: "Rotwein wird aus der Flasche ins Glas eingeschenkt",
    caption: "Weingenuss",
    span: "",
    aspect: "aspect-square",
  },
  {
    src: "/images/weinberg-panorama.jpg",
    alt: "Herbstliches Weinberg-Panorama mit Rebzeilen",
    caption: "Herbst im Weinberg",
    span: "",
    aspect: "aspect-square",
  },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section className="relative section-padding bg-gradient-warm overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] max-w-3xl h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <LuxuryReveal className="text-center mb-12 md:mb-20">
          <p className="font-[family-name:var(--font-inter)] text-[11px] tracking-[0.4em] uppercase text-gold/80 mb-6">
            Impressionen
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-cream tracking-wide">
            Momente aus dem{" "}
            <span className="italic text-gold/90">Weingut</span>
          </h2>
          <p className="font-[family-name:var(--font-cormorant)] text-lg sm:text-xl text-cream/65 max-w-2xl mx-auto mt-6">
            Einblicke in unseren Alltag zwischen Weinberg, Keller und Genuss.
          </p>
          <div className="gold-line mx-auto mt-8" />
        </LuxuryReveal>

        {/* Gallery Grid */}
        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {galleryImages.map((image, index) => (
            <StaggerItem key={index} className={image.span}>
              <button
                onClick={() => setSelectedImage(index)}
                className={`group relative overflow-hidden w-full ${image.aspect}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 image-sharp"
                  sizes={image.span ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 50vw, 25vw"}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-warmblack/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <p className="font-[family-name:var(--font-playfair)] text-sm md:text-base text-cream">
                    {image.caption}
                  </p>
                </div>
                <div className="absolute inset-2 border border-gold/0 group-hover:border-gold/20 transition-all duration-700 pointer-events-none" />
              </button>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Instagram Link */}
        <ScrollReveal className="text-center mt-12">
          <a
            href="https://www.instagram.com/weingut_rainer_bauer/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 font-[family-name:var(--font-inter)] text-[12px] tracking-[0.2em] uppercase text-cream/55 hover:text-gold transition-colors duration-500"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="5" />
              <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
            </svg>
            Mehr auf Instagram
          </a>
        </ScrollReveal>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-warmblack/95 backdrop-blur-xl flex items-center justify-center p-6"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4xl max-h-[80vh] w-full aspect-video"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].alt}
                fill
                className="object-contain image-sharp"
                sizes="90vw"
                quality={90}
              />
              <p className="absolute -bottom-10 left-1/2 -translate-x-1/2 font-[family-name:var(--font-cormorant)] text-lg text-cream/70 whitespace-nowrap">
                {galleryImages[selectedImage].caption}
              </p>
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-cream/60 hover:text-cream transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
              {selectedImage > 0 && (
                <button
                  onClick={(e) => { e.stopPropagation(); setSelectedImage(selectedImage - 1); }}
                  className="absolute left-2 sm:left-0 sm:-translate-x-14 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-gold/30 bg-warmblack/80 backdrop-blur-sm flex items-center justify-center text-gold hover:bg-gold/10 hover:border-gold/60 transition-all duration-300"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
                    <polyline points="15 18 9 12 15 6" />
                  </svg>
                </button>
              )}
              {selectedImage < galleryImages.length - 1 && (
                <button
                  onClick={(e) => { e.stopPropagation(); setSelectedImage(selectedImage + 1); }}
                  className="absolute right-2 sm:right-0 sm:translate-x-14 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-gold/30 bg-warmblack/80 backdrop-blur-sm flex items-center justify-center text-gold hover:bg-gold/10 hover:border-gold/60 transition-all duration-300"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
