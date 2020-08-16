import React from "react";
import Search from "../Components/Serachgroceryitem";
import "../CSS/Grocersearchpage.css";
import Groceryitems from "../Components/Grocerycards";
import Logo from "../images/dc-wb.png";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

const Grocerysearchpage = (props) => {
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

        <Groceryitems />
      </div>
    </>
  );
};

const mapStatetoprops = (storeData) => {
  return {
    userData: storeData.userState.user,
  };
};

export default connect(mapStatetoprops)(Grocerysearchpage);
