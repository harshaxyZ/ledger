import React, { useState } from 'react';
import { CATEGORIES } from '../constants/categories';
import { getCategoryIcon } from '../constants/categoryIcons';
import { searchTransactions, groupByDate } from '../utils/search';

const History = ({ transactions, deleteTransaction }) => {
  const [query, setQuery] = useState('');

  const filtered = searchTransactions(transactions, query);
  const grouped = groupByDate(filtered);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this log?")) {
      deleteTransaction(id);
    }
  };

  return (
    <div className="px-5 py-4 space-y-6 overflow-y-auto no-scrollbar pb-28">
      <h2 className="text-2xl font-extrabold">History</h2>
      
      <div className="relative">
        <input 
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Search transactions..."
          className="w-full bg-[#151B23] border border-white/5 rounded-2xl py-3 px-4 text-sm font-medium outline-none focus:border-[#22C55E]/50 transition-colors"
        />
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-20 text-zinc-500 text-sm italic">No matching transactions.</div>
      ) : (
        Object.entries(grouped).map(([date, txns]) => (
          <div key={date}>
            <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500 mb-3">{date}</p>
            <div className="bg-[#151B23] border border-white/5 rounded-2xl overflow-hidden divide-y divide-white/5">
              {txns.map(t => {
                const cat = CATEGORIES.find(c => c.id === t.categoryId) || CATEGORIES[CATEGORIES.length - 1];
                return (
                  <div key={t.id} className="p-4 flex items-center justify-between">
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
                      <button onClick={() => handleDelete(t.id)} className="text-zinc-600 hover:text-red-500 transition-colors">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default History;
