import React from "react";
import Navbar from "../Components/Navbar";
import ShoppingList from "../Components/ShoppingList";
<<<<<<< Updated upstream
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
=======
>>>>>>> Stashed changes
import { Breadcrumb } from "react-bootstrap";

const ShoppingPage = (props) => {
  return !props.userData ? (
    <Redirect to="/" />
  ) : (
    <div>
      <Navbar />
      <Breadcrumb style={{ position: "relative", top: "4rem" }}>
        <Breadcrumb.Item
          href="/"
          style={{ textDecorationLine: "none", color: "inherit" }}
        >
          Home
        </Breadcrumb.Item>
        {/* <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
    Library
  </Breadcrumb.Item> */}
        <Breadcrumb.Item href="/searchGroceryItem">Grocery</Breadcrumb.Item>
        <Breadcrumb.Item active>Cart</Breadcrumb.Item>
      </Breadcrumb>
      <ShoppingList />
    </div>
  );
};

const mapStatetoprops = (storeData) => {
  return {
    userData: storeData.userState.user,
  };
};

export default connect(mapStatetoprops)(ShoppingPage);
