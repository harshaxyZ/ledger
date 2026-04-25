import React from 'react';
import { CATEGORIES } from '../constants/categories';
import { getCategoryIcon } from '../constants/categoryIcons';

const History = ({ transactions, deleteTransaction }) => {
  const grouped = {};
  transactions.forEach(t => {
    const d = new Date(t.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
    if (!grouped[d]) grouped[d] = [];
    grouped[d].push(t);
  });

  return (
    <div className="px-5 py-4 space-y-6 overflow-y-auto no-scrollbar pb-28">
      <h2 className="text-2xl font-extrabold">History</h2>
      {transactions.length === 0 ? (
        <div className="text-center py-20 text-zinc-500 text-sm italic">No transactions yet.</div>
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
                        <p className="text-[9px] text-zinc-500">{cat.name}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-bold">₹{t.amount.toLocaleString()}</span>
                      <button onClick={() => deleteTransaction(t.id)} className="text-zinc-600 hover:text-red-500 transition-colors">
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
