import React from "react";
import "../CSS/Recipecarditem.css";

const Recipecarditem = () => {
  return (
    <div className="dietcare-recipe-card">
      <img
        src="https://spoonacular.com/recipeImages/749013-312x231.jpeg"
        alt="recipe cards"
      />
      <h2>Pasta</h2>
      <p>
        <span>Fat: 23.4934g</span>
      </p>
    </div>
  );
};

export default Recipecarditem;
