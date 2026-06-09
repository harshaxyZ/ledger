export const searchTransactions = (transactions, query) => {
  if (!query || !query.trim()) return transactions;
  
  const q = query.trim().toLowerCase();
  return transactions.filter(t => {
    const noteMatch = t.note && t.note.toLowerCase().includes(q);
    const catMatch = t.categoryId && t.categoryId.toLowerCase().includes(q);
    const amountMatch = t.amount.toString().includes(q);
    return noteMatch || catMatch || amountMatch;
  });
};

export const filterByCategory = (transactions, categoryId) => {
  if (!categoryId) return transactions;
  return transactions.filter(t => t.categoryId === categoryId);
};

export const filterByType = (transactions, type) => {
  if (!type) return transactions;
  return transactions.filter(t => t.type === type);
};

export const groupByDate = (transactions) => {
  const grouped = {};
  transactions.forEach(t => {
    const date = new Date(t.date);
    const dateStr = date.toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
    if (!grouped[dateStr]) {
      grouped[dateStr] = [];
    }
    grouped[dateStr].push(t);
  });
  return grouped;
};
