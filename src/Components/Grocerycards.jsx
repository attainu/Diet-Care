import React, { Component } from "react";
import Grocercard from "./GroceryCarditem";
import "../CSS/Grocercards.css";

export class Grocerycards extends Component {
  render() {
    return (
      <div className="grocer_cards">
        <Grocercard />
        <Grocercard />
        <Grocercard />
        <Grocercard />
      </div>
    );
  }
}

export default Grocerycards;
