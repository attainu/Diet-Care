import React, { Component } from "react";
import "../CSS/Createmealplan.css";
import {
  fetchMealplantemplates,
  addMealplans,
} from "../redux/actions/mealplansAction";
import { connect } from "react-redux";

export class Createmealaplan extends Component {
  state = {
    creatempstate: false,
    templateId: "",
    date: "",
  };

  componentDidMount() {
    this.props.fetchMealplantemplates();
  }

  handleclickchoose = () => {
    this.setState({ creatempstate: !this.state.creatempstate });
  };
  hadleClicklistitem = (e) => {
    console.log(e.target.dataset.templateid);
    this.setState({ templateId: e.target.dataset.templateid });
  };
  handleChangedate = (e) => {
    console.log(e.target.value);
    this.setState({ date: e.target.value });
  };
  handleClickCreateMeal = () => {
    let myDate = this.state.date;
    myDate = myDate.split("-");
    const newDate = myDate[1] + "/" + myDate[2] + "/" + myDate[0];
    const dateTimestamp = new Date(newDate).getTime();

    const template = {
      mealPlanTemplateId: this.state.templateId,
      startDate: "1589155200",
    };
    console.log(this.props.userData);
    this.props.addMealplans(this.props.userData, template);
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
                {!this.props.mealplanTemplate
                  ? null
                  : this.props.mealplanTemplate.templates
                      .slice(0, 10)
                      .map((element) => {
                        return (
                          <li
                            onClick={this.hadleClicklistitem}
                            data-templateid={element.id}
                            key={element.id}
                          >
                            {element.name}
                          </li>
                        );
                      })}
              </ul>
            ) : null}
          </li>

          <li>
            <h3>Choose Date:</h3>
            <li>
              <input
                // onChange={this.handleChangedate}
                type="date"
                name="date"
                id="date"
              />
            </li>
          </li>

          <button onClick={this.handleClickCreateMeal}>Create Meal</button>
        </ul>
        <img
          src="https://images.pexels.com/photos/1128678/pexels-photo-1128678.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="food "
        />
      </div>
    );
  }
}

const mapStatetoprops = (storeData) => {
  return {
    mealplanTemplate: storeData.mealplansState.mealPlantemplates,
    userData: storeData.userState.user,
  };
};

export default connect(mapStatetoprops, {
  fetchMealplantemplates: fetchMealplantemplates,
  addMealplans: addMealplans,
})(Createmealaplan);
