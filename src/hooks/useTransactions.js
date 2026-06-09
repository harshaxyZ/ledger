import { useState, useEffect } from 'react';
import { useBudgets } from './useBudgets';
import { validateAmount, validateNote, validateCategory } from '../utils/validate';
import { CATEGORIES } from '../constants/categories';

export const useTransactions = () => {
  const { getBudgetStatus, budgets } = useBudgets();

  const [userName, setUserName] = useState(() => {
    return localStorage.getItem('kuber_user_name') || '';
  });

  const [transactions, setTransactions] = useState(() => {
    const saved = localStorage.getItem('kuber_transactions');
    if (saved) {
      const parsed = JSON.parse(saved);
      return parsed.map(t => ({ ...t, type: t.type || 'expense' }));
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem('kuber_transactions', JSON.stringify(transactions));
  }, [transactions]);

  useEffect(() => {
    if (userName) {
      localStorage.setItem('kuber_user_name', userName);
    }
  }, [userName]);

  const addTransaction = (amount, type, categoryId, note = '') => {
    const amountVal = validateAmount(amount);
    if (!amountVal.valid) throw new Error(amountVal.error);

    const typeValid = type === 'income' || type === 'expense';
    if (!typeValid) throw new Error('Type must be income or expense');

    const catVal = validateCategory(categoryId);
    if (!catVal.valid) throw new Error(catVal.error);

    if (note) {
      const noteVal = validateNote(note);
      if (!noteVal.valid) throw new Error(noteVal.error);
    }

    const newTransaction = {
      id: Date.now().toString(),
      amount: parseFloat(amount),
      type,
      categoryId,
      note: note || '',
      date: new Date().toISOString(),
    };
    
    setTransactions(prev => [newTransaction, ...prev]);
  };

  const deleteTransaction = (id) => {
    setTransactions(prev => prev.filter(t => t.id !== id));
  };

  const clearAllData = () => {
    setTransactions([]);
    localStorage.removeItem('kuber_budgets');
  };

  const getStats = () => {
    const now = new Date();
    const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
    
    let spentToday = 0, earnedToday = 0;
    let spentThisMonth = 0, earnedThisMonth = 0;

    const categoryTotals = {};
    const daysLogged = new Set();

    transactions.forEach(t => {
      const d = new Date(t.date);
      const tTime = d.getTime();
      const tDateStr = new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime();
      daysLogged.add(tDateStr);

      if (tTime >= todayStart) {
        if (t.type === 'expense') spentToday += t.amount;
        else if (t.type === 'income') earnedToday += t.amount;
      }

      if (d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear()) {
        if (t.type === 'expense') {
          spentThisMonth += t.amount;
          categoryTotals[t.categoryId] = (categoryTotals[t.categoryId] || 0) + t.amount;
        } else if (t.type === 'income') {
          earnedThisMonth += t.amount;
        }
      }
    });

    const netToday = earnedToday - spentToday;
    const netThisMonth = earnedThisMonth - spentThisMonth;
    const dailyAverageSpend = spentThisMonth / (now.getDate()) || 0;

    let topExpenseCategory = null;
    let maxSpend = 0;
    Object.entries(categoryTotals).forEach(([catId, amount]) => {
      if (amount > maxSpend) {
        maxSpend = amount;
        const cat = CATEGORIES.find(c => c.id === catId);
        topExpenseCategory = { name: cat ? cat.name : catId, amount };
      }
    });

    const dates = Array.from(daysLogged).sort((a, b) => b - a);
    let currentStreak = 0;
    let longestStreak = 0;
    let tempStreak = 0;
    
    let checkDate = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
    
    if (dates.length > 0) {
      if (dates[0] === checkDate || dates[0] === checkDate - 86400000) {
        let expected = dates[0];
        for (let i = 0; i < dates.length; i++) {
          if (dates[i] === expected) {
            currentStreak++;
            expected -= 86400000;
          } else {
            break;
          }
        }
      }

      tempStreak = 1;
      longestStreak = 1;
      for (let i = 0; i < dates.length - 1; i++) {
        const diff = dates[i] - dates[i+1];
        if (diff === 86400000) {
          tempStreak++;
          longestStreak = Math.max(longestStreak, tempStreak);
        } else {
          tempStreak = 1;
        }
      }
    }
    
    return {
      spentToday, earnedToday, netToday,
      spentThisMonth, earnedThisMonth, netThisMonth,
      dailyAverageSpend,
      currentStreak, longestStreak,
      topExpenseCategory
    };
  };

  const getBudgetStatuses = () => {
    const now = new Date();
    const statuses = {};
    Object.keys(budgets).forEach(catId => {
      statuses[catId] = getBudgetStatus(catId, now.getMonth(), now.getFullYear(), transactions);
    });
    return statuses;
  };

  const exportData = () => {
    const data = {
      app: "Ledger",
      version: "6.7",
      exportedAt: new Date().toISOString(),
      transactions,
      budgets
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `ledger-backup-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return {
    transactions,
    userName,
    setUserName,
    addTransaction,
    deleteTransaction,
    clearAllData,
    getStats,
    getBudgetStatuses,
    exportData
  };
};
