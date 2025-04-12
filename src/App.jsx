import React, { useState } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseTable from './components/ExpenseTable';
import SearchBar from './components/SearchBar';

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, name: 'Lunch', description: 'Groceries for lunch', amount: 45, category: 'Food', date: '2024-04-01' },
    { id: 2, name: 'Taxi', description: 'Ride to the office', amount: 20, category: 'Transport', date: '2024-04-03' },
    { id: 3, name: 'Movie Ticket', description: 'Evening show', amount: 12, category: 'Entertainment', date: '2024-04-05' },
    { id: 4, name: 'Coffee', description: 'Morning coffee at the cafe', amount: 5, category: 'Food', date: '2024-04-08' },
    { id: 5, name: 'Book', description: 'New novel', amount: 15, category: 'Entertainment', date: '2024-04-10' },
  ]);

  const [search, setSearch] = useState('');

  const handleAddExpense = (expense) => {
    const newExpense = { ...expense, id: Date.now() };
    setExpenses([...expenses, newExpense]);
  };

  const handleDelete = (id) => {
    setExpenses(expenses.filter(exp => exp.id !== id));
  };

  const filteredExpenses = expenses.filter(expense =>
    expense.name.toLowerCase().includes(search.toLowerCase()) ||
    expense.description.toLowerCase().includes(search.toLowerCase()) ||
    expense.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Expense Tracker</h1>
      <div style={styles.content}>
        <div style={styles.formArea}>
          <div style={styles.formContainer}>
            <h2 style={styles.formTitle}>Add Expense</h2>
            <ExpenseForm onAddExpense={handleAddExpense} />
          </div>
        </div>
        <div style={styles.rightArea}>
          <SearchBar search={search} setSearch={setSearch} />
          <ExpenseTable expenses={filteredExpenses} onDelete={handleDelete} />
        </div>
      </div>
    </div>
  );
}