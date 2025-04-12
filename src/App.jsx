import React, { useState } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseTable from './components/ExpenseTable';
import SearchBar from './components/SearchBar';
import './App.css';

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, name: 'Lunch', description: 'Groceries for lunch', amount: 45, category: 'Food', date: '2024-04-01' },
    { id: 2, name: 'Taxi', description: 'Ride to the office', amount: 20, category: 'Transport', date: '2024-04-03' },
    { id: 3, name: 'Movie Ticket', description: 'Evening show', amount: 12, category: 'Entertainment', date: '2024-04-05' },
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
    <div className="app-container">
      <h1 className="app-header">Expense Tracker</h1>
      <div className="app-content">
        <div className="form-area">
          <div className="form-container">
            <h2 className="form-title">Add Expense</h2>
            <ExpenseForm onAddExpense={handleAddExpense} />
          </div>
        </div>
        <div className="right-area">
          <SearchBar search={search} setSearch={setSearch} />
          <ExpenseTable expenses={filteredExpenses} onDelete={handleDelete} />
        </div>
      </div>
    </div>
  );
}

export default App;