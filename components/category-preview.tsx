"use client";

import Image from "next/image";
import Link from "next/link";
import { getCategoryInfo, getWinesByCategory, type WineCategory } from "@/lib/wine-data";
import { ScrollReveal, ImageReveal } from "./scroll-reveal";


interface CategoryPreviewProps {
  category: WineCategory;
  position?: "left" | "right";
}

export default function CategoryPreview({
  category,
  position = "left",
}: CategoryPreviewProps) {
  const info = getCategoryInfo(category);
  const wineCount = getWinesByCategory(category).length;
  const isRight = position === "right";

  return (
    <section className="relative overflow-hidden bg-gradient-dark">
      <div className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div
            className={`grid lg:grid-cols-2 gap-10 lg:gap-20 items-center ${
              isRight ? "lg:grid-flow-dense" : ""
            }`}
          >
            {/* Image */}
            <ImageReveal
              direction={isRight ? "right" : "left"}
              className={isRight ? "lg:col-start-2" : ""}
            >
              <div className="relative aspect-[4/5] sm:aspect-[3/4] overflow-hidden">
                <Image
                  src={info.image}
                  alt={info.label}
                  fill
                  className="object-cover object-center image-sharp"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  quality={85}
                  loading="lazy"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(180deg, transparent 40%, rgba(26,26,26,0.6) 100%)",
                  }}
                />
                <div className="absolute inset-3 sm:inset-4 md:inset-6 border border-gold/15 pointer-events-none" />
              </div>
            </ImageReveal>

            {/* Text Content */}
            <div
              className={
                isRight ? "lg:col-start-1 lg:row-start-1" : ""
              }
            >
              <ScrollReveal>
                <p className="font-[family-name:var(--font-inter)] text-[11px] tracking-[0.4em] uppercase text-gold/80 mb-4 sm:mb-6">
                  {wineCount} Weine
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-cream tracking-wide mb-6 sm:mb-8 leading-[1.1]">
                  {info.label.replace("weine", "")}
                  <span className="italic text-gold/90">
                    {info.label.includes("weine") ? "weine" : ""}
                  </span>
                </h2>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <p className="font-[family-name:var(--font-cormorant)] text-lg sm:text-xl md:text-2xl text-cream/70 leading-relaxed mb-6 sm:mb-8">
                  {info.description}
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <p className="font-[family-name:var(--font-cormorant)] text-base sm:text-lg text-cream/55 italic mb-8 sm:mb-10">
                  {info.subtitle}
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.4}>
                <Link
                  href={`/weine?category=${category}`}
                  className="group inline-flex items-center gap-3 font-[family-name:var(--font-inter)] text-[11px] sm:text-[12px] tracking-[0.25em] uppercase text-gold border border-gold/30 px-6 sm:px-8 py-3 sm:py-4 hover:bg-gold/10 hover:border-gold/60 transition-all duration-500"
                >
                  Zum Sortiment
                  <span className="inline-block group-hover:translate-x-1 transition-transform duration-300">
                    &rarr;
                  </span>
                </Link>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
