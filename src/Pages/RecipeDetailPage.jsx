import React, { Component } from "react";
import Navbar from "../Components/Navbar";
import { connect } from "react-redux";
import { fetchRecipeDetail } from "../redux/actions/recipeDetailAction";
import RecipeDetailCard from "../Components/RecipeDetailCard";

class RecipeDetailPage extends Component {
  componentDidMount() {
    this.props.fetchRecipeDetail(this.props.match.params.recipeId);
  }
  render() {
    return (
      <div style={{ height: "100vh" }}>
        <Navbar />
        {/* {this.props.recipeDetail ? (
          <RecipeDetailCard recipeDetail={this.props.currentRecipe} />
        ) : (
          <h1>Loading...</h1>
        )} */}
        <RecipeDetailCard recipeDetail={this.props.currentRecipe} />
      </div>
    );
  }
}

const mapStateToProps = (storeState) => {
  return {
    currentRecipe: storeState.recipeDetailState.recipeDetail,
  };
};

export default connect(mapStateToProps, { fetchRecipeDetail })(
  RecipeDetailPage
);
