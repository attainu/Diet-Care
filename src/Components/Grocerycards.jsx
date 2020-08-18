import React, { Component } from "react";
import Logo1 from "../images/g1.jpg";
import Logo2 from "../images/g2.jpg";
import Logo3 from "../images/g3.jpeg";
import Logo4 from "../images/g4.jpg";
import Logo5 from "../images/g5.jpg";
import Logo6 from "../images/g6.jpg";
import Logo7 from "../images/g7.jpg";
import Logo8 from "../images/g8.jpg";
import Grocercard from "./GroceryCarditem";
import "../CSS/Grocercards.css";
import { connect } from "react-redux";
export class Grocerycards extends Component {
  render() {
    return (
      <div className="grocery">
        {!this.props.groceryItems ? (
          <section className="grocery-section">
            <div className="container-fluid image">
              <h1>Search Your Groceries</h1>

              <div className="row justify-content-md-center">
                <div className="col-3">
                  <img src={Logo1} alt="food1" />
                </div>
                <div className="col-3">
                  <img src={Logo2} alt="food2" />
                </div>
                <div className="col-3">
                  <img src={Logo3} alt="food3" />
                </div>
                <div className="col-3">
                  <img src={Logo4} alt="food4" />
                </div>
              </div>
              <div className="row justify-content-md-center">
                <div className="col-3">
                  <img src={Logo5} alt="food5" />
                </div>
                <div className="col-3">
                  <img src={Logo6} alt="food6" />
                </div>
                <div className="col-3">
                  <img src={Logo7} alt="food7" />
                </div>
                <div className="col-3">
                  <img src={Logo8} alt="food8" />
                </div>
              </div>
            </div>
          </section>
        ) : (
          this.props.groceryItems.products.map((element) => {
            return <Grocercard key={element.id} product={element} />;
          })
        )}
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
