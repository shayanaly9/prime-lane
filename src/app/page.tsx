"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";

const serviceModals = [
  {
    id: 1,
    title: "Australia → Dubai (Primary Route)",
    subtitle: "Our flagship international service — direct container freight from Australia to Dubai, UAE via Jebel Ali Port.",
    sections: [
      {
        title: "SERVICE OPTIONS",
        items: [
          "FCL (Full Container Load) — 20ft and 40ft containers for larger cargo volumes",
          "LCL (Less-than-Container Load) — Share container space for smaller shipments",
          "Reefer Containers — Temperature-controlled for perishables or chemicals",
          "Dangerous Goods — DG-licensed for Class 2–9 cargo",
          "Break-bulk & Project Cargo — Oversized or non-containerisable loads"
        ]
      },
      {
        title: "ROUTE DETAILS",
        items: [
          "Origin: Melbourne, Sydney, or Brisbane (Port of Melbourne preferred)",
          "Destination: Jebel Ali Port, Dubai — including delivery to Dubai Free Zones",
          "Transit time: approximately 18–22 days by sea"
        ]
      },
      {
        title: "WE HANDLE",
        items: [
          "Export customs clearance (Australia) and import customs coordination (UAE)",
          "Bill of Lading, Certificate of Origin, packing list, and commercial invoice documentation",
          "Door-to-port, port-to-port, or full door-to-door options"
        ]
      }
    ]
  },
  {
    id: 2,
    title: "International Sea Freight",
    subtitle: "Ocean freight services connecting Australia to destinations worldwide — beyond the Dubai corridor.",
    sections: [
      {
        title: "DESTINATIONS",
        items: [
          "Middle East: Dubai (primary), Abu Dhabi, Sharjah, Saudi Arabia",
          "Asia: Singapore, Hong Kong, China, India, Malaysia",
          "Europe and Americas: contact us to discuss routing options"
        ]
      },
      {
        title: "CONTAINER TYPES",
        items: [
          "Standard dry containers (20ft / 40ft / 40ft HC)",
          "Reefer (refrigerated) containers for temperature-sensitive goods",
          "Open-top and flat-rack for oversized or heavy cargo"
        ]
      }
    ]
  },
  {
    id: 3,
    title: "International Air Freight",
    subtitle: "Fast, reliable air freight from Australia for time-sensitive or high-value shipments.",
    sections: [
      {
        title: "BEST SUITED FOR",
        items: [
          "Urgent shipments where sea freight lead times are too long",
          "High-value goods such as electronics, automotive parts, or luxury items",
          "Perishables and time-critical pharmaceutical or medical cargo"
        ]
      },
      {
        title: "KEY DETAILS",
        items: [
          "Transit to Dubai: approximately 3–5 business days",
          "Airport-to-airport or door-to-door service available",
          "Dangerous Goods air transport available (IATA certified)"
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Vehicle & Automotive Transport",
    subtitle: "Professional car carrier services across Australia — from everyday vehicles to prestige and non-runners.",
    sections: [
      {
        title: "CARRIER OPTIONS",
        items: [
          "Open Carrier — cost-effective transport for standard vehicles, SUVs, and everyday cars",
          "Enclosed Carrier — weather-protected transport for prestige, classic, or high-value vehicles, protection from weather and road debris"
        ]
      },
      {
        title: "SPECIALIST SERVICES",
        items: [
          "Auction & Dealership Pickups — Specialized collection from Manheim, Pickles, and other major auctions, delivered to dealerships or private homes",
          "Non-Runner / Salvage Transport — winch-equipped trucks for vehicles that do not start",
          "Interstate Last-Mile Delivery — receiving vehicles arriving from other states and completing local delivery"
        ]
      },
      {
        title: "OUR COMMITMENT",
        items: [
          "Full condition report with photos taken before and after every vehicle movement",
          "We document the car's state so you have complete peace of mind",
          "Full insurance coverage during transit"
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Wharf & Container Cartage",
    subtitle: "Reliable port cartage services from the Port of Melbourne and surrounding wharves.",
    sections: [
      {
        title: "EQUIPMENT & SERVICES",
        items: [
          "Side-Loader — ground-level container delivery at sites without a loading dock",
          "Standard Skeletal Trailers — fast wharf-to-warehouse drop-and-swap operations",
          "Overweight / Oversize — high-mass transport for heavy machinery or industrial parts, with applicable permits",
          "Reefer Services — power-plugged transport for temperature-controlled chemicals and cargo",
          "Container De-hiring — empty container returns to designated depots"
        ]
      },
      {
        title: "COVERAGE",
        items: [
          "Port of Melbourne (primary)",
          "Tarneit, Broadmeadows, Western Suburbs",
          "Greater Melbourne and surrounding regions"
        ]
      }
    ]
  },
  {
    id: 6,
    title: "Local & Industrial Freight",
    subtitle: "Specialist local freight for automotive parts, chemical drums, palletised goods, and more.",
    sections: [
      {
        title: "SERVICE OPTIONS",
        items: [
          "Tautliner / Curtain-Sider — side-loading for pallets, automotive parts, and chemical drums needing weather protection",
          "Hot-Shot / Same-Day — premium urgent delivery for critical automotive components or chemical supplies",
          "DG-Placarded Transport — fully licensed to carry Dangerous Goods Classes 2 through 9 nationally",
          "Automotive Parts Freight — specialist handling for dealership and warehouse supply chains"
        ]
      },
      {
        title: "INDUSTRIES SERVED",
        items: [
          "Automotive parts and components",
          "Chemical and industrial supplies",
          "Retail and FMCG distribution",
          "Manufacturing and construction materials"
        ]
      }
    ]
  }
];

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HomeContent />
    </Suspense>
  );
}
function HomeContent() {
  const [hoveredButton, setHoveredButton] = useState<number | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [openServiceModal, setOpenServiceModal] = useState<number | null>(null);
  
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const serviceId = searchParams.get('service');
    if (serviceId) {
      setOpenServiceModal(parseInt(serviceId));
      // Optionally clear the param after opening
      // router.replace('/', { scroll: false });
    }
  }, [searchParams]);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setOpenServiceModal(null);
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <main className="w-full flex flex-col items-center">
      <a href="#main-content" className="skip-link">Skip to content</a>
      {/* NAVBAR removed, handled by layout.tsx */}

      <section
        id="main-content"
        className="w-full"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(11,18,32,0.97) 0%, rgba(11,18,32,0.88) 55%, rgba(11,18,32,0.45) 100%), url('/Hero-Banner.webp')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100dvh',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="mx-auto max-w-[1200px] px-6 md:px-10 w-full py-28 md:py-36">
          <div style={{ fontFamily: 'var(--font-heading)', fontSize: '11px', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: '32px' }}>
            Australia&apos;s freight partner
          </div>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 'clamp(32px, 7vw, 86px)', lineHeight: 1.0, letterSpacing: '-0.03em', color: 'white', marginBottom: '28px', maxWidth: '820px', textWrap: 'balance' as React.CSSProperties['textWrap'] }}>
            Moving cargo from{' '}
            <span style={{ color: 'var(--c-teal-light)' }}>Australia</span>
            {' '}to the world
          </h1>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '17px', color: 'rgba(255,255,255,0.6)', maxWidth: '520px', lineHeight: 1.8, marginBottom: '44px' }}>
            Container shipping, vehicle transport, and industrial freight — direct from Australia to Dubai and beyond.
          </p>
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <Link href="/help-centre/contact" style={{ textDecoration: 'none' }}>
              <button
                onMouseEnter={() => setHoveredButton(1)}
                onMouseLeave={() => setHoveredButton(null)}
                style={{
                  background: hoveredButton === 1 ? 'var(--c-teal-light)' : 'var(--c-teal)',
                  color: 'white',
                  border: 'none',
                  padding: '15px 34px',
                  borderRadius: '999px',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 700,
                  fontSize: '14px',
                  cursor: 'pointer',
                  transition: 'all 0.25s cubic-bezier(0.32,0.72,0,1)',
                  transform: hoveredButton === 1 ? 'translateY(-2px)' : 'translateY(0)',
                  boxShadow: hoveredButton === 1 ? '0 12px 32px rgba(26,122,98,0.4)' : 'none',
                  letterSpacing: '0.01em',
                  width: '100%'
                }}
                className="w-full sm:w-auto"
              >
                Request a quote
              </button>
            </Link>
            <button
              onClick={() => document.getElementById('freight-corridors')?.scrollIntoView({ behavior: 'smooth' })}
              onMouseEnter={() => setHoveredButton(2)}
              onMouseLeave={() => setHoveredButton(null)}
              style={{
                background: hoveredButton === 2 ? 'rgba(255,255,255,0.07)' : 'transparent',
                color: 'white',
                border: '1.5px solid rgba(255,255,255,0.35)',
                padding: '15px 34px',
                borderRadius: '999px',
                fontFamily: 'var(--font-heading)',
                fontWeight: 600,
                fontSize: '14px',
                cursor: 'pointer',
                transition: 'all 0.25s cubic-bezier(0.32,0.72,0,1)',
                transform: hoveredButton === 2 ? 'translateY(-2px)' : 'translateY(0)',
                letterSpacing: '0.01em',
              }}
            >
              Australia → Dubai route
            </button>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="w-full flex justify-center text-center px-4 py-10 md:px-10" style={{ background: 'var(--c-bg-dark)' }}>
        <div className="flex flex-row justify-between items-center w-full max-w-[1000px] gap-4 overflow-x-auto" style={{ scrollbarWidth: 'none' }}>
          <div className="flex flex-col items-center flex-1 shrink-0">
            <div className="tabular" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '20px', color: 'var(--c-teal-light)', marginBottom: '4px' }}>AU → UAE</div>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)' }}>Primary route</div>
          </div>
          <div style={{ width: '1px', height: '36px', background: 'rgba(255,255,255,0.08)' }} className="shrink-0" />
          <div className="flex flex-col items-center flex-1 shrink-0">
            <div className="tabular" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '20px', color: 'var(--c-teal-light)', marginBottom: '4px' }}>FCL & LCL</div>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)' }}>Container options</div>
          </div>
          <div style={{ width: '1px', height: '36px', background: 'rgba(255,255,255,0.08)' }} className="shrink-0" />
          <div className="flex flex-col items-center flex-1 shrink-0">
            <div className="tabular" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '20px', color: 'var(--c-teal-light)', marginBottom: '4px' }}>DG Certified</div>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)' }}>Classes 2–9</div>
          </div>
          <div style={{ width: '1px', height: '36px', background: 'rgba(255,255,255,0.08)' }} className="shrink-0" />
          <div className="flex flex-col items-center flex-1 shrink-0">
            <div className="tabular" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '20px', color: 'var(--c-teal-light)', marginBottom: '4px' }}>Door-to-door</div>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)' }}>Full service</div>
          </div>
        </div>
      </section>





      {/* Route strip */}
      <section className="w-full flex justify-center overflow-x-auto px-4 py-4 md:px-10" style={{ background: 'var(--c-bg-darkalt)', scrollbarWidth: 'none' }}>
        <div className="flex flex-row items-center justify-center gap-3 min-w-max">
          <div style={{ background: 'rgba(26,122,98,0.18)', borderRadius: '6px', padding: '4px 12px', fontFamily: 'var(--font-body)', fontSize: '12px', color: 'rgba(255,255,255,0.7)', whiteSpace: 'nowrap' }}>
            <span style={{ color: 'rgba(255,255,255,0.35)', marginRight: '6px' }}>AU</span>Melbourne · Sydney · Brisbane
          </div>
          <div style={{ display: 'flex', gap: '3px', alignItems: 'center' }}>
            {[0, 1, 2].map(i => <div key={i} style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--c-teal-light)', opacity: 0.5 + i * 0.2 }} />)}
          </div>
          <div style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: 'rgba(255,255,255,0.5)', whiteSpace: 'nowrap' }}>Port of Melbourne · Jebel Ali Port · Dubai</div>
          <div style={{ display: 'flex', gap: '3px', alignItems: 'center' }}>
            {[0, 1, 2].map(i => <div key={i} style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--c-teal-light)', opacity: 0.5 + i * 0.2 }} />)}
          </div>
          <div style={{ background: 'rgba(26,122,98,0.18)', borderRadius: '6px', padding: '4px 12px', fontFamily: 'var(--font-body)', fontSize: '12px', color: 'rgba(255,255,255,0.7)', whiteSpace: 'nowrap' }}>
            <span style={{ color: 'rgba(255,255,255,0.35)', marginRight: '6px' }}>AE</span>Dubai, UAE
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="w-full px-5 py-12 md:py-16 md:px-10" style={{ background: '#f0f4f8' }}>
        <div className="mx-auto max-w-[1200px]">
          {/* Header */}
          <div className="mb-[48px]">
            <div style={{ fontFamily: 'var(--font-heading)', fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--c-teal)', fontWeight: 700, marginBottom: '10px' }}>What we do</div>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 'clamp(28px, 3.5vw, 40px)', color: 'var(--c-ink)', marginBottom: '14px', letterSpacing: '-0.02em', lineHeight: 1.1 }}>Our services</h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '15px', color: 'var(--c-ink-mid)', lineHeight: 1.8, maxWidth: '540px' }}>Select any service to learn more. Every shipment is quoted and handled personally — no online booking portals.</p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[20px]">
            {/* Card 1 */}
            <div
              className="flex flex-col bg-white overflow-hidden"
              onClick={() => setOpenServiceModal(1)}
              onMouseEnter={() => setHoveredCard(1)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                borderRadius: '10px',
                padding: '0 0 24px 0',
                borderLeft: hoveredCard ? '3px solid var(--c-teal)' : '3px solid transparent',
                boxShadow: hoveredCard ? '0 20px 48px rgba(26,122,98,0.12)' : '0 2px 8px rgba(11,18,32,0.06)',
                transform: hoveredCard ? 'translateY(-6px)' : 'translateY(0)',
                transition: 'all 0.3s cubic-bezier(0.32,0.72,0,1)',
                cursor: 'pointer'
              }}
            >
              <div style={{ overflow: 'hidden', borderRadius: '8px 8px 0 0' }}>
                <Image
                  src="/Cards/Card 1.jpg"
                  alt="Australia to Dubai"
                  width={600}
                  height={160}
                  priority={true}
                  quality={75}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAABAAEDASIAAhEBAxEB/8QAFAABAAAAAAAAAAAAAAAAAAAACf/EABQQAQAAAAAAAAAAAAAAAAAAAAD/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AJQAB/9k="
                  style={{
                    width: '100%',
                    height: '160px',
                    objectFit: 'cover',
                    borderRadius: '8px 8px 0 0',
                    transform: hoveredCard === 1 ? 'scale(1.05)' : 'scale(1)',
                    transition: 'transform 0.4s ease'
                  }}
                />
              </div>
              <div className="flex flex-col flex-1" style={{ padding: '20px 24px 0' }}>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '15px', color: 'var(--c-ink)', marginBottom: '10px' }}>Australia &rarr; Dubai (Primary Route)</h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--c-ink-mid)', lineHeight: 1.7, marginBottom: '20px' }} className="flex-1">
                  FCL and LCL container shipping from all major Australian ports direct to Jebel Ali, Dubai.
                </p>
                <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '12px', color: hoveredCard === 1 ? 'var(--c-teal)' : 'var(--c-ink-soft)', transition: 'color 0.25s', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  Learn more <span style={{ transform: hoveredCard === 1 ? 'translateX(4px)' : 'translateX(0)', transition: 'transform 0.2s', display: 'inline-block' }}>→</span>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div
              className="flex flex-col bg-white overflow-hidden"
              onClick={() => setOpenServiceModal(2)}
              onMouseEnter={() => setHoveredCard(2)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                borderRadius: '10px',
                padding: '0 0 24px 0',
                borderLeft: hoveredCard === 2 ? '3px solid var(--c-teal)' : '3px solid transparent',
                boxShadow: hoveredCard === 2 ? '0 20px 48px rgba(26,122,98,0.12)' : '0 2px 8px rgba(11,18,32,0.06)',
                transform: hoveredCard === 2 ? 'translateY(-6px)' : 'translateY(0)',
                transition: 'all 0.3s cubic-bezier(0.32,0.72,0,1)',
                cursor: 'pointer'
              }}
            >
              <div style={{ overflow: 'hidden', borderRadius: '8px 8px 0 0' }}>
                <Image
                  src="/Cards/Card 2.jpg"
                  alt="International Sea Freight"
                  width={600}
                  height={160}
                  priority={true}
                  quality={75}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAABAAEDASIAAhEBAxEB/8QAFAABAAAAAAAAAAAAAAAAAAAACf/EABQQAQAAAAAAAAAAAAAAAAAAAAD/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AJQAB/9k="
                  style={{
                    width: '100%',
                    height: '160px',
                    objectFit: 'cover',
                    borderRadius: '8px 8px 0 0',
                    transform: hoveredCard === 2 ? 'scale(1.05)' : 'scale(1)',
                    transition: 'transform 0.4s ease'
                  }}
                />
              </div>
              <div className="flex flex-col flex-1" style={{ padding: '20px 24px 0' }}>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '15px', color: 'var(--c-ink)', marginBottom: '10px' }}>International sea freight</h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--c-ink-mid)', lineHeight: 1.7, marginBottom: '20px' }} className="flex-1">
                  Global ocean freight services beyond the Australia–Dubai corridor, including Asia, Europe, and the Americas.
                </p>
                <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '12px', color: hoveredCard === 2 ? 'var(--c-teal)' : 'var(--c-ink-soft)', transition: 'color 0.25s', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  Learn more <span style={{ transform: hoveredCard === 2 ? 'translateX(4px)' : 'translateX(0)', transition: 'transform 0.2s', display: 'inline-block' }}>→</span>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div
              className="flex flex-col bg-white overflow-hidden"
              onClick={() => setOpenServiceModal(3)}
              onMouseEnter={() => setHoveredCard(3)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                borderRadius: '10px',
                padding: '0 0 24px 0',
                borderLeft: hoveredCard === 3 ? '3px solid var(--c-teal)' : '3px solid transparent',
                boxShadow: hoveredCard === 3 ? '0 20px 48px rgba(26,122,98,0.12)' : '0 2px 8px rgba(11,18,32,0.06)',
                transform: hoveredCard === 3 ? 'translateY(-6px)' : 'translateY(0)',
                transition: 'all 0.3s cubic-bezier(0.32,0.72,0,1)',
                cursor: 'pointer'
              }}
            >
              <div style={{ overflow: 'hidden', borderRadius: '8px 8px 0 0' }}>
                <Image
                  src="/Cards/Card 3.jpg"
                  alt="International Air Freight"
                  width={600}
                  height={160}
                  priority={true}
                  quality={75}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAABAAEDASIAAhEBAxEB/8QAFAABAAAAAAAAAAAAAAAAAAAACf/EABQQAQAAAAAAAAAAAAAAAAAAAAD/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AJQAB/9k="
                  style={{
                    width: '100%',
                    height: '160px',
                    objectFit: 'cover',
                    borderRadius: '8px 8px 0 0',
                    transform: hoveredCard === 3 ? 'scale(1.05)' : 'scale(1)',
                    transition: 'transform 0.4s ease'
                  }}
                />
              </div>
              <div className="flex flex-col flex-1" style={{ padding: '20px 24px 0' }}>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '15px', color: 'var(--c-ink)', marginBottom: '10px' }}>International air freight</h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--c-ink-mid)', lineHeight: 1.7, marginBottom: '20px' }} className="flex-1">
                  Time-sensitive cargo handled with care. Ideal for urgent shipments and high-value goods.
                </p>
                <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '12px', color: hoveredCard === 3 ? 'var(--c-teal)' : 'var(--c-ink-soft)', transition: 'color 0.25s', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  Learn more <span style={{ transform: hoveredCard === 3 ? 'translateX(4px)' : 'translateX(0)', transition: 'transform 0.2s', display: 'inline-block' }}>→</span>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div
              className="flex flex-col bg-white overflow-hidden"
              onClick={() => setOpenServiceModal(4)}
              onMouseEnter={() => setHoveredCard(4)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                borderRadius: '10px',
                padding: '0 0 24px 0',
                borderLeft: hoveredCard === 4 ? '3px solid var(--c-teal)' : '3px solid transparent',
                boxShadow: hoveredCard === 4 ? '0 20px 48px rgba(26,122,98,0.12)' : '0 2px 8px rgba(11,18,32,0.06)',
                transform: hoveredCard === 4 ? 'translateY(-6px)' : 'translateY(0)',
                transition: 'all 0.3s cubic-bezier(0.32,0.72,0,1)',
                cursor: 'pointer'
              }}
            >
              <div style={{ overflow: 'hidden', borderRadius: '8px 8px 0 0' }}>
                <Image
                  src="/Cards/Card 4.jpg"
                  alt="Vehicle & Automotive Transport"
                  width={600}
                  height={160}
                  priority={true}
                  quality={75}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAABAAEDASIAAhEBAxEB/8QAFAABAAAAAAAAAAAAAAAAAAAACf/EABQQAQAAAAAAAAAAAAAAAAAAAAD/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AJQAB/9k="
                  style={{
                    width: '100%',
                    height: '160px',
                    objectFit: 'cover',
                    borderRadius: '8px 8px 0 0',
                    transform: hoveredCard === 4 ? 'scale(1.05)' : 'scale(1)',
                    transition: 'transform 0.4s ease'
                  }}
                />
              </div>
              <div className="flex flex-col flex-1" style={{ padding: '20px 24px 0' }}>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '15px', color: 'var(--c-ink)', marginBottom: '10px' }}>Vehicle & automotive transport</h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--c-ink-mid)', lineHeight: 1.7, marginBottom: '20px' }} className="flex-1">
                  Open and enclosed car carriers. Auction pickups, dealership deliveries, non-runners, and prestige vehicles.
                </p>
                <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '12px', color: hoveredCard === 4 ? 'var(--c-teal)' : 'var(--c-ink-soft)', transition: 'color 0.25s', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  Learn more <span style={{ transform: hoveredCard === 4 ? 'translateX(4px)' : 'translateX(0)', transition: 'transform 0.2s', display: 'inline-block' }}>→</span>
                </div>
              </div>
            </div>

            {/* Card 5 */}
            <div
              className="flex flex-col bg-white overflow-hidden"
              onClick={() => setOpenServiceModal(5)}
              onMouseEnter={() => setHoveredCard(5)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                borderRadius: '10px',
                padding: '0 0 24px 0',
                borderLeft: hoveredCard === 5 ? '3px solid var(--c-teal)' : '3px solid transparent',
                boxShadow: hoveredCard === 5 ? '0 20px 48px rgba(26,122,98,0.12)' : '0 2px 8px rgba(11,18,32,0.06)',
                transform: hoveredCard === 5 ? 'translateY(-6px)' : 'translateY(0)',
                transition: 'all 0.3s cubic-bezier(0.32,0.72,0,1)',
                cursor: 'pointer'
              }}
            >
              <div style={{ overflow: 'hidden', borderRadius: '8px 8px 0 0' }}>
                <Image
                  src="/Cards/Card 5.jpg"
                  alt="Wharf & Container Cartage"
                  width={600}
                  height={160}
                  priority={true}
                  quality={75}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAABAAEDASIAAhEBAxEB/8QAFAABAAAAAAAAAAAAAAAAAAAACf/EABQQAQAAAAAAAAAAAAAAAAAAAAD/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AJQAB/9k="
                  style={{
                    width: '100%',
                    height: '160px',
                    objectFit: 'cover',
                    borderRadius: '8px 8px 0 0',
                    transform: hoveredCard === 5 ? 'scale(1.05)' : 'scale(1)',
                    transition: 'transform 0.4s ease'
                  }}
                />
              </div>
              <div className="flex flex-col flex-1" style={{ padding: '20px 24px 0' }}>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '15px', color: 'var(--c-ink)', marginBottom: '10px' }}>Wharf & container cartage</h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--c-ink-mid)', lineHeight: 1.7, marginBottom: '20px' }} className="flex-1">
                  Side-loaders, skeletal trailers, drop-and-swap operations from the Port of Melbourne.
                </p>
                <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '12px', color: hoveredCard === 5 ? 'var(--c-teal)' : 'var(--c-ink-soft)', transition: 'color 0.25s', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  Learn more <span style={{ transform: hoveredCard === 5 ? 'translateX(4px)' : 'translateX(0)', transition: 'transform 0.2s', display: 'inline-block' }}>→</span>
                </div>
              </div>
            </div>

            {/* Card 6 */}
            <div
              className="flex flex-col bg-white overflow-hidden"
              onClick={() => setOpenServiceModal(6)}
              onMouseEnter={() => setHoveredCard(6)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                borderRadius: '10px',
                padding: '0 0 24px 0',
                borderLeft: hoveredCard === 6 ? '3px solid var(--c-teal)' : '3px solid transparent',
                boxShadow: hoveredCard === 6 ? '0 20px 48px rgba(26,122,98,0.12)' : '0 2px 8px rgba(11,18,32,0.06)',
                transform: hoveredCard === 6 ? 'translateY(-6px)' : 'translateY(0)',
                transition: 'all 0.3s cubic-bezier(0.32,0.72,0,1)',
                cursor: 'pointer'
              }}
            >
              <div style={{ overflow: 'hidden', borderRadius: '8px 8px 0 0' }}>
                <Image
                  src="/Cards/Card 6.jpg"
                  alt="Local & Industrial Freight"
                  width={600}
                  height={160}
                  priority={true}
                  quality={75}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAABAAEDASIAAhEBAxEB/8QAFAABAAAAAAAAAAAAAAAAAAAACf/EABQQAQAAAAAAAAAAAAAAAAAAAAD/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AJQAB/9k="
                  style={{
                    width: '100%',
                    height: '160px',
                    objectFit: 'cover',
                    borderRadius: '8px 8px 0 0',
                    transform: hoveredCard === 6 ? 'scale(1.05)' : 'scale(1)',
                    transition: 'transform 0.4s ease'
                  }}
                />
              </div>
              <div className="flex flex-col flex-1" style={{ padding: '20px 24px 0' }}>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '15px', color: 'var(--c-ink)', marginBottom: '10px' }}>Local & industrial freight</h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--c-ink-mid)', lineHeight: 1.7, marginBottom: '20px' }} className="flex-1">
                  Tautliner/curtain-sider services, hot-shot urgent deliveries, and palletised goods across Australia.
                </p>
                <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '12px', color: hoveredCard === 6 ? 'var(--c-teal)' : 'var(--c-ink-soft)', transition: 'color 0.25s', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  Learn more <span style={{ transform: hoveredCard === 6 ? 'translateX(4px)' : 'translateX(0)', transition: 'transform 0.2s', display: 'inline-block' }}>→</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* How to book */}
      <section className="w-full px-5 py-16 md:py-24 md:px-10" style={{ background: 'white' }}>
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-[52px]">
            <div style={{ fontFamily: 'var(--font-heading)', fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--c-teal)', fontWeight: 700, marginBottom: '10px' }}>Simple process</div>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 'clamp(26px, 3vw, 36px)', color: 'var(--c-ink)', marginBottom: '14px', letterSpacing: '-0.02em', lineHeight: 1.1 }}>How to book with us</h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '15px', color: 'var(--c-ink-mid)', lineHeight: 1.8, maxWidth: '520px' }}>
              We don&apos;t book online. Every shipment is handled personally — so you speak to someone who knows your cargo.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {([['01', 'Browse services', 'Explore our services and identify the type of freight that matches your needs.'], ['02', 'Contact us', 'Email or call us with your cargo details — origin, destination, type, weight, and timeline.'], ['03', 'Receive a quote', 'We prepare a detailed, personalised freight quote for your specific shipment.'], ['04', 'We handle the rest', 'Once confirmed, we coordinate pickup, documentation, customs, and delivery end-to-end.']] as [string, string, string][]).map(([num, title, desc]) => (
              <div key={num} className="flex flex-col">
                <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '52px', color: 'var(--c-teal-light)', opacity: 0.2, lineHeight: 1, marginBottom: '16px', letterSpacing: '-0.04em' }}>{num}</div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '16px', color: 'var(--c-ink)', marginBottom: '8px' }}>{title}</h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--c-ink-mid)', lineHeight: 1.8 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Routes Section */}
      <section id="freight-corridors" className="w-full px-5 py-12 md:py-16 md:px-10" style={{ background: '#f0f4f8' }}>
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-[40px]">
            <div style={{ fontFamily: 'var(--font-heading)', fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--c-teal)', fontWeight: 700, marginBottom: '10px' }}>Key routes</div>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 'clamp(26px, 3vw, 36px)', color: 'var(--c-ink)', marginBottom: '28px', letterSpacing: '-0.02em', lineHeight: 1.1 }}>Our primary freight corridors</h2>
          </div>

          {/* Cards Container */}
          <div className="flex flex-col gap-[16px] w-full">
            {/* Card 1 */}
            <div className="w-full flex flex-col md:flex-row items-center justify-between" style={{ background: '#0a1628', borderRadius: '10px', padding: '28px 36px' }}>
              {/* Left Side */}
              <div className="flex flex-col text-center md:text-left mb-6 md:mb-0 w-full md:w-1/3">
                <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '20px', color: 'white' }}>Australia</div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'rgba(255,255,255,0.45)', marginTop: '4px' }}>Melbourne · Sydney · Brisbane</div>
              </div>

              {/* Middle */}
              <div className="flex flex-col items-center flex-1 w-full md:w-1/3 px-4">
                <div style={{ fontFamily: 'var(--font-body)', fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', textAlign: 'center', marginBottom: '8px' }}>Sea freight · 18–22 days transit</div>

                {/* Line with dots */}
                <div className="w-full flex items-center justify-between relative mb-3">
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--c-teal-light)', zIndex: 10 }}></div>
                  <div className="flex-1" style={{ height: '1px', background: 'var(--c-teal)', opacity: 0.4 }}></div>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--c-teal-light)', zIndex: 10 }}></div>
                  <div className="flex-1" style={{ height: '1px', background: 'var(--c-teal)', opacity: 0.4 }}></div>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--c-teal-light)', zIndex: 10 }}></div>
                </div>

                <div style={{ background: 'var(--c-teal)', color: 'white', borderRadius: '999px', padding: '4px 14px', fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '11px', marginTop: '4px' }}>Primary route</div>
              </div>

              {/* Right Side */}
              <div className="flex flex-col text-center md:text-right mt-6 md:mt-0 w-full md:w-1/3">
                <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '20px', color: 'white' }}>Dubai, UAE</div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'rgba(255,255,255,0.45)', marginTop: '4px' }}>Jebel Ali Port · Free Zones</div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="w-full flex flex-col md:flex-row items-center justify-between" style={{ background: 'var(--c-bg-dark)', borderRadius: '10px', padding: '28px 36px' }}>
              {/* Left Side */}
              <div className="flex flex-col text-center md:text-left mb-6 md:mb-0 w-full md:w-1/3">
                <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '20px', color: 'white' }}>Australia</div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'rgba(255,255,255,0.45)', marginTop: '4px' }}>All major ports</div>
              </div>

              {/* Middle */}
              <div className="flex flex-col items-center flex-1 w-full md:w-1/3 px-4">
                <div style={{ fontFamily: 'var(--font-body)', fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', textAlign: 'center', marginBottom: '8px' }}>International · multiple destinations</div>

                {/* Line with dots */}
                <div className="w-full flex items-center justify-between relative mb-3">
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--c-teal-light)', zIndex: 10 }}></div>
                  <div className="flex-1" style={{ height: '1px', background: 'var(--c-teal)', opacity: 0.4 }}></div>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--c-teal-light)', zIndex: 10 }}></div>
                  <div className="flex-1" style={{ height: '1px', background: 'var(--c-teal)', opacity: 0.4 }}></div>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--c-teal-light)', zIndex: 10 }}></div>
                </div>

                <div style={{ background: 'var(--c-teal)', color: 'white', borderRadius: '999px', padding: '4px 14px', fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '11px', marginTop: '4px' }}>Global reach</div>
              </div>

              {/* Right Side */}
              <div className="flex flex-col text-center md:text-right mt-6 md:mt-0 w-full md:w-1/3">
                <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '20px', color: 'white' }}>Worldwide</div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'rgba(255,255,255,0.45)', marginTop: '4px' }}>Asia · Europe · Americas</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="w-full px-5 py-12 md:py-16 md:px-10" style={{ background: 'white' }}>
        <div className="mx-auto max-w-[1200px] flex flex-col md:flex-row gap-[48px] items-start">
          {/* Left Column */}
          <div className="w-full md:w-[55%]">
            <div style={{ fontFamily: 'var(--font-heading)', fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--c-teal)', fontWeight: 700, marginBottom: '10px' }}>About us</div>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 'clamp(26px, 3vw, 38px)', color: 'var(--c-ink)', lineHeight: 1.1, marginBottom: '24px', letterSpacing: '-0.02em' }}>Your logistics partner, not just a carrier</h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '15px', color: 'var(--c-ink-mid)', lineHeight: 1.9, marginBottom: '16px' }}>
              PrimeLane Logistics is an Australian-based freight company specialising in container shipping, vehicle transport, and industrial freight — with a strong focus on the Australia–Dubai trade corridor.
            </p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '15px', color: 'var(--c-ink-mid)', lineHeight: 1.9, marginBottom: '32px' }}>
              We believe in doing business the right way: every client speaks to a real person, every quote is prepared individually, and every shipment is tracked with care. Fully licensed for Dangerous Goods transport (Class 2–9).
            </p>
            <Link href="/about/why-choose-us" style={{ textDecoration: 'none' }}>
              <button style={{ background: 'var(--c-teal)', color: 'white', border: 'none', padding: '13px 28px', borderRadius: '999px', fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '13px', cursor: 'pointer', letterSpacing: '0.01em', transition: 'background 0.2s' }}>
                Why choose PrimeLane
              </button>
            </Link>
          </div>

          {/* Right Column */}
          <div className="w-full md:w-[45%]">
            <div style={{ background: 'var(--c-bg-light)', borderRadius: '12px', padding: '28px' }}>
              <div>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--c-teal)', fontWeight: 700, marginBottom: '6px' }}>Based in</div>
                <div className="flex items-center">
                  <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '16px', color: 'var(--c-ink)' }}>Australia</span>
                  <span style={{ background: 'var(--c-teal)', color: 'white', borderRadius: '3px', padding: '1px 6px', fontSize: '10px', marginLeft: '8px', fontFamily: 'var(--font-heading)', fontWeight: 600 }}>AU</span>
                </div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: 'var(--c-ink-soft)', marginTop: '2px' }}>primelanelogistics.com.au</div>
              </div>
              <div style={{ height: '1px', background: 'var(--c-divider)', margin: '16px 0' }} />
              <div>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--c-teal)', fontWeight: 700, marginBottom: '6px' }}>Primary route</div>
                <div className="flex items-center">
                  <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '16px', color: 'var(--c-ink)' }}>Australia → Dubai, UAE</span>
                  <span style={{ background: 'var(--c-teal)', color: 'white', borderRadius: '3px', padding: '1px 6px', fontSize: '10px', marginLeft: '8px', fontFamily: 'var(--font-heading)', fontWeight: 600 }}>AE</span>
                </div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: 'var(--c-ink-soft)', marginTop: '2px' }}>FCL · LCL · Air · Break-bulk</div>
              </div>
              <div style={{ height: '1px', background: 'var(--c-divider)', margin: '16px 0' }} />
              <div>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--c-teal)', fontWeight: 700, marginBottom: '10px' }}>Certifications</div>
                <div className="flex flex-col gap-2">
                  {(['DG Licensed (Class 2–9)', 'International freight accredited', 'Condition report service (all vehicles)'] as string[]).map(item => (
                    <div key={item} className="flex items-center gap-2">
                      <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--c-teal)', flexShrink: 0 }} />
                      <span style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--c-ink)' }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="w-full px-5 py-16 md:py-24 md:px-10" style={{ background: 'var(--c-bg-light)' }}>
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-[48px]">
            <div style={{ fontFamily: 'var(--font-heading)', fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--c-teal)', fontWeight: 700, marginBottom: '10px' }}>Help centre</div>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 'clamp(26px, 3vw, 36px)', color: 'var(--c-ink)', letterSpacing: '-0.02em', lineHeight: 1.1 }}>Frequently asked questions</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
            {([
              ['Do you offer both FCL and LCL shipping?', 'Yes. We offer Full Container Load (FCL) for those wanting a dedicated container (highly recommended for high-value vehicles) and Less than Container Load (LCL) for smaller shipments to help keep costs down.'],
              ['What types of vehicles can I ship to Dubai?', 'We handle everything from standard passenger cars and SUVs to luxury vehicles and commercial automotive transport.'],
              ['Are you certified to handle hazardous materials?', 'Absolutely. Primelane Logistics is fully DG Certified for Classes 2 through 9, meaning we are legally qualified to transport dangerous goods that other carriers might turn away.'],
              ['How do I track my shipment?', (
                <>
                  Tracking is easy. Simply email us at <a href="mailto:contact@primelanelogistics.com.au" style={{ color: 'var(--c-teal)', fontWeight: 600, textDecoration: 'none' }}>contact@primelanelogistics.com.au</a> with your order or booking reference number, and our team will provide a real-time status update.
                </>
              )],
            ] as [string, React.ReactNode][]).map(([q, a]) => (
              <div key={q} style={{ borderTop: '1px solid var(--c-divider)', paddingTop: '20px' }}>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '15px', color: 'var(--c-ink)', marginBottom: '8px' }}>{q}</h3>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--c-ink-mid)', lineHeight: 1.8 }}>{a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GET IN TOUCH: WIDE EDITORIAL DESIGN */}
      <section id="contact" className="w-full px-5 py-32 md:py-48 md:px-10" style={{
        background: '#0B1220',
        backgroundImage: `linear-gradient(180deg, rgba(11,18,32,0.7) 0%, #0B1220 100%), url('/Logistics.webp')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Ambient glows */}
        <div style={{ position: 'absolute', top: '20%', right: '-10%', width: '50%', height: '60%', background: 'radial-gradient(circle, rgba(26,122,98,0.12) 0%, transparent 70%)', filter: 'blur(100px)', pointerEvents: 'none' }} />
        
        <div className="mx-auto max-w-[1300px] relative z-10">
          <div className="flex flex-col lg:flex-row gap-24 items-start">
            
            {/* Left Content: Editorial Typography */}
            <div className="w-full lg:w-[60%]">
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--c-teal-light)', fontWeight: 700, marginBottom: '24px', opacity: 0.8 }}>Request a quote</div>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 'clamp(32px, 8vw, 84px)', color: 'white', lineHeight: 0.9, marginBottom: '40px', letterSpacing: '-0.05em', textWrap: 'balance' }}>
                Talk directly to a <span style={{ color: 'var(--c-teal-light)' }}>freight expert.</span>
              </h2>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '20px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, marginBottom: '64px', maxWidth: '520px' }}>
                No automation, no delays. Every enquiry is handled by a dedicated coordinator who understands the nuances of Australian trade corridors.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                <div className="group">
                  <div style={{ width: '52px', height: '52px', borderRadius: '16px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px', color: 'var(--c-teal-light)', transition: 'all 0.3s' }} className="group-hover:bg-teal-500/10 group-hover:border-teal-500/30">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '13px', letterSpacing: '0.05em', textTransform: 'uppercase', color: 'white', marginBottom: '8px', opacity: 0.4 }}>Email Desk</h3>
                  <a href="mailto:contact@primelanelogistics.com.au" style={{ color: 'white', fontWeight: 600, fontFamily: 'var(--font-body)', fontSize: '17px', textDecoration: 'none', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '2px', transition: 'all 0.3s' }} className="hover:text-teal-400 hover:border-teal-400">contact@primelanelogistics.com.au</a>
                </div>

                <div className="group">
                  <div style={{ width: '52px', height: '52px', borderRadius: '16px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px', color: 'var(--c-teal-light)', transition: 'all 0.3s' }} className="group-hover:bg-teal-500/10 group-hover:border-teal-500/30">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.38a2 2 0 0 1 1.99-2.18H6.6a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.85a16 16 0 0 0 6 6l1.27-.83a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.03z"/></svg>
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '13px', letterSpacing: '0.05em', textTransform: 'uppercase', color: 'white', marginBottom: '8px', opacity: 0.4 }}>Phone Desk</h3>
                  <a href="tel:+61421821220" style={{ color: 'white', fontWeight: 600, fontFamily: 'var(--font-body)', fontSize: '17px', textDecoration: 'none', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '2px', transition: 'all 0.3s' }} className="hover:text-teal-400 hover:border-teal-400">+61 421 821 220</a>
                </div>
              </div>
            </div>

            {/* Right Content: Glassmorphic Surface */}
            <div className="w-full lg:w-[40%]">
              <div style={{ 
                background: 'rgba(255,255,255,0.03)', 
                backdropFilter: 'blur(40px)', 
                WebkitBackdropFilter: 'blur(40px)',
                border: '1px solid rgba(255,255,255,0.1)', 
                borderRadius: '32px', 
                padding: '56px 48px',
                boxShadow: '0 40px 100px rgba(0,0,0,0.4)'
              }}>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '18px', color: 'white', marginBottom: '40px', letterSpacing: '-0.02em' }}>Checklist for your enquiry</h3>
                <div className="flex flex-col gap-8">
                  {[
                    ['Cargo Type', 'Machinery, vehicles, or general goods'],
                    ['Metrics', 'Total weight and dimensions (CBM/Pallets)'],
                    ['Route', 'Exact pickup and delivery locations'],
                    ['Timeline', 'Required pickup date or urgency']
                  ].map(([label, desc]) => (
                    <div key={label} className="flex gap-5">
                      <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--c-teal-light)', flexShrink: 0, marginTop: '7px', boxShadow: '0 0 15px rgba(34,197,94,0.4)' }} />
                      <div>
                        <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '15px', color: 'white', marginBottom: '2px' }}>{label}</div>
                        <div style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'rgba(255,255,255,0.4)', lineHeight: 1.6 }}>{desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <Link href="/help-centre/contact" style={{ textDecoration: 'none' }}>
                  <button
                    style={{ 
                      width: '100%', 
                      marginTop: '56px', 
                      padding: '22px', 
                      background: 'var(--c-teal)', 
                      color: 'white', 
                      borderRadius: '16px', 
                      fontFamily: 'var(--font-heading)', 
                      fontWeight: 800, 
                      fontSize: '14px', 
                      letterSpacing: '0.08em', 
                      textTransform: 'uppercase', 
                      cursor: 'pointer', 
                      transition: 'all 0.4s cubic-bezier(0.23,1,0.32,1)', 
                      border: 'none',
                      boxShadow: '0 15px 35px rgba(26,122,98,0.3)'
                    }}
                    className="hover:scale-[1.03] hover:bg-[#15634f] hover:shadow-[0_25px_50px_rgba(26,122,98,0.4)] active:scale-[0.98]"
                  >
                    Request quote
                  </button>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Service Modal */}
      {openServiceModal && (
        <div
          onClick={() => setOpenServiceModal(null)}
          style={{ position: 'fixed', inset: 0, background: 'rgba(11,18,32,0.9)', backdropFilter: 'blur(12px)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{ background: 'white', borderRadius: '32px', maxWidth: '640px', width: '100%', maxHeight: '90vh', overflowY: 'auto', boxShadow: '0 40px 100px rgba(0,0,0,0.5)', position: 'relative' }}
          >
            <button
              onClick={() => setOpenServiceModal(null)}
              style={{ position: 'absolute', top: '24px', right: '24px', background: 'white', border: '1px solid var(--c-divider)', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', zIndex: 20 }}
              className="hover:rotate-90 transition-transform duration-300"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--c-ink)" strokeWidth="2.5"><path d="M18 6L6 18M6 6l12 12"/></svg>
            </button>

            {serviceModals.find(m => m.id === openServiceModal) && (
              <div className="flex flex-col">
                <div style={{ height: '300px', width: '100%', position: 'relative' }}>
                  <Image
                    src={`/Cards/Card ${openServiceModal}.jpg`}
                    alt="Service"
                    fill
                    priority={true}
                    quality={75}
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAABAAEDASIAAhEBAxEB/8QAFAABAAAAAAAAAAAAAAAAAAAACf/EABQQAQAAAAAAAAAAAAAAAAAAAAD/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AJQAB/9k="
                    style={{ objectFit: 'cover' }}
                  />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(11,18,32,0.9) 0%, transparent 70%)' }} />
                  <div style={{ position: 'absolute', bottom: 0, left: 0, padding: '40px' }}>
                    <div style={{ fontFamily: 'var(--font-heading)', fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--c-teal-light)', fontWeight: 700, marginBottom: '12px' }}>Service Portfolio</div>
                    <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '32px', color: 'white', margin: 0, letterSpacing: '-0.03em' }}>
                      {serviceModals.find(m => m.id === openServiceModal)?.title}
                    </h2>
                  </div>
                </div>

                <div style={{ padding: '40px' }}>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '16px', color: 'var(--c-ink-mid)', lineHeight: 1.8, marginBottom: '40px' }}>
                    {serviceModals.find(m => m.id === openServiceModal)?.subtitle}
                  </p>

                  <div className="grid gap-10">
                    {serviceModals.find(m => m.id === openServiceModal)?.sections.map((section, idx) => (
                      <div key={idx}>
                        <h4 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--c-teal)', marginBottom: '20px' }}>
                          {section.title}
                        </h4>
                        <ul className="grid gap-4">
                          {section.items.map((item, i) => (
                            <li key={i} className="flex items-start gap-4">
                              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--c-teal)', marginTop: '9px', flexShrink: 0 }} />
                              <span style={{ fontFamily: 'var(--font-body)', fontSize: '15px', color: 'var(--c-ink)', lineHeight: 1.6 }}>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ padding: '32px 40px', background: 'var(--c-bg-light)', borderTop: '1px solid var(--c-divider)', display: 'flex', flexWrap: 'wrap', gap: '24px', alignItems: 'center', justifyContent: 'space-between', borderRadius: '0 0 32px 32px' }}>
                  <Link href="/help-centre/contact" style={{ textDecoration: 'none' }}>
                    <button
                      style={{ background: 'var(--c-teal)', color: 'white', border: 'none', padding: '16px 32px', borderRadius: '999px', fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '14px', cursor: 'pointer' }}
                      className="hover:bg-[#22967A] transition-colors"
                    >
                      Request a quote
                    </button>
                  </Link>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--c-ink-mid)' }}>
                    Contact <a href="tel:+61421821220" style={{ fontWeight: 700, color: 'var(--c-teal)', textDecoration: 'none' }}>+61 421 821 220</a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  );
}


