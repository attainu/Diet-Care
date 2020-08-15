import ShoppingDetail from "../Components/ShoppingDetail";
import React, { Component } from "react";
import { getShoppingListitemDetail } from "../redux/actions/shoppingActon";
import { connect } from "react-redux";

export class ShoppingDetailPage extends Component {
  componentDidMount() {
    this.props.getShoppingListitemDetail(this.props.match.params.itemid);
  }
  render() {
    return (
      <div>
        <ShoppingDetail itemdetail={this.props.itemdetail} />
      </div>
    );
  }
}

const mapstatetoprops = (storteData) => {
  return {
    itemdetail: storteData.shoppingState.itemDetail,
  };
};

export default connect(mapstatetoprops, {
  getShoppingListitemDetail: getShoppingListitemDetail,
})(ShoppingDetailPage);
