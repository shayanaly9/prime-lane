"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function ProjectTransportPage() {
  const [hoveredButton, setHoveredButton] = useState<number | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const services = [
    {
      title: "Oversized Load Management",
      description: "Escorts, permits, and route planning for machinery and infrastructure that exceeds standard dimensions."
    },
    {
      title: "Heavy Haulage Solutions",
      description: "Specialist trailers for extremely heavy cargo, from industrial generators to mining equipment."
    },
    {
      title: "End-to-End Planning",
      description: "From initial site survey to final positioning. We manage all logistics and lifting requirements."
    },
    {
      title: "Custom Cradles & Securing",
      description: "Engineered lashing and securing solutions for delicate or unusually shaped project cargo."
    }
  ];

  const steps = [
    { num: "01", title: "Consultation", text: "Initial assessment of cargo dimensions, weight, and delivery timeline." },
    { num: "02", title: "Route Planning", text: "Identifying obstacles, securing permits, and arranging escorts if needed." },
    { num: "03", title: "Execution", text: "Specialist loading and transport under full supervision of our project team." },
    { num: "04", title: "Delivery", text: "Precise positioning and unloading at destination according to plan." }
  ];

  const capabilities = [
    "Load dimensions up to 6m width / 5m height",
    "Weight capacity exceeding 100+ tonnes",
    "Specialist flat-rack and low-loader fleet",
    "Lifting and crane coordination services",
    "Port and site surveys (Australia & UAE)",
    "Custom documentation for complex movements"
  ];

  return (
    <main style={{ width: '100%', background: '#fff' }}>
      {/* HERO BANNER */}
      <section
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(11,18,32,0.95) 0%, rgba(11,18,32,0.85) 50%, rgba(11,18,32,0.5) 100%), url('/Cards/Card 5.jpg')`,
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
        <div style={{ position: 'absolute', top: '15%', right: '5%', width: '40%', height: '60%', background: 'radial-gradient(circle, rgba(74, 232, 154, 0.08) 0%, transparent 70%)', filter: 'blur(100px)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%', position: 'relative', zIndex: 1 }}>
          {/* Badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(12px)',
              padding: '6px 14px',
              borderRadius: '6px',
              marginBottom: '32px',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}
          >
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#4AE89A' }} />
            <span style={{ fontFamily: 'var(--font-heading)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase' }}>
              PROJECT FREIGHT
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
            Project &<br />
            <span style={{ color: 'var(--c-teal-light)' }}>Heavy Transport</span>
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
            Oversized, overweight, and complex project freight handled with engineering-grade precision — permits, planning, and delivery managed end-to-end.
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
                REQUEST PROJECT QUOTE
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
                  transform: hoveredButton === 2 ? 'translateY(-2px)' : 'translateY(0)'
                }}
              >
                SPEAK TO A SPECIALIST
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section style={{ background: 'white', padding: '100px 40px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ marginBottom: '64px' }}>
            <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--c-teal)', marginBottom: '12px' }}>Capabilities</div>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--c-ink)', marginBottom: '16px', letterSpacing: '-0.02em', lineHeight: 1.1 }}>Project Expertise</h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '15px', color: 'var(--c-ink-mid)', lineHeight: 1.8, maxWidth: '600px' }}>
              Specialized solutions for infrastructure, energy, and mining projects requiring non-standard transport configurations.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
            {services.map((service, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  background: '#F9FAFB',
                  borderRadius: '16px',
                  padding: '32px',
                  border: '1px solid #E5E7EB',
                  borderBottom: hoveredCard === index ? '4px solid var(--c-teal)' : '4px solid transparent',
                  transition: 'all 0.4s cubic-bezier(0.32,0.72,0,1)',
                  transform: hoveredCard === index ? 'translateY(-8px)' : 'translateY(0)',
                  boxShadow: hoveredCard === index ? '0 24px 48px rgba(11,18,32,0.08)' : 'none'
                }}
              >
                <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '18px', color: 'var(--c-ink)', marginBottom: '14px', letterSpacing: '-0.01em' }}>{service.title}</h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--c-ink-mid)', lineHeight: 1.7 }}>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section style={{ background: '#F9FAFB', padding: '100px 40px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-10%', left: '-5%', width: '40%', height: '50%', background: 'radial-gradient(circle, rgba(74, 232, 154, 0.05) 0%, transparent 70%)', filter: 'blur(80px)', pointerEvents: 'none' }} />
        
        <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative' }}>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--c-teal)', marginBottom: '12px' }}>Execution</div>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '36px', color: 'var(--c-ink)', letterSpacing: '-0.02em' }}>Our Project Lifecycle</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '40px' }}>
            {steps.map((step, i) => (
              <div key={i} style={{ position: 'relative' }}>
                <div style={{ 
                  fontSize: '48px', 
                  fontFamily: 'var(--font-heading)', 
                  fontWeight: 900, 
                  color: 'rgba(15, 110, 86, 0.1)',
                  marginBottom: '-24px',
                  marginLeft: '-4px'
                }}>
                  {step.num}
                </div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '18px', color: 'var(--c-ink)', marginBottom: '12px', position: 'relative' }}>{step.title}</h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--c-ink-mid)', lineHeight: 1.7 }}>{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CAPABILITY BAND */}
      <section style={{ background: 'var(--c-ink)', padding: '100px 40px', color: 'white' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '64px', alignItems: 'center' }}>
          <div style={{ flex: '1 1 400px' }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '32px', marginBottom: '24px', letterSpacing: '-0.02em' }}>Engineering Limits & Capabilities</h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '15px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.8 }}>
              We don&apos;t just move freight; we engineer solutions. Our fleet and technical partners allow us to tackle the most demanding transport requirements across all Australian states and international ports.
            </p>
          </div>
          <div style={{ flex: '1 1 400px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
            {capabilities.map((cap, i) => (
              <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <div style={{ marginTop: '8px', width: '6px', height: '6px', borderRadius: '50%', background: 'var(--c-teal-light)', flexShrink: 0 }} />
                <span style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'rgba(255,255,255,0.8)', lineHeight: 1.5 }}>{cap}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section style={{ background: 'white', padding: '120px 40px', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '36px', color: 'var(--c-ink)', marginBottom: '20px', letterSpacing: '-0.02em' }}>
            Complex Cargo?
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '16px', color: 'var(--c-ink-mid)', marginBottom: '40px', lineHeight: 1.8 }}>
            Our project team is ready to analyze your requirements and provide a comprehensive logistics plan.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" style={{ textDecoration: 'none' }}>
              <button style={{ background: 'var(--c-teal)', color: 'white', padding: '16px 40px', borderRadius: '999px', fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '14px', cursor: 'pointer', border: 'none', transition: 'all 0.2s', boxShadow: '0 8px 24px rgba(15, 110, 86, 0.2)' }}>
                CONTACT PROJECT TEAM
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
