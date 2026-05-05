"use client";

import { useChat, Chat } from '@ai-sdk/react';
import { DefaultChatTransport, isTextUIPart, UIMessage } from 'ai';
import { useState, useRef, useEffect, useMemo } from 'react';
import Image from 'next/image';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const WELCOME_TEXT =
  "Operational protocol engaged. I am Lane, your technical logistics coordinator. I specialize in AU-UAE shipping corridors, vehicle cartage, and industrial compliance. How shall we proceed with your freight query?";

function makeWelcome(): UIMessage {
  return {
    id: 'welcome-msg',
    role: 'assistant',
    parts: [{ type: 'text', text: WELCOME_TEXT }],
    metadata: undefined,
  };
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const container = useRef<HTMLDivElement>(null);

  const chat = useMemo(
    () =>
      new Chat({
        transport: new DefaultChatTransport({ api: '/api/chat' }),
        messages: [makeWelcome()],
      }),
    [],
  );

  const { messages, sendMessage, status } = useChat({ chat });

  useGSAP(() => {
    if (open) {
      // Cinematic Modal Expansion
      gsap.fromTo(".chat-window-inner", 
        { 
          clipPath: "circle(0% at 90% 90%)",
          opacity: 0,
          y: 20
        },
        { 
          clipPath: "circle(150% at 90% 90%)",
          opacity: 1, 
          y: 0,
          duration: 1.2, 
          ease: "expo.inOut" 
        }
      );
      
      gsap.from(".msg-item", {
        opacity: 0,
        x: -20,
        stagger: 0.1,
        duration: 0.8,
        ease: "power4.out",
        delay: 0.4
      });
    }
  }, { scope: container, dependencies: [open] });

  useEffect(() => {
    if (open) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, open]);

  const isLoading = status === 'streaming' || status === 'submitted';

  const handleSend = () => {
    const trimmed = input.trim();
    if (!trimmed || isLoading) return;
    setInput('');
    sendMessage({ role: 'user', parts: [{ type: 'text', text: trimmed }] });
  };

  const handleQuickAction = (action: string) => {
    sendMessage({ role: 'user', parts: [{ type: 'text', text: action }] });
  };

  const getMessageText = (msg: UIMessage): string =>
    msg.parts
      .filter(isTextUIPart)
      .map((p) => p.text)
      .join('');

  return (
    <div ref={container} className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[3000] flex flex-col items-end">
      
      {/* SECTION: CHAT ARCHITECTURE */}
      {open && (
        <div className="chat-window-inner mb-6 w-[420px] max-w-[calc(100vw-32px)] h-[700px] max-h-[calc(100vh-160px)] bg-ink border border-white/10 rounded-[3rem] shadow-[0_100px_150px_-50px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col relative origin-bottom-right">
          
          {/* Noise & Texture Overlay */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay" style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }} />
          <div className="absolute top-0 left-0 w-full h-[300px] bg-gradient-to-b from-teal/10 to-transparent pointer-events-none" />
          
          {/* Header: Editorial Glass Pill */}
          <div className="relative z-10 px-8 py-8 flex items-center justify-between">
            <div className="flex items-center gap-5">
              <div className="relative">
                <div className="w-14 h-14 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center p-1.5 overflow-hidden">
                  <Image src="/lane-logo.png" alt="Lane" width={56} height={56} className="object-cover" />
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-teal border-[4px] border-ink rounded-full animate-pulse" />
              </div>
              <div>
                <h4 className="text-white font-bold tracking-tight text-xl leading-none">Lane</h4>
                <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-teal mt-2">Technical AI Lead</p>
              </div>
            </div>
            <button 
              onClick={() => setOpen(false)}
              className="w-12 h-12 rounded-full flex items-center justify-center bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-white/40 hover:text-white"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M18 6L6 18M6 6l12 12"/></svg>
            </button>
          </div>

          {/* Message Log */}
          <div className="flex-1 overflow-y-auto px-8 py-4 space-y-10 scrollbar-hide relative z-10">
            {messages.map((m, i) => {
              const text = getMessageText(m);
              if (!text) return null;
              const isUser = m.role === 'user';
              
              return (
                <div key={m.id} className={`msg-item flex flex-col ${isUser ? 'items-end' : 'items-start'}`}>
                  {!isUser && (
                    <div className="flex items-center gap-3 mb-3">
                       <span className="text-[9px] font-mono font-bold text-teal tracking-widest uppercase">ID: CORRIDOR-ASSIST</span>
                       <div className="w-8 h-px bg-white/10" />
                    </div>
                  )}
                  <div className={`relative px-6 py-5 rounded-[1.8rem] text-[15px] leading-relaxed shadow-2xl
                    ${isUser 
                      ? 'bg-teal text-white rounded-tr-none max-w-[85%]' 
                      : 'bg-white/[0.03] text-white/80 border border-white/10 rounded-tl-none max-w-[90%]'}`}>
                    {text}
                    {isUser && <div className="absolute inset-0 rounded-inherit shadow-[inset_0_1.5px_1px_rgba(255,255,255,0.4)] pointer-events-none" />}
                  </div>
                  {!isUser && i === 0 && (
                    <div className="flex flex-wrap gap-2 mt-6">
                       {['AU-UAE Corridor', 'Vehicle Logistics', 'Shipment Tracking'].map(label => (
                         <button 
                           key={label}
                           onClick={() => handleQuickAction(label)}
                           className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold text-white/60 hover:border-teal hover:text-teal transition-all uppercase tracking-widest"
                         >
                           {label}
                         </button>
                       ))}
                    </div>
                  )}
                </div>
              );
            })}
            
            {isLoading && (
              <div className="msg-item flex flex-col items-start">
                 <div className="flex items-center gap-3 mb-3">
                    <span className="text-[9px] font-mono font-bold text-teal tracking-widest uppercase">Processing</span>
                    <div className="w-8 h-px bg-white/10 animate-pulse" />
                 </div>
                 <div className="px-6 py-5 bg-white/[0.03] border border-white/10 rounded-[1.8rem] rounded-tl-none flex gap-2">
                    {[1,2,3].map(i => (
                      <div key={i} className="w-1.5 h-1.5 rounded-full bg-teal/40 animate-bounce" style={{ animationDelay: `${i * 0.15}s` }} />
                    ))}
                 </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Action Input */}
          <div className="p-8 bg-black/60 border-t border-white/5 backdrop-blur-xl relative z-10">
            <div className="relative group">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Message Lane..."
                className="w-full bg-white/5 border border-white/10 rounded-full pl-8 pr-16 py-5 text-white text-[15px] outline-none focus:border-teal/50 transition-all placeholder:text-white/20"
                disabled={isLoading}
              />
              <button 
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="absolute right-2 top-2 w-12 h-12 bg-teal text-white rounded-full flex items-center justify-center transition-all hover:scale-105 active:scale-95 disabled:opacity-20 disabled:grayscale group-hover:shadow-[0_0_20px_rgba(26,122,98,0.4)]"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="translate-x-0.5"><path d="M5 12h14m-7-7l7 7-7 7"/></svg>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* TRIGGER SYSTEM */}
      <button
        onClick={() => setOpen(!open)}
        className="group relative w-16 h-16 md:w-20 md:h-20 bg-ink rounded-[2rem] border border-white/10 flex items-center justify-center transition-all duration-700 hover:scale-110 active:scale-95 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)]"
      >
        <div className="absolute inset-0 bg-teal/20 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-700" />
        
        {open ? (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3.5" className="relative z-10"><path d="M18 6L6 18M6 6l12 12"/></svg>
        ) : (
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center p-1 group-hover:rotate-6 transition-transform duration-500">
               <Image src="/lane-logo.png" alt="Lane" width={48} height={48} className="object-cover" />
            </div>
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-teal rounded-full border-[3px] border-ink shadow-[0_0_10px_rgba(26,122,98,0.8)]" />
          </div>
        )}
      </button>
      
    </div>
  );
}
