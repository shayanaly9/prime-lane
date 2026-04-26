import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full flex flex-col items-center">
      {/* Navigation Bar */}
      <nav className="w-full bg-white flex flex-col z-50">
        {/* Top Bar */}
        <div className="w-full flex flex-col sm:flex-row justify-between items-center text-[0.8rem] font-body text-[#555] max-w-[950px] mx-auto px-10 py-2 gap-2 sm:gap-0">
          <span>+1 234 567 8900</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-teal-DEFAULT transition-colors">Facebook</a>
            <a href="#" className="hover:text-teal-DEFAULT transition-colors">Twitter</a>
            <a href="#" className="hover:text-teal-DEFAULT transition-colors">LinkedIn</a>
          </div>
        </div>
        
        <div className="w-full border-b border-[#E0E0E0]"></div>

        {/* Main Nav */}
        <div className="w-full flex flex-col lg:flex-row justify-between items-center max-w-[950px] mx-auto px-10 py-5 gap-4 lg:gap-0">
          <div className="font-heading font-normal text-[1.2rem] tracking-wide text-teal-DEFAULT uppercase">
            YOUR BRAND
          </div>
          <div className="flex flex-wrap justify-center items-center gap-4 lg:gap-8 font-heading text-[0.85rem] text-[#2C2C2C]">
            <a href="#" className="hover:text-teal-DEFAULT transition-colors">HOME</a>
            <a href="#" className="hover:text-teal-DEFAULT transition-colors">ABOUT</a>
            <a href="#" className="hover:text-teal-DEFAULT transition-colors">SERVICES</a>
            
            <div className="relative group cursor-pointer" tabIndex={0}>
              <span className="hover:text-teal-DEFAULT transition-colors flex items-center gap-1">MORE ▾</span>
              <div className="absolute top-full right-0 mt-4 bg-white border border-[#E0E0E0] hidden group-hover:flex group-focus:flex group-focus-within:flex flex-col min-w-[160px] shadow-sm z-50">
                <a href="#" className="px-5 py-3 hover:bg-[#F7F5F0] hover:text-teal-DEFAULT transition-colors uppercase border-b border-[#E0E0E0] last:border-b-0">MEET</a>
                <a href="#" className="px-5 py-3 hover:bg-[#F7F5F0] hover:text-teal-DEFAULT transition-colors uppercase border-b border-[#E0E0E0] last:border-b-0">CAREERS</a>
                <a href="#" className="px-5 py-3 hover:bg-[#F7F5F0] hover:text-teal-DEFAULT transition-colors uppercase border-b border-[#E0E0E0] last:border-b-0">NEWS</a>
              </div>
            </div>

            <a href="/contact" className="border-[1.5px] border-teal-DEFAULT rounded-[50px] text-teal-DEFAULT px-5 py-[8px] bg-transparent font-heading text-[0.85rem] transition-colors duration-200 hover:bg-teal-DEFAULT hover:text-white">
              GET IN TOUCH
            </a>
          </div>
        </div>
      </nav>

      <section className="bg-white w-full">
        <div className="mx-auto max-w-[950px] px-10 py-20 text-center">
          <h1 className="font-heading font-light text-6xl uppercase text-teal-DEFAULT tracking-wide mb-2 leading-tight">
            YOUR BRAND<br />NAME HERE
          </h1>
          <p className="font-heading font-normal text-base text-teal-DEFAULT mt-2">
            Your Brand Tagline
          </p>
          <div className="mt-8 flex justify-center">
            <button className="border-[1.5px] border-teal-DEFAULT rounded-[50px] text-teal-DEFAULT px-7 py-2 bg-transparent font-heading transition-colors duration-200 hover:bg-teal-DEFAULT hover:text-white">
              GET STARTED
            </button>
          </div>
        </div>
        <div className="w-full h-[320px] relative">
          <Image
            src="/Hero-Banner.jpeg"
            alt="Hero Banner"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full bg-teal-DEFAULT text-white py-[80px] px-10">
        <div className="mx-auto max-w-[950px] text-center flex flex-col items-center">
          <h2 className="font-heading font-semibold text-[1.8rem] uppercase tracking-wide mb-2">
            SERVICES
          </h2>
          <p className="font-heading font-normal text-base mb-[32px]">
            What we do best
          </p>

          <button className="border-[1.5px] border-white rounded-[50px] text-white px-7 py-2 bg-transparent font-heading transition-colors duration-200 hover:bg-white hover:text-teal-DEFAULT mb-[80px]">
            LET&apos;S TALK
          </button>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px]">
            <div className="flex flex-col items-center text-center">
              <div className="w-full h-[200px] relative mb-4 overflow-hidden rounded">
                <Image src="/Road-Freight.jpeg" alt="Road Freight" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
              </div>
              <h3 className="font-heading font-semibold text-[0.85rem] uppercase tracking-[0.08em] mb-4">ROAD FREIGHT</h3>
              <p className="font-body font-light text-[0.85rem] leading-[1.7] mb-8">
                Reliable delivery across the country. Our modern fleet ensures your goods arrive safely and on time.
              </p>
              <button className="mt-auto border-[1.5px] border-white rounded-[50px] text-white px-6 py-2 bg-transparent font-heading text-sm transition-colors duration-200 hover:bg-white hover:text-teal-DEFAULT">
                LEARN MORE
              </button>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-full h-[200px] relative mb-4 overflow-hidden rounded">
                <Image src="/Warehousing.jpeg" alt="Warehousing" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
              </div>
              <h3 className="font-heading font-semibold text-[0.85rem] uppercase tracking-[0.08em] mb-4">WAREHOUSING</h3>
              <p className="font-body font-light text-[0.85rem] leading-[1.7] mb-8">
                Secure storage solutions. State-of-the-art facilities equipped with advanced inventory management.
              </p>
              <button className="mt-auto border-[1.5px] border-white rounded-[50px] text-white px-6 py-2 bg-transparent font-heading text-sm transition-colors duration-200 hover:bg-white hover:text-teal-DEFAULT">
                LEARN MORE
              </button>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-full h-[200px] relative mb-4 overflow-hidden rounded">
                <Image src="/Logistics.jpeg" alt="Logistics" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
              </div>
              <h3 className="font-heading font-semibold text-[0.85rem] uppercase tracking-[0.08em] mb-4">LOGISTICS</h3>
              <p className="font-body font-light text-[0.85rem] leading-[1.7] mb-8">
                End-to-end supply chain management. We optimize your distribution network for peak efficiency.
              </p>
              <button className="mt-auto border-[1.5px] border-white rounded-[50px] text-white px-6 py-2 bg-transparent font-heading text-sm transition-colors duration-200 hover:bg-white hover:text-teal-DEFAULT">
                LEARN MORE
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Consulting / Story Section */}
      <section className="w-full bg-white text-center py-[80px] px-10">
        <div className="mx-auto max-w-[660px] flex flex-col items-center">
          <h2 className="font-heading font-light text-[2.5rem] leading-tight uppercase text-teal-DEFAULT mb-2">
            YOUR LOGISTICS<br />PARTNER
          </h2>
          <span className="font-heading font-normal text-teal-DEFAULT text-base mb-[24px]">
            The Story
          </span>
          <p className="font-body font-normal text-[#555] text-[0.9rem] leading-relaxed mb-8">
            Since our founding, we have been committed to providing top-tier logistics and freight solutions. We believe in transparency, speed, and absolute reliability for every client, big or small.
          </p>
          <button className="border-[1.5px] border-teal-DEFAULT rounded-[50px] text-teal-DEFAULT px-8 py-[10px] bg-transparent font-heading transition-colors duration-200 hover:bg-teal-DEFAULT hover:text-white mb-[80px]">
            READ MORE
          </button>
        </div>

        {/* Blog / Article Cards */}
        <div className="mx-auto max-w-[950px] grid grid-cols-1 md:grid-cols-3 gap-[30px] text-left">
          {/* Card 1 */}
          <div className="flex flex-col group cursor-pointer">
            <div className="w-full h-[180px] relative mb-4 overflow-hidden">
              <Image src="/Blog 1 — Supply Chain.jpeg" alt="Supply Chain" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-opacity duration-200 group-hover:opacity-90" />
            </div>
            <h3 className="font-heading text-teal-DEFAULT text-[1rem] leading-snug mb-3">
              How to Optimize Your Supply Chain in 2024
            </h3>
            <div className="flex items-center text-[#999] text-sm mt-auto">
              <span className="mr-3 flex items-center">👁 1.2k</span>
              <span className="mr-auto flex items-center">💬 34</span>
              <span className="flex items-center">♥ 12</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col group cursor-pointer">
            <div className="w-full h-[180px] relative mb-4 overflow-hidden">
              <Image src="/Blog 2 — Automated Warehousing.jpeg" alt="Automated Warehousing" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-opacity duration-200 group-hover:opacity-90" />
            </div>
            <h3 className="font-heading text-teal-DEFAULT text-[1rem] leading-snug mb-3">
              The Future of Automated Warehousing
            </h3>
            <div className="flex items-center text-[#999] text-sm mt-auto">
              <span className="mr-3 flex items-center">👁 850</span>
              <span className="mr-auto flex items-center">💬 18</span>
              <span className="flex items-center">♥ 45</span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col group cursor-pointer">
            <div className="w-full h-[180px] relative mb-4 overflow-hidden">
              <Image src="/Blog 3 — Human Oversight.jpeg" alt="Human Oversight" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-opacity duration-200 group-hover:opacity-90" />
            </div>
            <h3 className="font-heading text-teal-DEFAULT text-[1rem] leading-snug mb-3">
              Why Human Oversight is Still Necessary in Logistics
            </h3>
            <div className="flex items-center text-[#999] text-sm mt-auto">
              <span className="mr-3 flex items-center">👁 2.4k</span>
              <span className="mr-auto flex items-center">💬 52</span>
              <span className="flex items-center">♥ 104</span>
            </div>
          </div>
        </div>
      </section>

      {/* Help Centre Section */}
      <section className="w-full bg-white text-center py-[80px] px-10">
        <div className="mx-auto max-w-[950px] flex flex-col items-center">
          <h2 className="font-heading font-light text-[2.5rem] leading-tight uppercase text-teal-DEFAULT mb-[48px]">
            HELP CENTRE
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[60px] gap-y-[48px] text-left mb-[60px] w-full">
            {/* FAQ 1 */}
            <div>
              <h3 className="font-heading text-[0.85rem] tracking-[0.05em] uppercase text-teal-DEFAULT font-bold mb-[14px]">
                WHAT ARE YOUR TRANSIT TIMES?
              </h3>
              <p className="font-body text-[0.85rem] text-[#555] leading-[1.75]">
                Transit times depend on the destination and service level selected. Standard road freight typical takes 2-5 business days across major routes.
              </p>
            </div>
            {/* FAQ 2 */}
            <div>
              <h3 className="font-heading text-[0.85rem] tracking-[0.05em] uppercase text-teal-DEFAULT font-bold mb-[14px]">
                DO YOU OFFER WAREHOUSING?
              </h3>
              <p className="font-body text-[0.85rem] text-[#555] leading-[1.75]">
                Yes, we provide both short-term and integrated long-term warehousing solutions at our secure, modern facilities.
              </p>
            </div>
            {/* FAQ 3 */}
            <div>
              <h3 className="font-heading text-[0.85rem] tracking-[0.05em] uppercase text-teal-DEFAULT font-bold mb-[14px]">
                HOW CAN I TRACK MY SHIPMENT?
              </h3>
              <p className="font-body text-[0.85rem] text-[#555] leading-[1.75]">
                Every client is provided access to our digital portal, where you can trace shipments in real-time using your consignment number.
              </p>
            </div>
            {/* FAQ 4 */}
            <div>
              <h3 className="font-heading text-[0.85rem] tracking-[0.05em] uppercase text-teal-DEFAULT font-bold mb-[14px]">
                WHAT INDUSTRIES DO YOU SERVE?
              </h3>
              <p className="font-body text-[0.85rem] text-[#555] leading-[1.75]">
                We serve a wide variety of sectors including retail, manufacturing, FMCG, automotive, and specialized project freight.
              </p>
            </div>
          </div>

          <a href="/contact" className="border-[1.5px] border-teal-DEFAULT rounded-[50px] text-teal-DEFAULT px-8 py-[10px] bg-transparent font-heading transition-colors duration-200 hover:bg-teal-DEFAULT hover:text-white">
            GET IN TOUCH
          </a>
        </div>
      </section>

      {/* Image Grid Section */}
      <section className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 w-full">
          <div className="w-full h-[300px] relative">
            <Image src="/Tile1-VehicleAutomotive.jpeg" alt="Vehicle Automotive" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
          </div>
          <div className="w-full h-[300px] relative">
            <Image src="/Tile 2 — Warehousing.jpeg" alt="Warehousing Tile" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
          </div>
          <div className="w-full h-[300px] relative">
            <Image src="/Tile 3 — TeamOperations.jpeg" alt="Team Operations" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="w-full flex flex-col">
        {/* Upper Footer */}
        <div className="w-full bg-teal-DEFAULT text-white pb-[40px] pt-[60px] px-10 text-center">
          <h2 className="font-heading font-light text-[2.5rem] tracking-wide uppercase mb-2">
            YOUR BRAND NAME HERE
          </h2>
          <p className="font-heading font-normal text-white/90 text-[1rem] mb-[32px]">
            Your Brand Tagline
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-[48px] gap-y-[16px] justify-center max-w-[600px] mx-auto text-center font-heading text-[0.85rem] tracking-[0.05em] uppercase underline">
            <a href="#" className="hover:text-teal-light transition-colors">ABOUT</a>
            <a href="#" className="hover:text-teal-light transition-colors">SERVICES</a>
            <a href="#" className="hover:text-teal-light transition-colors">CONTACT</a>
            <a href="#" className="hover:text-teal-light transition-colors">MEDIA</a>
            <a href="#" className="hover:text-teal-light transition-colors">CIRCULAR LOGISTICS</a>
            <a href="#" className="hover:text-teal-light transition-colors">MEET</a>
          </div>
        </div>

        {/* Lower Footer */}
        <div className="w-full bg-teal-dark text-white pt-[32px] px-[60px] pb-[12px] text-[0.8rem]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-[32px] max-w-[950px] mx-auto">
            <div className="font-heading font-semibold text-[1rem] uppercase tracking-wider">
              YOUR BRAND<br />NAME HERE
            </div>
            <div>
              <p className="font-heading uppercase tracking-[0.05em] mb-2 font-bold text-sm">Contact</p>
              <p className="font-body opacity-80 mb-1">info@yourbrand.com</p>
              <p className="font-body opacity-80">+1 234 567 8900</p>
            </div>
            <div>
              <p className="font-heading uppercase tracking-[0.05em] mb-2 font-bold text-sm">Follow</p>
              <div className="flex gap-4 font-body opacity-80">
                <a href="#" className="hover:opacity-100 transition-opacity">Facebook</a>
                <a href="#" className="hover:opacity-100 transition-opacity">Twitter</a>
                <a href="#" className="hover:opacity-100 transition-opacity">LinkedIn</a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/15 pt-[12px] pb-2 text-center text-[0.75rem] text-white/70 font-body">
            © 2026 by Your Brand. All Rights Reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}


