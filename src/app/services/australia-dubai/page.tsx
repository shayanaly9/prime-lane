"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function AustraliaDubaiPage() {
  const [hoveredButton, setHoveredButton] = useState<number | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const serviceOptions = [
    {
      title: "FCL — Full Container Load",
      text: "20ft and 40ft containers for larger cargo volumes. Dedicated container means your goods travel alone — faster and more secure."
    },
    {
      title: "LCL — Less than Container Load",
      text: "Share container space for smaller shipments. Cost-effective solution when you don't have enough cargo to fill a full container."
    },
    {
      title: "Reefer Containers",
      text: "Temperature-controlled containers for perishables or chemicals requiring precise temperature management throughout transit."
    },
    {
      title: "Dangerous Goods",
      text: "DG-licensed for Class 2–9 cargo. Full compliance with Australian export and UAE import regulations for hazardous materials."
    },
    {
      title: "Break-bulk & Project Cargo",
      text: "Oversized or non-containerisable loads handled with specialist equipment and full permit management."
    }
  ];

  return (
    <main style={{ width: '100%', background: '#fff' }}>
      {/* 1. HERO BANNER */}
      <section
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(11,18,32,0.96) 0%, rgba(11,18,32,0.88) 50%, rgba(11,18,32,0.45) 100%), url('/Cards/Card 1.jpeg')`,
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
        <div style={{ position: 'absolute', bottom: '-10%', left: '-5%', width: '40%', height: '50%', background: 'radial-gradient(circle, rgba(74, 232, 154, 0.1) 0%, transparent 70%)', filter: 'blur(80px)', pointerEvents: 'none' }} />

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
              PRIMARY ROUTE
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
            Australia to Dubai<br />
            <span style={{ color: 'var(--c-teal-light)' }}>Container Shipping</span>
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
            Our flagship corridor. Full-container (FCL) and consolidated (LCL) services from all major Australian ports direct to Jebel Ali, Dubai.
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
                  transform: hoveredButton === 2 ? 'translateY(-2px)' : 'translateY(0)'
                }}
              >
                CALL US
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* 2. ROUTE DETAILS SECTION */}
      <section style={{ background: 'white', padding: '100px 40px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--c-teal)', marginBottom: '12px' }}>Route Specifics</div>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '36px', color: 'var(--c-ink)', letterSpacing: '-0.02em' }}>Australia to Jebel Ali</h2>
          </div>

          {/* ROUTE CARD - Upgraded visual depth */}
          <div
            style={{
              background: 'var(--c-ink)',
              borderRadius: '20px',
              padding: '48px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '40px',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 24px 64px rgba(11,18,32,0.15)'
            }}
          >
            {/* Ambient pattern */}
            <div style={{ position: 'absolute', inset: 0, opacity: 0.05, pointerEvents: 'none', backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />

            <div style={{ flex: '1 1 200px', position: 'relative' }}>
              <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '24px', color: 'white' }}>Australia</div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'rgba(255,255,255,0.4)', marginTop: '8px' }}>Melbourne · Sydney · Brisbane</div>
            </div>

            <div style={{ flex: '1 1 300px', textAlign: 'center', position: 'relative' }}>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--c-teal-light)', marginBottom: '16px', fontWeight: 700 }}>
                Direct Transit · ~18–22 Days
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'relative', marginBottom: '16px' }}>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'var(--c-teal-light)', boxShadow: '0 0 15px var(--c-teal-light)' }}></div>
                <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, var(--c-teal-light) 0%, rgba(255,255,255,0.1) 100%)', margin: '0 4px' }}></div>
                <div style={{ flex: 1, height: '1px', background: 'linear-gradient(270deg, var(--c-teal-light) 0%, rgba(255,255,255,0.1) 100%)', margin: '0 4px' }}></div>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'var(--c-teal-light)', boxShadow: '0 0 15px var(--c-teal-light)' }}></div>
              </div>
              <div style={{ display: 'inline-block', background: 'rgba(74, 232, 154, 0.1)', color: 'var(--c-teal-light)', borderRadius: '4px', padding: '4px 12px', fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '11px', border: '1px solid rgba(74, 232, 154, 0.2)' }}>PRIMARY SECTOR</div>
            </div>

            <div style={{ flex: '1 1 200px', textAlign: 'right', position: 'relative' }}>
              <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '24px', color: 'white' }}>Dubai, UAE</div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'rgba(255,255,255,0.4)', marginTop: '8px' }}>Jebel Ali · Port Operations</div>
            </div>
          </div>

          {/* Info Cards Row */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginTop: '24px' }}>
            {[
              { label: "TRANSIT TIME", value: "18–22 Days", subtext: "Average port-to-port" },
              { label: "CONTAINER OPTIONS", value: "FCL & LCL", subtext: "Standard & Specialized" },
              { label: "DEPARTURE FREQUENCY", value: "Weekly", subtext: "Regular scheduled sailings" }
            ].map((info, i) => (
              <div key={i} style={{ background: '#F9FAFB', borderRadius: '12px', padding: '32px', border: '1px solid #E5E7EB' }}>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', color: 'var(--c-teal)', textTransform: 'uppercase', marginBottom: '8px' }}>{info.label}</div>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '20px', fontWeight: 800, color: 'var(--c-ink)', marginBottom: '4px' }}>{info.value}</div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--c-ink-mid)' }}>{info.subtext}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SERVICE OPTIONS SECTION */}
      <section style={{ background: '#F9FAFB', padding: '100px 40px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ marginBottom: '64px' }}>
            <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--c-teal)', marginBottom: '12px' }}>Inventory</div>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '36px', color: 'var(--c-ink)', letterSpacing: '-0.02em' }}>Shipping Solutions</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {serviceOptions.map((service, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  background: 'white',
                  borderRadius: '16px',
                  padding: '32px',
                  border: '1px solid #E5E7EB',
                  borderLeft: hoveredCard === index ? '4px solid var(--c-teal)' : '4px solid transparent',
                  transition: 'all 0.4s cubic-bezier(0.32,0.72,0,1)',
                  transform: hoveredCard === index ? 'translateY(-8px)' : 'translateY(0)',
                  boxShadow: hoveredCard === index ? '0 24px 48px rgba(11,18,32,0.08)' : 'none'
                }}
              >
                <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '18px', color: 'var(--c-ink)', marginBottom: '14px', letterSpacing: '-0.01em' }}>{service.title}</h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--c-ink-mid)', lineHeight: 1.7 }}>{service.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. DOCUMENTATION SECTION */}
      <section style={{ background: 'var(--c-ink)', padding: '100px 40px', color: 'white' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '64px', alignItems: 'center' }}>
          <div style={{ flex: '1 1 450px' }}>
            <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--c-teal-light)', marginBottom: '12px' }}>Compliance</div>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '32px', marginBottom: '24px', letterSpacing: '-0.02em' }}>Documentation & Clearance</h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '15px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.9, marginBottom: '32px' }}>
              Shipping between Australia and Dubai involves precise regulatory requirements. Our specialists handle the entire documentation chain from Australian Border Force clearance to UAE import coordination.
            </p>
            <Link href="/contact" style={{ textDecoration: 'none' }}>
              <button style={{ background: 'var(--c-teal)', color: 'white', border: 'none', padding: '14px 32px', borderRadius: '999px', fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '14px', cursor: 'pointer', transition: 'all 0.2s' }}>
                GET A COMPLIANCE QUOTE
              </button>
            </Link>
          </div>
          <div style={{ flex: '1 1 350px', background: 'rgba(255,255,255,0.03)', borderRadius: '20px', padding: '32px', border: '1px solid rgba(255,255,255,0.08)' }}>
            {[
              "Bill of Lading & Sea Waybills",
              "Certificates of Origin (COO)",
              "Export Customs (Australian Border Force)",
              "UAE Import Customs Coordination",
              "Dangerous Goods Declarations"
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
            Ready to Ship to Dubai?
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '16px', color: 'var(--c-ink-mid)', marginBottom: '40px', lineHeight: 1.8 }}>
            Join the countless Australian businesses using our primary freight corridor for reliable delivery to the UAE.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" style={{ textDecoration: 'none' }}>
              <button style={{ background: 'var(--c-teal)', color: 'white', padding: '16px 40px', borderRadius: '999px', fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '14px', cursor: 'pointer', border: 'none', transition: 'all 0.2s', boxShadow: '0 8px 24px rgba(15, 110, 86, 0.2)' }}>
                START SHIPMENT
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
