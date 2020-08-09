import React, { Component } from "react";
import Input from "./Input";
import "../CSS/LoginForm.css";
import Logo from "../images/foodbg.jpg";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

export class Signup extends Component {
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
              <Input
                type="text"
                name="username"
                placeholder="Your Full Name"
                value=""
              />
              <br />
              <Input
                type="email"
                name="email"
                placeholder="Your E-mail"
                value=""
              />
              <br />
              <Button size="lg" color="warning">
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

export default Signup;
