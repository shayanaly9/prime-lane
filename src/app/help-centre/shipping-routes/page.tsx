"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ShippingRoutes() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <main className="w-full flex flex-col items-center" style={{ background: '#fff' }}>
      {/* HERO BANNER */}
      <section 
        style={{ 
          width: '100%', 
          padding: '160px 40px 120px', 
          textAlign: 'center',
          backgroundImage: `linear-gradient(135deg, rgba(11,18,32,0.96) 0%, rgba(11,18,32,0.88) 50%, rgba(11,18,32,0.45) 100%), url('/Routes.webp')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '70dvh',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Ambient glow */}
        <div style={{ position: 'absolute', bottom: '-10%', right: '-5%', width: '40%', height: '50%', background: 'radial-gradient(circle, rgba(74, 232, 154, 0.1) 0%, transparent 70%)', filter: 'blur(80px)', pointerEvents: 'none' }} />

        <div style={{ position: 'relative', zIndex: 1, maxWidth: '1200px', width: '100%' }}>
          <div style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '8px', 
            background: 'rgba(255, 255, 255, 0.05)', 
            backdropFilter: 'blur(10px)', 
            padding: '6px 14px', 
            borderRadius: '6px', 
            marginBottom: '32px',
            border: '1px solid rgba(255, 255, 255, 0.1)' 
          }}>
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#4AE89A' }} />
            <span style={{ 
              fontFamily: 'var(--font-heading)', 
              color: 'rgba(255,255,255,0.7)', 
              fontSize: '11px', 
              fontWeight: 700, 
              letterSpacing: '0.12em', 
              textTransform: 'uppercase' 
            }}>
              HELP CENTRE
            </span>
          </div>
          
          <h1 style={{ 
            fontFamily: 'var(--font-heading)', 
            fontWeight: 800, 
            fontSize: 'clamp(40px, 8vw, 72px)', 
            lineHeight: 1.05, 
            letterSpacing: '-0.04em', 
            margin: '0 0 24px',
            color: 'white'
          }}>
            Shipping Routes &<br />
            <span style={{ color: 'var(--c-teal-light)' }}>Transit Times</span>
          </h1>
          
          <p style={{ 
            fontFamily: 'var(--font-body)', 
            fontSize: '18px', 
            color: 'rgba(255,255,255,0.65)', 
            maxWidth: '640px', 
            lineHeight: 1.8, 
            margin: '0 auto' 
          }}>
            Comprehensive details on our primary freight corridors, estimated arrival times, and global port coverage.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT SECTION */}
      <section style={{ width: '100%', background: 'white', padding: '120px 40px', position: 'relative' }}>
        {/* Subtle noise texture */}
        <div style={{ position: 'absolute', inset: 0, opacity: 0.015, pointerEvents: 'none', backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />

        <div style={{ maxWidth: '1000px', margin: '0 auto', position: 'relative' }}>
          <div style={{ marginBottom: '80px' }}>
            <div style={{ 
              fontFamily: 'var(--font-heading)', 
              fontSize: '11px', 
              letterSpacing: '0.14em', 
              textTransform: 'uppercase', 
              color: 'var(--c-teal)', 
              fontWeight: 700, 
              marginBottom: '16px' 
            }}>
              Our Primary Corridor
            </div>
            <h2 style={{ 
              fontFamily: 'var(--font-heading)', 
              fontWeight: 800, 
              fontSize: 'clamp(32px, 5vw, 48px)', 
              color: 'var(--c-ink)', 
              marginBottom: '24px', 
              letterSpacing: '-0.02em',
              lineHeight: 1.1
            }}>
              Australia &rarr; Dubai
            </h2>
            <p style={{ 
              fontFamily: 'var(--font-body)', 
              fontSize: '17px', 
              color: 'var(--c-ink-mid)', 
              lineHeight: 1.9, 
              maxWidth: '800px' 
            }}>
              We pride ourselves on being specialists in the Australia-to-Dubai route. By focusing on this corridor, we offer streamlined customs handling and optimized schedules that other general carriers cannot match.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-[100px]">
            <div>
              <h4 style={{ 
                fontFamily: 'var(--font-heading)', 
                fontWeight: 800, 
                fontSize: '18px', 
                color: 'var(--c-ink)', 
                marginBottom: '24px',
                letterSpacing: '-0.01em'
              }}>
                Direct Port Connections
              </h4>
              <ul style={{ padding: 0, margin: 0, listStyle: 'none' }} className="grid gap-5">
                {[
                  'Melbourne (Port of Melbourne)',
                  'Sydney (Port Botany)',
                  'Brisbane (Port of Brisbane)',
                  'Perth (Fremantle Port)'
                ].map(port => (
                  <li key={port} style={{ display: 'flex', alignItems: 'center', gap: '16px', fontFamily: 'var(--font-body)', fontSize: '15px', color: 'var(--c-ink-mid)' }}>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--c-teal)' }} />
                    {port}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 style={{ 
                fontFamily: 'var(--font-heading)', 
                fontWeight: 800, 
                fontSize: '18px', 
                color: 'var(--c-ink)', 
                marginBottom: '24px',
                letterSpacing: '-0.01em'
              }}>
                Key Destinations (UAE)
              </h4>
              <ul style={{ padding: 0, margin: 0, listStyle: 'none' }} className="grid gap-5">
                {[
                  'Dubai (Jebel Ali Port)',
                  'Dubai World Central (DWC)',
                  'Sharjah (Port Khalid)',
                  'Abu Dhabi (Khalifa Port)'
                ].map(port => (
                  <li key={port} style={{ display: 'flex', alignItems: 'center', gap: '16px', fontFamily: 'var(--font-body)', fontSize: '15px', color: 'var(--c-ink-mid)' }}>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#4AE89A' }} />
                    {port}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ROUTE VISUALIZATION - Premium Industrial Look */}
          <div style={{ 
            background: '#F9FAFB', 
            borderRadius: '32px', 
            padding: '64px 48px',
            border: '1px solid #E5E7EB',
            boxShadow: '0 4px 12px rgba(0,0,0,0.02)'
          }}>
            <div className="w-full flex flex-col md:flex-row items-center justify-between" style={{ 
              background: 'var(--c-ink)', 
              borderRadius: '20px', 
              padding: '48px 40px',
              boxShadow: '0 24px 64px rgba(11,18,32,0.15)',
              position: 'relative',
              overflow: 'hidden'
            }}>
                {/* Accent glow */}
                <div style={{ position: 'absolute', top: '-10%', right: '-10%', width: '150px', height: '150px', background: 'radial-gradient(circle, rgba(74, 232, 154, 0.08) 0%, transparent 70%)', filter: 'blur(40px)', pointerEvents: 'none' }} />

                <div className="flex flex-col text-center md:text-left mb-8 md:mb-0 w-full md:w-1/3">
                  <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '24px', color: 'white', letterSpacing: '-0.01em' }}>Australia</div>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'rgba(255,255,255,0.4)', marginTop: '6px' }}>Melbourne · Sydney · Brisbane</div>
                </div>

                <div className="flex flex-col items-center flex-1 w-full md:w-1/3 px-8">
                  <div style={{ 
                    fontFamily: 'var(--font-heading)', 
                    fontSize: '10px', 
                    letterSpacing: '0.14em', 
                    textTransform: 'uppercase', 
                    color: 'var(--c-teal-light)', 
                    textAlign: 'center', 
                    marginBottom: '12px',
                    fontWeight: 700 
                  }}>
                    Sea freight · 30–45 days
                  </div>
                  <div className="w-full flex items-center justify-between relative mb-4">
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--c-teal-light)', zIndex: 10, boxShadow: '0 0 10px var(--c-teal-light)' }}></div>
                    <div className="flex-1" style={{ height: '1px', background: 'var(--c-teal)', opacity: 0.3 }}></div>
                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'white', zIndex: 10, boxShadow: '0 0 15px white' }}></div>
                    <div className="flex-1" style={{ height: '1px', background: 'var(--c-teal)', opacity: 0.3 }}></div>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--c-teal-light)', zIndex: 10, boxShadow: '0 0 10px var(--c-teal-light)' }}></div>
                  </div>
                  <div style={{ 
                    background: 'var(--c-teal)', 
                    color: 'white', 
                    borderRadius: '999px', 
                    padding: '6px 16px', 
                    fontFamily: 'var(--font-heading)', 
                    fontWeight: 700, 
                    fontSize: '11px', 
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase'
                  }}>
                    Primary route
                  </div>
                </div>

                <div className="flex flex-col text-center md:text-right mt-8 md:mt-0 w-full md:w-1/3">
                  <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '24px', color: 'white', letterSpacing: '-0.01em' }}>Dubai, UAE</div>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'rgba(255,255,255,0.4)', marginTop: '6px' }}>Jebel Ali Port · Free Zones</div>
                </div>
            </div>
            
            <div style={{ marginTop: '48px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
              <div 
                onMouseEnter={() => setHoveredCard(1)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{ 
                  background: 'white', 
                  padding: '40px', 
                  borderRadius: '20px', 
                  border: hoveredCard === 1 ? '1px solid var(--c-teal-light)' : '1px solid #E5E7EB',
                  transition: 'all 0.4s cubic-bezier(0.32,0.72,0,1)',
                  transform: hoveredCard === 1 ? 'translateY(-8px)' : 'translateY(0)',
                  boxShadow: hoveredCard === 1 ? '0 24px 48px rgba(11,18,32,0.08)' : '0 4px 12px rgba(11,18,32,0.02)'
                }}
              >
                <h4 style={{ 
                  fontFamily: 'var(--font-heading)', 
                  fontWeight: 800, 
                  fontSize: '16px', 
                  color: 'var(--c-ink)', 
                  marginBottom: '12px',
                  letterSpacing: '-0.01em' 
                }}>
                  Transit Times
                </h4>
                <p style={{ 
                  fontFamily: 'var(--font-body)', 
                  fontSize: '14px', 
                  color: 'var(--c-ink-mid)', 
                  lineHeight: 1.8 
                }}>
                  Generally ranging from 30 to 45 days depending on the departure port and vessel schedule. Direct sailings are prioritized for vehicle safety.
                </p>
              </div>
              <div 
                onMouseEnter={() => setHoveredCard(2)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{ 
                  background: 'white', 
                  padding: '40px', 
                  borderRadius: '20px', 
                  border: hoveredCard === 2 ? '1px solid var(--c-teal-light)' : '1px solid #E5E7EB',
                  transition: 'all 0.4s cubic-bezier(0.32,0.72,0,1)',
                  transform: hoveredCard === 2 ? 'translateY(-8px)' : 'translateY(0)',
                  boxShadow: hoveredCard === 2 ? '0 24px 48px rgba(11,18,32,0.08)' : '0 4px 12px rgba(11,18,32,0.02)'
                }}
              >
                <h4 style={{ 
                  fontFamily: 'var(--font-heading)', 
                  fontWeight: 800, 
                  fontSize: '16px', 
                  color: 'var(--c-ink)', 
                  marginBottom: '12px',
                  letterSpacing: '-0.01em' 
                }}>
                  Domestic Transport
                </h4>
                <p style={{ 
                  fontFamily: 'var(--font-body)', 
                  fontSize: '14px', 
                  color: 'var(--c-ink-mid)', 
                  lineHeight: 1.8 
                }}>
                  We also offer Australia-wide vehicle collection and wharf cartage to ensure your goods reach the port safely before their international journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
