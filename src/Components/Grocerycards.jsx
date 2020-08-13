import React, { Component } from "react";
import Grocercard from "./GroceryCarditem";
import "../CSS/Grocercards.css";
import { connect } from "react-redux";
export class Grocerycards extends Component {
  render() {
    return (
      <div className="grocer_cards">
        {!this.props.groceryItems
          ? null
          : this.props.groceryItems.products.map((element) => {
              return <Grocercard key={element.id} product={element} />;
            })}
      </div>
    );
  }
}

const mapStatetoprops = (storedata) => {
  return {
    groceryItems: storedata.grocerState.searchitemResults,
  };
};

export default connect(mapStatetoprops)(Grocerycards);
