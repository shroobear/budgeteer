import React, { useState } from "react";

function NewExpenseForm({ categories, accounts, onExpenseAdd }) {
  const [expenseObj, setExpenseObj] = useState({
    date: "",
    amount: "",
    categoryId: 1,
    description: "",
    accountId: 1,
    isRecurring: false,
  });

  function addExpense(e) {
    e.preventDefault();

    const newExpense = { ...expenseObj };

    newExpense.amount = parseFloat(newExpense.amount);
    newExpense.categoryId = parseInt(newExpense.categoryId);
    newExpense.accountId = parseInt(newExpense.accountId);

    console.log(newExpense);
    fetch("http://localhost:4000/expenses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newExpense),
    })
      .then((r) => {
        if (r.ok) {
          console.log("Expense added");
          onExpenseAdd(newExpense);
        } else {
          console.error("Addition Failed");
        }
      })
      .catch((error) => {
        console.error("Error adding expense:", error);
      });
  }

  function categoryOptions(categories) {
    return categories.map((category) => (
      <option key={category.id} value={category.id} id={category.id}>
        {category.name}
      </option>
    ));
  }

  function accountOptions(accounts) {
    return accounts.map((account) => (
      <option key={account.id} value={account.id} id={account.id}>
        {account.name}
      </option>
    ));
  }

  function handleInputChange(event) {
    const { name, value, type, checked } = event.target;
    const newValue = type === "checkbox" ? checked : value;
    setExpenseObj((prevExpense) => ({ ...prevExpense, [name]: newValue }));
  }

  return (
    <div className="expense-form-card">
      <form id="addNewExpenseForm" onSubmit={addExpense}>
        <p>Add New Expense:</p>
        <label htmlFor="date">
          Date:{" "}
          <input
            type="date"
            name="date"
            value={expenseObj.date}
            onChange={handleInputChange}
          ></input>
        </label>
        <label htmlFor="amount">
          Amount:{" "}
          <input
            type="number"
            name="amount"
            value={expenseObj.amount}
            onChange={handleInputChange}
          />
        </label>
        <label htmlFor="categories">
          Category:{" "}
          <select
            name="categoryId"
            id="categoryId"
            value={expenseObj.categoryId}
            onChange={handleInputChange}
          >
            {categoryOptions(categories)}
          </select>
        </label>
        <label htmlFor="description">
          Description:{" "}
          <input
            type="text"
            name="description"
            value={expenseObj.description}
            onChange={handleInputChange}
          />
        </label>
        <label htmlFor="account">
          Account:{" "}
          <select
            name="accountId"
            id="accountId"
            value={expenseObj.accountId}
            onChange={handleInputChange}
          >
            {accountOptions(accounts)}
          </select>
        </label>
        <label htmlFor="isRecurring">
          Charged Monthly
          <input
            type="checkbox"
            name="isRecurring"
            id="isRecurring"
            value={expenseObj.isRecurring}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit" name="expenseSubmit">
          Add
        </button>
      </form>
    </div>
  );
}

export default NewExpenseForm;
