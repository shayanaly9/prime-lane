"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function ShippingRoutes() {
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

    // Scroll Pinning for Route Map
    ScrollTrigger.create({
      trigger: ".pin-section",
      start: "top 10%",
      end: "bottom bottom",
      pin: ".pin-target",
      pinSpacing: false,
    });

    // Text Scrub
    const textElements = gsap.utils.toArray(".scrub-text span");
    gsap.to(textElements, {
      opacity: 1,
      stagger: 0.1,
      scrollTrigger: {
        trigger: ".scrub-container",
        start: "top 80%",
        end: "bottom 20%",
        scrub: true,
      }
    });
  }, { scope: container });

  return (
    <main ref={container} className="overflow-x-hidden w-full max-w-full bg-white">
      {/* SECTION: ATTENTION (HERO) - Editorial Split */}
      <section className="relative w-full py-48 md:py-64 px-6 md:px-10 border-b border-divider">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-24">
          <div className="w-full lg:w-3/5">
            <div className="hero-reveal flex items-center gap-4 mb-8">
              <div className="w-8 h-[1px] bg-teal" />
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-teal">Logistics Hub</span>
            </div>
            <h1 className="hero-reveal text-6xl md:text-9xl font-bold tracking-tighter leading-[0.85] mb-12">
              Global <span className="text-teal">Distribution</span> Standards.
            </h1>
            <p className="hero-reveal text-xl md:text-2xl text-ink-mid leading-relaxed max-w-xl">
              Mapping the technical corridors between the Australian mainland and the Middle Eastern trading hubs.
            </p>
          </div>
          <div className="hero-reveal w-full lg:w-2/5 flex flex-col gap-6">
             <div className="w-full aspect-[16/10] bg-offwhite rounded-[2.5rem] overflow-hidden relative shadow-2xl">
                <Image src="/Cards/Card 1.jpg" alt="Port of Melbourne" fill className="object-cover" />
                <div className="absolute bottom-6 left-6 px-4 py-2 bg-white/20 backdrop-blur-xl border border-white/20 rounded-full text-[10px] font-bold text-white uppercase tracking-widest">Port of Melbourne</div>
             </div>
             <div className="w-full aspect-[16/10] bg-ink rounded-[2.5rem] overflow-hidden relative shadow-2xl">
                <Image src="/Cards/Card 2.jpg" alt="Jebel Ali Port" fill className="object-cover opacity-60" />
                <div className="absolute bottom-6 left-6 px-4 py-2 bg-white/10 backdrop-blur-xl border border-white/10 rounded-full text-[10px] font-bold text-white uppercase tracking-widest">Jebel Ali Port</div>
             </div>
          </div>
        </div>
      </section>

      {/* SECTION: INTEREST - Port Accordions */}
      <section className="w-full py-32 md:py-48 px-6 md:px-10 bg-offwhite">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-teal mb-4 block">Port Distribution</span>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">Australian Origins.</h2>
          </div>

          <div className="flex flex-col md:flex-row gap-6 h-auto md:h-[600px]">
             {[
               { name: "Melbourne", ports: "Victoria Main Terminal", code: "AU-MEL", img: "/Cards/Card 3.jpg" },
               { name: "Sydney", ports: "Port Botany Logistics", code: "AU-SYD", img: "/Cards/Card 4.jpg" },
               { name: "Brisbane", ports: "Queensland Gateway", code: "AU-BNE", img: "/Cards/Card 5.jpg" },
               { name: "Perth", ports: "Fremantle Technical Hub", code: "AU-PER", img: "/Cards/Card 6.jpg" }
             ].map((port, idx) => (
                <div key={idx} className="group relative flex-1 overflow-hidden rounded-[3rem] transition-all duration-1000 ease-[cubic-bezier(0.32,0.72,0,1)] hover:flex-[2.5] bg-ink cursor-pointer min-h-[300px] md:min-h-0">
                   <Image src={port.img} alt={port.name} fill className="object-cover opacity-40 group-hover:opacity-100 transition-opacity duration-1000" />
                   <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-transparent to-transparent" />
                   <div className="absolute bottom-12 left-12 right-12 flex items-end justify-between overflow-hidden">
                      <div>
                        <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-teal block mb-2">{port.code}</span>
                        <h3 className="text-white text-4xl md:text-5xl font-bold tracking-tighter leading-none">{port.name}</h3>
                        <p className="text-white/40 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700 max-w-xs">{port.ports}</p>
                      </div>
                      <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-12 group-hover:translate-y-0">
                         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><path d="M5 12h14m-7-7l7 7-7 7"/></svg>
                      </div>
                   </div>
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* SECTION: DESIRE - Pinned Route Map */}
      <section className="pin-section w-full px-6 md:px-10 relative">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-24">
          <div className="w-full lg:w-1/2 py-32 md:py-64">
             <div className="pin-target w-full aspect-square bg-ink rounded-[4rem] overflow-hidden shadow-2xl relative">
                <Image src="/Cards/Card 1.jpg" alt="Technical Route" fill className="object-cover opacity-40" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center">
                   <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-teal mb-8">Primary Corridor</span>
                   <h3 className="text-white text-5xl md:text-7xl font-bold tracking-tighter mb-4">AU &rarr; DXB</h3>
                   <div className="w-full max-w-xs h-px bg-white/20 my-8 relative">
                      <div className="absolute top-1/2 left-0 w-2 h-2 rounded-full bg-teal -translate-y-1/2 shadow-[0_0_15px_var(--c-teal)]" />
                      <div className="absolute top-1/2 right-0 w-2 h-2 rounded-full bg-white -translate-y-1/2 shadow-[0_0_15px_white]" />
                   </div>
                   <p className="text-white/40 uppercase tracking-widest text-[10px] font-bold">Temporal Efficiency: 30–45 Days</p>
                </div>
             </div>
          </div>
          <div className="w-full lg:w-1/2 py-32 md:py-64 space-y-64">
             <div>
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-teal mb-4 block">01 / Loading</span>
                <h3 className="text-5xl font-bold tracking-tighter mb-8">Direct Technical <br/> Connection.</h3>
                <p className="text-xl text-ink-mid leading-relaxed">
                   By focusing exclusively on the Australia to Dubai route, we bypass the general cargo delays typical of multi-port carriers. Our schedules are locked and technically verified for peak transit velocity.
                </p>
             </div>
             <div>
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-teal mb-4 block">02 / Transit</span>
                <h3 className="text-5xl font-bold tracking-tighter mb-8">Temporal <span className="inline-block px-4 py-1 bg-teal text-white rounded-full text-base align-middle mx-2">30-45D</span> Efficiency.</h3>
                <p className="text-xl text-ink-mid leading-relaxed">
                   Direct sailings prioritize vehicle safety and cargo integrity. Every day in transit is logged in our real-time technical dashboard, ensuring absolute transparency.
                </p>
             </div>
             <div>
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-teal mb-4 block">03 / Arrivals</span>
                <h3 className="text-5xl font-bold tracking-tighter mb-8">Jebel Ali <br/> Free Zone Hub.</h3>
                <p className="text-xl text-ink-mid leading-relaxed">
                   Our Dubai logistics hub is positioned within the Jebel Ali Free Zone, enabling instant technical condition reporting and rapid onward distribution across the UAE.
                </p>
             </div>
          </div>
        </div>
      </section>

      {/* SECTION: DESIRE - Scrubbing Advice */}
      <section className="scrub-container w-full py-32 md:py-64 bg-ink overflow-hidden border-y border-white/5 relative">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="flex justify-center items-center gap-4 mb-12">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-teal">Technical Advantage</span>
          </div>
          <h3 className="scrub-text text-3xl md:text-6xl font-medium tracking-tight leading-[1.3] text-white">
            {"Primelane Logistics offers streamlined Australia-wide vehicle collection and wharf cartage. Our technical routing ensures your goods reach the port in optimal condition, bypassing general freight congestion through dedicated industrial corridors.".split(" ").map((word, i) => (
              <span key={i} className="opacity-10 inline-block mr-[0.25em]">{word}</span>
            ))}
          </h3>
        </div>
      </section>

      {/* SECTION: ACTION - Massive CTA */}
      <section className="w-full py-32 md:py-64 px-6 md:px-10 bg-offwhite">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-24">
           <h2 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9]">
             Initiate <br/> <span className="text-teal">Routing.</span>
           </h2>
           <Link href="/help-centre/contact" className="group relative w-full lg:w-[400px] aspect-square rounded-[4rem] bg-ink flex items-center justify-center hover:bg-teal transition-all duration-700 hover:scale-105 active:scale-95 shadow-2xl">
              <span className="text-white font-bold text-4xl tracking-tighter group-hover:scale-110 transition-transform duration-500">REQUEST QUOTE</span>
              <div className="absolute bottom-12 right-12">
                 <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="white" strokeWidth="2" className="group-hover:rotate-45 transition-transform duration-500">
                    <path d="M9 39L39 9M39 9H15M39 9V33"/>
                 </svg>
              </div>
           </Link>
        </div>
      </section>

      <section className="w-full py-12 bg-white border-t border-divider overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          {[1,2,3,4,5].map((i) => (
            <div key={i} className="flex items-center gap-24 px-12">
              <span className="text-sm font-bold text-ink/20 tracking-[0.5em] uppercase">Melbourne Connection</span>
              <span className="text-sm font-bold text-ink/20 tracking-[0.5em] uppercase">Sydney Hub</span>
              <span className="text-sm font-bold text-ink/20 tracking-[0.5em] uppercase">Dubai Terminal</span>
              <span className="text-sm font-bold text-ink/20 tracking-[0.5em] uppercase">Technical Corridor</span>
            </div>
          ))}
        </div>
      </section>

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </main>
  );
}
