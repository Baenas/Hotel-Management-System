import React, { Component } from "react";
class MainBar extends Component {
  render() {
    return (
      <div>
        <nav className="top-main-bar">
        <div className="top-main-bar-time" >
            <span >  13:50 </span>         <span > 03/05/2020</span>  
        </div >
         <div className="top-main-bar-guest" >
            <span >  Guest Name : none</span>  
        </div >
        
        </nav>
      </div>
    );
  }
}

export default MainBar;
