"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.3]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: { scaleX: 1, transition: { duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] as const } },
  };

  const stagger = {
    visible: {
      transition: { staggerChildren: 0.15, delayChildren: 0.8 },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: [0.25, 0.46, 0.45, 0.94] as const },
    },
  };

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden full-bleed"
      aria-label="Hero"
    >
      <motion.div
        className="absolute inset-0"
        style={{ scale: imageScale, opacity: imageOpacity }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/hero.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/40 to-primary" />
        <div className="absolute inset-0 bg-primary/30" />
      </motion.div>

      <motion.div
        style={{ y: textY }}
        className="relative z-10 h-full flex flex-col justify-end pb-16 md:pb-24 site-pad-x"
      >
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="max-w-5xl"
        >
          <motion.div
            variants={fadeUp}
            className="text-[11px] md:text-xs tracking-[0.35em] text-muted-gray font-sans font-light mb-6 md:mb-8 uppercase"
          >
            Gilgit-Baltistan · Pakistan
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="font-serif text-[3.5rem] sm:text-[5rem] md:text-[7rem] lg:text-[9rem] leading-[0.9] font-light text-warm-white tracking-tight"
          >
            ABDUL
            <br />
            REHMAN
          </motion.h1>

          <motion.div
            variants={lineVariants}
            className="origin-left w-24 md:w-40 h-[1px] bg-accent my-6 md:my-8"
          />

          <motion.p
            variants={fadeUp}
            className="font-serif text-xl md:text-3xl lg:text-4xl font-light text-warm-white/90 tracking-wide"
          >
            EXPLORER OF THE NORTH.
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="text-[11px] md:text-xs tracking-[0.25em] text-muted-gray font-sans font-light mt-4 md:mt-6 uppercase"
          >
            Travel Storyteller · Founder of Terra Pakistan
          </motion.p>

          <motion.div variants={fadeUp} className="mt-10 md:mt-14">
            <a
              href="#photography"
              data-cursor="cta"
              className="inline-flex items-center gap-3 text-[11px] md:text-xs tracking-[0.25em] text-warm-white font-sans font-light uppercase group border border-warm-white/20 px-6 md:px-8 py-3 md:py-4 hover:border-accent hover:text-accent transition-all duration-500"
            >
              EXPLORE THE JOURNEY
              <span className="group-hover:translate-x-1 transition-transform duration-300">
                →
              </span>
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-[9px] tracking-[0.3em] text-muted-gray font-sans font-light uppercase">
              Scroll to discover
            </span>
            <div className="w-[1px] h-6 bg-gradient-to-b from-muted-gray to-transparent" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
