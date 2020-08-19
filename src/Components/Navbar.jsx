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
        <Navbar expand="lg" fixed="top" bg="dark" variant="dark">
          <Navbar.Brand>
            <Link to="/">
              <img src={Logo} alt="logo" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle m-auto aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Search />

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
                <NavDropdown title="My Profile" id="basic-nav-dropdown">
                  <NavDropdown.Item>
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
                  <NavDropdown.Item>
                    <Link
                      style={{
                        textDecoration: "none",
                        listStyle: "none",
                        color: "inherit",
                      }}
                      to="/mealplans"
                    >
                      <ion-icon
                        style={{ fontSize: "1.5rem", paddingRight: "0.5rem" }}
                        name="fast-food-outline"
                      ></ion-icon>{" "}
                      Mealplans
                    </Link>
                  </NavDropdown.Item>

                  <NavDropdown.Item onClick={handleLogout}>
                    <Link
                      style={{
                        textDecoration: "none",
                        listStyle: "none",
                        color: "inherit",
                      }}
                      to="/"
                    >
                      <ion-icon
                        style={{ fontSize: "1.5rem", paddingRight: "0.5rem" }}
                        name="log-out-outline"
                      ></ion-icon>{" "}
                      Logout
                    </Link>
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
