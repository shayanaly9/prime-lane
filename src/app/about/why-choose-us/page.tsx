"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function WhyChooseUs() {
  const [hoveredButton, setHoveredButton] = useState<number | null>(null);

  const advantages = [
    {
      title: "Unmatched Route Expertise",
      text: "We don't just ship anywhere; we specialize. Our deep, focused expertise on the Australia-to-Dubai automotive route means we anticipate challenges before they arise, ensuring smooth customs clearance and secure transit."
    },
    {
      title: "Tailored Container Solutions",
      text: "We offer flexible FCL (Full Container Load) and LCL (Less than Container Load) options. Whether you are shipping a single luxury vehicle or a commercial fleet, we scale our services to match your exact volume and budget."
    },
    {
      title: "Industry-Leading Experience",
      text: "Backed by our founder's 8+ years of supply chain mastery, our entire operation is built on proven, efficient, and cost-effective logistical strategies."
    },
    {
      title: "Safety & Compliance First",
      text: "We handle complex logistics with ease. Our capability to legally and safely transport Dangerous Goods (DG) demonstrates our commitment to the highest tiers of safety, rigorous training, and strict industry compliance."
    }
  ];

  return (
    <main className="w-full flex flex-col items-center" style={{ background: '#fff' }}>
      {/* HERO BANNER */}
      <section 
        style={{ 
          width: '100%', 
          padding: '160px 40px 120px', 
          textAlign: 'center',
          backgroundImage: `linear-gradient(135deg, rgba(11,18,32,0.96) 0%, rgba(11,18,32,0.88) 50%, rgba(11,18,32,0.45) 100%), url('/why-primlane.jpeg')`,
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
        <div style={{ position: 'absolute', bottom: '-10%', left: '-5%', width: '40%', height: '50%', background: 'radial-gradient(circle, rgba(74, 232, 154, 0.1) 0%, transparent 70%)', filter: 'blur(80px)', pointerEvents: 'none' }} />

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
              WHY CHOOSE US
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
            Streamlining<br />
            <span style={{ color: 'var(--c-teal-light)' }}>Every Mile</span>
          </h1>
          
          <p style={{ 
            fontFamily: 'var(--font-body)', 
            fontSize: '18px', 
            color: 'rgba(255,255,255,0.65)', 
            maxWidth: '640px', 
            lineHeight: 1.8, 
            margin: '0 auto' 
          }}>
            When you partner with PrimeLane Logistics, you are choosing a team that understands your cargo isn&apos;t just freight—it&apos;s your business, your asset, and your priority.
          </p>
        </div>
      </section>

      {/* CORE ADVANTAGES SECTION */}
      <section className="w-full px-5 py-24 md:py-32 md:px-10" style={{ background: 'white', position: 'relative' }}>
        {/* Subtle noise texture */}
        <div style={{ position: 'absolute', inset: 0, opacity: 0.015, pointerEvents: 'none', backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />

        <div className="mx-auto max-w-[1200px] flex flex-col lg:flex-row gap-[80px] items-start relative">
          {/* Left Column - Detailed Content */}
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
              Core Advantages
            </div>
            <h2 style={{ 
              fontFamily: 'var(--font-heading)', 
              fontWeight: 800, 
              fontSize: 'clamp(28px, 4vw, 42px)', 
              color: 'var(--c-ink)', 
              lineHeight: 1.1, 
              marginBottom: '64px', 
              letterSpacing: '-0.02em' 
            }}>
              Strategic freight management built on precision
            </h2>
            
            <div className="flex flex-col gap-16">
              {advantages.map((advantage, i) => (
                <div key={i}>
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
                    <div style={{ width: '32px', height: '1px', background: 'var(--c-teal)' }} />
                    {advantage.title}
                  </h3>
                  <p style={{ 
                    fontFamily: 'var(--font-body)', 
                    fontSize: '16px', 
                    color: 'var(--c-ink-mid)', 
                    lineHeight: 1.9,
                    paddingLeft: '48px'
                  }}>
                    {advantage.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Premium Info Card */}
          <div className="w-full lg:w-[40%] lg:sticky lg:top-[120px]">
            <div style={{ 
              background: '#F9FAFB', 
              borderRadius: '24px', 
              padding: '48px', 
              border: '1px solid #E5E7EB',
              boxShadow: '0 4px 12px rgba(0,0,0,0.02)'
            }}>
              <div style={{ marginBottom: '40px' }}>
                <div style={{ 
                  fontFamily: 'var(--font-heading)', 
                  fontSize: '11px', 
                  letterSpacing: '0.12em', 
                  textTransform: 'uppercase', 
                  color: 'var(--c-teal)', 
                  fontWeight: 700, 
                  marginBottom: '12px' 
                }}>
                  Quick Breakdown
                </div>
                <div style={{ 
                  fontFamily: 'var(--font-heading)', 
                  fontWeight: 800, 
                  fontSize: '22px', 
                  color: 'var(--c-ink)', 
                  marginBottom: '8px',
                  letterSpacing: '-0.01em'
                }}>
                  Australia &rarr; Dubai Specialist
                </div>
                <div style={{ 
                  fontFamily: 'var(--font-body)', 
                  fontSize: '14px', 
                  color: 'var(--c-ink-soft)' 
                }}>
                  Optimized for automotive & industrial freight
                </div>
              </div>
              
              <div style={{ height: '1px', background: '#E5E7EB', marginBottom: '40px' }} />
              
              <div className="flex flex-col gap-8">
                {[
                  ['Specialized Route', 'AU to Jebel Ali, UAE'],
                  ['Freight Types', 'FCL, LCL, Air, Break-bulk'],
                  ['Experience', '8+ Years Industry Mastery'],
                  ['Safety', 'Fully DG Certified (Class 2-9)']
                ].map(([label, value]) => (
                  <div key={label}>
                    <div style={{ 
                      fontFamily: 'var(--font-heading)', 
                      fontSize: '10px', 
                      fontWeight: 700, 
                      color: 'var(--c-teal)', 
                      textTransform: 'uppercase', 
                      letterSpacing: '0.1em', 
                      marginBottom: '6px' 
                    }}>
                      {label}
                    </div>
                    <div style={{ 
                      fontFamily: 'var(--font-body)', 
                      fontSize: '16px', 
                      fontWeight: 600, 
                      color: 'var(--c-ink)' 
                    }}>
                      {value}
                    </div>
                  </div>
                ))}
              </div>

              <Link 
                href="/contact"
                style={{ textDecoration: 'none' }}
              >
                <button
                  onMouseEnter={() => setHoveredButton(1)}
                  onMouseLeave={() => setHoveredButton(null)}
                  style={{ 
                    marginTop: '48px', 
                    display: 'block', 
                    width: '100%', 
                    background: 'var(--c-ink)', 
                    color: 'white', 
                    padding: '18px', 
                    borderRadius: '12px', 
                    fontFamily: 'var(--font-heading)', 
                    fontWeight: 700, 
                    fontSize: '14px', 
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s cubic-bezier(0.32,0.72,0,1)',
                    transform: hoveredButton === 1 ? 'translateY(-2px)' : 'translateY(0)',
                    boxShadow: hoveredButton === 1 ? '0 12px 32px rgba(11,18,32,0.2)' : 'none'
                  }}
                >
                  GET A PERSONAL QUOTE
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA BAND */}
      <section style={{ 
        width: '100%', 
        background: 'var(--c-ink)', 
        padding: '120px 40px', 
        textAlign: 'center', 
        color: 'white',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 50%, rgba(74, 232, 154, 0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />
        
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ 
            fontFamily: 'var(--font-heading)', 
            fontWeight: 800, 
            fontSize: 'clamp(32px, 5vw, 48px)', 
            marginBottom: '24px', 
            letterSpacing: '-0.03em' 
          }}>
            Experience the PrimeLane Difference
          </h2>
          <p style={{ 
            fontFamily: 'var(--font-body)', 
            fontSize: '18px', 
            color: 'rgba(255,255,255,0.6)', 
            maxWidth: '600px', 
            margin: '0 auto 48px', 
            lineHeight: 1.8 
          }}>
            Let our specialist team manage your next shipment with the precision and reliability that defines our brand.
          </p>
          <Link href="/contact" style={{ textDecoration: 'none' }}>
            <button 
              style={{ 
                background: 'var(--c-teal)', 
                color: 'white', 
                border: 'none', 
                padding: '18px 48px', 
                borderRadius: '999px', 
                fontFamily: 'var(--font-heading)', 
                fontWeight: 800, 
                fontSize: '14px', 
                textTransform: 'uppercase', 
                cursor: 'pointer', 
                transition: 'all 0.3s cubic-bezier(0.32,0.72,0,1)',
                boxShadow: '0 8px 24px rgba(15, 110, 86, 0.2)'
              }}
              className="hover:translate-y-[-2px] hover:shadow-[0_12px_32px_rgba(15,110,86,0.4)]"
            >
              START YOUR JOURNEY
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}
