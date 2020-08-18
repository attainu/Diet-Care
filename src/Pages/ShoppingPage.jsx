import React from "react";
import Navbar from "../Components/Navbar";
import ShoppingList from "../Components/ShoppingList";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const ShoppingPage = (props) => {
  return !props.userData ? (
    <Redirect to="/" />
  ) : (
    <div>
      <Navbar />
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
