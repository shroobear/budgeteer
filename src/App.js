import "./App.css";
import Dashboard from "./components/Dashboard";
import NavBar from "./components/NavBar";
import Expenses from "./components/Expenses";
import Accounts from "./components/Accounts";
import React from "react";
import { Switch, Route } from "react-router-dom";
import AccountPage from "./components/AccountPage";
import AppProvider from "./context/AppProvider";

function App() {
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
