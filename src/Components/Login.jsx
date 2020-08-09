import React, { Component } from "react";
import Input from "./Input";
import "../CSS/LoginForm.css";
import Logo from "../images/foodbg.jpg";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

class Login extends Component {
  render() {
    return (
      <div className="loginForm">
        <div className="loginForm-card">
          <div className="login-image">
            <img src={Logo} alt="" />
          </div>
          <div className="login-info">
            <form>
              <h1>Login</h1>
              <p>Get your shopping list, meal plans and much more</p>
              <Input
                type="text"
                name="username"
                placeholder="Enter Username"
                value=""
              />
              <br />
              <Input
                type="text"
                name="uniqueId"
                placeholder="Enter Unique ID"
                value=""
              />
              <br />
              <Button size="lg" color="warning">Login</Button>{" "}
              <p>
                Don't have credentials?{" "}
                <Link style={{textDecorationLine: "none"}} to="/signup">Create new credentials</Link>{" "}
              </p>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
