import React, { Component } from "react";
import "../CSS/ShoppingList.css"
import Tables from "./Tables"

export class ShoppingList extends Component {
  render() {
    return (
      <div className="shop">
        <Tables />
        <button>Add to list</button>
      </div>
    );
  }
}

export default ShoppingList;
