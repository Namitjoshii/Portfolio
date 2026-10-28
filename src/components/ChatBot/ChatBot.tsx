import { useState, useRef, useEffect } from 'react';
import '../ChatBot/ChatBot.css';

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

const FALLBACK_REPLY =
  "Sorry, I can't answer right now. You can reach Namit directly at namitjoshi11@gmail.com.";

// Asks our own server (api/chat.ts), which talks to Gemini. The secret key
// never reaches the browser.
async function askAssistant(history: Message[]): Promise<string> {
  const response = await fetch('/api/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      messages: history
        .filter((m) => m.role === 'user' || m.role === 'bot')
        .map((m) => ({ role: m.role, text: m.text })),
    }),
  });

  const data = (await response.json().catch(() => null)) as {
    reply?: string;
    error?: string;
  } | null;

  if (response.ok && data?.reply) return data.reply;
  if (response.status === 429 && data?.error) return data.error;
  throw new Error(data?.error ?? `Request failed (${response.status})`);
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);

  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'bot',
      text: "Hey 👋 I'm Namit's portfolio assistant. Ask me anything about his projects, tech stack, experience or internship availability.",
    },
  ]);

  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: 'smooth',
    });
  }, [messages]);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  async function sendMessage(text?: string) {
    const msg = (text ?? input).trim();

    if (!msg || isLoading) return;

    setInput('');
    setShowSuggestions(false);

    const userMessage: Message = { role: 'user', text: msg };
    const history = [...messages, userMessage];

    setMessages([...history, { role: 'typing', text: '● ● ●' }]);
    setIsLoading(true);

    let reply: string;
    try {
      reply = await askAssistant(history);
    } catch (err) {
      console.error(err);
      reply = FALLBACK_REPLY;
    }

    setMessages((prev) => [
      ...prev.filter((m) => m.role !== 'typing'),
      { role: 'bot', text: reply },
    ]);
    setIsLoading(false);
  }

  return (
    <>
      <button
        className="chat-fab"
        onClick={() => setIsOpen((o) => !o)}
        title="Ask me anything"
      >
        💬
      </button>

      <div className={`chat-window${isOpen ? ' open' : ''}`}>
        <div className="chat-header">
          <div className="chat-header-dot"></div>

          <div className="chat-header-text">
            <p className="chat-header-name">
              Ask Namit's Portfolio
            </p>

            <p className="chat-header-sub">
              Portfolio Assistant · Powered by Gemini
            </p>
          </div>

          <button
            className="chat-close"
            onClick={() => setIsOpen(false)}
          >
            ✕
          </button>
        </div>

        <div className="chat-messages">
          {messages.map((m, i) => (
            <div
              key={i}
              className={`chat-msg ${
                m.role === 'typing'
                  ? 'typing'
                  : m.role
              }`}
            >
              {m.text}
            </div>
          ))}

          <div ref={messagesEndRef} />
        </div>

        {showSuggestions && (
          <div className="chat-suggestions">
            {SUGGESTIONS.map((s) => (
              <button
                key={s}
                className="chat-suggestion"
                onClick={() => sendMessage(s)}
              >
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
            onChange={(e) =>
              setInput(e.target.value)
            }
            onKeyDown={(e) => {
              if (
                e.key === 'Enter' &&
                !e.shiftKey
              ) {
                e.preventDefault();
                sendMessage();
              }
            }}
          />

          <button
            className="chat-send"
            onClick={() => sendMessage()}
            disabled={isLoading}
          >
            ➤
          </button>
        </div>
      </div>
    </>
  );
}