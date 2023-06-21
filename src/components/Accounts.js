import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid"
import HandleNewAccount from "./HandleNewAccount";

function Accounts({ expenses, accounts, setAccounts, categories }) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  function openDialog() {
    setIsDialogOpen(true);
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
      {isDialogOpen && <HandleNewAccount accounts={accounts} setAccounts={setAccounts} setIsDialogOpen={setIsDialogOpen} />}
    </div>
  );
}

export default Accounts;
