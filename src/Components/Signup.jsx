import React, { Component } from "react";
import "../CSS/LoginForm.css";
import Logo from "../images/foodbg.jpg";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import { userSignup } from "../redux/actions/userActions";
import { connect } from "react-redux";

export class Signup extends Component {
  state = {
    userName: "",
    email: "",
  };
  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleClick = () => {
    this.props.userSignup({
      username: this.state.userName,
      email: this.state.email,
    });
    this.setState({ userName: "", email: "" });
  };

  render() {
    return (
      <div className="loginForm">
        <div className="loginForm-card">
          <div className="login-image">
            <img src={Logo} alt="" />
          </div>
          <div className="login-info">
            <form>
              <h1>Sign Up</h1>
              <p>Get your shopping list, meal plans and much more</p>
              <input
                onChange={this.handleInput}
                type="text"
                name="userName"
                placeholder="Your Full Name"
                value={this.state.userName}
              />
              <br />
              <input
                onChange={this.handleInput}
                type="email"
                name="email"
                placeholder="Your E-mail"
                value={this.state.email}
              />
              <br />
              <Button onClick={this.handleClick} size="lg" color="warning">
                Get credentials
              </Button>{" "}
              <p>
                Have credentials?{" "}
                <Link style={{ textDecorationLine: "none" }} to="/login">
                  Login now
                </Link>{" "}
              </p>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { userSignup: userSignup })(Signup);
