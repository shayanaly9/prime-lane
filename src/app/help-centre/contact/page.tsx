"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function ContactEnquiries() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Hero Entry
    gsap.from(".hero-reveal", {
      y: 40,
      opacity: 0,
      stagger: 0.1,
      duration: 1,
      ease: "power3.out"
    });

    // Card Stacking
    const cards = gsap.utils.toArray(".contact-card");
    cards.forEach((card: any, i) => {
      gsap.from(card, {
        y: 100 * (i + 1),
        opacity: 0,
        scrollTrigger: {
          trigger: card,
          start: "top 90%",
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
            src="/Contacts.webp" 
            alt="Global Network" 
            fill 
            className="object-cover opacity-60 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/90 via-ink/40 to-white" />
        </div>

        <div className="relative z-10 w-full max-w-5xl">
          <h1 className="hero-reveal text-6xl md:text-9xl font-bold tracking-tighter leading-[0.85] text-white mb-12">
            Technical <br/> <span className="text-teal">Access.</span>
          </h1>
          <p className="hero-reveal text-xl md:text-2xl text-white/60 max-w-2xl mx-auto leading-relaxed mb-16">
            Direct channels to our logistics engineers. No middle-tier support, just precision freight solutions.
          </p>
          <div className="hero-reveal flex flex-col md:flex-row items-center justify-center gap-6">
            <Link href="mailto:contact@primelanelogistics.com.au" className="w-full md:w-auto">
              <button className="w-full px-8 md:px-12 py-5 md:py-6 bg-white text-ink font-bold rounded-full hover:scale-105 transition-transform">
                Initiate Corridor Enquiry
              </button>
            </Link>
            <Link href="tel:+61421821220" className="w-full md:w-auto">
              <button className="w-full px-8 md:px-12 py-5 md:py-6 bg-teal text-white font-bold rounded-full hover:scale-105 transition-transform">
                Call Operations Desk
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION: INTEREST - Global Channels */}
      <section className="w-full py-32 md:py-48 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24 flex items-end justify-between">
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter leading-none">
              Global <span className="inline-block w-24 h-12 bg-teal/10 rounded-full align-middle mx-4 overflow-hidden border border-teal/20 relative">
                <Image src="/Cards/Card 1.jpg" alt="asset" fill className="object-cover" />
              </span> Channels.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 grid-flow-dense">
            {/* Card 1: Technical */}
            <div className="contact-card bg-offwhite p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] min-h-[350px] md:min-h-[450px] flex flex-col justify-between border border-divider">
              <div>
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-teal mb-8 block">Protocol 01</span>
                <h3 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">Technical <br/> Enquiries</h3>
                <p className="text-ink-mid text-lg leading-relaxed">Vehicle logistics, customs precision, and DG certification routing.</p>
              </div>
              <a href="mailto:contact@primelanelogistics.com.au" className="text-xl md:text-2xl font-bold tracking-tight hover:text-teal transition-colors">
                technical@primelane
              </a>
            </div>

            {/* Card 2: Commercial */}
            <div className="contact-card bg-ink p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] min-h-[350px] md:min-h-[450px] flex flex-col justify-between shadow-2xl">
              <div>
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/70 mb-8 block">Protocol 02</span>
                <h3 className="text-3xl md:text-4xl font-bold tracking-tighter text-white mb-4">Commercial <br/> Bookings</h3>
                <p className="text-white/80 text-lg leading-relaxed">FCL/LCL container corridor scheduling and volume agreements.</p>
              </div>
              <a href="mailto:bookings@primelanelogistics.com.au" className="text-xl md:text-2xl font-bold tracking-tight text-white hover:text-teal transition-colors">
                bookings@primelane
              </a>
            </div>

            {/* Card 3: Support */}
            <div className="contact-card bg-offwhite p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] min-h-[350px] md:min-h-[450px] flex flex-col justify-between border border-divider">
              <div>
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-teal mb-8 block">Protocol 03</span>
                <h3 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">Operations <br/> Support</h3>
                <p className="text-ink-mid text-lg leading-relaxed">Tracking updates and real-time corridor technical status reporting.</p>
              </div>
              <a href="tel:+61421821220" className="text-xl md:text-2xl font-bold tracking-tight hover:text-teal transition-colors">
                +61 421 821 220
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: DESIRE - Pro Tip Scrub */}
      <section className="scrub-container w-full py-32 md:py-64 bg-offwhite border-y border-divider">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="flex justify-center items-center gap-4 mb-12">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-teal">Technical Efficiency</span>
          </div>
          <h3 className="scrub-text text-3xl md:text-5xl font-medium tracking-tight leading-[1.4] text-ink">
            {"To ensure a peak response time, please include your cargo specification and corridor route in the subject line. Example: '2x Prestige Vehicles AU to Dubai FCL'. This allows our automated triage to route your data directly to the relevant corridor specialist immediately.".split(" ").map((word, i) => (
              <span key={i} className="opacity-10 inline-block mr-[0.25em]">{word}</span>
            ))}
          </h3>
        </div>
      </section>

      {/* SECTION: ACTION - Operating Standards */}
      <section className="w-full py-32 md:py-48 px-6 md:px-10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-24">
          <div className="w-full lg:w-1/2">
            <h2 className="text-5xl md:text-6xl lg:text-8xl font-bold tracking-tighter leading-[0.9] mb-12">
              Operating <br/> <span className="text-teal">Standards.</span>
            </h2>
            <div className="space-y-12">
               <div className="flex items-start gap-8">
                  <span className="text-4xl font-bold text-teal/30 tabular">01</span>
                  <div>
                    <h4 className="text-2xl font-bold mb-2">Technical Response</h4>
                    <p className="text-ink-mid">All technical queries are resolved within 24 hours by a specialist.</p>
                  </div>
               </div>
               <div className="flex items-start gap-8">
                  <span className="text-4xl font-bold text-teal/30 tabular">02</span>
                  <div>
                    <h4 className="text-2xl font-bold mb-2">Live Operations</h4>
                    <p className="text-ink-mid">Active corridor tracking is available Mon–Fri, 9AM–5PM AEST.</p>
                  </div>
               </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 bg-ink p-10 md:p-16 rounded-[2.5rem] md:rounded-[4rem] text-center shadow-2xl relative overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-tr from-teal/20 to-transparent opacity-50" />
             <div className="relative z-10">
               <h3 className="text-white text-3xl md:text-5xl font-bold tracking-tighter mb-8 md:mb-12">Corridor Access</h3>
               <Link href="mailto:contact@primelanelogistics.com.au" className="block w-full py-6 md:py-8 bg-white text-ink font-bold rounded-full text-xl md:text-2xl hover:scale-105 transition-transform mb-6 md:mb-8">
                 Email Specialist
               </Link>
               <a href="tel:+61421821220" className="text-white/60 font-bold tracking-widest uppercase hover:text-white transition-colors">
                 Emergency Technical Desk
               </a>
             </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 bg-white border-t border-divider overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          {[1,2,3,4,5].map((i) => (
            <div key={i} className="flex items-center gap-24 px-12">
              <span className="text-sm font-bold text-ink/20 tracking-[0.5em] uppercase">ISO Certified</span>
              <span className="text-sm font-bold text-ink/20 tracking-[0.5em] uppercase">DG Licensed</span>
              <span className="text-sm font-bold text-ink/20 tracking-[0.5em] uppercase">IATA Member</span>
              <span className="text-sm font-bold text-ink/20 tracking-[0.5em] uppercase">Technical Precision</span>
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
