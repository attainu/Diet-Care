import React, { Component } from "react";
import "../CSS/Mealplanitem.css";

export class MealplanItem extends Component {
  render() {
    return (
      <div className="meals_card">
        <ul className="meal_date">
          <li>Date: 07/02/2020</li>
          <li>Day: Monday</li>
        </ul>
        <ul className="meal_slot">
          <li>Slot: 1</li>
          <li>Type of Meal: Recipe</li>
          <li>Serving: 2</li>
          <li>Meal-title: Denn's Lamb Bratwurst - 1/2 Pkg</li>
        </ul>
        <ul className="meal_slot">
          <li>Slot: 2</li>
          <li>Type of Meal: Recipe</li>
          <li>Serving: 2</li>
          <li>Meal-title: Denn's Lamb Bratwurst - 1/2 Pkg</li>
        </ul>
        <ul className="meal_slot">
          <li>Slot: 3</li>
          <li>Type of Meal: Recipe</li>
          <li>Serving: 2</li>
          <li>Meal-title: Denn's Lamb Bratwurst - 1/2 Pkg</li>
        </ul>
      </div>
    );
  }
}

export default MealplanItem;
