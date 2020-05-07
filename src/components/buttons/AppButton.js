import React, { Component } from "react";
import {  Link } from "react-router-dom";

class AppButton extends Component {
  render() {
    return (
      <div className={this.props.styl }>
        <Link to={this.props.path}>{this.props.text}</Link>
      </div>
    );
  }
}

export default AppButton;
