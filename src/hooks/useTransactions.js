import { useState, useEffect } from 'react';

export const useTransactions = () => {
  const [userName, setUserName] = useState(() => {
    return localStorage.getItem('kuber_user_name') || '';
  });

  const [transactions, setTransactions] = useState(() => {
    const saved = localStorage.getItem('kuber_transactions');
    if (saved) return JSON.parse(saved);
    
    // Start with 0 logs as requested for testing
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

  const addTransaction = (amount, categoryId, note = '') => {
    const newTransaction = {
      id: Date.now().toString(),
      amount: parseFloat(amount),
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
    // localStorage.removeItem('kuber_transactions'); // Optionally keep other settings
  };

  const getStats = () => {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
    
    const spentToday = transactions
      .filter(t => new Date(t.date).getTime() >= today)
      .reduce((sum, t) => sum + t.amount, 0);

    const transactionsToday = transactions.filter(t => new Date(t.date).getTime() >= today).length;

    const monthlySpent = transactions
      .filter(t => {
        const d = new Date(t.date);
        return d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear();
      })
      .reduce((sum, t) => sum + t.amount, 0);

    // Simple daily average calculation
    const daysInMonth = now.getDate();
    const dailyAverage = monthlySpent / daysInMonth || 0;

    return { spentToday, transactionsToday, monthlySpent, dailyAverage };
  };

  return {
    transactions,
    userName,
    setUserName,
    addTransaction,
    deleteTransaction,
    clearAllData,
    getStats
  };
};
