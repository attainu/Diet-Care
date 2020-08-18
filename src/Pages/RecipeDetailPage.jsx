import React, { Component } from "react";
import Navbar from "../Components/Navbar";
import { connect } from "react-redux";
import { Breadcrumb } from "react-bootstrap";
import {
  fetchRecipeDetail,
  fetchSimilar,
} from "../redux/actions/recipeDetailAction";
import RecipeDetailCard from "../Components/RecipeDetailCard";

class RecipeDetailPage extends Component {
  componentDidMount() {
    this.props.fetchRecipeDetail(this.props.match.params.recipeId);
    this.props.fetchSimilar(this.props.match.params.recipeId);
  }
  render() {
    return (
      <div style={{ height: "100vh" }}>
        <Navbar />
        <Breadcrumb
          style={{
            position: "relative",
            top: "4rem",
          }}
        >
          <Breadcrumb.Item
            href="/"
            style={{ textDecorationLine: "none", color: "inherit" }}
          >
            Home
          </Breadcrumb.Item>
          {/* <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
    Library
  </Breadcrumb.Item> */}
          <Breadcrumb.Item active>Recipe Details</Breadcrumb.Item>
        </Breadcrumb>
        {
          <RecipeDetailCard
            recipeDetail={this.props.currentRecipe}
            similar={this.props.recipeSimilar}
          />
        }
      </div>
    );
  }
}

const mapStateToProps = (storeState) => {
  return {
    currentRecipe: storeState.recipeDetailState.recipeDetail,
    recipeSimilar: storeState.recipeDetailState.similar,
  };
};

export default connect(mapStateToProps, { fetchRecipeDetail, fetchSimilar })(
  RecipeDetailPage
);
