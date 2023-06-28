import "./App.css";
import Dashboard from "./components/Dashboard";
import NavBar from "./components/NavBar";
import Expenses from "./components/Expenses";
import Accounts from "./components/Accounts";
import React from "react";
import { Switch, Route } from "react-router-dom";
import AccountPage from "./components/AccountPage";
import AppProvider from './context/AppProvider'

function App() {
//   const [expenses, setExpenses] = useState([]);
//   const [categories, setCategories] = useState([]);
//   const [accounts, setAccounts] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:4000/expenses")
//       .then((response) => response.json())
//       .then((expenseData) => {
//         const sortedExpenses = expenseData.sort((a, b) => {
//           const dateA = new Date(a.date);
//           const dateB = new Date(b.date);
//           return dateA - dateB;
//         });
//         setExpenses(sortedExpenses);
//         console.log("useEffect Rendered: ", expenseData);
//       })
//       .catch((error) => {
//         console.error("Error fetching expenses:", error);
//       });

//     fetch("http://localhost:4000/categories")
//       .then((response) => response.json())
//       .then((categoryData) => {
//         setCategories(categoryData);
//         console.log("useEffect Rendered: ", categoryData);
//       })
//       .catch((error) => {
//         console.error("Error fetching categories:", error);
//       });

//     fetch("http://localhost:4000/accounts")
//       .then((response) => response.json())
//       .then((accountData) => {
//         setAccounts(accountData);
//         console.log("useEffect Rendered: ", accountData);
//       })
//       .catch((error) => {
//         console.error("Error fetching accounts:", error);
//       });
//   }, [setExpenses, setAccounts, setCategories]);

//   const getCategoryName = (categoryId) => {
//     const category = categories.find((category) => category.id === categoryId);
//     return category ? category.name : "";
//   };

//   const getAccountName = (accountId) => {
//     const account = accounts.find((account) => account.id === accountId);
//     return account ? account.name : "";
//   };

  return (
    <AppProvider>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>
          <Route path="/expenses">
            <Expenses />
          </Route>
          <Route exact path="/accounts">
            <Accounts />
          </Route>
          <Route path="/accounts/:accountId">
            <AccountPage />
          </Route>
        </Switch>
      </div>
    </AppProvider>
  );
}

export default App;
