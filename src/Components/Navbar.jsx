import React from "react";
import "../CSS/Navbar.css";
import Logo from "../images/dc-wb.png";
import Search from "./Serach";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { userLogout } from "../redux/actions/userActions";
const Navbar = (props) => {
  const handleLogout = () => {
    props.userLogout();
  };
  return (
    <div className="dietcare-navbar">
      <Link to="/">
        <img src={Logo} alt="logo" />
      </Link>
      <Search />

      <ul className="navbar-ul">
        <Link style={{ textDecoration: "none" }} to="/shoplist">
          <li>
            <ion-icon
              style={{ fontSize: "1.5rem", paddingRight: "0.5rem" }}
              name="cart-sharp"
            ></ion-icon>{" "}
            Cart
          </li>
        </Link>

        {!props.userData ? null : (
          <li>
            <i className="fas fa-user"></i> My Profile
          </li>
        )}
        {!props.userData ? null : <li onClick={handleLogout}>Logout</li>}
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

export default connect(mapStatetoprops, { userLogout: userLogout })(Navbar);
