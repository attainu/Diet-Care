import React, { Component } from "react";
// import logo from "../images/bg-grocery.jpg";
import {
  fetchGroceryProducts,
  fetchGroceryProductsSuggestions,
} from "../redux/actions/groceryActions";
import { connect } from "react-redux";
import "../CSS/Searchgroceryitem.css";
export class Serachgroceryitem extends Component {
  state = {
    searchQuery: "",
    suggestionState: true,
  };
  handleblur = () => {
    this.setState({ suggestionState: !this.state.suggestionState });
  };
  handleChange = (event) => {
    this.setState({ searchQuery: event.target.value }, () => {
      this.props.fetchGroceryProductsSuggestions(this.state.searchQuery);
    });
    this.setState({ suggestionState: true });
  };
  handleClick = () => {
    this.props.fetchGroceryProducts(this.state.searchQuery);
  };
  handleClicklist = (e) => {
    this.setState({ searchQuery: e.target.innerText });
    this.setState({ suggestionState: !this.state.suggestionState });
  };
  render() {
    console.log(this.props.suggestionList);

    return (
      <>
        <form className="input-group" style={{ width: "40%", outline: "none" }}>
          <input
            style={{ outline: "none" }}
            type="text"
            className="form-control"
            placeholder="Search grocery item..."
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
            onChange={this.handleChange}
            value={this.state.searchQuery}
          />
          <div className="input-group-append">
            <button
              style={{ background: "black", color: "white" }}
              className="btn btn-outline-secondary"
              type="button"
              id="button-addon2"
              onClick={this.handleClick}
            >
              <ion-icon
                name="search-sharp"
                style={{ fontSize: "1rem" }}
              ></ion-icon>
            </button>
          </div>
          {this.state.suggestionState ? (
            <ul>
              {!this.props.suggestionList
                ? null
                : this.props.suggestionList.results.map((element) => {
                    return (
                      <li key={element.id} onClick={this.handleClicklist}>
                        {element.title}
                      </li>
                    );
                  })}
            </ul>
          ) : null}
        </form>
      </>
    );
  }
}

const mapStatetoprops = (storedata) => {
  return {
    suggestionList: storedata.grocerState.suggestionList,
  };
};

export default connect(mapStatetoprops, {
  fetchGroceryProducts: fetchGroceryProducts,
  fetchGroceryProductsSuggestions: fetchGroceryProductsSuggestions,
})(Serachgroceryitem);
