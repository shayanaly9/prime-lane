"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setOpenDropdown(null);
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <nav ref={navRef} className="w-full sticky top-0 px-6 md:px-10 flex justify-between items-center" style={{ height: '68px', background: 'rgba(247,245,240,0.92)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(11,18,32,0.08)', zIndex: 1000 }}>
      {/* Left Side */}
      <div style={{ display: 'flex', alignItems: 'center', height: '100%', gap: '12px' }}>
        <Link href="/">
          <Image
            src="/Prime-lane-logo.png"
            alt="PrimeLane Logistics"
            width={110}
            height={36}
            style={{ objectFit: 'contain', width: 'auto', cursor: 'pointer' }}
            priority
          />
        </Link>
      </div>

      {/* Mobile Hamburger Button */}
      <button 
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="flex md:hidden items-center justify-center w-10 h-10 rounded-full hover:bg-black/5 transition-colors"
        style={{ border: 'none', background: 'none', cursor: 'pointer', zIndex: 110 }}
      >
        {mobileMenuOpen ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 8h16M4 16h16"/></svg>
        )}
      </button>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-2">
        {/* Services Dropdown */}
        <div style={{ position: 'relative' }}>
          <button
            onClick={() => setOpenDropdown(openDropdown === 'services' ? null : 'services')}
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '13px', color: 'var(--c-ink)', padding: '8px 14px', cursor: 'pointer', borderRadius: '6px', background: 'none', border: 'none', transition: 'color 0.2s' }}
            className="hover:text-[#1A7A62]"
          >
            Services
          </button>
          {openDropdown === 'services' && (
            <div style={{ position: 'absolute', top: 'calc(100% + 8px)', right: 0, background: 'white', border: '1px solid rgba(11,18,32,0.08)', borderRadius: '12px', boxShadow: '0 16px 48px rgba(11,18,32,0.12)', minWidth: '260px', zIndex: 100, padding: '8px 0' }}>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--c-ink-soft)', padding: '10px 16px 6px', fontWeight: 700 }}>LOCAL TRANSPORT</div>
              {[
                ['Vehicle Logistics', '/services/vehicle-logistics'],
                ['Wharf Cartage', '/services/wharf-cartage'],
                ['Industrial Freight', '/services/industrial-freight'],
                ['Project Transport', '/services/project-transport']
              ].map(([label, href]) => (
                <Link key={label} href={href} className="hover:bg-[#f0f7f4]" style={{ display: 'block', padding: '10px 16px', fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--c-ink)', cursor: 'pointer', transition: 'background 0.15s', textDecoration: 'none' }}>{label}</Link>
              ))}
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--c-ink-soft)', padding: '14px 16px 6px', fontWeight: 700 }}>INTERNATIONAL</div>
              {[
                ['Australia → Dubai (Primary Route)', '/services/australia-dubai'],
                ['International Sea Freight', '/services/international-sea'],
                ['International Air Freight', '/services/international-air']
              ].map(([label, href]) => (
                <Link key={label} href={href} className="hover:bg-[#f0f7f4]" style={{ display: 'block', padding: '10px 16px', fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--c-ink)', cursor: 'pointer', transition: 'background 0.15s', textDecoration: 'none' }}>{label}</Link>
              ))}
            </div>
          )}
        </div>

        {/* About Dropdown */}
        <div style={{ position: 'relative' }}>
          <button
            onClick={() => setOpenDropdown(openDropdown === 'about' ? null : 'about')}
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '13px', color: 'var(--c-ink)', padding: '8px 14px', cursor: 'pointer', borderRadius: '6px', background: 'none', border: 'none', transition: 'color 0.2s' }}
            className="hover:text-[#1A7A62]"
          >
            About
          </button>
          {openDropdown === 'about' && (
            <div style={{ position: 'absolute', top: 'calc(100% + 8px)', right: 0, background: 'white', border: '1px solid rgba(11,18,32,0.08)', borderRadius: '12px', boxShadow: '0 16px 48px rgba(11,18,32,0.12)', minWidth: '220px', zIndex: 100, padding: '8px 0' }}>
              {[
                ['Our story', '/about/our-story'],
                ['Why choose PrimeLane', '/about/why-choose-us'],
                ['Certifications & accreditations', '/about/certifications']
              ].map(([label, href]) => (
                <Link key={label} href={href} className="hover:bg-[#f0f7f4]" style={{ display: 'block', padding: '10px 16px', fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--c-ink)', cursor: 'pointer', transition: 'background 0.15s', textDecoration: 'none' }}>{label}</Link>
              ))}
            </div>
          )}
        </div>

        {/* Help Centre Dropdown */}
        <div style={{ position: 'relative' }}>
          <button
            onClick={() => setOpenDropdown(openDropdown === 'help' ? null : 'help')}
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '13px', color: 'var(--c-ink)', padding: '8px 14px', cursor: 'pointer', borderRadius: '6px', background: 'none', border: 'none', transition: 'color 0.2s' }}
            className="hover:text-[#1A7A62]"
          >
            Help centre
          </button>
          {openDropdown === 'help' && (
            <div style={{ position: 'absolute', top: 'calc(100% + 8px)', right: 0, background: 'white', border: '1px solid rgba(11,18,32,0.08)', borderRadius: '12px', boxShadow: '0 16px 48px rgba(11,18,32,0.12)', minWidth: '240px', zIndex: 100, padding: '8px 0' }}>
              {[
                ['Frequently asked questions', '/#faq'],
                ['Contact & enquiries', '/help-centre/contact'],
                ['Shipping routes & transit times', '/help-centre/shipping-routes']
              ].map(([label, href]) => (
                <Link key={label} href={href} className="hover:bg-[#f0f7f4]" style={{ display: 'block', padding: '10px 16px', fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--c-ink)', cursor: 'pointer', transition: 'background 0.15s', textDecoration: 'none' }}>{label}</Link>
              ))}
            </div>
          )}
        </div>

        {/* CTA Button */}
        <Link
          href="/contact"
          style={{ background: 'var(--c-teal)', color: 'white', border: 'none', padding: '10px 24px', borderRadius: '999px', fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '13px', cursor: 'pointer', marginLeft: '12px', textDecoration: 'none', display: 'inline-block', transition: 'background 0.2s, transform 0.2s', letterSpacing: '0.01em' }}
          className="hover:bg-[#22967A] hover:scale-[1.03] active:scale-[0.98]"
        >
          Get in touch
        </Link>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div 
          style={{ 
            position: 'fixed', 
            top: '68px', 
            left: 0, 
            width: '100%', 
            height: 'calc(100vh - 68px)', 
            background: 'white', 
            zIndex: 100, 
            overflowY: 'auto',
            padding: '24px 20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '32px'
          }}
        >
          {/* Services Mobile */}
          <div>
            <div style={{ fontFamily: 'var(--font-heading)', fontSize: '11px', fontWeight: 700, color: 'var(--c-teal)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '16px' }}>Services</div>
            <div className="flex flex-col gap-4">
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '10px', fontWeight: 700, color: 'var(--c-ink-soft)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>LOCAL TRANSPORT</div>
              {[
                ['Vehicle Logistics', '/services/vehicle-logistics'],
                ['Wharf Cartage', '/services/wharf-cartage'],
                ['Industrial Freight', '/services/industrial-freight'],
                ['Project Transport', '/services/project-transport']
              ].map(([label, href]) => (
                <Link key={label} href={href} style={{ fontFamily: 'var(--font-body)', fontSize: '15px', color: 'var(--c-ink)', textDecoration: 'none', paddingLeft: '8px' }}>{label}</Link>
              ))}
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '10px', fontWeight: 700, color: 'var(--c-ink-soft)', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '8px' }}>INTERNATIONAL</div>
              {[
                ['Australia → Dubai (Primary Route)', '/services/australia-dubai'],
                ['International Sea Freight', '/services/international-sea'],
                ['International Air Freight', '/services/international-air']
              ].map(([label, href]) => (
                <Link key={label} href={href} style={{ fontFamily: 'var(--font-body)', fontSize: '15px', color: 'var(--c-ink)', textDecoration: 'none', paddingLeft: '8px' }}>{label}</Link>
              ))}
            </div>
          </div>

          {/* About Mobile */}
          <div>
            <div style={{ fontFamily: 'var(--font-heading)', fontSize: '11px', fontWeight: 700, color: 'var(--c-teal)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '16px' }}>About</div>
            <div className="flex flex-col gap-4">
              {[
                ['Our story', '/about/our-story'],
                ['Why choose PrimeLane', '/about/why-choose-us'],
                ['Certifications & accreditations', '/about/certifications']
              ].map(([label, href]) => (
                <Link key={label} href={href} style={{ fontFamily: 'var(--font-body)', fontSize: '15px', color: 'var(--c-ink)', textDecoration: 'none' }}>{label}</Link>
              ))}
            </div>
          </div>

          {/* Help Mobile */}
          <div>
            <div style={{ fontFamily: 'var(--font-heading)', fontSize: '11px', fontWeight: 700, color: 'var(--c-teal)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '16px' }}>Help centre</div>
            <div className="flex flex-col gap-4">
              {[
                ['Frequently asked questions', '/#faq'],
                ['Contact & enquiries', '/help-centre/contact'],
                ['Shipping routes & transit times', '/help-centre/shipping-routes']
              ].map(([label, href]) => (
                <Link key={label} href={href} style={{ fontFamily: 'var(--font-body)', fontSize: '15px', color: 'var(--c-ink)', textDecoration: 'none' }}>{label}</Link>
              ))}
            </div>
          </div>

          <Link
            href="/contact"
            style={{ background: 'var(--c-teal)', color: 'white', border: 'none', padding: '16px', borderRadius: '12px', fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '15px', textAlign: 'center', textDecoration: 'none' }}
          >
            Get in touch
          </Link>
        </div>
      )}
    </nav>
  );
}
