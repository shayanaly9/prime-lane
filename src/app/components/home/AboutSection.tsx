"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function AboutSection() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Text Entry
    gsap.from(".about-reveal", {
      y: 60,
      opacity: 0,
      stagger: 0.15,
      duration: 1.2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%",
      }
    });

    // Image Physics
    gsap.from(".about-image", {
      scale: 0.9,
      opacity: 0,
      duration: 1.5,
      ease: "expo.out",
      scrollTrigger: {
        trigger: container.current,
        start: "top 70%",
      }
    });
  }, { scope: container });

  return (
    <section 
      id="about" 
      ref={container}
      className="w-full py-32 md:py-64 px-6 md:px-10 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-24 items-center">
        {/* LEFT COLUMN: EDITORIAL NARRATIVE */}
        <div className="w-full lg:w-3/5">
          <div className="about-reveal flex items-center gap-4 mb-8">
            <div className="w-10 h-[1px] bg-teal" />
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-teal">Operational Identity</span>
          </div>
          
          <h2 className="about-reveal text-6xl md:text-8xl font-bold tracking-tighter mb-12 leading-[0.9]">
            Your logistics partner, <br />
            <span className="text-teal">not just a carrier.</span>
            <span className="inline-block w-24 h-12 md:w-32 md:h-14 bg-offwhite rounded-full align-middle mx-4 overflow-hidden border border-divider relative shadow-inner">
               <Image 
                 src="/Cards/Card 1.jpg" 
                 alt="Technical Hub" 
                 fill 
                 className="object-cover grayscale mix-blend-multiply opacity-60" 
               />
            </span>
          </h2>
          
          <p className="about-reveal text-xl md:text-2xl text-ink-mid leading-relaxed max-w-2xl mb-12">
            PrimeLane Logistics is an Australian-based freight powerhouse specializing in container shipping, vehicle transport, and industrial freight — with a focus on the precision-demanding <span className="text-ink font-bold">Australia–Dubai</span> trade corridor.
          </p>
          
          <div className="about-reveal grid sm:grid-cols-2 gap-12 mb-16">
             <div>
                <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-teal mb-4">Precision Engineering</h4>
                <p className="text-ink-mid text-sm leading-relaxed">Every client speaks to a real person. Every quote is prepared individually by a corridor specialist.</p>
             </div>
             <div>
                <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-teal mb-4">Technical Care</h4>
                <p className="text-ink-mid text-sm leading-relaxed">Every shipment is tracked with technical integrity. No middle-tier support, just direct access.</p>
             </div>
          </div>

          <Link href="/about/why-choose-us" className="about-reveal inline-block group">
            <button className="relative px-12 py-6 bg-ink text-white font-bold rounded-full overflow-hidden transition-all duration-500 group-hover:scale-105 active:scale-95 shadow-2xl">
              <span className="relative z-10 uppercase tracking-widest text-xs">Technical Excellence</span>
              <div className="absolute inset-0 bg-teal translate-y-full transition-transform duration-500 group-hover:translate-y-0" />
            </button>
          </Link>
        </div>

        {/* RIGHT COLUMN: TECHNICAL HUB CARD */}
        <div className="w-full lg:w-2/5 relative">
          <div className="about-image relative aspect-[4/5] bg-offwhite rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border border-divider group">
            <Image 
              src="/Our-story.webp" 
              alt="PrimeLane Operations" 
              fill 
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent opacity-60" />
            
            <div className="absolute bottom-12 left-12 right-12">
               <div className="p-8 bg-white/10 backdrop-blur-3xl border border-white/20 rounded-[2.5rem] shadow-2xl">
                  <div className="flex items-center gap-4 mb-6">
                     <div className="w-12 h-12 bg-teal rounded-xl flex items-center justify-center text-white shadow-lg">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12h14m-7-7l7 7-7 7"/></svg>
                     </div>
                     <div>
                        <h4 className="text-white font-bold text-lg leading-none">Corridor HQ</h4>
                        <p className="text-white/40 text-[10px] uppercase tracking-widest mt-1">Melbourne, Australia</p>
                     </div>
                  </div>
                  <div className="space-y-3">
                     {['DG Licensed Class 2–9', 'IATA Certified', 'AU-UAE Corridor Hub'].map(tag => (
                        <div key={tag} className="flex items-center gap-3">
                           <div className="w-1.5 h-1.5 rounded-full bg-teal shadow-[0_0_8px_var(--c-teal)]" />
                           <span className="text-white/60 text-[11px] font-bold uppercase tracking-widest">{tag}</span>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-teal/10 rounded-full blur-3xl -z-10" />
          <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-ink/5 rounded-full blur-3xl -z-10" />
        </div>
      </div>
    </section>
  );
}
