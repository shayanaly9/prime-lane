"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const partners = [
  "PORT OF MELBOURNE", "JEBEL ALI PORT", "VICROADS", "NHVR", "IATA CERTIFIED", "DG LICENSED", "CAR CARRIER NETWORK", "FCL EXPERTS", "LCL CONSOLIDATION"
];

export default function Marquee() {
  const container = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    const width = marquee.offsetWidth;
    
    gsap.to(marquee, {
      x: -width / 2,
      duration: 20,
      ease: "none",
      repeat: -1,
    });
  }, { scope: container });

  return (
    <section 
      ref={container}
      className="w-full py-12 bg-offwhite border-y border-divider overflow-hidden whitespace-nowrap"
    >
      <div 
        ref={marqueeRef}
        className="inline-block"
      >
        {[...partners, ...partners].map((partner, i) => (
          <span 
            key={i} 
            className="text-2xl md:text-4xl font-bold tracking-[0.2em] text-ink/20 mx-10 md:mx-20 uppercase"
          >
            {partner}
          </span>
        ))}
      </div>
    </section>
  );
}
