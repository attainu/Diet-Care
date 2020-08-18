import React, { Component } from "react";
import "../CSS/Createmealplan.css";
import Navbar from "./Navbar";
import {
  addMealplanofday,
  setRecipesuggestions,
} from "../redux/actions/mealplansAction";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

export class Createmealaplan extends Component {
  state = {
    mealtimeState: false,
    mealslot: null,
    date: "",
    timeStamp: null,
    typeState: false,
    foodtyped: "",
    foodState: true,
    chosenRecipe: null,
    foodType: "",
    suggestrecipelistState: true,
    servingstate: false,
    serving: null,
  };
  handleclickservings = () => {
    this.setState({ servingstate: !this.state.servingstate });
  };
  handleclickserving = (e) => {
    this.setState({ serving: e.target.innerText });
  };

  handleclickchoose = () => {
    this.setState({ mealtimeState: !this.state.mealtimeState });
  };
  handleclickmealtime = (e) => {
    if (e.target.innerText === "Breakfast") {
      this.setState({ mealslot: 1 });
    } else if (e.target.innerText === "Lunch") {
      this.setState({ mealslot: 2 });
    } else if (e.target.innerText === "Dinner") {
      this.setState({ mealslot: 3 });
    }
  };
  handleclicktype = () => {
    this.setState({ typeState: !this.state.typeState });
  };
  handleChangetypefood = (e) => {
    this.setState({ foodtyped: e.target.value }, () => {
      this.props.setRecipesuggestions(this.state.foodtyped);
    });
  };
  handleclickfood = (e) => {
    const chosenRecipe = this.props.recipeSuggestions.results.find(
      (element) => {
        return element.title === e.target.innerText;
      }
    );
    this.setState({ chosenRecipe: chosenRecipe });
    this.setState({
      foodState: !this.state.foodState,
    });
  };
  handleclickfoodtype = (e) => {
    this.setState({ foodType: e.target.innerText });
  };
  handleChangedate = (e) => {
    this.setState({ date: e.target.value }, () => {
      let myDate = this.state.date;
      myDate = myDate.split("-");
      const newDate = myDate[1] + "/" + myDate[2] + "/" + myDate[0];
      const dateTimestamp = new Date(newDate).getTime();
      this.setState({ timeStamp: dateTimestamp });
    });
  };
  handleClickCreateMeal = () => {
    const finalChosenrecipe = this.state.chosenRecipe;
    finalChosenrecipe.servings = this.state.serving;
    const mealplantemplate = {
      date: this.state.timeStamp,
      slot: this.state.mealslot,
      position: 0,
      type: this.state.foodType,
      value: finalChosenrecipe,
    };

    this.props.addMealplanofday(this.props.userData, mealplantemplate);
  };

  // componentDidMount() {
  //   const mealplantemplate = {
  //     date: 1589500800,
  //     slot: 1,
  //     position: 0,
  //     type: "RECIPE",
  //     value: {
  //       id: 296213,
  //       servings: 2,
  //       title: "Spinach Salad with Roasted Vegetables and Spiced Chickpea",
  //       imageType: "jpg",
  //     },
  //   };
  //   this.props.addMealplanofday(this.props.userData, mealplantemplate);
  // }

  render() {
    return !this.props.userData ? (
      <Redirect to="/" />
    ) : (
      <>
        <Navbar />
        <div className="create_mealplan">
          <ul className="createmeal_card">
            <li onClick={this.handleclickchoose} className="template_input">
              Choose meal time{" "}
              {this.state.mealtimeState ? (
                <i class="fas fa-chevron-up"></i>
              ) : (
                <i class="fas fa-chevron-down"></i>
              )}
              {this.state.mealtimeState ? (
                <ul className="template_popup">
                  <li onClick={this.handleclickmealtime}>Breakfast</li>
                  <li onClick={this.handleclickmealtime}>Lunch</li>
                  <li onClick={this.handleclickmealtime}>Dinner</li>
                </ul>
              ) : null}
            </li>

            <li onClick={this.handleclicktype} className="template_input">
              Choose type of food{" "}
              {this.state.typeState ? (
                <i class="fas fa-chevron-up"></i>
              ) : (
                <i class="fas fa-chevron-down"></i>
              )}
              {this.state.typeState ? (
                <ul className="template_popup">
                  <li onClick={this.handleclickfoodtype}>RECIPE</li>
                </ul>
              ) : null}
            </li>
            <li id="recipe-li" className="template_input">
              <input
                onChange={this.handleChangetypefood}
                type="text"
                name="recipe"
                id="recipe"
                placeholder="Search your recipe.."
              />

              {this.state.foodState ? (
                <ul className="template_popup">
                  {!this.props.recipeSuggestions
                    ? null
                    : this.props.recipeSuggestions.results.map((element) => {
                        return (
                          <li key={element.id} onClick={this.handleclickfood}>
                            {element.title}
                          </li>
                        );
                      })}
                </ul>
              ) : null}
            </li>
            <li onClick={this.handleclickservings} className="template_input">
              Choose Servings{" "}
              {this.state.servingstate ? (
                <i class="fas fa-chevron-up"></i>
              ) : (
                <i class="fas fa-chevron-down"></i>
              )}
              {this.state.servingstate ? (
                <ul className="template_popup">
                  <li onClick={this.handleclickserving}>1</li>
                  <li onClick={this.handleclickserving}>2</li>
                  <li onClick={this.handleclickserving}>3</li>
                </ul>
              ) : null}
            </li>

            <li>
              <h3>Choose Date:</h3>
              <li>
                <input
                  onChange={this.handleChangedate}
                  type="date"
                  name="date"
                  id="date"
                />
              </li>
            </li>

            <button onClick={this.handleClickCreateMeal}>Create Meal</button>
          </ul>
          <img
            src="https://images.pexels.com/photos/1128678/pexels-photo-1128678.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="food image"
          />
        </div>
      </>
    );
  }
}

const mapStatetoprops = (storeData) => {
  return {
    mealplanTemplate: storeData.mealplansState.mealPlantemplates,
    userData: storeData.userState.user,
    recipeSuggestions: storeData.mealplansState.recipesuggestions,
  };
};

export default connect(mapStatetoprops, {
  addMealplanofday: addMealplanofday,
  setRecipesuggestions: setRecipesuggestions,
})(Createmealaplan);
