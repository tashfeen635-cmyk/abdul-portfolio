"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/travel_with_arrehman/" },
  { label: "Facebook", href: "https://www.facebook.com/Travelwitharrehman/" },
  { label: "TikTok", href: "https://www.tiktok.com/@travelwith_arrehman" },
  { label: "WhatsApp", href: "https://api.whatsapp.com/send/?phone=923146605966&text&type=phone_number&app_absent=0" },
  { label: "Terra Pakistan", href: "https://terrapakistan.com" },
];

export default function FinalCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="contact"
      ref={ref}
      className="relative min-h-screen flex flex-col full-bleed"
      aria-label="Contact"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/cta-bg.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/60 to-primary" />
      </div>

      {/* Main CTA content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center items-center text-center site-pad-x py-24 md:py-32">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-serif text-5xl md:text-7xl lg:text-9xl font-light text-warm-white leading-[0.9]"
        >
          LET&apos;S
          <br />
          EXPLORE.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-sm md:text-base text-muted-gray font-sans font-light mt-6 md:mt-8 max-w-md"
        >
          Stories, journeys, collaborations and the road ahead.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 mt-10 md:mt-14"
        >
          <a
            href="#"
            data-cursor="cta"
            className="inline-flex items-center justify-center gap-3 text-[11px] md:text-xs tracking-[0.25em] text-warm-white font-sans font-light uppercase group border border-warm-white/20 px-8 md:px-10 py-4 md:py-5 hover:border-accent hover:text-accent transition-all duration-500"
          >
            WORK WITH ME
            <span className="group-hover:translate-x-1 transition-transform duration-300">
              →
            </span>
          </a>
          <a
            href="mailto:hello@abdulrehman.com"
            data-cursor="cta"
            className="inline-flex items-center justify-center gap-3 text-[11px] md:text-xs tracking-[0.25em] text-warm-white font-sans font-light uppercase group border border-warm-white/20 px-8 md:px-10 py-4 md:py-5 hover:border-accent hover:text-accent transition-all duration-500"
          >
            CONNECT
            <span className="group-hover:translate-x-1 transition-transform duration-300">
              →
            </span>
          </a>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 border-t border-warm-white/5 site-pad-x py-10 md:py-14">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <div>
              <span className="font-serif text-xl md:text-2xl font-light text-warm-white">
                ABDUL REHMAN
              </span>
              <p className="text-[11px] tracking-[0.15em] text-muted-gray font-sans font-light mt-2">
                Explorer · Travel Storyteller · Founder of Terra Pakistan
              </p>
              <p className="text-[11px] tracking-[0.15em] text-muted-gray font-sans font-light mt-1">
                Gilgit-Baltistan, Pakistan
              </p>
            </div>

            <div className="flex flex-wrap gap-6 md:gap-8">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="text-[10px] md:text-[11px] tracking-[0.2em] text-muted-gray hover:text-warm-white font-sans font-light uppercase transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="mt-10 md:mt-14 pt-6 md:pt-8 border-t border-warm-white/5 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
            <span className="text-[10px] tracking-[0.15em] text-muted-gray/50 font-sans font-light">
              © 2024 Abdul Rehman. All rights reserved.
            </span>
            <span className="text-[10px] tracking-[0.15em] text-muted-gray/50 font-sans font-light">
              Built with passion from Gilgit-Baltistan
            </span>
          </div>
        </div>
      </footer>
    </section>
  );
}
