import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import AccountTable from "./AccountTable";

function AccountPage({ accounts, setAccounts, expenses, categories }) {
  const { accountId } = useParams();
  const history = useHistory();
  const [isBalanceDialogOpen, setIsBalanceDialogOpen] = useState(false);
  const [newBalance, setNewBalance] = useState("");
  const [account, setAccount] = useState(null);

  useEffect(() => {
    const selectedAccount = accounts.find(
      (acc) => String(acc.id) === accountId
    );
    setAccount(selectedAccount);
  }, [accounts, accountId]);

  if (!account) {
    return <div>Account not found</div>;
  }

  function handleChangeBalanceClick() {
    return (
      <div className="dialog-overlay">
        <div className="dialog-container">
          <form method="dialog">
            <label htmlFor="change-balance">
              New Balance:
              <input
                type="number"
                id="amount"
                value={newBalance}
                onChange={(e) => setNewBalance(e.target.value)}
              />
            </label>
            <button type="submit" onClick={changeBalance}>
              Submit
            </button>
            <button onClick={() => setIsBalanceDialogOpen(false)}>
              Cancel
            </button>
          </form>
        </div>
      </div>
    );
  }

  function changeBalance(e) {
    e.preventDefault();
    const updatedAccount = { ...account, amount: parseFloat(newBalance) };
    fetch(`http://localhost:4000/accounts/${account.id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updatedAccount),
    })
      .then((r) => {
        if (r.ok) {
          setAccount(updatedAccount);
          setIsBalanceDialogOpen(false);
          setAccounts((prevAccounts) =>
            prevAccounts.map((acc) =>
              acc.id === updatedAccount.id ? updatedAccount : acc
            )
          );
        } else {
          console.error("Balance Change Failed");
        }
      })
      .catch((error) => {
        console.error("Error changing balance", error);
      });
  }

  const handleGoBack = () => {
    history.goBack();
  };

  function openBalanceDialog() {
    setIsBalanceDialogOpen(true);
  }

  const renderedBalanceDialog = handleChangeBalanceClick();

  return (
    <div>
      <div className="account-page-card">
        <h1>{account.name}</h1>
        <p>Balance: ${account.amount}</p>
        <div className="button-group">
          <button className="button" onClick={openBalanceDialog}>Change Balance</button>
          <button className="button" onClick={handleGoBack}>Go Back</button>
        </div>
      </div>
      {isBalanceDialogOpen && renderedBalanceDialog}
    <AccountTable expenses={expenses} categories={categories} account={account}/>
    </div>
  );
}

export default AccountPage;
