"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function TerraPakistan() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="terra"
      ref={ref}
      className="relative py-32 md:py-48 lg:py-64 site-pad-x bg-primary overflow-hidden full-bleed"
      aria-label="Terra Pakistan"
    >
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/terra-bg.webp')" }}
        />
        <div className="absolute inset-0 bg-primary/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-serif text-xl md:text-3xl lg:text-4xl font-light text-warm-white/80 leading-relaxed"
        >
          A PERSONAL JOURNEY
          <br />
          BECAME A MISSION.
        </motion.p>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="origin-center w-16 md:w-24 h-[1px] bg-accent mx-auto my-10 md:my-14"
        />

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-serif text-6xl md:text-8xl lg:text-[12rem] font-light text-warm-white leading-[0.85] tracking-tight"
        >
          TERRA
          <br />
          <span className="text-accent">PAKISTAN</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-sm md:text-base text-muted-gray font-sans font-light leading-relaxed max-w-2xl mx-auto mt-10 md:mt-14"
        >
          Founded by Abdul Rehman, Terra Pakistan was created to share the beauty,
          culture and experiences of Pakistan with the world. What started as a
          personal journey through the mountains has grown into a mission to
          inspire others to discover the extraordinary landscapes of Pakistan.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-10 md:mt-14"
        >
          <a
            href="https://terrapakistan.com"
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="cta"
            className="inline-flex items-center gap-3 text-[11px] md:text-xs tracking-[0.25em] text-warm-white font-sans font-light uppercase group border border-warm-white/20 px-8 md:px-10 py-4 md:py-5 hover:border-accent hover:text-accent transition-all duration-500"
          >
            VISIT TERRA PAKISTAN
            <span className="group-hover:translate-x-1 transition-transform duration-300">
              →
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
