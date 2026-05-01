"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Certifications() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <main className="w-full flex flex-col items-center" style={{ background: '#fff' }}>
      {/* HERO BANNER */}
      <section 
        style={{ 
          width: '100%', 
          padding: '160px 40px 120px', 
          textAlign: 'center',
          backgroundImage: `linear-gradient(135deg, rgba(11,18,32,0.96) 0%, rgba(11,18,32,0.88) 50%, rgba(11,18,32,0.45) 100%), url('/Certifications.jpeg')`,
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
              COMPLIANCE & SAFETY
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
            Certifications &<br />
            <span style={{ color: 'var(--c-teal-light)' }}>Accreditations</span>
          </h1>
          
          <p style={{ 
            fontFamily: 'var(--font-body)', 
            fontSize: '18px', 
            color: 'rgba(255,255,255,0.65)', 
            maxWidth: '640px', 
            lineHeight: 1.8, 
            margin: '0 auto' 
          }}>
            Operating at the highest standards of safety and regulatory compliance across international freight corridors.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT SECTION */}
      <section style={{ width: '100%', background: 'white', padding: '120px 40px', position: 'relative' }}>
        {/* Subtle noise texture */}
        <div style={{ position: 'absolute', inset: 0, opacity: 0.015, pointerEvents: 'none', backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />

        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative' }} className="flex flex-col lg:flex-row gap-[80px]">
          {/* Left Column */}
          <div className="w-full lg:w-[60%]">
            <div style={{ 
              fontFamily: 'var(--font-heading)', 
              fontSize: '11px', 
              letterSpacing: '0.14em', 
              textTransform: 'uppercase', 
              color: 'var(--c-teal)', 
              fontWeight: 700, 
              marginBottom: '16px' 
            }}>
              Operational Excellence
            </div>
            <h2 style={{ 
              fontFamily: 'var(--font-heading)', 
              fontWeight: 800, 
              fontSize: 'clamp(28px, 4vw, 42px)', 
              color: 'var(--c-ink)', 
              marginBottom: '48px', 
              letterSpacing: '-0.02em', 
              lineHeight: 1.1 
            }}>
              A commitment to protecting your cargo, our team, and the environment.
            </h2>
            <p style={{ 
              fontFamily: 'var(--font-body)', 
              fontSize: '16px', 
              color: 'var(--c-ink-mid)', 
              lineHeight: 1.9, 
              marginBottom: '64px' 
            }}>
              At PrimeLane Logistics, we operate at the highest standards of safety and regulatory compliance. Our accreditations are a testament to our operational excellence and our unwavering commitment to industry-leading protocols.
            </p>

            <div className="flex flex-col gap-12">
              {[
                {
                  id: 1,
                  tag: "DG",
                  title: "Dangerous Goods (DG) Certified",
                  text: "We are fully certified and legally authorized to handle and transport DG Classes 2 through 9. This requires rigorous, specialized training and strict adherence to national and international safety protocols, ensuring hazardous materials are moved without incident."
                },
                {
                  id: 2,
                  tag: "IF",
                  title: "International Freight Compliance",
                  text: "We operate in full compliance with the Australian Border Force regulations, UAE import authorities, and international maritime and aviation standards, ensuring your cargo meets all legal requirements for seamless cross-border transit."
                }
              ].map((card) => (
                <div 
                  key={card.id}
                  onMouseEnter={() => setHoveredCard(card.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  style={{ 
                    background: '#F9FAFB', 
                    borderRadius: '20px', 
                    padding: '40px', 
                    border: hoveredCard === card.id ? '1px solid var(--c-teal-light)' : '1px solid #E5E7EB',
                    borderLeft: hoveredCard === card.id ? '4px solid var(--c-teal)' : '4px solid transparent',
                    transition: 'all 0.4s cubic-bezier(0.32,0.72,0,1)',
                    transform: hoveredCard === card.id ? 'translateY(-8px)' : 'translateY(0)',
                    boxShadow: hoveredCard === card.id ? '0 24px 48px rgba(11,18,32,0.08)' : '0 4px 12px rgba(11,18,32,0.02)'
                  }}
                >
                  <h3 style={{ 
                    fontFamily: 'var(--font-heading)', 
                    fontWeight: 700, 
                    fontSize: '20px', 
                    color: 'var(--c-ink)', 
                    marginBottom: '16px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '16px' 
                  }}>
                    <div style={{ 
                      width: '36px', 
                      height: '36px', 
                      borderRadius: '8px', 
                      background: hoveredCard === card.id ? 'var(--c-teal)' : 'var(--c-ink)', 
                      color: 'white', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center', 
                      fontSize: '12px',
                      fontWeight: 800,
                      transition: 'background 0.3s'
                    }}>
                      {card.tag}
                    </div>
                    {card.title}
                  </h3>
                  <p style={{ 
                    fontFamily: 'var(--font-body)', 
                    fontSize: '15px', 
                    color: 'var(--c-ink-mid)', 
                    lineHeight: 1.8 
                  }}>
                    {card.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Premium Dashboard Card */}
          <div className="w-full lg:w-[40%]">
            <div style={{ 
              background: 'var(--c-ink)', 
              borderRadius: '24px', 
              padding: '48px', 
              color: 'white',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 24px 64px rgba(11,18,32,0.15)'
            }}>
              <div style={{ position: 'absolute', top: '-10%', right: '-10%', width: '150px', height: '150px', background: 'radial-gradient(circle, rgba(74, 232, 154, 0.1) 0%, transparent 70%)', filter: 'blur(40px)', pointerEvents: 'none' }} />
              
              <div style={{ 
                fontFamily: 'var(--font-heading)', 
                fontSize: '11px', 
                letterSpacing: '0.12em', 
                textTransform: 'uppercase', 
                color: 'var(--c-teal-light)', 
                fontWeight: 700, 
                marginBottom: '32px' 
              }}>
                Accreditation Dashboard
              </div>
              
              <div className="flex flex-col gap-10">
                {[
                  { label: 'DG License (Class 2-9)', status: 'ACTIVE', color: '#4AE89A' },
                  { label: 'International Freight Accreditation', status: 'VERIFIED', color: '#4AE89A' },
                  { label: 'Maritime Compliance (IMO)', status: 'COMPLIANT', color: '#4AE89A' },
                  { label: 'ABF Regulatory Compliance', status: 'AUTHORIZED', color: '#4AE89A' }
                ].map((item) => (
                  <div key={item.label} style={{ borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '24px' }}>
                    <div style={{ 
                      fontFamily: 'var(--font-heading)', 
                      fontSize: '14px', 
                      fontWeight: 700, 
                      marginBottom: '10px',
                      letterSpacing: '-0.01em'
                    }}>
                      {item.label}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <div style={{ 
                          width: '6px', 
                          height: '6px', 
                          borderRadius: '50%', 
                          background: item.color,
                          boxShadow: `0 0 10px ${item.color}` 
                        }} />
                        <span style={{ 
                          fontFamily: 'var(--font-heading)', 
                          fontSize: '10px', 
                          fontWeight: 700, 
                          letterSpacing: '0.12em',
                          color: 'rgba(255,255,255,0.6)'
                        }}>
                          {item.status}
                        </span>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ 
                marginTop: '48px', 
                background: 'rgba(255,255,255,0.03)', 
                borderRadius: '16px', 
                padding: '32px',
                border: '1px solid rgba(255,255,255,0.05)'
              }}>
                <p style={{ 
                  fontFamily: 'var(--font-body)', 
                  fontSize: '13px', 
                  color: 'rgba(255,255,255,0.5)', 
                  lineHeight: 1.7, 
                  margin: 0 
                }}>
                  All certifications are audited annually to ensure continued adherence to international logistics and safety benchmarks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
