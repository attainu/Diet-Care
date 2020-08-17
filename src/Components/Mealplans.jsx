import React, { Component } from "react";
import MealplanItem from "./MealplanItem";
import "../CSS/Mealplans.css";
import { setMealplans } from "../redux/actions/mealplansAction";
import { connect } from "react-redux";

export class Mealplans extends Component {
  componentDidMount() {
    this.props.setMealplans(this.props.userData, "2020-05-15");
  }
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

const mapStatetoprops = (storeData) => {
  return {
    userData: storeData.userState.user,
  };
};
export default connect(mapStatetoprops, { setMealplans: setMealplans })(
  Mealplans
);
