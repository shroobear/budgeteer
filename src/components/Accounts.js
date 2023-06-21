import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid"

function Accounts({ expenses, accounts, setAccounts, categories }) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [accountObj, setAccountObj] = useState({
    name: "",
    amount: "",
    isSavings: false,
});
  //   function openAccount() {}

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
          setAccounts([ ...accounts, newAccount ]);
          closeDialog()
        } else {
          console.error("Addition failed");
        }
      })
      .catch((error) => {
        console.error("Error adding account:", error);
      });
  }

  function openDialog() {
    setIsDialogOpen(true);
  }

  function closeDialog() {
    setIsDialogOpen(false);
    setAccountObj({
        name: "",
        amount: "",
        isSavings: false
    })
  }

  function handleInputChange(event, fieldName) {
    const { value, type, checked } = event.target;
    const newValue = type === "checkbox" ? checked : value;
    setAccountObj((prevAccount) => ({ ...prevAccount, [fieldName]: newValue }));
  }
  

  function handleNewAccount() {
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
              <button type="submit" name="accountSubmit" onClick={addAccount}>Submit</button>
              <button type="button" onClick={closeDialog}>
                Close
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
  return (
    <div>
      <h1 className="page-header">Accounts</h1>
      <div className="accounts-container">
        {accounts.map((account) => (
          <div key={uuidv4()} className="account-card">
            <h2 className="account-name">{account.name}</h2>
            <p className="account-balance">Balance: ${account.amount}</p>
          </div>
        ))}
        <button id="new-account-button" onClick={openDialog}>
          Add New Account
        </button>
      </div>
      {isDialogOpen && handleNewAccount()}
    </div>
  );
}

export default Accounts;
