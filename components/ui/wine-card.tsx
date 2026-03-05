"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { type Wine, getCategoryImage } from "@/lib/wine-data";

interface WineCardProps {
  wine: Wine;
  variant?: "bestseller" | "grid";
  index?: number;
  onClick?: () => void;
}

export default function WineCard({
  wine,
  variant = "grid",
  index = 0,
  onClick,
}: WineCardProps) {
  const categoryImage = getCategoryImage(wine.category);
  const isBestseller = variant === "bestseller";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group relative bg-warmblack/50 border border-gold/8 wine-card-hover overflow-hidden cursor-pointer flex flex-col"
      onClick={onClick}
    >
      {/* Category Image */}
      <div className={`relative overflow-hidden ${isBestseller ? "h-48 sm:h-52" : "h-40 sm:h-44"}`}>
        <Image
          src={categoryImage}
          alt={wine.name}
          fill
          className="object-cover object-center group-hover:scale-105 transition-transform duration-700 image-sharp"
          sizes={isBestseller ? "(max-width: 768px) 100vw, 33vw" : "(max-width: 768px) 50vw, 25vw"}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-warmblack/80 via-warmblack/20 to-transparent" />

        {wine.isBestseller && (
          <div className="absolute top-3 right-3">
            <span className="font-[family-name:var(--font-inter)] text-[9px] tracking-[0.2em] uppercase text-warmblack bg-gold px-3 py-1">
              Bestseller
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 sm:p-6">
        <h3 className="font-[family-name:var(--font-playfair)] text-lg sm:text-xl text-cream italic group-hover:text-gold transition-colors duration-500 mb-2">
          {wine.name}
        </h3>

        <p className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.15em] uppercase text-gold/55 mb-3">
          {wine.style}
        </p>

        <p className="font-[family-name:var(--font-cormorant)] text-base text-cream/60 leading-relaxed mb-4 flex-1 line-clamp-3">
          {wine.description}
        </p>

        <div className="mt-auto pt-4 border-t border-gold/8">
          {wine.price ? (
            <p className="font-[family-name:var(--font-playfair)] text-xl text-gold mb-3">
              {wine.price}
            </p>
          ) : (
            <p className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.15em] uppercase text-cream/45 mb-3">
              Preis auf Anfrage
            </p>
          )}

          {isBestseller && (
            <Link
              href="/kontakt"
              className="block text-center font-[family-name:var(--font-inter)] text-[11px] tracking-[0.2em] uppercase text-cream bg-gradient-bordeaux px-5 py-2.5 hover:brightness-125 transition-all duration-500"
              onClick={(e) => e.stopPropagation()}
            >
              Anfragen
            </Link>
          )}
        </div>

        <div className="absolute bottom-0 left-0 w-0 h-px bg-gold/40 transition-all duration-700 group-hover:w-full" />
      </div>
    </motion.div>
  );
}
