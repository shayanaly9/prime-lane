"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function InternationalAirPage() {
  const [hoveredButton, setHoveredButton] = useState<number | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const whyAirFreight = [
    {
      title: "Urgent Shipments",
      text: "When sea freight lead times are too long. Critical components, spare parts, or time-sensitive cargo delivered fast."
    },
    {
      title: "High-Value Goods",
      text: "Electronics, automotive parts, luxury items, and other high-value cargo where security and speed are essential."
    },
    {
      title: "Perishables & Pharma",
      text: "Time-critical pharmaceutical cargo, perishables, and temperature-sensitive goods requiring fast transit."
    }
  ];

  const airFreightFacts = [
    { label: "TRANSIT TO DUBAI", value: "3–5 Business Days", subtext: "Airport to airport" },
    { label: "SERVICE OPTIONS", value: "Door-to-Door", subtext: "Also airport-to-airport" },
    { label: "DG CAPABILITY", value: "IATA Certified", subtext: "Dangerous goods transport" },
    { label: "CARGO TYPES", value: "All Categories", subtext: "General, DG, perishables" }
  ];

  const processSteps = [
    { num: "1", title: "Collection", text: "We collect your cargo from your address or depot." },
    { num: "2", title: "Clearance", text: "Full Australian export documentation handled." },
    { num: "3", title: "Transport", text: "Cargo loaded onto next available flight." },
    { num: "4", title: "Delivery", text: "Import clearance and final destination delivery." }
  ];

  return (
    <main style={{ width: '100%', background: '#fff' }}>
      {/* 1. HERO BANNER */}
      <section
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(11,18,32,0.96) 0%, rgba(11,18,32,0.88) 50%, rgba(11,18,32,0.45) 100%), url('/Cards/Card 3.jpeg')`,
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
        <div style={{ position: 'absolute', bottom: '10%', right: '10%', width: '35%', height: '40%', background: 'radial-gradient(circle, rgba(74, 232, 154, 0.08) 0%, transparent 70%)', filter: 'blur(100px)', pointerEvents: 'none' }} />

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
              GLOBAL AIR CARGO
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
            <span style={{ color: 'var(--c-teal-light)' }}>Air Freight</span>
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
            Fast, reliable air cargo solutions for time-sensitive or high-value shipments connecting Australia to the world.
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
                REQUEST URGENT QUOTE
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. WHY AIR FREIGHT SECTION */}
      <section style={{ background: 'white', padding: '100px 40px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ marginBottom: '64px' }}>
            <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--c-teal)', marginBottom: '12px' }}>Speed & Precision</div>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '36px', color: 'var(--c-ink)', letterSpacing: '-0.02em' }}>When Time is Critical</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {whyAirFreight.map((item, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  background: '#F9FAFB',
                  borderRadius: '16px',
                  padding: '32px',
                  border: '1px solid #E5E7EB',
                  borderTop: hoveredCard === index ? '4px solid var(--c-teal)' : '4px solid transparent',
                  textAlign: 'center',
                  transition: 'all 0.4s cubic-bezier(0.32,0.72,0,1)',
                  transform: hoveredCard === index ? 'translateY(-8px)' : 'translateY(0)',
                  boxShadow: hoveredCard === index ? '0 24px 48px rgba(11,18,32,0.08)' : 'none'
                }}
              >
                <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '18px', color: 'var(--c-ink)', marginBottom: '14px', letterSpacing: '-0.01em' }}>{item.title}</h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--c-ink-mid)', lineHeight: 1.7 }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. KEY DETAILS SECTION */}
      <section style={{ background: '#F9FAFB', padding: '100px 40px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '64px' }}>
            {/* Left Column: Facts */}
            <div style={{ flex: '1 1 400px' }}>
              <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--c-teal)', marginBottom: '12px' }}>Specs</div>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '32px', color: 'var(--c-ink)', marginBottom: '40px', letterSpacing: '-0.02em' }}>Air Freight Facts</h2>
              
              <div style={{ background: 'white', borderRadius: '16px', padding: '12px 32px', border: '1px solid #E5E7EB', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
                {airFreightFacts.map((fact, i) => (
                  <div key={i} style={{ padding: '24px 0', borderBottom: i === 3 ? 'none' : '1px solid #F3F4F6' }}>
                    <div style={{ fontFamily: 'var(--font-heading)', fontSize: '10px', fontWeight: 700, letterSpacing: '0.12em', color: 'var(--c-teal)', textTransform: 'uppercase', marginBottom: '8px' }}>{fact.label}</div>
                    <div style={{ fontFamily: 'var(--font-heading)', fontSize: '20px', fontWeight: 800, color: 'var(--c-ink)', marginBottom: '4px' }}>{fact.value}</div>
                    <div style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--c-ink-mid)' }}>{fact.subtext}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Process */}
            <div style={{ flex: '1 1 400px' }}>
              <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--c-teal)', marginBottom: '12px' }}>Workflow</div>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '32px', color: 'var(--c-ink)', marginBottom: '40px', letterSpacing: '-0.02em' }}>Operational Process</h2>
              
              <div style={{ background: 'white', borderRadius: '16px', padding: '32px', border: '1px solid #E5E7EB', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
                {processSteps.map((step, i) => (
                  <div key={i} style={{ display: 'flex', gap: '24px', marginBottom: i === 3 ? 0 : '32px' }}>
                    <div style={{ 
                      width: '40px', 
                      height: '40px', 
                      borderRadius: '50%', 
                      background: 'var(--c-ink)', 
                      color: 'white', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center', 
                      fontFamily: 'var(--font-heading)',
                      fontWeight: 800,
                      fontSize: '14px',
                      flexShrink: 0 
                    }}>
                      {step.num}
                    </div>
                    <div>
                      <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '17px', color: 'var(--c-ink)', marginBottom: '8px' }}>{step.title}</h3>
                      <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--c-ink-mid)', lineHeight: 1.7 }}>{step.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. DG AIR BAND */}
      <section style={{ background: 'var(--c-ink)', padding: '100px 40px', color: 'white' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '64px', alignItems: 'center' }}>
          <div style={{ flex: '1 1 450px' }}>
            <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--c-teal-light)', marginBottom: '12px' }}>Certification</div>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '32px', marginBottom: '24px', letterSpacing: '-0.02em' }}>IATA Certified DG Handling</h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '15px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.9, marginBottom: '32px' }}>
              PrimeLane Logistics holds full IATA dangerous goods certification. We are legally and safely equipped to transport hazardous materials by air in full compliance with international aviation safety regulations.
            </p>
            <Link href="/contact" style={{ textDecoration: 'none' }}>
              <button style={{ background: 'var(--c-teal)', color: 'white', border: 'none', padding: '14px 32px', borderRadius: '999px', fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '14px', cursor: 'pointer', transition: 'all 0.2s' }}>
                CONSULT DG SPECIALIST
              </button>
            </Link>
          </div>
          <div style={{ flex: '1 1 350px', background: 'rgba(255,255,255,0.03)', borderRadius: '20px', padding: '32px', border: '1px solid rgba(255,255,255,0.08)' }}>
            {[
              "IATA Dangerous Goods Certification",
              "Aviation Safety Compliance",
              "Proper Packaging & Labelling",
              "Classes 2–9 Air Transport"
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '16px', marginBottom: i === 3 ? 0 : '20px', alignItems: 'center' }}>
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
            Need Urgent Air Freight?
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '16px', color: 'var(--c-ink-mid)', marginBottom: '40px', lineHeight: 1.8 }}>
            Contact us today for the fastest available air freight solution for your critical cargo.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" style={{ textDecoration: 'none' }}>
              <button style={{ background: 'var(--c-teal)', color: 'white', padding: '16px 40px', borderRadius: '999px', fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '14px', cursor: 'pointer', border: 'none', transition: 'all 0.2s', boxShadow: '0 8px 24px rgba(15, 110, 86, 0.2)' }}>
                BOOK AIR CARGO
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
