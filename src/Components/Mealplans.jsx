import React, { Component } from "react";
import MealplanItem from "./MealplanItem";
import "../CSS/Mealplans.css";

export class Mealplans extends Component {
  render() {
    return (
      <div className="mealplans">
        <MealplanItem />
        <MealplanItem />
        <MealplanItem />
        <MealplanItem />
      </div>
    );
  }
}

export default Mealplans;
