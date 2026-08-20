"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import PhotoViewer from "./PhotoViewer";

const photos = [
  {
    src: "/images/photo-1.webp",
    caption: "Standing at the edge of the world",
    location: "Hunza, Gilgit-Baltistan",
    size: "large",
  },
  {
    src: "/images/photo-2.webp",
    caption: "Morning light on the Karakoram",
    location: "Skardu, Gilgit-Baltistan",
    size: "portrait",
  },
  {
    src: "/images/photo-3.webp",
    caption: "The road less travelled",
    location: "Astore Valley, Pakistan",
    size: "small",
  },
  {
    src: "/images/photo-4.webp",
    caption: "Among the giants",
    location: "Passu, Gilgit-Baltistan",
    size: "panoramic",
  },
  {
    src: "/images/photo-5.webp",
    caption: "Where the mountains meet the sky",
    location: "Fairy Meadows, Pakistan",
    size: "portrait",
  },
  {
    src: "/images/photo-6.webp",
    caption: "Village life in the Karakoram",
    location: "Khaplu, Gilgit-Baltistan",
    size: "large",
  },
  {
    src: "/images/photo-7.webp",
    caption: "Camp above the clouds",
    location: "Deosai, Pakistan",
    size: "small",
  },
  {
    src: "/images/photo-8.webp",
    caption: "On the way to Khunjerab",
    location: "Khunjerab Pass, Pakistan",
    size: "panoramic",
  },
];

export default function Photography() {
  const [viewerOpen, setViewerOpen] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const openViewer = (index: number) => {
    setCurrentPhoto(index);
    setViewerOpen(true);
  };

  const nextPhoto = () => setCurrentPhoto((prev) => (prev + 1) % photos.length);
  const prevPhoto = () => setCurrentPhoto((prev) => (prev - 1 + photos.length) % photos.length);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] as const },
    },
  };

  return (
    <section
      id="photography"
      ref={sectionRef}
      className="relative py-24 md:py-40 bg-secondary full-bleed"
      aria-label="Photography"
    >
      <div className="site-pad-x max-w-7xl mx-auto mb-16 md:mb-24">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-[10px] md:text-[11px] tracking-[0.35em] text-accent font-sans font-light uppercase block"
        >
          Through My Lens
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-serif text-3xl md:text-5xl lg:text-7xl font-light text-warm-white mt-4 md:mt-6 leading-[1.05]"
        >
          MOMENTS FROM
          <br />
          THE ROAD
        </motion.h2>
      </div>

      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="site-pad-x max-w-[90rem] mx-auto"
      >
        {/* Row 1: Large landscape + portrait */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 mb-4 md:mb-6">
          <motion.div
            variants={itemVariants}
            className="md:col-span-8 relative group overflow-hidden cursor-pointer"
            data-cursor="image"
            onClick={() => openViewer(0)}
          >
            <div className="aspect-[16/10] overflow-hidden">
              <div
                className="w-full h-full bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url('${photos[0].src}')` }}
              />
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="md:col-span-4 relative group overflow-hidden cursor-pointer mt-4 md:mt-0"
            data-cursor="image"
            onClick={() => openViewer(1)}
          >
            <div className="aspect-[3/4] overflow-hidden">
              <div
                className="w-full h-full bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url('${photos[1].src}')` }}
              />
            </div>
          </motion.div>
        </div>

        {/* Row 2: Small offset + panoramic */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 mb-4 md:mb-6">
          <motion.div
            variants={itemVariants}
            className="md:col-span-3 md:col-start-2 relative group overflow-hidden cursor-pointer mt-4 md:mt-12"
            data-cursor="image"
            onClick={() => openViewer(2)}
          >
            <div className="aspect-[4/5] overflow-hidden">
              <div
                className="w-full h-full bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url('${photos[2].src}')` }}
              />
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="md:col-span-8 relative group overflow-hidden cursor-pointer"
            data-cursor="image"
            onClick={() => openViewer(3)}
          >
            <div className="aspect-[21/9] overflow-hidden">
              <div
                className="w-full h-full bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url('${photos[3].src}')` }}
              />
            </div>
          </motion.div>
        </div>

        {/* Row 3: Portrait + large landscape */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 mb-4 md:mb-6">
          <motion.div
            variants={itemVariants}
            className="md:col-span-5 relative group overflow-hidden cursor-pointer"
            data-cursor="image"
            onClick={() => openViewer(4)}
          >
            <div className="aspect-[3/4] overflow-hidden">
              <div
                className="w-full h-full bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url('${photos[4].src}')` }}
              />
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="md:col-span-7 relative group overflow-hidden cursor-pointer mt-4 md:mt-8"
            data-cursor="image"
            onClick={() => openViewer(5)}
          >
            <div className="aspect-[16/10] overflow-hidden">
              <div
                className="w-full h-full bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url('${photos[5].src}')` }}
              />
            </div>
          </motion.div>
        </div>

        {/* Row 4: Small + panoramic */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
          <motion.div
            variants={itemVariants}
            className="md:col-span-4 relative group overflow-hidden cursor-pointer"
            data-cursor="image"
            onClick={() => openViewer(6)}
          >
            <div className="aspect-square overflow-hidden">
              <div
                className="w-full h-full bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url('${photos[6].src}')` }}
              />
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="md:col-span-8 relative group overflow-hidden cursor-pointer mt-4 md:mt-16"
            data-cursor="image"
            onClick={() => openViewer(7)}
          >
            <div className="aspect-[21/9] overflow-hidden">
              <div
                className="w-full h-full bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url('${photos[7].src}')` }}
              />
            </div>
          </motion.div>
        </div>
      </motion.div>

      <PhotoViewer
        isOpen={viewerOpen}
        currentIndex={currentPhoto}
        photos={photos}
        onClose={() => setViewerOpen(false)}
        onNext={nextPhoto}
        onPrev={prevPhoto}
      />
    </section>
  );
}
