import React from "react";
import Search from "../Components/Serachgroceryitem";
import "../CSS/Grocersearchpage.css";
import Groceryitems from "../Components/Grocerycards";
import Logo from "../images/dc-wb.png";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Grocerysearchpage = (props) => {
  return (
    <div className="grocer_page">
      <div className="grocery-navbar">
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
        <Search />
        <ul className="grocery-list-nav">
          <Link style={{ textDecoration: "none" }} to="/shoplist">
            <li>
              <i class="fas fa-shopping-basket"></i>Cart
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
      <Groceryitems />
    </div>
  );
};

const mapStatetoprops = (storeData) => {
  return {
    userData: storeData.userState.user,
  };
};

export default connect(mapStatetoprops)(Grocerysearchpage);
