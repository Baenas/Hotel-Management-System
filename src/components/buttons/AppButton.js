import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class AppButton extends Component {
  render() {
    return (
      <div className={this.props.style }>
        <Link to={this.props.path}>{this.props.text}</Link>
      </div>
    );
  }
}

export default AppButton;
