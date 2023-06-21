import React, { useEffect } from "react";
import ExpenseTable from "./ExpenseTable";
import NewExpenseForm from "./NewExpenseForm";

function Expenses({expenses, setExpenses, accounts, setAccounts, categories, setCategories }) {

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
  }, [setExpenses, setAccounts, setCategories]);

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
