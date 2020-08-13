import React from "react";
import "../CSS/Grocercarditem.css";

const groceryCarditem = () => {
  return (
    <div className="grocery_card">
      <img
        src="https://spoonacular.com/productImages/181334-312x231.jpg"
        alt="food image"
      />
      <h2>Butter Chicken</h2>
      <button>Add to Shopping List</button>
    </div>
  );
};

export default groceryCarditem;
