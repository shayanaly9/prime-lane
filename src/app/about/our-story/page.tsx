"use client";
import Image from "next/image";
import Link from "next/link";

export default function OurStory() {
  return (
    <main className="w-full flex flex-col items-center" style={{ background: '#fff' }}>
      {/* HERO BANNER */}
      <section 
        style={{ 
          width: '100%', 
          padding: '160px 40px 120px', 
          textAlign: 'center',
          backgroundImage: `linear-gradient(135deg, rgba(11,18,32,0.96) 0%, rgba(11,18,32,0.88) 50%, rgba(11,18,32,0.45) 100%), url('/Our-story.webp')`,
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
              OUR JOURNEY
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
            Built on Experience,<br />
            <span style={{ color: 'var(--c-teal-light)' }}>Driven by Precision</span>
          </h1>
          
          <p style={{ 
            fontFamily: 'var(--font-body)', 
            fontSize: '18px', 
            color: 'rgba(255,255,255,0.65)', 
            maxWidth: '640px', 
            lineHeight: 1.8, 
            margin: '0 auto' 
          }}>
            Founded by a supply chain professional with over 8 years of dedicated experience in the freight and logistics industry.
          </p>
        </div>
      </section>

      {/* STORY SECTION */}
      <section style={{ width: '100%', background: 'white', padding: '120px 40px', position: 'relative' }}>
        {/* Subtle noise texture */}
        <div style={{ position: 'absolute', inset: 0, opacity: 0.015, pointerEvents: 'none', backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />

        <div style={{ maxWidth: '860px', margin: '0 auto', position: 'relative' }}>
          <div style={{ 
            fontFamily: 'var(--font-heading)', 
            fontSize: '11px', 
            letterSpacing: '0.14em', 
            textTransform: 'uppercase', 
            color: 'var(--c-teal)', 
            fontWeight: 700, 
            marginBottom: '12px' 
          }}>
            The Founder
          </div>
          
          <h2 style={{ 
            fontFamily: 'var(--font-heading)', 
            fontWeight: 800, 
            fontSize: '48px', 
            color: 'var(--c-ink)', 
            margin: '0 0 8px', 
            letterSpacing: '-0.02em',
            lineHeight: 1.1
          }}>
            Toseef Ahmed
          </h2>
          <div style={{ 
            fontFamily: 'var(--font-body)', 
            fontSize: '14px', 
            color: 'var(--c-teal)', 
            fontWeight: 700, 
            marginBottom: '48px',
            letterSpacing: '0.05em',
            textTransform: 'uppercase'
          }}>
            Founder & Director — PrimeLane Logistics
          </div>

          <div style={{ 
            fontFamily: 'var(--font-body)', 
            fontSize: '16px', 
            color: 'var(--c-ink-mid)', 
            lineHeight: 1.9 
          }}>
            <p style={{ marginBottom: '32px' }}>
              Primelane Logistics was founded by Toseef Ahmed, a supply chain professional with over 8 years of dedicated experience in the freight and logistics industry. Recognizing a distinct need for specialized, highly reliable transport on key international routes, he built Primelane to bridge the gap between complex global shipping requirements and seamless customer experiences.
            </p>
            <p style={{ marginBottom: '64px' }}>
              Drawing from his deep understanding of the freight sector, Toseef directed Primelane&apos;s primary focus toward a highly specialized niche: the safe and efficient export of automotive vehicles from Australia to Dubai. Today, Primelane Logistics stands as a trusted partner for businesses and individuals alike, leveraging years of hands-on industry knowledge to navigate the intricacies of international customs, port logistics, and secure vehicle handling.
            </p>
          </div>

          {/* INFO CARD GRID - Premium Style */}
          <div style={{ 
            background: '#F9FAFB', 
            border: '1px solid #E5E7EB', 
            borderRadius: '24px', 
            padding: '48px', 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: '48px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.02)'
          }}>
            <div>
              <div style={{ 
                fontFamily: 'var(--font-heading)', 
                fontSize: '11px', 
                letterSpacing: '0.12em', 
                textTransform: 'uppercase', 
                color: 'var(--c-teal)', 
                fontWeight: 700, 
                marginBottom: '12px' 
              }}>
                Experience
              </div>
              <div style={{ 
                fontFamily: 'var(--font-heading)', 
                fontWeight: 800, 
                fontSize: '24px', 
                color: 'var(--c-ink)', 
                marginBottom: '4px' 
              }}>
                8+ Years
              </div>
              <div style={{ 
                fontFamily: 'var(--font-body)', 
                fontSize: '13px', 
                color: 'var(--c-ink-soft)' 
              }}>
                Supply chain & freight
              </div>
            </div>
            
            <div style={{ borderLeft: '1px solid #E5E7EB', paddingLeft: '48px' }} className="md:border-l">
              <div style={{ 
                fontFamily: 'var(--font-heading)', 
                fontSize: '11px', 
                letterSpacing: '0.12em', 
                textTransform: 'uppercase', 
                color: 'var(--c-teal)', 
                fontWeight: 700, 
                marginBottom: '12px' 
              }}>
                Speciality
              </div>
              <div style={{ 
                fontFamily: 'var(--font-heading)', 
                fontWeight: 800, 
                fontSize: '24px', 
                color: 'var(--c-ink)', 
                marginBottom: '4px' 
              }}>
                Australia → Dubai
              </div>
              <div style={{ 
                fontFamily: 'var(--font-body)', 
                fontSize: '13px', 
                color: 'var(--c-ink-soft)' 
              }}>
                Automotive & freight
              </div>
            </div>

            <div style={{ borderLeft: '1px solid #E5E7EB', paddingLeft: '48px' }} className="md:border-l">
              <div style={{ 
                fontFamily: 'var(--font-heading)', 
                fontSize: '11px', 
                letterSpacing: '0.12em', 
                textTransform: 'uppercase', 
                color: 'var(--c-teal)', 
                fontWeight: 700, 
                marginBottom: '12px' 
              }}>
                Focus
              </div>
              <div style={{ 
                fontFamily: 'var(--font-heading)', 
                fontWeight: 800, 
                fontSize: '24px', 
                color: 'var(--c-ink)', 
                marginBottom: '4px' 
              }}>
                Vehicle Logistics
              </div>
              <div style={{ 
                fontFamily: 'var(--font-body)', 
                fontSize: '13px', 
                color: 'var(--c-ink-soft)' 
              }}>
                FCL · LCL · DG Certified
              </div>
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
            Ready to Work With Us?
          </h2>
          <p style={{ 
            fontFamily: 'var(--font-body)', 
            fontSize: '18px', 
            color: 'rgba(255,255,255,0.6)', 
            maxWidth: '600px', 
            margin: '0 auto 48px', 
            lineHeight: 1.8 
          }}>
            Get in touch with our team today and let us handle your freight with the expertise and care it deserves.
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
              GET IN TOUCH
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}
