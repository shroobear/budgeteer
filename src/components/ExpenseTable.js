import React from "react";
import { v4 as uuidv4 } from "uuid";

function ExpenseTable({ expenses, getCategoryName, getAccountName }) {

  return (
    <div className="expense-table-card">
      <table className="expense-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Category</th>
            <th>Description</th>
            <th>Account</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={uuidv4()}>
              <td>{expense.date}</td>
              <td>{getCategoryName(expense.categoryId)}</td>
              <td>{expense.description}</td>
              <td>{getAccountName(expense.accountId)}</td>
              <td>${expense.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ExpenseTable;
