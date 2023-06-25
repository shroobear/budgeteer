import React from "react";
import { v4 as uuidv4 } from "uuid";

function AccountTable({ expenses, categories, account }) {
  const filteredExpenses = expenses.filter(
    (expense) => expense.accountId === account.id
  );

  const getCategoryName = (categoryId) => {
    const category = categories.find((category) => category.id === categoryId);
    return category ? category.name : "";
  };

  const totalExpenseAmount = filteredExpenses.reduce(
    (total, expense) => total + expense.amount,
    0
  );

  return (
    <div className="account-table-card">
      <h2 className="account-table-header">Transactions</h2>
      <table className="expense-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {filteredExpenses.map((expense) => (
            <tr key={uuidv4()}>
              <td>{expense.date}</td>
              <td>{getCategoryName(expense.categoryId)}</td>
              <td>{expense.description}</td>
              <td>${expense.amount}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr id="account-table-footer">
            <td colSpan="3">Total</td>
            <td>${totalExpenseAmount}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default AccountTable;
