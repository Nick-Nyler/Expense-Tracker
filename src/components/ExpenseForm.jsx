import React, { useState } from 'react';

function ExpenseForm({ onAddExpense }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && amount && category && date) {
      onAddExpense({ name, description, amount: parseFloat(amount), category, date });
      setName('');
      setDescription('');
      setAmount('');
      setCategory('');
      setDate('');
    } else {
      alert('Please fill in all required fields.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="expense-form">
      <input
        type="text"
        id="name"
        className="expense-input"
        placeholder="Enter expense name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        id="description"
        className="expense-input"
        placeholder="Enter description (optional)"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="text"
        id="category"
        className="expense-input"
        placeholder="Enter category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      />
      <input
        type="number"
        id="amount"
        className="expense-input"
        placeholder="Enter amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />
      <label htmlFor="date" className="expense-label">Select date</label>
      <input
        type="date"
        id="date"
        className="expense-input"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <button type="submit" className="expense-button">Add Expense</button>
    </form>
  );
}

export default ExpenseForm;