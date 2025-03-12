"use client";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

gsap.registerPlugin(ScrollTrigger);

const SmoothScroll = ({ children }) => {
  const contentRef = useRef(null);

  useGSAP(() => {
    const lenis = new Lenis({
      smooth: true,
      lerp: 0.1, // Adjust for smoothness
    });

    // GSAP Animation with Lenis
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    // ScrollTrigger Updates
    ScrollTrigger.refresh();

    return () => {
      gsap.ticker.remove((time) => lenis.raf(time * 1000));
      lenis.destroy(); // Cleanup on unmount
    };
  }, []);

  return <div ref={contentRef}>{children}</div>;
};

export default SmoothScroll;