"use client";

import { motion, useInView, useMotionValue, useSpring, type Variants } from "framer-motion";
import { type ReactNode, useRef, useEffect, useState } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number;
  once?: boolean;
}

const getVariants = (
  direction: string,
  distance: number = 40
): Variants => {
  const directions: Record<string, { x?: number; y?: number }> = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
    none: {},
  };

  return {
    hidden: {
      opacity: 0,
      ...directions[direction],
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
    },
  };
};

export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 0.8,
  once = true,
}: ScrollRevealProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-80px" }}
      variants={getVariants(direction)}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.4, 0.25, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerContainer({
  children,
  className = "",
  staggerDelay = 0.1,
}: {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.7,
            ease: [0.25, 0.4, 0.25, 1],
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function ParallaxSection({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ y: 0 }}
      whileInView={{ y: 0 }}
      viewport={{ once: false }}
      style={{ willChange: "transform" }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 30,
      }}
    >
      {children}
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   LUXURY ANIMATIONS
   ═══════════════════════════════════════════════════════════════ */

/** Gold line reveals from center before content fades in */
export function LuxuryReveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={`relative ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
    >
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent"
        variants={{
          hidden: { width: 0, opacity: 0 },
          visible: {
            width: "80%",
            opacity: 1,
            transition: { duration: 1, delay, ease: [0.25, 0.4, 0.25, 1] },
          },
        }}
      />
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 25 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, delay: delay + 0.4, ease: [0.25, 0.4, 0.25, 1] },
          },
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

/** Image reveal with golden curtain clip-path */
export function ImageReveal({
  children,
  className = "",
  delay = 0,
  direction = "left",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "left" | "right" | "up" | "down";
}) {
  const clipPaths: Record<string, { from: string; to: string }> = {
    left: {
      from: "inset(0 100% 0 0)",
      to: "inset(0 0% 0 0)",
    },
    right: {
      from: "inset(0 0 0 100%)",
      to: "inset(0 0 0 0%)",
    },
    up: {
      from: "inset(100% 0 0 0)",
      to: "inset(0% 0 0 0)",
    },
    down: {
      from: "inset(0 0 100% 0)",
      to: "inset(0 0 0% 0)",
    },
  };

  const clip = clipPaths[direction];

  return (
    <motion.div
      className={`overflow-hidden ${className}`}
      initial={{ clipPath: clip.from, opacity: 0 }}
      whileInView={{ clipPath: clip.to, opacity: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 1.2,
        delay,
        ease: [0.25, 0.4, 0.25, 1],
      }}
    >
      <motion.div
        initial={{ scale: 1.15 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.6, delay, ease: [0.25, 0.4, 0.25, 1] }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

/** Word-by-word text reveal */
export function TextReveal({
  text,
  className = "",
  delay = 0,
  staggerDelay = 0.04,
  tag: Tag = "p",
}: {
  text: string;
  className?: string;
  delay?: number;
  staggerDelay?: number;
  tag?: "p" | "h1" | "h2" | "h3" | "h4" | "span";
}) {
  const words = text.split(" ");

  return (
    <Tag className={className}>
      <motion.span
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: staggerDelay,
              delayChildren: delay,
            },
          },
        }}
      >
        {words.map((word, i) => (
          <motion.span
            key={i}
            className="inline-block mr-[0.3em]"
            variants={{
              hidden: { opacity: 0, y: 15, filter: "blur(4px)" },
              visible: {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                transition: {
                  duration: 0.6,
                  ease: [0.25, 0.4, 0.25, 1],
                },
              },
            }}
          >
            {word}
          </motion.span>
        ))}
      </motion.span>
    </Tag>
  );
}

/** Animated number counter */
export function CountUp({
  target,
  suffix = "",
  prefix = "",
  className = "",
  duration = 2,
  decimals = 0,
}: {
  target: number;
  suffix?: string;
  prefix?: string;
  className?: string;
  duration?: number;
  decimals?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    duration: duration * 1000,
    bounce: 0,
  });
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (isInView) {
      motionValue.set(target);
    }
  }, [isInView, motionValue, target]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (decimals > 0) {
        setDisplayValue(latest.toFixed(decimals).replace(".", ","));
      } else {
        setDisplayValue(Math.round(latest).toLocaleString("de-DE"));
      }
    });
    return unsubscribe;
  }, [springValue, decimals]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
}

/** Floating animation for decorative elements */
export function FloatingElement({
  children,
  className = "",
  amplitude = 10,
  duration = 4,
}: {
  children: ReactNode;
  className?: string;
  amplitude?: number;
  duration?: number;
}) {
  return (
    <motion.div
      className={className}
      animate={{
        y: [-amplitude, amplitude, -amplitude],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
}

/** Gold shimmer effect on text hover */
export function GoldShimmer({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.span
      className={`relative inline-block ${className}`}
      whileHover={{
        backgroundPosition: ["200% center", "-200% center"],
      }}
      style={{
        background: "linear-gradient(90deg, currentColor 0%, #D4BA9A 40%, #C5A47E 50%, #D4BA9A 60%, currentColor 100%)",
        backgroundSize: "300% 100%",
        backgroundPosition: "200% center",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
      }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
    >
      {children}
    </motion.span>
  );
}
