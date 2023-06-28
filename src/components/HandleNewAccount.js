import React, { useState, useContext } from "react";
import AppContext from "../context/AppContext";

function HandleNewAccount({setIsDialogOpen}) {
  const {accounts, setAccounts} = useContext(AppContext)
  const [accountObj, setAccountObj] = useState({
    name: "",
    amount: "",
    isSavings: false,
  });
  function addAccount(e) {
    e.preventDefault();

    const newAccount = { ...accountObj };

    newAccount.amount = parseFloat(newAccount.amount);

    fetch("http://localhost:4000/accounts", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newAccount),
    })
      .then((r) => {
        if (r.ok) {
          console.log("Account added");
          setAccounts([...accounts, newAccount]);
          closeDialog();
        } else {
          console.error("Addition failed");
        }
      })
      .catch((error) => {
        console.error("Error adding account:", error);
      });
  }

  function closeDialog() {
    setIsDialogOpen(false);
    setAccountObj({
      name: "",
      amount: "",
      isSavings: false,
    });
  }

  function handleInputChange(event, fieldName) {
    const { value, type, checked } = event.target;
    const newValue = type === "checkbox" ? checked : value;
    setAccountObj((prevAccount) => ({ ...prevAccount, [fieldName]: newValue }));
  }

  return (
    <div className="dialog-overlay">
      <div className="dialog-container">
        <p>Add a New Account:</p>
        <form method="dialog" onSubmit={addAccount}>
          <div className="form-group">
            <label htmlFor="accountName">Account Name:</label>
            <input
              type="text"
              id="accountName"
              value={accountObj.name}
              onChange={(e) => handleInputChange(e, "name")}
            />
          </div>
          <div className="form-group">
            <label htmlFor="amount">Balance:</label>
            <input
              type="number"
              id="amount"
              value={accountObj.amount}
              onChange={(e) => handleInputChange(e, "amount")}
            />
          </div>
          <div className="form-group">
            <label htmlFor="isSavings">
              <input
                type="checkbox"
                name="isSavings"
                id="isSavings"
                value={accountObj.isSavings}
                onChange={(e) => handleInputChange(e, "isSavings")}
              />
              Savings Account
            </label>
          </div>
          <div className="button-group">
            <button type="submit" name="accountSubmit" onClick={addAccount}>
              Submit
            </button>
            <button type="button" onClick={closeDialog}>
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default HandleNewAccount;
