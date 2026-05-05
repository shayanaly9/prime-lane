"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power4.out", duration: 1.5 } });

    tl.from(titleRef.current, {
      y: 100,
      opacity: 0,
      skewY: 7,
      stagger: 0.1,
    })
    .from(textRef.current, {
      y: 40,
      opacity: 0,
    }, "-=1")
    .from(buttonsRef.current, {
      y: 40,
      opacity: 0,
    }, "-=1.2");

    // Background image subtle scale up
    gsap.from(".hero-bg", {
      scale: 1.1,
      duration: 3,
      ease: "power2.out",
    });
  }, { scope: container });

  return (
    <section
      ref={container}
      className="relative w-full min-h-[100dvh] flex items-center justify-center overflow-hidden bg-bg-dark"
    >
      {/* Background Image with Dark Wash */}
      <div 
        className="hero-bg absolute inset-0 z-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url('/Hero-Banner.webp')`,
          filter: 'brightness(0.6) contrast(1.1)'
        }}
      />
      <div className="absolute inset-0 z-1 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(11,18,32,0.8)_100%)]" />

      <div className="relative z-10 w-full max-w-7xl px-6 md:px-10 py-32 flex flex-col items-center text-center">
        <div className="mb-8 overflow-hidden">
          <span className="inline-block text-[11px] font-semibold tracking-[0.2em] uppercase text-white/60">
            Australia&apos;s Premium Freight Partner
          </span>
        </div>

        <h1 
          ref={titleRef}
          className="w-full max-w-6xl text-white font-bold leading-[0.95] tracking-tight mb-10"
          style={{ fontSize: 'clamp(3.5rem, 9vw, 7.5rem)' }}
        >
          Moving cargo from <span className="text-teal-light">Australia</span> to the world
        </h1>

        <p 
          ref={textRef}
          className="max-w-2xl text-white/70 text-lg md:text-xl leading-relaxed mb-14"
        >
          Container shipping, vehicle transport, and industrial freight — direct from Australia to Dubai and beyond. Engineered for speed, secured for certainty.
        </p>

        <div 
          ref={buttonsRef}
          className="flex flex-col sm:flex-row items-center gap-6"
        >
          <Link href="/help-centre/contact">
            <button className="group relative px-10 py-5 bg-white text-black font-bold rounded-full overflow-hidden transition-all duration-500 hover:scale-105 active:scale-95">
              <span className="relative z-10">Request a quote</span>
              <div className="absolute inset-0 bg-teal-light translate-y-full transition-transform duration-500 group-hover:translate-y-0" />
            </button>
          </Link>
          
          <button 
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-10 py-5 border border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
          >
            Explore Services
          </button>
        </div>
      </div>

      {/* Decorative scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-50">
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/0 via-white to-white/0" />
      </div>
    </section>
  );
}
