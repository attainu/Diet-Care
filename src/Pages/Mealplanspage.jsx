import React from "react";
import Navbar from "../Components/Navbar";
import "../CSS/Mealplanspage.css";
import Mealplans from "../Components/Mealplans";
import { connect } from "react-redux";

const Mealplanspage = () => {
  return (
    <>
      <Navbar />
      <div>
        <div className="mealplans-navbar">
          <h1>Welcome to your Personalised Mealplans Page!</h1>
          <span>Create a New Mealplan</span>
          <span>Go to your Mealplans</span>
          <span>Create Shopping list</span>
        </div>
        <Mealplans />
      </div>
    </>
  );
};

export default connect(mapStatetoprops)(Mealplanspage);
