import React, { useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import AppContext from "../context/AppContext";

function AccountTable({ account }) {
  const { expenses, getCategoryName } = useContext(AppContext)

  const filteredExpenses = expenses.filter(
    (expense) => expense.accountId === account.id
  );

  const totalExpenseAmount = filteredExpenses.reduce(
    (total, expense) => total + expense.amount,
    0
  );

  const accountTableData = filteredExpenses.map((expense) => (
    <tr key={uuidv4()}>
      <td>{expense.date}</td>
      <td>{getCategoryName(expense.categoryId)}</td>
      <td>{expense.description}</td>
      <td>${expense.amount}</td>
    </tr>
  ));

  if (account.isSavings) {
    return null;
  } else {
    return (
      <div className="account-table-card">
        <h2 className="account-table-header">Transactions</h2>
        <table className="expense-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Category</th>
              <th>Description</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>{accountTableData}</tbody>
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
}

export default AccountTable;
