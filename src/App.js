import './App.css';
import Dashboard from './components/Dashboard';
import NavBar from './components/NavBar';
import Expenses from './components/Expenses';
import Accounts from './components/Accounts';
import React from 'react';
import { Switch, Route } from 'react-router-dom'

function App() {

  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>
        <Route path="/expenses">
          <Expenses />
        </Route>
        <Route path="/accounts">
          <Accounts />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
