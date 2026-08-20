"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

type CursorVariant = "default" | "image" | "cta" | "explore";

export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const [variant, setVariant] = useState<CursorVariant>("default");
  const [visible, setVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  const variantRef = useRef<CursorVariant>("default");

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!visible) setVisible(true);
    },
    [cursorX, cursorY, visible]
  );

  const handleMouseLeave = useCallback(() => {
    setVisible(false);
  }, []);

  const handleMouseEnter = useCallback(() => {
    setVisible(true);
  }, []);

  useEffect(() => {
    const isTouch =
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      window.matchMedia("(pointer: coarse)").matches;
    setIsTouchDevice(isTouch);
    if (isTouch) return;

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [handleMouseMove, handleMouseLeave, handleMouseEnter]);

  useEffect(() => {
    if (isTouchDevice) return;

    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const cursorAttr = target.closest("[data-cursor]")?.getAttribute("data-cursor");
      if (cursorAttr) {
        variantRef.current = cursorAttr as CursorVariant;
        setVariant(cursorAttr as CursorVariant);
      }
    };

    const handleOut = () => {
      variantRef.current = "default";
      setVariant("default");
    };

    document.addEventListener("mouseover", handleOver);
    document.addEventListener("mouseout", handleOut);

    return () => {
      document.removeEventListener("mouseover", handleOver);
      document.removeEventListener("mouseout", handleOut);
    };
  }, [isTouchDevice]);

  if (isTouchDevice) return null;

  const sizeMap: Record<CursorVariant, { w: number; h: number }> = {
    default: { w: 12, h: 12 },
    image: { w: 80, h: 80 },
    cta: { w: 64, h: 64 },
    explore: { w: 80, h: 80 },
  };

  const labelMap: Record<CursorVariant, string> = {
    default: "",
    image: "VIEW",
    cta: "\u2192",
    explore: "EXPLORE",
  };

  const size = sizeMap[variant];
  const label = labelMap[variant];

  return (
    <motion.div
      className="fixed top-0 left-0 z-[9999] pointer-events-none flex items-center justify-center mix-blend-difference"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
        translateX: "-50%",
        translateY: "-50%",
      }}
      animate={{
        width: size.w,
        height: size.h,
        opacity: visible ? 1 : 0,
      }}
      transition={{ type: "spring", damping: 20, stiffness: 300 }}
    >
      {variant === "default" ? (
        <div className="w-full h-full rounded-full bg-warm-white" />
      ) : (
        <div className="w-full h-full rounded-full border border-warm-white/60 flex items-center justify-center">
          <span className="text-warm-white text-[10px] tracking-[0.15em] font-sans font-medium">
            {label}
          </span>
        </div>
      )}
    </motion.div>
  );
}
