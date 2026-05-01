'use client';

import { useChat, Chat } from '@ai-sdk/react';
import { DefaultChatTransport, isTextUIPart, UIMessage } from 'ai';
import { useState, useRef, useEffect, useMemo } from 'react';

const WELCOME_TEXT =
  "Hi! I'm Lane, your PrimeLane assistant. I can help with road freight, warehousing, logistics services, or shipment tracking. How can I help you today?";

const LaneIcon = ({ size = 24 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2L20.66 7V17L12 22L3.34 17V7L12 2Z"
      fill="#639922"
    />
    <rect x="6" y="14" width="1.5" height="4" rx="0.75" fill="#C0DD97" />
    <rect x="9" y="11" width="1.5" height="7" rx="0.75" fill="#C0DD97" />
    <rect x="12" y="8" width="1.5" height="10" rx="0.75" fill="#C0DD97" />
    <rect x="15" y="6" width="1.5" height="12" rx="0.75" fill="#C0DD97" />
    <rect x="18" y="9" width="1.5" height="9" rx="0.75" fill="#C0DD97" />
  </svg>
);

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

  const chat = useMemo(
    () =>
      new Chat({
        transport: new DefaultChatTransport({ api: '/api/chat' }),
        messages: [makeWelcome()],
      }),
    [],
  );

  const { messages, sendMessage, status, error } = useChat({ chat });

  // Scroll to bottom on new message
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

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const getMessageText = (msg: UIMessage): string =>
    msg.parts
      .filter(isTextUIPart)
      .map((p) => p.text)
      .join('');

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end">
      {/* Chat Window */}
      {open && (
        <div
          id="chatbot-window"
          className="mb-5 w-[calc(100vw-32px)] sm:w-[380px] flex flex-col transition-all duration-300 ease-out"
          style={{
            height: 'min(640px, calc(100vh - 120px))',
            background: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(20px) saturate(180%)',
            WebkitBackdropFilter: 'blur(20px) saturate(180%)',
            border: '1px solid rgba(99, 153, 34, 0.15)',
            boxShadow: '0 32px 80px -16px rgba(59, 109, 17, 0.15)',
            borderRadius: '28px',
            overflow: 'hidden',
            transformOrigin: 'bottom right',
            animation: 'chat-fade-in 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        >
          {/* Header */}
          <div
            className="flex items-center justify-between px-6 py-5 flex-shrink-0"
            style={{ 
              background: '#ffffff',
              borderBottom: '1px solid rgba(99, 153, 34, 0.1)'
            }}
          >
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-11 h-11 rounded-2xl bg-[#EAF3DE] flex items-center justify-center border border-[#639922]/10 shadow-sm">
                  <LaneIcon size={40} />
                </div>
                <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full"></span>
              </div>
              <div>
                <p className="font-heading text-[#1a1a1a] text-[1.05rem] font-bold tracking-tight">
                  Lane
                </p>
                <div className="flex items-center gap-1.5">
                  <p className="font-body text-[#555555] text-[0.65rem] uppercase tracking-[0.2em] font-bold">by PrimeLane</p>
                </div>
              </div>
            </div>
            <button
              id="chatbot-close"
              onClick={() => setOpen(false)}
              className="w-9 h-9 flex items-center justify-center rounded-xl bg-black/[0.03] text-[#1a1a1a]/60 hover:text-[#1a1a1a] hover:bg-black/[0.06] transition-all active:scale-90"
              aria-label="Close chat"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div
            className="flex-1 overflow-y-auto px-6 py-6 flex flex-col gap-6"
            style={{ background: '#F7F5F0' }}
          >
            {messages.map((m, idx) => {
              const text = getMessageText(m);
              if (!text) return null;
              const isUser = m.role === 'user';
              return (
                <div
                  key={m.id}
                  className={`flex ${isUser ? 'justify-end' : 'justify-start'} animate-message-in`}
                  style={{ animationDelay: `${idx * 0.05}s` }}
                >
                  {!isUser && (
                    <div className="w-7 h-7 rounded-xl bg-white flex-shrink-0 mr-3 mt-1 flex items-center justify-center border border-black/5 shadow-sm">
                       <LaneIcon size={16} />
                    </div>
                  )}
                  <div
                    className="max-w-[85%]"
                    style={{
                      background: isUser ? '#639922' : '#ffffff',
                      color: isUser ? '#ffffff' : '#1a1a1a',
                      padding: '14px 18px',
                      borderRadius: isUser ? '24px 24px 4px 24px' : '24px 24px 24px 4px',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.9rem',
                      lineHeight: '1.6',
                      boxShadow: isUser 
                        ? '0 8px 20px -4px rgba(99, 153, 34, 0.3)' 
                        : '0 4px 12px rgba(0,0,0,0.03)',
                      border: isUser ? 'none' : '1px solid rgba(0,0,0,0.05)',
                    }}
                  >
                    {text}
                  </div>
                </div>
              );
            })}

            {isLoading && (
              <div className="flex justify-start">
                <div className="w-7 h-7 rounded-xl bg-white flex-shrink-0 mr-3 mt-1 flex items-center justify-center border border-black/5 shadow-sm">
                   <LaneIcon size={16} />
                </div>
                <div
                  style={{
                    background: '#ffffff',
                    border: '1px solid rgba(0,0,0,0.05)',
                    padding: '14px 20px',
                    borderRadius: '24px 24px 24px 4px',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.03)',
                  }}
                  className="flex items-center gap-2"
                >
                  {[0, 1, 2].map((i) => (
                    <span
                      key={i}
                      className="w-2 h-2 rounded-full inline-block"
                      style={{
                        background: '#639922',
                        opacity: 0.5,
                        animation: `chat-dot-bounce 1.4s infinite ease-in-out ${i * 0.2}s`,
                      }}
                    />
                  ))}
                </div>
              </div>
            )}

            {error && (
              <div className="mx-auto px-5 py-2.5 rounded-full bg-red-50 border border-red-100 flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                <p className="text-[0.8rem] text-red-600 font-body font-semibold">
                  Connection failed. Please retry.
                </p>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="px-6 py-5 flex-shrink-0 bg-white/40 backdrop-blur-md border-t border-black/[0.03]">
            <div className="flex items-center gap-2 p-2 pl-5 bg-white border border-black/5 rounded-[22px] focus-within:border-lane-primary/30 transition-all shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
              <input
                id="chatbot-input"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask Lane..."
                className="flex-1 font-body text-[0.95rem] text-var(--c-ink) outline-none placeholder:text-gray-400 bg-transparent"
                disabled={isLoading}
                autoComplete="off"
              />
              <button
                id="chatbot-send"
                type="button"
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="flex-shrink-0 w-10 h-10 rounded-[18px] flex items-center justify-center transition-all disabled:opacity-20 enabled:hover:bg-lane-bg enabled:active:scale-90 text-lane-primary"
                aria-label="Send message"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </button>
            </div>
            <div className="mt-3 text-center">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/[0.02] border border-black/[0.03]">
                <p className="font-body text-gray-400 text-[0.55rem] uppercase tracking-[0.25em] font-black">Lane by PrimeLane</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        id="chatbot-toggle"
        onClick={() => setOpen((o) => !o)}
        aria-label="Open assistant"
        className="group w-16 h-16 rounded-[22px] flex items-center justify-center shadow-2xl transition-all duration-400 hover:scale-110 active:scale-90 overflow-hidden"
        style={{ 
          background: 'linear-gradient(135deg, var(--c-lane-dark), var(--c-lane-primary))',
          boxShadow: '0 20px 40px -10px rgba(99, 153, 34, 0.4)'
        }}
      >
        {open ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="animate-in fade-in zoom-in duration-300">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        ) : (
          <div className="relative flex items-center justify-center">
            <div className="group-hover:scale-110 transition-transform duration-300">
               <LaneIcon size={32} />
            </div>
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full animate-ping opacity-20"></span>
          </div>
        )}
      </button>

      <style jsx>{`
        @keyframes chat-dot-bounce {
          0%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-4px); }
        }
        @keyframes chat-fade-in {
          from { opacity: 0; transform: translateY(20px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes message-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-message-in {
          animation: message-in 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}
