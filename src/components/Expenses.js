import React, { useEffect, useState } from "react";
import ExpenseTable from "./ExpenseTable";
import NewExpenseForm from "./NewExpenseForm";

function Expenses() {
  const [expenses, setExpenses] = useState([]);
  const [categories, setCategories] = useState([]);
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/expenses")
      .then((response) => response.json())
      .then((expenseData) => {
        const sortedExpenses = expenseData.sort((a, b) => {
            const dateA = new Date(a.date);
            const dateB = new Date(b.date);
            return dateA - dateB;
        });
        setExpenses(sortedExpenses)
        console.log("useEffect Rendered: ", expenseData)
      })
      .catch((error) => {
        console.error("Error fetching expenses:", error);
      });

    fetch("http://localhost:4000/categories")
      .then((response) => response.json())
      .then((categoryData) => {
        setCategories(categoryData);
        console.log("useEffect Rendered: ", categoryData)
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });

    fetch("http://localhost:4000/accounts")
      .then((response) => response.json())
      .then((accountData) => {
        setAccounts(accountData);
        console.log("useEffect Rendered: ", accountData)
      })
      .catch((error) => {
        console.error("Error fetching accounts:", error);
      });
  }, []);

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
      <h1 id="expense-header">Expenses</h1>
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
