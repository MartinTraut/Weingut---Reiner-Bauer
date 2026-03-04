"use client";

import Link from "next/link";
import { ScrollReveal, LuxuryReveal } from "./scroll-reveal";

export default function Experience() {
  return (
    <section className="relative section-padding bg-gradient-wine overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] max-w-3xl h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <LuxuryReveal className="text-center mb-20 md:mb-28">
          <p className="font-[family-name:var(--font-inter)] text-[11px] tracking-[0.4em] uppercase text-gold/80 mb-6">
            Besuchen Sie uns
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl text-cream tracking-wide">
            Das{" "}
            <span className="italic text-gold/90">Erlebnis</span>
          </h2>
          <p className="font-[family-name:var(--font-cormorant)] text-lg md:text-xl text-cream/65 max-w-2xl mx-auto mt-6">
            Erleben Sie unser Weingut persönlich — verkosten Sie unsere Weine
            direkt an der Württemberger Weinstraße.
          </p>
          <div className="gold-line mx-auto mt-8" />
        </LuxuryReveal>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 md:gap-10">
          {/* Verkauf ab Hof */}
          <ScrollReveal delay={0}>
            <div className="group h-full p-8 md:p-10 border border-gold/10 hover:border-gold/25 transition-all duration-700 bg-warmblack/30 flex flex-col luxury-card">
              <div className="mb-6">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-8 h-8 text-gold/60">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              </div>
              <h3 className="font-[family-name:var(--font-playfair)] text-xl md:text-2xl text-cream mb-4 tracking-wide">
                Verkauf ab Hof
              </h3>
              <p className="font-[family-name:var(--font-cormorant)] text-lg text-cream/65 leading-relaxed mb-8 flex-1">
                Besuchen Sie unser Weingut in Talheim und entdecken Sie unsere
                Weine vor Ort. Wir beraten Sie gerne persönlich und finden den
                perfekten Wein für jeden Anlass.
              </p>
              <div className="border-t border-gold/10 pt-6 space-y-3">
                <div className="flex justify-between">
                  <span className="font-[family-name:var(--font-inter)] text-[12px] text-cream/50">
                    Mo – Fr
                  </span>
                  <span className="font-[family-name:var(--font-cormorant)] text-base text-cream/80">
                    18:00 – 20:00 Uhr
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="font-[family-name:var(--font-inter)] text-[12px] text-cream/50">
                    Samstag
                  </span>
                  <span className="font-[family-name:var(--font-cormorant)] text-base text-cream/80">
                    09:30 – 16:00 Uhr
                  </span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Weinprobe */}
          <ScrollReveal delay={0.15}>
            <div className="group h-full p-8 md:p-10 border border-gold/10 hover:border-gold/25 transition-all duration-700 bg-warmblack/30 flex flex-col luxury-card">
              <div className="mb-6">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-8 h-8 text-gold/60">
                  <path d="M8 22h8M12 18v4M7 10h10l-1-7H8l-1 7zM7 10a5 5 0 0 0 10 0" />
                </svg>
              </div>
              <h3 className="font-[family-name:var(--font-playfair)] text-xl md:text-2xl text-cream mb-4 tracking-wide">
                Weinprobe
              </h3>
              <p className="font-[family-name:var(--font-cormorant)] text-lg text-cream/65 leading-relaxed mb-8 flex-1">
                Erleben Sie eine geführte Verkostung unserer Weine. Erfahren
                Sie die Geschichten hinter jedem Tropfen und entdecken Sie Ihre
                persönlichen Favoriten.
              </p>
              <div className="border-t border-gold/10 pt-6">
                <p className="font-[family-name:var(--font-inter)] text-[11px] tracking-[0.15em] text-cream/50">
                  Auf Anfrage für Gruppen möglich
                </p>
                <a
                  href="mailto:[email protected]"
                  className="inline-block mt-4 font-[family-name:var(--font-inter)] text-[12px] tracking-[0.2em] uppercase text-gold border-b border-gold/30 pb-1 hover:border-gold/60 transition-all duration-500"
                >
                  Anfragen
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Events */}
          <ScrollReveal delay={0.3}>
            <div className="group h-full p-8 md:p-10 border border-gold/15 hover:border-gold/30 transition-all duration-700 bg-wine-dark/10 flex flex-col relative overflow-hidden luxury-card">
              {/* Highlight badge */}
              <div className="absolute top-0 right-0">
                <div className="bg-gold/90 text-warmblack px-4 py-1.5">
                  <span className="font-[family-name:var(--font-inter)] text-[9px] tracking-[0.2em] uppercase font-medium">
                    Aktuell
                  </span>
                </div>
              </div>
              <div className="mb-6">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-8 h-8 text-gold/60">
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
              </div>
              <h3 className="font-[family-name:var(--font-playfair)] text-xl md:text-2xl text-cream mb-2 tracking-wide">
                KellerKücheKlang
              </h3>
              <p className="font-[family-name:var(--font-inter)] text-[11px] tracking-[0.15em] text-gold/70 mb-4">
                6. & 7. März 2026
              </p>
              <p className="font-[family-name:var(--font-cormorant)] text-lg text-cream/65 leading-relaxed mb-8 flex-1">
                Kitchen Party im Restaurant &bdquo;Wo der Hahn kräht&ldquo; in
                Flein. Wandeln Sie durch Küche und Weinkeller, genießen Sie unsere
                Weine, erlesene Häppchen und harmonische Wein-Speise-Kombinationen
                bei Live-Musik der &bdquo;Drive Combo&ldquo;.
              </p>
              <div className="border-t border-gold/10 pt-6">
                <p className="font-[family-name:var(--font-inter)] text-[11px] tracking-[0.15em] text-cream/50 mb-3">
                  Tickets per E-Mail
                </p>
                <a
                  href="mailto:[email protected]?subject=KellerKücheKlang Tickets"
                  className="inline-block font-[family-name:var(--font-inter)] text-[12px] tracking-[0.2em] uppercase text-warmblack bg-gold hover:bg-gold-light px-8 py-3 transition-all duration-500 hover:shadow-[0_0_30px_rgba(197,164,126,0.2)]"
                >
                  Tickets anfragen
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Württemberger Weinstraße Note */}
        <ScrollReveal className="mt-20 text-center">
          <div className="inline-flex items-center gap-4 border border-gold/10 px-8 py-4 bg-warmblack/20">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-5 h-5 text-gold/50 shrink-0">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <p className="font-[family-name:var(--font-cormorant)] text-lg text-cream/65">
              Direkt an der{" "}
              <span className="text-gold/80 italic">
                Württemberger Weinstraße
              </span>
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
