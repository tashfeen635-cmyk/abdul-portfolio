"use client";

import dynamic from "next/dynamic";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Photography from "@/components/Photography";
import Journey from "@/components/Journey";
import TerraPakistan from "@/components/TerraPakistan";
import FinalCTA from "@/components/FinalCTA";
import PageLoader from "@/components/PageLoader";

const CustomCursor = dynamic(() => import("@/components/CustomCursor"), {
  ssr: false,
});

const SmoothScroll = dynamic(() => import("@/components/SmoothScroll"), {
  ssr: false,
});

export default function Home() {
  return (
    <SmoothScroll>
      <PageLoader />
      <CustomCursor />
      <Navigation />
      <main>
        <Hero />
        <div className="site-frame">
          <About />
          <Photography />
          <Journey />
          <TerraPakistan />
          <FinalCTA />
        </div>
      </main>
    </SmoothScroll>
  );
}
