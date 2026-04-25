import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { CATEGORIES } from './constants/categories';
import { getCategoryIcon } from './constants/categoryIcons';
import { useTransactions } from './hooks/useTransactions';
import Analysis from './components/Analysis';
import AIAdvisor from './components/AIAdvisor';
import Sparkline from './components/Sparkline';
import History from './components/History';
import Insights from './components/Insights';
import LandingPage from './components/LandingPage';

// SVG Icons
const I = {
  Logo: ({s=20}={}) => <svg width={s} height={s} viewBox="0 0 512 512" fill="none"><path d="M160 120V330C160 357.614 182.386 380 210 380H360" stroke="currentColor" strokeWidth="50" strokeLinecap="round" strokeLinejoin="round"/><line x1="280" y1="160" x2="420" y2="160" stroke="currentColor" strokeWidth="30" strokeLinecap="round"/><line x1="280" y1="230" x2="380" y2="230" stroke="currentColor" strokeWidth="30" strokeLinecap="round"/><line x1="280" y1="300" x2="340" y2="300" stroke="currentColor" strokeWidth="30" strokeLinecap="round"/></svg>,
  Down: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"/><polyline points="19 12 12 19 5 12"/></svg>,
  Up: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/></svg>,
  Right: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>,
  ChevDown: () => <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"/></svg>,
  Plus: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>,
  Bell: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>,
  Gear: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09a1.65 1.65 0 0 0-1.08-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9c.26.6.85 1 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>,
  Home: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
  Clock: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
  Chat: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>,
  Bar: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>,
  Trash: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>,
  X: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>,
  Note: () => <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>,
  Out: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>,
  Share: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>,
};

const Tracker = () => {
  const { transactions, userName, setUserName, addTransaction, deleteTransaction, clearAllData, getStats } = useTransactions();
  const [activeTab, setActiveTab] = useState('home');
  const [showOnboarding, setShowOnboarding] = useState(!userName);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [tempName, setTempName] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [showInstallTip, setShowInstallTip] = useState(false);
  const [amount, setAmount] = useState('0');
  const [selectedCategory, setSelectedCategory] = useState(CATEGORIES[0]);
  const [note, setNote] = useState('');
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [searchParams] = useSearchParams();
  const { spentToday, transactionsToday, monthlySpent, dailyAverage } = getStats();

  useEffect(() => {
    if (searchParams.get('trial') === 'true') {
      setShowInstallTip(true);
    }
  }, []);

  const handleSave = () => { if (!amount || amount === '0') return; addTransaction(amount, selectedCategory.id, note); setAmount('0'); setNote(''); };
  const handleOnboarding = () => { if (tempName.trim()) { setUserName(tempName.trim()); setShowOnboarding(false); if ("Notification" in window) Notification.requestPermission(); } };
  const simulateNotif = () => { setShowToast(true); setTimeout(() => setShowToast(false), 5000); };
  const handleReset = () => { if (window.confirm("Clear all logs?")) { clearAllData(); setIsSettingsOpen(false); } };
  const trendData = [400, 600, 450, 700, 650, 800, 750, 900, 850, 1000];

  // Render active tab content
  const renderContent = () => {
    if (activeTab === 'history') return <History transactions={transactions} deleteTransaction={deleteTransaction} />;
    if (activeTab === 'insights') return <Insights transactions={transactions} />;
    // Home tab
    return (
      <main className="flex-1 px-5 space-y-4 overflow-y-auto no-scrollbar pb-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-[#151B23] border border-white/5 rounded-2xl">
            <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider mb-1">Spent today</p>
            <h2 className="text-xl font-bold text-[#22C55E]">₹{spentToday.toLocaleString()}</h2>
            <p className="text-[10px] text-zinc-500 mt-1">{transactionsToday} logs</p>
            <div className="mt-3 flex justify-end"><div className="p-2 bg-[#22C55E]/10 rounded-full text-[#22C55E]"><I.Down /></div></div>
          </div>
          <div className="p-4 bg-[#151B23] border border-white/5 rounded-2xl">
            <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider mb-1">Monthly spent</p>
            <h2 className="text-xl font-bold">₹{monthlySpent.toLocaleString()}</h2>
            <p className="text-[10px] text-zinc-500 mt-1">This month</p>
            <div className="mt-3 flex justify-end"><div className="p-2 bg-orange-500/10 rounded-full text-orange-500"><I.Up /></div></div>
          </div>
        </div>
        <div className="p-4 bg-[#151B23] border border-white/5 rounded-2xl flex justify-between items-start">
          <div>
            <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider mb-1">Daily average</p>
            <h2 className="text-2xl font-bold">₹{Math.round(dailyAverage).toLocaleString()}</h2>
          </div>
          <Sparkline data={trendData} color="#22C55E" />
        </div>
        {/* Add Expense */}
        <div className="p-4 bg-[#151B23] border border-white/5 rounded-2xl space-y-4">
          <div className="flex gap-4">
            <div className="flex-1">
              <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider mb-2">Add expense</p>
              <div className="flex items-center gap-1">
                <span className="text-3xl font-bold text-zinc-600">₹</span>
                <input type="number" value={amount === '0' ? '' : amount} onChange={e => setAmount(e.target.value)} placeholder="0" className="bg-transparent text-3xl font-bold outline-none w-full text-white placeholder-zinc-800" />
              </div>
            </div>
            <div className="w-px bg-white/5 my-1" />
            <div className="flex-1 relative">
              <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider mb-2">Category</p>
              <button onClick={() => setIsCategoryOpen(!isCategoryOpen)} className="flex items-center justify-between w-full p-2 bg-white/5 rounded-xl border border-white/5">
                <div className="flex items-center gap-2">{getCategoryIcon(selectedCategory.id, selectedCategory.color)}<span className="text-[11px] font-bold text-zinc-300 truncate">{selectedCategory.name}</span></div>
                <I.ChevDown />
              </button>
              <AnimatePresence>
                {isCategoryOpen && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="absolute top-full left-0 right-0 z-50 mt-2 bg-[#151B23] border border-white/10 rounded-2xl shadow-2xl max-h-48 overflow-y-auto no-scrollbar">
                    {CATEGORIES.map(cat => (
                      <button key={cat.id} onClick={() => { setSelectedCategory(cat); setIsCategoryOpen(false); }} className="flex items-center gap-3 w-full p-3 hover:bg-white/5 text-left border-b border-white/5 last:border-0">
                        {getCategoryIcon(cat.id, cat.color)}<span className="text-[11px] font-bold text-zinc-300">{cat.name}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="p-2 bg-white/5 rounded-lg text-zinc-500"><I.Note /></div>
            <input value={note} onChange={e => setNote(e.target.value)} placeholder="Add note (optional)" className="bg-transparent text-[11px] text-zinc-400 outline-none w-full" />
            {amount && amount !== '0' && <button onClick={handleSave} className="p-2 bg-[#22C55E] rounded-xl active:scale-95 transition-all text-black"><I.Plus /></button>}
          </div>
        </div>
        <Analysis transactions={transactions} />
        {/* Recent Logs */}
        <div className="bg-[#151B23] border border-white/5 rounded-2xl overflow-hidden mb-8">
          <div className="p-4 flex justify-between items-center border-b border-white/5">
            <h3 className="text-[11px] font-bold text-zinc-300 uppercase tracking-widest">Recent logs</h3>
            <button onClick={() => setActiveTab('history')} className="text-[10px] font-bold text-zinc-500">View all</button>
          </div>
          <div className="divide-y divide-white/5">
            {transactions.length === 0 ? <div className="p-8 text-center text-zinc-500 text-[11px] italic">No logs yet.</div> : transactions.slice(0, 5).map(t => {
              const cat = CATEGORIES.find(c => c.id === t.categoryId) || CATEGORIES[CATEGORIES.length - 1];
              return (
                <div key={t.id} className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-2.5 rounded-full" style={{ backgroundColor: `${cat.color}22` }}>{getCategoryIcon(cat.id, cat.color)}</div>
                    <div><p className="text-xs font-bold">{t.note || cat.name}</p><p className="text-[9px] text-zinc-500">{cat.name}</p></div>
                  </div>
                  <span className="text-xs font-bold">₹{t.amount.toLocaleString()}</span>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    );
  };

  return (
    <div className="flex flex-col min-h-screen max-w-md mx-auto relative bg-[#0A0E14] text-white pb-24 overflow-hidden font-sans">
      {/* Install Tip Popup */}
      <AnimatePresence>
        {showInstallTip && (
          <div className="fixed inset-0 z-[250] flex items-center justify-center p-6">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setShowInstallTip(false)} className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="relative bg-[#151B23] border border-white/10 rounded-[2rem] p-8 max-w-sm w-full text-center">
              <button onClick={() => setShowInstallTip(false)} className="absolute top-4 right-4 text-zinc-500"><I.X /></button>
              <div className="p-4 bg-[#22C55E]/10 rounded-2xl w-fit mx-auto mb-6 text-[#22C55E]"><I.Share /></div>
              <h3 className="text-xl font-black mb-3 uppercase tracking-tight">Add to Home Screen</h3>
              <p className="text-zinc-400 text-sm mb-6 leading-relaxed">To install Ledger as an app:</p>
              <div className="text-left space-y-3 mb-6">
                <div className="flex gap-3 items-start"><span className="text-[#22C55E] font-black text-sm">1.</span><p className="text-sm text-zinc-300">Tap the <strong>Share</strong> button (or ⋮ menu)</p></div>
                <div className="flex gap-3 items-start"><span className="text-[#22C55E] font-black text-sm">2.</span><p className="text-sm text-zinc-300">Select <strong>"Add to Home Screen"</strong></p></div>
                <div className="flex gap-3 items-start"><span className="text-[#22C55E] font-black text-sm">3.</span><p className="text-sm text-zinc-300">Tap <strong>"Add"</strong> — done!</p></div>
              </div>
              <button onClick={() => setShowInstallTip(false)} className="w-full py-3 bg-[#22C55E] text-black font-black rounded-xl active:scale-95 transition-transform">Got it!</button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Toast */}
      <AnimatePresence>
        {showToast && (
          <motion.div initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -100, opacity: 0 }} className="fixed top-6 left-5 right-5 z-[200] bg-[#22C55E] text-black p-4 rounded-2xl shadow-2xl flex items-center gap-4 cursor-pointer" onClick={() => setShowToast(false)}>
            <div className="p-2 bg-black/10 rounded-xl"><I.Bell /></div>
            <div><p className="text-[10px] font-black uppercase tracking-widest opacity-60">Payment Detected</p><p className="text-sm font-bold">Log your payment now, {userName}.</p></div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Onboarding */}
      <AnimatePresence>
        {showOnboarding && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[150] bg-[#0A0E14] flex flex-col items-center justify-center p-8 text-center">
            <div className="mb-8 p-4 bg-[#22C55E]/10 rounded-3xl text-[#22C55E]"><I.Logo s={64} /></div>
            <h2 className="text-3xl font-extrabold mb-2">Welcome to Ledger</h2>
            <p className="text-zinc-500 text-sm mb-12">Private by design.</p>
            <div className="w-full max-w-xs space-y-4">
              <input autoFocus value={tempName} onChange={e => setTempName(e.target.value)} placeholder="Enter your name" className="w-full bg-[#151B23] border border-white/5 rounded-2xl p-4 text-xl font-bold outline-none focus:border-[#22C55E]/50 text-white" />
              <button onClick={handleOnboarding} disabled={!tempName.trim()} className="w-full py-4 bg-[#22C55E] text-black rounded-2xl font-bold flex items-center justify-center gap-2 disabled:opacity-50 active:scale-95 transition-transform">Get Started <I.Right /></button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Settings */}
      <AnimatePresence>
        {isSettingsOpen && (
          <div className="fixed inset-0 z-[160] flex items-end">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsSettingsOpen(false)} className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
            <motion.div initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "100%" }} className="relative w-full bg-[#151B23] border-t border-white/5 rounded-t-[32px] p-8 pb-12">
              <div className="w-12 h-1 bg-white/10 rounded-full mx-auto mb-8" />
              <div className="flex justify-between items-center mb-8"><h3 className="text-2xl font-bold">Settings</h3><button onClick={() => setIsSettingsOpen(false)} className="p-2 bg-white/5 rounded-full text-zinc-500"><I.X /></button></div>
              <div className="space-y-4">
                <div className="p-4 bg-[#0A0E14] border border-white/5 rounded-2xl flex items-center justify-between"><div><p className="text-xs font-bold text-zinc-500">User</p><p className="text-sm font-bold">{userName}</p></div><button onClick={() => { setUserName(''); setShowOnboarding(true); setIsSettingsOpen(false); }} className="text-xs font-bold text-[#22C55E]">Edit</button></div>
                <button onClick={handleReset} className="w-full p-4 bg-[#0A0E14] border border-red-500/20 rounded-2xl flex items-center gap-4 text-left"><div className="p-2 bg-red-500/10 rounded-xl text-red-500"><I.Trash /></div><div><p className="text-xs font-bold text-red-500">Reset All Logs</p><p className="text-[10px] text-zinc-500">Delete all data</p></div></button>
                <button onClick={() => window.location.reload()} className="w-full p-4 bg-[#0A0E14] border border-white/5 rounded-2xl flex items-center gap-4 text-left"><div className="p-2 bg-white/5 rounded-xl text-zinc-400"><I.Out /></div><div><p className="text-xs font-bold">Restart</p><p className="text-[10px] text-zinc-500">Clear cache</p></div></button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Header */}
      <header className="px-6 pt-10 pb-6 shrink-0">
        <div className="flex justify-between items-start mb-1">
          <div className="flex items-center gap-2"><h1 className="text-3xl font-extrabold tracking-tight">Ledger</h1><div className="p-1 bg-[#22C55E]/20 rounded-md text-[#22C55E]"><I.Logo /></div></div>
          <div className="flex gap-2">
            <button onClick={simulateNotif} className="p-2.5 bg-white/5 rounded-full border border-white/5 text-zinc-400"><I.Bell /></button>
            <button onClick={() => setIsSettingsOpen(true)} className="p-2.5 bg-white/5 rounded-full border border-white/5 text-zinc-400"><I.Gear /></button>
          </div>
        </div>
        <p className="text-[12px] text-zinc-500 font-medium">Hello, {userName}. Private by design.</p>
      </header>

      {renderContent()}

      <AIAdvisor isOpen={activeTab === 'coach'} onClose={() => setActiveTab('home')} transactions={transactions} userName={userName} />

      {/* Nav */}
      <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-[#0A0E14]/80 backdrop-blur-2xl border-t border-white/5 flex items-center justify-around h-20 px-4 z-50 pb-2">
        {[['home','Home',<I.Home />],['history','History',<I.Clock />],['coach','Coach',<I.Chat />],['insights','Insights',<I.Bar />]].map(([id,label,icon]) => (
          <button key={id} onClick={() => setActiveTab(id)} className={`flex flex-col items-center gap-1.5 px-4 transition-all ${activeTab === id ? 'text-[#22C55E]' : 'text-zinc-600'}`}>{icon}<span className="text-[10px] font-bold">{label}</span></button>
        ))}
      </nav>
    </div>
  );
};

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/app" element={<Tracker />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  </Router>
);

export default App;
