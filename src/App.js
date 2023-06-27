import "./App.css";
import Dashboard from "./components/Dashboard";
import NavBar from "./components/NavBar";
import Expenses from "./components/Expenses";
import Accounts from "./components/Accounts";
import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import AccountPage from "./components/AccountPage";

function App() {
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
        setExpenses(sortedExpenses);
        console.log("useEffect Rendered: ", expenseData);
      })
      .catch((error) => {
        console.error("Error fetching expenses:", error);
      });

    fetch("http://localhost:4000/categories")
      .then((response) => response.json())
      .then((categoryData) => {
        setCategories(categoryData);
        console.log("useEffect Rendered: ", categoryData);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });

    fetch("http://localhost:4000/accounts")
      .then((response) => response.json())
      .then((accountData) => {
        setAccounts(accountData);
        console.log("useEffect Rendered: ", accountData);
      })
      .catch((error) => {
        console.error("Error fetching accounts:", error);
      });
  }, [setExpenses, setAccounts, setCategories]);

    const getCategoryName = (categoryId) => {
    const category = categories.find((category) => category.id === categoryId);
    return category ? category.name : "";
  };

  const getAccountName = (accountId) => {
    const account = accounts.find((account) => account.id === accountId);
    return account ? account.name : "";
  };

  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Dashboard
            expenses={expenses}
            categories={categories}
            accounts={accounts}
            getCategoryName={getCategoryName}
            getAccountName={getAccountName}
          />
        </Route>
        <Route path="/expenses">
          <Expenses
            expenses={expenses}
            setExpenses={setExpenses}
            categories={categories}
            accounts={accounts}
            getCategoryName={getCategoryName}
            getAccountName={getAccountName}
          />
        </Route>
        <Route exact path="/accounts">
          <Accounts
            expenses={expenses}
            categories={categories}
            accounts={accounts}
            setAccounts={setAccounts}
          />
        </Route>
        <Route path="/accounts/:accountId">
          <AccountPage
            accounts={accounts}
            setAccounts={setAccounts}
            expenses={expenses}
            categories={categories}
            getCategoryName={getCategoryName}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
