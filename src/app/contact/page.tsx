"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function Contact() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <main className="w-full flex flex-col items-center">
      <nav ref={navRef} className="w-full bg-white z-50 sticky top-0 px-4 md:px-10 flex justify-between items-center gap-4" style={{ borderBottom: '1px solid #e8ede9', height: '64px' }}>
        {/* Left Side */}
        <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
          <Image
            src="/Prime-lane-logo.png"
            alt="PrimeLane Logistics"
            width={110}
            height={36}
            style={{ objectFit: 'contain', width: 'auto' }}
            priority
          />
        </div>

        {/* Right Side */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Services Dropdown */}
          <div style={{ position: 'relative' }}>
            <button
              onClick={() => setOpenDropdown(openDropdown === 'services' ? null : 'services')}
              style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px', letterSpacing: '0.5px', textTransform: 'uppercase', color: '#333', padding: '8px 14px', cursor: 'pointer', borderRadius: '4px', background: 'none', border: 'none' }}
              className="hover:bg-[#f0f4f8]"
            >
              SERVICES ▾
            </button>
            {openDropdown === 'services' && (
              <div style={{ position: 'absolute', top: '100%', left: 0, background: 'white', border: '1px solid #e0e0e0', borderRadius: '8px', boxShadow: '0 8px 24px rgba(0,0,0,0.1)', minWidth: '240px', zIndex: 100, padding: '8px 0', marginTop: '4px' }}>
                <div style={{ fontFamily: 'Arial, sans-serif', fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase', color: '#999', padding: '8px 16px 4px', fontWeight: 700 }}>
                  INTERNATIONAL
                </div>
                <div className="hover:bg-[#f0f4f8] hover:text-[#0F6E56]" style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 16px', fontFamily: 'Arial, sans-serif', fontSize: '13px', color: '#333', cursor: 'pointer' }}>
                  🌐 Australia &rarr; Dubai (Primary Route)
                </div>
                <div className="hover:bg-[#f0f4f8] hover:text-[#0F6E56]" style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 16px', fontFamily: 'Arial, sans-serif', fontSize: '13px', color: '#333', cursor: 'pointer' }}>
                  🚢 International Sea Freight
                </div>
                <div className="hover:bg-[#f0f4f8] hover:text-[#0F6E56]" style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 16px', fontFamily: 'Arial, sans-serif', fontSize: '13px', color: '#333', cursor: 'pointer' }}>
                  ✈️ International Air Freight
                </div>

                <div style={{ fontFamily: 'Arial, sans-serif', fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase', color: '#999', padding: '16px 16px 4px', fontWeight: 700 }}>
                  NATIONAL (AUSTRALIA)
                </div>
                <div className="hover:bg-[#f0f4f8] hover:text-[#0F6E56]" style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 16px', fontFamily: 'Arial, sans-serif', fontSize: '13px', color: '#333', cursor: 'pointer' }}>
                  🚗 Vehicle &amp; Automotive Transport
                </div>
                <div className="hover:bg-[#f0f4f8] hover:text-[#0F6E56]" style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 16px', fontFamily: 'Arial, sans-serif', fontSize: '13px', color: '#333', cursor: 'pointer' }}>
                  ⚓ Wharf &amp; Container Cartage
                </div>
                <div className="hover:bg-[#f0f4f8] hover:text-[#0F6E56]" style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 16px', fontFamily: 'Arial, sans-serif', fontSize: '13px', color: '#333', cursor: 'pointer' }}>
                  📦 Local &amp; Industrial Freight
                </div>
                <div className="hover:bg-[#f0f4f8] hover:text-[#0F6E56]" style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 16px', fontFamily: 'Arial, sans-serif', fontSize: '13px', color: '#333', cursor: 'pointer' }}>
                  ⚠️ Dangerous Goods (DG) Transport
                </div>
              </div>
            )}
          </div>

          {/* About Dropdown */}
          <div style={{ position: 'relative' }}>
            <button
              onClick={() => setOpenDropdown(openDropdown === 'about' ? null : 'about')}
              style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px', letterSpacing: '0.5px', textTransform: 'uppercase', color: '#333', padding: '8px 14px', cursor: 'pointer', borderRadius: '4px', background: 'none', border: 'none' }}
              className="hover:bg-[#f0f4f8]"
            >
              ABOUT ▾
            </button>
            {openDropdown === 'about' && (
              <div style={{ position: 'absolute', top: '100%', left: 0, background: 'white', border: '1px solid #e0e0e0', borderRadius: '8px', boxShadow: '0 8px 24px rgba(0,0,0,0.1)', minWidth: '240px', zIndex: 100, padding: '8px 0', marginTop: '4px' }}>
                <div className="hover:bg-[#f0f4f8] hover:text-[#0F6E56]" style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 16px', fontFamily: 'Arial, sans-serif', fontSize: '13px', color: '#333', cursor: 'pointer' }}>
                  📋 Our Story
                </div>
                <div className="hover:bg-[#f0f4f8] hover:text-[#0F6E56]" style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 16px', fontFamily: 'Arial, sans-serif', fontSize: '13px', color: '#333', cursor: 'pointer' }}>
                  ✅ Why Choose PrimeLane
                </div>
                <div className="hover:bg-[#f0f4f8] hover:text-[#0F6E56]" style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 16px', fontFamily: 'Arial, sans-serif', fontSize: '13px', color: '#333', cursor: 'pointer' }}>
                  🏆 Certifications &amp; Accreditations
                </div>
              </div>
            )}
          </div>

          {/* Help Centre Dropdown */}
          <div style={{ position: 'relative' }}>
            <button
              onClick={() => setOpenDropdown(openDropdown === 'help' ? null : 'help')}
              style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px', letterSpacing: '0.5px', textTransform: 'uppercase', color: '#333', padding: '8px 14px', cursor: 'pointer', borderRadius: '4px', background: 'none', border: 'none' }}
              className="hover:bg-[#f0f4f8]"
            >
              HELP CENTRE ▾
            </button>
            {openDropdown === 'help' && (
              <div style={{ position: 'absolute', top: '100%', left: 0, background: 'white', border: '1px solid #e0e0e0', borderRadius: '8px', boxShadow: '0 8px 24px rgba(0,0,0,0.1)', minWidth: '240px', zIndex: 100, padding: '8px 0', marginTop: '4px' }}>
                <div className="hover:bg-[#f0f4f8] hover:text-[#0F6E56]" style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 16px', fontFamily: 'Arial, sans-serif', fontSize: '13px', color: '#333', cursor: 'pointer' }}>
                  ❓ Frequently Asked Questions
                </div>
                <div className="hover:bg-[#f0f4f8] hover:text-[#0F6E56]" style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 16px', fontFamily: 'Arial, sans-serif', fontSize: '13px', color: '#333', cursor: 'pointer' }}>
                  📞 Contact &amp; Enquiries
                </div>
                <div className="hover:bg-[#f0f4f8] hover:text-[#0F6E56]" style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 16px', fontFamily: 'Arial, sans-serif', fontSize: '13px', color: '#333', cursor: 'pointer' }}>
                  🗺️ Shipping Routes &amp; Transit Times
                </div>
              </div>
            )}
          </div>

          {/* CTA Button */}
          <Link 
            href="/contact"
            style={{ background: 'linear-gradient(to right, #0F6E56, #2563EB)', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '4px', fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '12px', letterSpacing: '0.5px', textTransform: 'uppercase', cursor: 'pointer', marginLeft: '8px', textDecoration: 'none', display: 'inline-block' }}>
            GET IN TOUCH
          </Link>
        </div>
      </nav>

      <section
        className="w-full flex flex-col items-center text-center"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(10,22,40,0.88) 0%, rgba(13,33,55,0.88) 50%, rgba(10,46,31,0.88) 100%), url('/Logistics.jpeg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '80px 40px'
        }}
      >
        <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase', color: '#4AE89A', marginBottom: '12px' }}>
          GET IN TOUCH
        </div>
        <h1 style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '42px', color: 'white', marginBottom: '16px' }}>
          Request a Quote or Ask a Question
        </h1>
        <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '16px', color: 'rgba(255,255,255,0.75)', maxWidth: '580px', margin: '0 auto 32px', lineHeight: 1.8 }}>
          We handle every enquiry personally. No online booking forms &mdash; just a direct conversation to make sure we understand exactly what your cargo needs.
        </p>

        <div className="flex flex-row gap-[12px] justify-center items-center flex-wrap">
          <div style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '999px', padding: '8px 20px', fontFamily: 'Arial, sans-serif', fontSize: '13px', color: 'white' }}>
            ⚡ Response within 1 business day
          </div>
          <div style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '999px', padding: '8px 20px', fontFamily: 'Arial, sans-serif', fontSize: '13px', color: 'white' }}>
            📞 Personal service guaranteed
          </div>
          <div style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '999px', padding: '8px 20px', fontFamily: 'Arial, sans-serif', fontSize: '13px', color: 'white' }}>
            🌏 Australia &amp; International
          </div>
        </div>
      </section>

      {/* MAIN CONTENT SECTION */}
      <section className="w-full" style={{ background: '#f0f4f8', padding: '64px 40px' }}>
        <div className="mx-auto flex flex-col md:flex-row gap-[48px]" style={{ maxWidth: '1200px' }}>
          
          {/* LEFT COLUMN */}
          <div style={{ width: '100%' }} className="md:w-[55%]">
            <h2 style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '24px', color: '#0a1628', marginBottom: '8px' }}>
              How to Reach Us
            </h2>
            <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '14px', color: '#555', marginBottom: '32px' }}>
              Choose the best way to get in touch. We&apos;re available during Australian business hours.
            </p>

            {/* Card 1 */}
            <div 
              className="flex gap-[16px] items-start mb-[16px] transition-all duration-200 cursor-pointer"
              style={{ background: 'white', borderRadius: '10px', padding: '24px', border: '1px solid #dce8e2' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(15,110,86,0.1)';
                e.currentTarget.style.borderColor = '#0F6E56';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = '#dce8e2';
              }}
              onClick={() => window.location.href = 'mailto:contact@primelanelogistics.com.au'}
            >
              <div style={{ width: '48px', height: '48px', background: '#E1F5EE', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <span style={{ fontSize: '20px' }}>✉️</span>
              </div>
              <div>
                <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '15px', color: '#0a1628' }}>Email Us</div>
                <div style={{ fontFamily: 'Arial, sans-serif', fontSize: '13px', color: '#666', marginTop: '2px', marginBottom: '4px' }}>For quotes, bookings, and general enquiries</div>
                <a href="mailto:contact@primelanelogistics.com.au" style={{ color: '#0F6E56', fontWeight: 700, fontFamily: 'Arial, sans-serif', fontSize: '14px', textDecoration: 'none' }}>contact@primelanelogistics.com.au</a>
                <div style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px', color: '#999', marginTop: '4px' }}>We aim to respond within 1 business day</div>
              </div>
            </div>

            {/* Card 2 */}
            <div 
              className="flex gap-[16px] items-start mb-[16px] transition-all duration-200 cursor-pointer"
              style={{ background: 'white', borderRadius: '10px', padding: '24px', border: '1px solid #dce8e2' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(15,110,86,0.1)';
                e.currentTarget.style.borderColor = '#0F6E56';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = '#dce8e2';
              }}
              onClick={() => window.location.href = 'tel:+61421821220'}
            >
              <div style={{ width: '48px', height: '48px', background: '#E1F5EE', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <span style={{ fontSize: '20px' }}>📞</span>
              </div>
              <div>
                <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '15px', color: '#0a1628' }}>Call Us</div>
                <div style={{ fontFamily: 'Arial, sans-serif', fontSize: '13px', color: '#666', marginTop: '2px', marginBottom: '4px' }}>Speak directly with our freight team</div>
                <a href="tel:+61421821220" style={{ color: '#0F6E56', fontWeight: 700, fontFamily: 'Arial, sans-serif', fontSize: '14px', textDecoration: 'none' }}>+61 421 821 220</a>
                <div style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px', color: '#999', marginTop: '4px' }}>Available during Australian business hours</div>
              </div>
            </div>

            {/* Card 3 */}
            <div 
              className="flex gap-[16px] items-start mb-[16px] transition-all duration-200 cursor-pointer"
              style={{ background: 'white', borderRadius: '10px', padding: '24px', border: '1px solid #dce8e2' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(15,110,86,0.1)';
                e.currentTarget.style.borderColor = '#0F6E56';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = '#dce8e2';
              }}
              onClick={() => window.location.href = 'https://primelanelogistics.com.au'}
            >
              <div style={{ width: '48px', height: '48px', background: '#E1F5EE', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <span style={{ fontSize: '20px' }}>🌐</span>
              </div>
              <div>
                <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '15px', color: '#0a1628' }}>Online</div>
                <div style={{ fontFamily: 'Arial, sans-serif', fontSize: '13px', color: '#666', marginTop: '2px', marginBottom: '4px' }}>Visit our website for service information</div>
                <a href="https://primelanelogistics.com.au" style={{ color: '#0F6E56', fontWeight: 700, fontFamily: 'Arial, sans-serif', fontSize: '14px', textDecoration: 'none' }}>primelanelogistics.com.au</a>
              </div>
            </div>

            {/* Info Box */}
            <div style={{ background: 'white', borderRadius: '10px', padding: '20px 24px', border: '1px solid #dce8e2', borderLeft: '3px solid #0F6E56', marginTop: '32px' }}>
              <div style={{ fontFamily: 'Arial, sans-serif', fontSize: '13px', color: '#555', lineHeight: 1.8 }}>
                <strong style={{ color: '#0a1628' }}>How our booking process works: </strong>
                Contact us with your cargo details (type, weight, dimensions, origin, destination, and preferred dates). We&apos;ll prepare a personalised quote, confirm the details with you, and handle everything from pickup to delivery.
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div style={{ width: '100%' }} className="md:w-[45%]">
            <div style={{ background: 'white', borderRadius: '12px', padding: '28px', border: '1px solid #dce8e2', boxShadow: '0 4px 16px rgba(0,0,0,0.06)' }}>
              <h2 style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '18px', color: '#0a1628', marginBottom: '24px' }}>
                What to Include in Your Enquiry
              </h2>

              {/* Items */}
              <div className="flex flex-row gap-[14px] mb-[20px]">
                <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'linear-gradient(135deg, #0F6E56, #2563EB)', color: 'white', fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '13px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>1</div>
                <div>
                  <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '14px', color: '#0a1628' }}>Cargo type &amp; description</div>
                  <div style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px', color: '#666', marginTop: '2px' }}>e.g. machinery, vehicles, chemicals, general goods</div>
                </div>
              </div>

              <div className="flex flex-row gap-[14px] mb-[20px]">
                <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'linear-gradient(135deg, #0F6E56, #2563EB)', color: 'white', fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '13px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>2</div>
                <div>
                  <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '14px', color: '#0a1628' }}>Weight &amp; dimensions (approximate)</div>
                  <div style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px', color: '#666', marginTop: '2px' }}>Total weight in kg/t, CBM or number of pallets</div>
                </div>
              </div>

              <div className="flex flex-row gap-[14px] mb-[20px]">
                <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'linear-gradient(135deg, #0F6E56, #2563EB)', color: 'white', fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '13px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>3</div>
                <div>
                  <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '14px', color: '#0a1628' }}>Origin &amp; destination</div>
                  <div style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px', color: '#666', marginTop: '2px' }}>Full address or port/city</div>
                </div>
              </div>

              <div className="flex flex-row gap-[14px] mb-[20px]">
                <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'linear-gradient(135deg, #0F6E56, #2563EB)', color: 'white', fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '13px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>4</div>
                <div>
                  <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '14px', color: '#0a1628' }}>Preferred timeline</div>
                  <div style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px', color: '#666', marginTop: '2px' }}>Pickup date or urgency level</div>
                </div>
              </div>

              <div className="flex flex-row gap-[14px] mb-[20px]">
                <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'linear-gradient(135deg, #0F6E56, #2563EB)', color: 'white', fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '13px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>5</div>
                <div>
                  <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '14px', color: '#0a1628' }}>Any special requirements</div>
                  <div style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px', color: '#666', marginTop: '2px' }}>Temperature control, DG class, oversized, etc.</div>
                </div>
              </div>

              <button 
                onClick={() => window.location.href = 'mailto:contact@primelanelogistics.com.au'}
                style={{ background: 'linear-gradient(to right, #2563EB, #16a34a)', color: 'white', border: 'none', width: '100%', padding: '14px', borderRadius: '8px', fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '13px', letterSpacing: '1px', textTransform: 'uppercase', cursor: 'pointer', marginTop: '8px' }}
              >
                ✉ SEND US AN EMAIL &rarr;
              </button>

              <div style={{ borderTop: '1px solid #f0f0f0', margin: '16px 0' }}></div>

              <div style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px', color: '#888', textAlign: 'center', marginBottom: '8px' }}>or call us directly</div>
              <div style={{ textAlign: 'center' }}>
                <a href="tel:+61421821220" style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '16px', color: '#0F6E56', textDecoration: 'none' }}>+61 421 821 220</a>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA BAND */}
      <section style={{ width: '100%', background: 'linear-gradient(135deg, #0a1628, #0a2e1f)', padding: '64px 40px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '32px', color: 'white', marginBottom: '12px' }}>Ready to Get Started?</h2>
        <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '15px', color: 'rgba(255,255,255,0.75)', maxWidth: '520px', margin: '0 auto 32px', lineHeight: 1.8 }}>
          Don&apos;t wait &mdash; every day counts when it comes to freight planning. Reach out now and we&apos;ll have a quote ready for you within one business day.
        </p>

        <div className="flex flex-col sm:flex-row gap-[16px] justify-center items-center">
          <button 
            onClick={() => window.location.href = 'mailto:contact@primelanelogistics.com.au'}
            style={{ background: 'linear-gradient(to right, #0F6E56, #2563EB)', color: 'white', border: 'none', padding: '14px 32px', borderRadius: '6px', fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '13px', letterSpacing: '0.5px', cursor: 'pointer' }}
          >
            ✉ EMAIL US NOW
          </button>
          <button 
            onClick={() => window.location.href = 'tel:+61421821220'}
            style={{ background: 'transparent', color: 'white', border: '1.5px solid rgba(255,255,255,0.4)', padding: '14px 32px', borderRadius: '6px', fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '13px', letterSpacing: '0.5px', cursor: 'pointer' }}
          >
            📞 CALL +61 421 821 220
          </button>
        </div>
      </section>

      <footer className="w-full" style={{ background: '#050b14', padding: '64px 20px 40px', color: 'white' }}>
        <div className="max-w-[1200px] mx-auto flex flex-col items-center text-center">
          <Image
            src="/logo-2.png"
            alt="PrimeLane Logistics"
            width={140}
            height={46}
            style={{ objectFit: 'contain', marginBottom: '24px', opacity: 0.9, width: 'auto' }}
          />
          <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '14px', color: 'rgba(255, 255, 255, 0.5)', maxWidth: '400px', lineHeight: 1.6, marginBottom: '32px' }}>
            Australia&apos;s trusted freight partner. Specialising in direct routes to Dubai, international sea/air freight, and national transport logistics.
          </p>

          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-7">
            <a href="#" className="hover:text-white/70 transition-colors" style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px', letterSpacing: '1px', textTransform: 'uppercase', color: 'rgba(255, 255, 255, 0.35)', cursor: 'pointer', textDecoration: 'none' }}>SERVICES</a>
            <a href="#" className="hover:text-white/70 transition-colors" style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px', letterSpacing: '1px', textTransform: 'uppercase', color: 'rgba(255, 255, 255, 0.35)', cursor: 'pointer', textDecoration: 'none' }}>ABOUT</a>
            <a href="#" className="hover:text-white/70 transition-colors" style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px', letterSpacing: '1px', textTransform: 'uppercase', color: 'rgba(255, 255, 255, 0.35)', cursor: 'pointer', textDecoration: 'none' }}>HELP CENTRE</a>
            <Link href="/contact" className="hover:text-white/70 transition-colors" style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px', letterSpacing: '1px', textTransform: 'uppercase', color: 'rgba(255, 255, 255, 0.35)', cursor: 'pointer', textDecoration: 'none' }}>CONTACT</Link>
          </div>

          {/* Divider */}
          <div style={{ width: '100%', borderTop: '1px solid rgba(255, 255, 255, 0.08)', marginBottom: '20px' }}></div>

          {/* Copyright */}
          <div style={{ fontFamily: 'Arial, sans-serif', fontSize: '11px', color: 'rgba(255, 255, 255, 0.25)' }}>
            &copy; 2026 PrimeLane Logistics Pty Ltd &middot; primelanelogistics.com.au &middot; ABN: [Your ABN Here]
          </div>
        </div>
      </footer>
    </main>
  );
}
