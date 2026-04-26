'use client';

import { useChat, Chat } from '@ai-sdk/react';
import { DefaultChatTransport, isTextUIPart, UIMessage } from 'ai';
import { useState, useRef, useEffect, useMemo } from 'react';

const WELCOME_TEXT =
  "Hi! I'm PrimeLane's freight assistant. I can help with questions about our road freight, warehousing, logistics services, shipment tracking, or general freight advice. How can I help you today?";

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
          className="mb-4 w-[360px] flex flex-col"
          style={{
            height: '520px',
            background: '#fff',
            border: '1px solid #E0E0E0',
            boxShadow: '0 8px 32px rgba(58,154,130,0.12)',
          }}
        >
          {/* Header */}
          <div
            style={{ background: '#3A9A82' }}
            className="flex items-center justify-between px-5 py-4 flex-shrink-0"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <span style={{ fontSize: '16px' }}>🚛</span>
              </div>
              <div>
                <p className="font-heading text-white text-[0.85rem] font-semibold uppercase tracking-[0.06em]">
                  PrimeLane Assistant
                </p>
                <p className="font-body text-white/70 text-[0.7rem]">Freight &amp; Logistics Support</p>
              </div>
            </div>
            <button
              id="chatbot-close"
              onClick={() => setOpen(false)}
              className="text-white/70 hover:text-white transition-colors text-xl leading-none"
              aria-label="Close chat"
            >
              ×
            </button>
          </div>

          {/* Messages */}
          <div
            className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-3"
            style={{ background: '#F7F5F0' }}
          >
            {messages.map((m) => {
              const text = getMessageText(m);
              if (!text) return null;
              return (
                <div
                  key={m.id}
                  className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {m.role === 'assistant' && (
                    <div
                      className="w-6 h-6 rounded-full flex-shrink-0 mr-2 mt-1 flex items-center justify-center"
                      style={{ background: '#3A9A82', fontSize: '11px' }}
                    >
                      🚛
                    </div>
                  )}
                  <div
                    className="max-w-[80%]"
                    style={{
                      background: m.role === 'user' ? '#3A9A82' : '#fff',
                      color: m.role === 'user' ? '#fff' : '#2C2C2C',
                      padding: '10px 14px',
                      borderRadius:
                        m.role === 'user' ? '18px 18px 4px 18px' : '18px 18px 18px 4px',
                      fontFamily: "'Open Sans', sans-serif",
                      fontSize: '0.82rem',
                      lineHeight: '1.65',
                      border: m.role === 'assistant' ? '1px solid #E0E0E0' : 'none',
                    }}
                  >
                    {text}
                  </div>
                </div>
              );
            })}

            {isLoading && (
              <div className="flex justify-start">
                <div
                  className="w-6 h-6 rounded-full flex-shrink-0 mr-2 mt-1 flex items-center justify-center"
                  style={{ background: '#3A9A82', fontSize: '11px' }}
                >
                  🚛
                </div>
                <div
                  style={{
                    background: '#fff',
                    border: '1px solid #E0E0E0',
                    padding: '10px 14px',
                    borderRadius: '18px 18px 18px 4px',
                  }}
                  className="flex items-center gap-1"
                >
                  {[0, 1, 2].map((i) => (
                    <span
                      key={i}
                      className="w-2 h-2 rounded-full inline-block"
                      style={{
                        background: '#3A9A82',
                        animation: `chatbounce 1.2s ease-in-out ${i * 0.2}s infinite`,
                      }}
                    />
                  ))}
                </div>
              </div>
            )}

            {error && (
              <p className="text-center text-[0.75rem] text-red-400 font-body">
                Connection error. Please try again.
              </p>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="flex items-center gap-2 px-4 py-3 border-t border-[#E0E0E0] flex-shrink-0 bg-white">
            <input
              id="chatbot-input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask about freight, tracking, services..."
              className="flex-1 font-body text-[0.82rem] text-[#2C2C2C] outline-none placeholder:text-[#bbb] bg-transparent"
              disabled={isLoading}
              autoComplete="off"
            />
            <button
              id="chatbot-send"
              type="button"
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-opacity disabled:opacity-40"
              style={{ background: '#3A9A82' }}
              aria-label="Send message"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path
                  d="M22 2L11 13"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M22 2L15 22L11 13L2 9L22 2Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          {/* Powered by */}
          <div className="text-center py-1 bg-white border-t border-[#E0E0E0]">
            <p className="font-body text-[#bbb] text-[0.65rem]">Powered by Gemini 2.5 Flash</p>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        id="chatbot-toggle"
        onClick={() => setOpen((o) => !o)}
        aria-label="Open freight assistant chat"
        className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-transform duration-200 hover:scale-105 active:scale-95"
        style={{ background: '#3A9A82' }}
      >
        {open ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path
              d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </button>

      <style>{`
        @keyframes chatbounce {
          0%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-6px); }
        }
      `}</style>
    </div>
  );
}
