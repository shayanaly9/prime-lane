"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function VehicleLogisticsPage() {
  const [hoveredButton, setHoveredButton] = useState<number | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const services = [
    {
      title: "Auction & Dealership Pickups",
      description: "Specialized service for collecting vehicles from local auctions like Manheim or Pickles and delivering to dealerships or private homes across Australia."
    },
    {
      title: "Open & Enclosed Carriers",
      description: "Open Carrier for standard transport of everyday vehicles. Enclosed Carrier for high-value, prestige, or classic cars — fully protected from weather and road debris."
    },
    {
      title: "Non-Runner / Salvage Transport",
      description: "Winch-equipped trucks purpose-built for moving vehicles that do not start. Salvage, damaged, or non-running vehicles transported safely and efficiently."
    },
    {
      title: "Interstate Last-Mile Delivery",
      description: "Receiving vehicles arriving from interstate carriers and completing the final local delivery to the destination — dealership, home, or depot."
    }
  ];

  return (
    <main className="w-full" style={{ background: '#fff' }}>
      {/* 1. HERO BANNER */}
      <section
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(11,18,32,0.96) 0%, rgba(11,18,32,0.88) 50%, rgba(11,18,32,0.45) 100%), url('/Cards/Card 4.jpeg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '160px 40px 120px',
          textAlign: 'left',
          minHeight: '80dvh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Ambient glow */}
        <div style={{ position: 'absolute', bottom: '-10%', right: '-5%', width: '40%', height: '50%', background: 'radial-gradient(circle, rgba(74, 232, 154, 0.1) 0%, transparent 70%)', filter: 'blur(80px)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%', position: 'relative', zIndex: 1 }}>
          {/* Badge */}
          <div style={{ 
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 14px',
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(10px)',
            color: 'rgba(255,255,255,0.7)',
            borderRadius: '6px',
            fontFamily: 'var(--font-heading)',
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            marginBottom: '32px',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#4AE89A' }} />
            LOCAL TRANSPORT
          </div>
          
          <h1 style={{ 
            fontFamily: 'var(--font-heading)', 
            fontWeight: 800, 
            fontSize: 'clamp(40px, 8vw, 72px)', 
            lineHeight: 1.05, 
            marginBottom: '24px',
            color: 'white',
            letterSpacing: '-0.03em',
            maxWidth: '850px'
          }}>
            Vehicle & Automotive<br />
            <span style={{ color: 'var(--c-teal-light)' }}>Transport Solutions</span>
          </h1>
          
          <p style={{ 
            fontFamily: 'var(--font-body)', 
            fontSize: '17px', 
            color: 'rgba(255,255,255,0.65)',
            maxWidth: '520px',
            lineHeight: 1.8,
            marginBottom: '44px'
          }}>
            Professional car carrier services across Australia — from everyday vehicles to prestige cars and non-runners. Handled with engineering-grade care.
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
                REQUEST CARRIER QUOTE
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

      {/* 2. SERVICES SECTION */}
      <section style={{ background: 'white', padding: '100px 40px', position: 'relative' }}>
        {/* Subtle noise texture */}
        <div style={{ position: 'absolute', inset: 0, opacity: 0.015, pointerEvents: 'none', backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />

        <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative' }}>
          <div style={{ marginBottom: '64px' }}>
            <div style={{ 
              fontFamily: 'var(--font-heading)', 
              fontWeight: 700, 
              fontSize: '11px', 
              letterSpacing: '0.14em', 
              textTransform: 'uppercase',
              color: 'var(--c-teal)',
              marginBottom: '12px'
            }}>
              Core Services
            </div>
            <h2 style={{ 
              fontFamily: 'var(--font-heading)', 
              fontWeight: 800, 
              fontSize: 'clamp(28px, 4vw, 42px)', 
              color: 'var(--c-ink)',
              marginBottom: '16px',
              letterSpacing: '-0.02em',
              lineHeight: 1.1
            }}>
              Automotive Logistics
            </h2>
            <p style={{ 
              fontFamily: 'var(--font-body)', 
              fontSize: '15px', 
              color: 'var(--c-ink-mid)',
              maxWidth: '600px',
              lineHeight: 1.8
            }}>
              Every vehicle is handled with technical precision. We document condition before and after every movement for complete transparency.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
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
                <h3 style={{ 
                  fontFamily: 'var(--font-heading)', 
                  fontWeight: 700, 
                  fontSize: '18px', 
                  color: 'var(--c-ink)', 
                  marginBottom: '14px',
                  letterSpacing: '-0.01em'
                }}>
                  {service.title}
                </h3>
                <p style={{ 
                  fontFamily: 'var(--font-body)', 
                  fontSize: '14px', 
                  color: 'var(--c-ink-mid)', 
                  lineHeight: 1.7 
                }}>
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CONDITION REPORT SECTION */}
      <section style={{ background: 'var(--c-ink)', padding: '100px 40px', color: 'white', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-10%', left: '-5%', width: '40%', height: '50%', background: 'radial-gradient(circle, rgba(74, 232, 154, 0.05) 0%, transparent 70%)', filter: 'blur(80px)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', flexDirection: 'row', gap: '64px', flexWrap: 'wrap', alignItems: 'center', position: 'relative', zIndex: 1 }}>
          <div style={{ flex: '1 1 50%', minWidth: '300px' }}>
            <div style={{ 
              fontFamily: 'var(--font-heading)', 
              fontWeight: 700, 
              fontSize: '11px', 
              letterSpacing: '0.14em', 
              textTransform: 'uppercase',
              color: 'var(--c-teal-light)',
              marginBottom: '12px'
            }}>
              Our Commitment
            </div>
            <h2 style={{ 
              fontFamily: 'var(--font-heading)', 
              fontWeight: 800, 
              fontSize: '32px', 
              color: 'white',
              marginBottom: '24px',
              letterSpacing: '-0.02em'
            }}>
              Full Condition Report — Every Time
            </h2>
            <p style={{ 
              fontFamily: 'var(--font-body)', 
              fontSize: '15px', 
              color: 'rgba(255,255,255,0.6)',
              lineHeight: 1.9,
              marginBottom: '32px'
            }}>
              Before we move any vehicle, our team conducts a full photographic condition report. Every scratch, dent, and mark is documented. The same report is completed upon delivery. You receive both reports so you have complete peace of mind and full transparency throughout the process.
            </p>
            <Link href="/contact" style={{ textDecoration: 'none' }}>
              <button
                style={{
                  background: 'var(--c-teal)',
                  color: 'white',
                  border: 'none',
                  padding: '14px 32px',
                  borderRadius: '999px',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 700,
                  fontSize: '14px',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  boxShadow: '0 8px 24px rgba(15, 110, 86, 0.2)'
                }}
              >
                BOOK A CARRIER
              </button>
            </Link>
          </div>

          <div style={{ 
            flex: '1 1 350px', 
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '20px',
            padding: '32px'
          }}>
            {[
              "Photos taken before pickup — full exterior and interior documentation",
              "Photos taken upon delivery — condition verified at destination",
              "Digital reports sent to client for complete transparency",
              "Insurance options available on request for high-value vehicles"
            ].map((item, idx) => (
              <div key={idx} style={{ display: 'flex', gap: '16px', marginBottom: idx === 3 ? 0 : '20px', alignItems: 'flex-start' }}>
                <div style={{ 
                  width: '6px', 
                  height: '6px', 
                  borderRadius: '50%',
                  background: 'var(--c-teal-light)',
                  flexShrink: 0,
                  marginTop: '8px'
                }} />
                <div style={{ 
                  fontFamily: 'var(--font-body)', 
                  fontSize: '13px', 
                  color: 'rgba(255,255,255,0.8)',
                  lineHeight: 1.6
                }}>
                  {item}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CTA BAND */}
      <section style={{ background: 'white', padding: '120px 40px', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ 
            fontFamily: 'var(--font-heading)', 
            fontWeight: 800, 
            fontSize: '36px', 
            color: 'var(--c-ink)',
            marginBottom: '20px',
            letterSpacing: '-0.02em'
          }}>
            Ready to Move Your Vehicle?
          </h2>
          <p style={{ 
            fontFamily: 'var(--font-body)', 
            fontSize: '16px', 
            color: 'var(--c-ink-mid)',
            maxWidth: '480px',
            margin: '0 auto 40px',
            lineHeight: 1.8
          }}>
            Get a personalised quote for your vehicle transport. We respond within one business day.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" style={{ textDecoration: 'none' }}>
              <button
                style={{
                  background: 'var(--c-teal)',
                  color: 'white',
                  border: 'none',
                  padding: '16px 40px',
                  borderRadius: '999px',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 700,
                  fontSize: '14px',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  boxShadow: '0 8px 24px rgba(15, 110, 86, 0.2)'
                }}
              >
                START QUOTE
              </button>
            </Link>
            <a href="tel:+61421821220" style={{ textDecoration: 'none' }}>
              <button
                style={{
                  background: 'transparent',
                  color: 'var(--c-ink)',
                  border: '1.5px solid #E5E7EB',
                  padding: '16px 40px',
                  borderRadius: '999px',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 600,
                  fontSize: '14px',
                  cursor: 'pointer',
                  transition: 'all 0.2s'
                }}
              >
                CALL OPERATIONS
              </button>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
