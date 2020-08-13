import React, { Component } from "react";
import Navbar from "../Components/Navbar";
import { connect } from "react-redux";
import {
  fetchRecipeDetail,
  fetchSubstitute,
} from "../redux/actions/recipeDetailAction";
import RecipeDetailCard from "../Components/RecipeDetailCard";

class RecipeDetailPage extends Component {
  componentDidMount() {
    this.props.fetchRecipeDetail(this.props.match.params.recipeId);
    this.props.fetchSubstitute(this.props.ingredientSubstitute);
  }
  render() {
    return (
      <div style={{ height: "100vh" }}>
        <Navbar />
        {
          <RecipeDetailCard
            recipeDetail={this.props.currentRecipe}
            substitute={this.props.ingredientSubstitute}
          />
        }
      </div>
    );
  }
}

const mapStateToProps = (storeState) => {
  return {
    currentRecipe: storeState.recipeDetailState.recipeDetail,
    ingredientSubstitute: storeState.recipeDetailState.substitute,
  };
};

export default connect(mapStateToProps, { fetchRecipeDetail, fetchSubstitute })(
  RecipeDetailPage
);
