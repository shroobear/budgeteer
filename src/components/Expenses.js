import React from "react";
import ExpenseTable from "./ExpenseTable";
import NewExpenseForm from "./NewExpenseForm";

function Expenses({ expenses, setExpenses, accounts, categories }) {

  function onExpenseAdd(newExpense) {
    setExpenses((prevExpenses) => {
      const updatedExpenses = [...prevExpenses, newExpense];
      updatedExpenses.sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateA - dateB;
      });
      return updatedExpenses;
    });
  }

  return (
    <div>
      <h1 className="page-header">Expenses</h1>
      <ExpenseTable
        expenses={expenses}
        categories={categories}
        accounts={accounts}
      />
      <NewExpenseForm
        onExpenseAdd={onExpenseAdd}
        categories={categories}
        accounts={accounts}
      />
    </div>
  );
}

export default Expenses;
