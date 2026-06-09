import React, { useState } from 'react';
import { CATEGORIES } from '../constants/categories';
import { getCategoryIcon } from '../constants/categoryIcons';
import { searchTransactions, filterByCategory, filterByType, groupByDate } from '../utils/search';
import { motion, AnimatePresence } from 'framer-motion';

const History = ({ transactions, deleteTransaction }) => {
  const [query, setQuery] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [catFilter, setCatFilter] = useState('');

  let filtered = searchTransactions(transactions, query);
  filtered = filterByType(filtered, typeFilter);
  filtered = filterByCategory(filtered, catFilter);

  const grouped = groupByDate(filtered);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this log?")) {
      deleteTransaction(id);
    }
  };

  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="px-5 py-4 space-y-6 overflow-y-auto no-scrollbar pb-28">
      <h2 className="text-2xl font-extrabold">History</h2>
      
      <div className="space-y-4">
        <div className="relative">
          <input 
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search transactions..."
            className="w-full bg-[#151B23] border border-white/5 rounded-2xl py-3 px-4 text-sm font-medium outline-none focus:border-[#22C55E]/50 transition-colors"
          />
        </div>

        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
          <motion.button whileTap={{ scale: 0.95 }} onClick={() => setTypeFilter('')} className={`px-4 py-1.5 rounded-full text-[10px] font-bold whitespace-nowrap transition-colors ${typeFilter === '' ? 'bg-[#22C55E] text-black' : 'bg-white/5 text-zinc-400'}`}>All</motion.button>
          <motion.button whileTap={{ scale: 0.95 }} onClick={() => setTypeFilter('expense')} className={`px-4 py-1.5 rounded-full text-[10px] font-bold whitespace-nowrap transition-colors ${typeFilter === 'expense' ? 'bg-[#22C55E] text-black' : 'bg-white/5 text-zinc-400'}`}>Expense</motion.button>
          <motion.button whileTap={{ scale: 0.95 }} onClick={() => setTypeFilter('income')} className={`px-4 py-1.5 rounded-full text-[10px] font-bold whitespace-nowrap transition-colors ${typeFilter === 'income' ? 'bg-[#22C55E] text-black' : 'bg-white/5 text-zinc-400'}`}>Income</motion.button>
        </div>

        {typeFilter === 'expense' && (
          <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
            <motion.button whileTap={{ scale: 0.95 }} onClick={() => setCatFilter('')} className={`px-4 py-1.5 rounded-full text-[10px] font-bold whitespace-nowrap transition-colors ${catFilter === '' ? 'bg-white/20 text-white' : 'bg-white/5 text-zinc-400'}`}>All Categories</motion.button>
            {CATEGORIES.map(cat => (
              <motion.button key={cat.id} whileTap={{ scale: 0.95 }} onClick={() => setCatFilter(cat.id)} className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[10px] font-bold whitespace-nowrap transition-colors ${catFilter === cat.id ? 'bg-white/20 text-white' : 'bg-white/5 text-zinc-400'}`}>
                {getCategoryIcon(cat.id, cat.color)} {cat.name}
              </motion.button>
            ))}
          </div>
        )}
      </div>

      <AnimatePresence>
        {filtered.length === 0 ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-center py-20 text-zinc-500 text-sm italic">No matching transactions.</motion.div>
        ) : (
          Object.entries(grouped).map(([date, txns]) => (
            <motion.div key={date} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500 mb-3">{date}</p>
              <div className="bg-[#151B23] border border-white/5 rounded-2xl overflow-hidden divide-y divide-white/5">
                <AnimatePresence>
                  {txns.map(t => {
                    const cat = CATEGORIES.find(c => c.id === t.categoryId) || CATEGORIES[CATEGORIES.length - 1];
                    return (
                      <motion.div key={t.id} layout initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="p-4 flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="p-2.5 rounded-full" style={{ backgroundColor: `${cat.color}22` }}>
                            {getCategoryIcon(cat.id, cat.color)}
                          </div>
                          <div>
                            <p className="text-xs font-bold">{t.note || cat.name}</p>
                            <p className="text-[9px] text-zinc-500">{cat.name} • {t.type === 'income' ? 'Income' : 'Expense'}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className={`text-xs font-bold ${t.type === 'income' ? 'text-[#22C55E]' : ''}`}>
                            {t.type === 'income' ? '+' : ''}₹{t.amount.toLocaleString()}
                          </span>
                          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => handleDelete(t.id)} className="text-zinc-600 hover:text-red-500 transition-colors">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
                          </motion.button>
                        </div>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </div>
            </motion.div>
          ))
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default History;
