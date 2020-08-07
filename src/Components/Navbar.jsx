import React from "react";
import "../CSS/Navbar.css";
import Logo from "../images/dc-wb.png";
import Search from "./Serach";
const Navbar = () => {
  return (
    <div className="dietcare-navbar">
      <img src={Logo} alt="logo" />
      <Search />
      <ul className="navbar-ul">
        <li>
          <i className="fas fa-user"></i> My Profile
        </li>
        <li>Login/Signup</li>
      </ul>
    </div>
  );
};

export default Navbar;
