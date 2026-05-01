"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ContactEnquiries() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <main className="w-full flex flex-col items-center" style={{ background: '#fff' }}>
      {/* HERO BANNER - Cinematic */}
      <section 
        style={{ 
          width: '100%', 
          padding: '160px 40px 120px', 
          textAlign: 'center',
          backgroundImage: `linear-gradient(135deg, rgba(11,18,32,0.96) 0%, rgba(11,18,32,0.88) 50%, rgba(11,18,32,0.45) 100%), url('/Contacts.jpeg')`,
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
              CONTACT & ENQUIRIES
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
            Get in Touch<br />
            <span style={{ color: 'var(--c-teal-light)' }}>With Our Experts</span>
          </h1>
          
          <p style={{ 
            fontFamily: 'var(--font-body)', 
            fontSize: '18px', 
            color: 'rgba(255,255,255,0.65)', 
            maxWidth: '600px', 
            lineHeight: 1.8, 
            margin: '0 auto' 
          }}>
            Have a specific question or ready to book your next shipment? Our team is ready to assist you with tailored logistics solutions.
          </p>
        </div>
      </section>

      {/* CONTACT DETAILS SECTION */}
      <section style={{ width: '100%', background: 'white', padding: '120px 40px', position: 'relative' }}>
        {/* Subtle noise texture */}
        <div style={{ position: 'absolute', inset: 0, opacity: 0.015, pointerEvents: 'none', backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />

        <div style={{ maxWidth: '1000px', margin: '0 auto', position: 'relative' }}>
          <div style={{ marginBottom: '64px' }}>
            <div style={{ 
              fontFamily: 'var(--font-heading)', 
              fontSize: '11px', 
              letterSpacing: '0.14em', 
              textTransform: 'uppercase', 
              color: 'var(--c-teal)', 
              fontWeight: 700, 
              marginBottom: '16px' 
            }}>
              Reach Us
            </div>
            <h2 style={{ 
              fontFamily: 'var(--font-heading)', 
              fontWeight: 800, 
              fontSize: 'clamp(28px, 4vw, 42px)', 
              color: 'var(--c-ink)', 
              marginBottom: '12px',
              letterSpacing: '-0.02em',
              lineHeight: 1.1
            }}>
              Contact Information
            </h2>
            <p style={{ 
              fontFamily: 'var(--font-body)', 
              fontSize: '16px', 
              color: 'var(--c-ink-mid)', 
              marginBottom: '48px',
              lineHeight: 1.8
            }}>
              For all tracking-related queries, please include your cargo details in the subject line for a faster response.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-[100px]">
            {/* Card 1 — Email */}
            <div 
              onMouseEnter={() => setHoveredCard(1)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{ 
                background: '#F9FAFB', 
                borderRadius: '20px', 
                padding: '48px 32px', 
                border: hoveredCard === 1 ? '1px solid var(--c-teal-light)' : '1px solid #E5E7EB', 
                borderTop: hoveredCard === 1 ? '4px solid var(--c-teal)' : '1px solid #E5E7EB', 
                textAlign: 'center', 
                transition: 'all 0.4s cubic-bezier(0.32,0.72,0,1)',
                transform: hoveredCard === 1 ? 'translateY(-8px)' : 'translateY(0)',
                boxShadow: hoveredCard === 1 ? '0 24px 48px rgba(11,18,32,0.08)' : '0 4px 12px rgba(11,18,32,0.02)'
              }}
            >
              <div style={{ 
                fontFamily: 'var(--font-heading)', 
                fontWeight: 700, 
                fontSize: '10px', 
                letterSpacing: '0.12em', 
                textTransform: 'uppercase', 
                color: 'var(--c-teal)', 
                marginBottom: '16px' 
              }}>
                Email
              </div>
              <h3 style={{ 
                fontFamily: 'var(--font-heading)', 
                fontWeight: 800, 
                fontSize: '18px', 
                color: 'var(--c-ink)', 
                marginBottom: '16px',
                letterSpacing: '-0.01em'
              }}>
                Send Us a Message
              </h3>
              <a href="mailto:contact@primelanelogistics.com.au" style={{ color: 'var(--c-teal)', fontWeight: 800, fontSize: '14px', textDecoration: 'none', borderBottom: '2px solid rgba(15,110,86,0.1)', paddingBottom: '2px' }}>contact@primelanelogistics.com.au</a>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: 'var(--c-ink-soft)', marginTop: '16px' }}>We respond within 24h</div>
            </div>

            {/* Card 2 — Phone */}
            <div 
              onMouseEnter={() => setHoveredCard(2)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{ 
                background: '#F9FAFB', 
                borderRadius: '20px', 
                padding: '48px 32px', 
                border: hoveredCard === 2 ? '1px solid var(--c-teal-light)' : '1px solid #E5E7EB', 
                borderTop: hoveredCard === 2 ? '4px solid var(--c-teal)' : '1px solid #E5E7EB', 
                textAlign: 'center', 
                transition: 'all 0.4s cubic-bezier(0.32,0.72,0,1)',
                transform: hoveredCard === 2 ? 'translateY(-8px)' : 'translateY(0)',
                boxShadow: hoveredCard === 2 ? '0 24px 48_px rgba(11,18,32,0.08)' : '0 4px 12px rgba(11,18,32,0.02)'
              }}
            >
              <div style={{ 
                fontFamily: 'var(--font-heading)', 
                fontWeight: 700, 
                fontSize: '10px', 
                letterSpacing: '0.12em', 
                textTransform: 'uppercase', 
                color: 'var(--c-teal)', 
                marginBottom: '16px' 
              }}>
                Phone
              </div>
              <h3 style={{ 
                fontFamily: 'var(--font-heading)', 
                fontWeight: 800, 
                fontSize: '18px', 
                color: 'var(--c-ink)', 
                marginBottom: '16px',
                letterSpacing: '-0.01em'
              }}>
                Call Our Team
              </h3>
              <a href="tel:+61421821220" style={{ color: 'var(--c-teal)', fontWeight: 800, fontSize: '18px', textDecoration: 'none' }}>+61 421 821 220</a>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: 'var(--c-ink-soft)', marginTop: '16px' }}>Available Mon–Fri, 9AM–5PM</div>
            </div>

            {/* Card 3 — Hours */}
            <div 
              onMouseEnter={() => setHoveredCard(3)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{ 
                background: '#F9FAFB', 
                borderRadius: '20px', 
                padding: '48px 32px', 
                border: hoveredCard === 3 ? '1px solid var(--c-teal-light)' : '1px solid #E5E7EB', 
                borderTop: hoveredCard === 3 ? '4px solid var(--c-teal)' : '1px solid #E5E7EB', 
                textAlign: 'center', 
                transition: 'all 0.4s cubic-bezier(0.32,0.72,0,1)',
                transform: hoveredCard === 3 ? 'translateY(-8px)' : 'translateY(0)',
                boxShadow: hoveredCard === 3 ? '0 24px 48px rgba(11,18,32,0.08)' : '0 4px 12px rgba(11,18,32,0.02)'
              }}
            >
              <div style={{ 
                fontFamily: 'var(--font-heading)', 
                fontWeight: 700, 
                fontSize: '10px', 
                letterSpacing: '0.12em', 
                textTransform: 'uppercase', 
                color: 'var(--c-teal)', 
                marginBottom: '16px' 
              }}>
                Hours
              </div>
              <h3 style={{ 
                fontFamily: 'var(--font-heading)', 
                fontWeight: 800, 
                fontSize: '18px', 
                color: 'var(--c-ink)', 
                marginBottom: '16px',
                letterSpacing: '-0.01em'
              }}>
                Office Hours
              </h3>
              <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '18px', color: 'var(--c-ink)' }}>Monday – Friday</div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--c-ink-mid)', marginTop: '8px' }}>9:00 AM – 5:00 PM AEST</div>
            </div>
          </div>

          {/* INFO BAND */}
          <div style={{ 
            background: '#F9FAFB', 
            borderRadius: '24px', 
            padding: '40px', 
            border: '1px solid #E5E7EB', 
            borderLeft: '4px solid var(--c-teal)',
            boxShadow: '0 4px 12px rgba(0,0,0,0.02)'
          }}>
            <h3 style={{ 
              fontFamily: 'var(--font-heading)', 
              fontWeight: 800, 
              fontSize: '18px', 
              color: 'var(--c-ink)', 
              marginBottom: '12px',
              letterSpacing: '-0.01em' 
            }}>
              Pro Tip — Faster Response
            </h3>
            <p style={{ 
              fontFamily: 'var(--font-body)', 
              fontSize: '15px', 
              color: 'var(--c-ink-mid)', 
              lineHeight: 1.8,
              maxWidth: '800px'
            }}>
              When emailing us, include your cargo details in the subject line (e.g. &apos;2x vehicles AU→Dubai FCL enquiry&apos;). This helps our team route your enquiry to the right person immediately and speeds up your response time significantly.
            </p>
          </div>
        </div>
      </section>

      {/* CTA BAND */}
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
            Ready to Book Your Shipment?
          </h2>
          <p style={{ 
            fontFamily: 'var(--font-body)', 
            fontSize: '18px', 
            color: 'rgba(255,255,255,0.6)', 
            maxWidth: '480px', 
            margin: '0 auto 48px', 
            lineHeight: 1.8 
          }}>
            Don&apos;t wait — reach out today and our team will have a personalised quote ready for you within one business day.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
            <Link href="mailto:contact@primelanelogistics.com.au" style={{ textDecoration: 'none' }}>
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
                EMAIL US NOW
              </button>
            </Link>
            <a href="tel:+61421821220" style={{ textDecoration: 'none' }}>
              <button 
                style={{ 
                  background: 'transparent', 
                  color: 'white', 
                  border: '1.5px solid rgba(255,255,255,0.25)', 
                  padding: '18px 48px', 
                  borderRadius: '999px', 
                  fontFamily: 'var(--font-heading)', 
                  fontWeight: 700, 
                  fontSize: '14px', 
                  textTransform: 'uppercase', 
                  cursor: 'pointer', 
                  transition: 'all 0.2s'
                }}
                className="hover:bg-white/10"
              >
                +61 421 821 220
              </button>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
