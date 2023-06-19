import React from 'react'

function Dashboard() {
    const currentDate = new Date();

  return (
    <div>
        <h3>Today's Date is {currentDate.toLocaleDateString()}</h3>
    </div>
  )
}

export default Dashboard