"use client";

export default function RouteStrip() {
  return (
    <section className="w-full flex justify-center overflow-x-auto px-4 py-4 md:px-10" style={{ background: 'var(--c-bg-darkalt)', scrollbarWidth: 'none' }}>
      <div className="flex flex-row items-center justify-center gap-3 min-w-max">
        <div style={{ background: 'rgba(26,122,98,0.18)', borderRadius: '6px', padding: '4px 12px', fontFamily: 'var(--font-body)', fontSize: '12px', color: 'rgba(255,255,255,0.85)', whiteSpace: 'nowrap' }}>
          <span style={{ color: 'rgba(255,255,255,0.6)', marginRight: '6px' }}>AU</span>Melbourne · Sydney · Brisbane
        </div>
        <div style={{ display: 'flex', gap: '3px', alignItems: 'center' }}>
          {[0, 1, 2].map(i => <div key={i} style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--c-teal-light)', opacity: 0.5 + i * 0.2 }} />)}
        </div>
        <div style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: 'rgba(255,255,255,0.7)', whiteSpace: 'nowrap' }}>Port of Melbourne · Jebel Ali Port · Dubai</div>
        <div style={{ display: 'flex', gap: '3px', alignItems: 'center' }}>
          {[0, 1, 2].map(i => <div key={i} style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--c-teal-light)', opacity: 0.5 + i * 0.2 }} />)}
        </div>
        <div style={{ background: 'rgba(26,122,98,0.18)', borderRadius: '6px', padding: '4px 12px', fontFamily: 'var(--font-body)', fontSize: '12px', color: 'rgba(255,255,255,0.85)', whiteSpace: 'nowrap' }}>
          <span style={{ color: 'rgba(255,255,255,0.6)', marginRight: '6px' }}>AE</span>Dubai, UAE
        </div>
      </div>
    </section>
  );
}
