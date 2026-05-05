"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Certifications() {
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

    // Card Stacking
    const cards = gsap.utils.toArray(".cert-card");
    cards.forEach((card: any, i) => {
      gsap.from(card, {
        y: 100 * (i + 1),
        opacity: 0,
        scrollTrigger: {
          trigger: card,
          start: "top 95%",
          end: "top 70%",
          scrub: true,
        }
      });
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
      {/* SECTION: ATTENTION (HERO) - Cinematic Center */}
      <section className="relative w-full py-64 md:py-80 px-6 md:px-10 flex flex-col items-center justify-center text-center">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/Certifications.webp" 
            alt="Technical Standards" 
            fill 
            className="object-cover opacity-60 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/95 via-ink/60 to-white" />
        </div>

        <div className="relative z-10 w-full max-w-5xl">
          <div className="hero-reveal flex items-center justify-center gap-4 mb-8">
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-teal">Regulatory Standards</span>
          </div>
          <h1 className="hero-reveal text-6xl md:text-9xl font-bold tracking-tighter leading-[0.85] text-white mb-12">
            Technical <br/> <span className="text-teal">Authority.</span>
          </h1>
          <p className="hero-reveal text-xl md:text-2xl text-white/60 max-w-2xl mx-auto leading-relaxed mb-16">
            Operating at the absolute peak of international compliance. Verified certifications across all global freight corridors.
          </p>
          <div className="hero-reveal flex flex-col md:flex-row items-center justify-center gap-6">
            <Link href="/help-centre/contact" className="w-full md:w-auto">
              <button className="px-12 py-6 bg-white text-ink font-bold rounded-full hover:scale-105 transition-transform">
                Verify Compliance Status
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION: INTEREST - Bento Certifications */}
      <section className="w-full py-32 md:py-48 px-6 md:px-10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-24">
           {/* Technical Feed */}
           <div className="w-full lg:w-3/5">
              <div className="mb-24">
                 <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none">
                   Technical <br/> <span className="text-teal">Precision.</span>
                 </h2>
              </div>
              
              <div className="space-y-6">
                 {/* DG Certification */}
                 <div className="cert-card bg-offwhite p-12 rounded-[3.5rem] border border-divider group hover:bg-ink transition-colors duration-700">
                    <div className="flex items-center gap-6 mb-8">
                       <div className="w-14 h-14 bg-teal rounded-2xl flex items-center justify-center text-white font-bold text-xl">DG</div>
                       <h3 className="text-3xl font-bold tracking-tight group-hover:text-white">Dangerous Goods Certified</h3>
                    </div>
                    <p className="text-xl text-ink-mid leading-relaxed group-hover:text-white/40 transition-colors">
                       Legally authorized to handle and transport DG Classes 2 through 9. Rigorous specialized training and strict adherence to national safety protocols.
                    </p>
                 </div>

                 {/* Freight Compliance */}
                 <div className="cert-card bg-offwhite p-12 rounded-[3.5rem] border border-divider group hover:bg-ink transition-colors duration-700">
                    <div className="flex items-center gap-6 mb-8">
                       <div className="w-14 h-14 bg-ink group-hover:bg-teal rounded-2xl flex items-center justify-center text-white font-bold text-xl">IF</div>
                       <h3 className="text-3xl font-bold tracking-tight group-hover:text-white">International Freight Compliance</h3>
                    </div>
                    <p className="text-xl text-ink-mid leading-relaxed group-hover:text-white/40 transition-colors">
                       Full compliance with ABF regulations and UAE import authorities. Verified maritime and aviation standards for seamless cross-border transit.
                    </p>
                 </div>
              </div>
           </div>

           {/* Status Dashboard */}
           <div className="w-full lg:w-2/5 lg:sticky lg:top-32 h-fit">
              <div className="bg-ink p-12 rounded-[4rem] text-white shadow-2xl relative overflow-hidden">
                 <div className="absolute inset-0 bg-gradient-to-tr from-teal/20 to-transparent opacity-50" />
                 <div className="relative z-10">
                    <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-teal mb-12 block">Status Dashboard</span>
                    <div className="space-y-12">
                       {[
                         { label: "DG License (Class 2-9)", status: "Active" },
                         { label: "Freight Accreditation", status: "Verified" },
                         { label: "Maritime Compliance", status: "Compliant" },
                         { label: "ABF Regulatory", status: "Authorized" }
                       ].map((item, i) => (
                          <div key={i} className="flex items-center justify-between border-b border-white/5 pb-8">
                             <span className="text-lg font-medium text-white/60">{item.label}</span>
                             <div className="flex items-center gap-3">
                                <span className="w-2 h-2 bg-teal rounded-full shadow-[0_0_10px_var(--c-teal)]" />
                                <span className="text-[10px] font-bold uppercase tracking-widest">{item.status}</span>
                             </div>
                          </div>
                       ))}
                    </div>
                    <div className="mt-16 p-8 bg-white/5 rounded-[2rem] border border-white/10">
                       <p className="text-sm text-white/40 leading-relaxed italic">
                          All certifications are audited annually to ensure continued adherence to international logistics and safety benchmarks.
                       </p>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* SECTION: DESIRE - Scrubbing Excellence */}
      <section className="scrub-container w-full py-32 md:py-64 bg-offwhite border-y border-divider">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="flex justify-center items-center gap-4 mb-12">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-teal">Operational Philosophy</span>
          </div>
          <h3 className="scrub-text text-4xl md:text-6xl font-medium tracking-tight leading-[1.25] text-ink">
            {"Operational excellence is not a metric, it is a commitment to protecting your cargo, our team, and the global environment. At PrimeLane, we operate at the absolute highest standards of regulatory compliance, ensuring your assets move through the world's most complex corridors without friction.".split(" ").map((word, i) => (
              <span key={i} className="opacity-10 inline-block mr-[0.25em]">{word}</span>
            ))}
          </h3>
        </div>
      </section>

      {/* SECTION: ACTION - Massive CTA */}
      <section className="w-full py-32 md:py-64 px-6 md:px-10">
        <div className="max-w-7xl mx-auto bg-ink rounded-[5rem] p-16 md:p-32 flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden shadow-2xl">
           <div className="absolute inset-0 bg-gradient-to-br from-teal/20 to-transparent" />
           <div className="relative z-10 text-white text-center md:text-left">
              <h2 className="text-6xl md:text-8xl font-bold tracking-tighter leading-none mb-8">Verified <br/> <span className="text-teal">Corridors.</span></h2>
              <p className="text-white/40 text-xl max-w-sm mx-auto md:mx-0">Connect with a compliance specialist to verify routing for your specific cargo class.</p>
           </div>
           <Link href="/help-centre/contact" className="relative z-10">
              <button className="px-16 py-8 bg-white text-ink font-bold rounded-full text-2xl hover:bg-teal hover:text-white transition-all duration-700 hover:scale-110 active:scale-95">
                Request Protocol
              </button>
           </Link>
        </div>
      </section>

      <section className="w-full py-12 bg-white border-t border-divider overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          {[1,2,3,4,5].map((i) => (
            <div key={i} className="flex items-center gap-24 px-12">
              <span className="text-sm font-bold text-ink/20 tracking-[0.5em] uppercase">ISO 9001 Compliance</span>
              <span className="text-sm font-bold text-ink/20 tracking-[0.5em] uppercase">DG Class 2-9 Verified</span>
              <span className="text-sm font-bold text-ink/20 tracking-[0.5em] uppercase">ABF Authorized</span>
              <span className="text-sm font-bold text-ink/20 tracking-[0.5em] uppercase">IMO Maritime Certified</span>
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
