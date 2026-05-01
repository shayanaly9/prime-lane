"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Contact() {
  const [hoveredButton, setHoveredButton] = useState<number | null>(null);

  return (
    <main className="w-full flex flex-col items-center" style={{ background: '#fff' }}>
      {/* HERO BANNER - Cinematic */}
      <section
        className="w-full flex flex-col items-center text-center"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(11,18,32,0.96) 0%, rgba(11,18,32,0.88) 50%, rgba(11,18,32,0.45) 100%), url('/Contacts.webp')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '180px 40px 140px',
          minHeight: '80dvh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Ambient glow */}
        <div style={{ position: 'absolute', bottom: '-10%', right: '-5%', width: '40%', height: '50%', background: 'radial-gradient(circle, rgba(74, 232, 154, 0.1) 0%, transparent 70%)', filter: 'blur(80px)', pointerEvents: 'none' }} />

        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ 
            fontFamily: 'var(--font-heading)', 
            fontWeight: 700, 
            fontSize: '11px', 
            letterSpacing: '0.2em', 
            textTransform: 'uppercase', 
            color: 'var(--c-teal-light)', 
            marginBottom: '32px',
            opacity: 0.9 
          }}>
            Connect With Us
          </div>
          
          <h1 style={{ 
            fontFamily: 'var(--font-heading)', 
            fontWeight: 800, 
            fontSize: 'clamp(46px, 8vw, 84px)', 
            color: 'white', 
            marginBottom: '28px', 
            lineHeight: 1.0, 
            letterSpacing: '-0.04em', 
            textWrap: 'balance' 
          }}>
            Ready for a Quote
          </h1>
          
          <p style={{ 
            fontFamily: 'var(--font-body)', 
            fontSize: '19px', 
            color: 'rgba(255,255,255,0.65)', 
            maxWidth: '600px', 
            margin: '0 auto 56px', 
            lineHeight: 1.8 
          }}>
            Tell us about your shipment and we&apos;ll prepare a detailed quote within one business day. No automation, no delays.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <div style={{ 
              background: 'rgba(255,255,255,0.05)', 
              backdropFilter: 'blur(10px)', 
              border: '1px solid rgba(255,255,255,0.1)', 
              borderRadius: '999px', 
              padding: '10px 24px', 
              fontFamily: 'var(--font-heading)', 
              fontSize: '12px', 
              color: 'rgba(255,255,255,0.8)', 
              fontWeight: 700,
              letterSpacing: '0.05em'
            }}>
              Response within 24h
            </div>
            <div style={{ 
              background: 'rgba(255,255,255,0.05)', 
              backdropFilter: 'blur(10px)', 
              border: '1px solid rgba(255,255,255,0.1)', 
              borderRadius: '999px', 
              padding: '10px 24px', 
              fontFamily: 'var(--font-heading)', 
              fontSize: '12px', 
              color: 'rgba(255,255,255,0.8)', 
              fontWeight: 700,
              letterSpacing: '0.05em'
            }}>
              Direct Desk Access
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT CHANNELS SECTION */}
      <section className="w-full" style={{ background: 'white', padding: '120px 40px', position: 'relative' }}>
        {/* Subtle noise texture */}
        <div style={{ position: 'absolute', inset: 0, opacity: 0.015, pointerEvents: 'none', backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />

        <div className="mx-auto flex flex-col lg:flex-row gap-20" style={{ maxWidth: '1200px', position: 'relative' }}>
          
          {/* LEFT COLUMN: Contact Options */}
          <div style={{ width: '100%' }} className="lg:w-[55%]">
            <div style={{ 
              fontFamily: 'var(--font-heading)', 
              fontSize: '11px', 
              letterSpacing: '0.14em', 
              textTransform: 'uppercase', 
              color: 'var(--c-teal)', 
              fontWeight: 700, 
              marginBottom: '16px' 
            }}>
              Contact Channels
            </div>
            <h2 style={{ 
              fontFamily: 'var(--font-heading)', 
              fontWeight: 800, 
              fontSize: 'clamp(32px, 5vw, 52px)', 
              color: 'var(--c-ink)', 
              marginBottom: '32px', 
              lineHeight: 1.1, 
              letterSpacing: '-0.04em' 
            }}>
              Direct access to Australia&apos;s logistics desk.
            </h2>
            <p style={{ 
              fontFamily: 'var(--font-body)', 
              fontSize: '18px', 
              color: 'var(--c-ink-mid)', 
              marginBottom: '64px', 
              lineHeight: 1.8, 
              maxWidth: '480px' 
            }}>
              No automated queues. Your enquiry goes straight to a logistics coordinator for a manual, expert assessment.
            </p>

            <div className="flex flex-col gap-8">
              {/* Email Card */}
              <div 
                style={{ 
                  background: '#F9FAFB', 
                  borderRadius: '24px', 
                  padding: '48px', 
                  border: '1px solid #E5E7EB',
                  display: 'flex',
                  gap: '32px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.02)',
                  transition: 'all 0.4s cubic-bezier(0.32,0.72,0,1)'
                }}
                className="hover:translate-y-[-4px] hover:shadow-[0_24px_48px_rgba(11,18,32,0.08)] hover:border-teal-200"
              >
                <div style={{ 
                  width: '64px', 
                  height: '64px', 
                  background: 'var(--c-ink)', 
                  borderRadius: '16px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  flexShrink: 0 
                }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '20px', color: 'var(--c-ink)', marginBottom: '6px', letterSpacing: '-0.01em' }}>Email Support</div>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--c-ink-soft)', marginBottom: '18px', lineHeight: 1.6 }}>Quotes, documentation and general freight booking.</div>
                  <a href="mailto:contact@primelanelogistics.com.au" style={{ color: 'var(--c-teal)', fontWeight: 800, fontFamily: 'var(--font-heading)', fontSize: '15px', textDecoration: 'none', borderBottom: '2px solid rgba(15,110,86,0.1)', paddingBottom: '2px' }} className="hover:border-current">contact@primelanelogistics.com.au</a>
                </div>
              </div>

              {/* Phone Card */}
              <div 
                style={{ 
                  background: '#F9FAFB', 
                  borderRadius: '24px', 
                  padding: '48px', 
                  border: '1px solid #E5E7EB',
                  display: 'flex',
                  gap: '32px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.02)',
                  transition: 'all 0.4s cubic-bezier(0.32,0.72,0,1)'
                }}
                className="hover:translate-y-[-4px] hover:shadow-[0_24px_48px_rgba(11,18,32,0.08)] hover:border-teal-200"
              >
                <div style={{ 
                  width: '64px', 
                  height: '64px', 
                  background: 'var(--c-ink)', 
                  borderRadius: '16px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  flexShrink: 0 
                }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.38a2 2 0 0 1 1.99-2.18H6.6a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.85a16 16 0 0 0 6 6l1.27-.83a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.03z"/></svg>
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '20px', color: 'var(--c-ink)', marginBottom: '6px', letterSpacing: '-0.01em' }}>Logistics Desk</div>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--c-ink-soft)', marginBottom: '18px', lineHeight: 1.6 }}>Available Monday &ndash; Friday, 9am &ndash; 5pm AEST.</div>
                  <a href="tel:+61421821220" style={{ color: 'var(--c-teal)', fontWeight: 800, fontFamily: 'var(--font-heading)', fontSize: '15px', textDecoration: 'none', borderBottom: '2px solid rgba(15,110,86,0.1)', paddingBottom: '2px' }} className="hover:border-current">+61 421 821 220</a>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - Sticky Quote Prep */}
          <div style={{ width: '100%' }} className="lg:w-[45%] lg:sticky lg:top-[120px]">
            <div style={{ 
              background: 'white', 
              borderRadius: '24px', 
              padding: '56px 48px', 
              border: '1px solid #E5E7EB', 
              boxShadow: '0 40px 80px rgba(11,18,32,0.06)' 
            }}>
              <div style={{ 
                fontFamily: 'var(--font-heading)', 
                fontSize: '11px', 
                letterSpacing: '0.14em', 
                textTransform: 'uppercase', 
                color: 'var(--c-teal)', 
                fontWeight: 700, 
                marginBottom: '16px' 
              }}>
                Preparation Guide
              </div>
              <h3 style={{ 
                fontFamily: 'var(--font-heading)', 
                fontWeight: 800, 
                fontSize: '24px', 
                color: 'var(--c-ink)', 
                marginBottom: '40px', 
                letterSpacing: '-0.02em' 
              }}>
                Information We&apos;ll Need
              </h3>

              <div className="flex flex-col gap-10">
                {[
                  ['Cargo details', 'Type of goods, weight (kg), and dimensions'],
                  ['Origin & destination', 'Pick-up location and final delivery point'],
                  ['Timeline', 'Required pick-up date or urgency level'],
                  ['Special requirements', 'DG cargo, oversized, or temperature control']
                ].map(([label, desc]) => (
                  <div key={label} style={{ display: 'flex', gap: '20px' }}>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--c-teal)', marginTop: '8px', flexShrink: 0 }} />
                    <div>
                      <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '16px', color: 'var(--c-ink)', marginBottom: '4px' }}>{label}</div>
                      <div style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--c-ink-soft)', lineHeight: 1.7 }}>{desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <button 
                onClick={() => window.location.href = 'mailto:contact@primelanelogistics.com.au'}
                onMouseEnter={() => setHoveredButton(1)}
                onMouseLeave={() => setHoveredButton(null)}
                style={{ 
                  marginTop: '56px',
                  background: 'var(--c-teal)', 
                  color: 'white', 
                  border: 'none', 
                  width: '100%', 
                  padding: '20px', 
                  borderRadius: '12px', 
                  fontFamily: 'var(--font-heading)', 
                  fontWeight: 800, 
                  fontSize: '14px', 
                  letterSpacing: '0.06em', 
                  textTransform: 'uppercase', 
                  cursor: 'pointer', 
                  transition: 'all 0.3s cubic-bezier(0.32,0.72,0,1)',
                  transform: hoveredButton === 1 ? 'translateY(-2px)' : 'translateY(0)',
                  boxShadow: hoveredButton === 1 ? '0 12px 32px rgba(26,122,98,0.3)' : '0 4px 12px rgba(26,122,98,0.1)'
                }}
              >
                START YOUR ENQUIRY
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA BAND: CINEMATIC GLASSMORPHISM */}
      <section style={{ width: '100%', padding: '160px 40px', position: 'relative', overflow: 'hidden', background: '#0B1220' }}>
        {/* Ambient background elements */}
        <div style={{ position: 'absolute', top: '-10%', left: '-10%', width: '40%', height: '60%', background: 'radial-gradient(circle, rgba(26,122,98,0.1) 0%, transparent 70%)', filter: 'blur(80px)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-10%', right: '-10%', width: '50%', height: '70%', background: 'radial-gradient(circle, rgba(15,110,86,0.08) 0%, transparent 70%)', filter: 'blur(100px)', pointerEvents: 'none' }} />
        
        <div className="mx-auto relative z-10" style={{ maxWidth: '1000px', textAlign: 'center' }}>
          <div 
            style={{ 
              background: 'rgba(255,255,255,0.03)', 
              backdropFilter: 'blur(32px)', 
              WebkitBackdropFilter: 'blur(32px)',
              border: '1px solid rgba(255,255,255,0.08)', 
              borderRadius: '40px', 
              padding: '100px 40px',
              boxShadow: '0 40px 100px rgba(0,0,0,0.2)'
            }}
          >
            <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '12px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--c-teal-light)', marginBottom: '32px', opacity: 0.8 }}>Ready to Move</div>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 'clamp(36px, 6vw, 68px)', color: 'white', marginBottom: '32px', lineHeight: 1.0, letterSpacing: '-0.04em', textWrap: 'balance' }}>
              Your cargo, our priority.
            </h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '20px', color: 'rgba(255,255,255,0.5)', maxWidth: '600px', margin: '0 auto 64px', lineHeight: 1.8 }}>
              Experience the difference of a logistics partner that values precision as much as you do. Get your quote in 24h.
            </p>

            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <button 
                onClick={() => window.location.href = 'mailto:contact@primelanelogistics.com.au'}
                style={{ 
                  background: 'var(--c-teal)', 
                  color: 'white', 
                  border: 'none', 
                  padding: '22px 64px', 
                  borderRadius: '16px', 
                  fontFamily: 'var(--font-heading)', 
                  fontWeight: 800, 
                  fontSize: '14px', 
                  letterSpacing: '0.08em', 
                  textTransform: 'uppercase', 
                  cursor: 'pointer', 
                  transition: 'all 0.4s cubic-bezier(0.23,1,0.32,1)', 
                  minWidth: '260px',
                  boxShadow: '0 12px 30px rgba(26,122,98,0.3)'
                }}
                className="hover:scale-[1.03] hover:bg-[#15634f] hover:shadow-[0_20px_40px_rgba(26,122,98,0.4)] active:scale-[0.98]"
              >
                Send Email
              </button>
              <button 
                onClick={() => window.location.href = 'tel:+61421821220'}
                style={{ 
                  background: 'rgba(255,255,255,0.05)', 
                  color: 'white', 
                  border: '1px solid rgba(255,255,255,0.15)', 
                  padding: '22px 64px', 
                  borderRadius: '16px', 
                  fontFamily: 'var(--font-heading)', 
                  fontWeight: 800, 
                  fontSize: '14px', 
                  letterSpacing: '0.08em', 
                  textTransform: 'uppercase', 
                  cursor: 'pointer', 
                  transition: 'all 0.4s cubic-bezier(0.23,1,0.32,1)', 
                  minWidth: '260px' 
                }}
                className="hover:bg-white/10 hover:border-white/40 active:scale-[0.98]"
              >
                Call Support
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
