import React from "react";

function SpendingBreakdowns({
  expenses,
  accounts,
  categories,
  getCategoryName,
  getAccountName,
}) {
  function getCategoryTotal(categoryId) {
    const total = expenses.reduce((acc, expense) => {
      if (expense.categoryId === categoryId) {
        return acc + parseFloat(expense.amount);
      }
      return acc;
    }, 0);
    return total.toFixed(2);
  }
  function getAccountTotal(accountId) {
    const total = expenses.reduce((acc, expense) => {
      if (expense.accountId === accountId) {
        return acc + parseFloat(expense.amount);
      }
      return acc;
    }, 0);
    return total.toFixed(2);
  }

  return (
    <div className="container">
      <h2 id="breakdown-header">Spending Summaries</h2>
      <div className="spending-breakdowns">
        <div id="cat-breakdown-card">
          <h2>By Category</h2>
          <ul className="breakdown">
            {categories.map((category) => (
              <li key={category.id}>
                {getCategoryName(category.id)} - $
                {getCategoryTotal(category.id)}
              </li>
            ))}
          </ul>
        </div>
        <div id="account-breakdown-card">
          <h2>By Account</h2>
          <ul className="breakdown">
            {accounts.map((account) => (
              <li key={account.id}>
                {getAccountName(account.id)} - ${getAccountTotal(account.id)}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SpendingBreakdowns;
