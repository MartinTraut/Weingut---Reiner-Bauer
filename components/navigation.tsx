"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/weingut", label: "Weingut" },
  { href: "/weine", label: "Weine" },
  { href: "/philosophie", label: "Philosophie" },
  { href: "/region", label: "Region" },
  { href: "/erlebnis", label: "Erlebnis" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

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

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  const isActive = (href: string) => pathname === href;

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
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
              className="opacity-90 invert brightness-200"
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
            {navLinks.map((link) => (
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
            ))}
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
            aria-label="Menü"
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
            <nav className="flex flex-col items-center gap-8">
              <Image
                src="/images/logo.png"
                alt="Weingut Rainer Bauer"
                width={60}
                height={52}
                className="opacity-70 invert brightness-200 mb-4"
              />
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                >
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
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-8 gold-line-wide"
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
