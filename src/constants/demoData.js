export const seedDemoData = () => {
  const seeded = localStorage.getItem('kuber_demo_seeded');
  if (seeded) return;

  const now = new Date();
  const getPastDate = (daysAgo) => {
    const d = new Date(now);
    d.setDate(d.getDate() - daysAgo);
    return d.toISOString();
  };

  const demoTransactions = [
    { id: 'd1', amount: 450, type: 'expense', categoryId: 'food', note: 'Zomato', date: getPastDate(0) },
    { id: 'd2', amount: 180, type: 'expense', categoryId: 'transport', note: 'Uber', date: getPastDate(0) },
    { id: 'd3', amount: 1450, type: 'expense', categoryId: 'food', note: 'Dinner with friends', date: getPastDate(1) },
    { id: 'd4', amount: 649, type: 'expense', categoryId: 'subscription', note: 'Netflix', date: getPastDate(1) },
    { id: 'd5', amount: 3200, type: 'expense', categoryId: 'groceries', note: 'Weekly Groceries', date: getPastDate(2) },
    { id: 'd6', amount: 600, type: 'expense', categoryId: 'food', note: 'Swiggy', date: getPastDate(2) },
    { id: 'd7', amount: 2499, type: 'expense', categoryId: 'shopping', note: 'Amazon', date: getPastDate(3) },
    { id: 'd8', amount: 1200, type: 'expense', categoryId: 'transport', note: 'Petrol', date: getPastDate(4) },
    { id: 'd9', amount: 500, type: 'expense', categoryId: 'health', note: 'Pharmacy', date: getPastDate(4) },
    { id: 'd10', amount: 300, type: 'expense', categoryId: 'food', note: 'Lunch at Cafe', date: getPastDate(5) },
    { id: 'd11', amount: 18000, type: 'expense', categoryId: 'rent', note: 'Rent', date: getPastDate(6) },
    { id: 'd12', amount: 25000, type: 'income', categoryId: 'income', note: 'Stipend', date: getPastDate(6) },
  ];

  const demoBudgets = {
    'food': 3000 // 2800 spent / 3000 limit = 93.3% -> Warning state
  };

  localStorage.setItem('kuber_transactions', JSON.stringify(demoTransactions));
  localStorage.setItem('kuber_budgets', JSON.stringify(demoBudgets));
  localStorage.setItem('kuber_demo_seeded', 'true');
};
