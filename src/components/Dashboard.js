import React, {useContext} from "react";
import SpendingBreakdowns from "./SpendingBreakdowns";
import AppContext from "../context/AppContext";

function Dashboard() {
  const { expenses, categories, accounts, getCategoryName, getAccountName } = useContext(AppContext)
  const today = new Date();

  function recurringList(expenses) {
    const filteredExpenses = expenses.filter(
      (expense) => expense.isRecurring === true
    );
    const recurringExpensesWithNextDate = filteredExpenses.map(
      (recurringExpense) => {
        const expenseDate = new Date(recurringExpense.date);
        const nextDate = new Date(expenseDate);

        if (expenseDate < today || expenseDate === today) {
          nextDate.setMonth(nextDate.getMonth() + 1);
        }

        return {
          ...recurringExpense,
          nextDate,
        };
      }
    );

    return recurringExpensesWithNextDate.map((recurringExpense) => (
      <tr key={recurringExpense.id}>
        <td>{recurringExpense.nextDate.toLocaleDateString()}</td>
        <td>{getCategoryName(recurringExpense.categoryId)}</td>
        <td>{recurringExpense.description}</td>
        <td>{getAccountName(recurringExpense.accountId)}</td>
        <td>${recurringExpense.amount}</td>
      </tr>
    ));
  }

  return (
    <div>
      <h2 className="date-header">
        Today's Date is {today.toLocaleDateString()}
      </h2>
      <div className="expense-table-card">
        <h3>Upcoming Charges:</h3>
        <table className="expense-table">
          <thead>
            <tr>
              <th>Next Charge</th>
              <th>Category</th>
              <th>Description</th>
              <th>Account</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>{recurringList(expenses)}</tbody>
        </table>
      </div>
      <SpendingBreakdowns
        expenses={expenses}
        accounts={accounts}
        categories={categories}
        getCategoryName={getCategoryName}
        getAccountName={getAccountName}
      />
    </div>
  );
}

export default Dashboard;
