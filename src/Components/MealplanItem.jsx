import React, { Component } from "react";
import "../CSS/Mealplanitem.css";

export class MealplanItem extends Component {
  render() {
    return (
      <div className="mealplan_cards">
        {this.props.mealplan.map((element) => {
          if (element.slot === 1) {
            return (
              <div className="meals_card mealplan_card-breakfast">
                <span
                  className="time breakfast"
                  style={{ marginBottom: "0px" }}
                >
                  BREAKFAST
                </span>
                <img src={element.value.image} alt="food image" />
                <span className="meal-title">
                  <h1>{element.value.title}</h1>
                  <p>Servings: {element.value.servings}</p>
                </span>
              </div>
            );
          } else if (element.slot === 2) {
            return (
              <div className="meals_card mealplan_card-lunch">
                <span className="time lunch" style={{ marginBottom: "0px" }}>
                  LUNCH
                </span>
                <img src={element.value.image} alt="food image" />
                <span className="meal-title">
                  <h1>{element.value.title}</h1>
                  <p>Servings: {element.value.servings}</p>
                </span>
              </div>
            );
          } else if (element.slot === 3) {
            return (
              <div className="meals_card mealplan_card-dinner">
                <span className="time dinner" style={{ marginBottom: "0px" }}>
                  DINNER
                </span>
                <img src={element.value.image} alt="food image" />
                <span className="meal-title">
                  <h1>{element.value.title}</h1>
                  <p>Servings: {element.value.servings}</p>
                </span>
              </div>
            );
          }
        })}
      </div>
    );
  }
}

export default MealplanItem;
