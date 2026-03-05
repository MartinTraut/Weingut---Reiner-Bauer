"use client";

import Image from "next/image";
import { ScrollReveal, StaggerContainer, StaggerItem, ImageReveal, CountUp, LuxuryReveal } from "./scroll-reveal";

export default function About() {
  return (
    <section className="relative section-padding bg-gradient-dark">
      {/* Vertical Deko-Text */}
      <div className="absolute left-4 md:left-8 lg:left-12 top-1/3 z-[1] hidden lg:block">
        <span className="text-vertical font-[family-name:var(--font-inter)] text-[11px] tracking-[0.5em] uppercase text-cream/10 select-none">
          Seit 1989
        </span>
      </div>

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] max-w-3xl h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <LuxuryReveal className="text-center mb-16 md:mb-24">
          <p className="font-[family-name:var(--font-inter)] text-[11px] tracking-[0.4em] uppercase text-gold/80 mb-6">
            Unsere Geschichte
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-cream tracking-wide">
            Ein Weingut,{" "}
            <span className="italic text-gold/90">eine Familie</span>
          </h2>
          <p className="font-[family-name:var(--font-cormorant)] text-lg sm:text-xl text-cream/65 max-w-2xl mx-auto mt-6">
            Drei Generationen, ein Ziel: Weine, die das Herz Wuerttembergs
            in jedem Tropfen spuerbar machen.
          </p>
          <div className="gold-line mx-auto mt-8" />
        </LuxuryReveal>

        {/* Story Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Family Image */}
          <ImageReveal direction="left" className="relative">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/images/weingut-terrasse.jpg"
                alt="Weingut-Terrasse mit Wein, Trauben und Abendstimmung"
                fill
                className="object-cover object-center image-sharp"
                sizes="(max-width: 1024px) 100vw, 50vw"
                loading="lazy"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 50%, rgba(26,26,26,0.6) 100%), linear-gradient(0deg, transparent 80%, rgba(26,26,26,0.3) 100%)",
                }}
              />
              <div className="absolute inset-4 md:inset-6 border border-gold/15 pointer-events-none" />
              <div className="absolute inset-0 flex items-end p-8 md:p-12">
                <div>
                  <p className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.4em] uppercase text-gold/70 mb-2">
                    Gegruendet
                  </p>
                  <p className="font-[family-name:var(--font-playfair)] text-6xl md:text-7xl text-cream/90 text-shadow-luxury">
                    1989
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute -right-2 top-1/4 w-px h-1/2 bg-gradient-to-b from-transparent via-gold/20 to-transparent hidden lg:block" />
          </ImageReveal>

          {/* Right: Story Text */}
          <StaggerContainer className="space-y-8">
            <StaggerItem>
              <p className="font-[family-name:var(--font-cormorant)] text-xl md:text-2xl text-cream/85 leading-relaxed">
                Im Jahr 1989 gruendeten Rainer Bauer und seine Frau Baerbel das
                Weingut als Familienbetrieb &mdash; mit einer klaren Vision:
                Weine zu schaffen, die das Terroir und die Tradition Wuerttembergs
                in jedem Tropfen erlebbar machen.
              </p>
            </StaggerItem>

            <StaggerItem>
              <p className="font-[family-name:var(--font-cormorant)] text-lg md:text-xl text-cream/70 leading-relaxed">
                Beide bringen ihr Fachwissen als staatlich gepruefte Techniker fuer
                Weinbau und Kellerwirtschaft ein, ausgebildet an der renommierten
                Weinbauschule Weinsberg. Rainer Bauer war zuvor als Kellermeister
                bei der Weingaertner Flein-Talheim eG taetig und brachte seine
                umfassende Erfahrung in das eigene Weingut ein.
              </p>
            </StaggerItem>

            <StaggerItem>
              <div className="gold-line my-8" />
            </StaggerItem>

            <StaggerItem>
              <p className="font-[family-name:var(--font-cormorant)] text-lg md:text-xl text-cream/70 leading-relaxed">
                Heute wird das Weingut von Baerbel Bauer, Sohn Martin Bauer als
                Kellermeister und Tochter Tanja Loi-Bauer weitergefuehrt. Martin
                ueberwacht mit Sorgfalt die Reifung der Weine in Edelstahltanks
                und Barriquefaessern &mdash; stets im Einklang mit der Familientradition
                und dem Streben nach hoechster Qualitaet.
              </p>
            </StaggerItem>

            <StaggerItem>
              <div className="flex items-center gap-6 mt-8 pt-8 border-t border-gold/10">
                <div className="text-center">
                  <p className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl text-gold">
                    <CountUp target={10.5} decimals={1} />
                  </p>
                  <p className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.3em] uppercase text-cream/50 mt-1">
                    Hektar
                  </p>
                </div>
                <div className="w-px h-12 bg-gold/20" />
                <div className="text-center">
                  <p className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl text-gold">
                    <CountUp target={35} suffix="+" />
                  </p>
                  <p className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.3em] uppercase text-cream/50 mt-1">
                    Jahre
                  </p>
                </div>
                <div className="w-px h-12 bg-gold/20" />
                <div className="text-center">
                  <p className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl text-gold">
                    <CountUp target={3} />
                  </p>
                  <p className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.3em] uppercase text-cream/50 mt-1">
                    Generationen
                  </p>
                </div>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
