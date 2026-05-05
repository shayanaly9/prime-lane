"use client";

export default function RoutesSection() {
  return (
    <section id="freight-corridors" className="w-full px-5 py-12 md:py-16 md:px-10" style={{ background: '#f0f4f8' }}>
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-[40px]">
          <div style={{ fontFamily: 'var(--font-heading)', fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--c-teal)', fontWeight: 700, marginBottom: '10px' }}>Key routes</div>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 'clamp(26px, 3vw, 36px)', color: 'var(--c-ink)', marginBottom: '28px', letterSpacing: '-0.02em', lineHeight: 1.1 }}>Our primary freight corridors</h2>
        </div>

        {/* Cards Container */}
        <div className="flex flex-col gap-[16px] w-full">
          {/* Card 1 */}
          <div className="w-full flex flex-col md:flex-row items-center justify-between" style={{ background: '#0a1628', borderRadius: '10px', padding: '28px 36px' }}>
            <div className="flex flex-col text-center md:text-left mb-6 md:mb-0 w-full md:w-1/3">
              <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '20px', color: 'white' }}>Australia</div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'rgba(255,255,255,0.65)', marginTop: '4px' }}>Melbourne · Sydney · Brisbane</div>
            </div>

            <div className="flex flex-col items-center flex-1 w-full md:w-1/3 px-4">
              <div style={{ fontFamily: 'var(--font-body)', fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', textAlign: 'center', marginBottom: '8px' }}>Sea freight · 18–22 days transit</div>
              <div className="w-full flex items-center justify-between relative mb-3">
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--c-teal-light)', zIndex: 10 }}></div>
                <div className="flex-1" style={{ height: '1px', background: 'var(--c-teal)', opacity: 0.4 }}></div>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--c-teal-light)', zIndex: 10 }}></div>
                <div className="flex-1" style={{ height: '1px', background: 'var(--c-teal)', opacity: 0.4 }}></div>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--c-teal-light)', zIndex: 10 }}></div>
              </div>
              <div style={{ background: 'var(--c-teal)', color: 'white', borderRadius: '999px', padding: '4px 14px', fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '11px', marginTop: '4px' }}>Primary route</div>
            </div>

            <div className="flex flex-col text-center md:text-right mt-6 md:mt-0 w-full md:w-1/3">
              <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '20px', color: 'white' }}>Dubai, UAE</div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'rgba(255,255,255,0.65)', marginTop: '4px' }}>Jebel Ali Port · Free Zones</div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="w-full flex flex-col md:flex-row items-center justify-between" style={{ background: 'var(--c-bg-dark)', borderRadius: '10px', padding: '28px 36px' }}>
            <div className="flex flex-col text-center md:text-left mb-6 md:mb-0 w-full md:w-1/3">
              <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '20px', color: 'white' }}>Australia</div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'rgba(255,255,255,0.65)', marginTop: '4px' }}>All major ports</div>
            </div>

            <div className="flex flex-col items-center flex-1 w-full md:w-1/3 px-4">
              <div style={{ fontFamily: 'var(--font-body)', fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', textAlign: 'center', marginBottom: '8px' }}>International · multiple destinations</div>
              <div className="w-full flex items-center justify-between relative mb-3">
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--c-teal-light)', zIndex: 10 }}></div>
                <div className="flex-1" style={{ height: '1px', background: 'var(--c-teal)', opacity: 0.4 }}></div>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--c-teal-light)', zIndex: 10 }}></div>
                <div className="flex-1" style={{ height: '1px', background: 'var(--c-teal)', opacity: 0.4 }}></div>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--c-teal-light)', zIndex: 10 }}></div>
              </div>
              <div style={{ background: 'var(--c-teal)', color: 'white', borderRadius: '999px', padding: '4px 14px', fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '11px', marginTop: '4px' }}>Global reach</div>
            </div>

            <div className="flex flex-col text-center md:text-right mt-6 md:mt-0 w-full md:w-1/3">
              <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '20px', color: 'white' }}>Worldwide</div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'rgba(255,255,255,0.65)', marginTop: '4px' }}>Asia · Europe · Americas</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
