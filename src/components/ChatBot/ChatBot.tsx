import { useState, useRef, useEffect } from 'react';
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

const FAQ_RESPONSES: Record<string, string> = {
  'Why should I hire him?':
    'Namit is a Full Stack Developer with strong DSA skills, hands-on project experience, and a proven ability to learn and ship products quickly. He is actively looking for internship opportunities.',

  'Tell me about Mume':
    'Mume is a project built by Namit focused on solving real-world problems using modern web technologies and clean user experience.',

  "What's his tech stack?":
    'React, TypeScript, JavaScript, Node.js, Express.js, MongoDB, Docker, Git, GitHub, REST APIs and Data Structures & Algorithms.',

  'Is he open to work?':
    'Yes 🚀 Namit is actively looking for Software Development and Full Stack Engineering internship opportunities.',
};

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

    setMessages((prev) => [...prev, { role: 'user', text: msg }]);

    setIsLoading(true);

    setMessages((prev) => [
      ...prev,
      {
        role: 'typing',
        text: '● ● ●',
      },
    ]);

    setTimeout(() => {
      const reply =
        FAQ_RESPONSES[msg] ||
        `🚧 AI Portfolio Assistant is currently under development.

You can still explore my projects, skills and experience through the portfolio.

📧 Contact:
namitjoshi11@gmail.com

Full AI support coming soon 🚀`;

      setMessages((prev) => [
        ...prev.filter((m) => m.role !== 'typing'),
        { role: 'bot', text: reply },
      ]);

      setIsLoading(false);
    }, 800);
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
              Portfolio Assistant · AI Version Coming Soon 🚀
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