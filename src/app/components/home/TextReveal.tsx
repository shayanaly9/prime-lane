"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function TextReveal() {
  const container = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  const text = "We don't just move cargo. We engineer certainty. Every container, every vehicle, and every industrial component is a mission-critical asset that demands precision, speed, and absolute security across the Australian-Dubai corridor.";

  useGSAP(() => {
    const words = textRef.current?.querySelectorAll(".word");
    if (!words) return;

    gsap.to(words, {
      opacity: 1,
      stagger: 0.1,
      ease: "none",
      scrollTrigger: {
        trigger: container.current,
        start: "top 70%",
        end: "top 20%",
        scrub: true,
      }
    });
  }, { scope: container });

  return (
    <section 
      ref={container}
      className="w-full py-48 md:py-64 px-6 md:px-10 bg-bg-dark text-white"
    >
      <div className="max-w-6xl mx-auto">
        <p 
          ref={textRef}
          className="text-4xl md:text-6xl font-bold leading-tight tracking-tight"
        >
          {text.split(" ").map((word, i) => (
            <span key={i} className="word opacity-10 mr-[0.3em] inline-block">
              {word}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
