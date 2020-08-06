import React, { Component } from "react";
import "../CSS/Sidebar.css";
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

  render() {
    return (
      <div className="dietcare-sidebar">
        <ul className="sidebar-ul">
          <li onClick={this.handleClickdiet}>
            Diet<i class="fas fa-chevron-down"></i>
          </li>
          {this.state.diet ? (
            <div className="dropdown-options">
              <ul>
                <li>Vegetarian</li>
                <li>Non Vegeterian</li>
              </ul>
            </div>
          ) : null}

          <li onClick={this.handleclickCalorie}>
            Calorie<i class="fas fa-chevron-down"></i>
          </li>
          {this.state.calorie ? (
            <div className="dropdown-options">
              <ul>
                <li>
                  KCal:
                  <select
                    name="min-calorie"
                    style={{ marginLeft: "5px", marginRight: "5px" }}
                  >
                    <option selected="true">Min</option>
                    <option value="saab">100</option>
                    <option value="opel">200</option>
                    <option value="audi">300</option>
                  </select>
                  to
                  <select name="max-calorie" style={{ marginLeft: "5px" }}>
                    <option selected="true">Max</option>
                    <option value="saab">900</option>
                    <option value="opel">1000</option>
                    <option value="audi">3000</option>
                  </select>
                </li>
              </ul>
            </div>
          ) : null}
          <li onClick={this.handleClickintolerances}>
            Intolerance<i class="fas fa-chevron-down"></i>
          </li>
          {this.state.intolerance ? (
            <div className="dropdown-options">
              <ul>
                <li>
                  <input type="checkbox" name="dairy" value="dairy" />
                  <label
                    style={{ marginBottom: "0px", paddingLeft: "5px" }}
                    for="vehicle1"
                  >
                    Dairy
                  </label>
                </li>

                <li>
                  <input type="checkbox" name="dairy" value="dairy" />
                  <label
                    style={{ marginBottom: "0px", paddingLeft: "5px" }}
                    for="vehicle1"
                  >
                    Egg
                  </label>
                </li>
                <li>
                  <input type="checkbox" name="dairy" value="dairy" />
                  <label
                    style={{ marginBottom: "0px", paddingLeft: "5px" }}
                    for="vehicle1"
                  >
                    Gluten
                  </label>
                </li>
                <li>
                  <input type="checkbox" name="dairy" value="dairy" />
                  <label
                    style={{ marginBottom: "0px", paddingLeft: "5px" }}
                    for="vehicle1"
                  >
                    Grain
                  </label>
                </li>
                <li>
                  <input type="checkbox" name="dairy" value="dairy" />
                  <label
                    style={{ marginBottom: "0px", paddingLeft: "5px" }}
                    for="vehicle1"
                  >
                    Peanut
                  </label>
                </li>
                <li>
                  <input type="checkbox" name="dairy" value="dairy" />
                  <label
                    style={{ marginBottom: "0px", paddingLeft: "5px" }}
                    for="vehicle1"
                  >
                    Seafood
                  </label>
                </li>
                <li>
                  <input type="checkbox" name="dairy" value="dairy" />
                  <label
                    style={{ marginBottom: "0px", paddingLeft: "5px" }}
                    for="vehicle1"
                  >
                    Sesame
                  </label>
                </li>
                <li>
                  <input type="checkbox" name="dairy" value="dairy" />
                  <label
                    style={{ marginBottom: "0px", paddingLeft: "5px" }}
                    for="vehicle1"
                  >
                    Shellfish
                  </label>
                </li>
                <li>
                  <input type="checkbox" name="dairy" value="dairy" />
                  <label
                    style={{ marginBottom: "0px", paddingLeft: "5px" }}
                    for="vehicle1"
                  >
                    Soy
                  </label>
                </li>
                <li>
                  <input type="checkbox" name="dairy" value="dairy" />
                  <label
                    style={{ marginBottom: "0px", paddingLeft: "5px" }}
                    for="vehicle1"
                  >
                    Sulfite
                  </label>
                </li>
                <li>
                  <input type="checkbox" name="dairy" value="dairy" />
                  <label
                    style={{ marginBottom: "0px", paddingLeft: "5px" }}
                    for="vehicle1"
                  >
                    Tree Nut
                  </label>
                </li>
                <li>
                  <input type="checkbox" name="dairy" value="dairy" />
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
            Nutrients<i class="fas fa-chevron-down"></i>
          </li>
          {this.state.nutrients ? (
            <div className="dropdown-options">
              <ul>
                <li onClick={this.handlecarbohydrates}>
                  Carbohydrates
                  <i
                    style={{ paddingLeft: "8px" }}
                    class="fas fa-chevron-down"
                  ></i>
                </li>
                {this.state.carbohydrates ? (
                  <div className="dropdown-options">
                    <ul>
                      <li>
                        Gms:
                        <select
                          name="min-carbohydrates"
                          style={{ marginLeft: "5px", marginRight: "5px" }}
                        >
                          <option selected="true">Min</option>
                          <option value="saab">100</option>
                          <option value="opel">200</option>
                          <option value="audi">300</option>
                        </select>
                        to
                        <select
                          name="max-carbohydrates"
                          style={{ marginLeft: "5px" }}
                        >
                          <option selected="true">Max</option>
                          <option value="saab">900</option>
                          <option value="opel">1000</option>
                          <option value="audi">3000</option>
                        </select>
                      </li>
                    </ul>
                  </div>
                ) : null}
                <li onClick={this.handleclickprotein}>
                  Protein{" "}
                  <i
                    style={{ paddingLeft: "8px" }}
                    class="fas fa-chevron-down"
                  ></i>
                </li>
                {this.state.protein ? (
                  <div className="dropdown-options">
                    <ul>
                      <li>
                        Gms:
                        <select
                          name="min-carbohydrates"
                          style={{ marginLeft: "5px", marginRight: "5px" }}
                        >
                          <option selected="true">Min</option>
                          <option value="saab">100</option>
                          <option value="opel">200</option>
                          <option value="audi">300</option>
                        </select>
                        to
                        <select
                          name="max-carbohydrates"
                          style={{ marginLeft: "5px" }}
                        >
                          <option selected="true">Max</option>
                          <option value="saab">900</option>
                          <option value="opel">1000</option>
                          <option value="audi">3000</option>
                        </select>
                      </li>
                    </ul>
                  </div>
                ) : null}
                <li onClick={this.handleclickfat}>
                  Fat{" "}
                  <i
                    style={{ paddingLeft: "8px" }}
                    class="fas fa-chevron-down"
                  ></i>
                </li>
                {this.state.fat ? (
                  <div className="dropdown-options">
                    <ul>
                      <li>
                        Gms:
                        <select
                          name="min-carbohydrates"
                          style={{ marginLeft: "5px", marginRight: "5px" }}
                        >
                          <option selected="true">Min</option>
                          <option value="saab">100</option>
                          <option value="opel">200</option>
                          <option value="audi">300</option>
                        </select>
                        to
                        <select
                          name="max-carbohydrates"
                          style={{ marginLeft: "5px" }}
                        >
                          <option selected="true">Max</option>
                          <option value="saab">900</option>
                          <option value="opel">1000</option>
                          <option value="audi">3000</option>
                        </select>
                      </li>
                    </ul>
                  </div>
                ) : null}
              </ul>
            </div>
          ) : null}
          <li onClick={this.handleclickreadytime}>
            Ready Time<i class="fas fa-chevron-down"></i>
          </li>
          {this.state.readytime ? (
            <div className="dropdown-options">
              <ul>
                <li>
                  Minutes:
                  <select
                    name="min-time"
                    style={{ marginLeft: "5px", marginRight: "5px" }}
                  >
                    <option selected="true">Min</option>
                    <option value="saab">100</option>
                    <option value="opel">200</option>
                    <option value="audi">300</option>
                  </select>
                  to
                  <select name="max-time" style={{ marginLeft: "5px" }}>
                    <option selected="true">Max</option>
                    <option value="saab">900</option>
                    <option value="opel">1000</option>
                    <option value="audi">3000</option>
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

export default Sidebar;
