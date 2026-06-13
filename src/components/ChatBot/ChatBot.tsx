import { useState, useRef, useEffect } from 'react';
import { RESUME_CONTEXT } from '../../data/portfolio';
import './ChatBot.css';

interface Message {
  role: 'user' | 'bot' | 'typing';
  text: string;
}

const SUGGESTIONS = [
  'Why should I hire him?',
  'Tell me about Mume',
  "What's his tech stack?",
  'Is he open to work?',
];

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'bot', text: "Hey 👋 I'm Namit's portfolio assistant. Ask me anything — his projects, stack, experience, or if he's open to work." },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const [history, setHistory] = useState<{ role: string; content: string }[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  async function sendMessage(text?: string) {
    const msg = (text ?? input).trim();
    if (!msg || isLoading) return;

    setInput('');
    setShowSuggestions(false);
    setMessages((prev) => [...prev, { role: 'user', text: msg }]);
    const newHistory = [...history, { role: 'user', content: msg }];
    setHistory(newHistory);
    setIsLoading(true);
    setMessages((prev) => [...prev, { role: 'typing', text: '● ● ●' }]);

    try {
      const res = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'claude-sonnet-4-6',
          max_tokens: 1000,
          system: RESUME_CONTEXT,
          messages: newHistory,
        }),
      });
      const data = await res.json();
      const reply = data.content?.[0]?.text || "Couldn't fetch a response — email Namit directly at namitjoshi11@gmail.com";
      setMessages((prev) => [...prev.filter((m) => m.role !== 'typing'), { role: 'bot', text: reply }]);
      setHistory((prev) => [...prev, { role: 'assistant', content: reply }]);
    } catch {
      setMessages((prev) => [...prev.filter((m) => m.role !== 'typing'), { role: 'bot', text: 'Network hiccup — reach Namit at namitjoshi11@gmail.com' }]);
    }

    setIsLoading(false);
  }

  return (
    <>
      <button className="chat-fab" onClick={() => setIsOpen((o) => !o)} title="Ask me anything">
        💬
      </button>

      <div className={`chat-window${isOpen ? ' open' : ''}`}>
        <div className="chat-header">
          <div className="chat-header-dot"></div>
          <div className="chat-header-text">
            <p className="chat-header-name">Ask Namit's Portfolio</p>
            <p className="chat-header-sub">Powered by Claude · usually instant</p>
          </div>
          <button className="chat-close" onClick={() => setIsOpen(false)}>✕</button>
        </div>

        <div className="chat-messages">
          {messages.map((m, i) => (
            <div key={i} className={`chat-msg ${m.role === 'typing' ? 'typing' : m.role}`}>
              {m.text}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {showSuggestions && (
          <div className="chat-suggestions">
            {SUGGESTIONS.map((s) => (
              <button key={s} className="chat-suggestion" onClick={() => sendMessage(s)}>
                {s}
              </button>
            ))}
          </div>
        )}

        <div className="chat-input-row">
          <input
            ref={inputRef}
            className="chat-input"
            placeholder="Ask anything..."
            maxLength={300}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(); } }}
          />
          <button className="chat-send" onClick={() => sendMessage()} disabled={isLoading}>
            ➤
          </button>
        </div>
      </div>
    </>
  );
}
