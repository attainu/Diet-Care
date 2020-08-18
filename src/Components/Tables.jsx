import React, { Component } from "react";
import { Table } from "reactstrap";
import {
  getShoppingList,
  deleteShoppingList,
} from "../redux/actions/shoppingActon";
import { connect } from "react-redux";

export class Tables extends Component {
  componentDidMount() {
    this.props.getShoppingList(this.props.userData);
  }

  handleClick = async (e) => {
    await this.props.deleteShoppingList(
      this.props.userData,
      e.target.dataset.id
    );
    await this.props.getShoppingList(this.props.userData);
  };
  render() {
    return (
      <div className="container-fluid section-2">
        <div className="row justify-content-md-center">
          <div className="col-lg-12">
            <Table striped>
              <thead>
                <tr>
                  <th>Products</th>
                  <th>Rs.</th>
                </tr>
              </thead>
              <tbody>
                {!this.props.groceryItems
                  ? null
                  : this.props.groceryItems.aisles.map((element) => {
                      return (
                        <tr>
                          <td>{element.items[0].name}</td>
                          <td>{element.items[0].cost}</td>
                          <button
                            data-id={element.items[0].id}
                            onClick={this.handleClick}
                          >
                            Delete
                          </button>
                        </tr>
                      );
                    })}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    );
  }
}

const mapStatetoprops = (storeData) => {
  return {
    groceryItems: storeData.shoppingState.shoppingListItems,
    userData: storeData.userState.user,
  };
};

export default connect(mapStatetoprops, {
  getShoppingList: getShoppingList,
  deleteShoppingList: deleteShoppingList,
})(Tables);
