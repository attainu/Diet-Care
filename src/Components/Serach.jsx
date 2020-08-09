import React, { Component } from "react";
import {
  fetchRecipes,
  fetchautocompleteRecipes,
  setSearchValue,
} from "../redux/actions/recipeAction";
import { connect } from "react-redux";
import "../CSS/Serach.css";

export class Serach extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchvalue: "",
      suggestionState: true,
    };
  }

  handlechange = (e) => {
    this.setState({ searchvalue: e.target.value });
    this.props.fetchautocompleteRecipes(this.state.searchvalue);
  };
  handleclick = () => {
    this.props.fetchRecipes(this.state.searchvalue);
    this.props.setSearchValue(this.state.searchvalue);
  };
  handleclicklist = (e) => {
    this.setState({ searchvalue: e.target.innerText });
    this.setState({ suggestionState: !this.state.suggestionState });
  };

  render() {
    return (
      <form className="input-group" style={{ width: "40%", outline: "none" }}>
        <input
          value={this.state.searchvalue}
          onChange={this.handlechange}
          style={{ outline: "none" }}
          type="text"
          className="form-control"
          placeholder="Search recipe..."
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
        />
        <div className="input-group-append">
          <button
            onClick={this.handleclick}
            style={{ background: "#C2C2C2", color: "white" }}
            className="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
          >
            Search
          </button>
        </div>
        {this.state.suggestionState ? (
          <ul>
            {!this.props.suggetionList
              ? null
              : this.props.suggetionList.map((element) => {
                  return (
                    <li onClick={this.handleclicklist}>{element.title}</li>
                  );
                })}
          </ul>
        ) : null}
      </form>
    );
  }
}

const mapstatetoprops = (storedata) => {
  return {
    suggetionList: storedata.recipesState.autocompleteRecipes,
  };
};

export default connect(mapstatetoprops, {
  fetchRecipes: fetchRecipes,
  fetchautocompleteRecipes: fetchautocompleteRecipes,
  setSearchValue: setSearchValue,
})(Serach);
