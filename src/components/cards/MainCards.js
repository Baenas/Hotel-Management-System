import React, { Component } from "react";

class MainCards extends Component {
  render() {
    return (
      <div className="main-cards">

        <div className="main-cards-text ">
          <span>{this.props.title}</span>
        </div>
        <div className="main-cards-text">
          <span
            className="iconify"
            data-icon={this.props.img}
            data-inline="true"
            data-width={this.props.size}
            data-height={this.props.size}
          ></span>
        </div>
        <div className="main-cards-bot">
          <span>{this.props.bot}</span>
        </div>

      </div>
    );
  }
}

export default MainCards;
