import React, { useEffect, useState } from "react";
import ExpenseTable from "./ExpenseTable";
import NewExpenseForm from "./NewExpenseForm";

function Expenses() {
  const [expenses, setExpenses] = useState([]);
  const [categories, setCategories] = useState([]);
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    Promise.all([
      fetch("http://localhost:4000/expenses").then((r) => r.json()),
      fetch("http://localhost:4000/categories").then((r) => r.json()),
      fetch("http://localhost:4000/accounts").then((r) => r.json()),
    ]).then(([expenseData, categoryData, accountData]) => {
      setExpenses(expenseData);
      setCategories(categoryData);
      setAccounts(accountData);
    });
    console.log("useEffect rendered ", expenses);
  }, []);

  function onExpenseAdd(newExpense) {
    setExpenses([...expenses, newExpense]);
  }

  return (
    <div>
      <h1>Expenses</h1>
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
