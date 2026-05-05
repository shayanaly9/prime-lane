"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const steps = [
  {
    num: "01",
    title: "Request a Consultation",
    desc: "Every shipment starts with a technical review. We don't use automated portals; we use expert analysis to determine the best route and container configuration for your specific cargo."
  },
  {
    num: "02",
    title: "Secure Your Space",
    desc: "Once a quote is approved, we secure your space on the next available vessel or flight. Our deep relationships with port authorities in Melbourne and Jebel Ali ensure priority handling."
  },
  {
    num: "03",
    title: "Engineering & Compliance",
    desc: "Our team handles all documentation, export customs, and DG-compliance checks. We ensure your cargo meets all Australian and international regulatory standards before it moves."
  },
  {
    num: "04",
    title: "End-to-End Delivery",
    desc: "From the moment your cargo leaves the dock to its final destination, we track every movement. Our local wharf cartage team ensures the last mile is as secure as the first."
  }
];

export default function ProcessSection() {
  const container = useRef<HTMLDivElement>(null);
  const leftSide = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();
    
    mm.add("(min-width: 768px)", () => {
      ScrollTrigger.create({
        trigger: container.current,
        start: "top top",
        end: "bottom bottom",
        pin: leftSide.current,
        pinSpacing: false,
      });
    });
  }, { scope: container });

  return (
    <section 
      ref={container}
      className="relative w-full bg-white px-6 md:px-10"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 md:gap-20">
        {/* Left Side (Pinned on Desktop) */}
        <div 
          ref={leftSide}
          className="w-full md:w-1/2 md:h-screen flex flex-col justify-center py-20 md:py-0"
        >
          <span className="text-teal font-bold uppercase tracking-widest text-[10px] mb-6 block">Methodology</span>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[0.9]">
            The <span className="text-teal">Precision</span> <br className="hidden md:block" /> Process
          </h2>
          <p className="max-w-md text-ink-mid text-lg md:text-xl leading-relaxed">
            We&apos;ve refined freight logistics into a four-stage engineering workflow. No noise, just certainty.
          </p>
        </div>

        {/* Right Side (Scrolling) */}
        <div className="w-full md:w-1/2 py-10 md:py-48 flex flex-col gap-24 md:gap-32">
          {steps.map((step) => (
            <div key={step.num} className="flex flex-col relative">
              <span className="text-7xl md:text-[10rem] font-bold text-teal opacity-5 leading-none -mb-6 md:-mb-12 tracking-tighter">
                {step.num}
              </span>
              <h3 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6 tracking-tight relative z-10">
                {step.title}
              </h3>
              <p className="text-ink-mid text-base md:text-xl leading-relaxed max-w-md relative z-10">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
