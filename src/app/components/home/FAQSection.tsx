"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function FAQSection() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".faq-item", {
      y: 20,
      opacity: 0,
      stagger: 0.1,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: container.current,
        start: "top 85%",
      }
    });
  }, { scope: container });

  return (
    <section 
      id="faq" 
      ref={container}
      className="w-full px-6 py-32 md:py-48 md:px-10 bg-offwhite"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-24">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tighter">
            Knowledge <span className="text-teal">Base</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-16">
          {([
            ['Do you offer both FCL and LCL shipping?', 'Yes. We offer Full Container Load (FCL) for those wanting a dedicated container and Less than Container Load (LCL) for smaller shipments to help keep costs down.'],
            ['What types of vehicles can I ship to Dubai?', 'We handle everything from standard passenger cars and SUVs to luxury vehicles and commercial automotive transport.'],
            ['Are you certified to handle hazardous materials?', 'Absolutely. Primelane Logistics is fully DG Certified for Classes 2 through 9, meaning we are legally qualified to transport dangerous goods that other carriers might turn away.'],
            ['How do I track my shipment?', (
              <>
                Simply email us at <a href="mailto:contact@primelanelogistics.com.au" className="text-teal font-bold hover:underline">contact@primelanelogistics.com.au</a> with your booking reference for a real-time technical status update.
              </>
            )],
          ] as [string, React.ReactNode][]).map(([q, a]) => (
            <div key={q} className="faq-item border-t border-divider pt-10">
              <h3 className="text-xl font-bold mb-4 tracking-tight">{q}</h3>
              <div className="text-ink-mid text-lg leading-relaxed">{a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
