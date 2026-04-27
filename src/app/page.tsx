"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
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
      {/* Navigation Bar */}
      <nav ref={navRef} className="w-full bg-white z-50 sticky top-0" style={{ padding: '12px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #e8ede9' }}>
        {/* Left Side */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ width: '40px', height: '40px', background: '#e8f5f0', borderRadius: '4px', border: '1px solid #c0ddd4', display: 'inline-block', marginRight: '10px', verticalAlign: 'middle' }}></div>
          <span style={{ fontFamily: 'Arial, sans-serif', fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', color: '#888', verticalAlign: 'middle' }}>
            STREAMLINING EVERY MILE
          </span>
        </div>

        {/* Right Side */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
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
          <button style={{ background: 'linear-gradient(to right, #0F6E56, #2563EB)', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '4px', fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '12px', letterSpacing: '0.5px', textTransform: 'uppercase', cursor: 'pointer', marginLeft: '8px' }}>
            GET IN TOUCH
          </button>
        </div>
      </nav>

      <section 
        className="w-full min-h-screen flex flex-col items-center justify-center text-center px-10"
        style={{ background: 'linear-gradient(135deg, #0a1628 0%, #0d2137 50%, #0a2e1f 100%)' }}
      >
        {/* Logo Placeholder */}
        <div className="w-[80px] h-[80px] bg-white mx-auto mb-4"></div>
        <p className="mb-[24px]" style={{ fontFamily: 'Arial, sans-serif', fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', color: 'rgba(255, 255, 255, 0.5)' }}>
          STREAMLINING EVERY MILE
        </p>

        {/* Badge / Pill */}
        <div className="mb-[32px] inline-block" style={{ background: 'rgba(255, 255, 255, 0.1)', border: '1px solid rgba(255, 255, 255, 0.2)', borderRadius: '999px', padding: '8px 20px', fontFamily: 'Arial, sans-serif', fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', color: 'white' }}>
          AUSTRALIA&apos;S TRUSTED FREIGHT PARTNER
        </div>

        {/* Main Heading */}
        <h1 className="mb-[24px]" style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '64px', lineHeight: '1.1' }}>
          <div style={{ color: 'white' }}>Moving Cargo From</div>
          <div>
            <span style={{ color: '#4A9EFF' }}>Australia</span>
            <span style={{ color: 'white' }}> to the </span>
            <span style={{ color: '#4AE89A' }}>World</span>
          </div>
        </h1>

        {/* Paragraph */}
        <p className="mx-auto mb-[40px]" style={{ fontFamily: 'Arial, sans-serif', fontSize: '16px', color: 'rgba(255, 255, 255, 0.75)', maxWidth: '560px', lineHeight: '1.8' }}>
          PrimeLane Logistics specialises in container shipping, vehicle transport, and industrial freight — with our primary corridor running from Australia direct to Dubai, UAE.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button style={{ background: '#0F6E56', color: 'white', fontWeight: 700, padding: '16px 36px', borderRadius: '6px', fontFamily: 'Arial, sans-serif', fontSize: '13px', letterSpacing: '1px', textTransform: 'uppercase', border: 'none' }}>
            REQUEST A QUOTE
          </button>
          <button style={{ background: 'transparent', border: '1.5px solid rgba(255, 255, 255, 0.4)', color: 'white', padding: '16px 36px', borderRadius: '6px', fontFamily: 'Arial, sans-serif', fontSize: '13px', letterSpacing: '1px', textTransform: 'uppercase' }}>
            AUSTRALIA &rarr; DUBAI ROUTE
          </button>
        </div>
      </section>

      {/* BAR 1 — Stats Bar */}
      <section 
        className="w-full flex justify-center text-center"
        style={{ background: 'linear-gradient(135deg, #0a1628 0%, #0d2137 50%, #0a2e1f 100%)', padding: '32px 40px' }}
      >
        <div className="flex flex-row justify-between items-center w-full max-w-[1000px] gap-4 overflow-x-auto overflow-y-hidden" style={{ scrollbarWidth: 'none' }}>
          {/* Item 1 */}
          <div className="flex flex-col items-center flex-1 shrink-0">
            <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '22px', color: '#4A9EFF', marginBottom: '4px' }}>AU &rarr; UAE</div>
            <div style={{ fontFamily: 'Arial, sans-serif', fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(255, 255, 255, 0.5)' }}>PRIMARY ROUTE</div>
          </div>
          
          <div style={{ width: '1px', height: '40px', background: 'rgba(255, 255, 255, 0.1)' }} className="shrink-0"></div>

          {/* Item 2 */}
          <div className="flex flex-col items-center flex-1 shrink-0">
            <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '22px', color: '#4AE89A', marginBottom: '4px' }}>FCL & LCL</div>
            <div style={{ fontFamily: 'Arial, sans-serif', fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(255, 255, 255, 0.5)' }}>CONTAINER OPTIONS</div>
          </div>

          <div style={{ width: '1px', height: '40px', background: 'rgba(255, 255, 255, 0.1)' }} className="shrink-0"></div>

          {/* Item 3 */}
          <div className="flex flex-col items-center flex-1 shrink-0">
            <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '22px', color: '#4A9EFF', marginBottom: '4px' }}>DG Certified</div>
            <div style={{ fontFamily: 'Arial, sans-serif', fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(255, 255, 255, 0.5)' }}>CLASS 2&ndash;9</div>
          </div>

          <div style={{ width: '1px', height: '40px', background: 'rgba(255, 255, 255, 0.1)' }} className="shrink-0"></div>

          {/* Item 4 */}
          <div className="flex flex-col items-center flex-1 shrink-0">
            <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '22px', color: '#4AE89A', marginBottom: '4px' }}>Door-to-Door</div>
            <div style={{ fontFamily: 'Arial, sans-serif', fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(255, 255, 255, 0.5)' }}>FULL SERVICE</div>
          </div>
        </div>
      </section>

      {/* BAR 2 — Route Bar */}
      <section 
        className="w-full flex justify-center text-center overflow-x-auto"
        style={{ background: 'linear-gradient(to right, #2563EB, #16a34a)', padding: '14px 40px', scrollbarWidth: 'none' }}
      >
        <div className="flex flex-row items-center justify-center w-full min-w-max">
          <div style={{ background: 'rgba(0, 0, 0, 0.2)', borderRadius: '999px', padding: '4px 14px', fontFamily: 'Arial, sans-serif', fontSize: '12px', color: 'white', whiteSpace: 'nowrap' }}>
            <span style={{ opacity: 0.7 }}>AU</span> Melbourne / Sydney / Brisbane
          </div>

          <span style={{ color: 'white', opacity: 0.6, margin: '0 16px', whiteSpace: 'nowrap' }}>&rarr;&rarr;&rarr;</span>

          <div style={{ fontFamily: 'Arial, sans-serif', fontSize: '13px', color: 'white', fontWeight: 500, whiteSpace: 'nowrap' }}>
            Port of Melbourne &middot; Jebel Ali Port &middot; Dubai
          </div>

          <span style={{ color: 'white', opacity: 0.6, margin: '0 16px', whiteSpace: 'nowrap' }}>&rarr;&rarr;&rarr;</span>

          <div style={{ background: 'rgba(0, 0, 0, 0.2)', borderRadius: '999px', padding: '4px 14px', fontFamily: 'Arial, sans-serif', fontSize: '12px', color: 'white', whiteSpace: 'nowrap' }}>
            <span style={{ opacity: 0.7 }}>AE</span> Dubai, UAE
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full" style={{ background: '#f0f4f8', padding: '64px 40px' }}>
        <div className="mx-auto max-w-[1200px]">
          {/* Header */}
          <div className="mb-[40px]">
            <div style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase', color: '#2563EB', fontWeight: 700, marginBottom: '8px' }}>
              WHAT WE DO
            </div>
            <h2 style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '36px', color: '#0a1628', marginBottom: '12px' }}>
              Our Services
            </h2>
            <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '14px', color: '#555', lineHeight: 1.8, maxWidth: '540px' }}>
              Click any service to learn more. To book, simply contact us by email or phone — every shipment is handled personally.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[20px]">
            {/* Card 1 */}
            <div className="flex flex-col bg-white cursor-pointer" style={{ borderRadius: '8px', padding: '24px', borderLeft: '3px solid #2563EB', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
              <div className="text-2xl mb-4">🌐</div>
              <h3 style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '16px', color: '#0a1628', marginBottom: '12px' }}>Australia &rarr; Dubai (Primary Route)</h3>
              <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '14px', color: '#555', lineHeight: 1.6, marginBottom: '24px' }} className="flex-1">
                FCL and LCL container shipping from all major Australian ports direct to Jebel Ali, Dubai.
              </p>
              <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '11px', letterSpacing: '1px', textTransform: 'uppercase', color: '#2563EB' }}>
                LEARN MORE &rarr;
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col bg-white cursor-pointer" style={{ borderRadius: '8px', padding: '24px', borderLeft: '3px solid #16a34a', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
              <div className="text-2xl mb-4">🚢</div>
              <h3 style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '16px', color: '#0a1628', marginBottom: '12px' }}>International Sea Freight</h3>
              <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '14px', color: '#555', lineHeight: 1.6, marginBottom: '24px' }} className="flex-1">
                Global ocean freight services beyond the Australia&ndash;Dubai corridor, including Asia, Europe, and the Americas.
              </p>
              <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '11px', letterSpacing: '1px', textTransform: 'uppercase', color: '#2563EB' }}>
                LEARN MORE &rarr;
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col bg-white cursor-pointer" style={{ borderRadius: '8px', padding: '24px', borderLeft: '3px solid #2563EB', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
              <div className="text-2xl mb-4">✈️</div>
              <h3 style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '16px', color: '#0a1628', marginBottom: '12px' }}>International Air Freight</h3>
              <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '14px', color: '#555', lineHeight: 1.6, marginBottom: '24px' }} className="flex-1">
                Time-sensitive cargo handled with speed and care. Ideal for urgent shipments and high-value goods.
              </p>
              <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '11px', letterSpacing: '1px', textTransform: 'uppercase', color: '#2563EB' }}>
                LEARN MORE &rarr;
              </div>
            </div>

            {/* Card 4 */}
            <div className="flex flex-col bg-white cursor-pointer" style={{ borderRadius: '8px', padding: '24px', borderLeft: '3px solid #16a34a', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
              <div className="text-2xl mb-4">🚗</div>
              <h3 style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '16px', color: '#0a1628', marginBottom: '12px' }}>Vehicle & Automotive Transport</h3>
              <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '14px', color: '#555', lineHeight: 1.6, marginBottom: '24px' }} className="flex-1">
                Open and enclosed car carriers. Auction pickups, dealership deliveries, non-runners, and prestige vehicles.
              </p>
              <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '11px', letterSpacing: '1px', textTransform: 'uppercase', color: '#2563EB' }}>
                LEARN MORE &rarr;
              </div>
            </div>

            {/* Card 5 */}
            <div className="flex flex-col bg-white cursor-pointer" style={{ borderRadius: '8px', padding: '24px', borderLeft: '3px solid #2563EB', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
              <div className="text-2xl mb-4">⚓</div>
              <h3 style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '16px', color: '#0a1628', marginBottom: '12px' }}>Wharf & Container Cartage</h3>
              <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '14px', color: '#555', lineHeight: 1.6, marginBottom: '24px' }} className="flex-1">
                Side-loaders, skeletal trailers, drop-and-swap operations from the Port of Melbourne and surrounding wharves.
              </p>
              <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '11px', letterSpacing: '1px', textTransform: 'uppercase', color: '#2563EB' }}>
                LEARN MORE &rarr;
              </div>
            </div>

            {/* Card 6 */}
            <div className="flex flex-col bg-white cursor-pointer" style={{ borderRadius: '8px', padding: '24px', borderLeft: '3px solid #16a34a', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
              <div className="text-2xl mb-4">📦</div>
              <h3 style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '16px', color: '#0a1628', marginBottom: '12px' }}>Local & Industrial Freight</h3>
              <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '14px', color: '#555', lineHeight: 1.6, marginBottom: '24px' }} className="flex-1">
                Tautliner/curtain-sider services, hot-shot urgent deliveries, and palletised goods across Australia.
              </p>
              <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '11px', letterSpacing: '1px', textTransform: 'uppercase', color: '#2563EB' }}>
                LEARN MORE &rarr;
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* How to Book With Us Section */}
      <section className="w-full" style={{ background: 'white', padding: '64px 40px' }}>
        <div className="mx-auto max-w-[1200px]">
          {/* Header */}
          <div className="mb-[48px]">
            <div style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase', color: '#2563EB', fontWeight: 700, marginBottom: '8px' }}>
              SIMPLE PROCESS
            </div>
            <h2 style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '32px', color: '#0a1628', marginBottom: '12px' }}>
              How to Book With Us
            </h2>
            <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '14px', color: '#555', lineHeight: 1.8 }}>
              We don&apos;t book online. Every shipment is handled personally &mdash; so you always speak to someone who knows your cargo.
            </p>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center" style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'linear-gradient(135deg, #0F6E56, #2563EB)', color: 'white', fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '18px', margin: '0 auto 16px' }}>
                1
              </div>
              <h3 style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '15px', color: '#0a1628', textAlign: 'center', marginBottom: '8px' }}>Browse Services</h3>
              <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '13px', color: '#555', lineHeight: 1.8, textAlign: 'center', maxWidth: '200px', margin: '0 auto' }}>
                Explore our services menu and identify the service that fits your freight needs.
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center" style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'linear-gradient(135deg, #0F6E56, #2563EB)', color: 'white', fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '18px', margin: '0 auto 16px' }}>
                2
              </div>
              <h3 style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '15px', color: '#0a1628', textAlign: 'center', marginBottom: '8px' }}>Contact Us</h3>
              <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '13px', color: '#555', lineHeight: 1.8, textAlign: 'center', maxWidth: '200px', margin: '0 auto' }}>
                Email or call us with your cargo details &mdash; origin, destination, type, weight, and timeline.
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center" style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'linear-gradient(135deg, #0F6E56, #2563EB)', color: 'white', fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '18px', margin: '0 auto 16px' }}>
                3
              </div>
              <h3 style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '15px', color: '#0a1628', textAlign: 'center', marginBottom: '8px' }}>Receive a Quote</h3>
              <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '13px', color: '#555', lineHeight: 1.8, textAlign: 'center', maxWidth: '200px', margin: '0 auto' }}>
                We assess your requirements and send you a detailed, personalised freight quote.
              </p>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center" style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'linear-gradient(135deg, #0F6E56, #2563EB)', color: 'white', fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '18px', margin: '0 auto 16px' }}>
                4
              </div>
              <h3 style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '15px', color: '#0a1628', textAlign: 'center', marginBottom: '8px' }}>We Handle the Rest</h3>
              <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '13px', color: '#555', lineHeight: 1.8, textAlign: 'center', maxWidth: '200px', margin: '0 auto' }}>
                Once confirmed, we coordinate pickup, documentation, customs, and delivery end-to-end.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Key Routes Section */}
      <section className="w-full" style={{ background: '#f0f4f8', padding: '64px 40px' }}>
        <div className="mx-auto max-w-[1200px]">
          {/* Header */}
          <div className="mb-[32px]">
            <div style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase', color: '#2563EB', fontWeight: 700, marginBottom: '8px' }}>
              KEY ROUTES
            </div>
            <h2 style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '32px', color: '#0a1628', marginBottom: '32px' }}>
              Our Primary Freight Corridors
            </h2>
          </div>

          {/* Cards Container */}
          <div className="flex flex-col gap-[16px] w-full">
            {/* Card 1 */}
            <div className="w-full flex flex-col md:flex-row items-center justify-between" style={{ background: '#0a1628', borderRadius: '10px', padding: '28px 36px' }}>
              {/* Left Side */}
              <div className="flex flex-col text-center md:text-left mb-6 md:mb-0 w-full md:w-1/3">
                <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '20px', color: 'white' }}>Australia</div>
                <div style={{ fontFamily: 'Arial, sans-serif', fontSize: '13px', color: 'rgba(255, 255, 255, 0.5)', marginTop: '4px' }}>Melbourne &middot; Sydney &middot; Brisbane</div>
              </div>

              {/* Middle */}
              <div className="flex flex-col items-center flex-1 w-full md:w-1/3 px-4">
                <div style={{ fontFamily: 'Arial, sans-serif', fontSize: '10px', letterSpacing: '1.5px', textTransform: 'uppercase', color: 'rgba(255, 255, 255, 0.4)', textAlign: 'center', marginBottom: '8px' }}>
                  SEA FREIGHT &middot; ~18&ndash;22 DAYS TRANSIT
                </div>
                
                {/* Line with dots */}
                <div className="w-full flex items-center justify-between relative mb-3">
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#4AE89A', zIndex: 10 }}></div>
                  <div className="flex-1" style={{ height: '1px', background: '#2563EB', opacity: 0.5 }}></div>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#4AE89A', zIndex: 10 }}></div>
                  <div className="flex-1" style={{ height: '1px', background: '#2563EB', opacity: 0.5 }}></div>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#4AE89A', zIndex: 10 }}></div>
                </div>

                <div style={{ background: '#0F6E56', color: 'white', borderRadius: '999px', padding: '4px 14px', fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '11px', marginTop: '4px' }}>
                  ⭐ Primary Route
                </div>
              </div>

              {/* Right Side */}
              <div className="flex flex-col text-center md:text-right mt-6 md:mt-0 w-full md:w-1/3">
                <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '20px', color: 'white' }}>Dubai, UAE</div>
                <div style={{ fontFamily: 'Arial, sans-serif', fontSize: '13px', color: 'rgba(255, 255, 255, 0.5)', marginTop: '4px' }}>Jebel Ali Port &middot; Free Zones</div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="w-full flex flex-col md:flex-row items-center justify-between" style={{ background: '#0a2e1f', borderRadius: '10px', padding: '28px 36px' }}>
              {/* Left Side */}
              <div className="flex flex-col text-center md:text-left mb-6 md:mb-0 w-full md:w-1/3">
                <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '20px', color: 'white' }}>Australia</div>
                <div style={{ fontFamily: 'Arial, sans-serif', fontSize: '13px', color: 'rgba(255, 255, 255, 0.5)', marginTop: '4px' }}>All major ports</div>
              </div>

              {/* Middle */}
              <div className="flex flex-col items-center flex-1 w-full md:w-1/3 px-4">
                <div style={{ fontFamily: 'Arial, sans-serif', fontSize: '10px', letterSpacing: '1.5px', textTransform: 'uppercase', color: 'rgba(255, 255, 255, 0.4)', textAlign: 'center', marginBottom: '8px' }}>
                  INTERNATIONAL &middot; MULTIPLE DESTINATIONS
                </div>
                
                {/* Line with dots */}
                <div className="w-full flex items-center justify-between relative mb-3">
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#4A9EFF', zIndex: 10 }}></div>
                  <div className="flex-1" style={{ height: '1px', background: '#2563EB', opacity: 0.5 }}></div>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#4A9EFF', zIndex: 10 }}></div>
                  <div className="flex-1" style={{ height: '1px', background: '#2563EB', opacity: 0.5 }}></div>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#4A9EFF', zIndex: 10 }}></div>
                </div>

                <div style={{ background: '#1D9E75', color: 'white', borderRadius: '999px', padding: '4px 14px', fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '11px', marginTop: '4px' }}>
                  🌐 Global Reach
                </div>
              </div>

              {/* Right Side */}
              <div className="flex flex-col text-center md:text-right mt-6 md:mt-0 w-full md:w-1/3">
                <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '20px', color: 'white' }}>Worldwide</div>
                <div style={{ fontFamily: 'Arial, sans-serif', fontSize: '13px', color: 'rgba(255, 255, 255, 0.5)', marginTop: '4px' }}>Asia &middot; Europe &middot; Americas</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="w-full" style={{ background: 'white', padding: '64px 40px' }}>
        <div className="mx-auto max-w-[1200px] flex flex-col md:flex-row gap-[48px] items-start">
          {/* Left Column */}
          <div className="w-full md:w-[55%]">
            <div style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase', color: '#2563EB', fontWeight: 700, marginBottom: '8px' }}>
              ABOUT US
            </div>
            <h2 style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '32px', color: '#0a1628', lineHeight: 1.2, marginBottom: '24px' }}>
              Your Logistics Partner, Not Just a Carrier
            </h2>
            <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '14px', color: '#444', lineHeight: 1.9, marginBottom: '16px' }}>
              PrimeLane Logistics is an Australian-based freight company specialising in container shipping, vehicle transport, and industrial freight &mdash; with a strong focus on the Australia&ndash;Dubai trade corridor.
            </p>
            <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '14px', color: '#444', lineHeight: 1.9, marginBottom: '28px' }}>
              We believe in doing business the right way: every client speaks to a real person, every quote is prepared individually, and every shipment is tracked with care. We are fully licensed for Dangerous Goods transport (Class 2&ndash;9) and carry the accreditations required for international freight.
            </p>
            <button style={{ background: 'linear-gradient(to right, #0F6E56, #2563EB)', color: 'white', border: 'none', padding: '14px 28px', borderRadius: '4px', fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '13px', letterSpacing: '0.5px', textTransform: 'uppercase', cursor: 'pointer' }}>
              WHY CHOOSE PRIMELANE
            </button>
          </div>

          {/* Right Column */}
          <div className="w-full md:w-[45%]">
            <div style={{ background: '#f0f4f8', borderRadius: '10px', padding: '28px', border: '1px solid #dce8e2' }}>
              {/* Section 1 */}
              <div>
                <div style={{ fontFamily: 'Arial, sans-serif', fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase', color: '#2563EB', fontWeight: 700, marginBottom: '6px' }}>
                  BASED IN
                </div>
                <div className="flex items-center">
                  <span style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '16px', color: '#0a1628' }}>Australia</span>
                  <span style={{ background: '#0F6E56', color: 'white', borderRadius: '3px', padding: '1px 5px', fontSize: '10px', marginLeft: '6px', fontFamily: 'Arial, sans-serif' }}>AU</span>
                </div>
                <div style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px', color: '#888', marginTop: '2px' }}>
                  primelanelogistics.com.au
                </div>
              </div>

              <div style={{ height: '1px', background: '#e8ede9', margin: '16px 0' }}></div>

              {/* Section 2 */}
              <div>
                <div style={{ fontFamily: 'Arial, sans-serif', fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase', color: '#2563EB', fontWeight: 700, marginBottom: '6px' }}>
                  PRIMARY ROUTE
                </div>
                <div className="flex items-center">
                  <span style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '16px', color: '#0a1628' }}>Australia &rarr; Dubai, UAE</span>
                  <span style={{ background: '#0F6E56', color: 'white', borderRadius: '3px', padding: '1px 5px', fontSize: '10px', marginLeft: '6px', fontFamily: 'Arial, sans-serif' }}>AE</span>
                </div>
                <div style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px', color: '#888', marginTop: '2px' }}>
                  FCL &middot; LCL &middot; Air &middot; Break-bulk
                </div>
              </div>

              <div style={{ height: '1px', background: '#e8ede9', margin: '16px 0' }}></div>

              {/* Section 3 */}
              <div>
                <div style={{ fontFamily: 'Arial, sans-serif', fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase', color: '#2563EB', fontWeight: 700, marginBottom: '6px' }}>
                  CERTIFICATIONS
                </div>
                <div className="flex flex-col gap-1">
                  <div style={{ fontFamily: 'Arial, sans-serif', fontSize: '13px', color: '#333', lineHeight: 2.2 }}>
                    ✅ DG Licensed (Class 2&ndash;9)
                  </div>
                  <div style={{ fontFamily: 'Arial, sans-serif', fontSize: '13px', color: '#333', lineHeight: 2.2 }}>
                    ✅ International Freight Accredited
                  </div>
                  <div style={{ fontFamily: 'Arial, sans-serif', fontSize: '13px', color: '#333', lineHeight: 2.2 }}>
                    ✅ Condition Report Service (all vehicles)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full" style={{ background: '#f0f4f8', padding: '64px 40px' }}>
        <div className="mx-auto max-w-[1200px]">
          {/* Header */}
          <div className="mb-[32px]">
            <div style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase', color: '#2563EB', fontWeight: 700, marginBottom: '8px' }}>
              HELP CENTRE
            </div>
            <h2 style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '32px', color: '#0a1628', marginBottom: '32px' }}>
              Frequently Asked Questions
            </h2>
          </div>

          {/* FAQ Items */}
          <div className="flex flex-col w-full">
            {/* Q1 */}
            <div style={{ borderBottom: '1px solid #dce8e2' }}>
              <div 
                onClick={() => setOpenFaq(openFaq === 1 ? null : 1)}
                style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 0', cursor: 'pointer' }}
              >
                <h3 style={{ fontFamily: 'Arial, sans-serif', fontSize: '15px', color: '#0a1628', fontWeight: 400, margin: 0 }}>
                  How do I get a freight quote?
                </h3>
                <div style={{ color: '#2563EB', fontSize: '20px', fontWeight: 300 }}>
                  {openFaq === 1 ? '−' : '+'}
                </div>
              </div>
              {openFaq === 1 && (
                <div style={{ fontFamily: 'Arial, sans-serif', fontSize: '14px', color: '#555', lineHeight: 1.9, paddingBottom: '20px' }}>
                  Simply email us at contact@primelanelogistics.com.au or call +61 421 821 220. Tell us what you need to ship, the origin, destination, weight, and timeline &mdash; and we&apos;ll prepare a detailed, personalised quote for you.
                </div>
              )}
            </div>

            {/* Q2 */}
            <div style={{ borderBottom: '1px solid #dce8e2' }}>
              <div 
                onClick={() => setOpenFaq(openFaq === 2 ? null : 2)}
                style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 0', cursor: 'pointer' }}
              >
                <h3 style={{ fontFamily: 'Arial, sans-serif', fontSize: '15px', color: '#0a1628', fontWeight: 400, margin: 0 }}>
                  What is the transit time from Australia to Dubai?
                </h3>
                <div style={{ color: '#2563EB', fontSize: '20px', fontWeight: 300 }}>
                  {openFaq === 2 ? '−' : '+'}
                </div>
              </div>
              {openFaq === 2 && (
                <div style={{ fontFamily: 'Arial, sans-serif', fontSize: '14px', color: '#555', lineHeight: 1.9, paddingBottom: '20px' }}>
                  Sea freight from Australia to Dubai (Jebel Ali) typically takes 18&ndash;22 days depending on the port of origin. Sydney, Melbourne, and Brisbane are our primary departure ports. Air freight takes 3&ndash;6 business days.
                </div>
              )}
            </div>

            {/* Q3 */}
            <div style={{ borderBottom: '1px solid #dce8e2' }}>
              <div 
                onClick={() => setOpenFaq(openFaq === 3 ? null : 3)}
                style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 0', cursor: 'pointer' }}
              >
                <h3 style={{ fontFamily: 'Arial, sans-serif', fontSize: '15px', color: '#0a1628', fontWeight: 400, margin: 0 }}>
                  Can you transport dangerous goods (DG)?
                </h3>
                <div style={{ color: '#2563EB', fontSize: '20px', fontWeight: 300 }}>
                  {openFaq === 3 ? '−' : '+'}
                </div>
              </div>
              {openFaq === 3 && (
                <div style={{ fontFamily: 'Arial, sans-serif', fontSize: '14px', color: '#555', lineHeight: 1.9, paddingBottom: '20px' }}>
                  Yes. We are fully licensed to transport Dangerous Goods Class 2&ndash;9. All our drivers and vehicles are DG certified and compliant with Australian and international regulations.
                </div>
              )}
            </div>

            {/* Q4 */}
            <div style={{ borderBottom: '1px solid #dce8e2' }}>
              <div 
                onClick={() => setOpenFaq(openFaq === 4 ? null : 4)}
                style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 0', cursor: 'pointer' }}
              >
                <h3 style={{ fontFamily: 'Arial, sans-serif', fontSize: '15px', color: '#0a1628', fontWeight: 400, margin: 0 }}>
                  Do you offer vehicle transport within Australia?
                </h3>
                <div style={{ color: '#2563EB', fontSize: '20px', fontWeight: 300 }}>
                  {openFaq === 4 ? '−' : '+'}
                </div>
              </div>
              {openFaq === 4 && (
                <div style={{ fontFamily: 'Arial, sans-serif', fontSize: '14px', color: '#555', lineHeight: 1.9, paddingBottom: '20px' }}>
                  Yes. We offer open and enclosed car carrier transport across Australia. We handle auction pickups, dealership deliveries, non-runners, and prestige vehicles with full condition reports.
                </div>
              )}
            </div>

            {/* Q5 */}
            <div style={{ borderBottom: '1px solid #dce8e2' }}>
              <div 
                onClick={() => setOpenFaq(openFaq === 5 ? null : 5)}
                style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 0', cursor: 'pointer' }}
              >
                <h3 style={{ fontFamily: 'Arial, sans-serif', fontSize: '15px', color: '#0a1628', fontWeight: 400, margin: 0 }}>
                  Can you do LCL (Less-than-Container-Load) shipping?
                </h3>
                <div style={{ color: '#2563EB', fontSize: '20px', fontWeight: 300 }}>
                  {openFaq === 5 ? '−' : '+'}
                </div>
              </div>
              {openFaq === 5 && (
                <div style={{ fontFamily: 'Arial, sans-serif', fontSize: '14px', color: '#555', lineHeight: 1.9, paddingBottom: '20px' }}>
                  Yes. If you don&apos;t have enough cargo to fill a full container, we offer LCL (consolidated) shipping where your goods share container space with other cargo, reducing your costs.
                </div>
              )}
            </div>

            {/* Q6 */}
            <div style={{ borderBottom: '1px solid #dce8e2' }}>
              <div 
                onClick={() => setOpenFaq(openFaq === 6 ? null : 6)}
                style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 0', cursor: 'pointer' }}
              >
                <h3 style={{ fontFamily: 'Arial, sans-serif', fontSize: '15px', color: '#0a1628', fontWeight: 400, margin: 0 }}>
                  What areas do you service within Australia?
                </h3>
                <div style={{ color: '#2563EB', fontSize: '20px', fontWeight: 300 }}>
                  {openFaq === 6 ? '−' : '+'}
                </div>
              </div>
              {openFaq === 6 && (
                <div style={{ fontFamily: 'Arial, sans-serif', fontSize: '14px', color: '#555', lineHeight: 1.9, paddingBottom: '20px' }}>
                  We service all major Australian cities and regional areas including Melbourne, Sydney, Brisbane, Perth, Adelaide, and beyond. Contact us with your specific pickup location and we&apos;ll confirm availability.
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Get In Touch Section */}
      <section className="w-full" style={{ background: 'linear-gradient(135deg, #0a1628 0%, #0d2137 50%, #0a2e1f 100%)', padding: '72px 40px' }}>
        <div className="mx-auto max-w-[1200px] flex flex-col md:flex-row gap-[48px]">
          {/* Left Column */}
          <div className="w-full md:w-[55%] flex flex-col">
            <div style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase', color: '#2563EB', fontWeight: 700, marginBottom: '8px' }}>
              GET IN TOUCH
            </div>
            <h2 style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '32px', color: 'white', lineHeight: 1.2, marginBottom: '16px' }}>
              Request a Quote or Ask a Question
            </h2>
            <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '14px', color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.8, marginBottom: '32px' }}>
              We handle every enquiry personally. No online booking forms &mdash; just a direct conversation to make sure we understand exactly what your cargo needs.
            </p>

            {/* Contact Items */}
            <div className="flex flex-col">
              {/* Item 1 - Email */}
              <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', marginBottom: '24px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: 'rgba(255, 255, 255, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '16px', flexShrink: 0, color: '#4A9EFF', fontSize: '20px' }}>
                  ✉️
                </div>
                <div className="flex flex-col">
                  <h3 style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '15px', color: 'white', marginBottom: '4px' }}>Email Us</h3>
                  <div style={{ fontFamily: 'Arial, sans-serif', fontSize: '13px', color: 'rgba(255, 255, 255, 0.6)' }}>For quotes, bookings, and general enquiries:</div>
                  <a href="mailto:contact@primelanelogistics.com.au" style={{ color: '#4AE89A', fontWeight: 700, fontFamily: 'Arial, sans-serif', fontSize: '13px' }}>contact@primelanelogistics.com.au</a>
                  <div style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px', color: 'rgba(255, 255, 255, 0.4)', marginTop: '4px' }}>We aim to respond within 1 business day.</div>
                </div>
              </div>

              {/* Item 2 - Phone */}
              <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', marginBottom: '24px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: 'rgba(255, 255, 255, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '16px', flexShrink: 0, color: '#f87171', fontSize: '20px' }}>
                  📞
                </div>
                <div className="flex flex-col">
                  <h3 style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '15px', color: 'white', marginBottom: '4px' }}>Call Us</h3>
                  <a href="tel:+61421821220" style={{ color: '#4AE89A', fontWeight: 700, fontFamily: 'Arial, sans-serif', fontSize: '13px' }}>+61 421 821 220</a>
                  <div style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px', color: 'rgba(255, 255, 255, 0.4)', marginTop: '4px' }}>Available during Australian business hours.</div>
                </div>
              </div>

              {/* Item 3 - Website */}
              <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', marginBottom: '24px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: 'rgba(255, 255, 255, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '16px', flexShrink: 0, color: '#4A9EFF', fontSize: '20px' }}>
                  🌐
                </div>
                <div className="flex flex-col">
                  <h3 style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '15px', color: 'white', marginBottom: '4px' }}>Website</h3>
                  <a href="https://primelanelogistics.com.au" style={{ color: '#4AE89A', fontWeight: 700, fontFamily: 'Arial, sans-serif', fontSize: '13px' }}>primelanelogistics.com.au</a>
                </div>
              </div>
            </div>

            {/* Info Box */}
            <div style={{ background: 'rgba(255, 255, 255, 0.06)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '8px', padding: '18px 20px', marginTop: '8px' }}>
              <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '13px', color: 'rgba(255, 255, 255, 0.6)', lineHeight: 1.8, margin: 0 }}>
                <span style={{ fontWeight: 'bold', color: 'white' }}>How our booking process works:</span> Contact us with your cargo details (type, weight, dimensions, origin, destination, and preferred dates). We&apos;ll prepare a personalised quote, confirm the details with you, and handle everything from pickup to delivery.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full md:w-[45%]">
            <div style={{ background: 'rgba(255, 255, 255, 0.06)', border: '1px solid rgba(255, 255, 255, 0.12)', borderRadius: '12px', padding: '28px' }}>
              <h3 style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '16px', color: 'white', marginBottom: '24px' }}>
                What to Include in Your Enquiry
              </h3>

              {/* Item 1 */}
              <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', marginBottom: '20px' }}>
                <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#2563EB', color: 'white', fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '14px', flexShrink: 0 }}>
                  1
                </div>
                <div className="flex flex-col">
                  <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '14px', color: 'white' }}>Cargo type &amp; description</div>
                  <div style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px', color: 'rgba(255, 255, 255, 0.5)', marginTop: '2px' }}>e.g. machinery, vehicles, chemicals, general goods</div>
                </div>
              </div>

              {/* Item 2 */}
              <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', marginBottom: '20px' }}>
                <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#2563EB', color: 'white', fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '14px', flexShrink: 0 }}>
                  2
                </div>
                <div className="flex flex-col">
                  <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '14px', color: 'white' }}>Weight &amp; dimensions (approximate)</div>
                  <div style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px', color: 'rgba(255, 255, 255, 0.5)', marginTop: '2px' }}>Total weight in kg/t, CBM or number of pallets</div>
                </div>
              </div>

              {/* Item 3 */}
              <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', marginBottom: '20px' }}>
                <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#2563EB', color: 'white', fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '14px', flexShrink: 0 }}>
                  3
                </div>
                <div className="flex flex-col">
                  <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '14px', color: 'white' }}>Origin &amp; destination</div>
                  <div style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px', color: 'rgba(255, 255, 255, 0.5)', marginTop: '2px' }}>Full address or port/city</div>
                </div>
              </div>

              {/* Item 4 */}
              <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', marginBottom: '20px' }}>
                <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#2563EB', color: 'white', fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '14px', flexShrink: 0 }}>
                  4
                </div>
                <div className="flex flex-col">
                  <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '14px', color: 'white' }}>Preferred timeline</div>
                  <div style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px', color: 'rgba(255, 255, 255, 0.5)', marginTop: '2px' }}>Pickup date or urgency level</div>
                </div>
              </div>

              {/* Item 5 */}
              <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', marginBottom: '20px' }}>
                <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#2563EB', color: 'white', fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '14px', flexShrink: 0 }}>
                  5
                </div>
                <div className="flex flex-col">
                  <div style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '14px', color: 'white' }}>Any special requirements</div>
                  <div style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px', color: 'rgba(255, 255, 255, 0.5)', marginTop: '2px' }}>Temperature control, DG class, oversized, etc.</div>
                </div>
              </div>

              {/* Button */}
              <button 
                onClick={() => window.location.href = 'mailto:contact@primelanelogistics.com.au'}
                style={{ background: 'linear-gradient(to right, #2563EB, #16a34a)', color: 'white', border: 'none', width: '100%', padding: '14px', borderRadius: '6px', fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '13px', letterSpacing: '1px', textTransform: 'uppercase', cursor: 'pointer', marginTop: '4px' }}
              >
                SEND US AN EMAIL &rarr;
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="w-full" style={{ background: '#060f1a', padding: '48px 40px 24px', textAlign: 'center', borderTop: '1px solid rgba(37, 99, 235, 0.3)' }}>
        <div className="mx-auto max-w-[1200px] flex flex-col items-center">
          {/* Logo Placeholder */}
          <div style={{ width: '48px', height: '48px', background: 'rgba(255, 255, 255, 0.15)', borderRadius: '4px', margin: '0 auto 12px' }}></div>
          
          {/* Tagline */}
          <div style={{ fontFamily: 'Arial, sans-serif', fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', color: 'rgba(255, 255, 255, 0.35)', marginBottom: '16px' }}>
            STREAMLINING EVERY MILE
          </div>

          {/* Contact Line */}
          <div style={{ fontFamily: 'Arial, sans-serif', fontSize: '13px', color: 'rgba(255, 255, 255, 0.45)', marginBottom: '20px' }}>
            <a href="mailto:contact@primelanelogistics.com.au" style={{ color: 'rgba(255, 255, 255, 0.45)', textDecoration: 'none' }}>contact@primelanelogistics.com.au</a>
            {' '}&middot;{' '}
            <a href="tel:+61421821220" style={{ color: 'rgba(255, 255, 255, 0.45)', textDecoration: 'none' }}>+61 421 821 220</a>
          </div>

          {/* Nav Links */}
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: '32px', marginBottom: '28px' }}>
            <a href="#" className="hover:text-white/70 transition-colors" style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px', letterSpacing: '1px', textTransform: 'uppercase', color: 'rgba(255, 255, 255, 0.35)', cursor: 'pointer', textDecoration: 'none' }}>SERVICES</a>
            <a href="#" className="hover:text-white/70 transition-colors" style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px', letterSpacing: '1px', textTransform: 'uppercase', color: 'rgba(255, 255, 255, 0.35)', cursor: 'pointer', textDecoration: 'none' }}>ABOUT</a>
            <a href="#" className="hover:text-white/70 transition-colors" style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px', letterSpacing: '1px', textTransform: 'uppercase', color: 'rgba(255, 255, 255, 0.35)', cursor: 'pointer', textDecoration: 'none' }}>HELP CENTRE</a>
            <a href="#" className="hover:text-white/70 transition-colors" style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px', letterSpacing: '1px', textTransform: 'uppercase', color: 'rgba(255, 255, 255, 0.35)', cursor: 'pointer', textDecoration: 'none' }}>CONTACT</a>
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


