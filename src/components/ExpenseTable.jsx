import React, { useState } from 'react';

function ExpenseTable({ expenses, onDelete }) {
  const [sortKey, setSortKey] = useState('');
  const [sortAsc, setSortAsc] = useState(true);

  const sortedExpenses = [...expenses].sort((a, b) => {
    if (!sortKey) return 0;
    const aVal = a[sortKey]?.toString().toLowerCase() || '';
    const bVal = b[sortKey]?.toString().toLowerCase() || '';
    return sortAsc ? aVal.localeCompare(bVal) : bVal.localeCompare(aVal);
  });

  const handleSort = (key) => {
    if (key === sortKey) {
      setSortAsc(!sortAsc);
    } else {
      setSortKey(key);
      setSortAsc(true);
    }
  };

  const getSortIndicator = (key) => {
    if (key === sortKey) {
      return sortAsc ? ' ▲' : ' ▼';
    }
    return '';
  };

  return (
    <table style={styles.table}>
      <thead style={styles.thead}>
        <tr>
          <th style={styles.th} onClick={() => handleSort('name')}>
            Expense{getSortIndicator('name')}
          </th>
          <th style={styles.th} onClick={() => handleSort('description')}>
            Description{getSortIndicator('description')}
          </th>
          <th style={styles.th} onClick={() => handleSort('category')}>
            Category{getSortIndicator('category')}
          </th>
          <th style={styles.th}>Amount</th>
          <th style={styles.th}>Date</th>
          <th style={styles.th}>Actions</th>
        </tr>
      </thead>
      <tbody style={styles.tbody}>
        {sortedExpenses.map((expense) => (
          <tr key={expense.id} style={styles.tr}>
            <td style={styles.td}>{expense.name}</td>
            <td style={styles.td}>{expense.description}</td>
            <td style={styles.td}>{expense.category}</td>
            <td style={styles.td}>${expense.amount}</td>
            <td style={styles.td}>{expense.date}</td>
            <td style={styles.td}>
              <button
                onClick={() => onDelete(expense.id)}
                style={styles.deleteButton}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ExpenseTable;