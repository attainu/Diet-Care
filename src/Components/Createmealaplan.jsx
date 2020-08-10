import React, { Component } from "react";
import "../CSS/Createmealplan.css";

export class Createmealaplan extends Component {
  state = {
    creatempstate: false,
  };

  handleclickchoose = () => {
    this.setState({ creatempstate: !this.state.creatempstate });
  };
  render() {
    return (
      <div className="create_mealplan">
        <ul className="createmeal_card">
          <li onClick={this.handleclickchoose} className="template_input">
            Choose a template{" "}
            {this.state.creatempstate ? (
              <i class="fas fa-chevron-up"></i>
            ) : (
              <i class="fas fa-chevron-down"></i>
            )}
            {this.state.creatempstate ? (
              <ul className="template_popup">
                <li>Busy Work Week</li>
                <li>Busy Work Week</li>
                <li>Busy Work Week</li>
                <li>Busy Work Week</li>
                <li>Busy Work Week</li>
              </ul>
            ) : null}
          </li>

          <li>
            <h3>Choose Date:</h3>
            <li>
              <input type="date" name="date" id="date" />
            </li>
          </li>

          <button>Create Meal</button>
        </ul>
        <img
          src="https://images.pexels.com/photos/1128678/pexels-photo-1128678.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="food image"
        />
      </div>
    );
  }
}

export default Createmealaplan;
