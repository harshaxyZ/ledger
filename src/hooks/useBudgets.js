import { useState, useEffect } from 'react';

export const useBudgets = () => {
  const [budgets, setBudgets] = useState(() => {
    const saved = localStorage.getItem('kuber_budgets');
    if (saved) return JSON.parse(saved);
    return {};
  });

  useEffect(() => {
    localStorage.setItem('kuber_budgets', JSON.stringify(budgets));
  }, [budgets]);

  const setBudget = (categoryId, limit) => {
    setBudgets(prev => ({
      ...prev,
      [categoryId]: parseFloat(limit) || 0
    }));
  };

  const getBudget = (categoryId) => {
    return budgets[categoryId] || 0;
  };

  const getBudgetStatus = (categoryId, month, year, transactions) => {
    const limit = getBudget(categoryId);
    if (!limit) return null;

    const spent = transactions
      .filter(t => t.type === 'expense' && t.categoryId === categoryId)
      .filter(t => {
        const d = new Date(t.date);
        return d.getMonth() === month && d.getFullYear() === year;
      })
      .reduce((sum, t) => sum + t.amount, 0);

    const percentUsed = (spent / limit) * 100;
    
    return {
      spent,
      limit,
      remaining: limit - spent,
      percentUsed,
      isWarning: percentUsed >= 80 && percentUsed < 100,
      isOver: percentUsed >= 100
    };
  };

  return {
    budgets,
    setBudget,
    getBudget,
    getBudgetStatus
  };
};
