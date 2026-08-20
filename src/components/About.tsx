"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-24 md:py-40 bg-primary"
      aria-label="About"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative"
          >
            <div className="relative aspect-[3/4] overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/images/about.jpg')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
            </div>
            <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 w-24 md:w-32 h-24 md:h-32 border border-accent/30" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <span className="text-[10px] md:text-[11px] tracking-[0.35em] text-accent font-sans font-light uppercase">
              The Person Behind the Journey
            </span>

            <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-light text-warm-white mt-6 md:mt-8 leading-[1.1]">
              ROOTED IN THE NORTH.
              <br />
              <span className="text-muted-gray">DRIVEN TO EXPLORE.</span>
            </h2>

            <div className="w-16 h-[1px] bg-accent/50 my-8 md:my-10" />

            <p className="text-sm md:text-base text-muted-gray font-sans font-light leading-relaxed max-w-lg">
              Born and raised in the towering landscapes of Gilgit-Baltistan,
              Abdul Rehman grew up where the earth meets the sky. His childhood
              was shaped by ancient valleys, glacier-fed rivers, and communities
              rooted in centuries of tradition.
            </p>

            <p className="text-sm md:text-base text-muted-gray font-sans font-light leading-relaxed max-w-lg mt-4">
              What began as a personal desire to explore the mountains around
              him evolved into a lifelong journey through the roads, villages,
              and hidden landscapes of Northern Pakistan. Today, as the founder
              of Terra Pakistan, Abdul channels his passion into showcasing the
              beauty and culture of his homeland to the world.
            </p>

            <div className="mt-8 md:mt-10 flex items-center gap-3">
              <div className="w-1 h-1 rounded-full bg-accent" />
              <span className="text-[10px] md:text-[11px] tracking-[0.3em] text-muted-gray font-sans font-light uppercase">
                Gilgit-Baltistan, Pakistan
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
