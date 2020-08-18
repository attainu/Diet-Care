import React, { Component } from "react";
import "../CSS/Sidebar.css";
import { connect } from "react-redux";
import {
  fetchRecipesbyDiet,
  fetchRecipesbyCalorie,
  fetchRecipesbyIntolerances,
  fetchRecipesbymaxreadyTime,
  fetchRecipesbyNutrients,
} from "../redux/actions/recipeAction";
export class Sidebar extends Component {
  state = {
    diet: false,
    intolerance: false,
    nutrients: false,
    readytime: false,
    calorie: false,
    carbohydrates: false,
    protein: false,
    fat: false,
    mincalorie: "",
    intolerances: [],
    minProtein: "",
    maxProtein: "",
    minCarbs: "",
    maxCarbs: "",
    minFat: "",
    maxFat: "",
  };
  handleClickdiet = () => {
    this.setState({ diet: !this.state.diet });
  };
  handleClickintolerances = () => {
    this.setState({ intolerance: !this.state.intolerance });
  };
  handleClicknutrients = () => {
    this.setState({ nutrients: !this.state.nutrients });
  };
  handleclickreadytime = () => {
    this.setState({ readytime: !this.state.readytime });
  };
  handleclickCalorie = () => {
    this.setState({ calorie: !this.state.calorie });
  };
  handlecarbohydrates = () => {
    this.setState({ carbohydrates: !this.state.carbohydrates });
  };
  handleclickprotein = () => {
    this.setState({ protein: !this.state.protein });
  };
  handleclickfat = () => {
    this.setState({ fat: !this.state.fat });
  };
  handlevegeterian = () => {
    this.props.fetchRecipesbyDiet(this.props.searchValue, "vegetarian");
  };
  handlelactovegeterian = () => {
    this.props.fetchRecipesbyDiet(this.props.searchValue, "lacto-vegetarian");
  };

  handleglutinfree = () => {
    this.props.fetchRecipesbyDiet(this.props.searchValue, "gluten+free");
  };
  handleketogenic = () => {
    this.props.fetchRecipesbyDiet(this.props.searchValue, "ketogenic");
  };
  handleovovegeterian = () => {
    this.props.fetchRecipesbyDiet(this.props.searchValue, "ovo-vegetarian");
  };
  handlevegan = () => {
    this.props.fetchRecipesbyDiet(this.props.searchValue, "vegan");
  };
  handlepesceterian = () => {
    this.props.fetchRecipesbyDiet(this.props.searchValue, "pescetarian");
  };
  handlepaleo = () => {
    this.props.fetchRecipesbyDiet(this.props.searchValue, "paleo");
  };
  handleprimal = () => {
    this.props.fetchRecipesbyDiet(this.props.searchValue, "primal");
  };
  handlewhole30 = () => {
    this.props.fetchRecipesbyDiet(this.props.searchValue, "whole30");
  };
  handleChangemincalorie = (e) => {
    this.setState({ mincalorie: e.target.value });
  };
  handleChangemaxcalorie = (e) => {
    this.props.fetchRecipesbyCalorie(
      this.props.searchValue,
      this.state.mincalorie,
      e.target.value
    );
  };

  handleintolerancechange = (e) => {
    this.setState(
      {
        intolerances: [...this.state.intolerances, e.target.value],
      },
      () => {
        this.props.fetchRecipesbyIntolerances(
          this.props.searchValue,
          this.state.intolerances
        );
      }
    );
  };

  hadlemaxreadytime = (e) => {
    console.log(e.target.value);
    this.props.fetchRecipesbymaxreadyTime(
      this.props.searchValue,
      e.target.value
    );
  };
  handlenutrientsChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleclickNutrients = () => {
    const {
      minCarbs,
      maxCarbs,
      minProtein,
      maxProtein,
      minFat,
      maxFat,
    } = this.state;
    this.props.fetchRecipesbyNutrients(
      this.props.searchValue,
      minProtein,
      maxProtein,
      minCarbs,
      maxCarbs,
      minFat,
      maxFat
    );
  };

  render() {
    return (
      <div className="dietcare-sidebar">
        <ul className="sidebar-ul">
          <li onClick={this.handleClickdiet}>
            Diet
            {!this.state.diet ? (
              <i class="fas fa-chevron-down"></i>
            ) : (
              <i class="fas fa-chevron-up"></i>
            )}
          </li>
          {this.state.diet ? (
            <div className="dropdown-options">
              <ul>
                <li onClick={this.handlevegeterian}>Vegetarian</li>
                <li onClick={this.handlelactovegeterian}>Lacto-Vegetarian</li>
                <li onClick={this.handleglutinfree}>Gluten Free</li>
                <li onClick={this.handleketogenic}>Ketogenic</li>
                <li onClick={this.handleovovegeterian}>Ovo-Vegetarian</li>
                <li onClick={this.handlevegan}>Vegan</li>
                <li onClick={this.handlepesceterian}>Pescetarian</li>
                <li onClick={this.handlepaleo}>Paleo</li>
                <li onClick={this.handleprimal}>Primal</li>
                <li onClick={this.handlewhole30}>Whole30</li>
              </ul>
            </div>
          ) : null}

          <li onClick={this.handleclickCalorie}>
            Calorie
            {!this.state.calorie ? (
              <i class="fas fa-chevron-down"></i>
            ) : (
              <i class="fas fa-chevron-up"></i>
            )}
          </li>
          {this.state.calorie ? (
            <div className="dropdown-options">
              <ul>
                <li>
                  KCal:
                  <select
                    name="min-calorie"
                    onChange={this.handleChangemincalorie}
                    style={{ marginLeft: "5px", marginRight: "5px" }}
                  >
                    <option disabled>Min</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                    <option value="150">150</option>
                  </select>
                  to
                  <select
                    name="max-calorie"
                    onChange={this.handleChangemaxcalorie}
                    style={{ marginLeft: "5px" }}
                  >
                    <option disabled>Max</option>
                    <option value="600">600</option>
                    <option value="700">700</option>
                    <option value="800">800</option>
                  </select>
                </li>
              </ul>
            </div>
          ) : null}
          <li onClick={this.handleClickintolerances}>
            Intolerance
            {!this.state.intolerance ? (
              <i class="fas fa-chevron-down"></i>
            ) : (
              <i class="fas fa-chevron-up"></i>
            )}
          </li>
          {this.state.intolerance ? (
            <div className="dropdown-options">
              <ul>
                <li>
                  <input
                    onChange={this.handleintolerancechange}
                    type="checkbox"
                    name="dairy"
                    value="dairy"
                  />
                  <label
                    style={{ marginBottom: "0px", paddingLeft: "5px" }}
                    for="vehicle1"
                  >
                    Dairy
                  </label>
                </li>

                <li>
                  <input
                    onChange={this.handleintolerancechange}
                    type="checkbox"
                    name="dairy"
                    value="egg"
                  />
                  <label
                    style={{ marginBottom: "0px", paddingLeft: "5px" }}
                    for="vehicle1"
                  >
                    Egg
                  </label>
                </li>
                <li>
                  <input
                    onChange={this.handleintolerancechange}
                    type="checkbox"
                    name="dairy"
                    value="gluten"
                  />
                  <label
                    style={{ marginBottom: "0px", paddingLeft: "5px" }}
                    for="vehicle1"
                  >
                    Gluten
                  </label>
                </li>
                <li>
                  <input
                    onChange={this.handleintolerancechange}
                    type="checkbox"
                    name="dairy"
                    value="grain"
                  />
                  <label
                    style={{ marginBottom: "0px", paddingLeft: "5px" }}
                    for="vehicle1"
                  >
                    Grain
                  </label>
                </li>
                <li>
                  <input
                    onChange={this.handleintolerancechange}
                    type="checkbox"
                    name="dairy"
                    value="peanut"
                  />
                  <label
                    style={{ marginBottom: "0px", paddingLeft: "5px" }}
                    for="vehicle1"
                  >
                    Peanut
                  </label>
                </li>
                <li>
                  <input
                    onChange={this.handleintolerancechange}
                    type="checkbox"
                    name="dairy"
                    value="seafood"
                  />
                  <label
                    style={{ marginBottom: "0px", paddingLeft: "5px" }}
                    for="vehicle1"
                  >
                    Seafood
                  </label>
                </li>
                <li>
                  <input
                    onChange={this.handleintolerancechange}
                    type="checkbox"
                    name="dairy"
                    value="sesame"
                  />
                  <label
                    style={{ marginBottom: "0px", paddingLeft: "5px" }}
                    for="vehicle1"
                  >
                    Sesame
                  </label>
                </li>
                <li>
                  <input
                    onChange={this.handleintolerancechange}
                    type="checkbox"
                    name="dairy"
                    value="shellfish"
                  />
                  <label
                    style={{ marginBottom: "0px", paddingLeft: "5px" }}
                    for="vehicle1"
                  >
                    Shellfish
                  </label>
                </li>
                <li>
                  <input
                    onChange={this.handleintolerancechange}
                    type="checkbox"
                    name="dairy"
                    value="soy"
                  />
                  <label
                    style={{ marginBottom: "0px", paddingLeft: "5px" }}
                    for="vehicle1"
                  >
                    Soy
                  </label>
                </li>
                <li>
                  <input
                    onChange={this.handleintolerancechange}
                    type="checkbox"
                    name="dairy"
                    value="sulfite"
                  />
                  <label
                    style={{ marginBottom: "0px", paddingLeft: "5px" }}
                    for="vehicle1"
                  >
                    Sulfite
                  </label>
                </li>
                <li>
                  <input
                    onChange={this.handleintolerancechange}
                    type="checkbox"
                    name="dairy"
                    value="wheat"
                  />
                  <label
                    style={{ marginBottom: "0px", paddingLeft: "5px" }}
                    for="vehicle1"
                  >
                    Wheat
                  </label>
                </li>
              </ul>
            </div>
          ) : null}
          <li onClick={this.handleClicknutrients}>
            Nutrients
            {!this.state.nutrients ? (
              <i class="fas fa-chevron-down"></i>
            ) : (
              <i class="fas fa-chevron-up"></i>
            )}
          </li>
          {this.state.nutrients ? (
            <div className="dropdown-options">
              <ul>
                <li onClick={this.handlecarbohydrates}>
                  Carbohydrates
                  {!this.state.carbohydrates ? (
                    <i
                      style={{ paddingLeft: "8px" }}
                      class="fas fa-chevron-down"
                    ></i>
                  ) : (
                    <i
                      style={{ paddingLeft: "8px" }}
                      class="fas fa-chevron-up"
                    ></i>
                  )}
                </li>
                {this.state.carbohydrates ? (
                  <div className="dropdown-options">
                    <ul>
                      <li>
                        Gms:
                        <select
                          onChange={this.handlenutrientsChange}
                          name="minCarbs"
                          style={{ marginLeft: "5px", marginRight: "5px" }}
                        >
                          <option disabled>Min</option>
                          <option value="10">10</option>
                          <option value="20">20</option>
                          <option value="30">30</option>
                        </select>
                        to
                        <select
                          onChange={this.handlenutrientsChange}
                          name="maxCarbs"
                          style={{ marginLeft: "5px" }}
                        >
                          <option disabled>Max</option>
                          <option value="80">80</option>
                          <option value="90">90</option>
                          <option value="100">100</option>
                        </select>
                      </li>
                    </ul>
                  </div>
                ) : null}
                <li onClick={this.handleclickprotein}>
                  Protein{" "}
                  {!this.state.protein ? (
                    <i
                      style={{ paddingLeft: "8px" }}
                      class="fas fa-chevron-down"
                    ></i>
                  ) : (
                    <i
                      style={{ paddingLeft: "8px" }}
                      class="fas fa-chevron-up"
                    ></i>
                  )}
                </li>
                {this.state.protein ? (
                  <div className="dropdown-options">
                    <ul>
                      <li>
                        Gms:
                        <select
                          onChange={this.handlenutrientsChange}
                          name="minProtein"
                          style={{ marginLeft: "5px", marginRight: "5px" }}
                        >
                          <option disabled>Min</option>
                          <option value="10">10</option>
                          <option value="20">20</option>
                          <option value="30">30</option>
                        </select>
                        to
                        <select
                          onChange={this.handlenutrientsChange}
                          name="maxProtein"
                          style={{ marginLeft: "5px" }}
                        >
                          <option disabled>Max</option>
                          <option value="80">80</option>
                          <option value="90">90</option>
                          <option value="100">100</option>
                        </select>
                      </li>
                    </ul>
                  </div>
                ) : null}
                <li onClick={this.handleclickfat}>
                  Fat
                  {!this.state.fat ? (
                    <i
                      style={{ paddingLeft: "8px" }}
                      class="fas fa-chevron-down"
                    ></i>
                  ) : (
                    <i
                      style={{ paddingLeft: "8px" }}
                      class="fas fa-chevron-up"
                    ></i>
                  )}
                </li>
                {this.state.fat ? (
                  <div className="dropdown-options">
                    <ul>
                      <li>
                        Gms:
                        <select
                          onChange={this.handlenutrientsChange}
                          name="minFat"
                          style={{ marginLeft: "5px", marginRight: "5px" }}
                        >
                          <option disabled>Min</option>
                          <option value="10">10</option>
                          <option value="20">20</option>
                          <option value="30">30</option>
                        </select>
                        to
                        <select
                          onChange={this.handlenutrientsChange}
                          name="maxFat"
                          style={{ marginLeft: "5px" }}
                        >
                          <option disabled>Max</option>
                          <option value="80">80</option>
                          <option value="90">90</option>
                          <option value="100">100</option>
                        </select>
                      </li>
                    </ul>
                  </div>
                ) : null}
              </ul>
              <button
                onClick={this.handleclickNutrients}
                style={{
                  backgroundColor: "#C2C2C2",
                  color: "white",
                  fontSize: "14px",
                  border: "0.5px solid black",
                  borderRadius: "5px",
                  padding: "2px 15px",
                  marginLeft: "10px",
                  marginBottom: "10px",
                  marginTop: "10px",
                }}
              >
                Get
              </button>
            </div>
          ) : null}
          <li onClick={this.handleclickreadytime}>
            Max Ready Time
            {!this.state.readytime ? (
              <i class="fas fa-chevron-down"></i>
            ) : (
              <i class="fas fa-chevron-up"></i>
            )}
          </li>
          {this.state.readytime ? (
            <div className="dropdown-options">
              <ul>
                <li>
                  Minutes:
                  <select
                    onChange={this.hadlemaxreadytime}
                    name="max-time"
                    style={{ marginLeft: "5px" }}
                  >
                    <option disabled>Max</option>
                    <option value="20">20</option>
                    <option value="30">30</option>
                    <option value="40">40</option>
                    <option value="50">50</option>
                    <option value="60">60</option>
                  </select>
                </li>
              </ul>
            </div>
          ) : null}
        </ul>
      </div>
    );
  }
}
const mapStatetoProps = (storedata) => {
  return {
    searchValue: storedata.recipesState.searchValue,
  };
};

export default connect(mapStatetoProps, {
  fetchRecipesbyDiet: fetchRecipesbyDiet,
  fetchRecipesbyCalorie: fetchRecipesbyCalorie,
  fetchRecipesbyIntolerances: fetchRecipesbyIntolerances,
  fetchRecipesbymaxreadyTime: fetchRecipesbymaxreadyTime,
  fetchRecipesbyNutrients: fetchRecipesbyNutrients,
})(Sidebar);
