import React from "react";
import { v4 as uuidv4 } from "uuid";

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
    <div className="expense-table-card">
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
            <tr key={uuidv4()}>
              <td>{expense.date}</td>
              <td>${expense.amount}</td>
              <td>{getCategoryName(expense.categoryId)}</td>
              <td>{getAccountName(expense.accountId)}</td>
              <td>{expense.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ExpenseTable;
