"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full px-5 py-24 md:py-32 md:px-10" style={{ 
      background: '#0B1220', 
      position: 'relative',
      borderTop: '1px solid rgba(255,255,255,0.05)'
    }}>
      {/* Subtle noise texture */}
      <div style={{ position: 'absolute', inset: 0, opacity: 0.02, pointerEvents: 'none', backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />

      <div className="mx-auto max-w-[1300px] relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-24 mb-24">
          
          {/* Column 1: Brand Identity */}
          <div className="flex flex-col items-start">
            <Link href="/">
              <Image src="/Prime-lane-logo.png" alt="PrimeLane" width={140} height={42} style={{ objectFit: 'contain', width: 'auto', marginBottom: '32px', filter: 'brightness(0) invert(1)' }} />
            </Link>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'rgba(255,255,255,0.4)', lineHeight: 1.8, maxWidth: '260px' }}>
              Connecting major trade corridors with precision and speed. Australia&apos;s premium logistics partner for complex freight solutions.
            </p>
            <div style={{ marginTop: '40px', display: 'flex', gap: '12px', alignItems: 'center', background: 'rgba(255,255,255,0.03)', padding: '8px 16px', borderRadius: '99px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <div className="relative flex h-2 w-2">
                <div className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></div>
                <div className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></div>
              </div>
              <span style={{ fontFamily: 'var(--font-heading)', fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.6)' }}>Systems operational</span>
            </div>
          </div>

          {/* Column 2: Logistics Services */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'white', marginBottom: '28px', opacity: 0.3 }}>Services</h4>
            <div className="flex flex-col gap-5">
              {[
                ['AU → Dubai Route', '/#services'],
                ['Sea Freight', '/#services'],
                ['Air Freight', '/#services'],
                ['Vehicle Transport', '/#services'],
                ['Industrial Freight', '/services/industrial-freight']
              ].map(([label, href]) => (
                <Link key={label} href={href} style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'rgba(255,255,255,0.45)', textDecoration: 'none', transition: 'all 0.3s cubic-bezier(0.23,1,0.32,1)' }} className="hover:text-white hover:translate-x-1 group flex items-center gap-2">
                  <span style={{ width: '0px', height: '1.5px', background: 'var(--c-teal-light)', transition: 'all 0.3s' }} className="group-hover:w-3" />
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'white', marginBottom: '28px', opacity: 0.3 }}>Company</h4>
            <div className="flex flex-col gap-5">
              {[
                ['Our story', '/about/our-story'],
                ['Why choose PrimeLane', '/about/why-choose-us'],
                ['Certifications', '/about/certifications'],
                ['Sustainability', '/'],
                ['Terms of Service', '/terms'],
                ['Privacy Policy', '/privacy']
              ].map(([label, href]) => (
                <Link key={label} href={href} style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'rgba(255,255,255,0.45)', textDecoration: 'none', transition: 'all 0.3s cubic-bezier(0.23,1,0.32,1)' }} className="hover:text-white hover:translate-x-1 group flex items-center gap-2">
                  <span style={{ width: '0px', height: '1.5px', background: 'var(--c-teal-light)', transition: 'all 0.3s' }} className="group-hover:w-3" />
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 4: Support & Desk */}
          <div className="flex flex-col items-start">
            <h4 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'white', marginBottom: '28px', opacity: 0.3 }}>Global Desk</h4>
            <div className="flex flex-col gap-8">
              <div>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '10px', fontWeight: 700, color: 'var(--c-teal-light)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '6px' }}>Direct Phone</div>
                <a href="tel:+61421821220" style={{ fontFamily: 'var(--font-body)', fontSize: '16px', fontWeight: 600, color: 'white', textDecoration: 'none', transition: 'color 0.2s' }} className="hover:text-teal-400">+61 421 821 220</a>
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '10px', fontWeight: 700, color: 'var(--c-teal-light)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '6px' }}>Enquiries</div>
                <a href="mailto:contact@primelanelogistics.com.au" style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'rgba(255,255,255,0.7)', textDecoration: 'none', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '2px', transition: 'all 0.3s' }} className="hover:text-white hover:border-white">contact@primelanelogistics.com.au</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Scroll */}
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '32px', paddingBottom: '32px', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '32px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: 'rgba(255,255,255,0.25)' }}>
              &copy; {new Date().getFullYear()} PrimeLane Logistics Pty Ltd.
            </p>
          </div>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.4)', fontFamily: 'var(--font-heading)', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px', transition: 'all 0.3s' }}
            className="hover:text-white group"
          >
            Back to top
            <div style={{ width: '32px', height: '32px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s' }} className="group-hover:border-white group-hover:bg-white/5">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M18 15l-6-6-6 6"/></svg>
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
