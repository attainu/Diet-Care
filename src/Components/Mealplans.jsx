import React, { Component } from "react";
import MealplanItem from "./MealplanItem";
import Navbar from "./Navbar";
import "../CSS/Mealplans.css";
import { setMealplans } from "../redux/actions/mealplansAction";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";

export class Mealplans extends Component {
  state = {
    date: null,
    timeStamp: null,
  };

  handlechangedate = async (e) => {
    await this.setState({ date: e.target.value }, async () => {
      let myDate = this.state.date;
      myDate = myDate.split("-");
      const newDate = myDate[1] + "/" + myDate[2] + "/" + myDate[0];
      const dateTimestamp = new Date(newDate).getTime();
      await this.setState({ timeStamp: dateTimestamp });
    });

    this.props.setMealplans(this.props.userData, this.state.timeStamp);
  };
  render() {
    return !this.props.userData ? (
      <Redirect to="/" />
    ) : (
      <div className="mealpan_page">
        <Navbar />
        <div className="mealplan-date">
          <span className="choose-date">
            Choose Date:
            <input
              onChange={this.handlechangedate}
              type="date"
              name="date"
              id="date"
            />
            <h4
              style={{
                textAlign: "center",
                color: "white",
                display: "inline-block",
                fontSize: "1.2rem",
                marginLeft: "30px",
              }}
            >
              Don't have any?{" "}
              <Link style={{ textDecoration: "none" }} to="/createmealplan">
                Create a Mealplan
              </Link>
            </h4>
          </span>
        </div>
        <div className="mealplans">
          {!this.props.mealplan ? null : (
            <MealplanItem mealplan={this.props.mealplan} />
          )}
        </div>
      </div>
    );
  }
}

const mapStatetoprops = (storeData) => {
  return {
    userData: storeData.userState.user,
    mealplan: storeData.mealplansState.mealPlans,
  };
};
export default connect(mapStatetoprops, { setMealplans: setMealplans })(
  Mealplans
);
