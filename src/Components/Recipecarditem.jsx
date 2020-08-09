import React from "react";
import "../CSS/Recipecarditem.css";

const Recipecarditem = (props) => {
  console.log(props.recipe.title);
  
  return (
    <div className="dietcare-recipe-card">
      <img src={props.recipe.image} alt="recipe cards" />
      <h2>{props.recipe.title}</h2>
      <p>
        <span>Fat: 23.4934g</span>
      </p>
    </div>
  );
};

export default Recipecarditem;
