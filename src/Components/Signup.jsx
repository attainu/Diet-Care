import React, { Component } from "react";
import "../CSS/LoginForm.css";
import Logo from "../images/foodbg.jpg";
import { Button } from "reactstrap";
import { Link  } from "react-router-dom";
import { userSignup } from "../redux/actions/userActions";
import { connect } from "react-redux";
import Navbar from "../Components/Navbar";
import { withRouter } from "react-router-dom";
export class Signup extends Component {
  state = {
    userName: "",
    email: "",
  };
  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleClick = async () => {
    await this.props.userSignup({
      username: this.state.userName,
      email: this.state.email,
    });
    await this.setState({ userName: "", email: "" });
    alert(`username: ${this.props.userData.username}
    hash: ${this.props.userData.hash}
    Please remember this for future reference`);
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
      </>
    );
  }
}

const mapstatetoprops = (storedata) => {
  return {
    userData: storedata.userState.user,
  };
};

export default connect(mapstatetoprops, { userSignup: userSignup })(
  withRouter(Signup)
);
