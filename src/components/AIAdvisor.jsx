import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CATEGORIES } from '../constants/categories';
import { GROQ_API_KEY } from '../constants/config';

// Safe SVG icons
const XIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>;
const SendIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>;
const UserIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="10" cy="7" r="4"/><polyline points="16 11 18 13 22 9"/></svg>;

const AIAdvisor = ({ isOpen, onClose, transactions, userName }) => {
  const [query, setQuery] = useState('');
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        { role: 'assistant', content: `Hi ${userName || 'there'}! I'm your Ledger Coach. I have access to your spending data. Ask me anything about your finances or how to save money!` }
      ]);
    }
  }, [isOpen, userName]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const getSpendingContext = () => {
    const summary = transactions.reduce((acc, t) => {
      const cat = CATEGORIES.find(c => c.id === t.categoryId)?.name || 'Other';
      acc[cat] = (acc[cat] || 0) + t.amount;
      return acc;
    }, {});
    
    const total = transactions.reduce((sum, t) => sum + t.amount, 0);
    const context = Object.entries(summary)
      .map(([cat, amt]) => `${cat}: ₹${amt}`)
      .join(', ');
      
    return `Total Spent: ₹${total}. Breakdown: ${context || 'No transactions logged yet.'}`;
  };

  const handleSend = async () => {
    if (!query.trim() || isLoading) return;

    const userMessage = { role: 'user', content: query };
    setMessages(prev => [...prev, userMessage]);
    setQuery('');
    setIsLoading(true);

    try {
      const context = getSpendingContext();
      const systemPrompt = `
        You are "Ledger Coach", a premium financial advisor for a user named ${userName}.
        
        YOUR MISSION: Help the user understand their spending and save money.
        RELEVANCY RULE: 
        - Questions about spending, budget, "recap my day", "summary", savings, or financial habits are HIGHLY RELEVANT. Answer them directly with alpha-level advice.
        - Only decline questions that are completely unrelated to life or finance (e.g. "what is the weather", "write a python script", "tell me a joke").
        
        CURRENT USER DATA:
        ${context}
        
        Style: Professional, concise, and data-driven. Always use Indian Rupees (₹).
      `;

      const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${GROQ_API_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: "llama-3.3-70b-versatile",
          messages: [
            { role: "system", content: systemPrompt },
            ...messages.map(m => ({ role: m.role, content: m.content })),
            { role: "user", content: query }
          ],
          temperature: 0.7,
          max_tokens: 500
        })
      });

      const data = await response.json();
      const advice = data.choices[0]?.message?.content || "I'm having trouble connecting. Please try again!";
      
      setMessages(prev => [...prev, { role: 'assistant', content: advice }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'assistant', content: "Coach is offline. Check your internet or API key!" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex flex-col justify-end">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#0A0E14]/80 backdrop-blur-xl"
          />
          
          <motion.div 
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="relative bg-[#151B23] border-t border-white/5 h-[90vh] flex flex-col p-6 overflow-hidden max-w-md mx-auto w-full rounded-t-[32px]"
          >
            <div className="w-12 h-1.5 bg-white/10 rounded-full mx-auto mb-8 shrink-0" />
            
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-[#22C55E]/10 rounded-xl text-[#22C55E]">
                  <UserIcon />
                </div>
                <div>
                  <h2 className="text-xl font-extrabold">Ledger Coach</h2>
                  <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">Powered by Groq AI</p>
                </div>
              </div>
              <button onClick={onClose} className="p-2 bg-white/5 rounded-full text-zinc-500">
                <XIcon />
              </button>
            </div>

            <div ref={scrollRef} className="flex-1 overflow-y-auto space-y-4 no-scrollbar pb-6 px-1">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-4 rounded-2xl text-[13px] leading-relaxed shadow-lg ${
                    m.role === 'user' 
                      ? 'bg-[#22C55E] text-black font-black' 
                      : 'bg-white/5 border border-white/5 text-zinc-300 font-medium'
                  }`}>
                    {m.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white/5 border border-white/5 p-4 rounded-2xl">
                    <motion.div 
                      animate={{ opacity: [0.4, 1, 0.4] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                      className="flex gap-1"
                    >
                      <div className="w-1.5 h-1.5 bg-[#22C55E] rounded-full" />
                      <div className="w-1.5 h-1.5 bg-[#22C55E] rounded-full" />
                      <div className="w-1.5 h-1.5 bg-[#22C55E] rounded-full" />
                    </motion.div>
                  </div>
                </div>
              )}
            </div>

            <div className="mt-auto pb-8 pt-4">
               <div className="flex gap-2 mb-4 overflow-x-auto no-scrollbar">
                {["My biggest spend?", "How to save ₹2k?", "Recap my day"].map((s, i) => (
                  <button 
                    key={i}
                    onClick={() => { setQuery(s); }}
                    className="whitespace-nowrap px-4 py-2 rounded-full bg-white/5 border border-white/5 text-[10px] font-bold text-zinc-500 hover:text-white transition-colors"
                  >
                    {s}
                  </button>
                ))}
              </div>
              <div className="relative">
                <input 
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask about your finances..."
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-6 pr-14 text-sm font-medium focus:outline-none focus:border-[#22C55E]/50 transition-colors"
                />
                <button 
                  disabled={isLoading}
                  onClick={handleSend}
                  className="absolute right-2 top-2 p-2 bg-[#22C55E] text-black rounded-xl active:scale-95 transition-all shadow-lg disabled:opacity-50"
                >
                  <SendIcon />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default AIAdvisor;
