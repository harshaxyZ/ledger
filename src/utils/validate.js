import { CATEGORIES } from '../constants/categories';

export const validateAmount = (val) => {
  const num = parseFloat(val);
  if (isNaN(num)) return { valid: false, error: 'Amount must be a number' };
  if (num <= 0) return { valid: false, error: 'Amount must be greater than 0' };
  if (num > 1000000) return { valid: false, error: 'Amount cannot exceed ₹10,00,000' };
  
  const str = val.toString();
  if (str.includes('.')) {
    const decimals = str.split('.')[1];
    if (decimals.length > 2) return { valid: false, error: 'Amount can have at most 2 decimal places' };
  }
  
  return { valid: true };
};

export const validateNote = (note) => {
  if (typeof note !== 'string') return { valid: false, error: 'Note must be a string' };
  if (note.length > 60) return { valid: false, error: 'Note cannot exceed 60 characters' };
  
  const stripped = note.replace(/<[^>]*>?/gm, '');
  if (stripped !== note) return { valid: false, error: 'Note cannot contain HTML tags' };
  
  return { valid: true };
};

export const validateCategory = (id) => {
  const exists = CATEGORIES.some(c => c.id === id);
  if (!exists) return { valid: false, error: 'Invalid category' };
  return { valid: true };
};
