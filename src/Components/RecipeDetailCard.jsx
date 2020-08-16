import React from "react";
import "../CSS/RecipeDetails.css";
import { Button } from "reactstrap";
// import { fetchRecipeDetail } from "../redux/actions/recipeDetailAction";
// import { connect } from "react-redux";

const RecipeDetailCard = ({ recipeDetail, similar }) => {
  console.log("similar", similar);
  const titleShorter = (title) => {
    if (title.length <= 25) {
      return title;
    } else {
      return `${title.slice(0, 25)}...`;
    }
  };

  return !!recipeDetail && !!similar ? (
    <div className="detailPage">
      <div className="recipe__title">
        <img src={recipeDetail.image} alt="recipe_img" />
        <div className="recipe__title__info">
          <h1>{recipeDetail.title}</h1>
          <span className="recipe__score">
            <strong>
              <ion-icon name="heart-sharp"></ion-icon> Health Score:
            </strong>{" "}
            {recipeDetail.healthScore}%
          </span>
          <span className="recipe__likes">
            <strong>
              <ion-icon name="thumbs-up-sharp"></ion-icon> Likes:
            </strong>{" "}
            {recipeDetail.aggregateLikes}
          </span>
          <span className="recipe__servings">
            <strong>
              <ion-icon name="server-sharp"></ion-icon> Servings:
            </strong>{" "}
            {recipeDetail.servings}
          </span>
          <span className="recipe__prep">
            <strong>
              <ion-icon name="stopwatch-sharp"></ion-icon> Time:
            </strong>{" "}
            {recipeDetail.readyInMinutes} Minutes
          </span>
          <p id="summary">{`${recipeDetail.summary}`}</p>
        </div>
        <hr />
      </div>

      <div className="recipe__ingredients">
        <h2>
          <strong>INGREDIENTS</strong>
        </h2>
        <div className="recipe__ingredients">
          {recipeDetail.extendedIngredients &&
            recipeDetail.extendedIngredients.map((ingredient) => {
              if (ingredient) {
                return (
                  <div key={ingredient.id} className="recipe__ingr__info">
                    <span id="infoSpan">
                      <strong>{ingredient.name}-</strong>
                    </span>
                    <span> {ingredient.original}</span>
                  </div>
                );
              } else {
                return <h1>Loading</h1>;
              }
            })}
        </div>
      </div>
      <div className="recipe__ingredients" id="similarRecipe">
        <hr />
        <h2>SIMILAR RECIPES</h2>

        {similar &&
          similar.map((recipe, index) => {
            if (recipe && (index === 2 || index === 3 || index === 5)) {
              return (
                <div className="similarRecipe__card" key={recipe.id}>
                  <h4>{titleShorter(recipe.title)}</h4>
                  <span>
                    <strong>
                      <ion-icon name="server-sharp"></ion-icon> Servings:{" "}
                    </strong>{" "}
                    {recipe.servings}
                  </span>
                  <span>
                    <br />
                    <strong>
                      <ion-icon name="stopwatch-sharp"></ion-icon> Time:{" "}
                    </strong>{" "}
                    {recipe.readyInMinutes} mins
                  </span>
                  <br />
                  <a href={recipe.sourceUrl}>Get recipes</a>
                </div>
              );
            } else {
              return null;
            }
          })}
      </div>
    </div>
  ) : null;
};

export default RecipeDetailCard;
