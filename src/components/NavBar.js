import React from 'react'
import { NavLink } from "react-router-dom"

function NavBar() {
  return (
    <div className='navbar'>
        <ul>
            <li>
                <NavLink exact to="/">
                    Dashboard
                </NavLink>
            </li>
            <li>
                <NavLink exact to="/expenses">
                    Expenses
                </NavLink>
            </li>
            <li>
                <NavLink exact to="/accounts">
                    Accounts
                </NavLink>
            </li>
        </ul>
    </div>
  )
}

export default NavBar