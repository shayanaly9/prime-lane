"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function OurStory() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Hero Entry
    gsap.from(".hero-reveal", {
      y: 60,
      opacity: 0,
      stagger: 0.1,
      duration: 1.2,
      ease: "power4.out"
    });

    // Image Scale Scroll
    gsap.from(".scale-img", {
      scale: 0.8,
      opacity: 0.2,
      scrollTrigger: {
        trigger: ".scale-img",
        start: "top bottom",
        end: "center center",
        scrub: true,
      }
    });

    // Text Scrub Reveal
    const textElements = gsap.utils.toArray(".scrub-text span");
    gsap.to(textElements, {
      opacity: 1,
      stagger: 0.1,
      scrollTrigger: {
        trigger: ".scrub-section",
        start: "top 70%",
        end: "bottom 30%",
        scrub: true,
      }
    });
  }, { scope: container });

  return (
    <main ref={container} className="overflow-x-hidden w-full max-w-full bg-white">
      {/* SECTION: ATTENTION (HERO) - Artistic Asymmetry */}
      <section className="relative w-full py-48 md:py-64 px-6 md:px-10 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-end gap-24">
          <div className="w-full lg:w-3/5 relative z-10">
            <div className="hero-reveal flex items-center gap-4 mb-8">
              <div className="w-8 h-[1px] bg-teal" />
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-teal">The Narrative</span>
            </div>
            <h1 className="hero-reveal text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9] mb-12 max-w-4xl">
              Precision built into every <span className="text-teal">Logistics Chain.</span>
            </h1>
            <p className="hero-reveal text-xl md:text-2xl text-ink-mid leading-relaxed max-w-xl">
              Founded on 8 years of supply chain technicality by Toseef Ahmed. We don't just move freight; we engineer the corridor between Australia and the global market.
            </p>
          </div>
          
          <div className="hero-reveal w-full lg:w-2/5 relative">
             <div className="aspect-[4/5] relative rounded-[3rem] overflow-hidden shadow-2xl">
                <Image 
                  src="/Our-story.webp" 
                  alt="Founder Precision" 
                  fill 
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                />
             </div>
             <div className="absolute -bottom-12 -left-12 bg-teal p-12 rounded-[2rem] shadow-2xl hidden md:block">
                <span className="text-white font-bold text-4xl tracking-tighter">8+ Years</span>
                <p className="text-white/60 text-xs uppercase tracking-widest mt-2">Technical Expertise</p>
             </div>
          </div>
        </div>
      </section>

      {/* SECTION: INTEREST - Industry Standards Marquee */}
      <section className="w-full py-12 bg-ink overflow-hidden border-y border-white/5">
        <div className="flex whitespace-nowrap animate-marquee">
          {[1,2,3,4,5].map((i) => (
            <div key={i} className="flex items-center gap-24 px-12">
              <span className="text-3xl md:text-5xl font-bold text-white/20 tracking-tighter hover:text-teal transition-colors cursor-default">DG LICENSED (CLASS 2-9)</span>
              <span className="text-3xl md:text-5xl font-bold text-white/20 tracking-tighter hover:text-teal transition-colors cursor-default">IATA CERTIFIED AIR CARGO</span>
              <span className="text-3xl md:text-5xl font-bold text-white/20 tracking-tighter hover:text-teal transition-colors cursor-default">TECHNICAL CONDITION REPORTING</span>
              <span className="text-3xl md:text-5xl font-bold text-white/20 tracking-tighter hover:text-teal transition-colors cursor-default">FCL & LCL EXPERTS</span>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION: DESIRE - Scrubbing Methodology */}
      <section className="scrub-section w-full py-32 md:py-64 px-6 md:px-10 bg-offwhite">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex justify-center items-center gap-4 mb-12">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-teal">Our Philosophy</span>
          </div>
          <h2 className="scrub-text text-4xl md:text-6xl font-medium tracking-tight leading-[1.3] text-ink mb-24">
            {"Primelane Logistics was built by Toseef Ahmed to bridge the gap between complex global shipping requirements and seamless customer experiences. We prioritize the safe and efficient export of automotive vehicles, leveraging years of hands-on industry knowledge to navigate the intricacies of international customs and port logistics.".split(" ").map((word, i) => (
              <span key={i} className="opacity-10 inline-block mr-[0.25em]">{word}</span>
            ))}
          </h2>

          <div className="hero-reveal mt-32 flex flex-col items-center">
             <div className="w-px h-24 bg-teal/20 mb-8" />
             <h3 className="text-4xl font-bold tracking-tighter text-ink mb-2">Toseef Ahmed</h3>
             <p className="text-xs font-bold text-teal tracking-[0.3em] uppercase">Founding Director</p>
          </div>
        </div>
      </section>

      {/* SECTION: MEDIA - Large Scale Image */}
      <section className="w-full px-6 md:px-10 mb-32">
        <div className="max-w-7xl mx-auto aspect-video relative rounded-[4rem] overflow-hidden shadow-2xl scale-img">
          <Image 
            src="/Cards/Card 1.jpg" 
            alt="Corridor Hub" 
            fill 
            className="object-cover"
          />
          <div className="absolute inset-0 bg-ink/20 mix-blend-multiply" />
          <div className="absolute inset-0 flex items-center justify-center">
             <div className="text-center">
                <h3 className="text-white text-5xl md:text-7xl font-bold tracking-tighter mb-4">AU → DUBAI</h3>
                <p className="text-white/80 uppercase tracking-widest font-bold">The Core Corridor</p>
             </div>
          </div>
        </div>
      </section>

      {/* SECTION: ACTION - Massive CTA */}
      <section className="w-full py-32 md:py-64 px-6 md:px-10 bg-ink">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-24 items-center">
          <div>
            <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter leading-[0.9] mb-8">
              Experience the <br/>
              <span className="text-teal">Technical Advantage.</span>
            </h2>
            <p className="text-white/40 text-xl max-w-md leading-relaxed">
              Every shipment is tracked with precision. Every client speaks to a real specialist.
            </p>
          </div>
          <div className="flex flex-col items-center md:items-end">
            <Link href="/help-centre/contact" className="w-full md:w-auto">
              <button className="group relative w-full md:w-[400px] aspect-square rounded-full border border-white/10 flex items-center justify-center hover:bg-teal transition-all duration-700 hover:scale-105 active:scale-95">
                 <span className="text-white font-bold text-4xl tracking-tighter group-hover:scale-110 transition-transform duration-500 text-center">INITIATE <br/> QUOTE</span>
                 <div className="absolute bottom-12 right-12 md:bottom-24 md:right-24">
                   <svg width="64" height="64" viewBox="0 0 64 64" fill="none" stroke="white" strokeWidth="2" className="group-hover:rotate-45 transition-transform duration-500">
                     <path d="M12 52L52 12M52 12H20M52 12V44"/>
                   </svg>
                 </div>
              </button>
            </Link>
          </div>
        </div>
      </section>

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
      `}</style>
    </main>
  );
}
