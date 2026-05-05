"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setActiveDropdown(null);
    setMobileOpen(false);
  }, [pathname]);

  useGSAP(() => {
    if (mobileOpen) {
      gsap.fromTo(".mobile-link", 
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1, duration: 0.5, ease: "power4.out" }
      );
    }
  }, { dependencies: [mobileOpen] });

  return (
    <nav 
      ref={navRef}
      className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-300 ease-out flex items-center justify-center
        ${scrolled ? "py-4 md:py-4" : "py-0"}`}
    >
      {/* SECTION: FLOATING GLASS PILL */}
      <div 
        className={`relative flex items-center justify-between px-6 md:px-8 transition-all duration-300 ease-out
          ${scrolled 
            ? "w-full md:w-max md:min-w-[800px] h-16 bg-white/80 backdrop-blur-3xl md:rounded-full border-b md:border border-divider shadow-2xl" 
            : "w-full h-20 md:h-24 bg-white/40 backdrop-blur-xl border-b border-divider shadow-none"}`}
      >
        {/* LOGO */}
        <Link href="/" className="flex-shrink-0 group">
          <Image
            src="/Prime-lane-logo.png"
            alt="PrimeLane"
            width={90}
            height={28}
            className="object-contain transition-transform duration-500 group-hover:scale-110 md:w-[100px]"
            priority
          />
        </Link>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex items-center gap-1">
          <Link href="/#services" className="px-5 py-2 text-[13px] font-bold tracking-tight text-ink hover:text-teal transition-colors">
            Services
          </Link>

          {/* DROPDOWN: ABOUT */}
          <div className="relative group" onMouseEnter={() => setActiveDropdown('about')} onMouseLeave={() => setActiveDropdown(null)}>
             <button className="px-5 py-2 text-[13px] font-bold tracking-tight text-ink flex items-center gap-2 group-hover:text-teal transition-colors">
               About
               <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="group-hover:rotate-180 transition-transform"><path d="M6 9l6 6 6-6"/></svg>
             </button>
             <div className={`absolute top-full right-0 pt-4 transition-all duration-500 ${activeDropdown === 'about' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
                <div className="w-56 bg-white/90 backdrop-blur-3xl border border-divider rounded-[2rem] p-4 shadow-2xl">
                   {[
                     ['Our story', '/about/our-story'],
                     ['Technical Advantages', '/about/why-choose-us'],
                     ['Accreditations', '/about/certifications']
                   ].map(([label, href]) => (
                     <Link key={label} href={href} className="block px-6 py-3 rounded-2xl text-[12px] font-medium text-ink-mid hover:bg-teal hover:text-white transition-all">
                       {label}
                     </Link>
                   ))}
                </div>
             </div>
          </div>

          {/* DROPDOWN: HELP */}
          <div className="relative group" onMouseEnter={() => setActiveDropdown('help')} onMouseLeave={() => setActiveDropdown(null)}>
             <button className="px-5 py-2 text-[13px] font-bold tracking-tight text-ink flex items-center gap-2 group-hover:text-teal transition-colors">
               Help Centre
               <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="group-hover:rotate-180 transition-transform"><path d="M6 9l6 6 6-6"/></svg>
             </button>
             <div className={`absolute top-full right-0 pt-4 transition-all duration-500 ${activeDropdown === 'help' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
                <div className="w-56 bg-white/90 backdrop-blur-3xl border border-divider rounded-[2rem] p-4 shadow-2xl">
                   {[
                     ['Protocol FAQs', '/#faq'],
                     ['Technical Contact', '/help-centre/contact'],
                     ['Corridor Routes', '/help-centre/shipping-routes']
                   ].map(([label, href]) => (
                     <Link key={label} href={href} className="block px-6 py-3 rounded-2xl text-[12px] font-medium text-ink-mid hover:bg-teal hover:text-white transition-all">
                       {label}
                     </Link>
                   ))}
                </div>
             </div>
          </div>

          <Link 
            href="/help-centre/contact" 
            style={{ 
              background: 'var(--c-teal)', 
              color: 'white', 
              boxShadow: '0 8px 30px rgba(26, 122, 98, 0.2)' 
            }}
            className="ml-4 px-8 py-3 text-[11px] font-bold rounded-full hover:scale-105 active:scale-95 transition-all uppercase tracking-[0.15em] border border-white/10"
          >
            Get in touch
          </Link>
        </div>

        {/* MOBILE TRIGGER */}
        <button 
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex md:hidden w-10 h-10 items-center justify-center rounded-full hover:bg-black/5 transition-colors relative z-[1100]"
        >
          <div className="w-6 flex flex-col gap-1.5">
             <div className={`h-[2px] bg-ink transition-all duration-500 ${mobileOpen ? 'rotate-45 translate-y-[8px]' : ''}`} />
             <div className={`h-[2px] bg-ink transition-all duration-500 ${mobileOpen ? 'opacity-0' : ''}`} />
             <div className={`h-[2px] bg-ink transition-all duration-500 ${mobileOpen ? '-rotate-45 -translate-y-[8px]' : ''}`} />
          </div>
        </button>
      </div>

      {/* MOBILE MODAL: FLUID ISLAND REVEAL */}
      <div className={`fixed inset-0 bg-white z-[1050] flex flex-col items-center justify-center px-10 transition-all duration-1000 ease-[cubic-bezier(0.32,0.72,0,1)]
        ${mobileOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-full"}`}
      >
        <div className="flex flex-col items-center gap-12 text-center">
           {[
             ['Services', '/#services'],
             ['Our Story', '/about/our-story'],
             ['Technical Routes', '/help-centre/shipping-routes'],
             ['Accreditations', '/about/certifications'],
             ['Contact', '/help-centre/contact']
           ].map(([label, href]) => (
             <Link 
               key={label} 
               href={href} 
               className="mobile-link text-5xl font-bold tracking-tighter text-ink hover:text-teal transition-colors"
             >
               {label}
             </Link>
           ))}
        </div>
        
        <div className="absolute bottom-20 w-full px-10">
           <Link href="/help-centre/contact" className="block w-full py-6 bg-teal text-white text-center rounded-full font-bold uppercase tracking-[0.2em]">
             Initiate Protocol
           </Link>
        </div>
      </div>
    </nav>
  );
}
