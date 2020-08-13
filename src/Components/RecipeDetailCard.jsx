import React from "react";
import "../CSS/RecipeDetails.css";
import Button from "./Button";
// import { fetchRecipeDetail } from "../redux/actions/recipeDetailAction";
// import { connect } from "react-redux";

const RecipeDetailCard = ({ recipeDetail }) => {
  console.log(recipeDetail);

  return !!recipeDetail ? (
    <div className="detailPage">
      <div className="recipe__title">
        <h1>{recipeDetail.title}</h1>
        <span className="recipe__score">
          <strong>Health Score:</strong> {recipeDetail.healthScore}%
        </span>
        <span className="recipe__likes">
          <strong>Likes:</strong> {recipeDetail.aggregateLikes}
        </span>
        <span className="recipe__servings">
          <strong>Servings:</strong> {recipeDetail.servings}
        </span>
        <span className="recipe__prep">
          <strong>Prepare In:</strong> {recipeDetail.readyInMinutes} Minutes
        </span>
        <img src={recipeDetail.image} alt="recipe_img" />
      </div>
      <div className="recipe__ingredients">
        <h2>
          <strong>INGREDIENTS</strong>
        </h2>
        <div className="recipe__ingredients__info">
          {recipeDetail.extendedIngredients &&
            recipeDetail.extendedIngredients.map((ingredient) => {
              if (ingredient) {
                return (
                  <div key={ingredient.id} className="recipe__ingr__info">
                    <h4>{ingredient.name}</h4>
                    <span>{ingredient.original}</span>
                    <Button
                      heading="Ingrident's Substitute"
                      item1="1 cup = 7/8 cup vegetable oil + 1/2 tsp salt"
                      item2="1 cup = 7/8 cup shortening and 1/2 tsp salt"
                      item3="1 cup = 1 cup margarine"
                    />
                  </div>
                );
              } else {
                return <h1>Loading</h1>;
              }
            })}
          {/* <div className="recipe__nutrients">
            {recipeDetail &&
              recipeDetail.nutrition.nutrients.map((nutrient) => {
                if (nutrient) {
                  {console.log(nutrient.title)}
                  return (
                    <Button
                      size="lg"
                      heading="Nutritional Info"
                      item1={nutrient.title}
                      item2="Protein: "
                      item3="Carbs: 68g"
                      item4="Fat: 9g"
                    />
                  );
                } else {
                  return <span>Loading...</span>;
                }
              })}
          </div> */}
        </div>
      </div>
    </div>
  ) : null;
};

export default RecipeDetailCard;
