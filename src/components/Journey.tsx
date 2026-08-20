"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stages = [
  {
    number: "01",
    title: "ROOTS",
    description:
      "Growing up surrounded by the mountains and culture of Gilgit-Baltistan. A childhood shaped by ancient valleys and communities rooted in tradition.",
  },
  {
    number: "02",
    title: "EXPLORATION",
    description:
      "Travelling through the valleys, roads, villages and remote landscapes of Pakistan. Every road became a story, every mountain a lesson.",
  },
  {
    number: "03",
    title: "TERRA PAKISTAN",
    description:
      "Turning a personal passion for exploration into a mission to showcase Pakistan to the world. From one explorer's journey to a shared experience.",
  },
];

export default function Journey() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="journey"
      ref={ref}
      className="relative py-24 md:py-40 bg-primary"
      aria-label="The Journey"
    >
      <div className="max-w-7xl mx-auto">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-[10px] md:text-[11px] tracking-[0.35em] text-accent font-sans font-light uppercase block"
        >
          The Path So Far
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-serif text-3xl md:text-5xl lg:text-7xl font-light text-warm-white mt-4 md:mt-6 leading-[1.05]"
        >
          THE JOURNEY
        </motion.h2>

        {/* Desktop horizontal timeline */}
        <div className="hidden md:block mt-20 md:mt-32">
          <div className="relative">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.5, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="origin-left h-[1px] bg-warm-white/10 w-full"
            />

            <div className="grid grid-cols-3 gap-8 mt-0">
              {stages.map((stage, i) => (
                <motion.div
                  key={stage.number}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.8,
                    delay: 0.5 + i * 0.2,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  className="relative pt-8"
                >
                  <div className="absolute top-0 left-0 w-2 h-2 rounded-full bg-accent -translate-x-[3px] -translate-y-[3px]" />

                  <span className="text-[10px] tracking-[0.3em] text-accent font-sans font-light">
                    {stage.number}
                  </span>
                  <h3 className="font-serif text-2xl lg:text-3xl font-light text-warm-white mt-3 mb-4">
                    {stage.title}
                  </h3>
                  <p className="text-sm text-muted-gray font-sans font-light leading-relaxed max-w-sm">
                    {stage.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile vertical timeline */}
        <div className="md:hidden mt-16">
          <div className="relative pl-8">
            <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-warm-white/10" />

            {stages.map((stage, i) => (
              <motion.div
                key={stage.number}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: 0.8,
                  delay: 0.4 + i * 0.15,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className={`relative ${i < stages.length - 1 ? "pb-14" : ""}`}
              >
                <div className="absolute left-0 top-1 w-2 h-2 rounded-full bg-accent -translate-x-[4.5px]" />

                <span className="text-[10px] tracking-[0.3em] text-accent font-sans font-light">
                  {stage.number}
                </span>
                <h3 className="font-serif text-2xl font-light text-warm-white mt-2 mb-3">
                  {stage.title}
                </h3>
                <p className="text-sm text-muted-gray font-sans font-light leading-relaxed">
                  {stage.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
