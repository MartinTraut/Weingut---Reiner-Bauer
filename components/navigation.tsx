"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/weingut", label: "Weingut" },
  { href: "/weine", label: "Weine", hasDropdown: true },
  { href: "/philosophie", label: "Philosophie" },
  { href: "/region", label: "Region" },
  { href: "/erlebnis", label: "Erlebnis" },
  { href: "/kontakt", label: "Kontakt" },
];

const wineCategories = [
  { key: "rot", label: "Rotweine", href: "/weine?category=rot" },
  { key: "weiss", label: "Weissweine", href: "/weine?category=weiss" },
  { key: "sekt", label: "Sekt", href: "/weine?category=sekt" },
  { key: "destillate", label: "Destillate & Likoere", href: "/weine?category=destillate" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isWineDropdownOpen, setIsWineDropdownOpen] = useState(false);
  const [isMobileWineOpen, setIsMobileWineOpen] = useState(false);
  const pathname = usePathname();
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  useEffect(() => {
    setIsMobileOpen(false);
    setIsWineDropdownOpen(false);
    setIsMobileWineOpen(false);
  }, [pathname]);

  const isActive = (href: string) => pathname === href;

  const handleDropdownEnter = useCallback(() => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setIsWineDropdownOpen(true);
  }, []);

  const handleDropdownLeave = useCallback(() => {
    dropdownTimeout.current = setTimeout(() => {
      setIsWineDropdownOpen(false);
    }, 200);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          isScrolled
            ? "bg-warmblack/95 backdrop-blur-md border-b border-gold/10"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-[1400px] mx-auto flex items-center justify-between px-6 md:px-10 py-4">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="Weingut Rainer Bauer"
              width={42}
              height={36}
              className="opacity-90 invert brightness-200 object-contain"
              style={{ maxHeight: "50px" }}
            />
            <div className="flex flex-col items-start">
              <span className="font-[family-name:var(--font-playfair)] text-base md:text-lg tracking-[0.12em] text-cream uppercase leading-tight">
                Weingut
              </span>
              <span className="font-[family-name:var(--font-playfair)] text-[10px] md:text-xs tracking-[0.25em] text-gold/70 uppercase">
                Rainer Bauer
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={handleDropdownEnter}
                  onMouseLeave={handleDropdownLeave}
                >
                  <Link
                    href={link.href}
                    className={`font-[family-name:var(--font-inter)] text-[13px] tracking-[0.2em] uppercase transition-colors duration-500 relative group ${
                      isActive(link.href) || pathname?.startsWith("/weine")
                        ? "text-gold"
                        : "text-cream/70 hover:text-gold"
                    }`}
                  >
                    {link.label}
                    <span
                      className={`absolute -bottom-1 left-0 h-px bg-gold transition-all duration-500 ${
                        isActive(link.href) || pathname?.startsWith("/weine")
                          ? "w-full"
                          : "w-0 group-hover:w-full"
                      }`}
                    />
                  </Link>

                  {/* Dropdown */}
                  <AnimatePresence>
                    {isWineDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="absolute top-full left-1/2 -translate-x-1/2 pt-4"
                      >
                        <div className="bg-warmblack/95 backdrop-blur-md border border-gold/10 border-t-gold/40 min-w-[220px]">
                          <div className="h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
                          <div className="py-2">
                            {wineCategories.map((cat) => (
                              <Link
                                key={cat.key}
                                href={cat.href}
                                className="block px-6 py-3 font-[family-name:var(--font-inter)] text-[12px] tracking-[0.15em] uppercase text-cream/65 hover:text-gold hover:bg-gold/5 transition-all duration-300"
                              >
                                {cat.label}
                              </Link>
                            ))}
                          </div>
                          <div className="px-6 py-3 border-t border-gold/8">
                            <Link
                              href="/weine"
                              className="font-[family-name:var(--font-inter)] text-[11px] tracking-[0.15em] uppercase text-gold/70 hover:text-gold transition-colors duration-300"
                            >
                              Alle Weine
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-[family-name:var(--font-inter)] text-[13px] tracking-[0.2em] uppercase transition-colors duration-500 relative group ${
                    isActive(link.href)
                      ? "text-gold"
                      : "text-cream/70 hover:text-gold"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-px bg-gold transition-all duration-500 ${
                      isActive(link.href) ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              )
            )}
          </div>

          {/* CTA Desktop */}
          <Link
            href="/kontakt"
            className="hidden lg:inline-flex font-[family-name:var(--font-inter)] text-[12px] tracking-[0.2em] uppercase text-gold border border-gold/30 px-6 py-2.5 hover:bg-gold/10 hover:border-gold/60 transition-all duration-500"
          >
            Besuch planen
          </Link>

          {/* Mobile Burger */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="lg:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-1.5 z-[60]"
            aria-label="Menue oeffnen"
          >
            <motion.span
              animate={isMobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="w-6 h-px bg-cream block"
              transition={{ duration: 0.3 }}
            />
            <motion.span
              animate={isMobileOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-6 h-px bg-cream block"
              transition={{ duration: 0.3 }}
            />
            <motion.span
              animate={isMobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="w-6 h-px bg-cream block"
              transition={{ duration: 0.3 }}
            />
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-40 bg-warmblack/98 backdrop-blur-xl flex items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-6">
              <Image
                src="/images/logo.png"
                alt="Weingut Rainer Bauer"
                width={60}
                height={52}
                className="opacity-70 invert brightness-200 mb-4 object-contain"
              />
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  className="flex flex-col items-center"
                >
                  {link.hasDropdown ? (
                    <>
                      <button
                        onClick={() => setIsMobileWineOpen(!isMobileWineOpen)}
                        className={`font-[family-name:var(--font-playfair)] text-3xl tracking-[0.15em] transition-colors duration-300 flex items-center gap-2 ${
                          pathname?.startsWith("/weine")
                            ? "text-gold"
                            : "text-cream/80 hover:text-gold"
                        }`}
                      >
                        {link.label}
                        <motion.svg
                          animate={{ rotate: isMobileWineOpen ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          className="w-5 h-5"
                        >
                          <path d="M6 9l6 6 6-6" />
                        </motion.svg>
                      </button>
                      <AnimatePresence>
                        {isMobileWineOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="flex flex-col items-center gap-3 pt-4">
                              {wineCategories.map((cat) => (
                                <Link
                                  key={cat.key}
                                  href={cat.href}
                                  className="font-[family-name:var(--font-inter)] text-sm tracking-[0.15em] uppercase text-cream/50 hover:text-gold transition-colors duration-300"
                                >
                                  {cat.label}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      className={`font-[family-name:var(--font-playfair)] text-3xl tracking-[0.15em] transition-colors duration-300 ${
                        isActive(link.href)
                          ? "text-gold"
                          : "text-cream/80 hover:text-gold"
                      }`}
                    >
                      {link.label}
                    </Link>
                  )}
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-6 gold-line-wide"
              />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <Link
                  href="/kontakt"
                  className="font-[family-name:var(--font-inter)] text-sm tracking-[0.25em] uppercase text-gold border border-gold/30 px-8 py-3 mt-4 hover:bg-gold/10 transition-all duration-300 inline-block"
                >
                  Besuch planen
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
