"use client";

import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "./scroll-reveal";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-warmblack border-t border-gold/10">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <ScrollReveal className="lg:col-span-1">
            <div>
              <Image
                src="/images/logo.png"
                alt="Weingut Rainer Bauer"
                width={60}
                height={52}
                className="opacity-80 invert brightness-200 mb-4"
              />
              <p className="font-[family-name:var(--font-playfair)] text-xl tracking-[0.15em] text-cream uppercase">
                Weingut
              </p>
              <p className="font-[family-name:var(--font-playfair)] text-sm tracking-[0.3em] text-gold/70 uppercase mt-1">
                Rainer Bauer
              </p>
              <div className="gold-line mt-6 mb-6" />
              <p className="font-[family-name:var(--font-cormorant)] text-base text-cream/50 leading-relaxed">
                Familienweingut mit Leidenschaft.
                <br />
                Seit 1989 in Talheim, Württemberg.
              </p>
              {/* Trust Badges */}
              <div className="flex items-center gap-4 mt-6 pt-6 border-t border-gold/5">
                <Image
                  src="/images/badge-wuerttemberger.png"
                  alt="Mitglied Württemberger Weingüter e.V."
                  width={36}
                  height={29}
                  className="opacity-50 hover:opacity-80 transition-opacity"
                />
                <Image
                  src="/images/badge-weinimpuls.png"
                  alt="Mitglied Wein im Puls — Junge Württemberger"
                  width={36}
                  height={28}
                  className="opacity-50 hover:opacity-80 transition-opacity"
                />
                <Image
                  src="/images/badge-wirwinzer.png"
                  alt="Im Wein-Onlineshop WirWinzer"
                  width={50}
                  height={10}
                  className="opacity-50 hover:opacity-80 transition-opacity"
                />
              </div>
            </div>
          </ScrollReveal>

          {/* Navigation */}
          <ScrollReveal delay={0.1}>
            <div>
              <h4 className="font-[family-name:var(--font-inter)] text-[11px] tracking-[0.3em] uppercase text-gold/60 mb-6">
                Navigation
              </h4>
              <nav className="space-y-3">
                {[
                  { href: "/weingut", label: "Das Weingut" },
                  { href: "/weine", label: "Unsere Weine" },
                  { href: "/philosophie", label: "Philosophie" },
                  { href: "/region", label: "Region" },
                  { href: "/erlebnis", label: "Erlebnis" },
                  { href: "/kontakt", label: "Kontakt" },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block font-[family-name:var(--font-cormorant)] text-base text-cream/50 hover:text-gold transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          </ScrollReveal>

          {/* Contact */}
          <ScrollReveal delay={0.2}>
            <div>
              <h4 className="font-[family-name:var(--font-inter)] text-[11px] tracking-[0.3em] uppercase text-gold/60 mb-6">
                Kontakt
              </h4>
              <div className="space-y-3 font-[family-name:var(--font-cormorant)] text-base text-cream/50">
                <p>Betteläcker 1</p>
                <p>74388 Talheim</p>
                <a
                  href="tel:+497133960420"
                  className="block hover:text-gold transition-colors duration-300"
                >
                  0 71 33 / 96 04 20
                </a>
                <a
                  href="mailto:[email protected]"
                  className="block hover:text-gold transition-colors duration-300"
                >
                  [email protected]
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Hours & Social */}
          <ScrollReveal delay={0.3}>
            <div>
              <h4 className="font-[family-name:var(--font-inter)] text-[11px] tracking-[0.3em] uppercase text-gold/60 mb-6">
                Öffnungszeiten
              </h4>
              <div className="space-y-2 font-[family-name:var(--font-cormorant)] text-base text-cream/50 mb-8">
                <div className="flex justify-between">
                  <span>Mo – Fr</span>
                  <span className="text-cream/65">18–20 Uhr</span>
                </div>
                <div className="flex justify-between">
                  <span>Samstag</span>
                  <span className="text-cream/65">9:30–16 Uhr</span>
                </div>
              </div>

              <h4 className="font-[family-name:var(--font-inter)] text-[11px] tracking-[0.3em] uppercase text-gold/60 mb-4">
                Social Media
              </h4>
              <a
                href="https://www.instagram.com/weingut_rainer_bauer/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-cream/50 hover:text-gold transition-colors duration-300"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
                </svg>
                <span className="font-[family-name:var(--font-cormorant)] text-base">
                  Instagram
                </span>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gold/5">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.2em] text-cream/30">
            &copy; {currentYear} Weingut Rainer Bauer. Alle Rechte vorbehalten.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.15em] text-cream/30 hover:text-cream/50 transition-colors"
            >
              Impressum
            </a>
            <a
              href="#"
              className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.15em] text-cream/30 hover:text-cream/50 transition-colors"
            >
              Datenschutz
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
