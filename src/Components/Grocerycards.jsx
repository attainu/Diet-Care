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
      <div className="grocer_cards">
        {!this.props.groceryItems ? (
          <div
            style={{ width: "100vw", height: "100vh" }}
            className="grocer_background"
          >
            <div
              style={{
                width: "81.2vw",
                height: "70vh",
                backgroundColor: "transparent",
                overflow: "hidden",
                padding: "0rem 0.5rem",
              }}
              className="grocer_section"
            >
              <h1
                style={{
                  textAlign: "center",
                  color: "whitesmoke",
                  fontSize: "3.5rem",
                }}
              >
                Search your groceries
              </h1>
              <img
                style={{ height: "16rem", paddingTop: "0px" }}
                className=""
                src={Logo1}
                alt="img1"
              />
              <img
                style={{ height: "22rem", paddingTop: "3rem" }}
                className=""
                src={Logo2}
                alt="img2"
              />
              <img
                style={{ height: "16rem" }}
                className=""
                src={Logo3}
                alt="img3"
              />
              <img
                style={{ height: "22rem", paddingTop: "3rem" }}
                className=""
                src={Logo4}
                alt="img4"
              />
              <img
                style={{ height: "16rem", marginTop: "-11rem" }}
                className=""
                src={Logo5}
                alt="img5"
              />
              <img
                style={{ height: "22rem", marginTop: "1rem" }}
                className=""
                src={Logo6}
                alt="img6"
              />
              <img
                style={{ height: "16rem", marginTop: "-11rem" }}
                className=""
                src={Logo7}
                alt="img7"
              />
              <img
                style={{ height: "22rem", marginTop: "1rem" }}
                className=""
                src={Logo8}
                alt="img8"
              />
            </div>
          </div>
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
