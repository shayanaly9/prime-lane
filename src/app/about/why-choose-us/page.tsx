"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function WhyChooseUs() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Hero Reveal
    gsap.from(".hero-reveal", {
      y: 80,
      opacity: 0,
      stagger: 0.15,
      duration: 1.4,
      ease: "power4.out"
    });

    // Image Scroll Scaling
    gsap.utils.toArray(".reveal-img").forEach((img: any) => {
      gsap.fromTo(img, 
        { scale: 0.8, opacity: 0 },
        { 
          scale: 1, 
          opacity: 1, 
          scrollTrigger: {
            trigger: img,
            start: "top 90%",
            end: "top 60%",
            scrub: true,
          }
        }
      );
    });

    // Scrubbing Text
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
      {/* SECTION: ATTENTION (HERO) - Artistic Asymmetry */}
      <section className="relative w-full py-48 md:py-64 px-6 md:px-10 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-3/5 z-10">
            <div className="hero-reveal flex items-center gap-4 mb-8">
              <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-teal">Tactical Superiority</span>
            </div>
            <h1 className="hero-reveal text-7xl md:text-9xl font-bold tracking-tighter leading-[0.85] mb-12">
              Engineered <br/> <span className="text-teal">Velocity.</span>
            </h1>
            <p className="hero-reveal text-xl md:text-2xl text-ink-mid leading-relaxed max-w-xl">
              We specialize where others generalize. Our technical mastery of the Australia-to-Dubai corridor eliminates the variable of uncertainty.
            </p>
          </div>
          <div className="hero-reveal w-full lg:w-2/5 mt-24 lg:mt-0 relative aspect-square lg:translate-x-12">
             <div className="w-full h-full bg-offwhite rounded-[4rem] overflow-hidden shadow-2xl relative rotate-3 group">
                <Image 
                  src="/why-primlane.webp" 
                  alt="Engineering" 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-1000" 
                />
                <div className="absolute inset-0 bg-ink/10 mix-blend-multiply" />
             </div>
             {/* Float Asset */}
             <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-white p-4 rounded-[2rem] shadow-2xl -rotate-6 z-20 hero-reveal">
                <div className="w-full h-full bg-teal/10 rounded-[1.5rem] flex items-center justify-center p-6 text-center">
                   <p className="text-[10px] font-bold tracking-widest text-teal uppercase leading-tight">ISO 9001 <br/> Certified Routing</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* SECTION: INTEREST - The Bento Advantage */}
      <section className="w-full py-32 md:py-48 px-6 md:px-10 bg-offwhite">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none">
              Strategic <span className="inline-block w-20 h-10 bg-teal/20 rounded-full align-middle mx-3 overflow-hidden relative border border-teal/10">
                <Image src="/Cards/Card 1.jpg" alt="asset" fill className="object-cover" />
              </span> Advantage.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 grid-flow-dense">
             {/* Card 1: Route Mastery */}
             <div className="md:col-span-8 bg-white p-16 rounded-[3.5rem] border border-divider shadow-sm flex flex-col justify-between min-h-[500px] group hover:bg-ink transition-colors duration-700">
                <div>
                   <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-teal mb-12 block">Core 01</span>
                   <h3 className="text-5xl font-bold tracking-tighter mb-8 group-hover:text-white transition-colors">Unmatched Route <br/> Expertise.</h3>
                   <p className="text-xl text-ink-mid leading-relaxed max-w-md group-hover:text-white/40 transition-colors">
                      Focused technical mapping of the AU to Dubai corridor ensure CHALLENGES are resolved before departure.
                   </p>
                </div>
                <div className="flex gap-4">
                   <span className="px-6 py-2 bg-offwhite group-hover:bg-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest group-hover:text-white transition-colors">Melbourne Hub</span>
                   <span className="px-6 py-2 bg-offwhite group-hover:bg-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest group-hover:text-white transition-colors">Dubai Terminal</span>
                </div>
             </div>

             {/* Card 2: Container Scale */}
             <div className="md:col-span-4 bg-teal p-16 rounded-[3.5rem] shadow-xl flex flex-col justify-between min-h-[500px]">
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-white mb-12 block">Core 02</span>
                <h3 className="text-4xl font-bold tracking-tighter text-white mb-8 leading-none">Tailored <br/> Scaling.</h3>
                <p className="text-white/60 text-lg">FCL & LCL precision matching your exact volume requirements.</p>
             </div>

             {/* Card 3: Experience */}
             <div className="md:col-span-4 bg-ink p-16 rounded-[3.5rem] shadow-2xl flex flex-col justify-between min-h-[500px]">
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-teal mb-12 block">Core 03</span>
                <h3 className="text-4xl font-bold tracking-tighter text-white mb-8 leading-none">8+ Years <br/> Supply Mastery.</h3>
                <div className="w-16 h-1 bg-teal" />
             </div>

             {/* Card 4: Safety */}
             <div className="md:col-span-8 bg-offwhite p-16 rounded-[3.5rem] border border-divider flex flex-col md:flex-row gap-12 items-center min-h-[500px]">
                <div className="w-full md:w-1/2">
                   <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-teal mb-12 block">Core 04</span>
                   <h3 className="text-5xl font-bold tracking-tighter mb-8">Safety & <br/> Compliance.</h3>
                   <p className="text-xl text-ink-mid leading-relaxed">Fully DG Certified (Class 2-9) capability for complex industrial routing.</p>
                </div>
                <div className="w-full md:w-1/2 aspect-square relative rounded-[2rem] overflow-hidden reveal-img">
                   <Image src="/Cards/Card 3.jpg" alt="Safety" fill className="object-cover" />
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* SECTION: DESIRE - Philosophy Scrub */}
      <section className="scrub-container w-full py-32 md:py-64 bg-white border-y border-divider">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="flex justify-center items-center gap-4 mb-12">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-teal">Operational Philosophy</span>
          </div>
          <h3 className="scrub-text text-4xl md:text-6xl font-medium tracking-tight leading-[1.25] text-ink">
            {"When you partner with PrimeLane, you choose a team that understands your cargo is not just freight—it is a critical business asset. We manage every mile with technical precision, ensuring zero-void logistics from origin to final technical destination.".split(" ").map((word, i) => (
              <span key={i} className="opacity-10 inline-block mr-[0.25em]">{word}</span>
            ))}
          </h3>
        </div>
      </section>

      {/* SECTION: ACTION - Massive CTA */}
      <section className="w-full py-32 md:py-64 px-6 md:px-10 bg-ink relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
           <Image src="/Routes.webp" alt="bg" fill className="object-cover grayscale" />
        </div>
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-24 relative z-10">
           <div className="text-white">
             <h2 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9] mb-12">
               Experience <br/> The <span className="text-teal">Difference.</span>
             </h2>
             <p className="text-xl text-white/40 max-w-md">Let our specialist team manage your next corridor routing with absolute precision.</p>
           </div>
           <Link href="/help-centre/contact" className="group w-full lg:w-auto">
              <button className="px-16 py-8 bg-white text-ink font-bold rounded-full text-2xl hover:bg-teal hover:text-white transition-all duration-700 hover:scale-110 active:scale-95 flex items-center gap-8">
                 START JOURNEY
                 <div className="w-12 h-12 rounded-full bg-ink/5 group-hover:bg-white/20 flex items-center justify-center transition-colors">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12h14m-7-7l7 7-7 7"/></svg>
                 </div>
              </button>
           </Link>
        </div>
      </section>

      <section className="w-full py-12 bg-white border-t border-divider overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          {[1,2,3,4,5].map((i) => (
            <div key={i} className="flex items-center gap-24 px-12">
              <span className="text-sm font-bold text-ink/20 tracking-[0.5em] uppercase">Tactical Routing</span>
              <span className="text-sm font-bold text-ink/20 tracking-[0.5em] uppercase">Engineering Standards</span>
              <span className="text-sm font-bold text-ink/20 tracking-[0.5em] uppercase">Zero Void Logistics</span>
              <span className="text-sm font-bold text-ink/20 tracking-[0.5em] uppercase">Specialized Velocity</span>
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
