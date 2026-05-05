"use client";

import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function ContactSection() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".contact-reveal", {
      y: 60,
      opacity: 0,
      stagger: 0.1,
      duration: 1.2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: container.current,
        start: "top 70%",
      }
    });
  }, { scope: container });

  return (
    <section 
      id="contact" 
      ref={container}
      className="w-full py-48 md:py-64 px-6 md:px-10 bg-black text-white relative overflow-hidden"
    >
      {/* Background Mesh Gradient */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-teal/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-teal/10 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 text-center flex flex-col items-center">
        <div className="contact-reveal mb-12">
          <span className="text-teal font-bold tracking-[0.3em] uppercase text-xs">Ready to start?</span>
        </div>
        
        <h2 className="contact-reveal text-6xl md:text-[9rem] font-bold leading-[0.85] tracking-tighter mb-16 max-w-5xl">
          Talk to an <span className="text-teal">Expert</span> Engineer.
        </h2>

        <p className="contact-reveal text-white/50 text-xl md:text-2xl max-w-2xl mb-20 leading-relaxed">
          No automated forms. No generic portals. Just direct access to the team engineering your global trade corridor.
        </p>

        <div className="contact-reveal flex flex-col sm:flex-row items-center gap-8">
          <Link href="/help-centre/contact">
            <button className="px-16 py-8 bg-white text-black text-xl font-bold rounded-full hover:scale-105 active:scale-95 transition-transform duration-500 shadow-[0_20px_50px_rgba(255,255,255,0.1)]">
              Begin Consultation
            </button>
          </Link>
          
          <div className="flex flex-col items-start gap-1">
            <span className="text-white/40 text-sm uppercase tracking-widest font-semibold">Priority Desk</span>
            <a href="tel:+61421821220" className="text-2xl font-bold hover:text-teal transition-colors">
              +61 421 821 220
            </a>
          </div>
        </div>
      </div>

      {/* Subtle bottom marquee or secondary action */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-20">
        <span className="text-xs font-medium tracking-[0.5em] uppercase">Secured End-to-End</span>
      </div>
    </section>
  );
}
