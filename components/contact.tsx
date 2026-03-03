"use client";

import { useState, type FormEvent } from "react";
import { ScrollReveal } from "./scroll-reveal";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "general",
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Construct mailto link as fallback
    const subject = encodeURIComponent(
      formData.subject === "general"
        ? "Anfrage über die Website"
        : formData.subject === "wine"
        ? "Weinbestellung"
        : formData.subject === "tasting"
        ? "Weinprobe-Anfrage"
        : "Anfrage"
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nE-Mail: ${formData.email}\nTelefon: ${formData.phone}\n\n${formData.message}`
    );
    window.location.href = `mailto:[email protected]?subject=${subject}&body=${body}`;
  };

  return (
    <section id="kontakt" className="relative section-padding bg-gradient-dark overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] max-w-3xl h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-20 md:mb-28">
          <p className="font-[family-name:var(--font-inter)] text-[11px] tracking-[0.4em] uppercase text-gold/60 mb-6">
            Kontakt
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl text-cream tracking-wide">
            Besuchen Sie{" "}
            <span className="italic text-gold/80">uns</span>
          </h2>
          <div className="gold-line mx-auto mt-8" />
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: Contact Info */}
          <ScrollReveal>
            <div className="space-y-10">
              {/* Address */}
              <div className="flex items-start gap-5">
                <div className="mt-1 shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-6 h-6 text-gold/50">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-playfair)] text-xl text-cream mb-2">
                    Adresse
                  </h3>
                  <p className="font-[family-name:var(--font-cormorant)] text-lg text-cream/60 leading-relaxed">
                    Weingut Rainer Bauer
                    <br />
                    Betteläcker 1<br />
                    74388 Talheim
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-5">
                <div className="mt-1 shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-6 h-6 text-gold/50">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-playfair)] text-xl text-cream mb-2">
                    Telefon & Fax
                  </h3>
                  <a
                    href="tel:+497133960420"
                    className="font-[family-name:var(--font-cormorant)] text-lg text-cream/60 hover:text-gold transition-colors duration-300 block"
                  >
                    0 71 33 / 96 04 20
                  </a>
                  <p className="font-[family-name:var(--font-cormorant)] text-base text-cream/40">
                    Fax: 0 71 33 / 96 04 22
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-5">
                <div className="mt-1 shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-6 h-6 text-gold/50">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-playfair)] text-xl text-cream mb-2">
                    E-Mail
                  </h3>
                  <a
                    href="mailto:[email protected]"
                    className="font-[family-name:var(--font-cormorant)] text-lg text-cream/60 hover:text-gold transition-colors duration-300"
                  >
                    [email protected]
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-5">
                <div className="mt-1 shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-6 h-6 text-gold/50">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-playfair)] text-xl text-cream mb-2">
                    Öffnungszeiten
                  </h3>
                  <div className="space-y-1.5">
                    <div className="flex justify-between gap-8">
                      <span className="font-[family-name:var(--font-cormorant)] text-base text-cream/40">
                        Montag – Freitag
                      </span>
                      <span className="font-[family-name:var(--font-cormorant)] text-base text-cream/60">
                        18:00 – 20:00
                      </span>
                    </div>
                    <div className="flex justify-between gap-8">
                      <span className="font-[family-name:var(--font-cormorant)] text-base text-cream/40">
                        Samstag
                      </span>
                      <span className="font-[family-name:var(--font-cormorant)] text-base text-cream/60">
                        09:30 – 16:00
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="flex items-start gap-5">
                <div className="mt-1 shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-6 h-6 text-gold/50">
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <circle cx="12" cy="12" r="5" />
                    <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-playfair)] text-xl text-cream mb-2">
                    Folgen Sie uns
                  </h3>
                  <a
                    href="https://www.instagram.com/weingut_rainer_bauer/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-[family-name:var(--font-cormorant)] text-lg text-cream/60 hover:text-gold transition-colors duration-300"
                  >
                    @weingut_rainer_bauer
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Contact Form */}
          <ScrollReveal direction="right">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="font-[family-name:var(--font-inter)] text-[11px] tracking-[0.2em] uppercase text-cream/40 block mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full bg-transparent border-b border-gold/15 focus:border-gold/50 py-3 text-cream font-[family-name:var(--font-cormorant)] text-lg outline-none transition-colors duration-300 placeholder:text-cream/20"
                  placeholder="Ihr Name"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="font-[family-name:var(--font-inter)] text-[11px] tracking-[0.2em] uppercase text-cream/40 block mb-2">
                    E-Mail *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full bg-transparent border-b border-gold/15 focus:border-gold/50 py-3 text-cream font-[family-name:var(--font-cormorant)] text-lg outline-none transition-colors duration-300 placeholder:text-cream/20"
                    placeholder="ihre@email.de"
                  />
                </div>
                <div>
                  <label className="font-[family-name:var(--font-inter)] text-[11px] tracking-[0.2em] uppercase text-cream/40 block mb-2">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full bg-transparent border-b border-gold/15 focus:border-gold/50 py-3 text-cream font-[family-name:var(--font-cormorant)] text-lg outline-none transition-colors duration-300 placeholder:text-cream/20"
                    placeholder="Ihre Telefonnummer"
                  />
                </div>
              </div>

              <div>
                <label className="font-[family-name:var(--font-inter)] text-[11px] tracking-[0.2em] uppercase text-cream/40 block mb-2">
                  Anliegen
                </label>
                <select
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  className="w-full bg-transparent border-b border-gold/15 focus:border-gold/50 py-3 text-cream font-[family-name:var(--font-cormorant)] text-lg outline-none transition-colors duration-300 appearance-none cursor-pointer"
                >
                  <option value="general" className="bg-warmblack text-cream">
                    Allgemeine Anfrage
                  </option>
                  <option value="wine" className="bg-warmblack text-cream">
                    Weinbestellung
                  </option>
                  <option value="tasting" className="bg-warmblack text-cream">
                    Weinprobe
                  </option>
                  <option value="event" className="bg-warmblack text-cream">
                    Veranstaltung
                  </option>
                </select>
              </div>

              <div>
                <label className="font-[family-name:var(--font-inter)] text-[11px] tracking-[0.2em] uppercase text-cream/40 block mb-2">
                  Nachricht *
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full bg-transparent border-b border-gold/15 focus:border-gold/50 py-3 text-cream font-[family-name:var(--font-cormorant)] text-lg outline-none transition-colors duration-300 resize-none placeholder:text-cream/20"
                  placeholder="Ihre Nachricht an uns..."
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto font-[family-name:var(--font-inter)] text-[12px] tracking-[0.25em] uppercase text-warmblack bg-gold hover:bg-gold-light px-12 py-4 transition-all duration-500 mt-4"
              >
                Nachricht senden
              </button>
            </form>
          </ScrollReveal>
        </div>

        {/* Google Maps */}
        <ScrollReveal className="mt-20 md:mt-28">
          <div className="relative border border-gold/10 overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2611.5!2d9.193!3d49.084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4799b3f8d3a0f0a1%3A0x0!2sBettel%C3%A4cker%201%2C%2074388%20Talheim!5e0!3m2!1sde!2sde!4v1"
              width="100%"
              height="400"
              style={{ border: 0, filter: "invert(0.92) hue-rotate(180deg) saturate(0.3) brightness(0.8)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Weingut Rainer Bauer — Standort"
              className="w-full"
            />
            {/* Map overlay for branding consistency */}
            <div className="absolute inset-0 pointer-events-none border border-gold/10" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
