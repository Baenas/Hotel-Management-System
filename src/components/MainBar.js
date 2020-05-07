import React, { Component } from "react";
class MainBar extends Component {
  render() {
    return (
      <div>
      
          <div className="navbar">
            <a href="/">Dashboard</a>
            <div className="dropdown">
              <button className="dropbtn">
                Rooms
                <i className="fa fa-caret-down"></i>
              </button>
              <div className="dropdown-content">
                <a href="/rooms">All Rooms</a>
          
              </div>
            </div>
          </div>
       
      </div>
    );
  }
}

export default MainBar;
