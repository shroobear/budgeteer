import React, { useContext } from "react";
import ExpenseTable from "./ExpenseTable";
import NewExpenseForm from "./NewExpenseForm";
import AppContext from "../context/AppContext";

function Expenses() {
  const { setExpenses } = useContext(AppContext);

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
      <ExpenseTable />
      <NewExpenseForm onExpenseAdd={onExpenseAdd} />
    </div>
  );
}

export default Expenses;
