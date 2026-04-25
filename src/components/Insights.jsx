import React from 'react';
import { CATEGORIES } from '../constants/categories';
import { getCategoryIcon } from '../constants/categoryIcons';

const Insights = ({ transactions }) => {
  const total = transactions.reduce((s, t) => s + t.amount, 0);
  const byCategory = CATEGORIES.map(cat => ({
    ...cat,
    total: transactions.filter(t => t.categoryId === cat.id).reduce((s, t) => s + t.amount, 0)
  })).filter(c => c.total > 0).sort((a, b) => b.total - a.total);

  const topCategory = byCategory[0];
  const avgPerTx = transactions.length ? Math.round(total / transactions.length) : 0;

  return (
    <div className="px-5 py-4 space-y-4 overflow-y-auto no-scrollbar pb-28">
      <h2 className="text-2xl font-extrabold">Insights</h2>

      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 bg-[#151B23] border border-white/5 rounded-2xl">
          <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider mb-1">Total Spent</p>
          <h3 className="text-xl font-bold text-[#22C55E]">₹{total.toLocaleString()}</h3>
        </div>
        <div className="p-4 bg-[#151B23] border border-white/5 rounded-2xl">
          <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider mb-1">Transactions</p>
          <h3 className="text-xl font-bold">{transactions.length}</h3>
        </div>
        <div className="p-4 bg-[#151B23] border border-white/5 rounded-2xl">
          <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider mb-1">Avg / Transaction</p>
          <h3 className="text-xl font-bold">₹{avgPerTx.toLocaleString()}</h3>
        </div>
        <div className="p-4 bg-[#151B23] border border-white/5 rounded-2xl">
          <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider mb-1">Top Category</p>
          <h3 className="text-xl font-bold">{topCategory?.name || '—'}</h3>
        </div>
      </div>

      <div className="bg-[#151B23] border border-white/5 rounded-2xl p-4">
        <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest mb-4">Breakdown</p>
        <div className="space-y-3">
          {byCategory.map(cat => {
            const pct = total ? Math.round((cat.total / total) * 100) : 0;
            return (
              <div key={cat.id}>
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2">
                    <div className="p-1 rounded-lg bg-zinc-800/50">{getCategoryIcon(cat.id, cat.color)}</div>
                    <span className="text-[11px] font-bold text-zinc-300">{cat.name}</span>
                  </div>
                  <span className="text-[11px] font-bold">₹{cat.total.toLocaleString()} ({pct}%)</span>
                </div>
                <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                  <div className="h-full rounded-full transition-all" style={{ width: `${pct}%`, backgroundColor: cat.color }} />
                </div>
              </div>
            );
          })}
          {byCategory.length === 0 && <p className="text-zinc-500 text-sm italic text-center py-8">No data yet.</p>}
        </div>
      </div>
    </div>
  );
};

export default Insights;
