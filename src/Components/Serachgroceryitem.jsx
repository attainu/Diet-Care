import React, { Component } from "react";

export class Serachgroceryitem extends Component {
  render() {
    return (
      <form className="input-group" style={{ width: "40%", outline: "none" }}>
        <input
          style={{ outline: "none" }}
          type="text"
          className="form-control"
          placeholder="Search grocery item..."
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
        />
        <div className="input-group-append">
          <button
            style={{ background: "#C2C2C2", color: "white" }}
            className="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
          >
            Search
          </button>
        </div>

        {/* <ul>
          <li>Butter</li>
          <li>Butter</li>
          <li>Butter</li>
          <li>Butter</li>
        </ul> */}
      </form>
    );
  }
}

export default Serachgroceryitem;
