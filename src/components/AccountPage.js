import React from 'react'
import { useParams, useHistory } from "react-router-dom"

function AccountPage({ accounts }) {
  const { accountId } = useParams();
  const history = useHistory();

  const account = accounts.find((acc) => String(acc.id) === accountId);


  if(!account) {
    return <div>Account not found</div>
  }

  const handleGoBack = () => {
    history.goBack()
  }

    return (
    <div>
        <h1>{account.name}</h1>
        <p>Balance: ${account.amount}</p>
        <button onClick={handleGoBack}>Go Back</button>
    </div>
  )
}

export default AccountPage