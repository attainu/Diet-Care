import React from "react";
import "../CSS/Recipecarditem.css";
import {Link} from "react-router-dom"

const Recipecarditem = (props) => {
  console.log(props.recipe.title);
  console.log(props.recipe.id);
  
  return (
    <Link to={`/recipe/${props.recipe.id}`}>
    <div className="dietcare-recipe-card">
      <img src={props.recipe.image} alt="recipe cards" />
      <h2>{props.recipe.title}</h2>
      <p>
        <span>Fat: 23.4934g</span>
      </p>
    </div></Link>
  );
};

export default Recipecarditem;
