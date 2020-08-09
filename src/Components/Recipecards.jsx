import React, { Component } from "react";
import Recipecarditem from "./Recipecarditem";
import "../CSS/Recipecards.css";
import { connect } from "react-redux";
import { fetchRecipes } from "../redux/actions/recipeAction";

export class Recipecards extends Component {
  componentDidMount() {
    this.props.fetchRecipes("pasta");
  }
  render() {
    return (
      <div className="dietcare-recipe-cards">
        {!this.props.recipes ? (
          <h1>Loading...</h1>
        ) : (
          this.props.recipes.results.map((element) => {
            return <Recipecarditem key={element.id} recipe={element} />;
          })
        )}
      </div>
    );
  }
}

const mapStatetoprops = (storedata) => {
  return {
    recipes: storedata.recipesState.recipes,
  };
};
export default connect(mapStatetoprops, { fetchRecipes: fetchRecipes })(
  Recipecards
);
