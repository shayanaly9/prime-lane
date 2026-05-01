"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function InternationalSeaPage() {
  const [hoveredButton, setHoveredButton] = useState<number | null>(null);
  const [hoveredDest, setHoveredDest] = useState<number | null>(null);
  const [hoveredContainer, setHoveredContainer] = useState<number | null>(null);

  const destinations = [
    {
      title: "Middle East",
      text: "Dubai · Abu Dhabi · Sharjah · Saudi Arabia · Oman"
    },
    {
      title: "Asia",
      text: "Singapore · Hong Kong · China · India · Malaysia"
    },
    {
      title: "Europe",
      text: "Rotterdam · Hamburg · Felixstowe · Antwerp"
    },
    {
      title: "Americas",
      text: "Los Angeles · New York · Houston · Vancouver"
    }
  ];

  const containers = [
    {
      title: "Standard Dry Units",
      text: "20ft, 40ft, and 40ft High Cube containers for general cargo, automotive parts, and industrial goods."
    },
    {
      title: "Reefer Containers",
      text: "Refrigerated units for temperature-sensitive goods including perishables, pharmaceuticals, and chemicals."
    },
    {
      title: "Flat-Rack & Open-Top",
      text: "Specialized equipment for oversized cargo that cannot fit inside standard enclosed containers."
    }
  ];

  return (
    <main style={{ width: '100%', background: '#fff' }}>
      {/* 1. HERO BANNER */}
      <section
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(11,18,32,0.96) 0%, rgba(11,18,32,0.88) 50%, rgba(11,18,32,0.45) 100%), url('/Cards/Card 2.jpg')`,
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
        <div style={{ position: 'absolute', top: '20%', right: '10%', width: '30%', height: '40%', background: 'radial-gradient(circle, rgba(74, 232, 154, 0.08) 0%, transparent 70%)', filter: 'blur(100px)', pointerEvents: 'none' }} />

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
            <span style={{ fontFamily: 'var(--font-heading)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase' }}>
              GLOBAL OCEAN FREIGHT
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
              maxWidth: '850px'
            }}
          >
            International<br />
            <span style={{ color: 'var(--c-teal-light)' }}>Sea Freight</span>
          </h1>

          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '17px',
              color: 'rgba(255,255,255,0.65)',
              maxWidth: '520px',
              lineHeight: 1.8,
              marginBottom: '44px'
            }}
          >
            Expanding your reach beyond the primary corridors. Ocean freight solutions connecting Australia to major ports across the globe.
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
                  boxShadow: hoveredButton === 1 ? '0 12px 32px rgba(26,122,98,0.4)' : 'none'
                }}
              >
                GET WORLDWIDE RATES
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. DESTINATIONS SECTION */}
      <section style={{ background: 'white', padding: '100px 40px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ marginBottom: '64px', textAlign: 'center' }}>
            <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--c-teal)', marginBottom: '12px' }}>Network</div>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '36px', color: 'var(--c-ink)', letterSpacing: '-0.02em' }}>Global Destinations</h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '24px'
            }}
          >
            {destinations.map((dest, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredDest(index)}
                onMouseLeave={() => setHoveredDest(null)}
                style={{
                  background: '#F9FAFB',
                  borderRadius: '16px',
                  padding: '32px',
                  border: '1px solid #E5E7EB',
                  borderTop: hoveredDest === index ? '4px solid var(--c-teal)' : '4px solid transparent',
                  textAlign: 'center',
                  transition: 'all 0.4s cubic-bezier(0.32,0.72,0,1)',
                  transform: hoveredDest === index ? 'translateY(-8px)' : 'translateY(0)',
                  boxShadow: hoveredDest === index ? '0 24px 48px rgba(11,18,32,0.08)' : 'none'
                }}
              >
                <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '18px', color: 'var(--c-ink)', marginBottom: '14px', letterSpacing: '-0.01em' }}>{dest.title}</h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--c-ink-mid)', lineHeight: 1.7 }}>{dest.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CONTAINER OPTIONS SECTION */}
      <section style={{ background: '#F9FAFB', padding: '100px 40px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ marginBottom: '64px' }}>
            <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--c-teal)', marginBottom: '12px' }}>Equipment</div>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '36px', color: 'var(--c-ink)', letterSpacing: '-0.02em' }}>Flexible Logistics Solutions</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {containers.map((container, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredContainer(index)}
                onMouseLeave={() => setHoveredContainer(null)}
                style={{
                  background: 'white',
                  borderRadius: '16px',
                  padding: '32px',
                  border: '1px solid #E5E7EB',
                  borderLeft: hoveredContainer === index ? '4px solid var(--c-teal)' : '4px solid transparent',
                  transition: 'all 0.4s cubic-bezier(0.32,0.72,0,1)',
                  transform: hoveredContainer === index ? 'translateY(-8px)' : 'translateY(0)',
                  boxShadow: hoveredContainer === index ? '0 24px 48px rgba(11,18,32,0.08)' : 'none'
                }}
              >
                <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '18px', color: 'var(--c-ink)', marginBottom: '14px', letterSpacing: '-0.01em' }}>{container.title}</h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--c-ink-mid)', lineHeight: 1.7 }}>{container.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. DOCUMENTATION BAND */}
      <section style={{ background: 'var(--c-ink)', padding: '100px 40px', color: 'white' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '64px', alignItems: 'center' }}>
          <div style={{ flex: '1 1 450px' }}>
            <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--c-teal-light)', marginBottom: '12px' }}>Integration</div>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '32px', marginBottom: '24px', letterSpacing: '-0.02em' }}>End-to-End Coordination</h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '15px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.9, marginBottom: '32px' }}>
              We manage every stage of the global journey. From origin pickup and export customs in Australia to destination coordination and final delivery.
            </p>
            <Link href="/contact" style={{ textDecoration: 'none' }}>
              <button style={{ background: 'var(--c-teal)', color: 'white', border: 'none', padding: '14px 32px', borderRadius: '999px', fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '14px', cursor: 'pointer', transition: 'all 0.2s' }}>
                GET A QUOTE
              </button>
            </Link>
          </div>
          <div style={{ flex: '1 1 350px', background: 'rgba(255,255,255,0.03)', borderRadius: '20px', padding: '32px', border: '1px solid rgba(255,255,255,0.08)' }}>
            {[
              "Global Export Documentation",
              "Bill of Lading & Waybill Prep",
              "International Customs Liaison",
              "Marine Insurance Coordination",
              "Real-time Transit Tracking"
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '16px', marginBottom: i === 4 ? 0 : '20px', alignItems: 'center' }}>
                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--c-teal-light)' }} />
                <span style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'rgba(255,255,255,0.8)' }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA BAND */}
      <section style={{ background: 'white', padding: '120px 40px', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '36px', color: 'var(--c-ink)', marginBottom: '20px', letterSpacing: '-0.02em' }}>
            Ready to Expand Globally?
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '16px', color: 'var(--c-ink-mid)', marginBottom: '40px', lineHeight: 1.8 }}>
            Tell us your destination and cargo requirements for a competitive sea freight solution.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" style={{ textDecoration: 'none' }}>
              <button style={{ background: 'var(--c-teal)', color: 'white', padding: '16px 40px', borderRadius: '999px', fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '14px', cursor: 'pointer', border: 'none', transition: 'all 0.2s', boxShadow: '0 8px 24px rgba(15, 110, 86, 0.2)' }}>
                CONTACT SALES TEAM
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
