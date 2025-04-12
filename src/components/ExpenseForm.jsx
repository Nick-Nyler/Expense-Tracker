import React, { useState } from 'react';

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
    <form onSubmit={handleSubmit} style={styles.form}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={styles.input}
        placeholder="Enter expense name"
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={styles.input}
        placeholder="Enter description"
      />
      <input
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        style={styles.input}
        placeholder="Enter category"
      />
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        style={styles.input}
        placeholder="Enter amount"
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        style={styles.input}
      />
      <button type="submit" style={styles.button}>Submit</button>
    </form>
  );
}

export default ExpenseForm;