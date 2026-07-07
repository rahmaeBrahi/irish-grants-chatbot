'use client';

import React, { useState, useRef, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const GRANTS = [
  { id: 1, name: 'Priming Grant', provider: 'LEO', amount: 'Up to €80k', target: 'Startups < 18m, < 10 staff' },
  { id: 2, name: 'Business Expansion', provider: 'LEO', amount: 'Up to €80k', target: 'Trading 18m+, < 10 staff' },
  { id: 3, name: 'Feasibility Study', provider: 'LEO', amount: 'Max €15k', target: 'Pre-launch concept validation' },
  { id: 4, name: 'Trading Online Voucher', provider: 'LEO', amount: 'Max €2.5k', target: 'Micro-enterprises going online' },
  { id: 5, name: 'Grow Digital Voucher', provider: 'LEO', amount: '€500–€5,000', target: 'SMEs with 1–50 staff' },
  { id: 6, name: 'Digital for Business', provider: 'LEO', amount: 'FREE Audit', target: 'SMEs with 1–50 staff' },
  { id: 7, name: 'Innovation Voucher', provider: 'EI', amount: '€10k–€20k', target: 'Registered ltd company' },
  { id: 8, name: 'HPSU Equity', provider: 'EI', amount: '€50k–€800k+', target: 'High-potential export startups' },
  { id: 9, name: 'Energy Efficiency', provider: 'LEO', amount: 'Up to €10k', target: 'Businesses 1–50 staff' },
  { id: 10, name: 'Google Ad Grants', provider: 'Google', amount: '$10k/mo', target: 'Registered charities (CHY)' },
];

export default function Home() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, loading]);

  const handleSendMessage = async (textToSend: string) => {
    if (!textToSend.trim()) return;

    const userMessage: Message = { role: 'user', content: textToSend };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: updatedMessages }),
      });

      const data = await response.json();
      if (response.ok && data.message) {
        setMessages((prev) => [...prev, { role: 'assistant', content: data.message }]);
      } else {
        setMessages((prev) => [
          ...prev,
          {
            role: 'assistant',
            content: `⚠️ **Error:** ${data.error || 'Something went wrong on our end. Please try again.'}`,
          },
        ]);
      }
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: '⚠️ **Connection Error:** Failed to connect to server. Please check your internet connection and try again.',
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSendMessage(input);
  };

  const handleReset = () => {
    setMessages([]);
    setInput('');
  };

  const handleGrantClick = (grantName: string) => {
    handleSendMessage(`Tell me about the ${grantName} details and eligibility criteria, please.`);
  };

  return (
    <div className="app-container">
      {/* Sidebar with Grants List */}
      <aside className="sidebar">
        <div className="sidebar-header">
          <div className="sidebar-logo">☘️</div>
          <div className="sidebar-title">
            <h1>Irish Grants Bot</h1>
            <div className="sidebar-subtitle">Eligibility Advisor</div>
          </div>
        </div>
        <div className="grants-list-container">
          <h2 className="grants-list-title">Enterprise Supports</h2>
          {GRANTS.map((grant) => (
            <div
              key={grant.id}
              className="grant-item"
              onClick={() => handleGrantClick(grant.name)}
            >
              <div className="grant-item-name">{grant.name}</div>
              <div className="grant-item-meta">
                <span>{grant.provider}</span>
                <span>{grant.amount}</span>
              </div>
            </div>
          ))}
        </div>
      </aside>

      {/* Main Chat Layout */}
      <main className="chat-area">
        <header className="chat-header">
          <div className="chat-header-info">
            <h2>Irish Grants Eligibility Advisor</h2>
            <div className="chat-status">Online & Ready</div>
          </div>
          {messages.length > 0 && (
            <button className="reset-btn" onClick={handleReset}>
              New Chat
            </button>
          )}
        </header>

        {/* Chat Messages */}
        <div className="messages-container">
          {messages.length === 0 ? (
            <div className="welcome-screen">
              <div className="welcome-icon">☘️</div>
              <h3>How's the form? Let's check your grants!</h3>
              <p>
                I am here to guide you through grant eligibility criteria for Irish startups, SMEs, and non-profits. Select a grant from the sidebar or click a suggested query below to get started.
              </p>
              <div className="suggested-questions">
                <button
                  className="suggested-btn"
                  onClick={() => handleSendMessage('Am I eligible for the LEO Priming Grant?')}
                >
                  👉 Am I eligible for the LEO Priming Grant?
                </button>
                <button
                  className="suggested-btn"
                  onClick={() => handleSendMessage('What is required for a Trading Online Voucher (TOV)?')}
                >
                  👉 What is required for a Trading Online Voucher?
                </button>
                <button
                  className="suggested-btn"
                  onClick={() => handleSendMessage("We are trading for 2 years and want to expand. What's available?")}
                >
                  👉 Trading 2+ years and expanding?
                </button>
                <button
                  className="suggested-btn"
                  onClick={() => handleSendMessage('Can I get funded retrospectively for costs I already paid?')}
                >
                  👉 Can I get funded retrospectively?
                </button>
              </div>
            </div>
          ) : (
            messages.map((msg, index) => (
              <div key={index} className={`message-row ${msg.role}`}>
                <div className="message-bubble">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {msg.content}
                  </ReactMarkdown>
                </div>
              </div>
            ))
          )}

          {loading && (
            <div className="message-row assistant">
              <div className="message-bubble">
                <div className="typing-indicator">
                  <div className="typing-dot"></div>
                  <div className="typing-dot"></div>
                  <div className="typing-dot"></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Chat Input */}
        <footer className="input-area">
          <form onSubmit={handleFormSubmit} className="input-container">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about your eligibility (e.g., 'Am I eligible for TOV?')..."
              className="input-field"
              disabled={loading}
            />
            <button type="submit" className="send-btn" disabled={loading || !input.trim()}>
              ➔
            </button>
          </form>
        </footer>
      </main>
    </div>
  );
}
