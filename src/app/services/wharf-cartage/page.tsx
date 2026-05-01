"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function WharfCartagePage() {
  const [hoveredButton, setHoveredButton] = useState<number | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const services = [
    {
      title: "Side-Loader Delivery",
      description: "Ground-level container delivery at sites without a loading dock. Perfect for industrial sites, factories, and locations where standard delivery is not possible."
    },
    {
      title: "Standard Skeletal Trailers",
      description: "Fast wharf-to-warehouse drop-and-swap operations. Ideal for high-volume container movements requiring quick turnaround at the port."
    },
    {
      title: "Overweight & Oversize Loads",
      description: "High-mass transport for heavy machinery or industrial automotive parts. Full permit management and compliance handled by our team."
    },
    {
      title: "Reefer Services",
      description: "Power-plugged transport for temperature-controlled chemicals and perishable cargo. Fully equipped reefer units maintaining precise temperature throughout."
    },
    {
      title: "Container De-Hiring",
      description: "Empty container returns to designated depots. We manage the full de-hire process so you don't have to coordinate with multiple parties."
    }
  ];

  return (
    <main className="w-full" style={{ background: '#fff' }}>
      {/* 1. HERO BANNER */}
      <section
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(11,18,32,0.96) 0%, rgba(11,18,32,0.88) 50%, rgba(11,18,32,0.45) 100%), url('/Cards/Card 5.jpeg')`,
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
        <div style={{ position: 'absolute', top: '15%', right: '5%', width: '40%', height: '60%', background: 'radial-gradient(circle, rgba(74, 232, 154, 0.08) 0%, transparent 70%)', filter: 'blur(100px)', pointerEvents: 'none' }} />

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
            Wharf & Container<br />
            <span style={{ color: 'var(--c-teal-light)' }}>Cartage Solutions</span>
          </h1>

          <p style={{ 
            fontFamily: 'var(--font-body)', 
            fontSize: '17px', 
            color: 'rgba(255,255,255,0.65)',
            maxWidth: '520px',
            lineHeight: 1.8,
            marginBottom: '44px'
          }}>
            Reliable port cartage services from the Port of Melbourne and surrounding wharves — side-loaders, skeletal trailers, and more.
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
                REQUEST WHARF QUOTE
              </button>
            </Link>
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
              Capabilities
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
              Port Operations
            </h2>
            <p style={{ 
              fontFamily: 'var(--font-body)', 
              fontSize: '15px', 
              color: 'var(--c-ink-mid)',
              maxWidth: '600px',
              lineHeight: 1.8
            }}>
              Fast, reliable container pickup and delivery from all major Australian ports and wharves. Managed with port-operator relationships.
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

      {/* 3. COVERAGE SECTION */}
      <section style={{ background: '#F9FAFB', padding: '100px 40px', position: 'relative' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
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
              Service Area
            </div>
            <h2 style={{ 
              fontFamily: 'var(--font-heading)', 
              fontWeight: 800, 
              fontSize: '36px', 
              color: 'var(--c-ink)',
              marginBottom: '12px',
              letterSpacing: '-0.02em'
            }}>
              Ports & Coverage Areas
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'row', gap: '64px', flexWrap: 'wrap' }}>
            {/* Left Column: Info Card */}
            <div style={{ 
              flex: '1 1 45%', 
              minWidth: '300px',
              background: 'white',
              borderRadius: '20px',
              padding: '40px',
              border: '1px solid #E5E7EB',
              boxShadow: '0 4px 12px rgba(0,0,0,0.02)'
            }}>
              {[
                { label: "PRIMARY PORT", value: "Port of Melbourne", sub: "Main operations hub" },
                { label: "WESTERN SUBURBS", value: "Tarneit · Broadmeadows", sub: "Industrial zones covered" },
                { label: "GREATER MELBOURNE", value: "All surrounding regions", sub: "Metro and outer suburbs" },
                { label: "ON ENQUIRY", value: "Interstate Ports", sub: "Brisbane · Sydney · Fremantle" }
              ].map((item, idx, arr) => (
                <div key={idx} style={{ 
                  borderBottom: idx === arr.length - 1 ? 'none' : '1px solid #F3F4F6', 
                  paddingBottom: idx === arr.length - 1 ? '0' : '20px',
                  marginBottom: idx === arr.length - 1 ? '0' : '20px'
                }}>
                  <div style={{ 
                    fontFamily: 'var(--font-heading)', 
                    fontWeight: 700, 
                    fontSize: '10px', 
                    letterSpacing: '0.12em', 
                    textTransform: 'uppercase', 
                    color: 'var(--c-teal)', 
                    marginBottom: '8px' 
                  }}>
                    {item.label}
                  </div>
                  <div style={{ 
                    fontFamily: 'var(--font-heading)', 
                    fontWeight: 800, 
                    fontSize: '18px', 
                    color: 'var(--c-ink)', 
                    marginBottom: '4px' 
                  }}>
                    {item.value}
                  </div>
                  <div style={{ 
                    fontFamily: 'var(--font-body)', 
                    fontSize: '13px', 
                    color: 'var(--c-ink-mid)' 
                  }}>
                    {item.sub}
                  </div>
                </div>
              ))}
            </div>

            {/* Right Column: Why Choose */}
            <div style={{ 
              flex: '1 1 45%', 
              minWidth: '300px',
              background: 'var(--c-ink)',
              borderRadius: '20px',
              padding: '40px',
              color: 'white',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{ position: 'absolute', top: '-10%', right: '-10%', width: '100px', height: '100px', background: 'radial-gradient(circle, rgba(74, 232, 154, 0.1) 0%, transparent 70%)', filter: 'blur(30px)', pointerEvents: 'none' }} />
              
              <h3 style={{ 
                fontFamily: 'var(--font-heading)', 
                fontWeight: 800, 
                fontSize: '20px', 
                color: 'white', 
                marginBottom: '32px',
                letterSpacing: '-0.01em'
              }}>
                Why Choose Our Wharf Services?
              </h3>
              {[
                "Direct relationships with Port of Melbourne operators for faster turnaround",
                "Full compliance with port authority regulations and weight requirements",
                "Real-time communication with our drivers for accurate ETA updates",
                "Competitive rates with no hidden port or handling surcharges"
              ].map((text, idx) => (
                <div key={idx} style={{ display: 'flex', gap: '16px', marginBottom: '24px', alignItems: 'flex-start' }}>
                  <div style={{ 
                    width: '6px', 
                    height: '6px', 
                    background: 'var(--c-teal-light)', 
                    borderRadius: '50%', 
                    flexShrink: 0,
                    marginTop: '8px' 
                  }} />
                  <div style={{ 
                    fontFamily: 'var(--font-body)', 
                    fontSize: '14px', 
                    color: 'rgba(255,255,255,0.7)', 
                    lineHeight: 1.7 
                  }}>
                    {text}
                  </div>
                </div>
              ))}
            </div>
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
            Need a Container Moved?
          </h2>
          <p style={{ 
            fontFamily: 'var(--font-body)', 
            fontSize: '16px', 
            color: 'var(--c-ink-mid)',
            maxWidth: '480px',
            margin: '0 auto 40px',
            lineHeight: 1.8
          }}>
            Contact our team today for a fast, competitive quote on your wharf cartage requirements.
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
                GET A QUOTE
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
                CALL +61 421 821 220
              </button>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
