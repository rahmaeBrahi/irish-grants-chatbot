'use client';

import React, { useState, useRef, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const GRANTS = [
  { id: 1, name: 'Priming Grant', provider: 'LEO', amount: 'Up to €80,000', target: 'Startups < 18m, < 10 staff' },
  { id: 2, name: 'Business Expansion', provider: 'LEO', amount: 'Up to €80,000', target: 'Micro-enterprises 18m+ trading' },
  { id: 3, name: 'Feasibility Study', provider: 'LEO', amount: 'Max €15,000', target: 'Pre-launch concepts & validation' },
  { id: 4, name: 'Trading Online Voucher (TOV)', provider: 'LEO', amount: 'Max €2,500', target: 'Micro-enterprises going online' },
  { id: 5, name: 'Grow Digital Voucher', provider: 'LEO', amount: '€500–€5,000', target: 'Businesses 1–50 staff' },
  { id: 6, name: 'Digital for Business', provider: 'LEO', amount: 'FREE', target: 'Consultancy for 1-50 staff' },
  { id: 7, name: 'Innovation Voucher', provider: 'EI', amount: '€10,000–€20,000', target: 'CRO-registered ltd SMEs' },
  { id: 8, name: 'HPSU Equity Matching', provider: 'EI', amount: '€50k–€800k+', target: 'Export tech/life-science startups' },
  { id: 9, name: 'Energy Efficiency Grant', provider: 'LEO', amount: '€750–€10,000', target: 'Businesses 1–50 staff with green audit' },
  { id: 10, name: 'Google Ad Grants', provider: 'Google', amount: '$10,000/mo', target: 'Registered charities (CHY)' },
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
            content: `⚠️ **خطأ / Error:** ${data.error || 'حدث خطأ غير متوقع أثناء الاتصال بالخادم. / An unexpected error occurred.'}`,
          },
        ]);
      }
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: '⚠️ **خطأ اتصال / Connection Error:** تعذر الاتصال بالخادم. يرجى التحقق من اتصالك بالإنترنت والملف المساعد للمشروع. / Failed to connect to server. Please check your connection.',
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
    handleSendMessage(`أريد معرفة تفاصيل وشروط الأهلية لـ: ${grantName} \n\n (I want to know details and eligibility requirements for: ${grantName})`);
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
          <h2 className="grants-list-title">قائمة المنح / Grants</h2>
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
            <h2>مستشار أهلية المنح الإيرلندية 🇮🇪</h2>
            <div className="chat-status">نشط / Online</div>
          </div>
          {messages.length > 0 && (
            <button className="reset-btn" onClick={handleReset}>
              محادثة جديدة / Reset
            </button>
          )}
        </header>

        {/* Chat Messages */}
        <div className="messages-container">
          {messages.length === 0 ? (
            <div className="welcome-screen">
              <div className="welcome-icon">🎓</div>
              <h3>مرحباً بك في مستشار المنح!</h3>
              <p>
                أنا هنا لمساعدتك في التحقق من شروط الأهلية للمنح الحكومية والخاصة بالشركات الصغيرة والمتوسطة (SMEs) والشركات الناشئة في إيرلندا.
              </p>
              <div className="suggested-questions">
                <button
                  className="suggested-btn"
                  onClick={() => handleSendMessage('ما هي شروط منحة Priming Grant؟')}
                >
                  ☘️ ما هي شروط منحة Priming Grant؟
                </button>
                <button
                  className="suggested-btn"
                  onClick={() => handleSendMessage('كيف يمكنني التقديم على Trading Online Voucher؟')}
                >
                  💻 كيف أقدم على Trading Online Voucher؟
                </button>
                <button
                  className="suggested-btn"
                  onClick={() => handleSendMessage('أنا شركة ناشئة في أول 6 أشهر، ما هي المنح المناسبة لي؟')}
                >
                  🚀 أنا شركة جديدة، ما هي المنح المناسبة لي؟
                </button>
                <button
                  className="suggested-btn"
                  onClick={() => handleSendMessage('هل يمكن تغطية التكاليف التي قمت بدفعها بالفعل؟')}
                >
                  💸 هل يتم تغطية التكاليف المدفوعة سابقاً؟
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
              placeholder="اكتب سؤالك هنا... / Type your question here..."
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
