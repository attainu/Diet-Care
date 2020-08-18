import React, { Component } from "react";
import "../CSS/LoginForm.css";
import Logo from "../images/foodbg.jpg";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import { userLogin } from "../redux/actions/userActions";
import { connect } from "react-redux";
import Navbar from "../Components/Navbar";
import { withRouter } from "react-router-dom";

class Login extends Component {
  state = {
    userName: "",
    hash: "",
  };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleClick = async () => {
    const user = {
      username: this.state.userName,
      hash: this.state.hash,
    };
    this.props.userLogin(user);
    await this.setState({ userName: "", hash: "" });
    this.props.history.push("/");
  };
  render() {
    return (
      <>
        <Navbar />
        <div className="loginForm">
          <div className="loginForm-card">
            <div className="login-image">
              <img src={Logo} alt="" />
            </div>
            <div className="login-info">
              <form>
                <h1>Login</h1>
                <p>Get your shopping list, meal plans and much more</p>
                <input
                  onChange={this.handleChange}
                  type="text"
                  name="userName"
                  placeholder="Enter Username"
                  value={this.state.userName}
                />
                <br />
                <input
                  onChange={this.handleChange}
                  type="password"
                  name="hash"
                  placeholder="Enter your unique hash"
                  value={this.state.hash}
                />
                <br />
                <Button size="lg" color="warning" onClick={this.handleClick}>
                  Login
                </Button>{" "}
                <p>
                  Don't have credentials?{" "}
                  <Link style={{ textDecorationLine: "none" }} to="/signup">
                    Create new credentials
                  </Link>{" "}
                </p>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default connect(null, { userLogin: userLogin })(withRouter(Login));
