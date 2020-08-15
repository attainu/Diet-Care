import React, { Component } from "react";
import "../CSS/ShoppingDetail.css";
import { addItemtoShoppingList } from "../redux/actions/shoppingActon";
import { connect } from "react-redux";

export class ShoppingDetail extends Component {
  handleClick = () => {
    const template = {
      item: this.props.itemdetail.title,
      parse: true,
    };
    console.log(template);
    this.props.addItemtoShoppingList(this.props.userData, template);
  };
  render() {
    return !this.props.itemdetail ? (
      <h1>Loading...</h1>
    ) : (
      <>
        <div class="product">
          <div class="product__photo">
            <div class="photo-container">
              <div class="photo-main">
                <img
                  src={this.props.itemdetail.images[0]}
                  alt="green apple slice"
                />
              </div>
            </div>
          </div>
          <div class="product__info">
            <div class="title">
              <h1>{this.props.itemdetail.title}</h1>
            </div>
            <div class="price">
              R$ <span>{this.props.itemdetail.price}</span>
            </div>

            <div class="description">
              <h3>BENEFITS</h3>
              <ul>
                {this.props.itemdetail.badges.map((element) => {
                  return <li>{element}</li>;
                })}
              </ul>
            </div>
            <button onClick={this.handleClick} class="buy--btn">
              ADD TO CART
            </button>
          </div>
        </div>
      </>
    );
  }
}

const mapstatetoprops = (storeData) => {
  return {
    userData: storeData.userState.user,
  };
};
export default connect(mapstatetoprops, {
  addItemtoShoppingList: addItemtoShoppingList,
})(ShoppingDetail);
