import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="navBar-container">
      <img
        src={process.env.PUBLIC_URL + "/budgeteerLogoBlack.png"}
        alt="Logo"
        className="logo"
      />
      <div className="navbar-links">
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
    </div>
  );
}

export default NavBar;
