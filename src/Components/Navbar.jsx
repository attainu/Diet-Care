import React from "react";
import "../CSS/Navbar.css";
import Logo from "../images/dc-wb.png";
import Search from "./Serach";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="dietcare-navbar">
      <img src={Logo} alt="logo" />
      <Search />
      <ul className="navbar-ul">
        <li>
          <i className="fas fa-user"></i> My Profile
        </li>
        <Link style={{ textDecoration: "none" }} to="/signup">
          <li>Login/Signup</li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
