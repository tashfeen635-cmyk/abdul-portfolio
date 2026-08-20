"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PhotoViewerProps {
  isOpen: boolean;
  currentIndex: number;
  photos: { src: string; caption: string; location: string }[];
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function PhotoViewer({
  isOpen,
  currentIndex,
  photos,
  onClose,
  onNext,
  onPrev,
}: PhotoViewerProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    },
    [onClose, onNext, onPrev]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, handleKeyDown]);

  const photo = photos[currentIndex];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[100] bg-primary/98 backdrop-blur-xl flex flex-col"
          role="dialog"
          aria-label="Photo viewer"
        >
          <div className="flex items-center justify-between px-6 md:px-12 py-5">
            <span className="text-[11px] tracking-[0.2em] text-muted-gray font-sans font-light">
              {String(currentIndex + 1).padStart(2, "0")} / {String(photos.length).padStart(2, "0")}
            </span>
            <button
              onClick={onClose}
              className="text-[11px] tracking-[0.2em] text-muted-gray hover:text-warm-white font-sans font-light transition-colors duration-300 uppercase"
              aria-label="Close photo viewer"
            >
              Close
            </button>
          </div>

          <div className="flex-1 flex items-center justify-center px-4 md:px-16 relative">
            <button
              onClick={onPrev}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-muted-gray hover:text-warm-white transition-colors duration-300 z-10 p-4"
              aria-label="Previous photo"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="max-w-5xl w-full max-h-[70vh] relative"
              >
                <div
                  className="w-full aspect-[16/10] bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url('${photo.src}')` }}
                />
                <div className="mt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <p className="font-serif text-lg md:text-xl text-warm-white font-light">
                    {photo.caption}
                  </p>
                  <span className="text-[10px] tracking-[0.25em] text-muted-gray font-sans font-light uppercase">
                    {photo.location}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>

            <button
              onClick={onNext}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-muted-gray hover:text-warm-white transition-colors duration-300 z-10 p-4"
              aria-label="Next photo"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>

          <div className="px-6 md:px-12 py-5 flex justify-center">
            <div className="flex gap-1.5">
              {photos.map((_, i) => (
                <div
                  key={i}
                  className={`h-[2px] transition-all duration-300 ${
                    i === currentIndex ? "w-8 bg-accent" : "w-2 bg-muted-gray/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
