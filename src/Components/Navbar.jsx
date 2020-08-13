import React from "react";
import "../CSS/Navbar.css";
import Logo from "../images/dc-wb.png";
import Search from "./Serach";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
const Navbar = (props) => {
  return (
    <div className="dietcare-navbar">
      <img src={Logo} alt="logo" />
      <Search />

      <ul className="navbar-ul">
        <Link style={{ textDecoration: "none" }} to="/searchgroceryitem">
          <li>
            <i class="fas fa-shopping-basket"></i>Search
          </li>
        </Link>

        {!props.userData ? null : (
          <li>
            <i className="fas fa-user"></i> My Profile
          </li>
        )}

        {props.userData ? null : (
          <Link style={{ textDecoration: "none" }} to="/signup">
            <li>Login/Signup</li>
          </Link>
        )}
      </ul>
    </div>
  );
};
const mapStatetoprops = (storeData) => {
  return {
    userData: storeData.userState.user,
  };
};

export default connect(mapStatetoprops)(Navbar);
