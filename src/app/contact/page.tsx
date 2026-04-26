'use client';

import { useState } from 'react';

type FormState = 'idle' | 'loading' | 'success' | 'error';

const SERVICES = [
  'Road Freight',
  'Warehousing',
  'Logistics & Supply Chain',
  'Freight Consulting',
  'Other',
];

export default function ContactPage() {
  const [state, setState] = useState<FormState>('idle');
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState('loading');
    try {
      const res = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setState('success');
        setForm({ name: '', email: '', phone: '', company: '', service: '', message: '' });
      } else {
        setState('error');
      }
    } catch {
      setState('error');
    }
  };

  return (
    <main className="w-full flex flex-col items-center">
      {/* Hero */}
      <section className="w-full bg-[#3A9A82] text-white py-[80px] px-10 text-center">
        <div className="mx-auto max-w-[950px]">
          <h1 className="font-heading font-light text-[3.5rem] uppercase tracking-wide mb-2 leading-tight">
            GET IN<br />TOUCH
          </h1>
          <p className="font-heading font-normal text-base text-white/90">
            We&apos;d love to hear from you. Tell us what you need.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="w-full bg-white py-[80px] px-10">
        <div className="mx-auto max-w-[950px] grid grid-cols-1 md:grid-cols-[1fr_320px] gap-[60px]">
          
          {/* Form */}
          <div>
            <h2 className="font-heading font-semibold text-[1.4rem] uppercase text-[#3A9A82] tracking-wide mb-[32px]">
              Send an Enquiry
            </h2>

            {state === 'success' && (
              <div className="mb-6 p-5 border border-[#3A9A82] bg-[#3A9A82]/5 text-center">
                <p className="font-heading text-[#3A9A82] text-sm uppercase tracking-[0.05em] font-semibold">
                  Message Sent Successfully
                </p>
                <p className="font-body text-[#555] text-sm mt-1">
                  We&apos;ll get back to you within 1 business day.
                </p>
              </div>
            )}

            {state === 'error' && (
              <div className="mb-6 p-5 border border-red-300 bg-red-50 text-center">
                <p className="font-heading text-red-600 text-sm uppercase tracking-[0.05em] font-semibold">
                  Something went wrong
                </p>
                <p className="font-body text-[#555] text-sm mt-1">
                  Please try again or email us directly.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label className="font-heading text-[0.75rem] uppercase tracking-[0.08em] text-[#3A9A82] font-semibold">
                    Full Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Smith"
                    className="border border-[#E0E0E0] px-4 py-3 font-body text-sm text-[#2C2C2C] outline-none focus:border-[#3A9A82] transition-colors bg-white placeholder:text-[#bbb]"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-heading text-[0.75rem] uppercase tracking-[0.08em] text-[#3A9A82] font-semibold">
                    Email Address <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                    className="border border-[#E0E0E0] px-4 py-3 font-body text-sm text-[#2C2C2C] outline-none focus:border-[#3A9A82] transition-colors bg-white placeholder:text-[#bbb]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label className="font-heading text-[0.75rem] uppercase tracking-[0.08em] text-[#3A9A82] font-semibold">
                    Phone Number
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+1 234 567 8900"
                    className="border border-[#E0E0E0] px-4 py-3 font-body text-sm text-[#2C2C2C] outline-none focus:border-[#3A9A82] transition-colors bg-white placeholder:text-[#bbb]"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-heading text-[0.75rem] uppercase tracking-[0.08em] text-[#3A9A82] font-semibold">
                    Company
                  </label>
                  <input
                    id="contact-company"
                    type="text"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Your Company Ltd."
                    className="border border-[#E0E0E0] px-4 py-3 font-body text-sm text-[#2C2C2C] outline-none focus:border-[#3A9A82] transition-colors bg-white placeholder:text-[#bbb]"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-heading text-[0.75rem] uppercase tracking-[0.08em] text-[#3A9A82] font-semibold">
                  Service of Interest
                </label>
                <select
                  id="contact-service"
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className="border border-[#E0E0E0] px-4 py-3 font-body text-sm text-[#2C2C2C] outline-none focus:border-[#3A9A82] transition-colors bg-white appearance-none cursor-pointer"
                >
                  <option value="">Select a service...</option>
                  {SERVICES.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-heading text-[0.75rem] uppercase tracking-[0.08em] text-[#3A9A82] font-semibold">
                  Message <span className="text-red-400">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={6}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your freight requirements, volume, routes, timelines..."
                  className="border border-[#E0E0E0] px-4 py-3 font-body text-sm text-[#2C2C2C] outline-none focus:border-[#3A9A82] transition-colors bg-white resize-none placeholder:text-[#bbb]"
                />
              </div>

              <button
                id="contact-submit"
                type="submit"
                disabled={state === 'loading'}
                className="border-[1.5px] border-[#3A9A82] rounded-[50px] text-[#3A9A82] px-10 py-[12px] bg-transparent font-heading text-[0.9rem] transition-colors duration-200 hover:bg-[#3A9A82] hover:text-white disabled:opacity-50 disabled:cursor-not-allowed self-start"
              >
                {state === 'loading' ? 'SENDING...' : 'SEND ENQUIRY'}
              </button>
            </form>
          </div>

          {/* Info Panel */}
          <div className="flex flex-col gap-8">
            <div>
              <h3 className="font-heading font-semibold text-[0.75rem] uppercase tracking-[0.08em] text-[#3A9A82] mb-4">
                CONTACT DETAILS
              </h3>
              <p className="font-body text-[0.85rem] text-[#555] leading-[1.75] mb-1">info@primelane.com</p>
              <p className="font-body text-[0.85rem] text-[#555] leading-[1.75]">+1 234 567 8900</p>
            </div>

            <div>
              <h3 className="font-heading font-semibold text-[0.75rem] uppercase tracking-[0.08em] text-[#3A9A82] mb-4">
                OFFICE HOURS
              </h3>
              <p className="font-body text-[0.85rem] text-[#555] leading-[1.75]">Monday – Friday</p>
              <p className="font-body text-[0.85rem] text-[#555] leading-[1.75]">8:00 AM – 6:00 PM</p>
            </div>

            <div>
              <h3 className="font-heading font-semibold text-[0.75rem] uppercase tracking-[0.08em] text-[#3A9A82] mb-4">
                RESPONSE TIME
              </h3>
              <p className="font-body text-[0.85rem] text-[#555] leading-[1.75]">
                We respond to all enquiries within 1 business day. For urgent freight needs, call us directly.
              </p>
            </div>

            <div className="border-t border-[#E0E0E0] pt-8">
              <h3 className="font-heading font-semibold text-[0.75rem] uppercase tracking-[0.08em] text-[#3A9A82] mb-4">
                SERVICES
              </h3>
              <ul className="flex flex-col gap-2">
                {SERVICES.slice(0, 4).map((s) => (
                  <li key={s} className="font-body text-[0.85rem] text-[#555] flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#3A9A82] inline-block flex-shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full flex flex-col">
        <div className="w-full bg-[#3A9A82] text-white pb-[40px] pt-[60px] px-10 text-center">
          <h2 className="font-heading font-light text-[2.5rem] tracking-wide uppercase mb-2">
            PRIMELANE FREIGHT
          </h2>
          <p className="font-heading font-normal text-white/90 text-[1rem] mb-[32px]">
            Your Trusted Logistics Partner
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-[48px] gap-y-[16px] justify-center max-w-[600px] mx-auto text-center font-heading text-[0.85rem] tracking-[0.05em] uppercase underline">
            <a href="/" className="hover:text-[#4DB896] transition-colors">HOME</a>
            <a href="#" className="hover:text-[#4DB896] transition-colors">SERVICES</a>
            <a href="/contact" className="hover:text-[#4DB896] transition-colors">CONTACT</a>
            <a href="#" className="hover:text-[#4DB896] transition-colors">ABOUT</a>
            <a href="#" className="hover:text-[#4DB896] transition-colors">CAREERS</a>
            <a href="#" className="hover:text-[#4DB896] transition-colors">MEDIA</a>
          </div>
        </div>
        <div className="w-full bg-[#2E7D67] text-white pt-[32px] px-[60px] pb-[12px] text-[0.8rem]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-[32px] max-w-[950px] mx-auto">
            <div className="font-heading font-semibold text-[1rem] uppercase tracking-wider">
              PRIMELANE<br />FREIGHT
            </div>
            <div>
              <p className="font-heading uppercase tracking-[0.05em] mb-2 font-bold text-sm">Contact</p>
              <p className="font-body opacity-80 mb-1">info@primelane.com</p>
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
            © 2026 by PrimeLane Freight. All Rights Reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
