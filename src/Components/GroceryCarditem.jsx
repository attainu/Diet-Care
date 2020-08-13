import React from "react";
import "../CSS/Grocercarditem.css";

const groceryCarditem = (props) => {
  console.log(props);

  const titleShorter = (title) => {
    if (title.length <= 40) {
      return title;
    } else {
      return `${title.slice(0, 39)}...`;
    }
  };
  return (
    <div className="grocery_card">
      <img src={props.product.image} alt="food image" />
      <h2>{titleShorter(props.product.title)}</h2>
      <button>Add to Shopping List</button>
    </div>
  );
};

export default groceryCarditem;
