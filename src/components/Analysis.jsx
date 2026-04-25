import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { CATEGORIES } from '../constants/categories';
import { getCategoryIcon } from '../constants/categoryIcons';

ChartJS.register(ArcElement, Tooltip, Legend);

const Analysis = ({ transactions }) => {
  const dataByCategory = CATEGORIES.map(cat => {
    const total = transactions
      .filter(t => t.categoryId === cat.id)
      .reduce((sum, t) => sum + t.amount, 0);
    return { ...cat, total };
  }).filter(cat => cat.total > 0).sort((a, b) => b.total - a.total);

  const chartData = {
    labels: dataByCategory.map(c => c.name),
    datasets: [{
      data: dataByCategory.map(c => c.total),
      backgroundColor: dataByCategory.map(c => c.color),
      borderWidth: 0,
      hoverOffset: 4
    }],
  };

  const chartOptions = {
    plugins: { legend: { display: false }, tooltip: { enabled: true } },
    cutout: '75%',
    responsive: true,
    maintainAspectRatio: false
  };

  const totalSpent = dataByCategory.reduce((sum, c) => sum + c.total, 0);

  if (totalSpent === 0) return null;

  return (
    <div className="p-4 bg-[#151B23] border border-white/5 rounded-2xl mb-4">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-sm font-semibold text-zinc-300">Spending overview</h3>
        <span className="text-[11px] text-zinc-500 font-medium">This month</span>
      </div>

      <div className="flex items-center gap-6">
        <div className="relative w-36 h-36 shrink-0">
          <Doughnut data={chartData} options={chartOptions} />
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <span className="text-[13px] font-bold leading-tight">₹{totalSpent.toLocaleString()}</span>
            <span className="text-[9px] text-zinc-500 uppercase tracking-widest font-medium">Total</span>
          </div>
        </div>

        <div className="flex-1 space-y-3">
          {dataByCategory.slice(0, 5).map(cat => (
            <div key={cat.id} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-zinc-800/50">
                  {getCategoryIcon(cat.id, cat.color)}
                </div>
                <span className="text-[11px] font-medium text-zinc-400">{cat.name}</span>
              </div>
              <span className="text-[11px] font-bold">₹{cat.total.toLocaleString()}</span>
            </div>
          ))}
          {dataByCategory.length > 5 && (
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-zinc-800/50">
                  {getCategoryIcon('other', '#64748B')}
                </div>
                <span className="text-[11px] font-medium text-zinc-400">Others</span>
              </div>
              <span className="text-[11px] font-bold">
                ₹{dataByCategory.slice(5).reduce((s, c) => s + c.total, 0).toLocaleString()}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Analysis;
