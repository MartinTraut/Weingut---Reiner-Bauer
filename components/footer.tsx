"use client";

import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "./scroll-reveal";


export default function Footer() {
  return (
    <footer className="relative bg-warmblack">
      <div className="h-px bg-gradient-to-r from-transparent via-gold/15 to-transparent" />

      {/* Main Footer — 4 columns */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Column 1: Logo & Tagline */}
          <ScrollReveal>
            <div>
              <Image
                src="/images/logo.png"
                alt="Weingut Rainer Bauer"
                width={60}
                height={52}
                className="opacity-80 invert brightness-200 mb-4 object-contain"
                style={{ maxHeight: "60px" }}
              />
              <p className="font-[family-name:var(--font-playfair)] text-xl tracking-[0.15em] text-cream uppercase">
                Weingut
              </p>
              <p className="font-[family-name:var(--font-playfair)] text-sm tracking-[0.3em] text-gold/70 uppercase mt-1">
                Rainer Bauer
              </p>
              <div className="gold-line mt-6 mb-6" />
              <p className="font-[family-name:var(--font-cormorant)] text-base text-cream/60 leading-relaxed">
                Wuerttemberger Wein mit Seele.
                <br />
                Familienweingut seit 1989.
              </p>
              {/* Trust Badges */}
              <div className="flex items-center gap-4 mt-6 pt-6 border-t border-gold/8">
                <Image
                  src="/images/badge-wuerttemberger.png"
                  alt="Mitglied Wuerttemberger Weingueter e.V."
                  width={48}
                  height={40}
                  className="opacity-60 hover:opacity-90 transition-opacity object-contain"
                  style={{ maxHeight: "60px" }}
                />
                <Image
                  src="/images/badge-weinimpuls.png"
                  alt="Mitglied Wein im Puls"
                  width={48}
                  height={38}
                  className="opacity-60 hover:opacity-90 transition-opacity object-contain"
                  style={{ maxHeight: "60px" }}
                />
                <Image
                  src="/images/badge-wirwinzer.png"
                  alt="Im Wein-Onlineshop WirWinzer"
                  width={64}
                  height={16}
                  className="opacity-60 hover:opacity-90 transition-opacity object-contain"
                  style={{ maxHeight: "60px" }}
                />
              </div>
            </div>
          </ScrollReveal>

          {/* Column 2: Navigation */}
          <ScrollReveal delay={0.1}>
            <div>
              <h4 className="font-[family-name:var(--font-inter)] text-[11px] tracking-[0.3em] uppercase text-gold/60 mb-6">
                Navigation
              </h4>
              <nav className="space-y-3">
                {[
                  { href: "/weingut", label: "Weingut" },
                  { href: "/weine", label: "Weine" },
                  { href: "/philosophie", label: "Philosophie" },
                  { href: "/region", label: "Region" },
                  { href: "/erlebnis", label: "Erlebnis" },
                  { href: "/galerie", label: "Galerie" },
                  { href: "/kontakt", label: "Kontakt" },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block font-[family-name:var(--font-cormorant)] text-base text-cream/55 hover:text-gold transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          </ScrollReveal>

          {/* Column 3: Kontakt */}
          <ScrollReveal delay={0.2}>
            <div>
              <h4 className="font-[family-name:var(--font-inter)] text-[11px] tracking-[0.3em] uppercase text-gold/60 mb-6">
                Kontakt
              </h4>
              <div className="space-y-3 font-[family-name:var(--font-cormorant)] text-base text-cream/55">
                <p>Weingut Rainer Bauer</p>
                <p>Bettelaecker 1</p>
                <p>74388 Talheim</p>
                <div className="pt-2">
                  <a
                    href="tel:+497133960420"
                    className="block hover:text-gold transition-colors duration-300"
                  >
                    0 71 33 / 96 04 20
                  </a>
                  <a
                    href="mailto:[email protected]"
                    className="block hover:text-gold transition-colors duration-300 mt-1"
                  >
                    [email protected]
                  </a>
                </div>
                <div className="pt-3">
                  <a
                    href="https://www.instagram.com/weingut_rainer_bauer/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-cream/55 hover:text-gold transition-colors duration-300"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
                      <rect x="2" y="2" width="20" height="20" rx="5" />
                      <circle cx="12" cy="12" r="5" />
                      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
                    </svg>
                    <span>Instagram</span>
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Column 4: Oeffnungszeiten */}
          <ScrollReveal delay={0.3}>
            <div>
              <h4 className="font-[family-name:var(--font-inter)] text-[11px] tracking-[0.3em] uppercase text-gold/60 mb-6">
                Oeffnungszeiten
              </h4>
              <div className="space-y-3 font-[family-name:var(--font-cormorant)] text-base text-cream/55">
                <div className="flex justify-between gap-4">
                  <span>Mo - Fr</span>
                  <span className="text-cream/75">18:00 - 20:00</span>
                </div>
                <div className="flex justify-between gap-4">
                  <span>Samstag</span>
                  <span className="text-cream/75">09:30 - 16:00</span>
                </div>
                <div className="pt-3">
                  <p className="text-cream/40 text-sm leading-relaxed">
                    Und nach telefonischer Vereinbarung
                  </p>
                </div>
              </div>
              <div className="mt-8">
                <Link
                  href="/kontakt"
                  className="inline-flex font-[family-name:var(--font-inter)] text-[11px] tracking-[0.2em] uppercase text-gold border border-gold/25 px-6 py-2.5 hover:bg-gold/10 hover:border-gold/50 transition-all duration-500"
                >
                  Besuch planen
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gold/8">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-[family-name:var(--font-inter)] text-[11px] tracking-[0.15em] text-cream/35">
            &copy; 2026 Weingut Rainer Bauer. Alle Rechte vorbehalten.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="font-[family-name:var(--font-inter)] text-[11px] tracking-[0.15em] text-cream/35 hover:text-cream/60 transition-colors"
            >
              Impressum
            </a>
            <a
              href="#"
              className="font-[family-name:var(--font-inter)] text-[11px] tracking-[0.15em] text-cream/35 hover:text-cream/60 transition-colors"
            >
              Datenschutz
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
