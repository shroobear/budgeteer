import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import HandleNewAccount from "./HandleNewAccount";
import { useHistory } from "react-router-dom";

function Accounts({ accounts, setAccounts }) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const history = useHistory();

  function openDialog() {
    setIsDialogOpen(true);
  }

  function openAccount(accountId) {
    history.push(`/accounts/${accountId}`);
  }

  return (
    <div>
      <h1 className="page-header">Accounts</h1>
      <div className="accounts-container">
        {accounts.map((account) => (
          <div
            key={uuidv4()}
            className="account-card"
            onClick={() => openAccount(account.id)}
          >
            <h2 className="account-name">{account.name}</h2>
            <p className="account-balance">Balance: ${account.amount}</p>
          </div>
        ))}
        <button id="new-account-button" onClick={openDialog}>
          Add New Account
        </button>
      </div>
      {isDialogOpen && (
        <HandleNewAccount
          accounts={accounts}
          setAccounts={setAccounts}
          setIsDialogOpen={setIsDialogOpen}
        />
      )}
    </div>
  );
}

export default Accounts;
