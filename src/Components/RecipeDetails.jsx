import React from "react";
import Logo from "../images/food.jpg";
import "../CSS/RecipeDetails.css";

const RecipeDetails = () => {
  return (
    <div className="detailPage">
      <div className="recipe__title">
        <h1>Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs</h1>
        <span className="recipe__score">
          <strong>Health Score:</strong> 83%
        </span>
        <span className="recipe__likes">
          <strong>Likes:</strong> 290
        </span>
        <span className="recipe__servings">
          <strong>Servings:</strong> 2
        </span>
        <span className="recipe__prep">
          <strong>Prepare In:</strong> 30 Minutes
        </span>
        <img src={Logo} alt="recipe_img" />
      </div>
      <div className="recipe__ingredients">
        <h2>
          <strong>INGREDIENTS</strong>
        </h2>
        <div className="recipe__ingredients__info">
          <div className="recipe__ingr__info">
            <h4>Butter</h4>
            <span>1 tbsp butter</span>
          </div>
          <div className="recipe__ingr__info">
            <h4>Cauliflower Florets</h4>
            <span>
              about 2 cups frozen cauliflower florets, thawed, cut into
              bite-sized pieces
            </span>
          </div>
          <div className="recipe__ingr__info">
            <h4>Cheese</h4>
            <span>2 tbsp grated cheese (I used romano)</span>
          </div>
          {/* <button>Add the INGREDIENTS to cart</button> */}
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;

{/* <div className="recipe__ingr__para">
  <h5>
    Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs might be a good
    recipe to expand your main course repertoire. One portion of this dish
    contains approximately <b>19g of protein </b>, <b>20g of fat </b>, and a
    total of <b>584 calories </b>. For <b>$1.63 per serving </b>, this recipe{" "}
    <b>covers 23% </b> of your daily requirements of vitamins and minerals. This
    recipe serves 2. It is brought to you by fullbellysisters.blogspot.com. 209
    people were glad they tried this recipe. A mixture of scallions, salt and
    pepper, white wine, and a handful of other ingredients are all it takes to
    make this recipe so scrumptious. From preparation to the plate, this recipe
    takes approximately <b>45 minutes </b>. All things considered, we decided
    this recipe <b>deserves a spoonacular score of 83% </b>. This score is
    awesome.
  </h5>
</div>; */}
