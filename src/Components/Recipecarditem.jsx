import React from "react";
import "../CSS/Recipecarditem.css";
import { Link } from "react-router-dom";

const Recipecarditem = (props) => {
  console.log(props.recipe.title);
  console.log(props.recipe.id);

  const titleShorter = (title) => {
    if (title.length <= 50) {
      return title;
    } else {
      return `${title.slice(0, 49)}...`;
    }
  };

  return (
    <Link
      style={{ textDecoration: "none", color: "inherit" }}
      to={`/recipe/${props.recipe.id}`}
    >
      <div className="dietcare-recipe-card">
        <img src={props.recipe.image} alt="recipe cards" />
        <h2>{titleShorter(props.recipe.title)}</h2>
      </div>
    </Link>
  );
};

export default Recipecarditem;
