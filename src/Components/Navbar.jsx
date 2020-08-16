import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "../CSS/Navbar.css";
import Logo from "../images/dc-wb.png";
import Search from "./Serach";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { userLogout } from "../redux/actions/userActions";

const NavBar = (props) => {
  const handleLogout = () => {
    props.userLogout();
  };
  return (
    <>
      <div>
        <Navbar
          collapseOnSelect
          expand="lg"
          fixed="top"
          bg="dark"
          variant="dark"
        >
          <Navbar.Brand>
            <Link to="/">
              <img src={Logo} alt="logo" />
            </Link>
          </Navbar.Brand>
          <Search />
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            {!props.userData ? null : (
              <Nav className="mr-auto">
                <Nav.Link>
                  <Link
                    style={{ textDecoration: "none", color: "inherit" }}
                    to="/searchGroceryItem"
                  >
                    Grocery
                  </Link>
                </Nav.Link>
                <NavDropdown title="My Profile" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.2">
                    <Link
                      style={{
                        textDecoration: "none",
                        listStyle: "none",
                        color: "inherit",
                      }}
                      to="/shoplist"
                    >
                      <ion-icon
                        style={{ fontSize: "1.5rem", paddingRight: "0.5rem" }}
                        name="cart-sharp"
                      ></ion-icon>{" "}
                      Cart
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    <span>
                      {!props.userData ? null : (
                        <li onClick={handleLogout}>Logout</li>
                      )}
                    </span>
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                </NavDropdown>
              </Nav>
            )}
            {props.userData ? null : (
              <Link
                style={{
                  textDecoration: "none",
                  listStyle: "none",
                  color: "white",
                  fontSize: "1.5rem",
                }}
                to="/login"
              >
                <li>Login</li>
              </Link>
            )}
          </Navbar.Collapse>
        </Navbar>
      </div>
    </>
  );
};
const mapStatetoprops = (storeData) => {
  return {
    userData: storeData.userState.user,
  };
};

export default connect(mapStatetoprops, { userLogout: userLogout })(NavBar);

{
  /* --------------- */
}
{
  /* <div className="dietcare-navbar">
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
              <i className="fas fa-user"></i>
              <div className="profileDrop">
                <span>My Profile</span>
                <div className="profileDrop-content">
                  <Link style={{ textDecoration: "none" }} to="/shoplist">
                    <li>
                      <ion-icon
                        style={{ fontSize: "1.5rem", paddingRight: "0.5rem" }}
                        name="cart-sharp"
                      ></ion-icon>{" "}
                      Cart
                    </li>
                  </Link>
                  <span>Username: </span>
                  <span>Password: </span>
                  <span>
                    {!props.userData ? null : (
                      <li onClick={handleLogout}>Logout</li>
                    )}
                  </span>
                </div>
              </div>
            </li>
          )}

          {props.userData ? null : (
            <Link style={{ textDecoration: "none" }} to="/login">
              <li>Login</li>
            </Link>
          )}
        </ul>
      </div> */
}
