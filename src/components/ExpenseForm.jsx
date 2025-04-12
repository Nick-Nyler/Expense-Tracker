import React, { useState } from 'react';
import '../App.css';

function ExpenseForm({ onAddExpense }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !description || !amount || !category || !date) return;
    onAddExpense({ name, description, amount: Number(amount), category, date });
    setName('');
    setDescription('');
    setAmount('');
    setCategory('');
    setDate('');
  };

  return (
    <form onSubmit={handleSubmit} className="expense-form">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="expense-input"
        placeholder="Enter expense name"
        required
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="expense-input"
        placeholder="Enter description"
      />
      <input
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="expense-input"
        placeholder="Enter category"
        required
      />
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="expense-input"
        placeholder="Enter amount"
        required
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="expense-input"
        required
      />
      <button type="submit" className="expense-button">Submit</button>
    </form>
  );
}

export default ExpenseForm;