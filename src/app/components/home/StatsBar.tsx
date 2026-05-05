"use client";

export default function StatsBar() {
  return (
    <section className="w-full py-16 bg-ink border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          <div className="flex flex-col items-center text-center">
            <span className="text-2xl md:text-3xl font-bold text-teal-light mb-2">AU → UAE</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold">Primary Corridor</span>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <span className="text-2xl md:text-3xl font-bold text-teal-light mb-2">FCL & LCL</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold">Container Experts</span>
          </div>

          <div className="flex flex-col items-center text-center">
            <span className="text-2xl md:text-3xl font-bold text-teal-light mb-2">DG Certified</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold">Classes 2–9</span>
          </div>

          <div className="flex flex-col items-center text-center">
            <span className="text-2xl md:text-3xl font-bold text-teal-light mb-2">Full Secure</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold">End-to-End</span>
          </div>
        </div>
      </div>
    </section>
  );
}
