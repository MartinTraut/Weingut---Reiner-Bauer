"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { type ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
  className?: string;
}

export default function PageTransition({ children, className = "" }: PageTransitionProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        ease: [0.25, 0.4, 0.25, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

interface PageHeaderProps {
  title: string;
  titleAccent?: string;
  subtitle?: string;
  backgroundImage: string;
  backgroundAlt: string;
}

export function PageHeader({
  title,
  titleAccent,
  subtitle,
  backgroundImage,
  backgroundAlt,
}: PageHeaderProps) {
  return (
    <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
      <motion.div
        initial={{ scale: 1.15, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.8, ease: [0.25, 0.4, 0.25, 1] }}
        className="absolute inset-0"
      >
        <Image
          src={backgroundImage}
          alt={backgroundAlt}
          fill
          priority
          className="object-cover image-sharp"
          sizes="100vw"
        />
      </motion.div>

      <div
        className="absolute inset-0 z-[1]"
        style={{
          background: `
            linear-gradient(180deg, rgba(12, 10, 9, 0.7) 0%, rgba(12, 10, 9, 0.4) 40%, rgba(12, 10, 9, 0.8) 100%),
            radial-gradient(ellipse 60% 50% at 50% 50%, transparent 0%, rgba(12, 10, 9, 0.4) 100%)
          `,
        }}
      />

      {/* Decorative lines */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-gold/30 to-transparent z-[2] origin-top"
      />

      <div className="relative z-10 text-center px-6">
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-[family-name:var(--font-inter)] text-[11px] md:text-[12px] tracking-[0.4em] uppercase text-gold/80 mb-6"
          >
            {subtitle}
          </motion.p>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="font-[family-name:var(--font-playfair)] text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-cream tracking-[0.04em] leading-[0.95] text-shadow-luxury"
        >
          {title}
          {titleAccent && (
            <>
              <br />
              <span className="text-gradient-gold italic">{titleAccent}</span>
            </>
          )}
        </motion.h1>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 1.0 }}
          className="gold-line-wide mx-auto mt-8"
        />
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-warmblack to-transparent z-[2]" />
    </section>
  );
}
