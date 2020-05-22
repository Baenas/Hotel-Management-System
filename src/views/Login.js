import React, { Component } from "react";
import apiClient from "../services/loginService";
import cookie from 'react-cookies'

class Login extends Component {
  state = {
    username: "",
    password: "",
    isLoggedIn: false,
    user: "",
  };
  componentDidMount() {
    const { history } = this.props;
    if (cookie.load('currentUser')) {
      history.push("/home");
    }
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const { history } = this.props;
    const { username, password } = this.state;
    if (username && password) {
      apiClient
        .login({ username, password })
        .then(({ data: user }) => {

          this.setState({
            isLoggedIn: true,
            user,
            showError: "Ok",

          });

          if (user.type == "Guest") {
            history.push("/guest");
          }
          cookie.save('currentUser', user, { path: '/' })
          history.push("/home");
        })
        .catch((error) => {
          this.setState({
            showError: "Error",
          });
        });
      this.clearForm();
    } else {
      this.setState({
        showError: "Username or Password empty",
      });
    }
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  clearForm = () => {
    this.setState({
      username: "",
      password: "",
    });
  };

  render() {
    const { username, password, showError } = this.state;
    return (
      <div>
        <div>
          <form className="login-box" onSubmit={this.handleSubmit}>
            <h1 className="login-box-title">Login</h1>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="username"
              value={username}
              onChange={this.handleChange}
              className="login-box-input"
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="password"
              value={password}
              onChange={this.handleChange}
              className="login-box-input"
            />
            <input type="submit" value="submit" className="login-box-submit" />
            <p className="login-box-title">{showError}</p>
          </form>
        </div>
      </div>
    );
  }
}
export default Login;
