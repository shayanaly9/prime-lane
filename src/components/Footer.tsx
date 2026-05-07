"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Footer() {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    // Parallax Reveal of the Footer Content
    gsap.from(".footer-reveal", {
      y: 100,
      opacity: 0,
      stagger: 0.15,
      duration: 1.2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: container.current,
        start: "top bottom",
      }
    });
  }, { scope: container });

  return (
    <footer 
      ref={container}
      className="w-full bg-[#080808] relative overflow-hidden"
    >
      {/* SECTION: ATMOSPHERIC TEXTURE */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay" style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }} />
      <div className="absolute top-0 left-0 w-full h-px bg-white/5" />
      
      {/* SECTION: MASSIVE CONVERSION (AIDA ACTION) */}
      <div className="footer-reveal relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 pt-32 pb-48 border-b border-white/5">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24 text-center lg:text-left">
           <div className="max-w-3xl">
              <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-teal mb-8 block">Operational Readiness</span>
              <h2 className="text-6xl md:text-8xl font-bold text-white tracking-tighter leading-[0.9]">
                Initiate your <br />
                <span className="text-teal">Global Route.</span>
              </h2>
           </div>
           <Link href="/help-centre/contact" className="group relative">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-10 md:px-16 py-6 md:py-8 bg-white text-ink font-bold rounded-full text-base md:text-xl shadow-2xl transition-all duration-500 overflow-hidden"
              >
                <span className="relative z-10 uppercase tracking-widest">Connect with Ops</span>
                <div className="absolute inset-0 bg-teal translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </motion.div>
           </Link>
        </div>
      </div>

      {/* SECTION: ASYMMETRIC BENTO GRID */}
      <div className="footer-reveal relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Column 1: Brand & Live Status (4 cols) */}
          <div className="lg:col-span-4 space-y-12">
            <Link href="/" className="inline-block">
              <Image src="/Prime-lane-logo.png" alt="PrimeLane" width={160} height={48} className="brightness-0 invert opacity-90" />
            </Link>
            


            <p className="text-white text-base leading-relaxed max-w-xs">
              Engineering high-velocity corridors between the Australian mainland and the Middle Eastern trading hubs.
            </p>
          </div>

          {/* Column 2: Capabilities (3 cols) */}
          <div className="lg:col-span-3 space-y-10">
            <h4 className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/70">Capabilities</h4>
            <ul className="space-y-6">
              {[
                ['AU-UAE Corridor', '/#services'],
                ['Sea Freight Technical', '/services/industrial-freight'],
                ['Vehicle Logistics', '/services/vehicle-logistics'],
                ['Industrial Solutions', '/services/industrial-freight']
              ].map(([label, href]) => (
                <li key={label}>
                  <Link href={href} className="text-white/80 hover:text-white transition-all text-sm font-semibold tracking-tight group flex items-center gap-3">
                    <div className="w-0 h-px bg-teal transition-all duration-500 group-hover:w-4" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Protocol (3 cols) */}
          <div className="lg:col-span-3 space-y-10">
            <h4 className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/70">Protocol</h4>
            <ul className="space-y-6">
              {[
                ['Our Narrative', '/about/our-story'],
                ['Technical Certifications', '/about/certifications'],
                ['Technical FAQ', '/#faq'],
                ['Contact Engineering', '/help-centre/contact']
              ].map(([label, href]) => (
                <li key={label}>
                  <Link href={href} className="text-white/80 hover:text-white transition-all text-sm font-semibold tracking-tight group flex items-center gap-3">
                    <div className="w-0 h-px bg-teal transition-all duration-500 group-hover:w-4" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Global Desk (2 cols) */}
          <div className="lg:col-span-2 space-y-10">
            <h4 className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/70">Global Desk</h4>
            <div className="space-y-8">
              <div>
                <p className="text-[10px] font-bold text-white uppercase tracking-widest mb-3">Technical Support</p>
                <a href="tel:+61421821220" className="text-xl font-bold text-white hover:text-teal transition-colors tracking-tighter tabular-nums">+61 421 821 220</a>
              </div>
              <div>
                <p className="text-[10px] font-bold text-white uppercase tracking-widest mb-3">Direct Protocol</p>
                <a href="mailto:contact@primelanelogistics.com.au" className="text-xs font-bold text-white/90 hover:text-white border-b border-white/10 pb-1 hover:border-teal transition-all">contact@primelane.com.au</a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* SECTION: COMPLIANCE MARQUEE & LEGAL */}
      <div className="footer-reveal relative z-10 border-t border-white/5 py-12 px-6 md:px-10">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* Infinite Marquee */}
          <div className="flex items-center gap-12 overflow-hidden w-full md:w-auto">
             <div className="flex gap-24 animate-marquee whitespace-nowrap">
                {['ISO 9001 CERTIFIED', 'DG CLASS 2–9 LICENSED', 'IATA MEMBER', 'AU-UAE SPECIALIST'].map(cert => (
                  <span key={cert} className="text-[10px] font-bold tracking-[0.6em] text-white/50 uppercase">{cert}</span>
                ))}
             </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-10">
             <p className="text-[10px] font-bold tracking-widest text-white/70 uppercase">
                &copy; {new Date().getFullYear()} PrimeLane Logistics.
             </p>
             <button 
               onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
               className="group flex items-center gap-4 text-[10px] font-bold tracking-widest text-white/80 hover:text-white uppercase transition-all"
             >
                TOP
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center transition-all group-hover:border-white group-hover:bg-white/5">
                   <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M18 15l-6-6-6 6"/></svg>
                </div>
             </button>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </footer>
  );
}
