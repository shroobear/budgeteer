import React from "react";

function ExpenseTable({ expenses, categories, accounts }) {
  const getCategoryName = (categoryId) => {
    const category = categories.find((category) => category.id === categoryId);
    return category ? category.name : "";
  };

  const getAccountName = (accountId) => {
    const account = accounts.find((account) => account.id === accountId);
    return account ? account.name : "";
  };

  return (
    <table className="expense-table">
      <thead>
        <tr>
          <th>Date</th>
          <th>Amount</th>
          <th>Category</th>
          <th>Account</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense) => (
          <tr key={expense.id}>
            <td>{expense.date}</td>
            <td>${expense.amount}</td>
            <td>{getCategoryName(expense.categoryId)}</td>
            <td>{getAccountName(expense.accountId)}</td>
            <td>{expense.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ExpenseTable;
