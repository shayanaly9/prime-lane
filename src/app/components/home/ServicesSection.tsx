"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const serviceModals = [
  {
    id: 1,
    title: "Australia → Dubai",
    subtitle: "Direct container corridor from Australia to UAE. FCL/LCL experts.",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    id: 2,
    title: "Global Sea Freight",
    subtitle: "Ocean freight connecting major global ports.",
    span: "md:col-span-2 md:row-span-1",
  },
  {
    id: 3,
    title: "Express Air Freight",
    subtitle: "Time-critical international delivery.",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    id: 4,
    title: "Vehicle Transport",
    subtitle: "Open & enclosed prestige car carriers.",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    id: 5,
    title: "Port Cartage",
    subtitle: "Side-loader and skeletal trailer operations.",
    span: "md:col-span-2 md:row-span-1",
  },
  {
    id: 6,
    title: "Industrial Freight",
    subtitle: "Automotive, chemical, and palletised logistics.",
    span: "md:col-span-2 md:row-span-1",
  }
];

export default function ServicesSection() {
  const [openServiceModal, setOpenServiceModal] = useState<number | null>(null);
  const container = useRef<HTMLDivElement>(null);
  const searchParams = useSearchParams();

  useGSAP(() => {
    // Reveal Header
    gsap.from(".services-header", {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: container.current,
        start: "top 95%",
      }
    });

    // Reveal Cards
    gsap.from(".bento-card", {
      y: 60,
      opacity: 0,
      stagger: 0.05,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: container.current,
        start: "top 85%",
      }
    });
  }, { scope: container });

  useEffect(() => {
    const serviceId = searchParams.get('service');
    if (serviceId) setOpenServiceModal(parseInt(serviceId));
  }, [searchParams]);

  return (
    <section 
      id="services" 
      ref={container}
      className="w-full py-32 md:py-48 px-6 md:px-10 bg-offwhite"
    >
      <div className="max-w-7xl mx-auto">
        <div className="services-header mb-24">
          <span className="text-teal font-bold tracking-widest uppercase text-[10px] mb-4 block">Capabilities</span>
          <h2 className="text-6xl md:text-7xl font-bold tracking-tighter mb-8 text-ink">
            Engineered <span className="text-teal">Logistics</span>
          </h2>
          <p className="max-w-2xl text-ink-mid text-xl leading-relaxed">
            From precision vehicle transport to international container corridors. Every movement is handled with technical excellence and zero compromise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:grid-flow-dense">
          {serviceModals.map((service) => (
            <div
              key={service.id}
              onClick={() => setOpenServiceModal(service.id)}
              className={`bento-card group relative overflow-hidden rounded-[2.5rem] cursor-pointer bg-ink shadow-2xl transition-all duration-700 hover:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.5)] ${service.span}`}
              style={{ minHeight: '320px' }}
            >
              <Image
                src={`/Cards/Card ${service.id}.jpg`}
                alt={service.title}
                fill
                priority={service.id <= 2}
                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110 opacity-70 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500" />
              
              <div className="absolute bottom-0 left-0 p-10 w-full z-10">
                <h3 className="text-white text-3xl font-bold mb-3 tracking-tighter group-hover:translate-x-2 transition-transform duration-500">
                  {service.title}
                </h3>
                <p className="text-white/70 text-sm md:text-base line-clamp-2 max-w-xs transition-colors duration-500 group-hover:text-white">
                  {service.subtitle}
                </p>
              </div>

              <div className="absolute top-8 right-8 w-14 h-14 rounded-full bg-white/10 backdrop-blur-2xl border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-75 group-hover:scale-100 z-10">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><path d="M5 12h14m-7-7l7 7-7 7"/></svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      {openServiceModal && (
        <div 
          className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-ink/95 backdrop-blur-2xl"
          onClick={() => setOpenServiceModal(null)}
        >
          <div 
            className="w-full max-w-5xl bg-white rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl relative max-h-[90dvh] overflow-y-auto"
            onClick={e => e.stopPropagation()}
          >
             <button
              onClick={() => setOpenServiceModal(null)}
              className="absolute top-6 right-6 md:top-10 md:right-10 z-10 w-10 h-10 md:w-14 md:h-14 rounded-full bg-offwhite flex items-center justify-center hover:bg-teal hover:text-white transition-all duration-500"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="md:w-6 md:h-6"><path d="M18 6L6 18M6 6l12 12"/></svg>
            </button>
            <div className="grid md:grid-cols-2 min-h-[500px] md:min-h-[600px]">
              <div className="relative h-64 md:h-full">
                <Image
                  src={`/Cards/Card ${openServiceModal}.jpg`}
                  alt="Service"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-teal/20 mix-blend-overlay" />
              </div>
              <div className="p-8 md:p-16 flex flex-col justify-center">
                <span className="text-teal font-bold uppercase tracking-widest text-[10px] mb-4 md:mb-6 block">Service Profile</span>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 md:mb-8 tracking-tighter leading-[0.9]">
                  {serviceModals.find(s => s.id === openServiceModal)?.title}
                </h2>
                <p className="text-ink-mid text-lg md:text-xl leading-relaxed mb-8 md:mb-12">
                  {serviceModals.find(s => s.id === openServiceModal)?.subtitle}
                </p>
                <Link href="/help-centre/contact" className="w-full">
                  <button className="group relative w-full py-5 md:py-6 bg-ink text-white font-bold rounded-full overflow-hidden transition-all duration-500 hover:scale-[1.02] active:scale-95">
                    <span className="relative z-10">Request Technical Quote</span>
                    <div className="absolute inset-0 bg-teal translate-y-full transition-transform duration-500 group-hover:translate-y-0" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
