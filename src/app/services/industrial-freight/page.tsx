"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function IndustrialFreightPage() {
  const [hoveredButton, setHoveredButton] = useState<number | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const services = [
    {
      title: "Same-Day & Hot-Shot",
      description: "Premium urgent delivery for critical automotive components or chemical supplies that cannot wait.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      )
    },
    {
      title: "DG-Compliant Transport",
      description: "Fully licensed to carry Dangerous Goods Classes 2 through 9 nationally with full compliance documentation.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
          <line x1="12" y1="9" x2="12" y2="13" />
          <line x1="12" y1="17" x2="12.01" y2="17" />
        </svg>
      )
    },
    {
      title: "Automotive Parts Logistics",
      description: "Specialist handling for dealership and warehouse supply chains, moving everything from engines to body panels.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="7" cy="17" r="2" />
          <circle cx="17" cy="17" r="2" />
          <path d="M5 17h-2v-6l2-5h9l4 5v6h-2" />
          <path d="M14 6l1 4h5" />
        </svg>
      )
    },
    {
      title: "Palletised & Bulk Goods",
      description: "Efficient Tautliner services for side-loading pallets, chemical drums, and industrial equipment across Australia.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      )
    }
  ];

  return (
    <main style={{ width: '100%', background: '#fff' }}>
      {/* HERO BANNER */}
      <section
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(11,18,32,0.96) 0%, rgba(11,18,32,0.88) 50%, rgba(11,18,32,0.45) 100%), url('/Cards/Card 6.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '160px 40px 120px',
          textAlign: 'left',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          minHeight: '80dvh',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Ambient glow */}
        <div style={{ position: 'absolute', bottom: '-10%', right: '-5%', width: '40%', height: '50%', background: 'radial-gradient(circle, rgba(74, 232, 154, 0.1) 0%, transparent 70%)', filter: 'blur(80px)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%', position: 'relative', zIndex: 1 }}>
          {/* Badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(10px)',
              padding: '6px 14px',
              borderRadius: '6px',
              marginBottom: '32px',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}
          >
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#4AE89A' }} />
            <span style={{ 
              fontFamily: 'var(--font-heading)', 
              fontSize: '11px', 
              fontWeight: 700, 
              letterSpacing: '0.12em', 
              color: 'rgba(255,255,255,0.7)',
              textTransform: 'uppercase'
            }}>
              LOCAL TRANSPORT
            </span>
          </div>

          <h1
            style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 800,
              fontSize: 'clamp(40px, 8vw, 72px)',
              lineHeight: 1.05,
              marginBottom: '24px',
              color: 'white',
              letterSpacing: '-0.03em',
              maxWidth: '800px'
            }}
          >
            Local & Industrial<br />
            <span style={{ color: 'var(--c-teal-light)' }}>Freight Solutions</span>
          </h1>

          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '17px',
              color: 'rgba(255,255,255,0.65)',
              maxWidth: '540px',
              lineHeight: 1.8,
              marginBottom: '44px'
            }}
          >
            Specialist transport for automotive parts, industrial supplies, and palletised goods — handled with precision and full compliance.
          </p>

          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <Link href="/contact" style={{ textDecoration: 'none' }}>
              <button
                onMouseEnter={() => setHoveredButton(1)}
                onMouseLeave={() => setHoveredButton(null)}
                style={{
                  background: hoveredButton === 1 ? 'var(--c-teal-light)' : 'var(--c-teal)',
                  color: 'white',
                  border: 'none',
                  padding: '16px 36px',
                  borderRadius: '999px',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 700,
                  fontSize: '14px',
                  cursor: 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.32,0.72,0,1)',
                  transform: hoveredButton === 1 ? 'translateY(-2px)' : 'translateY(0)',
                  boxShadow: hoveredButton === 1 ? '0 12px 32px rgba(26,122,98,0.4)' : 'none',
                  letterSpacing: '0.02em'
                }}
              >
                REQUEST A QUOTE
              </button>
            </Link>
            <a href="tel:+61421821220" style={{ textDecoration: 'none' }}>
              <button
                onMouseEnter={() => setHoveredButton(2)}
                onMouseLeave={() => setHoveredButton(null)}
                style={{
                  background: hoveredButton === 2 ? 'rgba(255,255,255,0.08)' : 'transparent',
                  color: 'white',
                  border: '1.5px solid rgba(255,255,255,0.25)',
                  padding: '16px 36px',
                  borderRadius: '999px',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 600,
                  fontSize: '14px',
                  cursor: 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.32,0.72,0,1)',
                  transform: hoveredButton === 2 ? 'translateY(-2px)' : 'translateY(0)',
                  letterSpacing: '0.02em'
                }}
              >
                CALL OPERATIONS
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section
        style={{
          background: 'white',
          padding: '100px 40px',
          position: 'relative'
        }}
      >
        {/* Subtle noise texture */}
        <div style={{ position: 'absolute', inset: 0, opacity: 0.015, pointerEvents: 'none', backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />

        <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative' }}>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-[64px] gap-8">
            <div style={{ maxWidth: '540px' }}>
              <div
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 700,
                  fontSize: '11px',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'var(--c-teal)',
                  marginBottom: '12px'
                }}
              >
                What we offer
              </div>
              <h2
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 800,
                  fontSize: 'clamp(28px, 4vw, 42px)',
                  color: 'var(--c-ink)',
                  marginBottom: '16px',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.1
                }}
              >
                Industrial Freight Services
              </h2>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '15px',
                  color: 'var(--c-ink-mid)',
                  lineHeight: 1.8
                }}
              >
                From urgent same-day deliveries to full DG-compliant transport — we move what others can&apos;t with a fleet built for versatility.
              </p>
            </div>
          </div>

          {/* Cards Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '24px'
            }}
          >
            {services.map((service, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  background: '#F9FAFB',
                  borderRadius: '16px',
                  padding: '32px',
                  border: hoveredCard === index ? '1px solid var(--c-teal-light)' : '1px solid #E5E7EB',
                  borderLeft: hoveredCard === index ? '4px solid var(--c-teal)' : '4px solid transparent',
                  transition: 'all 0.4s cubic-bezier(0.32,0.72,0,1)',
                  transform: hoveredCard === index ? 'translateY(-8px)' : 'translateY(0)',
                  boxShadow: hoveredCard === index ? '0 24px 48px rgba(11,18,32,0.08)' : '0 4px 12px rgba(11,18,32,0.02)',
                  cursor: 'default'
                }}
              >
                <div style={{ 
                  width: '48px', 
                  height: '48px', 
                  borderRadius: '12px', 
                  background: hoveredCard === index ? 'var(--c-teal)' : 'white',
                  color: hoveredCard === index ? 'white' : 'var(--c-teal)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '24px',
                  transition: 'all 0.3s',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
                }}>
                  {service.icon}
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 700,
                    fontSize: '18px',
                    color: 'var(--c-ink)',
                    marginBottom: '14px',
                    letterSpacing: '-0.01em'
                  }}
                >
                  {service.title}
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '14px',
                    color: 'var(--c-ink-mid)',
                    lineHeight: 1.7
                  }}
                >
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION - Upgraded to match site brand */}
      <section style={{ 
        background: 'var(--c-ink)', 
        padding: '100px 40px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ position: 'absolute', top: '0', left: '50%', transform: 'translateX(-50%)', width: '100%', height: '100%', background: 'radial-gradient(circle at 50% 50%, rgba(74, 232, 154, 0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />
        
        <div style={{ maxWidth: '600px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '36px', color: 'white', marginBottom: '20px', letterSpacing: '-0.02em' }}>
            Ready to ship with us?
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '16px', color: 'rgba(255,255,255,0.6)', marginBottom: '40px', lineHeight: 1.8 }}>
            Get in touch with our operations team for a competitive quote on your industrial freight requirements.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" style={{ textDecoration: 'none' }}>
              <button style={{ background: 'var(--c-teal)', color: 'white', padding: '14px 32px', borderRadius: '999px', fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '14px', cursor: 'pointer', border: 'none', transition: 'background 0.2s' }}>
                GET A QUOTE
              </button>
            </Link>
            <a href="tel:+61421821220" style={{ textDecoration: 'none' }}>
              <button style={{ background: 'transparent', color: 'white', padding: '14px 32px', borderRadius: '999px', fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '14px', cursor: 'pointer', border: '1.5px solid rgba(255,255,255,0.3)', transition: 'all 0.2s' }}>
                CALL +61 421 821 220
              </button>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
