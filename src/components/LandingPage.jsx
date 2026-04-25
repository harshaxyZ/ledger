import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const S = {
  Book: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>,
  Arrow: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>,
  Phone: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>,
  Shield: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
  Zap: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
  Activity: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
  Check: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>,
  Minus: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><line x1="5" y1="12" x2="19" y2="12"/></svg>,
  Play: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>,
  X: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>,
  Down: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"/></svg>,
};

const Tile = ({ icon: Icon, title, desc }) => (
  <div className="flex gap-4">
    <div className="p-3 bg-red-500/10 rounded-2xl h-fit text-red-500"><Icon /></div>
    <div><h4 className="text-lg font-bold mb-1 text-white">{title}</h4><p className="text-sm text-zinc-300 font-medium">{desc}</p></div>
  </div>
);
const Row = ({ title, ledger, other }) => (
  <tr>
    <td className="p-4 md:p-6 text-sm font-bold text-zinc-400">{title}</td>
    <td className="p-4 md:p-6 text-sm font-black text-[#22C55E]"><div className="flex items-center gap-2"><S.Check /> {ledger}</div></td>
    <td className="p-4 md:p-6 text-sm font-bold text-zinc-600"><div className="flex items-center gap-2"><S.Minus /> {other}</div></td>
  </tr>
);

// ─── PHONE MOCKUP COMPONENT ────────────────────────────────
const PhoneMock = ({ title, desc, children }) => (
  <div className="flex flex-col items-center gap-4 w-full">
    <div className="w-[220px] md:w-[240px] bg-[#0A0E14] rounded-[1.5rem] border-2 border-white/10 overflow-hidden shadow-2xl shadow-black/50">
      <div className="h-6 bg-[#0A0E14] flex items-center justify-center"><div className="w-12 h-1 bg-white/10 rounded-full" /></div>
      <div className="px-3 pb-3 text-[8px]">{children}</div>
    </div>
    <div className="text-center max-w-[240px]">
      <p className="text-sm font-black text-white uppercase tracking-tight">{title}</p>
      <p className="text-[11px] text-zinc-400 mt-1 leading-relaxed">{desc}</p>
    </div>
  </div>
);

// ─── MOCK SCREENS ───────────────────────────────────────────
const MockHome = () => (
  <div>
    <div className="flex justify-between items-center mb-2"><span className="font-black text-[10px]">Ledger</span><span className="text-zinc-500 text-[7px]">Hi, Harsha</span></div>
    <div className="grid grid-cols-2 gap-1.5 mb-2">
      <div className="bg-[#151B23] rounded-lg p-2"><p className="text-[6px] text-zinc-500 uppercase">Spent Today</p><p className="text-[12px] font-black text-[#22C55E]">₹2,450</p><p className="text-[6px] text-zinc-500">5 logs</p></div>
      <div className="bg-[#151B23] rounded-lg p-2"><p className="text-[6px] text-zinc-500 uppercase">Monthly</p><p className="text-[12px] font-black">₹18,200</p><p className="text-[6px] text-zinc-500">This month</p></div>
    </div>
    <div className="bg-[#151B23] rounded-lg p-2 mb-2"><p className="text-[6px] text-zinc-500 uppercase">Add Expense</p><p className="text-[14px] font-black text-zinc-700">₹ 0</p></div>
    <div className="bg-[#151B23] rounded-lg p-2">
      <p className="text-[6px] text-zinc-500 uppercase mb-1">Recent</p>
      {[{n:'Swiggy Order',a:'₹450',c:'#22C55E'},{n:'Uber Ride',a:'₹180',c:'#3B82F6'},{n:'Netflix',a:'₹649',c:'#EAB308'}].map((x,i)=>(
        <div key={i} className="flex justify-between items-center py-1 border-t border-white/5 first:border-0">
          <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full" style={{backgroundColor:x.c}}/><span className="text-zinc-300">{x.n}</span></div>
          <span className="font-bold text-zinc-300">{x.a}</span>
        </div>
      ))}
    </div>
  </div>
);

const MockInsights = () => (
  <div>
    <p className="font-black text-[10px] mb-2">Insights</p>
    <div className="grid grid-cols-2 gap-1.5 mb-2">
      <div className="bg-[#151B23] rounded-lg p-2"><p className="text-[6px] text-zinc-500 uppercase">Total</p><p className="text-[11px] font-black text-[#22C55E]">₹18,200</p></div>
      <div className="bg-[#151B23] rounded-lg p-2"><p className="text-[6px] text-zinc-500 uppercase">Transactions</p><p className="text-[11px] font-black">42</p></div>
    </div>
    <div className="bg-[#151B23] rounded-lg p-2">
      <p className="text-[6px] text-zinc-500 uppercase mb-1.5">Breakdown</p>
      {[{n:'Food',p:38,c:'#22C55E'},{n:'Transport',p:22,c:'#3B82F6'},{n:'Shopping',p:18,c:'#F97316'},{n:'Bills',p:14,c:'#A855F7'},{n:'Fun',p:8,c:'#EAB308'}].map((x,i)=>(
        <div key={i} className="mb-1.5">
          <div className="flex justify-between mb-0.5"><span className="text-zinc-400">{x.n}</span><span className="font-bold text-zinc-300">{x.p}%</span></div>
          <div className="w-full h-1 bg-zinc-800 rounded-full"><div className="h-full rounded-full" style={{width:`${x.p}%`,backgroundColor:x.c}}/></div>
        </div>
      ))}
    </div>
  </div>
);

const MockHistory = () => (
  <div>
    <p className="font-black text-[10px] mb-2">History</p>
    <p className="text-[6px] text-zinc-500 uppercase font-bold mb-1">24 Apr 2026</p>
    <div className="bg-[#151B23] rounded-lg overflow-hidden mb-2">
      {[{n:'Zomato',a:'₹320',c:'#22C55E',t:'Food'},{n:'Petrol',a:'₹1,200',c:'#3B82F6',t:'Transport'},{n:'Amazon',a:'₹2,499',c:'#F97316',t:'Shopping'}].map((x,i)=>(
        <div key={i} className="flex justify-between items-center p-2 border-t border-white/5 first:border-0">
          <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full" style={{backgroundColor:x.c}}/><div><p className="text-zinc-300 font-bold">{x.n}</p><p className="text-zinc-500" style={{fontSize:'5px'}}>{x.t}</p></div></div>
          <span className="font-bold text-zinc-300">{x.a}</span>
        </div>
      ))}
    </div>
    <p className="text-[6px] text-zinc-500 uppercase font-bold mb-1">23 Apr 2026</p>
    <div className="bg-[#151B23] rounded-lg overflow-hidden">
      {[{n:'Electricity Bill',a:'₹1,800',c:'#A855F7',t:'Bills'},{n:'Gym',a:'₹500',c:'#F87171',t:'Health'}].map((x,i)=>(
        <div key={i} className="flex justify-between items-center p-2 border-t border-white/5 first:border-0">
          <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full" style={{backgroundColor:x.c}}/><div><p className="text-zinc-300 font-bold">{x.n}</p><p className="text-zinc-500" style={{fontSize:'5px'}}>{x.t}</p></div></div>
          <span className="font-bold text-zinc-300">{x.a}</span>
        </div>
      ))}
    </div>
  </div>
);

const MockCoach = () => (
  <div>
    <div className="flex items-center gap-1.5 mb-2"><div className="w-4 h-4 bg-[#22C55E]/20 rounded-md flex items-center justify-center text-[#22C55E]"><svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="10" cy="7" r="4"/></svg></div><div><p className="font-black text-[9px]">Ledger Coach</p><p className="text-[5px] text-zinc-500">POWERED BY GROQ AI</p></div></div>
    <div className="space-y-1.5">
      <div className="bg-white/5 rounded-lg p-2 max-w-[85%] text-zinc-300"><p>Hey Harsha! You've spent ₹2,450 today. Your biggest expense was ₹450 on Swiggy.</p></div>
      <div className="bg-[#22C55E] rounded-lg p-2 max-w-[75%] ml-auto text-black font-bold"><p>How can I save more?</p></div>
      <div className="bg-white/5 rounded-lg p-2 max-w-[85%] text-zinc-300"><p>Cut food delivery by 30% — cook 3x/week to save ₹2,000/month! 🎯</p></div>
      <div className="bg-[#22C55E] rounded-lg p-2 max-w-[75%] ml-auto text-black font-bold"><p>Recap my day</p></div>
    </div>
    <div className="mt-2 flex gap-1">
      {['Save tips','My spend?'].map((s,i)=><div key={i} className="px-2 py-1 bg-white/5 rounded-full text-[6px] text-zinc-400 font-bold">{s}</div>)}
    </div>
  </div>
);

// ─── LANDING PAGE ───────────────────────────────────────────
const LandingPage = () => {
  const [showDemo, setShowDemo] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const h = (e) => { e.preventDefault(); setDeferredPrompt(e); };
    window.addEventListener('beforeinstallprompt', h);
    return () => window.removeEventListener('beforeinstallprompt', h);
  }, []);

  const handleTry = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then(() => setDeferredPrompt(null));
    } else {
      localStorage.removeItem('kuber_transactions');
      navigate('/app?trial=true');
    }
  };

  return (
    <div className="bg-[#0A0E14] text-white h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth no-scrollbar font-sans">
      {/* 1: Hero */}
      <section className="h-screen w-full snap-start flex flex-col items-center justify-center relative px-6">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,#22c55e15,transparent_50%)]" />
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="z-10 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="p-2 bg-[#22C55E]/20 rounded-xl border border-[#22C55E]/20 text-[#22C55E]"><S.Book /></div>
            <h1 className="text-4xl font-black tracking-tighter uppercase">Ledger</h1>
          </div>
          <h2 className="text-6xl md:text-8xl font-black tracking-tight mb-6 leading-[0.9] uppercase">Finance, <br /><span className="text-[#22C55E]">Redefined.</span></h2>
          <p className="text-zinc-300 text-lg max-w-lg mx-auto mb-10 font-medium">A privacy-first expense tracker built for the next generation.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <button onClick={handleTry} className="px-8 py-4 bg-[#22C55E] text-black font-black rounded-2xl flex items-center gap-2 shadow-2xl active:scale-95 transition-transform">Try Ledger <S.Arrow /></button>
            <button onClick={() => setShowDemo(true)} className="px-8 py-4 bg-white/5 border border-white/10 rounded-2xl font-bold hover:bg-white/10 transition-all flex items-center gap-2"><span className="text-[#22C55E]"><S.Play /></span> Watch Demo</button>
          </div>
        </motion.div>
        <div className="absolute bottom-10 opacity-20 animate-bounce"><S.Down /></div>
      </section>

      {/* 2: Landscape */}
      <section className="h-screen w-full snap-start flex flex-col justify-center px-6 md:px-24 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto w-full">
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#22C55E] mb-4 block">02 / The Landscape</span>
          <h2 className="text-5xl md:text-7xl font-black mb-12 leading-tight uppercase">Meet the <br /><span className="text-zinc-700">Old Guard.</span></h2>
          <div className="grid md:grid-cols-3 gap-6">
            {['Mint', 'YNAB', 'Expensify'].map(n => (<div key={n} className="p-8 bg-[#151B23] border border-white/5 rounded-3xl"><h3 className="text-2xl font-black text-zinc-400">{n}</h3><p className="text-xs font-bold text-zinc-500 mt-2">Cloud-Based Legacy System</p></div>))}
          </div>
          <p className="mt-12 text-zinc-300 font-medium text-lg max-w-xl">Their architecture belongs in 2015, not 2026.</p>
        </div>
      </section>

      {/* 3: Problem */}
      <section className="h-screen w-full snap-start flex flex-col justify-center px-6 md:px-24">
        <div className="max-w-6xl mx-auto w-full">
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-red-500 mb-4 block">03 / The Problem</span>
          <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight uppercase">The <span className="text-red-500">Fatal</span> Flaws.</h2>
          <div className="space-y-6 max-w-xl">
            <Tile icon={S.Shield} title="Data Privacy" desc="Cloud apps sell your spending habits to credit card companies." />
            <Tile icon={S.Zap} title="SMS Lag" desc="20% of digital transactions go unlogged due to unreliable alerts." />
            <Tile icon={S.Activity} title="Centralization" desc="Server goes down, you lose access to your financial history." />
          </div>
        </div>
      </section>

      {/* 4: Turning Point */}
      <section className="h-screen w-full snap-start flex flex-col items-center justify-center px-6 text-center">
        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#22C55E] mb-8 block">04 / The Vision</span>
        <h2 className="text-5xl md:text-8xl font-black leading-[0.9] mb-12 uppercase">"Your money <br />is <span className="text-[#22C55E] italic">your</span> business."</h2>
        <p className="text-xl text-zinc-300 font-medium max-w-2xl mx-auto italic">No cloud. No middleman. No compromises.</p>
      </section>

      {/* 5: Solution */}
      <section className="h-screen w-full snap-start flex flex-col justify-center px-6 md:px-24">
        <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center">
          <div className="hidden md:block"><div className="w-full h-96 bg-[#151B23] border border-white/5 rounded-[2rem] flex items-center justify-center"><span className="text-[#22C55E] opacity-20"><S.Phone /></span></div></div>
          <div>
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#22C55E] mb-4 block">05 / The Solution</span>
            <h2 className="text-6xl font-black mb-8 uppercase">Ledger.</h2>
            <p className="text-xl text-zinc-300 font-medium mb-8">Military-grade local storage with 2-second logging.</p>
            <ul className="space-y-4">
              {['100% Offline Processing', 'AES-256 Local Encryption', '0ms Sync Latency'].map(t => (
                <li key={t} className="flex items-center gap-3 font-bold text-sm text-zinc-400"><div className="w-5 h-5 bg-[#22C55E]/20 rounded-full flex items-center justify-center text-[#22C55E]"><S.Check /></div>{t}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 6: Comparison */}
      <section className="h-screen w-full snap-start flex flex-col justify-center px-6 md:px-24">
        <div className="max-w-5xl mx-auto w-full">
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#22C55E] mb-8 block text-center">06 / Market Edge</span>
          <h2 className="text-5xl font-black mb-16 text-center uppercase">Ledger <span className="text-zinc-700">vs</span> The Rest.</h2>
          <div className="bg-[#151B23] border border-white/5 rounded-3xl overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead><tr className="bg-white/5"><th className="p-4 md:p-6 text-[10px] font-black uppercase tracking-widest text-zinc-400">Feature</th><th className="p-4 md:p-6 text-[10px] font-black uppercase tracking-widest text-[#22C55E]">Ledger</th><th className="p-4 md:p-6 text-[10px] font-black uppercase tracking-widest text-zinc-500">Others</th></tr></thead>
              <tbody className="divide-y divide-white/5">
                <Row title="Storage" ledger="On-Device" other="Cloud" />
                <Row title="Privacy" ledger="100% Private" other="Data Harvesting" />
                <Row title="Offline" ledger="Works Anywhere" other="Needs Internet" />
                <Row title="Cost" ledger="Free Forever" other="Subscription" />
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 7: App Preview — 4 Screenshots */}
      <section className="min-h-screen w-full snap-start flex flex-col justify-center px-6 py-16 md:px-24">
        <div className="max-w-6xl mx-auto w-full">
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#22C55E] mb-4 block text-center">07 / Inside The App</span>
          <h2 className="text-5xl font-black mb-4 text-center uppercase">See It In <span className="text-[#22C55E]">Action.</span></h2>
          <p className="text-zinc-400 text-center mb-12 max-w-lg mx-auto">Real interface. Real data. Four views that give you complete control over your finances.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <PhoneMock title="Dashboard" desc="Track daily & monthly spending at a glance with instant logging."><MockHome /></PhoneMock>
            <PhoneMock title="Insights" desc="Visual breakdown of where every rupee goes with smart analytics."><MockInsights /></PhoneMock>
            <PhoneMock title="History" desc="Full transaction log grouped by date. Delete or review anytime."><MockHistory /></PhoneMock>
            <PhoneMock title="AI Coach" desc="Ask your personal finance coach anything. Powered by Groq AI."><MockCoach /></PhoneMock>
          </div>
        </div>
      </section>

      {/* 8: CTA */}
      <section className="h-screen w-full snap-start flex flex-col items-center justify-center px-6 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,#22c55e15,transparent_50%)]" />
        <div className="text-center z-10">
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#22C55E] mb-12 block">08 / Try It</span>
          <h2 className="text-6xl md:text-9xl font-black mb-12 uppercase">Try Ledger<br />Now.</h2>
          <p className="text-zinc-300 mb-16 max-w-lg mx-auto text-lg font-medium italic">100% Free. 100% Private. Zero setup.</p>
          <button onClick={handleTry} className="px-12 py-6 bg-white text-black font-black rounded-3xl flex items-center gap-3 text-xl hover:bg-[#22C55E] transition-all active:scale-95 shadow-2xl mx-auto"><S.Phone /> Try Ledger</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 px-6 bg-[#0A0E14] snap-start">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2"><span className="text-[#22C55E]"><S.Book /></span><span className="font-bold uppercase tracking-tighter">Ledger</span></div>
          <p className="text-zinc-500 text-xs italic">Private. Secure. Yours.</p>
        </div>
      </footer>

      {/* Demo Modal */}
      <AnimatePresence>
        {showDemo && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setShowDemo(false)} className="absolute inset-0 bg-black/95 backdrop-blur-sm" />
            <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }} className="relative w-full max-w-lg bg-[#151B23] border border-white/10 rounded-[2rem] p-12 text-center">
              <button onClick={() => setShowDemo(false)} className="absolute top-6 right-6 p-2 text-zinc-500"><S.X /></button>
              <div className="p-6 bg-[#22C55E]/10 rounded-full w-fit mx-auto mb-6 text-[#22C55E]"><S.Play /></div>
              <h3 className="text-3xl font-black mb-4 uppercase tracking-tighter">Demo Preview</h3>
              <p className="text-zinc-400 font-medium">Use "Try Ledger" to experience the app live.</p>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LandingPage;
