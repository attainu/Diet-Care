import React, { Component } from "react";
import "../CSS/ShoppingList.css";
import Tables from "./Tables";
import { Link } from "react-router-dom";

export class ShoppingList extends Component {
  render() {
    return (
      <div className="shop">
        <Tables />
        <Link to="/searchGroceryItem">
          <button>Add to list</button>
        </Link>
      </div>
    );
  }
}

export default ShoppingList;
